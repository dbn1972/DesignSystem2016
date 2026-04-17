import { test, expect } from '@playwright/test';

// Sample pages from each category
const pages = [
  // Patterns
  { name: 'SignIn Pattern', path: '/patterns/identity/sign-in' },
  { name: 'Consent Capture', path: '/patterns/consent/capture' },
  { name: 'Citizen Dashboard', path: '/patterns/dashboard' },
  // Components
  { name: 'Button Component', path: '/components/button' },
  { name: 'Alert Component', path: '/components/alert' },
  // Certificate service
  { name: 'Certificate Service', path: '/reference-service/demo' },
  // Other
  { name: 'Accessibility', path: '/accessibility' },
  { name: 'Documentation', path: '/documentation' },
  { name: 'Adoption', path: '/adoption' },
  { name: 'Home', path: '/' },
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
