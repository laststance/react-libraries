import { test } from "node:test";
import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { categories, libraries, overviewRedirects } from "../content/catalog.ts";

const report = JSON.parse(await readFile(new URL("../migration/report.json", import.meta.url), "utf8"));
const sources = JSON.parse(await readFile(new URL("../migration/notion/items.json", import.meta.url), "utf8"));

test("all 612 original bookmarks remain traceable to a published catalog entry", () => {
  // Arrange
  const entryById = new Map(libraries.map((entry) => [entry.id, entry]));
  const seen = new Set<number>();
  // Act
  for (const mapping of report.mapping) {
    const entry = entryById.get(mapping.entryId);
    assert.ok(entry, `Missing entry for source ${mapping.sourceId}`);
    assert.ok(entry.sourceIds.includes(mapping.sourceId));
    for (const origin of mapping.occurrences) {
      const original = sources.find((source: { number: number }) => source.number === origin.number);
      assert.equal(origin.url, original.url);
      assert.equal(origin.sourceBlock, original.sourceBlock);
      assert.ok(!seen.has(origin.number), `Duplicate source occurrence ${origin.number}`);
      seen.add(origin.number);
    }
  }
  // Assert
  assert.equal(seen.size, 612);
  assert.equal(report.mapping.length, 577);
  assert.equal(libraries.filter((entry) => entry.sourceIds.length).length, 561);
  assert.equal(libraries.length, 562);
  assert.deepEqual(report.omittedOccurrences, []);
});

test("the generated catalog contains category, task, and index pages", async () => {
  // Arrange
  const routes = JSON.parse(await readFile(new URL("../docs/.generated.json", import.meta.url), "utf8"));
  const expectedRoutes = [
    "index.mdx",
    "tasks.mdx",
    "choosing-a-library.mdx",
    ...categories.flatMap((category) => [`${category.id}.mdx`, `tasks/${category.taskId}.mdx`]),
  ].sort();

  // Act
  const files = await readdir(new URL("../docs/", import.meta.url), { recursive: true });

  // Assert
  assert.equal(expectedRoutes.length, 121);
  assert.deepEqual(routes.sort(), expectedRoutes);
  assert.deepEqual(files.filter((file) => file.endsWith(".mdx")).sort(), expectedRoutes);
});

test("all 562 libraries have one category row with a linked name and a short bio", async () => {
  // Arrange
  const categoryIds = new Set<string>(categories.map((category) => category.id));
  const entryById = new Map(libraries.map((entry) => [entry.id, entry]));

  // Act
  const pages = await Promise.all(categories.map(async ({ id }) => ({
    id,
    body: await readFile(new URL(`../docs/${id}.mdx`, import.meta.url), "utf8"),
  })));

  // Assert
  assert.equal(categoryIds.size, 59);
  assert.equal(entryById.size, 562);
  for (const entry of libraries) {
    assert.ok(categoryIds.has(entry.category), entry.name);
    assert.ok(entry.description.length >= 25 && entry.goodFor.length >= 25, entry.name);
    assert.ok(!/[\u3040-\u30ff\u4e00-\u9fff]/u.test(entry.description + entry.goodFor), entry.name);
  }

  const seen = new Set<string>();
  for (const { id, body } of pages) {
    for (const [, row] of body.matchAll(/<li class="library-row">([\s\S]*?)<\/li>/gu)) {
      const heading = row.match(/<h2\b[^>]*\bid="library-([^"]+)"[^>]*>(.*?)<\/h2>/su);
      assert.ok(heading, `Missing library anchor in ${id}`);
      const [, libraryId, name] = heading;
      const entry = entryById.get(libraryId);
      assert.ok(entry, libraryId);
      assert.equal(entry.category, id, entry.name);
      assert.ok(!seen.has(libraryId), `Duplicate row for ${entry.name}`);
      seen.add(libraryId);

      const links = [...row.matchAll(/<a\b[^>]*>/gu)];
      assert.equal(links.length, 1, entry.name);
      const nameLink = name.match(/<a\b[^>]*\bhref="([^"]+)"[^>]*>([^<]*)/u);
      assert.ok(nameLink, `Missing name link for ${entry.name}`);
      assert.equal(nameLink[2], entry.name);
      assert.equal(nameLink[1].replaceAll("&amp;", "&"), entry.official, entry.name);
      assert.equal(new URL(nameLink[1]).protocol, "https:", entry.name);
      assert.match(row, /<p class="library-bio">[^<]+<\/p>/u, entry.name);
    }
  }
  assert.equal(seen.size, 562);
});

test("legacy library URLs permanently redirect to the corresponding category row", () => {
  // Arrange
  const legacy = "/data-fetching/tanstack-query";

  // Act
  const redirect = overviewRedirects.find(({ from }) => from === legacy);

  // Assert
  assert.equal(overviewRedirects.length, 562);
  assert.deepEqual(redirect, { from: legacy, to: "/data-fetching#library-tanstack-query", status: 308 });
});

test("duplicate bookmarks share one row while replaced links keep their migration provenance", () => {
  // Arrange
  const commandMenu = libraries.find((entry) => entry.name === "cmdk")!;
  const oldEditor = libraries.find((entry) => entry.id === "react-codejar")!;
  // Act / Assert
  assert.deepEqual(commandMenu.sourceIds, [392, 406]);
  assert.equal(libraries.filter((entry) => entry.name === "cmdk").length, 1);
  assert.equal(oldEditor.official, "https://www.npmjs.com/package/react-codejar");
  assert.equal(libraries.find((entry) => entry.id === "mui-data-grid")?.sourceIds.length, 0);
});

test("the selected project documentation replaces old URLs without losing the original bookmarks", () => {
  // Arrange
  const calendarHeatmap = libraries.find((entry) => entry.id === "cal-heatmap")!;
  const timeline = libraries.find((entry) => entry.id === "react-chrono")!;
  const tanstackQuery = libraries.find((entry) => entry.id === "tanstack-query")!;

  // Act / Assert
  assert.equal(calendarHeatmap.official, "https://github.com/wa0x6e/cal-heatmap-doc/blob/main/docs/getting-started/quickstart.md");
  assert.equal(timeline.official, "https://github.com/prabhuignoto/react-chrono");
  assert.equal(tanstackQuery.official, "https://tanstack.com/query/latest/docs/framework/react/overview");
  assert.equal(report.mapping.find((entry: { sourceId: number }) => entry.sourceId === 88).sourceUrl, "https://cal-heatmap.com/");
  assert.equal(report.mapping.find((entry: { sourceId: number }) => entry.sourceId === 501).sourceUrl, "https://react-chrono.prabhumurthy.com/");
});
