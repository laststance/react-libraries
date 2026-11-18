import { categories } from "./categories.ts";
import { libraries } from "./libraries.ts";
import type { Library } from "./catalog-types.ts";

export { categories, libraries };
export type { Library, CategoryId } from "./catalog-types.ts";
export const groups = [...new Set(categories.map((category) => category.group))];
export const featuredCategories = categories.filter((category) => ["dates", "drag-and-drop", "data-tables", "forms", "auth", "testing"].includes(category.id));

/**
 * Selects the primary link for a library card and any additional source for its overview.
 * @example const [primary] = getResourceLinks(getLibrary("tanstack-table"));
 */
export function getResourceLinks({ documentation, official, sourceStatus }: Library) {
  const source = { label: sourceStatus === "unavailable" ? "Saved source" : "Project source", href: official };
  if (!documentation) return [source];

  const docs = { label: "Official docs", href: documentation };
  // GitHub also displays a repository's README at its root URL.
  const sameSource = documentation.replace(/\/?(?:#readme)?$/, "") === official.replace(/\/?(?:#readme)?$/, "");
  return sameSource || sourceStatus === "unavailable" ? [docs] : [docs, source];
}

/** Resolves catalog entries for cards rendered by Blume.
 * Called by LibraryCard; invalid references stop the content build visibly.
 * @throws When a page refers to an unknown library ID.
 * @example const entry = getLibrary("date-fns");
 */
export function getLibrary(id: string): Library {
  const library = libraries.find((entry) => entry.id === id);
  // Reject stale references instead of silently omitting a card.
  if (!library) throw new Error(`Unknown library: ${id}`);
  return library;
}
