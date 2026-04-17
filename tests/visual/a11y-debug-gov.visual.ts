import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('debug a11y governance', async ({ page }) => {
  await page.goto('/governance');
  await page.waitForLoadState('networkidle');
  const results = await new AxeBuilder({ page }).analyze();
  for (const v of results.violations) {
    console.log(`\n[${v.impact}] ${v.id}`);
    for (const node of v.nodes) {
      console.log(`  HTML: ${node.html.slice(0, 200)}`);
    }
  }
});
