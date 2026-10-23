import { expect, test } from "@playwright/test";

test("large categories let readers jump directly to a named option", async ({ page }) => {
  // Arrange
  await page.goto("/ui-kits");

  // Act
  await page.locator(".library-index summary").click();
  const index = page.getByRole("navigation", { name: "Libraries in this category" });
  await index.getByRole("link", { name: "shadcn/ui", exact: true }).click();

  // Assert
  await expect(page).toHaveURL(/#library-shadcn-ui$/);
  await expect(page.locator("#library-shadcn-ui")).toBeInViewport();
  await page.screenshot({ path: "qa/category-index.png" });
});
