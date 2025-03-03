import { test, expect } from '@playwright/test';

test('navigation smoke test', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', {level: 1, name: "ActiveX"})).toBeVisible()
  await expect(page).toHaveTitle(/ActiveX/);

  // Use the header for navigation
  let headerElement = page.getByRole('banner')
  // Navigate to the contact page
  await headerElement.getByRole('link', {name: 'Contact'}).click()
  await expect(page.getByRole('heading', {level: 1, name: "Contact"})).toBeVisible()
});
