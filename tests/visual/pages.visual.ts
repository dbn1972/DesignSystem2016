/**
 * Visual regression tests for full pages and flows.
 * Tests the home page, foundations, and key service pages.
 */

import { test, expect, Page } from '@playwright/test';

async function waitForStable(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(400);
}

// ── Home page ─────────────────────────────────────────────────────────────────

test.describe('Home page', () => {
  test('home page hero section', async ({ page }) => {
    await page.goto('/');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('home-hero.png', {
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
  });

  test('home page full above-fold', async ({ page }) => {
    await page.goto('/');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('home-full.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 720 },
    });
  });
});

// ── Foundations ───────────────────────────────────────────────────────────────

test.describe('Foundations page', () => {
  test('foundations page matches snapshot', async ({ page }) => {
    await page.goto('/foundations');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('foundations-page.png', {
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });
});

// ── Components index ──────────────────────────────────────────────────────────

test.describe('Components index', () => {
  test('components index page', async ({ page }) => {
    await page.goto('/components');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('components-index.png', {
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });
});

// ── Dark mode ─────────────────────────────────────────────────────────────────

test.describe('Dark mode', () => {
  test('home page in dark mode', async ({ page }) => {
    await page.goto('/');
    await waitForStable(page);

    // Toggle dark mode via the ThemeSwitcher button
    const themeSwitcher = page.getByRole('button', { name: /dark mode/i });
    if (await themeSwitcher.isVisible()) {
      await themeSwitcher.click();
      await page.waitForTimeout(300);
    }

    await expect(page).toHaveScreenshot('home-dark-mode.png', {
      clip: { x: 0, y: 0, width: 1280, height: 720 },
    });
  });

  test('button component in dark mode', async ({ page }) => {
    await page.goto('/components/button');
    await waitForStable(page);

    const themeSwitcher = page.getByRole('button', { name: /dark mode/i });
    if (await themeSwitcher.isVisible()) {
      await themeSwitcher.click();
      await page.waitForTimeout(300);
    }

    await expect(page).toHaveScreenshot('button-dark-mode.png', {
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });

  test('alert component in dark mode', async ({ page }) => {
    await page.goto('/components/alert');
    await waitForStable(page);

    const themeSwitcher = page.getByRole('button', { name: /dark mode/i });
    if (await themeSwitcher.isVisible()) {
      await themeSwitcher.click();
      await page.waitForTimeout(300);
    }

    await expect(page).toHaveScreenshot('alert-dark-mode.png', {
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });
});

// ── Navigation ────────────────────────────────────────────────────────────────

test.describe('Navigation header', () => {
  test('navigation header default state', async ({ page }) => {
    await page.goto('/');
    await waitForStable(page);
    const header = page.locator('header').first();
    await expect(header).toHaveScreenshot('nav-header.png');
  });

  test('navigation header with Services menu open', async ({ page }) => {
    await page.goto('/');
    await waitForStable(page);

    // Hover over Services nav item to open mega menu
    const servicesLink = page.getByRole('link', { name: 'Services' }).first();
    if (await servicesLink.isVisible()) {
      await servicesLink.hover();
      await page.waitForTimeout(200);
      await expect(page).toHaveScreenshot('nav-services-menu.png', {
        clip: { x: 0, y: 0, width: 1280, height: 500 },
      });
    }
  });
});

// ── Reference service flow ────────────────────────────────────────────────────

test.describe('Reference service pages', () => {
  test('service blueprint overview', async ({ page }) => {
    await page.goto('/reference-service/overview');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('reference-service-overview.png', {
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });

  test('sign in page', async ({ page }) => {
    await page.goto('/reference-service/sign-in');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('reference-sign-in.png', {
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });

  test('eligibility check page', async ({ page }) => {
    await page.goto('/reference-service/eligibility');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('reference-eligibility.png', {
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });
});

// ── Responsive ────────────────────────────────────────────────────────────────

test.describe('Responsive layouts', () => {
  test('home page at mobile width (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('home-mobile.png', {
      clip: { x: 0, y: 0, width: 375, height: 812 },
    });
  });

  test('home page at tablet width (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('home-tablet.png', {
      clip: { x: 0, y: 0, width: 768, height: 900 },
    });
  });

  test('button component at mobile width', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/components/button');
    await waitForStable(page);
    await expect(page).toHaveScreenshot('button-mobile.png', {
      clip: { x: 0, y: 0, width: 375, height: 812 },
    });
  });
});
