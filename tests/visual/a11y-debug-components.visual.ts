import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('debug a11y components', async ({ page }) => {
  await page.goto('/components');
  await page.waitForLoadState('networkidle');
  const results = await new AxeBuilder({ page }).analyze();
  for (const v of results.violations) {
    console.log(`\n[${v.impact}] ${v.id}: ${v.description}`);
    for (const node of v.nodes) {
      console.log(`  HTML: ${node.html.slice(0, 300)}`);
      console.log(`  Target: ${JSON.stringify(node.target)}`);
    }
  }
});
