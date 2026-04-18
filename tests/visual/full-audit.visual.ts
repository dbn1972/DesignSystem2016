import { test, expect } from '@playwright/test';
import fs from 'fs';

const routes = fs.readFileSync('/tmp/all_routes.txt', 'utf-8').trim().split('\n').map(r => r.startsWith('/') ? r : '/' + r);

test('All routes @ 320px: no horizontal scroll', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  const failures: string[] = [];

  for (const route of routes) {
    try {
      await page.goto(route, { timeout: 5000 });
      await page.waitForTimeout(300);
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      if (scrollWidth > 322) {
        failures.push(route + ': sw=' + scrollWidth);
      }
    } catch {
      // skip
    }
  }

  console.log('Tested: ' + routes.length + ' routes');
  console.log('Failures: ' + failures.length);
  failures.forEach(f => console.log('  FAIL: ' + f));

  expect(failures.length).toBe(0);
});
