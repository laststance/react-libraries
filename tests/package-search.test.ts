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
