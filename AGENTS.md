# React Libraries

Use English for code, documentation, and editorial content. Preserve the approved light/dark tokens in DESIGN.md.

## Content

- Edit content/libraries.ts and content/categories.ts; never edit generated docs/*.mdx directly.
- Preserve migration source IDs and snapshots. Notion is an archived migration source, not a runtime dependency.
- Include a concise purpose and a concrete recommended use case for every entry.
- Verify changed external links and material product claims against primary sources.

## Testing

- Use `test`, not `it`; name observable behavior and use Arrange / Act / Assert.
- Run `pnpm run check`, `pnpm run doctor`, `pnpm run validate`, `pnpm run build`, and `pnpm test`.
- Playwright checks include recordings; inspect motion using extracted video frames.
- Keep screenshots and test results out of the Git repository; attach relevant evidence to PRs.

## Delivery

- GitHub organization: laststance. GitHub account: ryota-murakami.
- Vercel team: laststance. Always use `--scope laststance`.
- Do not expose credentials in logs or committed files.
