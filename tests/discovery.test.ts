import { expect, test } from "@playwright/test";

test("category browsing shows library bios and preserves the chosen dark theme", async ({ page }) => {
  // Arrange
  await page.goto("/dates");
  await expect(page.getByRole("heading", { name: "Dates & time", exact: true })).toBeVisible();
  await page.screenshot({ path: "qa/dates-light.png", fullPage: true });

  // Act
  await page.getByRole("button", { name: "Toggle theme" }).click();

  // Assert
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.mouse.move(1000, 80);
  await page.screenshot({ path: "qa/dates-dark.png", fullPage: true });
  await page.locator("[data-blume-nav-drawer]").getByRole("link", { name: "Data tables", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Data tables", exact: true })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  const directory = page.getByRole("main");
  await expect(directory.getByRole("link", { name: "TanStack Table", exact: true })).toHaveAttribute("href", "https://tanstack.com/table/latest");
  await expect(directory.getByText("Table logic for sorting, filtering, and pagination, with complete control over your UI.", { exact: true })).toBeVisible();
  await expect(directory.getByRole("heading", { name: "What you build", exact: true })).toHaveCount(0);
  await page.reload();
  await expect(page).toHaveURL("/data-tables");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("command search finds a task without knowing a library name and recovers from an empty result", async ({ page }) => {
  // Arrange
  await page.goto("/dates");

  // Act
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });
  await expect(search).toBeFocused();
  await search.fill("large dataset");

  // Assert
  const results = page.locator("[data-blume-search-results]");
  const task = results.locator('a[href="/tasks/explore-a-large-dataset"]');
  await expect(task).toContainText("Explore a large dataset");
  await page.screenshot({ path: "qa/task-search.png" });
  await task.click();
  await expect(page).toHaveURL("/tasks/explore-a-large-dataset");
  await expect(page.getByRole("heading", { name: "Explore a large dataset", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "TanStack Table", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AG Grid", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "MUI X Data Grid", exact: true })).toBeVisible();
  await page.keyboard.press("ControlOrMeta+k");
  await search.fill("zzzznonexistentlibrary");
  await expect(page.locator("[data-blume-search-message]")).toBeVisible();
  await expect(results.getByRole("option")).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(search).not.toBeVisible();
  await expect(page.getByRole("button", { name: "Search", exact: true })).toBeFocused();
});

test("mobile navigation exposes categories and closes after choosing a page", async ({ page }) => {
  // Arrange
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/dates");

  // Act
  await page.getByRole("button", { name: "Toggle navigation" }).click();
  const categoryLink = page.locator("[data-blume-nav-drawer]").getByRole("link", { name: "Drag & drop", exact: true });
  await expect(categoryLink).toBeVisible();
  await categoryLink.click();

  // Assert
  await expect(page.getByRole("heading", { name: "Drag & drop", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Toggle navigation" })).toHaveAttribute("aria-expanded", "false");
  await expect(page.getByRole("heading", { name: "dnd kit", exact: true })).toBeVisible();
  await expect.poll(() => page.locator("[data-blume-nav-drawer]").evaluate((drawer) => drawer.getBoundingClientRect().right)).toBeLessThanOrEqual(0);
  await page.evaluate(async () => { await Promise.all(document.getAnimations().map((animation) => animation.finished)); });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: "qa/mobile-category.png", fullPage: true });
});

test("collapsed categories can be browsed and searching a library name opens its category row", async ({ page }) => {
  // Arrange
  await page.goto("/");
  const drawer = page.locator("[data-blume-nav-drawer]");
  await page.screenshot({ path: "qa/home-light.png" });

  // Act
  await drawer.locator("summary").filter({ hasText: "Connect services" }).click();
  await drawer.getByRole("link", { name: "Authentication & identity", exact: true }).click();

  // Assert
  await expect(page.getByRole("heading", { name: "Authentication & identity", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Auth.js", exact: true })).toBeVisible();
  await page.keyboard.press("ControlOrMeta+k");
  const search = page.getByRole("combobox", { name: "Search libraries" });
  await search.fill("Zod");
  const results = page.locator("[data-blume-search-results]");
  const zod = results.locator('a[href="/validation#library-zod"]');
  await expect(zod).toHaveCount(1);
  await expect(zod).toHaveAttribute("aria-selected", "true");
  await zod.click();
  await expect(page).toHaveURL("/validation#library-zod");
  await expect(page.getByRole("heading", { name: "Zod", exact: true })).toBeInViewport();
  await expect(page.getByText("A TypeScript-oriented schema validation library.", { exact: true })).toBeVisible();
  await expect(search).not.toBeVisible();
  await page.screenshot({ path: "qa/zod-directory.png" });
  await page.keyboard.press("ControlOrMeta+k");
  await search.fill("incoming data");
  await expect(results.locator('[aria-selected="true"]')).toContainText("Validate incoming data");
  await page.screenshot({ path: "qa/validation-search.png" });
  await search.press("Enter");
  await expect(page.getByRole("heading", { name: "Validate incoming data", exact: true })).toBeVisible();
});
