import { test } from '@playwright/test';
test('debug', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto('/components/button');
  await page.waitForLoadState('networkidle');
  const r = await page.evaluate(() => {
    const results: string[] = [];
    document.querySelectorAll('*').forEach(el => {
      if (el.scrollWidth > 325) {
        const cls = (el.className?.toString?.() || '').slice(0, 120);
        results.push(`${el.tagName} sw=${el.scrollWidth} cls=${cls}`);
      }
    });
    return results.slice(0, 5);
  });
  console.log(JSON.stringify(r, null, 2));
});
