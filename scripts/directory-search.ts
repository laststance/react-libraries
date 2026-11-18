import { fileURLToPath } from "node:url";
import type { BlumeConfig } from "blume";

// Keep Blume's dialog and index builder, and bind its client to the row-aware adapter.
export const directorySearch = {
  name: "directory-search",
  hooks: {
    "astro:config:setup": ({ updateConfig }) => {
      updateConfig({
        vite: {
          resolve: {
            alias: {
              "blume:search-client": fileURLToPath(new URL("./directory-search-client.ts", import.meta.url)),
            },
          },
        },
      });
    },
  },
} satisfies NonNullable<BlumeConfig["integrations"]>[number];
