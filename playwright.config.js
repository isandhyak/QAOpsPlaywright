// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  //retries : 1,
  workers: 1,
  reporter: 'html',

/*  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'only-on-failure',    
    trace: 'on-first-retry',
  },*/

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
         browserName : 'chromium',
        headless : false,
        screenshot : 'only-on-failure',    
       // trace: 'on-first-retry',
       
      },
    },

   /* {
      name: 'Mobile Testing',
      use: {
        browserName : 'chromium',
        headless : false,
        ...devices['Galaxy A55']
       },
    },*/
   
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

