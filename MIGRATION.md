# Notion collection migration

The full public collection was captured on October 24, 2026 (JST), without modifying or deleting the original Notion pages.

Source: https://laststance.notion.site/e08f822cf74a4a3aa9f50c2fcb2874a9?v=32021cda852b41d1a7f16a75d9221232

## Coverage

| Measure | Count |
| --- | ---: |
| Public pages, including the root | 201 |
| Captured content blocks | 1,623 |
| Saved links, including repeats | 612 |
| Distinct original URLs | 577 |
| Distinct migrated entries | 561 |
| Retained starter entry: MUI X Data Grid | 1 |
| Published catalog entries | 562 |
| Purpose-based categories / task guides | 59 / 59 |
| Searchable content pages | 683 |
| Unmapped source occurrences | 0 |
| Missing referenced blocks / failed page captures | 0 / 0 |

The Notion connector exposed page text but could not query this public database across workspaces. It also omitted some embedded GitHub cards. The public, unauthenticated `loadPageChunk` endpoint supplied their original URLs. Pagination was exhausted and every referenced content block was captured. Snapshots whitelist editorial content; account, workspace, and user records were not copied.

## Editorial treatment

Every distinct entry has an English explanation of what it does and a concise `Good for` statement. The collection includes React libraries, JavaScript and TypeScript utilities, backend services, developer tools, learning resources, and reference applications. All were retained and reorganized into six navigation groups and 59 purpose-based categories.

Repeated projects share one overview. For example, both cmdk bookmarks resolve to one entry; 16 repeated project names were consolidated across different URLs. `migration/report.json` maps each of the 577 original URLs and all 612 occurrences to the destination ID. Original headings and URLs remain in the snapshots even when their spelling or identity was corrected.

Twenty-six links were corrected, with reasons in `migration/link-corrections.json` and HTTP verification in `migration/correction-checks.json`. Examples include outdated documentation paths, HTTP to HTTPS, and domains that now describe a different product. Cal-Heatmap and React Chrono use their official repositories because the saved documentation domains redirect to unrelated content, despite returning HTTP 200. Reachability alone does not establish project identity. Original URLs are never overwritten in the source inventory.

## Verification limits

The original URL check returned 544 HTTP 200 responses, 16 HTTP 404 responses, 9 timeouts or transport errors, 4 HTTP 429 responses, 2 HTTP 403 responses, one HTTP 503, and one HTTP 401. Metadata and relevant primary documentation informed the editorial pass. An HTTP 200 does not prove that a package is maintained, compatible, or appropriate for a particular application.

After corrections and deduplication, four entries still have an unavailable saved source: Next Docs, Next.js App Router Training, Onboarding Lib, and React CodeJar. Their cards and details carry a historical-reference notice. Twelve other entries have unconfirmed reachability because of timeouts or access restrictions; these are not labeled discontinued. The exact lists are recorded in `migration/report.json`.

The descriptions are concise editorial starting points. They do not imply a complete API, license, accessibility, performance, or security audit of all 562 projects. Follow each source for current setup and feature details.

## Files and ongoing ownership

- `migration/notion/blocks/`: sanitized public-page snapshots.
- `migration/notion/items.json`: all source occurrences.
- `migration/notion/unique-items.json`: distinct original URLs with provenance.
- `migration/editorial-*.tsv`: original English editorial pass (pipe-delimited).
- `migration/report.json`: complete reconciliation and corrections.
- `content/libraries.ts` and `content/categories.ts`: canonical editable content after migration.

The site builds entirely from local content. No Notion API, account, database, or runtime sync is needed to maintain or publish it.
