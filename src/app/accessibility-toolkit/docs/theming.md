# Theming & Design System Guide

## CSS Custom Properties

The toolkit uses CSS custom properties with fallback values. Override them in your site's CSS to match your brand:

```css
:root {
  /* Primary brand color — used for launcher, toggles, badges */
  --primary: #005196;
  --primary-foreground: #ffffff;

  /* Panel surface */
  --card: #ffffff;
  --card-foreground: #1a1a2e;

  /* Borders */
  --border: #e2e8f0;

  /* Muted/secondary surfaces */
  --muted: #f1f5f9;
  --muted-foreground: #64748b;

  /* Focus ring */
  --ring: #005196;

  /* Destructive (used for launcher badge) */
  --destructive: #dc2626;

  /* UX4G design tokens (optional — used if available) */
  --ux4g-radius-full: 9999px;
  --ux4g-radius-xl: 0.75rem;
  --ux4g-radius-md: 0.375rem;
  --ux4g-radius-sm: 0.125rem;
  --ux4g-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --ux4g-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --ux4g-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  /* Toolkit-specific overrides */
  --ux4g-a11y-z: 1500;        /* z-index for the launcher */
  --ux4g-a11y-font: inherit;   /* Font family for the panel */
}
```

## Government Branding Examples

### NIC Blue Theme

```css
:root {
  --primary: #003366;
  --primary-foreground: #ffffff;
  --card: #f8fafc;
  --card-foreground: #0f172a;
  --border: #cbd5e1;
  --ring: #003366;
}
```

### Saffron Accent Theme

```css
:root {
  --primary: #ff6600;
  --primary-foreground: #ffffff;
  --card: #fffbf5;
  --card-foreground: #1a1a2e;
  --border: #fed7aa;
  --ring: #ff6600;
}
```

## Dark Mode Support

If your site has a dark mode, define dark-mode overrides:

```css
.dark, [data-theme="dark"] {
  --card: #1e293b;
  --card-foreground: #f1f5f9;
  --border: #334155;
  --muted: #334155;
  --muted-foreground: #94a3b8;
}
```

The toolkit automatically picks up these values.

## Launcher Positioning

Control via config:

```javascript
{ launcherPosition: 'bottom-right' }  // Default
{ launcherPosition: 'bottom-left' }
{ launcherPosition: 'top-right' }
{ launcherPosition: 'top-left' }
```

Or override via CSS:

```css
.ux4g-a11y-launcher-wrap {
  bottom: 2rem !important;
  right: 2rem !important;
}
```

## z-index Management

Default z-index layers:

| Element | z-index |
|---|---|
| Reading guide/mask | 1499 |
| Launcher | 1500 |
| Backdrop | 1501 |
| Panel | 1502 |

Override globally:

```css
:root {
  --ux4g-a11y-z: 99999;
}
```

## Safe Customization Patterns

Do:
- Override CSS custom properties on `:root`
- Use `--primary` to change the brand color
- Adjust `--ux4g-a11y-z` for z-index conflicts

Don't:
- Override `.ux4g-a11y-*` class styles directly (they may change between versions)
- Remove the `!important` declarations in the global CSS (they're needed to override host styles)
- Set `display: none` on `.ux4g-a11y-launcher` (use `disabledFeatures` config instead)
