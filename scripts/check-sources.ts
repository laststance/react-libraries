import { mkdir, readFile, writeFile } from "node:fs/promises";

const directory = new URL("../migration/sources/", import.meta.url);
await mkdir(directory, { recursive: true });
const entries = JSON.parse(await readFile(new URL("../migration/notion/unique-items.json", import.meta.url), "utf8"));

/** Decodes the small set of HTML entities commonly used in source-page metadata.
 * Called by the source checker to keep saved descriptions readable.
 * @example const text = decode("Forms &amp; validation");
 */
function decode(value: string): string {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#39|#x27|#x([\da-f]+)|#(\d+));/gi, (entity, hex, decimal) => hex || decimal ? String.fromCodePoint(parseInt(hex ?? decimal, hex ? 16 : 10)) : ({ "&amp;": "&", "&quot;": '"', "&apos;": "'", "&#39;": "'", "&#x27;": "'", "&lt;": "<", "&gt;": ">" }[entity.toLowerCase()] ?? entity)).replace(/\s+/g, " ").trim();
}

/** Captures public source metadata for editorial review without executing page scripts.
 * Called once per saved URL; inaccessible sources stay in the migration with an explicit result.
 * @example const result = await inspectSource(entry);
 */
async function inspectSource(entry: any) {
  let requestUrl = entry.url;
  const original = new URL(requestUrl);
  // The npm registry exposes package descriptions without the npm website's browser challenge.
  if (original.hostname.endsWith("npmjs.com") && original.pathname.startsWith("/package/")) {
    requestUrl = `https://registry.npmjs.org/${original.pathname.slice(9)}/latest`;
  }
  try {
    const response = await fetch(requestUrl, { signal: AbortSignal.timeout(12_000), headers: { "User-Agent": "ReactLibraries-Migration/1.0 (public-link-verification)", Accept: "text/html,application/json" } });
    let body = "";
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    // Metadata lives near the start; never download unrelated page assets or unbounded bodies.
    if (reader) {
      while (body.length < 1_500_000) {
        const chunk = await reader.read();
        if (chunk.done) break;
        body += decoder.decode(chunk.value, { stream: true });
        if (body.includes("</head>")) break;
      }
      await reader.cancel();
    }
    const metadata: Record<string, string> = {};
    for (const tag of body.matchAll(/<meta\b[^>]*>/gi)) {
      const attributes = Object.fromEntries([...tag[0].matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((match) => [match[1].toLowerCase(), decode(match[2])]));
      if ((attributes.name || attributes.property) && attributes.content) metadata[attributes.name || attributes.property] = attributes.content;
    }
    let title = metadata["og:title"] || decode(body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
    let description = metadata.description || metadata["og:description"] || "";
    if (requestUrl.startsWith("https://registry.npmjs.org/") && response.ok) {
      const pkg = JSON.parse(body); title = pkg.name; description = pkg.description ?? "";
    }
    // Redirects can carry transient login tokens; retain only the diagnostic host and path.
    const destination = new URL(response.url);
    const finalUrl = `${destination.origin}${destination.pathname}`;
    return { number: entry.number, originalUrl: entry.url, requestUrl, finalUrl, status: response.status, title, description, checkedAt: new Date().toISOString() };
  } catch (error) {
    return { number: entry.number, originalUrl: entry.url, requestUrl, status: null, error: String(error), checkedAt: new Date().toISOString() };
  }
}

const results: any[] = [];
for (let offset = 0; offset < entries.length; offset += 12) {
  const batch = await Promise.all(entries.slice(offset, offset + 12).map(inspectSource));
  for (const result of batch) await writeFile(new URL(`${String(result.number).padStart(3, "0")}.json`, directory), JSON.stringify(result, null, 2) + "\n");
  results.push(...batch);
  console.log(`Checked ${results.length}/${entries.length} saved URLs.`);
}
await writeFile(new URL("../source-checks.json", directory), JSON.stringify(results, null, 2) + "\n");
