import { test } from '@playwright/test';

test('debug 768px overflow', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('/security-policy');
  await page.waitForLoadState('networkidle');
  
  const overflowing = await page.evaluate(() => {
    const results: string[] = [];
    document.querySelectorAll('*').forEach(el => {
      if (el.scrollWidth > document.documentElement.clientWidth) {
        results.push(`${el.tagName}.${el.className.toString().slice(0, 80)} scrollW=${el.scrollWidth}`);
      }
    });
    return results.slice(0, 10);
  });
  
  console.log('Overflowing elements:', JSON.stringify(overflowing, null, 2));
});
