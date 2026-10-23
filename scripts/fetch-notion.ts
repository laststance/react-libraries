import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";

const root = new URL("../migration/notion/", import.meta.url);
const rootId = "e08f822cf74a4a3aa9f50c2fcb2874a9";
const directory = new URL("blocks/", root);
await mkdir(directory, { recursive: true });

/** Unwraps public Notion record envelopes when the snapshot importer reads a chunk.
 * @example const block = unwrap(record);
 */
function unwrap(record: any): any {
  // Public responses may contain more than one versioned envelope.
  while (record?.value) record = record.value;
  return record;
}

/** Reads a public page chunk for the importer without credentials or workspace writes.
 * @throws When a public request still fails after bounded retries.
 * @example const chunk = await requestChunk(pageId, { stack: [] }, 0);
 */
async function requestChunk(pageId: string, cursor: any, chunkNumber: number) {
  const formattedId = pageId.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5");
  // Retry transient public endpoint failures while respecting rate limits.
  for (let attempt = 0; attempt < 4; attempt++) {
    const response = await fetch("https://laststance.notion.site/api/v3/loadPageChunk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageId: formattedId, limit: 100, cursor, chunkNumber, verticalColumns: false }),
      signal: AbortSignal.timeout(30_000),
    });
    if (response.ok) return response.json();
    if (response.status !== 429 && response.status < 500) throw new Error(`Notion ${pageId}: HTTP ${response.status}`);
    await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
  }
  throw new Error(`Could not retrieve public page ${pageId}`);
}

/** Flattens visible Notion rich text while preserving link targets separately.
 * @example const title = plain(block.properties?.title);
 */
function plain(value: any): string {
  return Array.isArray(value) ? value.map((part) => Array.isArray(part) ? part[0] : "").join("") : "";
}

/** Saves only editorial fields from a public page, including otherwise omitted GitHub embeds.
 * Called for each discovered page; related owner profiles and workspace metadata are excluded.
 * @example const snapshot = await snapshotPage(rootId);
 */
async function snapshotPage(id: string) {
  const records: Record<string, any> = {};
  let cursor: any = { stack: [] };
  let chunkNumber = 0;
  // Exhaust the page cursor before declaring a snapshot complete.
  do {
    const chunk = await requestChunk(id, cursor, chunkNumber++);
    for (const [key, value] of Object.entries(chunk.recordMap?.block ?? {})) records[key.replaceAll("-", "")] = unwrap(value);
    cursor = chunk.cursor ?? { stack: [] };
    if (chunkNumber > 100) throw new Error(`Unexpected pagination on ${id}`);
  } while (cursor.stack?.length);
  const page = records[id];
  if (!page) throw new Error(`Page ${id} missing from public response`);
  const blocks: any[] = [];
  const missing: string[] = [];
  const visited = new Set<string>();

  /** Visits the page's own content tree; child pages are queued as separate snapshots.
   * @example visit(blockId);
   */
  function visit(blockId: string) {
    const key = blockId.replaceAll("-", "");
    if (visited.has(key)) return;
    visited.add(key);
    const block = records[key];
    if (!block) { missing.push(key); return; }
    if (block.alive === false) return;
    const props = block.properties ?? {};
    const format = block.format ?? {};
    const title = plain(props.title) || format.attributes?.find((field: any) => field.id === "title")?.values?.[0] || "";
    const links = (props.title ?? []).flatMap((part: any) => (part[1] ?? []).filter((annotation: any) => annotation[0] === "a").map((annotation: any) => ({ text: part[0], url: annotation[1] })));
    blocks.push({ id: key, type: block.type, title, description: plain(props.description), url: plain(props.link) || plain(props.source) || format.original_url || format.uri || "", links, children: (block.content ?? []).map((child: string) => child.replaceAll("-", "")) });
    // Embedded related profiles are not page content and never enter this traversal.
    if (block.type !== "page" && block.type !== "collection_view_page") for (const child of block.content ?? []) visit(child);
  }
  for (const child of page.content ?? []) visit(child);
  const snapshot = { id, title: plain(page.properties?.title), sourceUrl: `https://laststance.notion.site/${id}`, fetchedAt: new Date().toISOString(), chunks: chunkNumber, cursorExhausted: true, missing, blocks };
  await writeFile(new URL(`${id}.json`, directory), JSON.stringify(snapshot, null, 2) + "\n");
  return snapshot;
}

const seeds = (await readdir(new URL("pages/", root))).filter((name) => name.endsWith(".json")).map((name) => name.slice(0, -5));
const queue = [rootId, ...seeds];
const scheduled = new Set(queue);
const snapshots: any[] = [];
const failures: { id: string; error: string }[] = [];
while (queue.length) {
  const batch = queue.splice(0, 4);
  const results = await Promise.allSettled(batch.map(snapshotPage));
  for (let index = 0; index < results.length; index++) {
    const result = results[index];
    if (result.status === "rejected") { failures.push({ id: batch[index], error: String(result.reason) }); continue; }
    snapshots.push(result.value);
    for (const block of result.value.blocks) {
      if ((block.type === "page" || block.type === "collection_view_page") && !scheduled.has(block.id)) {
        scheduled.add(block.id);
        queue.push(block.id);
      }
    }
  }
  console.log(`Captured ${snapshots.length} public pages; ${queue.length} pending; ${failures.length} failures.`);
}
const report = { rootId, fetchedAt: new Date().toISOString(), pages: snapshots.length, blocks: snapshots.reduce((total, page) => total + page.blocks.length, 0), missingBlocks: snapshots.flatMap((page) => page.missing), failures };
await writeFile(new URL("snapshot-report.json", root), JSON.stringify(report, null, 2) + "\n");
console.log(report);
if (failures.length || report.missingBlocks.length) process.exitCode = 1;
