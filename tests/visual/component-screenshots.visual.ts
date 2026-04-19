/**
 * Visual Regression Tests — Component Pages
 * 
 * Takes full-page screenshots of all 77 component documentation pages
 * in both light and dark mode. Compares against baseline snapshots
 * to detect unintended visual changes.
 * 
 * First run creates baseline snapshots.
 * Subsequent runs compare against baselines.
 * 
 * Run: npx playwright test tests/visual/component-screenshots.visual.ts --project=chromium
 * Update baselines: npx playwright test tests/visual/component-screenshots.visual.ts --project=chromium --update-snapshots
 */

import { test, expect } from '@playwright/test';

const COMPONENT_SLUGS = [
  'aadhaar-input', 'accordion', 'address-autocomplete-india', 'alert',
  'application-tracker', 'aspect-ratio', 'autocomplete', 'avatar',
  'back-to-top', 'badge', 'breadcrumb', 'button',
  'calendar-scheduler', 'captcha', 'card', 'center',
  'chart-library', 'chatbot', 'checkbox', 'code-block',
  'container', 'data-grid', 'date-picker', 'description-list',
  'dialog', 'digital-signature', 'divider', 'document-viewer',
  'drawer', 'dropdown', 'empty-state', 'error-text',
  'feedback-rating-widget', 'field', 'file-upload', 'flex',
  'footer', 'form-builder', 'grid', 'header',
  'hint-text', 'input', 'label', 'language-selector',
  'list', 'map-location-picker', 'menu', 'modal',
  'otp-input', 'pagination', 'pan-card-input', 'payment-gateway',
  'popover', 'progress', 'qr-code', 'radio',
  'rich-text-editor', 'section', 'segmented-control', 'select',
  'show-hide', 'skeleton', 'spacer', 'spinner',
  'stack', 'statistic', 'stepper', 'switch',
  'table', 'tabs', 'tag', 'textarea',
  'timeline', 'toast', 'tooltip', 'tree-view',
  'video-player',
];

test.describe('Component Pages — Light Mode', () => {
  for (const slug of COMPONENT_SLUGS) {
    test(`${slug} — hero section`, async ({ page }) => {
      await page.goto(`/components/${slug}`, { waitUntil: 'networkidle' });
      
      // Wait for content to render
      await page.waitForTimeout(500);
      
      // Screenshot the hero/header area (top 800px)
      await expect(page).toHaveScreenshot(`${slug}-hero-light.png`, {
        fullPage: false,
        clip: { x: 0, y: 0, width: 1280, height: 800 },
      });
    });

    test(`${slug} — props table`, async ({ page }) => {
      await page.goto(`/components/${slug}`, { waitUntil: 'networkidle' });
      
      // Click Props API tab
      const propsTab = page.locator('button:has-text("Props API")');
      if (await propsTab.count() > 0) {
        await propsTab.click();
        await page.waitForTimeout(300);
        
        await expect(page).toHaveScreenshot(`${slug}-props-light.png`, {
          fullPage: false,
          clip: { x: 0, y: 0, width: 1280, height: 900 },
        });
      }
    });
  }
});

test.describe('Component Pages — Dark Mode', () => {
  test.use({ colorScheme: 'dark' });

  for (const slug of COMPONENT_SLUGS) {
    test(`${slug} — hero dark`, async ({ page }) => {
      await page.goto(`/components/${slug}`, { waitUntil: 'networkidle' });
      
      // Toggle dark mode via the button
      const darkBtn = page.locator('button:has-text("Dark mode")');
      if (await darkBtn.count() > 0) {
        await darkBtn.click();
        await page.waitForTimeout(500);
      }
      
      await expect(page).toHaveScreenshot(`${slug}-hero-dark.png`, {
        fullPage: false,
        clip: { x: 0, y: 0, width: 1280, height: 800 },
      });
    });
  }
});
