# React Libraries

An English field guide for finding libraries and tools by what you want to build. Built with Blume, Astro MDX, and static Pagefind search.

Browse **562 libraries, tools, and resources in 59 categories**. Each name opens the project's documentation or original source in a new tab. A short bio explains when to use it. Category and task lists sort packages by weekly npm downloads. Cmd/Ctrl K finds tasks such as “Explore a large dataset” and jumps to matching rows by project name or npm package. For example, searching for `next-auth` opens the Auth.js entry.

## Run locally

Requires Node.js 22.x (22.19 or later) and pnpm 12.14.0.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

The production search index is generated during the build. Preview it with:

```sh
pnpm run build
pnpm run preview --host 127.0.0.1 --port 8793
```

## Maintain the collection

Edit `content/libraries.ts` to add or revise an entry, and `content/categories.ts` to manage categories and task wording. These files are the canonical source. **Normal builds do not read or contact Notion.**

Each entry needs a stable `id`, category, name, short bio (`description`), use case (`goodFor`), and verified primary link (`official`). Write the bio so readers can distinguish neighboring options in the list. Prefer official documentation for a library and the original site or repository for a tool or resource. A new entry uses `sourceIds: []`. Keep existing source IDs so the migration remains auditable.

`sourceStatus` records link availability at editorial review, not a maintenance or security endorsement. `unavailable` means the reviewed source returned 404; `unconfirmed` means a timeout, rate limit, or access restriction prevented verification. Recheck these fields when reviewing an entry.

`pnpm content` generates category lists and task guides in `docs/`. Each library has a stable anchor in its category, for example `/data-fetching#library-tanstack-query`. A bookmark to a retired overview redirects to the same row. Edit the catalog and regenerate the MDX. The generator tracks its output in `docs/.generated.json`.

### Refresh weekly downloads

Run `pnpm run downloads:refresh` to fetch a common seven-day UTC window from the official npm downloads API. Run `pnpm content` and commit the updated snapshot and generated lists together. Builds and searches read the committed data locally.

Map a catalog ID to its published package in `content/npm-packages.json`. Use the React binding where a project publishes several packages. For example, TanStack Query uses `@tanstack/react-query`. RTK Query ships inside `@reduxjs/toolkit` and uses that package's total. Keep an entry unmapped when there is no applicable package. Hover over a count to see the package name and full number. Equal counts sort by name. Projects without a count appear after the ranked packages, alphabetically. A dash means no count is available.

- `scripts/build-content.ts`: page structure and shared guide copy.
- `components/`: presentation overrides for Blume.
- `blume.config.ts`: navigation, search, theme, and deployment metadata.
- `theme.css`: approved visual tokens and responsive styles.
- `MIGRATION.md`: source coverage, editorial decisions, corrections, and limitations.
- `DESIGN.md`: selected themes and saved reference-gallery location.

## Validate changes

Install the Chromium test browser once with `pnpm exec playwright install chromium`. On Linux, use `pnpm exec playwright install --with-deps chromium` to install its system dependencies as well.

```sh
pnpm run check
pnpm run doctor
pnpm run validate
pnpm run build
pnpm test
```

Catalog tests reconcile every original source occurrence and validate publishable entries. Playwright checks category browsing, persistent themes, task and name search, empty-result recovery, keyboard dismissal, and mobile navigation. Videos are recorded in `test-results/`; screenshots are written to `qa/`.

## Source migration

The October 24, 2026 migration captured 201 public Notion pages and 612 saved-link occurrences. Those resolve to 577 distinct URLs and 561 distinct catalog entries. The previously approved MUI X Data Grid entry brings the total to 562. All source occurrences remain traceable in `migration/report.json`; nothing was deleted from Notion.

The `migration/` directory is a read-only historical record. The scripts `fetch-notion.ts`, `check-sources.ts`, and `import-notion.ts` document the one-time process and are not part of normal development or CI. Re-running the importer overwrites canonical catalog files; do so only when intentionally rebuilding the migration from its snapshots.

## Deployment

The static build is written to `dist/`. The `laststance/react-web-dev-wiki` GitHub repository deploys to the Laststance team on Vercel. See the release and verification steps in `DEPLOYMENT.md`.
