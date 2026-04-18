# Drupal Implementation Guide

## When to Use This

Use the hosted script-tag approach for Drupal sites. Works with Drupal 9+ and any theme.

## Option A: Theme Library (Recommended)

Add to your theme's `THEMENAME.libraries.yml`:

```yaml
ux4g-a11y:
  version: 1.0.0
  css:
    theme:
      https://cdn.ux4g.gov.in/a11y/v1/a11y-global.css: { type: external, minified: true }
      https://cdn.ux4g.gov.in/a11y/v1/a11y-panel.css: { type: external, minified: true }
  js:
    https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js: { type: external, minified: true, attributes: { defer: true } }
  dependencies: []
```

Attach it globally in `THEMENAME.info.yml`:

```yaml
libraries:
  - THEMENAME/ux4g-a11y
```

## Option B: Self-Hosted

1. Place files in `THEMENAME/assets/ux4g-a11y/`
2. Update `THEMENAME.libraries.yml`:

```yaml
ux4g-a11y:
  version: 1.0.0
  css:
    theme:
      assets/ux4g-a11y/a11y-global.css: {}
      assets/ux4g-a11y/a11y-panel.css: {}
  js:
    assets/ux4g-a11y/ux4g-a11y.min.js: { attributes: { defer: true } }
```

## Option C: Custom Module

Create a simple module `ux4g_a11y`:

```php
// ux4g_a11y.module
function ux4g_a11y_page_attachments(array &$attachments) {
  $attachments['#attached']['html_head'][] = [
    [
      '#type' => 'html_tag',
      '#tag' => 'script',
      '#value' => 'window.UX4G_A11Y_CONFIG = { storageKey: "drupal-a11y", skipToContentSelector: "#main-content" };',
    ],
    'ux4g_a11y_config',
  ];
  $attachments['#attached']['library'][] = 'ux4g_a11y/toolkit';
}
```

## Configuration

Add inline config before the script loads. In your theme's `html.html.twig`:

```twig
<script>
  window.UX4G_A11Y_CONFIG = {
    launcherPosition: "bottom-right",
    storageKey: "{{ site_name|clean_class }}-a11y",
    skipToContentSelector: "#main-content"
  };
</script>
```

## Theming

Override via CSS in your theme's stylesheet:

```css
:root {
  --primary: #1a5276;
  --card: #ffffff;
  --border: #d1d5db;
}
```

## Common Pitfalls

- **Drupal's aggregation**: The external script should not be aggregated — the `external` type handles this
- **Content Security Policy**: If your site has a strict CSP, add `cdn.ux4g.gov.in` to `script-src` and `style-src`
- **Admin toolbar z-index**: The toolkit defaults to z-index 1500 which is above Drupal's admin toolbar (1250). If needed, adjust via `--ux4g-a11y-z`
- **Skip-to-content**: Drupal themes typically use `#main-content` — verify in your theme

## Testing Checklist

- [ ] Launcher visible on all pages (including admin if desired)
- [ ] Panel opens and closes correctly
- [ ] Settings persist across page navigation
- [ ] No conflict with Drupal's modal dialogs
- [ ] No conflict with admin toolbar
- [ ] Works on mobile
- [ ] Cache cleared after installation
