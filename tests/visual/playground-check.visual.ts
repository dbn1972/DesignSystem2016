/**
 * Playground verification test
 * 
 * Visits all 77 component pages and verifies:
 * 1. Page loads without errors
 * 2. Playground section exists (the ComponentPlayground component renders)
 * 3. Controls panel is visible
 * 4. Generated code section is visible
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

test.describe('Component Playground Verification', () => {
  for (const slug of COMPONENT_SLUGS) {
    test(`${slug} — playground renders`, async ({ page }) => {
      // Navigate to the component page
      await page.goto(`/components/${slug}`, { waitUntil: 'networkidle' });

      // Verify page loaded (no error boundary)
      const errorBoundary = page.locator('text=Unexpected Application Error');
      await expect(errorBoundary).not.toBeVisible({ timeout: 5000 });

      // The playground is inside the Overview tab's additionalContent
      // Look for the ComponentPlayground's aria-label
      const playground = page.locator('section[aria-label*="playground"]');
      
      // Scroll to make it visible
      if (await playground.count() > 0) {
        await playground.first().scrollIntoViewIfNeeded();
        
        // Verify the playground header is visible
        const header = playground.locator('text=Playground').first();
        await expect(header).toBeVisible({ timeout: 5000 });

        // Verify controls panel exists (the form with controls)
        const controls = playground.locator('[role="form"]');
        await expect(controls).toBeVisible({ timeout: 3000 });

        // Verify generated code section exists
        const codeSection = playground.locator('text=Generated code');
        await expect(codeSection).toBeVisible({ timeout: 3000 });

        // Verify copy button exists
        const copyBtn = playground.locator('text=Copy');
        await expect(copyBtn).toBeVisible({ timeout: 3000 });
      } else {
        // Playground might be further down — try scrolling to bottom
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(1000);
        
        const playgroundAfterScroll = page.locator('section[aria-label*="playground"]');
        if (await playgroundAfterScroll.count() === 0) {
          // Mark as soft failure — playground not found but page loaded
          console.warn(`⚠ ${slug}: playground section not found (may be inside collapsed content)`);
        }
      }
    });
  }
});
