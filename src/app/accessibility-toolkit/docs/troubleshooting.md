# Troubleshooting Guide

## Widget Not Loading

**Symptom**: No accessibility button appears on the page.

**Checks**:
1. Open browser DevTools → Console. Look for errors.
2. Check the Network tab — is the script loading? (200 status)
3. Verify the script URL is correct and accessible
4. Check if a Content Security Policy (CSP) is blocking the script
5. Ensure the script has `defer` attribute (it needs the DOM to be ready)
6. Check if another script error earlier on the page is preventing execution

**Fix for CSP**:
```
Content-Security-Policy: script-src 'self' cdn.ux4g.gov.in; style-src 'self' cdn.ux4g.gov.in cdn.jsdelivr.net;
```

## Duplicate Initialization

**Symptom**: Two launcher buttons appear, or console shows "already initialized" warnings.

**Cause**: The script is included twice on the page.

**Fix**: Ensure only one `<script>` tag for `ux4g-a11y.min.js` exists. The toolkit has a guard against double-init, but the script itself shouldn't be loaded twice.

## Settings Not Persisting

**Symptom**: Settings reset after page reload.

**Checks**:
1. Open DevTools → Application → Local Storage
2. Look for the key `ux4g-a11y` (or your custom `storageKey`)
3. If missing, localStorage may be disabled or full
4. Check if the site is in private/incognito mode (localStorage may not persist)
5. Verify the `storageKey` is the same across all pages

## CSS Conflicts

**Symptom**: Toolkit UI looks broken, wrong colors, or misaligned.

**Checks**:
1. Inspect the launcher/panel in DevTools
2. Look for host-site CSS overriding `.ux4g-a11y-*` classes
3. Check if a CSS reset is stripping the toolkit's styles

**Fix**: The toolkit uses `!important` on critical styles. If your site's CSS still overrides them, increase specificity:
```css
html body .ux4g-a11y-launcher {
  /* your override */
}
```

## z-index Conflicts

**Symptom**: Launcher appears behind navigation, modals, or other overlays.

**Fix**: Increase the toolkit's z-index:
```css
:root {
  --ux4g-a11y-z: 99999;
}
```

Or via config:
```javascript
window.UX4G_A11Y_CONFIG = {
  tokens: { zIndex: 99999 }
};
```

## Theme Override Not Working

**Symptom**: Changed `--primary` but the launcher color didn't change.

**Checks**:
1. Ensure the CSS custom property is set on `:root`, not a nested element
2. Check DevTools → Computed styles on the launcher to see which value is being used
3. Verify no other stylesheet is overriding your `:root` variables

## WordPress-Specific Issues

**Caching**: Clear your caching plugin (WP Super Cache, W3 Total Cache, etc.) after adding the script.

**Minification**: If using Autoptimize or similar, exclude `ux4g-a11y` from JS optimization — it's already minified.

**Theme conflicts**: Some themes set `overflow: hidden` on `<body>` which can conflict with the panel's scroll lock. Test with the theme's default settings first.

## Drupal-Specific Issues

**Library not loading**: Verify the library is attached in `.info.yml` and clear Drupal's cache (`drush cr`).

**Admin toolbar overlap**: The toolkit's z-index (1500) is above Drupal's toolbar (1250). If you've customized the toolbar z-index, adjust `--ux4g-a11y-z` accordingly.

## Mobile Layout Issues

**Symptom**: Panel doesn't go full-width on mobile, or launcher overlaps content.

**Checks**:
1. Ensure the viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
2. Check if the host site has `overflow-x: hidden` on `<html>` or `<body>`
3. The panel goes full-width at ≤480px — verify your viewport width

## Script Loading Order

The toolkit script should load after the DOM is ready. Always use `defer`:

```html
<!-- Correct -->
<script src="ux4g-a11y.min.js" defer></script>

<!-- Also correct -->
<script src="ux4g-a11y.min.js"></script>  <!-- placed before </body> -->

<!-- Problematic -->
<script src="ux4g-a11y.min.js" async></script>  <!-- may run before DOM is ready -->
```

## Reporting Issues

If you encounter a bug:
1. Note the browser and version
2. Note the CMS/framework and version
3. Take a screenshot
4. Copy any console errors
5. Report to: accessibility@ux4g.gov.in or github.com/dbn1972/DesignSystem2016/issues
