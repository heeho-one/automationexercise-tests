import { defineConfig, devices } from '@playwright/test';
import { 
  CurrentsFixtures,
  CurrentsWorkerFixtures,
  currentsReporter
} from "@currents/playwright";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

const neetoPlaywrightReporterConfig  = {
  /* Use a unique CI Build ID here.
  For more details, visit: https://help.neetoplaydash.com/p/a-e8dd98fa */
  ciBuildId: crypto.randomUUID(),
  /* Generate an API key and use it here.
  For more details, visit: https://help.neetoplaydash.com/p/a-e1c8f8ca */
  apiKey: process.env.NEETO_PLAYDASH_API_KEY || '',
  projectKey: process.env.NEETO_PLAYDASH_PROJECT_ID || '',
};

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<CurrentsFixtures, CurrentsWorkerFixtures>({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["@bigbinary/neeto-playwright-reporter", neetoPlaywrightReporterConfig ],
    currentsReporter(),
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.automationexercise.com/',

    testIdAttribute: 'data-qa',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on',
    screenshot: 'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
