# Deployment

## Ownership and build

- GitHub repository: https://github.com/laststance/react-libraries
- Vercel team and project: `laststance/react-libraries`.
- Production branch: `main`. Pull requests receive Vercel preview deployments.
- Node.js: 22.x. Package manager: pnpm 12.14.0.
- Install and build commands are pinned in `vercel.json`; output is `dist/`.
- Blume infers the canonical production origin from Vercel's `VERCEL_PROJECT_PRODUCTION_URL` during the cloud build.

The site serves static HTML and a Pagefind search index. It has no runtime Notion connection, database, or paid search service. New library entries are managed in the canonical files under `content/`.

## Release procedure

1. Open a pull request and inspect its Vercel preview.
2. Require the `Verify catalog and site` CI job to pass; address CodeRabbit findings against the current commit.
3. Merge to `main`. The Git integration starts a production deployment.
4. Confirm the deployment is Ready and its `githubCommitSha` matches the merge commit.
5. Verify the production homepage, category/detail routes, command search, mobile navigation, and browser console.

Use `--scope laststance` on every Vercel CLI command. Keep `.vercel/` and environment files untracked. The initial release's deployment URL, matching SHA, and post-deploy monitoring evidence are recorded on its pull request.

## Recovery

Before the first release there is no prior production deployment to promote. For later releases, select the previous verified deployment in the Laststance Vercel project and roll back through Vercel; revert the corresponding Git change so the next build retains the correction. Never treat a successful HTTP response as proof that the intended revision deployed.
