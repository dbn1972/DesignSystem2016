---
sidebar_position: 1
title: Design Tokens
---

# Design Tokens

UX4G uses CSS custom properties (design tokens) with the `--ux4g-*` prefix for consistent styling across all frameworks.

## Token Categories

### Color Tokens

```css
--ux4g-color-primary: #005196;        /* Navy blue — primary actions */
--ux4g-color-primary-foreground: #fff;
--ux4g-color-destructive: #dc2626;    /* Red — destructive actions */
--ux4g-color-success: #138808;        /* India green — success states */
--ux4g-color-warning: #f59e0b;        /* Amber — warnings */
--ux4g-color-info: #005196;           /* Blue — informational */
```

### Spacing Tokens

```css
--ux4g-space-1: 4px;
--ux4g-space-2: 8px;
--ux4g-space-3: 12px;
--ux4g-space-4: 16px;
--ux4g-space-6: 24px;
--ux4g-space-8: 32px;
```

### Typography Tokens

```css
--ux4g-font-size-sm: 14px;
--ux4g-font-size-md: 16px;
--ux4g-font-size-lg: 18px;
--ux4g-font-weight-medium: 500;
--ux4g-font-weight-semibold: 600;
--ux4g-font-weight-bold: 700;
```

### Component Tokens

Each component has its own token set:

```css
/* Button */
--ux4g-button-height-sm: 32px;
--ux4g-button-height-md: 40px;
--ux4g-button-height-lg: 48px;
--ux4g-button-min-touch-target: 44px;
--ux4g-button-border-radius: 4px;
```

## Using Tokens

### In CSS

```css
.my-element {
  background: var(--ux4g-color-primary);
  padding: var(--ux4g-space-4);
  font-size: var(--ux4g-font-size-md);
}
```

### In Tailwind

Tokens are mapped to Tailwind's theme via CSS variables, so standard Tailwind classes work:

```html
<button class="bg-primary text-primary-foreground px-4 py-2">
  Submit
</button>
```

## Dark Mode

All tokens support dark mode automatically via CSS custom properties. The theme switches by changing the token values — no class toggling needed.
