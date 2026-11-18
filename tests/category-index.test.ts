import { expect, test } from "@playwright/test";

test("an incoming category link brings a named library into view", async ({ page }) => {
  // Arrange
  await page.setViewportSize({ width: 1024, height: 540 });

  // Act
  await page.goto("/ui-kits#library-shadcn-ui");

  // Assert
  const row = page.getByRole("heading", { name: "shadcn/ui", exact: true });
  await expect(row).toHaveAttribute("id", "library-shadcn-ui");
  await expect(row).toBeInViewport();
  await page.screenshot({ path: "qa/category-index.png" });
});

test("weekly npm download counts descend and rows without counts follow them", async ({ page }) => {
  // Arrange
  await page.goto("/ui-kits");
  const directory = page.getByRole("main");

  // Act
  const cellsByRow = await directory.locator("li.library-row").evaluateAll((rows) =>
    rows.map((row) => Array.from(row.querySelectorAll(".library-downloads"), (cell) => cell.getAttribute("data-downloads"))),
  );
  const counts = cellsByRow.flat();
  const known = counts.filter((value) => value !== null).map(Number);
  const unknown = counts.filter((value) => value === null);

  // Assert
  expect(cellsByRow.every((cells) => cells.length === 1)).toBe(true);
  expect(new Set(known).size).toBeGreaterThan(1);
  expect(known.every((count) => Number.isSafeInteger(count) && count >= 0)).toBe(true);
  expect(unknown.length).toBeGreaterThan(0);
  expect(counts).toEqual([...known.toSorted((a, b) => b - a).map(String), ...unknown]);
  await expect(directory.getByText("Without npm counts", { exact: true })).toBeVisible();
  await expect(directory.getByText("—", { exact: true }).first()).toBeVisible();
});

test("the TanStack Query name opens official documentation in a new tab", async ({ context, page }) => {
  // Arrange
  const docsUrl = "https://tanstack.com/query/latest/docs/framework/react/overview";
  await context.route(docsUrl, (route) => route.fulfill({ contentType: "text/html", body: "TanStack Query" }));
  await page.goto("/");
  const category = page.getByRole("main").getByRole("link", { name: "Data fetching", exact: true });
  await expect(category).toBeInViewport();

  // Act
  await category.click();
  const name = page.getByRole("main").getByRole("link", { name: "TanStack Query", exact: true });
  await name.hover();
  const [popup] = await Promise.all([page.waitForEvent("popup"), name.click()]);

  // Assert
  await expect(popup).toHaveURL(docsUrl);
  await expect(page).toHaveURL("/data-fetching");
  await expect(page.getByText("refresh stale queries after a mutation", { exact: false })).toBeVisible();
  await popup.close();
});

test("a saved TanStack Query overview URL still opens its directory row", async ({ page }) => {
  // Arrange
  const legacy = "/data-fetching/tanstack-query";

  // Act
  await page.goto(legacy);

  // Assert
  await expect(page).toHaveURL("/data-fetching#library-tanstack-query");
  await expect(page.getByRole("heading", { name: "TanStack Query", exact: true })).toBeInViewport();
});

test("bookmarked Markdown files download the category list in the requested format", async ({ request }) => {
  // Arrange
  const original = "/data-fetching/tanstack-query";

  for (const format of ["md", "mdx"]) {
    // Act
    const redirect = await request.get(`${original}.${format}`, { maxRedirects: 0 });
    const markdown = await request.get(redirect.headers().location);
    const body = await markdown.text();

    // Assert
    expect(redirect.status()).toBe(308);
    expect(redirect.headers().location).toBe(`/data-fetching.${format}`);
    expect(markdown.ok()).toBe(true);
    expect(markdown.headers()["content-type"].split(";")[0]).toBe(format === "md" ? "text/markdown" : "text/mdx");
    expect(body).toMatch(/^---\r?\ntitle: "Data fetching"/u);
    expect(body).toContain("https://tanstack.com/query/latest/docs/framework/react/overview");
  }
});
