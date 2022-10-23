import {test, expect} from '@playwright/test'

test('basic test', async ({page}) => {
  // each test gets a new browserContext
});

// test hooks such as describe, beforeEach, afterEach helps you organize your tests.
test.describe('Navigation', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://playwright.dev/');
  });

  test('main navigation', async ({page}) => {
    await expect(page).toHaveURL('https://playwright.dev/');
  })
});
