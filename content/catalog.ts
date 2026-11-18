import { categories } from "./categories.ts";
import { libraries } from "./libraries.ts";

export { categories, libraries };
export type { Library, CategoryId } from "./catalog-types.ts";
export const groups = [...new Set(categories.map((category) => category.group))];
export const featuredCategories = categories.filter((category) => ["dates", "drag-and-drop", "data-tables", "forms", "auth", "testing"].includes(category.id));

export const overviewRedirects = libraries.map(({ category, id }) => ({
  from: `/${category}/${id}`,
  to: `/${category}#library-${id}`,
  status: 308 as const,
}));

export const markdownRedirects = libraries.flatMap(({ category, id }) =>
  ["md", "mdx"].map((extension) => ({
    from: `/${category}/${id}.${extension}`,
    to: `/${category}.${extension}`,
    status: 308 as const,
  })),
);
