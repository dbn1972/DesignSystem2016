import { test, expect } from '@playwright/test';

const pages = [
  { name: 'Foundations', path: '/foundations' },
  { name: 'Components', path: '/components' },
  { name: 'Patterns', path: '/patterns' },
  { name: 'Services', path: '/services' },
  { name: 'Systems', path: '/systems' },
  { name: 'Resources', path: '/resources' },
  { name: 'Governance', path: '/governance' },
];

const breakpoints = [
  { name: '320px', width: 320, height: 568 },
  { name: '375px', width: 375, height: 812 },
  { name: '768px', width: 768, height: 1024 },
  { name: '1024px', width: 1024, height: 768 },
  { name: '1440px', width: 1440, height: 900 },
];

for (const pg of pages) {
  for (const bp of breakpoints) {
    test(`${pg.name} @ ${bp.name}: no horizontal scroll`, async ({ page }) => {
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await page.goto(pg.path);
      await page.waitForLoadState('networkidle');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
    });
  }
}
