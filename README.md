# React Libraries

An English field guide for finding libraries and tools by what you want to build. Built with Blume, Astro MDX, and static Pagefind search.

The catalog contains **562 entries in 59 categories**, with a concise purpose and a recommended use case for each entry. Category groups, task guides, and Cmd/Ctrl K search provide three ways to discover an option without already knowing its name. The light and dark themes follow the approved L2 / D1 design.

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

Each entry needs a stable `id`, category, name, short purpose (`description`), recommended use case (`goodFor`), and source URL (`official`). Add a `caveat` when there is a meaningful limitation and `implementation` when useful setup context is available. A new entry uses `sourceIds: []`; keep existing source IDs so the one-time migration remains auditable.

`sourceStatus` records link availability at editorial review, not a maintenance or security endorsement. `unavailable` means the reviewed source returned 404; `unconfirmed` means a timeout, rate limit, or access restriction prevented verification. Recheck these fields when reviewing an entry.

`pnpm content` generates category, task, and detail pages in `docs/`. Edit the catalog rather than the generated MDX. The generator records the files it owns in `docs/.generated.json` and removes only previously generated routes when an entry moves. Add hand-written pages separately and register them in navigation as needed.

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

The static build is written to `dist/`. GitHub and Vercel must use the **Laststance** organization/team. The production configuration and verification record are documented in `DEPLOYMENT.md` when provisioning completes.

Blume 2.2.4 currently resolves an `oxc-transform-react` peer-version warning through optional React tooling. This site uses Astro components; its build and checks pass. Revisit the upstream pair before adding React islands.
