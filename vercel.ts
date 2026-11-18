import { categories, libraries, overviewRedirects } from "./content/catalog.ts";

export const config = {
  framework: null,
  installCommand: "npm install --global pnpm@12.14.0 && pnpm install --frozen-lockfile",
  buildCommand: "pnpm run build",
  outputDirectory: "dist",
  cleanUrls: true,
  redirects: [
    ...overviewRedirects.map(({ from, to, status }) => ({ source: from, destination: to, statusCode: status })),
    // Group the retired Markdown mirrors by category to stay within Vercel's route limit.
    ...categories.map(({ id }) => {
      const slugs = libraries.filter((entry) => entry.category === id).map((entry) => entry.id);
      return {
        source: `/${id}/:library(${slugs.join("|")}).:extension(md|mdx)`,
        destination: `/${id}.:extension`,
        statusCode: 308,
      };
    }),
  ],
};
