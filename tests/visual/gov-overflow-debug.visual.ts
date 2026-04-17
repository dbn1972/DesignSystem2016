import { test } from '@playwright/test';
test('debug gov 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto('/governance');
  await page.waitForLoadState('networkidle');
  const overflowing = await page.evaluate(() => {
    const r: string[] = [];
    document.querySelectorAll('*').forEach(el => {
      if (el.scrollWidth > document.documentElement.clientWidth + 5) {
        const cls = (el.className?.toString?.() || '').slice(0, 100);
        r.push(`${el.tagName} sw=${el.scrollWidth} cls=${cls}`);
      }
    });
    return r.slice(0, 8);
  });
  console.log(JSON.stringify(overflowing, null, 2));
});
