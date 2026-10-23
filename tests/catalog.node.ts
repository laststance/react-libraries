import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { categories, libraries } from "../content/catalog.ts";

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

test("every entry has English purpose and fit copy plus a valid category and generated detail page", async () => {
  // Arrange
  const routes = JSON.parse(await readFile(new URL("../docs/.generated.json", import.meta.url), "utf8"));
  const categoryIds = new Set<string>(categories.map((category) => category.id));
  // Act / Assert
  assert.equal(categoryIds.size, 59);
  assert.equal(routes.length, 683);
  assert.equal(new Set(libraries.map((entry) => entry.id)).size, 562);
  for (const entry of libraries) {
    assert.ok(categoryIds.has(entry.category), entry.name);
    assert.ok(routes.includes(`${entry.category}/${entry.id}.mdx`), entry.name);
    assert.ok(entry.description.length >= 25 && entry.goodFor.length >= 25, entry.name);
    assert.ok(!/[\u3040-\u30ff\u4e00-\u9fff]/u.test(entry.description + entry.goodFor), entry.name);
    assert.equal(new URL(entry.official).protocol, "https:", entry.name);
  }
});

test("duplicate bookmarks share one overview while unavailable historical sources keep their warning", () => {
  // Arrange
  const commandMenu = libraries.find((entry) => entry.name === "cmdk")!;
  const oldEditor = libraries.find((entry) => entry.id === "react-codejar")!;
  // Act / Assert
  assert.deepEqual(commandMenu.sourceIds, [392, 406]);
  assert.equal(libraries.filter((entry) => entry.name === "cmdk").length, 1);
  assert.equal(oldEditor.sourceStatus, "unavailable");
  assert.match(oldEditor.caveat!, /returned 404/);
  assert.equal(libraries.find((entry) => entry.id === "mui-data-grid")?.sourceIds.length, 0);
});
