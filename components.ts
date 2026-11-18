import { defineComponents } from "blume";

export default defineComponents({
  mdx: {
    CategoryGrid: "./components/CategoryGrid.astro",
  },
  layout: {
    Logo: "./components/Logo.astro",
    Sidebar: "./components/Sidebar.astro",
    Search: "./components/Search.astro",
  },
});
