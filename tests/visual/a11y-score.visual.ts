import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility score audit across key pages.
 * Reports violation counts per page — lower is better, 0 is perfect.
 */

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Patterns', path: '/patterns' },
  { name: 'Components', path: '/components' },
  { name: 'Foundations', path: '/foundations' },
  { name: 'Sign-In Pattern', path: '/patterns/identity/sign-in' },
  { name: 'Governance', path: '/governance' },
];

for (const pg of pages) {
  test(`A11y audit: ${pg.name}`, async ({ page }) => {
    await page.goto(pg.path);
    await page.waitForLoadState('networkidle');
    const results = await new AxeBuilder({ page }).analyze();
    
    console.log(`\n=== ${pg.name} (${pg.path}) ===`);
    console.log(`Violations: ${results.violations.length}`);
    console.log(`Passes: ${results.passes.length}`);
    const total = results.violations.length + results.passes.length;
    const score = total > 0 ? Math.round((results.passes.length / total) * 100) : 100;
    console.log(`Score: ${score}%`);
    
    if (results.violations.length > 0) {
      for (const v of results.violations) {
        console.log(`  ❌ [${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} instances)`);
      }
    }
    
    // Don't fail — just report
    expect(true).toBe(true);
  });
}
