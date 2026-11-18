import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { categories, groups, libraries } from "../content/catalog.ts";
import { downloadPeriod, getRankedLibraries } from "../content/downloads.ts";

const generated: string[] = [];
const manifest = new URL("../docs/.generated.json", import.meta.url);
const previous: string[] = await readFile(manifest, "utf8").then(JSON.parse).catch(() => []);
const compactDownloads = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumSignificantDigits: 3,
});
const exactDownloads = new Intl.NumberFormat("en-US");
const downloadDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});
const periodLabel = downloadDate.formatRange(
  new Date(downloadPeriod.start),
  new Date(downloadPeriod.end),
);

type RankedLibrary = ReturnType<typeof getRankedLibraries>[number];

/**
 * Escapes catalog text and URLs before the generator writes them into MDX.
 *
 * @example
 * ```ts
 * const safeText = escapeMdx("A < B");
 * ```
 */
function escapeMdx(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "{": "&#123;",
    "}": "&#125;",
  };
  return value.replace(/[&<>"{}]/g, (character) => entities[character]);
}

/**
 * Writes and tracks a generated page before Blume scans the content root.
 *
 * @param route - A path without a leading slash. An empty path is the homepage.
 *
 * @example
 * ```ts
 * await page("dates", "Dates & time", "Date utilities.", "## Options");
 * ```
 */
async function page(route: string, title: string, description: string, body: string) {
  const relative = `${route || "index"}.mdx`;
  const file = new URL(`../docs/${relative}`, import.meta.url);
  await mkdir(new URL(".", file), { recursive: true });
  await writeFile(file, `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\nmode: wide\npagination: false\n---\n\n{/* Generated from content/. Edit the catalog, not this page. */}\n\n${body}\n`);
  generated.push(relative);
}

/**
 * Writes a directory entry into the Markdown itself so exports retain its source and bio.
 *
 * @example
 * ```ts
 * const rows = getRankedLibraries("data-fetching").map(libraryRow);
 * ```
 */
function libraryRow({ library, npmPackage, downloads }: RankedLibrary): string {
  const name = escapeMdx(library.name);
  const source = library.sourceStatus === "unavailable"
    ? `${name} <span class="library-source-unavailable" data-pagefind-ignore>Source unavailable</span>`
    : `<a href="${escapeMdx(library.official)}" target="_blank" rel="noopener noreferrer" aria-describedby="new-tab-hint">${name}<span class="library-external-arrow" aria-hidden="true" data-pagefind-ignore>↗</span></a>`;
  const downloadText = downloads === null
    ? "Weekly npm downloads unavailable"
    : `${exactDownloads.format(downloads)} weekly npm downloads`;
  const downloadLabel = npmPackage === null ? downloadText : `${downloadText} for ${npmPackage}`;
  const downloadAttribute = downloads === null ? "" : ` data-downloads="${downloads}"`;
  const metric = downloads === null
    ? `<span aria-hidden="true">—</span>`
    : `<data value="${downloads}" aria-hidden="true">${compactDownloads.format(downloads)}</data>`;
  return `<li class="library-row">
  <h2 class="library-name" id="library-${library.id}" data-pagefind-title="${name}">${source}</h2>
  <p class="library-bio">${escapeMdx(library.description)}</p>
  <span class="library-downloads" data-pagefind-ignore${downloadAttribute} title="${escapeMdx(downloadLabel)}">${metric}<span class="sr-only">${escapeMdx(downloadLabel)}</span></span>
</li>`;
}

/**
 * Builds the library list shared by category and task pages.
 *
 * @param taskPage - Excludes task-page rows from Pagefind, leaving category deep links canonical.
 *
 * @example
 * ```ts
 * const list = libraryList(getRankedLibraries("data-fetching"), false);
 * ```
 */
function libraryList(entries: readonly RankedLibrary[], taskPage: boolean): string {
  const ranked = entries.filter(({ downloads }) => downloads !== null);
  const unranked = entries.filter(({ downloads }) => downloads === null);
  const list = (rows: typeof entries) => `<ul class="library-rows" role="list">\n${rows.map(libraryRow).join("\n")}\n</ul>`;
  const sections = ranked.length && unranked.length
    ? [list(ranked), '<p class="library-list-divider" data-pagefind-ignore>Without npm counts</p>', list(unranked)]
    : [list(entries)];
  return `<div class="library-list not-prose"${taskPage ? ' data-pagefind-ignore="all"' : ""}>
  <div class="library-list-header" data-pagefind-ignore>
    <span>Libraries &amp; tools</span>
    <span class="library-list-metric">Weekly npm downloads${ranked.length ? ' <span aria-hidden="true">↓</span>' : ""}<span class="library-list-period">${periodLabel}</span></span>
  </div>
  <span class="sr-only" id="new-tab-hint" data-pagefind-ignore>Opens in a new tab</span>
${sections.join("\n")}
</div>`;
}

// Category and task routes share the same ranked entries.
for (const category of categories) {
  const entries = getRankedLibraries(category.id);
  const taskRoute = `tasks/${category.taskId}`;
  await page(category.id, category.title, category.description, `${libraryList(entries, false)}

<div class="directory-links not-prose" data-pagefind-ignore>
  <a href="/${category.id}.md" download>Download Markdown</a>
</div>`);
  await page(taskRoute, category.task, category.taskDescription, `<p class="task-context">${escapeMdx(category.note)}</p>

${libraryList(entries, true)}

<div class="directory-links not-prose" data-pagefind-ignore>
  <a href="/${category.id}">${escapeMdx(category.title)} →</a>
  <a href="/${taskRoute}.md" download>Download Markdown</a>
</div>`);
}

// Lead with the application data categories so data fetching is visible from the top of the directory.
const dataGroup = categories.find((category) => category.id === "data-fetching")?.group;
const homeGroups = dataGroup ? [dataGroup, ...groups.filter((group) => group !== dataGroup)] : groups;
await page("", "Browse libraries", `A curated directory of ${libraries.length} libraries and tools for building React apps.`, `<div class="directory-index">
  ${homeGroups.map((group) => `<section class="directory-group">
    <h2>${escapeMdx(group)}</h2>
    <CategoryGrid group=${JSON.stringify(group)} />
  </section>`).join("\n")}
</div>`);

await page("tasks", "Find by task", "Start with what you want to build.", `<div class="directory-index">
  ${groups.map((group) => `<section class="directory-group">
    <h2>${escapeMdx(group)}</h2>
    <CategoryGrid group=${JSON.stringify(group)} tasks />
  </section>`).join("\n")}
</div>`);

await page("choosing-a-library", "Choosing a library", "Start with the job, then compare the amount of UI and behavior you want to own.", `## Start with your task

Describe the result you need: format a date, reorder a list, or search and filter a large dataset. Browse the categories or open search with ⌘K or Ctrl K.

## Compare the work you will own

A headless library gives you behavior and lets you build the interface. A ready-made component gets you to a working UI sooner, with its own styling and customization boundaries.

## Check the constraints

Review accessibility, framework and browser compatibility, maintenance, bundle impact, and the license for the exact features you need. Try a realistic slice of your application before committing.

## Read the download counts

Weekly npm downloads provide one signal for packages on npm. Automated installs and dependencies also count. Entries without a count appear after packages with a count.

[Find a task →](/tasks)

[Browse all categories →](/)`);

// Remove only obsolete files recorded by an earlier generation.
for (const path of previous) {
  if (!generated.includes(path) && /^[a-z0-9/-]+\.mdx$/.test(path)) await rm(new URL(`../docs/${path}`, import.meta.url), { force: true });
}
await writeFile(manifest, JSON.stringify(generated, null, 2) + "\n");
console.log(`Generated ${categories.length} categories, ${categories.length} task pages, and 3 index pages (${generated.length} total).`);
