import { defineComponents } from "blume";

export default defineComponents({
  mdx: {
    LibraryCard: "./components/LibraryCard.astro",
    LibraryIndex: "./components/LibraryIndex.astro",
    PurposeNote: "./components/PurposeNote.astro",
    CategoryGrid: "./components/CategoryGrid.astro",
  },
  layout: {
    Logo: "./components/Logo.astro",
    Sidebar: "./components/Sidebar.astro",
    Search: "./components/Search.astro",
  },
});
