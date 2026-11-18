import { joinBase } from "blume/components/islands/base-path.ts";
import { highlight, RESULT_POOL, sanitizeExcerpt, SEARCH_LIMIT } from "blume/components/layout/search/types.ts";
import type { SearchFn } from "blume/components/layout/search/types.ts";
import type { PackageSearchRows } from "./directory-search.ts";

declare const __DIRECTORY_PACKAGE_ROWS__: PackageSearchRows;
const packageRows = __DIRECTORY_PACKAGE_ROWS__;

interface PagefindHit {
  url: string;
  title: string;
  excerpt: string;
}

interface PagefindPage extends Omit<PagefindHit, "title"> {
  meta: { title?: string };
  sub_results: (PagefindHit & {
    anchor?: { id: string; location: number };
    locations: number[];
  })[];
}

interface PagefindModule {
  createInstance(options: { basePath: string; baseUrl: string }): {
    search(query: string): Promise<{ results: { data(): Promise<PagefindPage> }[] }>;
  };
}

// Pagefind links to built directories; Blume serves those routes without the slash.
const trailingSlash = /(?<=.)\/(?=[#?]|$)/u;

/** Folds case and spaces for the query and result titles compared by {@link titleMatch}.
 * @example normalize(" TanStack   Query "); // "tanstack query"
 */
const normalize = (text: string) => text.toLowerCase().trim().replace(/\s+/gu, " ");

/** Ranks direct title matches above the fuzzy matches returned by {@link createSearch}.
 * @example titleMatch("tanstack query", "tanstack q"); // 2
 */
function titleMatch(title: string, query: string): number {
  if (title === query) return 3;
  if (title.startsWith(query)) return 2;
  return title.includes(query) ? 1 : 0;
}

/** Loads the Blume build's Pagefind index when the search dialog first opens.
 * Each query returns library rows at their category anchors and regular page results.
 * @example const results = await (await createSearch())("TanStack Query");
 */
export async function createSearch(): Promise<SearchFn> {
  const basePath = joinBase(import.meta.env.BASE_URL, "pagefind/");
  const bundle = `${basePath}pagefind.js`;
  // Pagefind emits this module at build time, outside Vite's module graph.
  const pagefind: PagefindModule = await import(/* @vite-ignore */ bundle);
  const index = pagefind.createInstance({ basePath, baseUrl: "/" });

  return async (query) => {
    const { results } = await index.search(query);
    // A name like Render can rank below many pages that use the same word in prose.
    const pages = await Promise.all(results.slice(0, RESULT_POOL).map((result) => result.data()));
    const normalizedQuery = normalize(query);
    const hits = pages.flatMap((page) => {
      const rows = page.sub_results.flatMap(({ anchor, locations, ...row }) => {
        if (!anchor?.id.startsWith("library-")) return [];

        // The name begins each row. Pagefind's word offsets also cover typo matches.
        const name = normalize(row.title);
        const titleLength = name.split(" ").length;
        const titleHits = locations.filter((word) => word < anchor.location + titleLength).length;
        return [{ ...row, rank: titleMatch(name, normalizedQuery) || titleHits / titleLength }];
      });
      const title = page.meta.title ?? page.url;
      const rank = titleMatch(normalize(title), normalizedQuery);
      // Include the whole page when its title or content outside the rows also matched.
      const pageMatch = page.sub_results.find(({ anchor }) => !anchor?.id.startsWith("library-"));
      return rows.length && !rank && !pageMatch
        ? rows
        : [{ title, rank, url: page.url, excerpt: pageMatch?.excerpt ?? page.excerpt }, ...rows];
    });

    const pagefindHits = hits
      .sort((a, b) => b.rank - a.rank)
      .slice(0, SEARCH_LIMIT)
      .map(({ title, url, excerpt }) => ({
        title: highlight(title, query),
        url: url.replace(trailingSlash, ""),
        excerpt: sanitizeExcerpt(excerpt),
      }));
    if (!Object.hasOwn(packageRows, normalizedQuery)) {
      return { hits: pagefindHits, sections: [] };
    }

    // Package handles may tokenize differently from the displayed library name.
    const packageHits = packageRows[normalizedQuery].map(([url, title]) =>
      pagefindHits.find((hit) => hit.url === url) ?? {
        title: highlight(title, query),
        url,
        excerpt: `npm package ${highlight(normalizedQuery, query)}`,
      },
    );
    const packageUrls = new Set(packageHits.map((hit) => hit.url));
    const otherHits = pagefindHits.filter((hit) => !packageUrls.has(hit.url));
    return { hits: [...packageHits, ...otherHits].slice(0, SEARCH_LIMIT), sections: [] };
  };
}
