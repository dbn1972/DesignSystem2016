# @ux4g/styles - Complete File Structure

## Directory Tree

```
@ux4g/styles/
│
├── 📄 package.json                    # Package metadata, dependencies, exports
├── 📄 .npmignore                      # NPM publish exclusions
├── 📄 LICENSE                         # MIT License
│
├── 📘 README.md                       # Main documentation
├── 📘 ARCHITECTURE.md                 # Technical architecture guide
├── 📘 CONTRIBUTING.md                 # Contribution guidelines
├── 📘 CHANGELOG.md                    # Version history
├── 📘 PACKAGE_SUMMARY.md              # Package overview
├── 📘 FILE_STRUCTURE.md               # This file
│
├── 📁 src/                            # Source CSS files
│   │
│   ├── 📄 index.css                   # Main entry point (all layers + tokens)
│   │
│   ├── 📁 base/                       # Foundation Layer
│   │   ├── 📄 index.css               # Base layer bundle
│   │   ├── 📄 reset.css               # CSS reset (accessibility-focused)
│   │   ├── 📄 typography.css          # Typography system
│   │   ├── 📄 surfaces.css            # Surfaces & elevation
│   │   └── 📄 focus.css               # Focus indicators
│   │
│   ├── 📁 utilities/                  # Utilities Layer
│   │   ├── 📄 index.css               # Utilities layer bundle
│   │   ├── 📄 spacing.css             # Margin, padding, gap
│   │   └── 📄 layout.css              # Flex, grid, positioning
│   │
│   └── 📁 components/                 # Components Layer
│       ├── 📄 index.css               # Components layer bundle
│       ├── 📄 forms.css               # Form controls
│       ├── 📄 status.css              # Alerts, badges, status
│       └── 📄 navigation.css          # Headers, nav, footers
│
├── 📁 dist/                           # Built output (generated)
│   ├── 📄 index.css                   # Complete system bundle
│   ├── 📄 base.css                    # Base layer bundle
│   ├── 📄 utilities.css               # Utilities layer bundle
│   ├── 📄 components.css              # Components layer bundle
│   │
│   ├── 📁 base/                       # Individual base files
│   │   ├── 📄 reset.css
│   │   ├── 📄 typography.css
│   │   ├── 📄 surfaces.css
│   │   └── 📄 focus.css
│   │
│   ├── 📁 utilities/                  # Individual utility files
│   │   ├── 📄 spacing.css
│   │   └── 📄 layout.css
│   │
│   └── 📁 components/                 # Individual component files
│       ├── 📄 forms.css
│       ├── 📄 status.css
│       └── 📄 navigation.css
│
├── 📁 examples/                       # Usage examples
│   ├── 📄 react-usage.tsx             # React integration examples
│   ├── 📄 angular-usage.ts            # Angular integration examples
│   └── 📄 html-usage.md               # HTML/vanilla usage
│
└── 📁 scripts/                        # Build tooling
    └── 📄 build.js                    # PostCSS build script
```

## File Count

- **Source CSS Files**: 13 files
- **Documentation Files**: 7 files
- **Example Files**: 3 files
- **Configuration Files**: 2 files (package.json, .npmignore)
- **Build Scripts**: 1 file
- **Total**: 26 source files

## File Descriptions

### Root Files

| File | Purpose |
|------|---------|
| `package.json` | Package metadata, dependencies, NPM exports configuration |
| `.npmignore` | Specifies files excluded from NPM publication |
| `LICENSE` | MIT License text |

### Documentation Files

| File | Description |
|------|-------------|
| `README.md` | Main documentation with installation, usage, examples |
| `ARCHITECTURE.md` | Technical architecture, design principles, token consumption |
| `CONTRIBUTING.md` | Development setup, contribution guidelines, code style |
| `CHANGELOG.md` | Version history and release notes |
| `PACKAGE_SUMMARY.md` | Quick reference for package structure and usage |
| `FILE_STRUCTURE.md` | This file - complete directory structure |

### Source CSS Files (src/)

#### Main Entry
| File | Purpose |
|------|---------|
| `src/index.css` | Main entry point, imports tokens + all three layers |

#### Base Layer (src/base/)
| File | Purpose | Lines | Token Dependencies |
|------|---------|-------|-------------------|
| `index.css` | Base layer bundle | 7 | Imports all base files |
| `reset.css` | CSS reset, accessibility defaults | 124 | colors, spacing, radius |
| `typography.css` | Typography system | 187 | font-*, color-*, spacing-* |
| `surfaces.css` | Surfaces & elevation | 165 | color-surface-*, shadow-*, radius-* |
| `focus.css` | Focus indicators | 132 | color-focus-*, spacing-*, radius-* |

#### Utilities Layer (src/utilities/)
| File | Purpose | Lines | Token Dependencies |
|------|---------|-------|-------------------|
| `index.css` | Utilities layer bundle | 6 | Imports all utility files |
| `spacing.css` | Margin, padding, gap utilities | 168 | spacing-* |
| `layout.css` | Flexbox, grid, positioning | 198 | sizing-*, z-* |

#### Components Layer (src/components/)
| File | Purpose | Lines | Token Dependencies |
|------|---------|-------|-------------------|
| `index.css` | Components layer bundle | 7 | Imports all component files |
| `forms.css` | Form controls & validation | 245 | All token categories |
| `status.css` | Alerts, badges, progress | 238 | color-*, spacing-*, shadow-* |
| `navigation.css` | Headers, nav, footers | 298 | color-*, spacing-*, z-*, shadow-* |

### Example Files (examples/)

| File | Purpose |
|------|---------|
| `react-usage.tsx` | React integration examples with components |
| `angular-usage.ts` | Angular integration examples with decorators |
| `html-usage.md` | Vanilla HTML usage examples and snippets |

### Build Files (scripts/)

| File | Purpose |
|------|---------|
| `build.js` | PostCSS build script (processes CSS, generates dist/) |

## Import Paths

### For Developers (NPM Package)

```css
/* Complete system */
@import '@ux4g/styles';

/* Layer bundles */
@import '@ux4g/styles/base';
@import '@ux4g/styles/utilities';
@import '@ux4g/styles/components';

/* Individual files */
@import '@ux4g/styles/reset';
@import '@ux4g/styles/typography';
@import '@ux4g/styles/surfaces';
@import '@ux4g/styles/focus';
@import '@ux4g/styles/spacing';
@import '@ux4g/styles/layout';
@import '@ux4g/styles/forms';
@import '@ux4g/styles/status';
@import '@ux4g/styles/navigation';
```

### Internal (Source Development)

```css
/* From src/index.css */
@import '@ux4g/tokens/css';
@import './base/index.css';
@import './utilities/index.css';
@import './components/index.css';
```

## NPM Package.json Exports

```json
{
  "exports": {
    ".": "./dist/index.css",
    "./base": "./dist/base.css",
    "./utilities": "./dist/utilities.css",
    "./components": "./dist/components.css",
    "./reset": "./dist/base/reset.css",
    "./typography": "./dist/base/typography.css",
    "./spacing": "./dist/utilities/spacing.css",
    "./layout": "./dist/utilities/layout.css",
    "./surfaces": "./dist/base/surfaces.css",
    "./elevation": "./dist/base/elevation.css",
    "./focus": "./dist/base/focus.css",
    "./forms": "./dist/components/forms.css",
    "./status": "./dist/components/status.css",
    "./navigation": "./dist/components/navigation.css"
  }
}
```

## Build Output (dist/)

After running `pnpm run build`, the following files are generated:

### Bundles
- `dist/index.css` - Complete system (all layers + tokens)
- `dist/base.css` - Base layer only
- `dist/utilities.css` - Utilities layer only
- `dist/components.css` - Components layer only

### Individual Files
- `dist/base/reset.css`
- `dist/base/typography.css`
- `dist/base/surfaces.css`
- `dist/base/focus.css`
- `dist/utilities/spacing.css`
- `dist/utilities/layout.css`
- `dist/components/forms.css`
- `dist/components/status.css`
- `dist/components/navigation.css`

## File Size Estimates

| File | Approx. Size | Description |
|------|--------------|-------------|
| `dist/index.css` | ~40KB | Complete system |
| `dist/base.css` | ~12KB | Base layer |
| `dist/utilities.css` | ~15KB | Utilities layer |
| `dist/components.css` | ~18KB | Components layer |

*Note: Sizes are estimates before minification. Actual sizes may vary.*

## Dependencies

### Production
```json
{
  "@ux4g/tokens": "^1.0.0"
}
```

### Development
```json
{
  "postcss": "^8.4.38",
  "postcss-import": "^16.1.0",
  "postcss-nesting": "^12.1.2",
  "autoprefixer": "^10.4.19"
}
```

## Version History

- **1.0.0** (2026-04-10) - Initial release
  - Complete base, utilities, and components layers
  - WCAG 2.1 Level AA accessible
  - Indian tricolor theme
  - Comprehensive documentation

---

**Last Updated**: April 10, 2026  
**Package Version**: 1.0.0  
**Maintainer**: UX4G Team
