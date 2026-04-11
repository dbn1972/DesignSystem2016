# Architecture: @ux4g/styles

## Overview

`@ux4g/styles` is a layered CSS architecture built on top of `@ux4g/tokens`, providing foundational styling for Indian Government digital services.

## Design Principles

### 1. Token-Driven Design
- All visual properties consume design tokens from `@ux4g/tokens`
- Ensures consistency across the design system
- Enables theme customization through token overrides

### 2. Layered Architecture
Styles are organized in three distinct layers:

```
┌─────────────────────────────────┐
│      Components Layer           │  ← Forms, Status, Navigation
├─────────────────────────────────┤
│      Utilities Layer            │  ← Spacing, Layout
├─────────────────────────────────┤
│      Base Layer                 │  ← Reset, Typography, Surfaces
├─────────────────────────────────┤
│      Tokens (@ux4g/tokens)      │  ← Design Tokens
└─────────────────────────────────┘
```

### 3. Accessibility-First
- WCAG 2.1 Level AA compliance
- Semantic HTML defaults
- Keyboard navigation support
- Screen reader optimization

### 4. Government-Grade Standards
- Conservative, professional design
- Indian tricolor theme integration
- Scalable for national deployment

## Layer Details

### Base Layer

**Purpose**: Establish foundation and normalize browser behavior

**Files**:
- `reset.css` - CSS reset with accessibility enhancements
- `typography.css` - Text styles (headings, paragraphs, links)
- `surfaces.css` - Background surfaces and elevation system
- `focus.css` - Focus indicators for keyboard navigation

**Characteristics**:
- Element selectors (e.g., `h1`, `p`, `input`)
- Base utility classes (e.g., `.ux4g-card`, `.ux4g-surface`)
- No layout positioning
- Global defaults

**Token Dependencies**:
```css
/* Typography tokens */
--ux4g-font-family-*
--ux4g-font-size-*
--ux4g-font-weight-*
--ux4g-line-height-*

/* Color tokens */
--ux4g-color-text-*
--ux4g-color-surface-*
--ux4g-color-border-*

/* Other tokens */
--ux4g-shadow-*
--ux4g-radius-*
```

### Utilities Layer

**Purpose**: Provide composable utility classes for rapid development

**Files**:
- `spacing.css` - Margin, padding, gap utilities
- `layout.css` - Flexbox, grid, positioning, containers

**Characteristics**:
- Single-purpose classes
- Predictable, functional naming
- Responsive modifiers possible
- Composition over specificity

**Naming Convention**:
```css
/* Spacing utilities */
.ux4g-m-{scale}    /* margin */
.ux4g-p-{scale}    /* padding */
.ux4g-gap-{scale}  /* gap */

/* Layout utilities */
.ux4g-flex
.ux4g-grid
.ux4g-grid-cols-{n}
.ux4g-items-center
.ux4g-justify-between
```

**Token Dependencies**:
```css
--ux4g-spacing-*
--ux4g-sizing-*
--ux4g-z-*
```

### Components Layer

**Purpose**: Baseline styles for common UI patterns

**Files**:
- `forms.css` - Input controls, labels, validation
- `status.css` - Alerts, badges, progress, loading
- `navigation.css` - Headers, navs, breadcrumbs, footers

**Characteristics**:
- Semantic component classes
- State variations (error, active, disabled)
- Accessibility built-in
- Framework-agnostic

**Pattern Structure**:
```css
/* Base component */
.ux4g-{component}

/* Variants */
.ux4g-{component}-{variant}

/* States */
.ux4g-{component}-{state}
```

**Token Dependencies**:
All token categories, with emphasis on semantic tokens

## Token Consumption Patterns

### Direct Token Reference
```css
.ux4g-input {
  padding: var(--ux4g-spacing-3);
  font-size: var(--ux4g-font-size-base);
  color: var(--ux4g-color-text-primary);
}
```

### Token with Fallback
```css
.ux4g-card {
  background-color: var(--ux4g-color-surface-primary, #FFFFFF);
  box-shadow: var(--ux4g-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05));
}
```

### Semantic Token Usage
```css
.ux4g-alert-error {
  background-color: var(--ux4g-color-surface-error);
  border-color: var(--ux4g-color-error);
  color: var(--ux4g-color-text-error);
}
```

## Build Process

### Source Organization
```
src/
├── index.css              # Main entry point
├── base/
│   ├── index.css          # Base layer bundle
│   ├── reset.css
│   ├── typography.css
│   ├── surfaces.css
│   └── focus.css
├── utilities/
│   ├── index.css          # Utilities layer bundle
│   ├── spacing.css
│   └── layout.css
└── components/
    ├── index.css          # Components layer bundle
    ├── forms.css
    ├── status.css
    └── navigation.css
```

### Build Steps

1. **PostCSS Import** - Resolve `@import` statements
2. **PostCSS Nesting** - Transform nested CSS to flat CSS
3. **Autoprefixer** - Add vendor prefixes for browser support
4. **Output** - Generate dist files

### Distribution Structure
```
dist/
├── index.css              # Complete system (all layers)
├── base.css               # Base layer only
├── utilities.css          # Utilities layer only
├── components.css         # Components layer only
├── base/
│   ├── reset.css
│   ├── typography.css
│   ├── surfaces.css
│   └── focus.css
├── utilities/
│   ├── spacing.css
│   └── layout.css
└── components/
    ├── forms.css
    ├── status.css
    └── navigation.css
```

## Separation of Concerns

### Global Styles (Base Layer)
- Element defaults
- Document-level resets
- Base component styles
- Foundation surfaces

### Reusable Utilities (Utilities Layer)
- Spacing system
- Layout primitives
- Position and display
- Composition helpers

### Component Baselines (Components Layer)
- Semantic patterns
- Interactive elements
- Status indicators
- Navigation structures

## Customization Strategy

### Level 1: Token Override
Override tokens to customize the entire system:

```css
:root {
  --ux4g-color-primary: #1E3A8A;
  --ux4g-font-family-base: 'Custom Font', sans-serif;
  --ux4g-spacing-4: 1.25rem;
}
```

### Level 2: Component Override
Override specific component styles:

```css
.ux4g-input {
  border-width: 2px;
}
```

### Level 3: Custom Extensions
Add custom utilities following the naming pattern:

```css
.ux4g-shadow-custom {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

## Theme Integration

### Indian Tricolor Theme
```css
--ux4g-color-saffron: #FF9933;
--ux4g-color-white: #FFFFFF;
--ux4g-color-green: #138808;
--ux4g-color-navy: #000080;
```

### Government Header
```css
.ux4g-header-government {
  background: linear-gradient(
    to right,
    var(--ux4g-color-saffron) 0%,
    var(--ux4g-color-white) 33.33%,
    var(--ux4g-color-white) 66.66%,
    var(--ux4g-color-green) 100%
  );
}
```

## Performance Considerations

1. **No JavaScript** - Pure CSS, zero runtime overhead
2. **Tree-Shakable** - Import only what you need
3. **Minimal Specificity** - Single-class selectors where possible
4. **Browser Caching** - Static CSS files
5. **PostCSS Optimization** - Vendor prefixes only where needed

## Future Enhancements

1. **Responsive Utilities** - Breakpoint-specific classes
2. **Dark Mode** - Color scheme preferences
3. **Print Styles** - Optimized printing
4. **RTL Support** - Right-to-left text direction
5. **CSS Custom Properties API** - Dynamic theming

## Dependencies

### Production
- `@ux4g/tokens` - Design token foundation

### Development
- `postcss` - CSS processing
- `postcss-import` - Import resolution
- `postcss-nesting` - Nested CSS support
- `autoprefixer` - Browser compatibility

## Maintenance Guidelines

1. **Token-First** - Always use tokens, never hardcode values
2. **Accessibility** - Test with keyboard and screen readers
3. **Browser Testing** - Verify in supported browsers
4. **Documentation** - Update examples and docs with changes
5. **Versioning** - Follow semantic versioning
6. **Backward Compatibility** - Avoid breaking changes in minor versions

## Related Architecture

- [`@ux4g/tokens` Architecture](../tokens-package/ARCHITECTURE.md)
- UX4G Component Library (planned)
- UX4G Documentation Platform (planned)
