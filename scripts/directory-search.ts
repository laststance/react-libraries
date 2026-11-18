import { fileURLToPath } from "node:url";
import type { BlumeConfig } from "blume";
import { libraries } from "../content/libraries.ts";
import packageByLibrary from "../content/npm-packages.json" with { type: "json" };

export type PackageSearchRows = Record<string, [url: string, title: string][]>;

/** Collects the package aliases used by the search client at build time.
 * Each package can point to multiple category rows.
 * @example packageSearchRows()["next-auth"]; // [["/auth#library-auth-js", "Auth.js"]]
 */
function packageSearchRows(): PackageSearchRows {
  const packages = new Map(Object.entries(packageByLibrary));
  const rows = new Map<string, PackageSearchRows[string]>();
  for (const { category, id, name } of libraries) {
    const packageName = packages.get(id);
    if (!packageName) continue;

    const matches = rows.get(packageName) ?? [];
    matches.push([`/${category}#library-${id}`, name]);
    rows.set(packageName, matches);
  }
  return Object.fromEntries(rows);
}

// Keep Blume's dialog and index builder, and bind its client to the row-aware adapter.
export const directorySearch = {
  name: "directory-search",
  hooks: {
    "astro:config:setup": ({ updateConfig }) => {
      updateConfig({
        vite: {
          // Inline the compact lookup only where the lazy search client reads it.
          define: { __DIRECTORY_PACKAGE_ROWS__: JSON.stringify(packageSearchRows()) },
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
