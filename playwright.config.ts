import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  testMatch: '**/*.visual.ts',

  // Run against the local dev server
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },

  use: {
    baseURL: 'http://localhost:5173',
    // Consistent viewport for reproducible screenshots
    viewport: { width: 1280, height: 720 },
    // Disable animations so screenshots are deterministic
    reducedMotion: 'reduce',
    // Wait for fonts and images to load
    actionTimeout: 10_000,
  },

  // Screenshot comparison settings
  expect: {
    toHaveScreenshot: {
      // Allow 0.2% pixel difference (anti-aliasing tolerance)
      maxDiffPixelRatio: 0.002,
      // Threshold per pixel (0–1)
      threshold: 0.1,
      animations: 'disabled',
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Store snapshots next to test files
  snapshotDir: './tests/visual/__snapshots__',

  // On CI, fail if snapshots are missing (don't auto-create)
  updateSnapshots: process.env.CI ? 'none' : 'missing',

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
  ],
});
