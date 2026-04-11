# @ux4g/angular-core - Package Structure

Complete directory structure for the Angular component library.

---

## Directory Tree

```
@ux4g/angular-core/
├── 📦 package.json                 # Package configuration
├── 📄 README.md                    # Main documentation
├── 📋 CHANGELOG.md                 # Version history
├── 📚 QUICK_START.md               # 5-minute setup guide
├── 📖 COMPONENT_API_REFERENCE.md   # Complete API docs
├── 🎨 COMPONENT_PATTERNS.md        # Design patterns guide
├── 📐 PACKAGE_STRUCTURE.md         # This file
├── 🤝 CONTRIBUTING.md              # Contribution guidelines
├── ⚖️  LICENSE                     # MIT License
├── 🔧 tsconfig.json                # TypeScript configuration
├── 🔧 ng-package.json              # ng-packagr configuration
│
├── 📁 src/                         # Source code
│   ├── public-api.ts               # Main entry point (exports all)
│   │
│   ├── 📁 types/                   # Shared TypeScript types
│   │   └── common.types.ts         # Common interfaces & types
│   │
│   ├── 📁 utils/                   # Utility functions
│   │   └── class-names.ts          # Class name helpers
│   │
│   └── 📁 lib/                     # Component library
│       │
│       ├── 📁 button/              # Button component
│       │   ├── button.component.ts
│       │   ├── button.component.css
│       │   ├── button.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 input/               # Input component
│       │   ├── input.component.ts
│       │   ├── input.component.css
│       │   ├── input.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 textarea/            # Textarea component
│       │   ├── textarea.component.ts
│       │   ├── textarea.component.css
│       │   ├── textarea.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 select/              # Select component
│       │   ├── select.component.ts
│       │   ├── select.component.css
│       │   ├── select.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 checkbox/            # Checkbox component
│       │   ├── checkbox.component.ts
│       │   ├── checkbox.component.css
│       │   ├── checkbox.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 radio/               # Radio component
│       │   ├── radio.component.ts
│       │   ├── radio.component.css
│       │   ├── radio.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 field/               # Field wrapper component
│       │   ├── field.component.ts
│       │   ├── field.component.css
│       │   ├── field.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 label/               # Label component
│       │   ├── label.component.ts
│       │   ├── label.component.css
│       │   ├── label.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 hint-text/           # Hint text component
│       │   ├── hint-text.component.ts
│       │   ├── hint-text.component.css
│       │   ├── hint-text.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 error-text/          # Error text component
│       │   ├── error-text.component.ts
│       │   ├── error-text.component.css
│       │   ├── error-text.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 file-upload/         # File upload component
│       │   ├── file-upload.component.ts
│       │   ├── file-upload.component.css
│       │   ├── file-upload.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 date-input/          # Date input component
│       │   ├── date-input.component.ts
│       │   ├── date-input.component.css
│       │   ├── date-input.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 alert/               # Alert component
│       │   ├── alert.component.ts
│       │   ├── alert.component.css
│       │   ├── alert.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 badge/               # Badge component
│       │   ├── badge.component.ts
│       │   ├── badge.component.css
│       │   ├── badge.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 status-tag/          # Status tag component
│       │   ├── status-tag.component.ts
│       │   ├── status-tag.component.css
│       │   ├── status-tag.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 toast/               # Toast notification
│       │   ├── toast.component.ts
│       │   ├── toast.component.css
│       │   ├── toast.service.ts
│       │   ├── toast.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 card/                # Card component
│       │   ├── card.component.ts
│       │   ├── card-header.component.ts
│       │   ├── card-content.component.ts
│       │   ├── card-footer.component.ts
│       │   ├── card.component.css
│       │   ├── card.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 tabs/                # Tabs component
│       │   ├── tabs.component.ts
│       │   ├── tab-panel.component.ts
│       │   ├── tabs.component.css
│       │   ├── tabs.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 accordion/           # Accordion component
│       │   ├── accordion.component.ts
│       │   ├── accordion-item.component.ts
│       │   ├── accordion.component.css
│       │   ├── accordion.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 breadcrumb/          # Breadcrumb navigation
│       │   ├── breadcrumb.component.ts
│       │   ├── breadcrumb-item.directive.ts
│       │   ├── breadcrumb.component.css
│       │   ├── breadcrumb.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 pagination/          # Pagination component
│       │   ├── pagination.component.ts
│       │   ├── pagination.component.css
│       │   ├── pagination.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 table/               # Table component
│       │   ├── table.component.ts
│       │   ├── table.component.css
│       │   ├── table.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 dialog/              # Dialog modal
│       │   ├── dialog.component.ts
│       │   ├── dialog-header.component.ts
│       │   ├── dialog-content.component.ts
│       │   ├── dialog-footer.component.ts
│       │   ├── dialog.component.css
│       │   ├── dialog.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 drawer/              # Drawer/sidebar
│       │   ├── drawer.component.ts
│       │   ├── drawer-header.component.ts
│       │   ├── drawer-content.component.ts
│       │   ├── drawer.component.css
│       │   ├── drawer.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 header/              # Header component
│       │   ├── header.component.ts
│       │   ├── header.component.css
│       │   ├── header.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 top-nav/             # Top navigation
│       │   ├── top-nav.component.ts
│       │   ├── top-nav.component.css
│       │   ├── top-nav.component.spec.ts
│       │   └── index.ts
│       │
│       ├── 📁 side-nav/            # Side navigation
│       │   ├── side-nav.component.ts
│       │   ├── side-nav.component.css
│       │   ├── side-nav.component.spec.ts
│       │   └── index.ts
│       │
│       └── 📁 stepper/             # Stepper component
│           ├── stepper.component.ts
│           ├── step.component.ts
│           ├── stepper.component.css
│           ├── stepper.component.spec.ts
│           └── index.ts
│
├── 📁 dist/                        # Build output (generated)
│   ├── bundles/                    # UMD bundles
│   ├── esm2022/                    # ES2022 modules
│   ├── fesm2022/                   # Flattened ES2022 modules
│   ├── index.d.ts                  # TypeScript definitions
│   └── [component folders]         # Individual component builds
│
└── 📁 examples/                    # Usage examples (optional)
    ├── basic-form.component.ts
    ├── advanced-form.component.ts
    ├── data-table.component.ts
    └── modal-dialog.component.ts
```

---

## Component Organization

### By Category

**Forms** (`/src/lib/`)
- button/
- input/
- textarea/
- select/
- checkbox/
- radio/
- field/
- label/
- hint-text/
- error-text/
- file-upload/
- date-input/

**Feedback** (`/src/lib/`)
- alert/
- badge/
- status-tag/
- toast/

**Navigation** (`/src/lib/`)
- breadcrumb/
- pagination/
- tabs/
- accordion/
- header/
- top-nav/
- side-nav/
- stepper/

**Layout** (`/src/lib/`)
- card/
- table/

**Overlay** (`/src/lib/`)
- dialog/
- drawer/

---

## File Naming Conventions

### Component Files
```
component-name.component.ts      # Component class
component-name.component.css     # Component styles
component-name.component.spec.ts # Unit tests
component-name.component.html    # Template (if external)
index.ts                         # Public exports
```

### Service Files
```
service-name.service.ts          # Service class
service-name.service.spec.ts     # Unit tests
```

### Directive Files
```
directive-name.directive.ts      # Directive class
directive-name.directive.spec.ts # Unit tests
```

---

## Export Structure

### Main Entry Point

`src/public-api.ts` exports everything:
```typescript
export * from './types/common.types';
export * from './utils/class-names';
export * from './lib/button';
export * from './lib/input';
// ... all components
```

### Component Entry Points

Each component has its own `index.ts`:
```typescript
// button/index.ts
export { ButtonComponent } from './button.component';
```

### Package Exports

`package.json` defines modular exports:
```json
{
  "exports": {
    ".": "./dist/index.js",
    "./button": "./dist/button/index.js",
    "./input": "./dist/input/index.js",
    "./forms": "./dist/forms/index.js"
  }
}
```

---

## Build Output

The `dist/` folder contains:

```
dist/
├── bundles/
│   └── ux4g-angular-core.umd.js   # UMD bundle
├── esm2022/
│   └── [component modules]         # ES2022 format
├── fesm2022/
│   ├── ux4g-angular-core.mjs      # Flattened main module
│   ├── button.mjs                  # Flattened button module
│   └── [other modules]
├── index.d.ts                      # TypeScript definitions
├── index.metadata.json             # Angular metadata
└── [component folders]             # Per-component builds
```

---

## Selector Naming

All selectors follow the `ux4g-` prefix:

**Components:**
- `ux4g-button`
- `ux4g-input`
- `ux4g-alert`
- `ux4g-card`
- `ux4g-dialog`

**Sub-components:**
- `ux4g-card-header`
- `ux4g-card-content`
- `ux4g-dialog-footer`

**Directives:**
- `[ux4gBreadcrumbItem]`
- `[ux4gTableSort]`

---

## Dependencies

### Peer Dependencies
```json
{
  "@angular/animations": "^18.0.0",
  "@angular/common": "^18.0.0",
  "@angular/core": "^18.0.0",
  "@angular/forms": "^18.0.0"
}
```

### Dependencies
```json
{
  "@ux4g/tokens": "^1.0.0",
  "@ux4g/styles": "^1.0.0",
  "tslib": "^2.6.0"
}
```

### Dev Dependencies
```json
{
  "@angular-devkit/build-angular": "^18.0.0",
  "@angular/cli": "^18.0.0",
  "@angular/compiler-cli": "^18.0.0",
  "ng-packagr": "^18.0.0",
  "typescript": "~5.4.0"
}
```

---

## NPM Publishing

### Files Included in Package

Defined in `.npmignore`:
```
dist/          ✅ Published
src/           ❌ Not published (source code)
*.spec.ts      ❌ Not published (tests)
examples/      ❌ Not published (examples)
```

### Package Size

- Total package: ~200-300 KB
- Individual components: 5-15 KB each
- Tree-shakeable: Only import what you use

---

## Development Workflow

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the library:**
   ```bash
   npm run build
   ```

3. **Run tests:**
   ```bash
   npm test
   ```

4. **Publish to NPM:**
   ```bash
   npm publish
   ```

---

## Import Patterns

### Full Package Import
```typescript
import { ButtonComponent, InputComponent } from '@ux4g/angular-core';
```

### Modular Import
```typescript
import { ButtonComponent } from '@ux4g/angular-core/button';
import { InputComponent } from '@ux4g/angular-core/input';
```

### Category Import
```typescript
import * as Forms from '@ux4g/angular-core/forms';
```

---

## Summary

The package structure is designed for:

✅ **Modularity** - Tree-shakeable exports  
✅ **Discoverability** - Consistent naming and organization  
✅ **Maintainability** - Clear file structure  
✅ **Performance** - Optimized builds  
✅ **Developer Experience** - Multiple import patterns  
✅ **Standards Compliance** - Angular best practices

This structure ensures the package is easy to use, maintain, and extend.
