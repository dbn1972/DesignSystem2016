/**
 * Visual regression tests for core UX4G components.
 *
 * These tests navigate to the live component documentation pages,
 * take screenshots, and compare against stored baselines.
 *
 * First run:  npx playwright test --update-snapshots
 * Subsequent: npx playwright test
 */

import { test, expect, Page } from '@playwright/test';

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Wait for the page to be visually stable (no pending network/animations) */
async function waitForStable(page: Page) {
  await page.waitForLoadState('networkidle');
  // Let CSS transitions settle
  await page.waitForTimeout(300);
}

/** Hide dynamic content that changes between runs (timestamps, random IDs) */
async function maskDynamic(page: Page) {
  await page.addStyleTag({
    content: `
      /* Hide elements that change between runs */
      [data-testid="timestamp"],
      .ux4g-spinner,
      .animate-spin { visibility: hidden !important; }
    `,
  });
}

// ── Button ────────────────────────────────────────────────────────────────────

test.describe('Button component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/button');
    await waitForStable(page);
    await maskDynamic(page);
  });

  test('button page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('button-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });

  test('primary button variant', async ({ page }) => {
    // Component pages render buttons inside demo sections
    const primaryBtn = page.locator('button').filter({ hasText: /primary|submit|apply/i }).first();
    if (await primaryBtn.isVisible()) {
      await expect(primaryBtn).toHaveScreenshot('button-primary.png');
    }
  });

  test('secondary button variant', async ({ page }) => {
    const secondaryBtn = page.locator('button').nth(1);
    if (await secondaryBtn.isVisible()) {
      await expect(secondaryBtn).toHaveScreenshot('button-secondary.png');
    }
  });

  test('destructive button variant', async ({ page }) => {
    const destructiveBtn = page.locator('button').filter({ hasText: /delete|remove|danger/i }).first();
    if (await destructiveBtn.count() > 0 && await destructiveBtn.isVisible()) {
      await expect(destructiveBtn).toHaveScreenshot('button-destructive.png');
    }
  });

  test('button hover state', async ({ page }) => {
    const btn = page.locator('button[type="button"]').first();
    if (await btn.isVisible()) {
      await btn.hover();
      await page.waitForTimeout(100);
      await expect(btn).toHaveScreenshot('button-primary-hover.png');
    }
  });

  test('button focus state', async ({ page }) => {
    const btn = page.locator('button[type="button"]').first();
    if (await btn.isVisible()) {
      await btn.focus();
      await page.waitForTimeout(100);
      await expect(btn).toHaveScreenshot('button-primary-focus.png');
    }
  });
});

// ── Input ─────────────────────────────────────────────────────────────────────

test.describe('Input component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/input');
    await waitForStable(page);
    await maskDynamic(page);
  });

  test('input page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('input-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });

  test('default input state', async ({ page }) => {
    const input = page.locator('.ux4g-input').first();
    if (await input.isVisible()) {
      await expect(input).toHaveScreenshot('input-default.png');
    }
  });

  test('input error state', async ({ page }) => {
    const errorInput = page.locator('.ux4g-input--error').first();
    if (await errorInput.isVisible()) {
      await expect(errorInput).toHaveScreenshot('input-error.png');
    }
  });

  test('input focus state', async ({ page }) => {
    const input = page.locator('.ux4g-input').first();
    if (await input.isVisible()) {
      await input.focus();
      await expect(input).toHaveScreenshot('input-focus.png');
    }
  });
});

// ── Alert ─────────────────────────────────────────────────────────────────────

test.describe('Alert component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/alert');
    await waitForStable(page);
    await maskDynamic(page);
  });

  test('alert page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('alert-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });

  test('info alert variant', async ({ page }) => {
    const alert = page.locator('.ux4g-alert--info').first();
    if (await alert.isVisible()) {
      await expect(alert).toHaveScreenshot('alert-info.png');
    }
  });

  test('success alert variant', async ({ page }) => {
    const alert = page.locator('.ux4g-alert--success').first();
    if (await alert.isVisible()) {
      await expect(alert).toHaveScreenshot('alert-success.png');
    }
  });

  test('warning alert variant', async ({ page }) => {
    const alert = page.locator('.ux4g-alert--warning').first();
    if (await alert.isVisible()) {
      await expect(alert).toHaveScreenshot('alert-warning.png');
    }
  });

  test('error alert variant', async ({ page }) => {
    const alert = page.locator('.ux4g-alert--error').first();
    if (await alert.isVisible()) {
      await expect(alert).toHaveScreenshot('alert-error.png');
    }
  });
});

// ── Badge ─────────────────────────────────────────────────────────────────────

test.describe('Badge component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/badge');
    await waitForStable(page);
  });

  test('badge page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('badge-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 700 },
    });
  });
});

// ── Card ──────────────────────────────────────────────────────────────────────

test.describe('Card component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/card');
    await waitForStable(page);
  });

  test('card page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('card-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });
});

// ── Checkbox ──────────────────────────────────────────────────────────────────

test.describe('Checkbox component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/checkbox');
    await waitForStable(page);
  });

  test('checkbox page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('checkbox-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
  });
});

// ── Select ────────────────────────────────────────────────────────────────────

test.describe('Select component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/select');
    await waitForStable(page);
  });

  test('select page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('select-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
  });
});

// ── Table ─────────────────────────────────────────────────────────────────────

test.describe('Table component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/table');
    await waitForStable(page);
  });

  test('table page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('table-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 900 },
    });
  });
});

// ── Tabs ──────────────────────────────────────────────────────────────────────

test.describe('Tabs component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/tabs');
    await waitForStable(page);
  });

  test('tabs page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('tabs-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
  });
});

// ── Progress ──────────────────────────────────────────────────────────────────

test.describe('Progress component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/progress');
    await waitForStable(page);
  });

  test('progress page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('progress-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 700 },
    });
  });
});

// ── Breadcrumb ────────────────────────────────────────────────────────────────

test.describe('Breadcrumb component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/breadcrumb');
    await waitForStable(page);
  });

  test('breadcrumb page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('breadcrumb-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 700 },
    });
  });
});

// ── Pagination ────────────────────────────────────────────────────────────────

test.describe('Pagination component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/pagination');
    await waitForStable(page);
  });

  test('pagination page matches snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('pagination-page.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 700 },
    });
  });
});
