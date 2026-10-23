import { categories } from "./categories.ts";
import { libraries } from "./libraries.ts";
import type { Library } from "./catalog-types.ts";

export { categories, libraries };
export type { Library, CategoryId } from "./catalog-types.ts";
export const groups = [...new Set(categories.map((category) => category.group))];
export const featuredCategories = categories.filter((category) => ["dates", "drag-and-drop", "data-tables", "forms", "auth", "testing"].includes(category.id));

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
