import { defineConfig } from 'cypress';
// @ts-ignore
import { defineConfig as grepConfig } from '@cypress/grep/src/plugin';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://example.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 15000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    video: true,
    screenshotOnRunFailure: true,
    env: {
      TEST_USERNAME: process.env.TEST_USERNAME || 'standard_user',
      TEST_PASSWORD: process.env.TEST_PASSWORD || 'secret_sauce',
    },
    setupNodeEvents(on, config) {
      grepConfig(config);

      require('mochawesome-report-generator');
      on('before:browser:launch', (browser, launchOptions) => {
        return launchOptions;
      });

      return config;
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
