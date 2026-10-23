import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { categories, libraries, groups, featuredCategories } from "../content/catalog.ts";

const generated: string[] = [];
const manifest = new URL("../docs/.generated.json", import.meta.url);
const previous: string[] = await readFile(manifest, "utf8").then(JSON.parse).catch(() => []);

/** Escapes editorial text for MDX without treating it as components or expressions.
 * Called when the generator inserts names and descriptions into Markdown.
 * @example const text = md("A < B");
 */
function md(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/{/g, "&#123;").replace(/}/g, "&#125;");
}

/** Writes a catalog page before Blume scans docs; records only routes owned by this generator.
 * @example await page("dates", "Dates & time", "Date utilities.", "## Options");
 */
async function page(route: string, title: string, description: string, body: string) {
  const relative = `${route || "index"}.mdx`;
  const file = new URL(`../docs/${relative}`, import.meta.url);
  await mkdir(new URL(".", file), { recursive: true });
  await writeFile(file, `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\npagination: false\n---\n\n{/* Generated from content/. Edit the catalog, not this page. */}\n\n${body}\n`);
  generated.push(relative);
}

/** Renders task links using the built-in Card components on discovery pages.
 * @example const body = taskCards(featuredCategories);
 */
function taskCards(entries: readonly (typeof categories)[number][]): string {
  return `<CardGroup cols={1}>\n${entries.map((category) => `<Card title=${JSON.stringify(category.task)} href="/tasks/${category.taskId}" icon="${category.icon}">${md(category.taskDescription)}</Card>`).join("\n")}\n</CardGroup>`;
}

// Every category and task shares the same curated cards and concise comparison guidance.
for (const category of categories) {
  const entries = libraries.filter((library) => library.category === category.id);
  const cards = `<LibraryIndex category="${category.id}" />\n\n` + entries.map((library) => `<LibraryCard libraryId="${library.id}" />`).join("\n\n");
  await page(category.id, category.title, category.description, `<PurposeNote title=${JSON.stringify(category.noteTitle)}>${md(category.note)}</PurposeNote>\n\n## Choose a library or tool\n\n${entries.length} options in this category.\n\n${cards}\n\n## Keep exploring\n\n<CategoryGrid exclude="${category.id}" group=${JSON.stringify(category.group)} limit={4} />\n\n[Browse all categories →](/)`);
  await page(`tasks/${category.taskId}`, category.task, category.taskDescription, `<PurposeNote title="Start with the tradeoff">${md(category.note)}</PurposeNote>\n\n## Options for this task\n\n${cards}\n\n## Before you decide\n\nTry a small, realistic example. Check the runtime, accessibility, maintenance, and license requirements for the features you need.\n\n[Browse ${md(category.title.toLowerCase())} →](/${category.id})\n\n[Explore more tasks →](/tasks)`);
}

// Short detail pages emphasize purpose and fit; related links stay within a useful limit.
for (const library of libraries) {
  const category = categories.find((entry) => entry.id === library.category)!;
  const alternatives = libraries.filter((entry) => entry.category === library.category && entry.id !== library.id).slice(0, 5);
  const sections = [
    `<PurposeNote title="Good for">${md(library.goodFor)}</PurposeNote>`,
    `## What it does\n\n${md(library.description)}`,
    `## When it fits\n\n${md(library.goodFor)}`,
    ...(library.implementation ? [`## What you build\n\n${md(library.implementation)}`] : []),
    ...(library.caveat ? [`## Keep in mind\n\n${md(library.caveat)}`] : []),
    ...(alternatives.length ? [`## Other options in this category\n\n<div data-pagefind-ignore>\n\n${alternatives.map((entry) => `- [${md(entry.name)}](/${entry.category}/${entry.id}) — ${md(entry.goodFor)}`).join("\n")}\n\n</div>`] : []),
    `## Source\n\n[${library.sourceStatus === "unavailable" ? "Saved" : "Project"} source for ${md(library.name)} ↗](${library.official})\n\nEditorial overview reviewed on October 24, 2026. Follow the source for current setup, compatibility, and licensing.`,
    `[${md(category.task)} →](/tasks/${category.taskId})\n\n[All ${md(category.title.toLowerCase())} options →](/${category.id})`,
  ];
  await page(`${library.category}/${library.id}`, library.name, library.description, sections.join("\n\n"));
}

await page("", "Find the right library for what you want to build.", `Explore ${libraries.length} libraries, tools, and resources across ${categories.length} categories. Understand what each one does and where it fits.`, `## What are you building?\n\n${taskCards(featuredCategories)}\n\n[Browse all ${categories.length} tasks →](/tasks)\n\n## Browse by category\n\n${groups.map((group) => `### ${md(group)}\n\n<CategoryGrid group=${JSON.stringify(group)} />`).join("\n\n")}\n\n## Choose with context\n\nStart with a use case, compare the options, then go deeper in the source documentation.\n\n[How to choose a library →](/choosing-a-library)`);
await page("tasks", "What do you want to build?", "Start with the job you need to do. You do not need to know a library's name.", groups.map((group) => `## ${md(group)}\n\n${taskCards(categories.filter((entry) => entry.group === group))}`).join("\n\n"));
await page("choosing-a-library", "Choosing a library", "Start with the job, then compare the amount of UI and behavior you want to own.", `## Start with your task\n\nDescribe the result you need: format a date, reorder a list, or search and filter a large dataset. Browse the categories or open search with ⌘K or Ctrl K.\n\n## Compare the work you will own\n\nA headless library gives you behavior and lets you build the interface. A ready-made component gets you to a working UI sooner, with its own styling and customization boundaries.\n\n## Check the constraints\n\nReview accessibility, framework and browser compatibility, maintenance, bundle impact, and the license for the exact features you need. Try a realistic slice of your application before committing.\n\n## Use this guide as a starting point\n\nThe collection includes React libraries and the wider tools used to build, test, and ship applications. These are concise editorial overviews, not API documentation or a popularity ranking. Historical entries with unavailable sources remain labeled for reference.\n\n[Find a task →](/tasks)\n\n[Browse all categories →](/)`);

// Remove only obsolete files recorded by an earlier generation, never hand-authored pages.
for (const path of previous) {
  if (!generated.includes(path) && /^[a-z0-9/-]+\.mdx$/.test(path)) await rm(new URL(`../docs/${path}`, import.meta.url), { force: true });
}
await writeFile(manifest, JSON.stringify(generated, null, 2) + "\n");
console.log(`Generated ${libraries.length} overviews, ${categories.length} categories, ${categories.length} task guides, and 3 index pages (${generated.length} total).`);
