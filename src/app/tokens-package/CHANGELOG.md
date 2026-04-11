# Changelog

All notable changes to @ux4g/tokens will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-04-10

### Added

**Base Token System**
- Complete color system (saffron, green, navy, neutral scales)
- Typography system (fonts, sizes, weights, line heights, letter spacing)
- Spacing system (0-96 scale with semantic variants)
- Sizing system (width, height, containers, icons, touch targets)
- Border radius scale (9 values)
- Shadow system (elevation + WCAG focus rings)
- Opacity scale (16 values)
- Motion system (duration, easing, delay)
- Z-index layering system

**Semantic Token Layer**
- Context-aware color tokens (brand, text, background, border, interactive, state)
- Component spacing tokens (button, input, card)
- Typography presets (headings, body)

**Build System**
- Single build script for all output formats
- CSS variables output (`dist/tokens.css`)
- JavaScript module output (CommonJS + ES Module)
- TypeScript declarations
- Token reference resolution

**Documentation**
- Complete README with quick start
- Architecture documentation
- Contributing guidelines
- React and CSS examples

**Accessibility**
- WCAG 2.1 AA compliance for all color combinations
- Touch target sizes (24px min, 44px recommended)
- Focus indicators (3:1 contrast)
- Inline accessibility notes on tokens

**Package Features**
- NPM-ready with proper exports
- Multiple import methods (default, named, CSS)
- W3C Design Tokens spec compliant
- MIT licensed

---

## [Unreleased]

### Planned
- Dark mode semantic layer
- Component-specific tokens
- Additional motion presets
- Figma plugin integration
