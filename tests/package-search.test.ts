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
  expect(urls).toEqual(["/icons#library-iconify", "/icons#library-iconify-react"].sort());
});

test("the exact npm name opens Auth.js when Pagefind returns no matching pages", async ({ page }) => {
  // Arrange
  await page.route("**/pagefind/pagefind.js", (route) => route.fulfill({
    contentType: "text/javascript",
    body: `export const createInstance = () => ({
      search: async (query) => {
        if (query === "query with a failed index") throw new Error("Index unavailable");
        return { results: [] };
      },
    });`,
  }));
  await page.goto("/");
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });

  // Act
  await search.fill("large dataset");
  await expect(page.getByText("No results found.", { exact: true })).toBeVisible();
  await search.fill("query with a failed index");
  await expect(page.getByText("Something went wrong. Please try again.", { exact: true })).toBeVisible();
  await search.fill("next-auth");
  await expect(page.getByRole("option", { selected: true })).toHaveAttribute("href", "/auth#library-auth-js");
  await search.press("Enter");

  // Assert
  await expect(page).toHaveURL("/auth#library-auth-js");
  await expect(page.getByRole("heading", { name: "Auth.js", exact: true })).toBeInViewport();
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
  await expect(page.getByRole("option", { selected: true })).toBeVisible();
  expect(blockedFragment).toBe(true);
  await expect(page.getByText("Something went wrong. Please try again.", { exact: true })).not.toBeVisible();
});

test("total fragment failure shows an error for ordinary queries and still finds exact npm names", async ({ page }) => {
  // Arrange
  let blockedFragments = 0;
  await page.route("**/pagefind/fragment/**", async (route) => {
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
});
