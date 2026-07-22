const { defineConfig } = require('cypress');
const { defineConfig: grepConfig } = require('@cypress/grep/src/plugin');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://example.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
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
