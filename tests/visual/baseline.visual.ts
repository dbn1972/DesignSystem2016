/**
 * UX4G Visual Regression Baseline
 * Captures screenshot baselines for key components and pages.
 * Run: npx playwright test tests/visual/baseline.visual.ts --project=chromium
 * Update baselines: npx playwright test tests/visual/baseline.visual.ts --project=chromium --update-snapshots
 */

import { test, expect } from '@playwright/test';

// ── Key Pages ───────────────────────────────────────────────────────────

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'foundations', path: '/foundations' },
  { name: 'components-hub', path: '/components' },
  { name: 'patterns', path: '/patterns' },
  { name: 'systems', path: '/systems' },
  { name: 'services', path: '/services' },
  { name: 'resources', path: '/resources' },
  { name: 'governance', path: '/governance' },
  { name: 'getting-started', path: '/resources/getting-started' },
];

const COMPONENT_PAGES = [
  'button', 'input', 'select', 'checkbox', 'radio', 'switch',
  'alert', 'badge', 'card', 'table', 'tabs', 'accordion',
  'dialog', 'toast', 'tooltip', 'pagination', 'stepper',
  'breadcrumb', 'avatar', 'tag', 'progress', 'spinner',
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

// ── Hub Page Baselines ──────────────────────────────────────────────────

test.describe('Hub page baselines', () => {
  for (const page of PAGES) {
    test(`${page.name} — desktop`, async ({ page: p }) => {
      await p.setViewportSize({ width: 1440, height: 900 });
      await p.goto(page.path, { waitUntil: 'networkidle' });
      await p.waitForTimeout(500);
      await expect(p).toHaveScreenshot(`hub-${page.name}-desktop.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });

    test(`${page.name} — mobile`, async ({ page: p }) => {
      await p.setViewportSize({ width: 375, height: 812 });
      await p.goto(page.path, { waitUntil: 'networkidle' });
      await p.waitForTimeout(500);
      await expect(p).toHaveScreenshot(`hub-${page.name}-mobile.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });
  }
});

// ── Component Page Baselines ────────────────────────────────────────────

test.describe('Component page baselines', () => {
  for (const comp of COMPONENT_PAGES) {
    test(`${comp} — desktop`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(`/components/${comp}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      await expect(page).toHaveScreenshot(`comp-${comp}-desktop.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });
  }
});

// ── Dark Mode Baselines ─────────────────────────────────────────────────

test.describe('Dark mode baselines', () => {
  test.use({ colorScheme: 'dark' });

  const DARK_PAGES = ['home', 'foundations', 'components-hub'];

  for (const name of DARK_PAGES) {
    const page = PAGES.find((p) => p.name === name)!;
    test(`${name} — dark mode`, async ({ page: p }) => {
      await p.setViewportSize({ width: 1440, height: 900 });
      await p.goto(page.path, { waitUntil: 'networkidle' });
      await p.waitForTimeout(500);
      await expect(p).toHaveScreenshot(`dark-${name}-desktop.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });
  }
});
