import { randomUUID } from "node:crypto";
import { rename, rm, writeFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";
import { parseArgs } from "node:util";
import packageByLibrary from "../content/npm-packages.json" with { type: "json" };

interface DownloadPeriod {
  start: string;
  end: string;
}

const downloadsApi = "https://api.npmjs.org/downloads/point";
const snapshotFile = new URL("../content/npm-downloads.json", import.meta.url);
const utcDayMs = 86_400_000;
const minRequestIntervalMs = 850;
let lastRequest = -Infinity;

function utcDate(date: string): number {
  const time = Date.parse(`${date}T00:00:00Z`);
  if (!Number.isFinite(time) || new Date(time).toISOString().slice(0, 10) !== date) {
    throw new Error(`Expected a UTC date in YYYY-MM-DD format. Received ${date}.`);
  }
  return time;
}

/**
 * Keeps sequential npm requests below the service's rate limit during refresh.
 * @example await fetchPoint("last-week");
 */
async function fetchPoint(path: string): Promise<Response> {
  const url = `${downloadsApi}/${path}`;
  const waitMs = lastRequest + minRequestIntervalMs - performance.now();
  if (waitMs > 0) await delay(waitMs);

  lastRequest = performance.now();
  const response = await fetch(url, { signal: AbortSignal.timeout(15_000) });

  // Cloudflare can send Retry-After: 0 while its rate limit is still active.
  if (response.status === 429 || response.status >= 500) {
    const retryAfterSeconds = Number(response.headers.get("retry-after"));
    const fallbackMs = response.status === 429 ? 60_000 : 1_000;
    const retryMs = Math.max(fallbackMs, Number.isFinite(retryAfterSeconds) ? retryAfterSeconds * 1_000 : 0);
    await response.body?.cancel();
    console.warn(`npm returned HTTP ${response.status}. Retrying in ${Math.ceil(retryMs / 1_000)} seconds.`);
    await delay(retryMs);
    lastRequest = performance.now();
    return fetch(url, { signal: AbortSignal.timeout(15_000) });
  }

  return response;
}

function parsePoint(body: unknown, request: string) {
  if (
    typeof body !== "object" || body === null ||
    !("start" in body) || typeof body.start !== "string" ||
    !("end" in body) || typeof body.end !== "string" ||
    !("downloads" in body) || typeof body.downloads !== "number" ||
    !Number.isSafeInteger(body.downloads) || body.downloads < 0
  ) {
    throw new Error(`Invalid download data from npm for ${request}.`);
  }
  return {
    start: body.start,
    end: body.end,
    downloads: body.downloads,
    package: "package" in body ? body.package : undefined,
  };
}

function parsePackageDownloads(body: unknown, npmPackage: string, period: DownloadPeriod): number {
  const result = parsePoint(body, npmPackage);
  if (result.start !== period.start || result.end !== period.end || result.package !== npmPackage) {
    throw new Error(`npm returned a different package or date range for ${npmPackage}.`);
  }
  return result.downloads;
}

/**
 * Locks the refresh to seven days npm has already published before querying packages.
 * A supplied end date reproduces a past snapshot.
 * @example await getPeriod("2026-11-17");
 */
async function getPeriod(weekEnding: string | undefined): Promise<DownloadPeriod> {
  const response = await fetchPoint("last-week");
  if (!response.ok) throw new Error(`npm rejected the last-week query with HTTP ${response.status}.`);

  const published = parsePoint(await response.json(), "last-week");
  if (utcDate(published.end) - utcDate(published.start) !== 6 * utcDayMs || published.downloads === 0) {
    throw new Error("npm did not report seven published UTC days.");
  }
  if (weekEnding === undefined) return { start: published.start, end: published.end };

  const endTime = utcDate(weekEnding);
  if (endTime > utcDate(published.end)) {
    throw new Error(`npm has published daily counts through ${published.end} UTC.`);
  }
  return {
    start: new Date(endTime - 6 * utcDayMs).toISOString().slice(0, 10),
    end: weekEnding,
  };
}

async function getPackageDownloads(npmPackage: string, period: DownloadPeriod) {
  const response = await fetchPoint(`${period.start}:${period.end}/${encodeURIComponent(npmPackage)}`);

  // A package-specific npm 404 records unavailable stats. Other 404s abort the refresh.
  if (response.status === 404) {
    const body: unknown = await response.json();
    if (typeof body === "object" && body !== null && "error" in body &&
        body.error === `package ${npmPackage} not found`) {
      return null;
    }
  }
  if (!response.ok) throw new Error(`npm returned HTTP ${response.status} for ${npmPackage}.`);
  return parsePackageDownloads(await response.json(), npmPackage, period);
}

/**
 * Uses npm bulk lookup for unscoped packages to reduce calls during refresh.
 * Single requests resolve scoped packages and confirm missing totals.
 * @example await getUnscopedDownloads(["react", "next"], period);
 */
async function getUnscopedDownloads(packages: string[], period: DownloadPeriod) {
  const counts = new Map<string, number | null>();
  // npm bulk requests accept at most 128 unscoped names. Groups of 64 also keep the URL short.
  for (let index = 0; index < packages.length; index += 64) {
    const batch = packages.slice(index, index + 64);
    if (batch.length === 1) {
      const [name] = batch;
      counts.set(name, await getPackageDownloads(name, period));
      continue;
    }

    const query = batch.map(encodeURIComponent).join(",");
    const response = await fetchPoint(`${period.start}:${period.end}/${query}`);
    if (!response.ok) throw new Error(`npm returned HTTP ${response.status} for a bulk query.`);

    const body: unknown = await response.json();
    if (typeof body !== "object" || body === null) throw new Error("Invalid npm bulk response.");
    const points = new Map<string, unknown>(Object.entries(body));
    for (const name of batch) {
      const point = points.get(name);
      counts.set(name, point === null
        ? await getPackageDownloads(name, period)
        : parsePackageDownloads(point, name, period));
    }
  }
  return counts;
}

const { values } = parseArgs({ options: { "week-ending": { type: "string" } } });
const period = await getPeriod(values["week-ending"]);
const packages = [...new Set(Object.values(packageByLibrary))].sort();
const unscoped = packages.filter((name) => !name.startsWith("@"));
const scoped = packages.filter((name) => name.startsWith("@"));

console.log(`Querying npm for ${packages.length} packages from ${period.start} to ${period.end} UTC.`);
const counts = await getUnscopedDownloads(unscoped, period);
for (const name of scoped) {
  counts.set(name, await getPackageDownloads(name, period));
}

const downloads = Object.fromEntries(packages.map((name) => [name, counts.get(name)]));
const unavailable = [...counts.values()].filter((count) => count === null).length;
if (counts.size !== packages.length || unavailable === packages.length) {
  throw new Error("npm returned no complete snapshot.");
}

// Rename from the same directory so readers see either the old or the complete new file.
const temporaryFile = new URL(`${snapshotFile.href}.${randomUUID()}.tmp`);
try {
  await writeFile(temporaryFile, `${JSON.stringify({ period, downloads }, null, 2)}\n`, { flag: "wx" });
  await rename(temporaryFile, snapshotFile);
} finally {
  await rm(temporaryFile, { force: true });
}
console.log(`Refreshed ${packages.length - unavailable} download totals (${unavailable} unavailable).`);
