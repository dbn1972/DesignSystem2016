import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const pg of [
  { name: 'Patterns', path: '/patterns' },
  { name: 'Components', path: '/components' },
  { name: 'Sign-In', path: '/patterns/identity/sign-in' },
]) {
  test(`debug ${pg.name}`, async ({ page }) => {
    await page.goto(pg.path);
    await page.waitForLoadState('networkidle');
    const results = await new AxeBuilder({ page }).analyze();
    for (const v of results.violations) {
      console.log(`\n[${v.impact}] ${v.id}`);
      for (const node of v.nodes) {
        console.log(`  HTML: ${node.html.slice(0, 250)}`);
        console.log(`  Target: ${JSON.stringify(node.target)}`);
        console.log(`  Fix: ${node.failureSummary?.slice(0, 200)}`);
      }
    }
  });
}
