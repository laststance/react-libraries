import { defineConfig } from "blume";
import { pagefind } from "blume/search";
import { categories, groups, featuredCategories, markdownRedirects, overviewRedirects } from "./content/catalog.ts";
import { directorySearch } from "./scripts/directory-search.ts";

export default defineConfig({
  title: "React Libraries",
  description: "Browse React libraries by category or task, compare weekly npm downloads, and open the official documentation.",
  content: { root: "docs" },
  integrations: [directorySearch],
  redirects: [...overviewRedirects, ...markdownRedirects],
  theme: {
    accent: { light: "#08795a", dark: "#6ce8bd" },
    background: { light: "#ffffff", dark: "#0d1110" },
    mode: "system",
    radius: "md",
  },
  navigation: {
    actions: [{ label: "Categories", href: "/" }, { label: "Tasks", href: "/tasks" }],
    sidebar: [
      { label: "Explore", items: [{ label: "All categories", href: "/", icon: "layout-grid" }, { label: "Find by task", href: "/tasks", icon: "search" }] },
      ...groups.map((group) => ({ label: group, display: "group" as const, items: categories.filter((category) => category.group === group).map((category) => ({
        label: category.title,
        href: `/${category.id}`,
        icon: category.icon,
      })) })),
      { label: "Popular tasks", items: featuredCategories.slice(0, 3).map((category) => ({ label: category.task, href: `/tasks/${category.taskId}` })) },
    ],
  },
  search: {
    provider: pagefind(),
    popular: featuredCategories.map((category) => ({ label: category.task, href: `/tasks/${category.taskId}`, icon: category.icon })),
  },
  feedback: false,
  ai: { openInChat: false },
  footer: { copyright: "Curated by Laststance", links: [{ label: "Laststance ↗", href: "https://laststance.io" }] },
});
