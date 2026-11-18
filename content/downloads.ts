import type { CategoryId, Library } from "./catalog-types.ts";
import { libraries } from "./libraries.ts";
import packageByLibrary from "./npm-packages.json" with { type: "json" };
import snapshot from "./npm-downloads.json" with { type: "json" };

interface RankedLibrary {
  library: Library;
  npmPackage: string | null;
  downloads: number | null;
}

const npmPackages = new Map(Object.entries(packageByLibrary));
const packageDownloads = new Map(Object.entries(snapshot.downloads));
const byEnglishName = new Intl.Collator("en");

export const downloadPeriod = snapshot.period;

/**
 * Supplies an offline ranking when a category page renders its directory rows.
 * Unavailable npm data and entries without an npm package follow numeric totals.
 *
 * @example getRankedLibraries("data-fetching");
 */
export function getRankedLibraries(category: CategoryId): RankedLibrary[] {
  return libraries
    .filter((library) => library.category === category)
    .map((library) => {
      const npmPackage = npmPackages.get(library.id) ?? null;
      return {
        library,
        npmPackage,
        downloads: npmPackage === null ? null : packageDownloads.get(npmPackage) ?? null,
      };
    })
    .sort((left, right) => {
      const byDownloads = (right.downloads ?? -1) - (left.downloads ?? -1);
      return byDownloads || byEnglishName.compare(left.library.name, right.library.name);
    });
}
