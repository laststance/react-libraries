import { defineConfig } from "blume";
import { pagefind } from "blume/search";
import { categories, libraries, groups, featuredCategories } from "./content/catalog.ts";

export default defineConfig({
  title: "React Libraries",
  description: "Find a React library by what you want to build. Clear use cases, practical differences, and direct links to the docs.",
  content: { root: "docs" },
  theme: {
    accent: { light: "#08795a", dark: "#6ce8bd" },
    background: { light: "#ffffff", dark: "#0d1110" },
    mode: "system",
    radius: "md",
  },
  navigation: {
    actions: [{ label: "Libraries", href: "/" }, { label: "Choosing a library", href: "/choosing-a-library" }],
    sidebar: [
      { label: "Explore", items: [{ label: "Browse libraries", href: "/", icon: "layout-grid" }, { label: "Find by task", href: "/tasks", icon: "search" }] },
      ...groups.map((group) => ({ label: group, display: "group" as const, items: categories.filter((category) => category.group === group).map((category) => ({
        label: category.title,
        root: `/${category.id}`,
        icon: category.icon,
        display: "group" as const,
        items: libraries.filter((library) => library.category === category.id).map((library) => `/${category.id}/${library.id}`),
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
  footer: { copyright: "Curated by Laststance. Find your starting point, then go deeper in the official docs.", links: [{ label: "Laststance ↗", href: "https://laststance.io" }] },
});
