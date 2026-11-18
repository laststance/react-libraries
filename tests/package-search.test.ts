import { expect, test } from "@playwright/test";

for (const { packageName, name, href } of [
  { packageName: "next-auth", name: "Auth.js", href: "/auth#library-auth-js" },
  { packageName: "react-datepicker", name: "React Datepicker", href: "/calendars#library-react-datepicker" },
  { packageName: "@tanstack/react-query", name: "TanStack Query", href: "/data-fetching#library-tanstack-query" },
]) {
  test(`searching for ${packageName} opens the ${name} directory row`, async ({ page }) => {
    // Arrange
    await page.goto("/");
    await page.keyboard.press("ControlOrMeta+k");
    const search = page.getByRole("combobox", { name: "Search libraries" });

    // Act
    await search.fill(packageName);
    const selected = page.getByRole("option", { selected: true });
    await expect(selected).toHaveAttribute("href", href);
    await expect(selected).toContainText(name);
    await search.press("Enter");

    // Assert
    await expect(page).toHaveURL(href);
    await expect(page.getByRole("heading", { name, exact: true })).toBeInViewport();
  });
}

test("searching for a shared npm package shows both library rows first", async ({ page }) => {
  // Arrange
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });

  // Act
  await search.fill("@iconify/react");
  const results = page.getByRole("listbox", { name: "Search libraries" });
  const iconify = results.locator('a[href="/icons#library-iconify"]');
  const iconifyReact = results.locator('a[href="/icons#library-iconify-react"]');

  // Assert
  await expect(iconify).toHaveCount(1);
  await expect(iconifyReact).toHaveCount(1);
  const urls = await results.getByRole("option").evaluateAll((rows) =>
    rows.slice(0, 2).map((row) => row.getAttribute("href")).sort(),
  );
  expect(urls).toEqual(["/icons#library-iconify", "/icons#library-iconify-react"]);
});

test("the exact npm name opens Auth.js when Pagefind returns no matching pages", async ({ page }) => {
  // Arrange
  await page.route("**/pagefind/pagefind.js", (route) => route.fulfill({
    contentType: "text/javascript",
    body: "export const createInstance = () => ({ filters: async () => ({}), search: async () => ({ results: [] }) });",
  }));
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });

  // Act
  await search.fill("large dataset");
  await expect(page.getByText("No results found.", { exact: true })).toBeVisible();
  await search.fill("next-auth");
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/auth#library-auth-js");
  await search.press("Enter");

  // Assert
  await expect(page).toHaveURL("/auth#library-auth-js");
  await expect(page.getByRole("heading", { name: "Auth.js", exact: true })).toBeInViewport();
});

test("a rejected Pagefind query shows an error and exact npm names remain available", async ({ page }) => {
  // Arrange
  await page.route("**/pagefind/pagefind.js", (route) => route.fulfill({
    contentType: "text/javascript",
    body: `export const createInstance = () => ({
      filters: async () => ({}),
      search: async () => { throw new Error("Index unavailable"); },
    });`,
  }));
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });

  // Act
  await search.fill("large dataset");

  // Assert
  await expect(page.getByText("Something went wrong. Please try again.", { exact: true })).toBeVisible();
  await search.fill("next-auth");
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/auth#library-auth-js");
});

test("a failed Pagefind fragment leaves results from the other fragments usable", async ({ page }) => {
  // Arrange
  let blockedFragment = false;
  await page.route("**/pagefind/fragment/**", async (route) => {
    if (blockedFragment) {
      await route.continue();
      return;
    }
    blockedFragment = true;
    await route.abort();
  });
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });

  // Act
  await search.fill("large dataset");

  // Assert
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/data-tables");
  expect(blockedFragment).toBe(true);
  await expect(page.getByText("Something went wrong. Please try again.", { exact: true })).not.toBeVisible();
  await search.press("Enter");
  await expect(page).toHaveURL("/data-tables");
});

test("failed Pagefind fragments allow exact npm matches and recover on the next ordinary query", async ({ page }) => {
  // Arrange
  let blockedFragments = 0;
  let connectionRestored = false;
  await page.route("**/pagefind/fragment/**", async (route) => {
    if (connectionRestored) {
      await route.continue();
      return;
    }
    blockedFragments += 1;
    await route.abort();
  });
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });

  // Act
  await search.fill("large dataset");

  // Assert
  await expect(page.getByText("Something went wrong. Please try again.", { exact: true })).toBeVisible();
  expect(blockedFragments).toBeGreaterThan(0);
  await expect(page.getByRole("option")).toHaveCount(0);
  await search.fill("next-auth");
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/auth#library-auth-js");
  connectionRestored = true;
  await search.fill("large dataset");
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/tasks/explore-a-large-dataset");
});

test("exact npm names remain available when the Pagefind module fails to load", async ({ page }) => {
  // Arrange
  await page.route("**/pagefind/pagefind.js", (route) => route.abort());
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });

  // Act
  await search.fill("next-auth");

  // Assert
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/auth#library-auth-js");
  await search.fill("large dataset");
  await expect(page.getByText("Something went wrong. Please try again.", { exact: true })).toBeVisible();
  await search.fill("next-auth");
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/auth#library-auth-js");
});

test("ordinary search recovers after the first Pagefind module request fails", async ({ page }) => {
  // Arrange
  const firstRequest = Promise.withResolvers<void>();
  let moduleRequests = 0;
  await page.route("**/pagefind/pagefind.js", async (route) => {
    moduleRequests += 1;
    if (moduleRequests === 1) {
      await firstRequest.promise;
      await route.abort();
      return;
    }
    await route.continue();
  });
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });

  // Act
  await search.fill("incoming data");
  await expect.poll(() => moduleRequests).toBe(1);
  firstRequest.resolve();
  await expect(page.getByText("Something went wrong. Please try again.", { exact: true })).toBeVisible();
  await search.fill("large dataset");

  // Assert
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/tasks/explore-a-large-dataset");
  expect(moduleRequests).toBe(2);
});

test("ordinary search creates a fresh index after the entry metadata responds with 503", async ({ page }) => {
  // Arrange
  const failFirstRequest = Promise.withResolvers<void>();
  let entryRequests = 0;
  await page.route((url) => url.pathname === "/pagefind/pagefind-entry.json", async (route) => {
    entryRequests += 1;
    if (entryRequests === 1) {
      await failFirstRequest.promise;
      await route.fulfill({ status: 503, body: "Temporary outage" });
      return;
    }
    await route.continue();
  });
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });

  // Act
  await search.fill("incoming data");
  await expect.poll(() => entryRequests).toBe(1);
  failFirstRequest.resolve();
  await expect(page.getByText("Something went wrong. Please try again.", { exact: true })).toBeVisible();
  await search.fill("large dataset");

  // Assert
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/tasks/explore-a-large-dataset");
  await search.fill("runtime validation");
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/validation");
  expect(entryRequests).toBe(2);
});

test("an exact npm name opens its row while the Pagefind entry request is still pending", async ({ page }) => {
  // Arrange
  const requestStarted = Promise.withResolvers<void>();
  const releaseRequest = Promise.withResolvers<void>();
  await page.route((url) => url.pathname === "/pagefind/pagefind-entry.json", async (route) => {
    requestStarted.resolve();
    await releaseRequest.promise;
    await route.continue();
  });

  try {
    await page.goto("/");
    await page.keyboard.press("ControlOrMeta+k");
    await requestStarted.promise;
    const search = page.getByRole("combobox", { name: "Search libraries" });

    // Act
    await search.fill("next-auth");
    await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/auth#library-auth-js");
    await search.press("Enter");

    // Assert
    await expect(page).toHaveURL("/auth#library-auth-js");
  } finally {
    releaseRequest.resolve();
  }
});

test("an older query cannot replace the cached fragment already read by the active query", async ({ page }) => {
  // Arrange
  await page.route("**/pagefind/pagefind.js", (route) => route.fulfill({
    contentType: "text/javascript",
    body: `const ready = (signal) => new Promise((resolve) => document.addEventListener(signal, resolve, { once: true }));
      const older = ready("test:finish-old-search");
      const lastFragment = ready("test:finish-last-fragment");
      const html = document.documentElement;
      const shared = { url: "/validation/", meta: { title: "Runtime validation" }, excerpt: "Schemas", sub_results: [] };
      const result = (name, id) => ({ id: "validation", data: async () => {
        shared.sub_results = [{ title: name, url: "/validation/#library-" + id,
          excerpt: name, anchor: { id: "library-" + id, location: 0 }, locations: [0] }];
        html.dataset.fragmentRead = id;
        return shared;
      } });
      export const createInstance = () => ({
        filters: async () => ({}),
        search: async (query) => {
          if (query === "schema arktype") {
            html.dataset.olderSearchStarted = "true";
            await older;
            return { results: [result("ArkType", "arktype")] };
          }
          return { results: [result("Zod", "zod"), { id: "slow-guide", data: async () => {
            await lastFragment;
            return { url: "/choosing-a-library/", meta: { title: "Choosing a library" }, excerpt: "Guide", sub_results: [] };
          } }] };
        },
      });`,
  }));
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });
  const html = page.locator("html");

  // Act
  await search.fill("schema arktype");
  await expect(html).toHaveAttribute("data-older-search-started", "true");
  await search.fill("schema zod");
  await expect(html).toHaveAttribute("data-fragment-read", "zod");
  await page.evaluate(() => document.dispatchEvent(new Event("test:finish-old-search")));
  await expect(html).toHaveAttribute("data-fragment-read", "arktype");
  await page.evaluate(() => document.dispatchEvent(new Event("test:finish-last-fragment")));

  // Assert
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/validation#library-zod");
});
