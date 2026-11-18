# Deployment

## Ownership and build

- GitHub repository: https://github.com/laststance/react-web-dev-wiki
- Vercel team and project: `laststance/react-web-dev-wiki`. Production is https://react-web-dev-wiki.vercel.app.
- Production branch: `main`. Pull requests receive Vercel preview deployments.
- Node.js: 22.x. Package manager: pnpm 12.14.0.
- Install and build commands are pinned in `vercel.ts`. It also registers the permanent redirects from old library URLs to category rows. The output directory is `dist/`.
- Blume infers the canonical production origin from Vercel's `VERCEL_PROJECT_PRODUCTION_URL` during the cloud build.

The site serves static HTML and a Pagefind search index. It has no runtime Notion connection, database, or paid search service. New library entries are managed in the canonical files under `content/`.

## Release procedure

1. Open a pull request and inspect its Vercel preview.
2. Require the `Verify catalog and site` CI job to pass; address CodeRabbit findings against the current commit.
3. Merge to `main`. The Git integration starts a production deployment.
4. Confirm the deployment is Ready and its `githubCommitSha` matches the merge commit.
5. Open Data fetching from the homepage and follow a linked name to its official docs. Visit a retired overview URL and confirm the matching category row is in view. Check name and task searches, mobile navigation, and the browser console.

Use `--scope laststance` on every Vercel CLI command. Keep `.vercel/` and environment files untracked. The initial release's deployment URL, matching SHA, and post-deploy monitoring evidence are recorded on its pull request.

## Recovery

1. In the Laststance Vercel project, use Instant Rollback to restore the last verified production deployment. Open a category on the production domain to confirm recovery.
2. Revert or fix the Git change on `main`. Wait for the corrected deployment to be Ready, verify its `githubCommitSha`, and open a category at its deployment URL.
3. An Instant Rollback pauses automatic assignment of production domains. Run `vercel promote <corrected-deployment-url> --scope laststance` to publish the verified build and resume automatic assignment. Confirm that the production domain serves that deployment and the project's rollback has ended. [Vercel's rollback recovery guide](https://vercel.com/docs/instant-rollback#undo-a-rollback)
