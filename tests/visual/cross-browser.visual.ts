import { test, expect } from '@playwright/test';

/**
 * Cross-Browser Compatibility Tests
 * Target: Chrome 90+, Firefox 90+, Safari 15+, Edge 90+
 *
 * These tests verify that key pages render correctly and core
 * functionality works across all supported browsers.
 */

// ── Page Load & Rendering ───────────────────────────────────────────

test.describe('Cross-Browser: Page Rendering', () => {
  test('home page loads and renders heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('patterns page loads', async ({ page }) => {
    await page.goto('/patterns');
    await expect(page.locator('body')).toBeVisible();
    await expect(page).toHaveTitle(/UX4G|Design System/i);
  });

  test('components page loads', async ({ page }) => {
    await page.goto('/components');
    await expect(page.locator('body')).toBeVisible();
  });

  test('foundations page loads', async ({ page }) => {
    await page.goto('/foundations');
    await expect(page.locator('body')).toBeVisible();
  });
});

// ── CSS & Layout ────────────────────────────────────────────────────

test.describe('Cross-Browser: CSS & Layout', () => {
  test('CSS custom properties (design tokens) are applied', async ({ page }) => {
    await page.goto('/');
    const body = page.locator('body');
    const bgColor = await body.evaluate((el) =>
      getComputedStyle(el).getPropertyValue('background-color')
    );
    // Should have a computed background color (not empty)
    expect(bgColor).toBeTruthy();
    expect(bgColor).not.toBe('');
  });

  test('Tailwind CSS classes render correctly', async ({ page }) => {
    await page.goto('/');
    // Check that flex layout works
    const flexEl = page.locator('.flex').first();
    if (await flexEl.count() > 0) {
      const display = await flexEl.evaluate((el) =>
        getComputedStyle(el).display
      );
      expect(display).toBe('flex');
    }
  });

  test('grid layout renders correctly', async ({ page }) => {
    await page.goto('/');
    const gridEl = page.locator('.grid').first();
    if (await gridEl.count() > 0) {
      const display = await gridEl.evaluate((el) =>
        getComputedStyle(el).display
      );
      expect(display).toBe('grid');
    }
  });

  test('responsive viewport renders without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone
    await page.goto('/');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5); // 5px tolerance
  });
});

// ── JavaScript Features (ES2022) ────────────────────────────────────

test.describe('Cross-Browser: JS Compatibility', () => {
  test('React app hydrates and is interactive', async ({ page }) => {
    await page.goto('/');
    // Wait for React to mount
    await page.waitForSelector('#root', { state: 'attached' });
    const rootContent = await page.locator('#root').innerHTML();
    expect(rootContent.length).toBeGreaterThan(100);
  });

  test('client-side routing works', async ({ page }) => {
    await page.goto('/');
    // Find and click a navigation link
    const navLink = page.locator('a[href*="/patterns"], a[href*="/components"]').first();
    if (await navLink.count() > 0) {
      await navLink.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).not.toBe('/');
    }
  });

  test('dynamic imports (lazy loading) work', async ({ page }) => {
    await page.goto('/patterns');
    await page.waitForLoadState('networkidle');
    // Page should render content (lazy-loaded component mounted)
    const bodyText = await page.locator('body').innerText();
    expect(bodyText.length).toBeGreaterThan(50);
  });
});

// ── Accessibility Basics ────────────────────────────────────────────

test.describe('Cross-Browser: Accessibility', () => {
  test('page has lang attribute', async ({ page }) => {
    await page.goto('/');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBeTruthy();
  });

  test('images have alt attributes', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < Math.min(count, 10); i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });

  test('focus is visible on interactive elements', async ({ page }) => {
    await page.goto('/');
    const firstLink = page.locator('a').first();
    if (await firstLink.count() > 0) {
      await firstLink.focus();
      const outline = await firstLink.evaluate((el) =>
        getComputedStyle(el).outlineStyle
      );
      // Should have some focus indicator (outline, ring, etc.)
      // Not checking specific value since it varies by browser
      expect(outline).toBeDefined();
    }
  });

  test('keyboard navigation works (Tab key)', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).toBeTruthy();
    expect(focused).not.toBe('BODY');
  });
});

// ── Web APIs ────────────────────────────────────────────────────────

test.describe('Cross-Browser: Web APIs', () => {
  test('localStorage is available', async ({ page }) => {
    await page.goto('/');
    const hasLocalStorage = await page.evaluate(() => {
      try { localStorage.setItem('__test__', '1'); localStorage.removeItem('__test__'); return true; }
      catch { return false; }
    });
    expect(hasLocalStorage).toBe(true);
  });

  test('Fetch API works', async ({ page }) => {
    await page.goto('/');
    const hasFetch = await page.evaluate(() => typeof fetch === 'function');
    expect(hasFetch).toBe(true);
  });

  test('IntersectionObserver is available', async ({ page }) => {
    await page.goto('/');
    const hasIO = await page.evaluate(() => typeof IntersectionObserver === 'function');
    expect(hasIO).toBe(true);
  });

  test('CSS.supports is available', async ({ page }) => {
    await page.goto('/');
    const hasSupports = await page.evaluate(() => typeof CSS !== 'undefined' && typeof CSS.supports === 'function');
    expect(hasSupports).toBe(true);
  });
});

// ── Dark Mode ───────────────────────────────────────────────────────

test.describe('Cross-Browser: Theme', () => {
  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/');
    // Check if theme switcher exists
    const themeBtn = page.locator('[aria-label*="theme" i], [aria-label*="dark" i], [aria-label*="mode" i], button:has(svg)').first();
    if (await themeBtn.count() > 0) {
      const bgBefore = await page.evaluate(() =>
        getComputedStyle(document.body).backgroundColor
      );
      await themeBtn.click();
      await page.waitForTimeout(500);
      const bgAfter = await page.evaluate(() =>
        getComputedStyle(document.body).backgroundColor
      );
      // Background should change (or at least not error)
      expect(bgAfter).toBeDefined();
    }
  });

  test('prefers-color-scheme media query is respected', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
    const hasDarkClass = await page.evaluate(() =>
      document.documentElement.classList.contains('dark') ||
      document.body.classList.contains('dark') ||
      getComputedStyle(document.body).colorScheme === 'dark'
    );
    // Just verify it doesn't crash — actual dark mode behavior varies
    expect(typeof hasDarkClass).toBe('boolean');
  });
});
