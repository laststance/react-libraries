import { readFile, writeFile } from "node:fs/promises";

interface Origin { sourcePage: string; sourceBlock: string; sourcePath: string[]; number: number; url: string; }
interface SourceItem { number: number; name: string; url: string; origins: Origin[]; }
interface LinkCheck { number: number; status: number | null; finalUrl?: string; }
interface Correction { number: number; url: string; reason: string; }
interface ImportedLibrary {
  id: string; name: string; monogram: string; category: string; kind: string;
  description: string; goodFor: string; caveat?: string; implementation?: string;
  official: string; keywords: string[]; sourceIds: number[]; references: string[];
  sourceStatus: "available" | "unavailable" | "unconfirmed";
}

/** Reads a committed snapshot for the explicit import; normal builds never contact Notion.
 * @example const items = await json<SourceItem[]>("notion/unique-items.json");
 */
async function json<T>(path: string): Promise<T> {
  return JSON.parse(await readFile(new URL(`../migration/${path}`, import.meta.url), "utf8"));
}

/** Gives new entries readable routes while the importer preserves existing starter routes.
 * @example const route = slug("React Hook Form");
 */
function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Validates editorial rows before the explicit import writes canonical content.
 * @throws If a row has missing or extra fields.
 * @example const rows = await rowsFrom("categories.tsv", 7);
 */
async function rowsFrom(path: string, fields: number): Promise<string[][]> {
  const text = await readFile(new URL(`../migration/${path}`, import.meta.url), "utf8");
  return text.trim().split("\n").map((line, index) => {
    const row = line.split("|");
    if (row.length !== fields || row.some((value) => !value.trim())) throw new Error(`Invalid row ${path}:${index + 1}`);
    return row;
  });
}

const [items, checks, corrections, correctionChecks, seed, snapshot] = await Promise.all([
  json<SourceItem[]>("notion/unique-items.json"), json<LinkCheck[]>("source-checks.json"),
  json<Correction[]>("link-corrections.json"), json<LinkCheck[]>("correction-checks.json"),
  json<{ libraries: ImportedLibrary[]; categories: { id: string; noteTitle: string }[] }>("starter-catalog.json"),
  json<{ pages: number; blocks: number; missingBlocks: unknown[]; failures: unknown[] }>("notion/snapshot-report.json"),
]);
if (snapshot.missingBlocks.length || snapshot.failures.length) throw new Error("Source snapshot is incomplete.");
const categories = (await rowsFrom("categories.tsv", 7)).map(([id, title, group, icon, task, description, note]) => ({
  id, title, group, icon, task, taskId: slug(task), description, note,
  noteTitle: seed.categories.find((entry) => entry.id === id)?.noteTitle ?? "Choose by the job you need to do.",
  taskDescription: description,
}));
const editorial = (await Promise.all(["001-160", "161-320", "321-480", "481-577"].map((range) => rowsFrom(`editorial-${range}.tsv`, 5)))).flat();
const copyById = new Map(editorial.map(([number, name, category, description, goodFor]) => [Number(number), { name, category, description, goodFor }]));
if (copyById.size !== items.length || editorial.length !== items.length) throw new Error("Editorial coverage mismatch.");
const entryByName = new Map<string, ImportedLibrary>();
const mapping: { sourceId: number; entryId: string; sourceUrl: string; occurrences: Origin[] }[] = [];
const kinds: Record<string, string> = {
  learning: "Learning resource", community: "Community", "open-source-apps": "Reference app",
  hosting: "Infrastructure", "ui-kits": "UI toolkit", frameworks: "Framework / starter",
  documentation: "Publishing tool", "api-tools": "API tool", cli: "CLI toolkit", testing: "Testing tool",
  databases: "Data tool", "developer-tools": "Developer tool", analytics: "Analytics tool",
};
const caveats: Record<number, string> = {
  88: "The saved documentation domain redirects to unrelated content. Use the official project repository linked here.",
  501: "The saved documentation domain redirects to unrelated content. Use the official project repository linked here.",
  180: "The original Nexar domain now points elsewhere. This entry links to the author's original reference repository.",
  295: "The Lucia library was deprecated in March 2025. Its current site teaches authentication and session implementation.",
  296: "This entry covers Userfront's authentication tooling. The company homepage now describes a different product; check the original SDK before planning an integration.",
  363: "RedwoodJS and RedwoodSDK have different architecture and deployment assumptions. Follow the documentation for the generation you intend to use.",
  526: "Origin UI is preserved as a legacy collection with limited maintenance. New development continues in coss ui.",
  560: "This entry covers the original browser agent. The Magnitude domain now describes a different inference product.",
};

// Consolidate repeated projects without losing their original source occurrences.
for (const item of items) {
  const copy = copyById.get(item.number);
  if (!copy || !categories.some((category) => category.id === copy.category)) throw new Error(`Missing editorial/category: ${item.number}`);
  const key = copy.name.toLowerCase();
  const correction = corrections.find((entry) => entry.number === item.number);
  const check = (correction ? correctionChecks : checks).find((entry) => entry.number === item.number);
  const status = check?.status === 200 ? "available" : check?.status === 404 ? "unavailable" : "unconfirmed";
  const official = correction?.url ?? item.url;
  const existing = entryByName.get(key);
  if (existing) {
    existing.sourceIds.push(item.number);
    if (!existing.references.includes(official) && existing.official !== official) existing.references.push(official);
    // Prefer a reachable bookmark when the same project was saved more than once.
    if (existing.sourceStatus !== "available" && status === "available") {
      existing.references.push(existing.official);
      existing.official = official;
      existing.sourceStatus = status;
    }
    mapping.push({ sourceId: item.number, entryId: existing.id, sourceUrl: item.url, occurrences: item.origins });
    continue;
  }
  const starter = seed.libraries.find((entry) => entry.name.toLowerCase() === key);
  const entry: ImportedLibrary = {
    id: starter?.id ?? slug(copy.name), ...copy,
    monogram: starter?.monogram ?? copy.name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2),
    kind: starter?.kind ?? kinds[copy.category] ?? "Library / tool",
    ...(starter ? { description: starter.description, goodFor: starter.goodFor, caveat: starter.caveat, implementation: starter.implementation } : {}),
    ...(caveats[item.number] ? { caveat: caveats[item.number] } : {}),
    official: starter?.official ?? official, keywords: starter?.keywords ?? [],
    sourceIds: [item.number], references: [], sourceStatus: status,
  };
  entryByName.set(key, entry);
  mapping.push({ sourceId: item.number, entryId: entry.id, sourceUrl: item.url, occurrences: item.origins });
}
// Retain approved starter entries that were absent from the Notion collection.
for (const starter of seed.libraries) {
  if (!entryByName.has(starter.name.toLowerCase())) entryByName.set(starter.name.toLowerCase(), { ...starter, sourceIds: [], references: [], sourceStatus: "available" });
}
const libraries = [...entryByName.values()].sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
if (new Set(libraries.map((entry) => entry.id)).size !== libraries.length) throw new Error("Duplicate route IDs.");
if (new Set(categories.map((entry) => entry.taskId)).size !== categories.length) throw new Error("Duplicate task routes.");
const occurrences = mapping.flatMap((entry) => entry.occurrences);
if (occurrences.length !== 612 || new Set(occurrences.map((entry) => entry.number)).size !== 612) throw new Error("Source occurrence coverage mismatch.");
for (const entry of libraries) {
  // Keep historical entries visible and distinguish missing sources from blocked requests.
  if (entry.sourceStatus === "unavailable") entry.caveat = [entry.caveat, "The saved project link returned 404 during the October 24, 2026 review. This historical entry is retained for reference; its current availability is unconfirmed."].filter(Boolean).join(" ");
  entry.references = [...new Set(entry.references)].filter((url) => url !== entry.official);
}
await writeFile(new URL("../content/categories.ts", import.meta.url), `// Canonical category copy. Edit here after the one-time import.\nexport const categories = ${JSON.stringify(categories, null, 2)} as const;\n`);
await writeFile(new URL("../content/libraries.ts", import.meta.url), `import type { Library } from "./catalog-types.ts";\n\n// Canonical editorial catalog. Normal builds never overwrite these entries.\nexport const libraries: Library[] = ${JSON.stringify(libraries, null, 2)};\n`);
const report = {
  importedAt: new Date().toISOString(), sourcePages: snapshot.pages, sourceBlocks: snapshot.blocks,
  sourceOccurrences: occurrences.length, uniqueSourceUrls: items.length,
  migratedEntries: libraries.filter((entry) => entry.sourceIds.length).length,
  retainedStarterEntries: libraries.filter((entry) => !entry.sourceIds.length).map((entry) => entry.id),
  totalEntries: libraries.length, categories: categories.length, omittedOccurrences: [],
  unavailableEntries: libraries.filter((entry) => entry.sourceStatus === "unavailable").map((entry) => entry.id),
  unconfirmedEntries: libraries.filter((entry) => entry.sourceStatus === "unconfirmed").map((entry) => entry.id),
  corrections, mapping,
};
await writeFile(new URL("../migration/report.json", import.meta.url), JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ ...report, mapping: `${mapping.length} source URL mappings`, corrections: `${corrections.length} link corrections` }, null, 2));
