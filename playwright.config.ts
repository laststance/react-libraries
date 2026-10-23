import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:8793",
    viewport: { width: 1440, height: 1120 },
    colorScheme: "light",
    video: { mode: "on", size: { width: 1440, height: 1120 } },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "pnpm run preview --host 127.0.0.1 --port 8793",
    url: "http://127.0.0.1:8793",
    reuseExistingServer: !process.env.CI,
  },
});
