# WordPress Implementation Guide

## When to Use This

Use the hosted script-tag approach for WordPress sites. No build system required. Works with any theme.

## Option A: Theme Integration (Recommended)

Add to your theme's `functions.php`:

```php
function ux4g_a11y_enqueue() {
    // Option 1: CDN hosted
    wp_enqueue_script(
        'ux4g-a11y',
        'https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js',
        array(),
        '1.0.0',
        true // Load in footer
    );

    // Optional: Add configuration
    wp_add_inline_script('ux4g-a11y', '
        window.UX4G_A11Y_CONFIG = {
            launcherPosition: "bottom-right",
            storageKey: "' . sanitize_key(get_bloginfo('name')) . '-a11y",
            skipToContentSelector: "#primary",
            labels: { panelTitle: "Accessibility Settings" }
        };
    ', 'before');
}
add_action('wp_enqueue_scripts', 'ux4g_a11y_enqueue');
```

## Option B: Self-Hosted Assets

1. Download the toolkit files
2. Place them in your theme: `wp-content/themes/your-theme/assets/ux4g-a11y/`
3. Enqueue them:

```php
function ux4g_a11y_enqueue() {
    wp_enqueue_style(
        'ux4g-a11y-global',
        get_template_directory_uri() . '/assets/ux4g-a11y/a11y-global.css',
        array(),
        '1.0.0'
    );
    wp_enqueue_style(
        'ux4g-a11y-panel',
        get_template_directory_uri() . '/assets/ux4g-a11y/a11y-panel.css',
        array(),
        '1.0.0'
    );
    wp_enqueue_script(
        'ux4g-a11y',
        get_template_directory_uri() . '/assets/ux4g-a11y/ux4g-a11y.min.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'ux4g_a11y_enqueue');
```

## Option C: Simple Paste (No PHP)

If you can edit your theme's `footer.php`, add before `</body>`:

```html
<script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
```

Or use a "Header/Footer Scripts" plugin to inject it.

## Theming

Override colors via CSS custom properties in your theme's `style.css`:

```css
:root {
  --primary: #1a5276;           /* Launcher + toggle color */
  --primary-foreground: #fff;   /* Launcher icon color */
  --card: #ffffff;              /* Panel background */
  --card-foreground: #1a1a2e;  /* Panel text */
  --border: #e2e8f0;           /* Panel borders */
  --muted: #f1f5f9;            /* Hover backgrounds */
  --muted-foreground: #64748b; /* Secondary text */
}
```

## Common Pitfalls

- **Caching plugins**: Clear cache after adding the script
- **Minification plugins**: The toolkit JS is already minified — exclude it from further minification
- **z-index conflicts**: If the launcher appears behind other elements, add `--ux4g-a11y-z: 99999;` to your `:root`
- **Skip-to-content selector**: WordPress themes typically use `#primary` or `#main` — check your theme's main content ID

## Testing Checklist

- [ ] Launcher button visible on all pages
- [ ] Panel opens on click and keyboard (Alt+A)
- [ ] Settings persist after page reload
- [ ] No layout shift when toolkit loads
- [ ] Works on mobile/tablet
- [ ] No conflicts with theme modals/dropdowns
- [ ] Print preview hides the toolkit
