import { test, expect } from '@playwright/test';

test('meta is correct', async ({ page }) => {
  await page.goto("http://127.0.0.1:3001/");

  await expect(page).toHaveTitle('Home Page');
});
