# @ux4g/tokens

Design tokens for the UX4G Indian Government Design System. Single source of truth for colors, typography, spacing, and more.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://www.npmjs.com/package/@ux4g/tokens)
[![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Features

- 🇮🇳 **Indian tricolor theme** - Saffron, white, green, and navy blue
- ♿ **WCAG 2.1 AA compliant** - All color combinations tested
- 🏗️ **Semantic tokens** - Context-aware, themeable design decisions
- 📦 **Multiple formats** - CSS, JavaScript, TypeScript
- 🎯 **Government-grade** - Appropriate restraint for official interfaces

## Installation

```bash
npm install @ux4g/tokens
```

## Quick Start

### CSS

```css
@import '@ux4g/tokens/css';

.button {
  background: var(--ux4g-semantic-color-brand-primary);
  color: var(--ux4g-semantic-color-text-inverse);
  padding: var(--ux4g-semantic-space-button-padding-y) 
           var(--ux4g-semantic-space-button-padding-x);
  border-radius: var(--ux4g-radius-base);
}
```

### JavaScript/TypeScript

```javascript
import tokens from '@ux4g/tokens';

const styles = {
  backgroundColor: tokens.semantic.color['brand.primary'],
  padding: `${tokens.semantic.space['button.padding-y']} ${tokens.semantic.space['button.padding-x']}`,
  borderRadius: tokens.radius.base
};
```

### Named Exports

```javascript
import { color, spacing, semantic } from '@ux4g/tokens';

const primaryColor = semantic.color['brand.primary'];
const buttonPadding = semantic.space['button.padding-x'];
```

## Token Categories

### Colors

**Base Colors:**
- `color.base.saffron.*` - Indian tricolor saffron (50-900)
- `color.base.green.*` - Indian tricolor green (50-900)
- `color.base.navy.*` - Government primary blue (50-900)
- `color.base.neutral.*` - Grayscale (0-1000)

**Semantic Colors:**
- `semantic.color.brand.*` - Brand colors (primary, secondary, tertiary)
- `semantic.color.text.*` - Text colors (primary, secondary, disabled, link)
- `semantic.color.background.*` - Background colors
- `semantic.color.border.*` - Border colors
- `semantic.color.interactive.*` - Interactive states (default, hover, active, disabled)
- `semantic.color.success/warning/error/info` - State colors

### Typography

**Base Typography:**
- `typography.fontFamily.*` - Font stacks (sans, serif, mono, devanagari)
- `typography.fontSize.*` - Size scale (xs to 7xl)
- `typography.fontWeight.*` - Weights (light to extrabold)
- `typography.lineHeight.*` - Line heights (tight to loose)
- `typography.letterSpacing.*` - Letter spacing

**Semantic Typography:**
- `semantic.typography.heading.*` - Heading presets (h1, h2, h3)
- `semantic.typography.body.*` - Body text settings

### Spacing

**Base Spacing:**
- `spacing.*` - Scale from 0 to 96 (0px to 384px)

**Semantic Spacing:**
- `semantic.space.button.*` - Button spacing
- `semantic.space.input.*` - Input spacing
- `semantic.space.card.*` - Card spacing

### Other Tokens

- **Sizing** - `sizing.*` - Width, height, containers, touch targets
- **Border Radius** - `radius.*` - Border radius scale
- **Shadows** - `shadow.*` - Elevation and focus shadows
- `opacity.*` - Opacity scale
- **Motion** - `motion.*` - Duration, easing, delay
- **Z-Index** - `zIndex.*` - Layering system

## Accessibility

All tokens meet WCAG 2.1 AA standards:

- ✅ Color contrast ratios tested (4.5:1 for text, 3:1 for UI)
- ✅ Touch targets meet 24px minimum (44px recommended)
- ✅ Focus indicators meet 3:1 non-text contrast
- ✅ Base font size 16px for readability
- ✅ Line heights 1.5+ for body text

## Examples

### Button Component

```css
.btn-primary {
  /* Semantic tokens for easy theming */
  background: var(--ux4g-semantic-color-interactive-default);
  color: var(--ux4g-semantic-color-text-inverse);
  
  /* Component-specific spacing */
  padding: var(--ux4g-semantic-space-button-padding-y) 
           var(--ux4g-semantic-space-button-padding-x);
  gap: var(--ux4g-semantic-space-button-gap);
  
  /* Base tokens */
  border-radius: var(--ux4g-radius-base);
  font-weight: var(--ux4g-typography-fontWeight-semibold);
  transition: all var(--ux4g-motion-duration-base);
}

.btn-primary:hover {
  background: var(--ux4g-semantic-color-interactive-hover);
}

.btn-primary:focus-visible {
  outline: none;
  box-shadow: var(--ux4g-shadow-focus);
}
```

### React Component

```jsx
import tokens from '@ux4g/tokens';

function Button({ children }) {
  return (
    <button style={{
      background: tokens.semantic.color['interactive.default'],
      color: tokens.semantic.color['text.inverse'],
      padding: `${tokens.semantic.space['button.padding-y']} ${tokens.semantic.space['button.padding-x']}`,
      borderRadius: tokens.radius.base,
      fontWeight: tokens.typography['fontWeight.semibold'],
      border: 'none',
      cursor: 'pointer'
    }}>
      {children}
    </button>
  );
}
```

### Styled Components

```javascript
import styled from 'styled-components';
import { semantic, radius, shadow } from '@ux4g/tokens';

const Button = styled.button`
  background: ${semantic.color['interactive.default']};
  color: ${semantic.color['text.inverse']};
  padding: ${semantic.space['button.padding-y']} ${semantic.space['button.padding-x']};
  border-radius: ${radius.base};
  border: none;
  cursor: pointer;
  
  &:hover {
    background: ${semantic.color['interactive.hover']};
  }
  
  &:focus-visible {
    box-shadow: ${shadow.focus};
  }
`;
```

## Package Exports

```javascript
// Default import
import tokens from '@ux4g/tokens';

// Named imports
import { color, spacing, semantic } from '@ux4g/tokens';

// CSS variables
import '@ux4g/tokens/css';

// Token source (JSON)
import tokenRegistry from '@ux4g/tokens/tokens';
```

## Token Structure

```
Base Tokens (primitives)
    ↓ referenced by
Semantic Tokens (context-aware)
    ↓ used in
Components & Applications
```

**Base tokens** are the raw values (colors, sizes, etc.)  
**Semantic tokens** reference base tokens and provide meaning (brand.primary → navy.500)

This enables theming by remapping semantic tokens without changing components.

## Browser Support

Works in all modern browsers and Node.js environments:
- CSS custom properties (IE 11+ with PostCSS)
- JavaScript modules (ES2015+)
- TypeScript (3.8+)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Adding new tokens
- Modifying existing tokens
- Token naming conventions
- Accessibility requirements

## License

MIT License - see [LICENSE](LICENSE)

## Maintainer

**UX4G Team** - Government of India Design System  
Version 1.0.0 - April 10, 2026

---

**Links:**
- [Architecture Documentation](ARCHITECTURE.md)
- [Changelog](CHANGELOG.md)
- [Usage Examples](examples/)
