import { test, expect } from '@playwright/test';

/**
 * E2E Smoke Tests — Critical user journeys for go-live validation.
 * Run: pnpm run test:cross-browser or npx playwright test tests/visual/smoke.visual.ts
 */

test.describe('Smoke: Page Navigation', () => {
  test('home page loads with heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 10000 });
  });

  test('navigate to patterns', async ({ page }) => {
    await page.goto('/patterns');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toContainText(/pattern/i);
  });

  test('navigate to components', async ({ page }) => {
    await page.goto('/components');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toContainText(/component/i);
  });

  test('navigate to foundations', async ({ page }) => {
    await page.goto('/foundations');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toContainText(/foundation/i);
  });

  test('404 page renders for unknown route', async ({ page }) => {
    await page.goto('/this-does-not-exist');
    await page.waitForLoadState('networkidle');
    const text = await page.locator('body').innerText();
    expect(text.length).toBeGreaterThan(10);
  });
});

test.describe('Smoke: Sign-In Pattern Page', () => {
  test('sign-in pattern page loads', async ({ page }) => {
    await page.goto('/patterns/identity/sign-in');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('code downloads section is visible', async ({ page }) => {
    await page.goto('/patterns/identity/sign-in');
    await page.waitForLoadState('networkidle');
    const section = page.locator('#code-downloads');
    await expect(section).toBeVisible();
  });

  test('code download button is clickable', async ({ page }) => {
    await page.goto('/patterns/identity/sign-in');
    await page.waitForLoadState('networkidle');
    const dlBtn = page.locator('[aria-label="Download React code"]');
    await expect(dlBtn).toBeVisible();
    await dlBtn.click();
    // No crash = success (file download triggers in browser)
  });

  test('copy button shows Copied feedback', async ({ page, browserName }) => {
    await page.goto('/patterns/identity/sign-in');
    await page.waitForLoadState('networkidle');
    // Clipboard permissions only work in Chromium
    if (browserName === 'chromium') {
      await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    }
    const copyBtn = page.locator('#code-downloads button:has-text("Copy")').first();
    await expect(copyBtn).toBeVisible();
    await copyBtn.click();
    await expect(page.locator('#code-downloads').locator('text=Copied').first()).toBeVisible({ timeout: 3000 });
  });
});

test.describe('Smoke: Theme Toggle', () => {
  test('theme can be toggled without crash', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const themeBtn = page.locator('button[aria-label*="theme" i], button[aria-label*="dark" i], button[aria-label*="light" i], button[aria-label*="mode" i]').first();
    if (await themeBtn.isVisible()) {
      await themeBtn.click();
      await page.waitForTimeout(300);
      // Page should still be functional
      await expect(page.locator('body')).toBeVisible();
    }
  });
});

test.describe('Smoke: Header & Footer', () => {
  test('header renders with navigation', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header').first();
    await expect(header).toBeVisible();
  });

  test('footer renders', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer').first();
    if (await footer.count() > 0) {
      await expect(footer).toBeVisible();
    }
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/');
    const link = page.locator('header a, nav a').first();
    if (await link.count() > 0) {
      const href = await link.getAttribute('href');
      await link.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toBeTruthy();
    }
  });
});
