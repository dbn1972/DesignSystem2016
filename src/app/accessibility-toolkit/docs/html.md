# Plain HTML / Static Site Implementation Guide

## When to Use This

Use this for any static HTML website, government portal, or site without a CMS or framework.

## Minimal Install

Add before `</body>`:

```html
<script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
```

Done. The toolkit auto-initializes on every page that includes this script.

## With Configuration

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Government Service Portal</title>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <header>...</header>
  <main id="main">
    <h1>Welcome</h1>
    <p>Page content here.</p>
  </main>
  <footer>...</footer>

  <script>
    window.UX4G_A11Y_CONFIG = {
      launcherPosition: 'bottom-right',
      storageKey: 'portal-a11y',
      skipToContentSelector: '#main',
      respectReducedMotion: true,
    };
  </script>
  <script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
</body>
</html>
```

## Self-Hosted

Download and place files on your server:

```
/assets/ux4g-a11y/
├── ux4g-a11y.min.js
├── a11y-global.css
└── a11y-panel.css
```

Include them:

```html
<link rel="stylesheet" href="/assets/ux4g-a11y/a11y-global.css">
<link rel="stylesheet" href="/assets/ux4g-a11y/a11y-panel.css">
<script src="/assets/ux4g-a11y/ux4g-a11y.min.js" defer></script>
```

## Multi-Page Sites

The script is safe to include on every page. Settings persist via localStorage — users set their preferences once and they apply across all pages.

Each page should include the same script tag. The toolkit detects if it's already initialized and won't duplicate itself.

## Using the JavaScript API

After the toolkit loads, you can control it programmatically:

```html
<button onclick="UX4GA11y.open()">Open Accessibility Panel</button>
<button onclick="UX4GA11y.reset()">Reset All Settings</button>
<button onclick="alert(JSON.stringify(UX4GA11y.getState()))">Show Current State</button>
```

## Hindi Labels

```html
<script>
  window.UX4G_A11Y_CONFIG = {
    labels: {
      panelTitle: 'सुगम्यता सेटिंग्स',
      launcherLabel: 'सुगम्यता सेटिंग्स खोलें',
      closePanel: 'सुगम्यता सेटिंग्स बंद करें',
      resetAll: 'सभी सेटिंग्स रीसेट करें',
      // ... see configuration reference for all label keys
    }
  };
</script>
```

## Theming

Override the toolkit's appearance with CSS custom properties:

```html
<style>
  :root {
    --primary: #1a5276;
    --primary-foreground: #ffffff;
    --card: #fefefe;
    --card-foreground: #111827;
    --border: #d1d5db;
    --muted: #f3f4f6;
    --muted-foreground: #6b7280;
    --ring: #1a5276;
    --destructive: #dc2626;
  }
</style>
```

## Testing Checklist

- [ ] Blue accessibility button visible in bottom-right corner
- [ ] Clicking opens the settings panel
- [ ] Toggle "High Contrast" — page appearance changes
- [ ] Refresh page — setting persists
- [ ] Press Alt+A — panel toggles
- [ ] Tab through panel controls — all are keyboard accessible
- [ ] Panel closes with Escape key
- [ ] No horizontal scrollbar appears
- [ ] Works on mobile (panel goes full-width)
