const { defineConfig } = require('@playwright/test');
const { createAzurePlaywrightConfig, ServiceOS } = require('@azure/playwright');
const { DefaultAzureCredential } = require('@azure/identity');
const config = require('./playwright.config');

// Combine your base config with the reporters you want to run in CI
const customConfig = {
  ...config,
  reporter: [
    ["html", { open: "never" }],
    ["@azure/playwright/reporter"],
  ],
};

/* Learn more about service configuration at https://aka.ms/pww/docs/config */
export default defineConfig(
  createAzurePlaywrightConfig(customConfig, {
    exposeNetwork: '<loopback>',
    connectTimeout: 3 * 60 * 1000, // 3 minutes
    os: ServiceOS.LINUX,
    credential: new DefaultAzureCredential(),
  })
);