import assert from "node:assert/strict";
import { test } from "node:test";
import { categories, libraries } from "../content/catalog.ts";
import { downloadPeriod, getRankedLibraries } from "../content/downloads.ts";
import packageByLibrary from "../content/npm-packages.json" with { type: "json" };
import snapshot from "../content/npm-downloads.json" with { type: "json" };

test("every mapped package has a download result for the same seven UTC days", () => {
  // Arrange
  const toTime = (date: string) => Date.parse(`${date}T00:00:00Z`);
  const libraryIds = new Set(libraries.map(({ id }) => id));

  // Act
  const mappedPackages = new Set(Object.values(packageByLibrary));

  // Assert
  assert.equal(toTime(downloadPeriod.end) - toTime(downloadPeriod.start), 518_400_000);
  assert.deepEqual(new Set(Object.keys(snapshot.downloads)), mappedPackages);
  assert.ok(Object.keys(packageByLibrary).every((id) => libraryIds.has(id)));
  for (const count of Object.values(snapshot.downloads)) {
    assert.ok(count === null || (Number.isSafeInteger(count) && count >= 0));
  }
});

test("every category lists its entries by weekly downloads and alphabetizes ties", () => {
  // Arrange
  const byEnglishName = new Intl.Collator("en");
  const packages = new Map(Object.entries(packageByLibrary));
  const totals = new Map(Object.entries(snapshot.downloads));

  for (const category of categories) {
    // Act
    const rows = getRankedLibraries(category.id);

    // Assert
    const expectedIds = libraries.filter((library) => library.category === category.id).map(({ id }) => id);
    assert.deepEqual(rows.map(({ library }) => library.id).sort(), expectedIds.sort());
    for (const { library, npmPackage, downloads } of rows) {
      assert.equal(npmPackage, packages.get(library.id) ?? null);
      assert.equal(downloads, npmPackage === null ? null : totals.get(npmPackage));
    }
    for (let index = 1; index < rows.length; index += 1) {
      const previous = rows[index - 1];
      const current = rows[index];
      if (previous.downloads === current.downloads) {
        assert.ok(byEnglishName.compare(previous.library.name, current.library.name) <= 0);
      } else {
        assert.ok(previous.downloads !== null);
        assert.ok(current.downloads === null || previous.downloads > current.downloads);
      }
    }
  }
});

test("Data fetching ranks all eleven libraries using their published npm packages", () => {
  // Arrange
  const expectedPackages = {
    apisauce: "apisauce",
    axios: "axios",
    "axios-hooks": "axios-hooks",
    "better-fetch": "@better-fetch/fetch",
    ky: "ky",
    "next-safe-action": "next-safe-action",
    redaxios: "redaxios",
    "rtk-query": "@reduxjs/toolkit",
    suspensive: "@suspensive/react",
    swr: "swr",
    "tanstack-query": "@tanstack/react-query",
  };

  // Act
  const rows = getRankedLibraries("data-fetching");

  // Assert
  assert.deepEqual(Object.fromEntries(rows.map(({ library, npmPackage }) => [library.id, npmPackage])), expectedPackages);
  assert.ok(rows.every(({ downloads }) => typeof downloads === "number"));
});

test("community resources remain visible in alphabetical order without npm totals", () => {
  // Arrange
  const names = ["Answer Overflow", "daily.dev", "DEV Community", "HackerNoon", "Hashnode", "Reactiflux", "Showwcase"];

  // Act
  const rows = getRankedLibraries("community");

  // Assert
  assert.deepEqual(rows.map(({ library }) => library.name), names);
  assert.ok(rows.every(({ downloads, npmPackage }) => downloads === null && npmPackage === null));
});
