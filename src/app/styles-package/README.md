# @ux4g/styles

Foundational CSS styles for UX4G - Indian Government Design System

Built on top of [`@ux4g/tokens`](https://www.npmjs.com/package/@ux4g/tokens), this package provides production-ready styles including reset, typography, layouts, forms, status indicators, and navigation patterns designed for Indian government digital services.

## Features

- 🎨 **Built on Design Tokens** - Consumes `@ux4g/tokens` for consistent theming
- 🇮🇳 **Government-Grade Design** - Aligned with UX4G specifications and Indian tricolor theme
- ♿ **Accessibility-First** - WCAG 2.1 Level AA compliant with dedicated a11y utilities
- 📦 **Modular Architecture** - Import complete system or specific layers
- 🔧 **Framework-Agnostic** - Works with React, Angular, Vue, or vanilla HTML
- 🚀 **Zero Runtime** - Pure CSS, no JavaScript required
- 📱 **Responsive** - Mobile-first, responsive utilities included
- 🎯 **Production-Ready** - Battle-tested patterns with starter templates
- 🔁 **Reduced Duplication** - Reusable CSS variables for easy customization

## Installation

```bash
npm install @ux4g/styles
```

### Peer Dependencies

```bash
npm install @ux4g/tokens
```

## Quick Start

Get started in under 5 minutes! See [QUICK_START.md](./QUICK_START.md) for detailed guide.

### Import Complete System

```css
/* Import all styles (includes tokens, base, utilities, components) */
@import '@ux4g/styles';
```

### Import Specific Layers

```css
/* Import only what you need */
@import '@ux4g/styles/base';       /* Reset, typography, surfaces, focus */
@import '@ux4g/styles/utilities';  /* Spacing and layout utilities */
@import '@ux4g/styles/components'; /* Forms, status, navigation */
```

### Import Individual Files

```css
/* Granular control */
@import '@ux4g/styles/reset';
@import '@ux4g/styles/typography';
@import '@ux4g/styles/forms';
```

## Package Structure

```
@ux4g/styles/
├── dist/
│   ├── index.css              # Complete style system
│   ├── base.css               # Base layer bundle
│   ├── utilities.css          # Utilities layer bundle
│   ├── components.css         # Components layer bundle
│   ├── base/
│   │   ├── reset.css          # CSS reset
│   │   ├── typography.css     # Typography styles
│   │   ├── surfaces.css       # Surfaces & elevation
│   │   └── focus.css          # Focus indicators
│   ├── utilities/
│   │   ├── spacing.css        # Margin, padding, gap
│   │   └── layout.css         # Flex, grid, positioning
│   └── components/
│       ├── forms.css          # Form controls
│       ├── status.css         # Alerts, badges, status
│       └── navigation.css     # Header, nav, footer
└── src/
    └── ...                    # Source files
```

## Style Layers

### 1. Base Layer

Foundation styles that establish baseline behavior:

- **Reset** - Accessibility-focused CSS reset
- **Typography** - Heading, body text, links, lists
- **Surfaces** - Backgrounds, cards, elevation system
- **Focus** - Keyboard navigation focus indicators

### 2. Utilities Layer

Reusable utility classes for rapid composition:

- **Spacing** - Margin, padding, gap utilities
- **Layout** - Flexbox, grid, positioning, containers
- **Accessibility** - Screen reader utilities, skip links, focus helpers

### 3. Components Layer

Baseline styles for common UI patterns:

- **Forms** - Inputs, labels, validation, fieldsets
- **Status** - Alerts, badges, progress, spinners
- **Navigation** - Header, nav, breadcrumbs, tabs, footer

## Token Consumption

All styles consume design tokens from `@ux4g/tokens`:

```css
/* Typography */
font-family: var(--ux4g-font-family-base);
font-size: var(--ux4g-font-size-base);
font-weight: var(--ux4g-font-weight-regular);
line-height: var(--ux4g-line-height-base);

/* Colors */
color: var(--ux4g-color-text-primary);
background-color: var(--ux4g-color-surface-primary);
border-color: var(--ux4g-color-border-default);

/* Spacing */
padding: var(--ux4g-spacing-4);
margin: var(--ux4g-spacing-6);
gap: var(--ux4g-spacing-2);

/* Shadows & Radius */
box-shadow: var(--ux4g-shadow-md);
border-radius: var(--ux4g-radius-md);
```

## Framework Integration

### React

```tsx
import '@ux4g/styles';

function App() {
  return (
    <div className="ux4g-container">
      <form className="ux4g-card">
        <h2>Application Form</h2>
        
        <div className="ux4g-form-group">
          <label htmlFor="name" className="ux4g-label ux4g-label-required">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="ux4g-input"
            placeholder="Enter your full name"
          />
        </div>

        <div className="ux4g-form-actions">
          <button type="submit" className="ux4g-button-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
```

### Angular

```typescript
// Add to angular.json styles array
"styles": [
  "node_modules/@ux4g/styles/dist/index.css",
  "src/styles.css"
]

// Or import in global styles.css
@import '@ux4g/styles';
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="node_modules/@ux4g/styles/dist/index.css">
</head>
<body>
  <div class="ux4g-container">
    <h1>Welcome to Digital Services</h1>
  </div>
</body>
</html>
```

## Naming Convention

All UX4G styles use the `.ux4g-` prefix to avoid naming conflicts:

```css
/* Components */
.ux4g-card
.ux4g-button
.ux4g-alert

/* Utilities */
.ux4g-m-4        /* margin */
.ux4g-p-6        /* padding */
.ux4g-flex       /* display: flex */
.ux4g-grid       /* display: grid */

/* States */
.ux4g-input-error
.ux4g-nav-link-active
```

## Accessibility

All styles follow WCAG 2.1 Level AA guidelines:

- ✓ Semantic HTML structure
- ✓ Keyboard navigation support
- ✓ Clear focus indicators (2px solid outline)
- ✓ Sufficient color contrast (4.5:1 for text)
- ✓ Form labels and ARIA attributes
- ✓ Screen reader support (`.sr-only` class)
- ✓ Reduced motion support (`prefers-reduced-motion`)

## Indian Government Tricolor Theme

The header includes the national tricolor (saffron, white, green):

```html
<header class="ux4g-header ux4g-header-government">
  <div class="ux4g-header-container">
    <a href="/" class="ux4g-logo">
      Ministry of Digital Services
    </a>
  </div>
</header>
```

## Examples & Templates

**Quick References**:
- [QUICK_START.md](./QUICK_START.md) - Get started in 5 minutes
- [CLASS_REFERENCE.md](./CLASS_REFERENCE.md) - Complete class cheat sheet

**Templates**:
- `templates/starter.tsx` - Production-ready government service page

**Framework Examples**:
- `examples/react-usage.tsx` - React components
- `examples/angular-usage.ts` - Angular components
- `examples/html-usage.md` - Vanilla HTML examples

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © UX4G Team

## Related Packages

- [`@ux4g/tokens`](https://www.npmjs.com/package/@ux4g/tokens) - Design tokens foundation
- `@ux4g/components` - React component library (coming soon)
- `@ux4g/icons` - Icon library (coming soon)

## Support

For issues and questions:
- GitHub Issues: [github.com/ux4g/styles/issues](https://github.com/ux4g/styles/issues)
- Documentation: [ux4g.gov.in/docs](https://ux4g.gov.in/docs)
