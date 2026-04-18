# Getting Started

## One-Line Install (Hosted CDN)

Add this to your HTML, just before `</body>`:

```html
<script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
```

The toolkit auto-initializes with default settings. A floating accessibility button appears in the bottom-right corner of every page.

## Script Tag + Auto-Init with Config

Set configuration before loading the script:

```html
<script>
  window.UX4G_A11Y_CONFIG = {
    launcherPosition: 'bottom-left',
    storageKey: 'my-site-a11y',
    skipToContentSelector: '#main',
    labels: { panelTitle: 'सुगम्यता सेटिंग्स' }
  };
</script>
<script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
```

## Manual Init

Disable auto-init and call `init()` yourself:

```html
<script>
  window.UX4G_A11Y_CONFIG = { __manualInit: true };
</script>
<script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    UX4GA11y.init({
      launcherPosition: 'bottom-right',
      storageKey: 'gov-a11y',
      disabledFeatures: ['readingMask'],
    });
  });
</script>
```

## Self-Hosted

Download the distribution files and host them on your own server:

```
/assets/ux4g-a11y/
├── ux4g-a11y.min.js
├── a11y-global.css
└── a11y-panel.css
```

Then include them:

```html
<link rel="stylesheet" href="/assets/ux4g-a11y/a11y-global.css">
<link rel="stylesheet" href="/assets/ux4g-a11y/a11y-panel.css">
<script src="/assets/ux4g-a11y/ux4g-a11y.min.js" defer></script>
```

If CSS files are in the same directory as the JS file, the script auto-detects and loads them. If they're elsewhere, include the `<link>` tags manually.

## Verify It Works

After installation:

1. Refresh the page
2. Look for the blue accessibility button (bottom-right by default)
3. Click it — the settings panel should open
4. Toggle "High Contrast" — the page should change
5. Refresh the page — the setting should persist
6. Press `Alt+A` (or `⌥ A` on Mac) — the panel should toggle

## Keyboard Shortcut

`Alt + A` (Windows/Linux) or `⌥ A` (macOS) opens/closes the panel from anywhere on the page.
