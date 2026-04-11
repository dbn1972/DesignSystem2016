# @ux4g/styles Integration Guide

## Quick Integration Decision Tree

```
Do you need the complete style system?
├─ YES → @import '@ux4g/styles';
└─ NO → Continue...

Do you need all base styles (reset, typography, surfaces)?
├─ YES → @import '@ux4g/styles/base';
└─ NO → Import individual base files

Do you need utility classes (spacing, layout)?
├─ YES → @import '@ux4g/styles/utilities';
└─ NO → Skip utilities

Do you need component baselines (forms, alerts, nav)?
├─ YES → @import '@ux4g/styles/components';
└─ NO → Import individual component files
```

## Integration Patterns

### Pattern 1: Complete System (Recommended)

**Use when**: Building a new government service website from scratch

```css
/* Single import gets everything */
@import '@ux4g/styles';
```

**What you get**:
- ✓ Design tokens from @ux4g/tokens
- ✓ CSS reset
- ✓ Typography system
- ✓ Surface and elevation
- ✓ Focus indicators
- ✓ Spacing utilities
- ✓ Layout utilities
- ✓ Form styles
- ✓ Status components
- ✓ Navigation patterns

**File size**: ~40KB unminified

---

### Pattern 2: Layer-by-Layer

**Use when**: You want granular control over what's included

```css
/* Import only specific layers */
@import '@ux4g/styles/base';       /* Reset + typography + surfaces */
@import '@ux4g/styles/utilities';  /* Spacing + layout utilities */
@import '@ux4g/styles/components'; /* Forms + status + navigation */
```

**Mix and match**:
```css
/* Example: Only base + utilities, no components */
@import '@ux4g/styles/base';
@import '@ux4g/styles/utilities';
```

---

### Pattern 3: Minimal (Cherry-Pick)

**Use when**: Integrating into existing codebase with custom styles

```css
/* Import only specific files */
@import '@ux4g/styles/reset';      /* CSS reset */
@import '@ux4g/styles/typography'; /* Typography only */
@import '@ux4g/styles/forms';      /* Form controls only */
@import '@ux4g/styles/spacing';    /* Spacing utilities only */
```

**Common minimal setups**:

```css
/* Minimal #1: Just foundation */
@import '@ux4g/styles/reset';
@import '@ux4g/styles/typography';

/* Minimal #2: Forms-focused */
@import '@ux4g/styles/reset';
@import '@ux4g/styles/typography';
@import '@ux4g/styles/forms';
@import '@ux4g/styles/spacing';

/* Minimal #3: Navigation-focused */
@import '@ux4g/styles/reset';
@import '@ux4g/styles/typography';
@import '@ux4g/styles/navigation';
@import '@ux4g/styles/layout';
```

---

## Framework Integration

### React / Next.js

#### Option A: Global Styles
```tsx
// app/layout.tsx or _app.tsx
import '@ux4g/styles';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### Option B: CSS Import
```css
/* app/globals.css */
@import '@ux4g/styles';
```

```tsx
// app/layout.tsx
import './globals.css';
```

#### Usage in Components
```tsx
import '@ux4g/styles';

export function ServiceCard({ title, description }) {
  return (
    <div className="ux4g-card ux4g-p-6">
      <h3 className="ux4g-mb-2">{title}</h3>
      <p className="ux4g-mb-4">{description}</p>
      <span className="ux4g-badge ux4g-badge-success">Active</span>
    </div>
  );
}
```

---

### Angular

#### Option A: angular.json
```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@ux4g/styles/dist/index.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```

#### Option B: Global styles.css
```css
/* src/styles.css */
@import '@ux4g/styles';
```

#### Usage in Components
```typescript
@Component({
  selector: 'app-service-card',
  template: `
    <div class="ux4g-card ux4g-p-6">
      <h3 class="ux4g-mb-2">{{ title }}</h3>
      <p class="ux4g-mb-4">{{ description }}</p>
      <span class="ux4g-badge ux4g-badge-success">Active</span>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() title: string;
  @Input() description: string;
}
```

---

### Vue / Nuxt

#### Option A: nuxt.config.ts
```typescript
export default defineNuxtConfig({
  css: ['@ux4g/styles']
})
```

#### Option B: Global CSS
```css
/* assets/css/main.css */
@import '@ux4g/styles';
```

#### Usage in Components
```vue
<template>
  <div class="ux4g-card ux4g-p-6">
    <h3 class="ux4g-mb-2">{{ title }}</h3>
    <p class="ux4g-mb-4">{{ description }}</p>
    <span class="ux4g-badge ux4g-badge-success">Active</span>
  </div>
</template>

<script setup>
defineProps(['title', 'description'])
</script>
```

---

### Vanilla HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Government Service</title>
  
  <!-- Option A: From CDN (if hosted) -->
  <link rel="stylesheet" href="https://cdn.example.gov.in/@ux4g/styles/1.0.0/index.css">
  
  <!-- Option B: From node_modules -->
  <link rel="stylesheet" href="node_modules/@ux4g/styles/dist/index.css">
</head>
<body>
  <header class="ux4g-header ux4g-header-government">
    <div class="ux4g-header-container">
      <a href="/" class="ux4g-logo">Ministry of Digital Services</a>
    </div>
  </header>

  <main class="ux4g-container ux4g-py-12">
    <h1 class="ux4g-mb-6">Welcome</h1>
    
    <div class="ux4g-grid ux4g-grid-cols-3 ux4g-gap-6">
      <div class="ux4g-card">
        <h3 class="ux4g-mb-2">Service 1</h3>
        <p>Description</p>
      </div>
    </div>
  </main>
</body>
</html>
```

---

## Token Customization

### Override Tokens Before Import

```css
/* custom-theme.css */

/* Override tokens first */
:root {
  /* Brand colors */
  --ux4g-color-primary: #1E3A8A;
  --ux4g-color-secondary: #7C3AED;
  
  /* Typography */
  --ux4g-font-family-base: 'Inter', -apple-system, sans-serif;
  --ux4g-font-size-base: 1.125rem;
  
  /* Spacing adjustments */
  --ux4g-spacing-4: 1.25rem;
  --ux4g-spacing-6: 2rem;
  
  /* Border radius */
  --ux4g-radius-md: 0.5rem;
}

/* Then import styles */
@import '@ux4g/styles';
```

### Dark Mode Example

```css
:root {
  --ux4g-color-surface-primary: #FFFFFF;
  --ux4g-color-text-primary: #1C1C1C;
}

@media (prefers-color-scheme: dark) {
  :root {
    --ux4g-color-surface-primary: #1C1C1C;
    --ux4g-color-text-primary: #F9FAFB;
    --ux4g-color-surface-secondary: #2C2C2C;
    --ux4g-color-border-default: #404040;
  }
}

@import '@ux4g/styles';
```

---

## Component Extension Examples

### Custom Button Component

```css
/* Extend base styles */
@import '@ux4g/styles/base';
@import '@ux4g/styles/utilities';

/* Add custom button styles */
.ux4g-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--ux4g-spacing-3) var(--ux4g-spacing-5);
  font-size: var(--ux4g-font-size-base);
  font-weight: var(--ux4g-font-weight-medium);
  background-color: var(--ux4g-color-primary);
  color: var(--ux4g-color-text-on-brand);
  border: none;
  border-radius: var(--ux4g-radius-md);
  cursor: pointer;
  transition: background-color 150ms ease;
}

.ux4g-button:hover {
  background-color: var(--ux4g-color-primary-dark);
}

.ux4g-button-secondary {
  background-color: var(--ux4g-color-secondary);
}
```

### Custom Alert Variant

```css
@import '@ux4g/styles';

/* Add custom notice variant */
.ux4g-alert-notice {
  background-color: var(--ux4g-color-surface-tertiary);
  border-color: var(--ux4g-color-navy);
  color: var(--ux4g-color-text-primary);
}
```

---

## Performance Optimization

### Code Splitting by Route

```tsx
// React lazy loading
const HomePage = lazy(() => import('./pages/Home'));
const FormsPage = lazy(() => import('./pages/Forms'));

// In Forms page component
import '@ux4g/styles/forms';
import '@ux4g/styles/spacing';
```

### Critical CSS Pattern

```html
<head>
  <!-- Inline critical base styles -->
  <style>
    @import '@ux4g/styles/reset';
    @import '@ux4g/styles/typography';
  </style>
  
  <!-- Defer non-critical -->
  <link rel="preload" href="/styles/utilities.css" as="style">
  <link rel="stylesheet" href="/styles/utilities.css" media="print" onload="this.media='all'">
</head>
```

---

## Migration Strategies

### From Existing CSS

```css
/* Phase 1: Add reset and typography */
@import '@ux4g/styles/reset';
@import '@ux4g/styles/typography';
/* Your existing styles here */

/* Phase 2: Add utilities */
@import '@ux4g/styles/utilities';
/* Your existing styles here */

/* Phase 3: Replace components incrementally */
@import '@ux4g/styles/forms';
/* Your remaining styles here */
```

### From Bootstrap/Tailwind

```css
/* Start with foundation */
@import '@ux4g/styles/base';
@import '@ux4g/styles/utilities';

/* Gradually replace component classes */
/* .btn → .ux4g-button */
/* .card → .ux4g-card */
/* .alert → .ux4g-alert */
```

---

## Troubleshooting

### Issue: Styles not applying

**Solution 1**: Ensure @ux4g/tokens is installed
```bash
npm install @ux4g/tokens @ux4g/styles
```

**Solution 2**: Check import order (tokens should load first)
```css
/* Correct */
@import '@ux4g/styles'; /* Includes tokens */

/* If importing manually */
@import '@ux4g/tokens/css';
@import '@ux4g/styles/base';
```

### Issue: CSS specificity conflicts

**Solution**: Use cascade layers
```css
@layer ux4g {
  @import '@ux4g/styles';
}

@layer custom {
  /* Your custom styles here */
}
```

### Issue: Missing utilities

**Solution**: Import utilities layer
```css
@import '@ux4g/styles/utilities';
```

---

## Best Practices

1. **Import Complete System for New Projects**
   ```css
   @import '@ux4g/styles';
   ```

2. **Use Tokens for Customization**
   ```css
   :root {
     --ux4g-color-primary: #custom;
   }
   ```

3. **Follow Naming Convention**
   ```css
   .ux4g-custom-component { /* ... */ }
   ```

4. **Maintain Accessibility**
   - Always include focus styles
   - Use semantic HTML
   - Test with keyboard navigation

5. **Document Custom Extensions**
   ```css
   /**
    * Custom Ministry Badge
    * Extends: .ux4g-badge
    * Token deps: color-*, spacing-*
    */
   .ux4g-badge-ministry { /* ... */ }
   ```

---

**For more information**, see:
- [README.md](./README.md) - Main documentation
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical details
- [examples/](./examples/) - Code examples
