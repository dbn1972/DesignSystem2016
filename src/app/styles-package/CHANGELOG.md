# Changelog

All notable changes to `@ux4g/styles` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-04-10

### Added

#### Base Layer
- Accessibility-focused CSS reset with preserved semantic behavior
- Complete typography system consuming `@ux4g/tokens`
  - Heading styles (h1-h6)
  - Body text and paragraph styles
  - Link styles with hover/active states
  - List styles (ordered and unordered)
  - Code and monospace text
- Surface and elevation system
  - Primary, secondary, tertiary surfaces
  - Brand surfaces (saffron, white, green, navy)
  - Status surfaces (success, warning, error, info)
  - Elevation levels (0-5) with shadows
  - Card and panel components
- Focus indicator system
  - 2px solid outline for all interactive elements
  - Inset focus for form controls
  - Skip link for accessibility
  - High contrast mode support

#### Utilities Layer
- Comprehensive spacing utilities
  - Margin utilities (m, mt, mr, mb, ml, mx, my)
  - Padding utilities (p, pt, pr, pb, pl, px, py)
  - Gap utilities for flex/grid
  - Stack utilities for vertical spacing
- Complete layout system
  - Display utilities (flex, grid, block, inline, etc.)
  - Flexbox utilities (direction, wrap, align, justify)
  - Grid utilities (grid-cols, col-span)
  - Position utilities (relative, absolute, fixed, sticky)
  - Width and height utilities
  - Container with responsive breakpoints
  - Common layout patterns (center, split, cluster)

#### Components Layer
- Comprehensive form system
  - Input controls (text, email, password, etc.)
  - Labels with required indicator
  - Textarea and select elements
  - Checkbox and radio button styles
  - Fieldset and legend
  - Form validation states (error, success)
  - Helper text and error messages
  - Disabled and readonly states
  - Input sizes (small, default, large)
- Status and feedback components
  - Alert component with variants (info, success, warning, error)
  - Badge component with semantic colors
  - Status indicator dots
  - Banner component
  - Toast notification positioning
  - Progress bar
  - Spinner/loading indicators
  - Skeleton loaders
- Navigation system
  - Skip link for accessibility
  - Header with sticky positioning
  - Government header with tricolor theme
  - Logo component
  - Navigation menu with active states
  - Breadcrumb navigation
  - Tab component
  - Dropdown menu
  - Sidebar navigation
  - Footer with grid layout

### Features
- 🎨 Built on `@ux4g/tokens` for consistent theming
- ♿ WCAG 2.1 Level AA compliant
- 🇮🇳 Indian tricolor theme integration
- 📦 Modular architecture (import what you need)
- 🚀 Zero runtime JavaScript
- 📱 Mobile-first responsive design
- 🔧 Framework-agnostic (React, Angular, Vue, HTML)
- 🎯 Single `.ux4g-` class prefix for all utilities

### Documentation
- Comprehensive README.md with quick start guide
- ARCHITECTURE.md explaining design principles and structure
- CONTRIBUTING.md with development guidelines
- React usage examples
- Angular usage examples
- HTML usage examples and documentation

### Developer Experience
- PostCSS build system
- Import resolution with postcss-import
- Nested CSS support with postcss-nesting
- Automatic vendor prefixes with autoprefixer
- Modular export structure for tree-shaking
- Source maps for debugging

### Token Consumption
All styles consume design tokens:
- Typography tokens (font-family, font-size, font-weight, line-height)
- Color tokens (text, surface, border, status)
- Spacing tokens (spacing-0 through spacing-20)
- Shadow tokens (shadow-sm through shadow-2xl)
- Radius tokens (radius-sm through radius-full)
- Z-index tokens (z-dropdown, z-sticky, z-modal, etc.)
- Motion tokens (for animations and transitions)

### Accessibility Features
- Keyboard navigation support throughout
- Clear focus indicators (2px solid, accessible colors)
- Screen reader utilities (.sr-only)
- Skip links for main content
- Semantic HTML structure
- ARIA-compliant form validation
- Color contrast meeting WCAG AA (4.5:1 for text, 3:1 for UI)
- Reduced motion support (prefers-reduced-motion)

### Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Release Notes Format

### Added
- New features and capabilities

### Changed
- Changes in existing functionality

### Deprecated
- Soon-to-be removed features

### Removed
- Removed features

### Fixed
- Bug fixes

### Security
- Security improvements
