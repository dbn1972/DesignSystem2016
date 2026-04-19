/**
 * Visual Regression Tests — Key Site Pages
 * 
 * Screenshots of important non-component pages in light and dark mode.
 * 
 * Run: npx playwright test tests/visual/site-screenshots.visual.ts --project=chromium
 */

import { test, expect } from '@playwright/test';

const SITE_PAGES = [
  { name: 'home', path: '/' },
  { name: 'components-hub', path: '/components' },
  { name: 'foundations', path: '/foundations' },
  { name: 'patterns', path: '/patterns' },
  { name: 'governance', path: '/governance' },
  { name: 'resources', path: '/resources' },
  { name: 'getting-started', path: '/resources/getting-started' },
  { name: 'documentation', path: '/documentation' },
  { name: 'accessibility', path: '/accessibility' },
  { name: 'privacy-policy', path: '/privacy-policy' },
  { name: 'terms-of-use', path: '/terms-of-use' },
  { name: 'contributing', path: '/contributing' },
  { name: 'site-map', path: '/site-map' },
  { name: '404', path: '/this-page-does-not-exist' },
  { name: 'logos', path: '/resources/logos' },
  { name: 'api-reference', path: '/api-reference' },
];

test.describe('Site Pages — Light Mode', () => {
  for (const { name, path: pagePath } of SITE_PAGES) {
    test(`${name} — full page`, async ({ page }) => {
      await page.goto(pagePath, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      
      // Hero area screenshot
      await expect(page).toHaveScreenshot(`site-${name}-light.png`, {
        fullPage: false,
        clip: { x: 0, y: 0, width: 1280, height: 900 },
      });
    });
  }
});

test.describe('Site Pages — Dark Mode', () => {
  test.use({ colorScheme: 'dark' });

  for (const { name, path: pagePath } of SITE_PAGES) {
    test(`${name} — dark`, async ({ page }) => {
      await page.goto(pagePath, { waitUntil: 'networkidle' });
      
      const darkBtn = page.locator('button:has-text("Dark mode")');
      if (await darkBtn.count() > 0) {
        await darkBtn.click();
        await page.waitForTimeout(500);
      }
      
      await expect(page).toHaveScreenshot(`site-${name}-dark.png`, {
        fullPage: false,
        clip: { x: 0, y: 0, width: 1280, height: 900 },
      });
    });
  }
});
