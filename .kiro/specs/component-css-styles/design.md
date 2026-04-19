# Design Document: Component CSS Styles

## Overview

This design covers the creation of 59 missing CSS files in `src/app/styles-package/src/components/`, bringing the total from 28 to 87 — one per React component. Each file defines the visual styles consumed by the corresponding React component's `ux4g-*` class contract.

The approach is straightforward: each CSS file follows the same internal structure established by existing files like `buttons.css`, `status.css`, and `navigation.css`. All visual values are expressed through `--ux4g-*` design tokens with hardcoded fallbacks. Every interactive element gets `:focus-visible` indicators, and every animation gets a `prefers-reduced-motion` override.

The 59 files span seven categories: layout primitives, overlays/panels, forms, data display, navigation, India-specific government components, and feedback/communication. Each category has shared patterns (e.g., overlays share backdrop + z-index + slide transitions; forms share field-wrapper + label + hint + error structure).

### Key Design Decisions

1. **One file per component** — not consolidated mega-files. This matches the existing pattern (e.g., `buttons.css`, `card.css`) and enables tree-shaking via individual imports.
2. **Token-first with fallbacks** — every `var()` call includes a hardcoded fallback so components render correctly even without the tokens package loaded.
3. **Class contract alignment** — CSS class names are extracted directly from each React component's TSX file. The CSS file defines exactly the classes the component references.
4. **PostCSS nesting** — pseudo-classes and media queries use CSS nesting syntax, consistent with the existing build pipeline (`postcss-nesting`).
5. **Semantic tokens for dark mode** — components use semantic color tokens (`--ux4g-color-surface-*`, `--ux4g-color-text-*`) that resolve differently in dark mode. Component-level `[data-theme="dark"]` overrides are only added when semantic tokens alone are insufficient.

## Architecture

### Layer Placement

All 59 new files live in the **Components Layer** (`src/app/styles-package/src/components/`), the topmost layer in the 3-layer architecture:

```
┌─────────────────────────────────────────────┐
│  Components Layer (59 new + 28 existing)    │
├─────────────────────────────────────────────┤
│  Utilities Layer (spacing, layout)          │
├─────────────────────────────────────────────┤
│  Base Layer (reset, typography, surfaces,   │
│              focus)                          │
├─────────────────────────────────────────────┤
│  Tokens (@ux4g/tokens)                      │
└─────────────────────────────────────────────┘
```

Component CSS files depend on base layer focus styles and token definitions but never import from each other (no cross-component dependencies).

### File Naming Convention

Each file is named in lowercase kebab-case matching the component:

```
src/app/styles-package/src/components/
├── accordion.css
├── autocomplete.css
├── application-tracker.css
├── aspect-ratio.css
├── back-to-top.css
├── ... (59 new files)
└── index.css  (updated with 59 new @import statements)
```

### Import Strategy

The `components/index.css` file imports all component CSS files alphabetically. The 59 new `@import` statements are appended after the existing 28:

```css
/* Existing imports (28) ... */
@import './accordion.css';
@import './application-tracker.css';
@import './aspect-ratio.css';
/* ... all 59 new imports alphabetically */
```

### Build Pipeline

No changes to the build pipeline. The existing PostCSS setup handles:
1. `postcss-import` — resolves `@import` statements
2. `postcss-nesting` — transforms nested CSS to flat CSS
3. `autoprefixer` — adds vendor prefixes

## Components and Interfaces

### CSS File Template

Every new CSS file follows this internal structure:

```css
/**
 * UX4G {ComponentName} Styles
 * {One-line description}
 * Class contract: src/app/react-core-package/src/components/{ComponentName}/{ComponentName}.tsx
 */

/* ── Base ── */
.ux4g-{component} { /* layout, display, box-model, typography, colors */ }

/* ── Sub-elements ── */
.ux4g-{component}-{element} { /* child element styles */ }

/* ── Variants ── */
.ux4g-{component}-{variant} { /* visual variant overrides */ }

/* ── States ── */
.ux4g-{component}-disabled { /* disabled state */ }
.ux4g-{component}-error { /* error state */ }
.ux4g-{component}-loading { /* loading state */ }

/* ── Sizes ── */
.ux4g-{component}-sm { /* small size */ }
.ux4g-{component}-md { /* medium size (default) */ }
.ux4g-{component}-lg { /* large size */ }

/* ── Pseudo-classes ── */
.ux4g-{component}:hover { /* hover state */ }
.ux4g-{component}:active { /* active state */ }
.ux4g-{component}:focus-visible {
  outline: 2px solid var(--ux4g-color-focus-ring, #005A9C);
  outline-offset: 2px;
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .ux4g-{component} {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

### Token Consumption Patterns

All values use `var(--ux4g-token, fallback)`:

| Category | Token Pattern | Example |
|----------|--------------|---------|
| Colors | `--ux4g-color-*` | `var(--ux4g-color-primary, #005196)` |
| Spacing | `--ux4g-spacing-*` | `var(--ux4g-spacing-4, 1rem)` |
| Typography | `--ux4g-font-size-*`, `--ux4g-font-weight-*`, `--ux4g-line-height-*` | `var(--ux4g-font-size-sm, 0.875rem)` |
| Radius | `--ux4g-radius-*` | `var(--ux4g-radius-md, 0.375rem)` |
| Shadows | `--ux4g-shadow-*` | `var(--ux4g-shadow-lg, 0 10px 15px -3px rgba(0,0,0,0.1))` |
| Z-index | `--ux4g-z-*` | `var(--ux4g-z-modal, 1300)` |
| Motion | `--ux4g-motion-duration-*` | `var(--ux4g-motion-duration-base, 200ms)` |

### Category-Specific Design Patterns

#### Layout Primitives (Container, Flex, Grid, Stack, Center, Spacer, Section, AspectRatio)

Minimal styling — these are structural components. No variants, no states, no animations. Token consumption limited to spacing and sizing.

```css
/* Example: Container */
.ux4g-container {
  width: 100%;
  max-width: var(--ux4g-sizing-container-7xl, 80rem);
  margin-inline: auto;
  padding-inline: var(--ux4g-spacing-4, 1rem);
}
```

Layout primitives use modifier classes for configuration (e.g., `.ux4g-flex-row`, `.ux4g-grid-cols-3`).

#### Overlay and Panel Components (Modal, Drawer, Popover, Dropdown, Notification, Snackbar)

Shared patterns:
- Fixed/absolute positioning with `z-index` tokens
- Backdrop overlay (`background: rgba(0,0,0,0.5)`)
- Entry/exit transitions (slide, fade)
- `prefers-reduced-motion` override for all transitions
- Sub-elements: header, body, footer, close button

```css
/* Example: Drawer backdrop */
.ux4g-drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: var(--ux4g-z-modal, 1300);
  background-color: rgba(0, 0, 0, 0.5);
}
```

Z-index layering:
| Component | Token | Fallback |
|-----------|-------|----------|
| Dropdown | `--ux4g-z-dropdown` | 1000 |
| Popover | `--ux4g-z-popover` | 1400 |
| Modal | `--ux4g-z-modal` | 1300 |
| Drawer | `--ux4g-z-modal` | 1300 |
| Notification | `--ux4g-z-popover` | 1400 |
| Snackbar | `--ux4g-z-popover` | 1400 |

#### Form Components (Field, Label, HintText, ErrorText, FileUpload, OTPInput, Autocomplete, DatePicker, Slider, SearchBar, FormBuilder)

Shared patterns:
- Vertical field wrapper with consistent gap
- Label → Input → Hint/Error stacking
- Error state: `--ux4g-color-error` border + `--ux4g-color-surface-error` background
- Disabled state: reduced opacity + `cursor: not-allowed`
- Focus: inset outline for inputs, standard outline for buttons

```css
/* Example: Field wrapper */
.ux4g-field {
  display: flex;
  flex-direction: column;
  gap: var(--ux4g-spacing-1, 0.25rem);
  margin-bottom: var(--ux4g-spacing-4, 1rem);
}
```

#### Data Display Components (Accordion, DataGrid, DescriptionList, List, Statistic, Timeline, TreeView, CodeBlock, Rating, Skeleton, EmptyState, QRCode)

Shared patterns:
- Border-separated items (accordion, list, data grid rows)
- Expand/collapse transitions (accordion, tree view)
- Indicator elements (chevrons, dots, icons)
- Hover/selection states for interactive items

```css
/* Example: Accordion item */
.ux4g-accordion-item {
  border-bottom: 1px solid var(--ux4g-color-border-default, #D1D5DB);
}
.ux4g-accordion-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--ux4g-spacing-4, 1rem);
  /* ... */
}
```

#### Navigation Components (Header, Footer, NavigationMenu, BackToTop, Stepper, LanguageSelector, SegmentedControl, ShowHide)

Shared patterns:
- Sticky/fixed positioning for Header, BackToTop
- Active link indicators (border-bottom, background highlight)
- Government tricolor stripe for Header
- Step indicators with connector lines for Stepper

#### India-Specific Government Components (AadhaarInput, PANCardInput, AddressAutocompleteIndia, Captcha, DigitalSignature, PaymentGateway, ApplicationTracker, MapLocationPicker)

Shared patterns:
- Monospace font for formatted inputs (Aadhaar, PAN)
- `letter-spacing` for digit grouping
- `text-transform: uppercase` for PAN
- Compound field layouts (address with pin code + state/district)
- Reuse of form component patterns (label, hint, error)

#### Feedback and Communication Components (FeedbackRatingWidget, Chatbot, RichTextEditor, DocumentViewer, VideoPlayer, CalendarScheduler, ChartLibrary)

Shared patterns:
- Container with toolbar + content area
- Floating/fixed positioning for Chatbot
- Aspect ratio containers for VideoPlayer, ChartLibrary
- Interactive controls with hover/focus states

### Focus Indicator Pattern

All interactive elements use the same focus pattern established in `base/focus.css`:

```css
.ux4g-{component}:focus-visible {
  outline: 2px solid var(--ux4g-color-focus-ring, #005A9C);
  outline-offset: 2px;
}
```

For form inputs, the offset is inset (`-2px`). For buttons and controls, the offset is outset (`2px`). The focus ring shadow (`box-shadow: 0 0 0 4px var(--ux4g-color-focus-ring-shadow, ...)`) is added for primary action buttons.

### Dark Mode Strategy

Components use semantic color tokens that automatically resolve in dark mode:
- `--ux4g-color-surface-primary` → white in light, dark gray in dark
- `--ux4g-color-text-primary` → near-black in light, near-white in dark
- `--ux4g-color-border-default` → light gray in light, dark gray in dark

For components needing explicit dark overrides (e.g., shadows, backdrop opacity):

```css
[data-theme="dark"] .ux4g-{component} {
  box-shadow: var(--ux4g-shadow-lg-dark, 0 10px 15px -3px rgba(0, 0, 0, 0.3));
}
```

### Reduced Motion Pattern

Every file that defines `transition` or `animation` includes:

```css
@media (prefers-reduced-motion: reduce) {
  .ux4g-{component},
  .ux4g-{component} * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

This is placed as the last rule block in each file.

## Data Models

No new data models are introduced. The CSS files are static assets that define class selectors consumed by React components. The "data" is the class contract — the set of `ux4g-*` class names each TSX file references.

### Class Contract Registry

Each CSS file must define every class referenced in the corresponding TSX. The mapping is:

| TSX Pattern | CSS Selector |
|-------------|-------------|
| `className="ux4g-accordion"` | `.ux4g-accordion { }` |
| `className={cn('ux4g-accordion-item', isOpen && 'ux4g-accordion-item-open')}` | `.ux4g-accordion-item { }` + `.ux4g-accordion-item-open { }` |
| `className="ux4g-accordion-header"` | `.ux4g-accordion-header { }` |

### Rollout Strategy

The 59 components are created in dependency order across 5 waves:

**Wave 1 — Layout Primitives (8 files):** Container, Flex, Grid, Stack, Center, Spacer, Section, AspectRatio. No dependencies on other new components.

**Wave 2 — Form Primitives (11 files):** Field, Label, HintText, ErrorText, FileUpload, OTPInput, Autocomplete, DatePicker, Slider, SearchBar, FormBuilder. Depend on layout primitives for field structure.

**Wave 3 — Data Display (12 files):** Accordion, DataGrid, DescriptionList, List, Statistic, Timeline, TreeView, CodeBlock, Rating, Skeleton, EmptyState, QRCode.

**Wave 4 — Navigation + Overlays (14 files):** Header, Footer, NavigationMenu, BackToTop, Stepper, LanguageSelector, SegmentedControl, ShowHide, Modal, Drawer, Popover, Dropdown, Notification, Snackbar.

**Wave 5 — India-Specific + Feedback (14 files):** AadhaarInput, PANCardInput, AddressAutocompleteIndia, Captcha, DigitalSignature, PaymentGateway, ApplicationTracker, MapLocationPicker, FeedbackRatingWidget, Chatbot, RichTextEditor, DocumentViewer, VideoPlayer, CalendarScheduler, ChartLibrary.


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Class contract alignment

*For any* React component that references `ux4g-*` CSS class names in its TSX file, every referenced class name SHALL be defined as a selector in the corresponding Component CSS file.

**Validates: Requirements 2.1, 2.2**

### Property 2: Token-only values

*For any* Component CSS file, all color, spacing, typography, border-radius, shadow, and transition-duration property values SHALL be expressed through `var(--ux4g-*)` references, with hardcoded values appearing only in the fallback position of `var()` calls — never as standalone property values.

**Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 20.4**

### Property 3: Token fallback completeness

*For any* `var()` function call in any Component CSS file, the call SHALL include a hardcoded fallback as the second argument (i.e., `var(--ux4g-*, fallback)`).

**Validates: Requirements 7.7**

### Property 4: Naming convention compliance

*For any* CSS class selector in any Component CSS file, the selector SHALL start with `.ux4g-` and use only lowercase kebab-case characters (`[a-z0-9-]`).

**Validates: Requirements 12.1, 12.2, 12.3, 12.4**

### Property 5: Focus indicator correctness

*For any* interactive Component CSS file (buttons, links, inputs, controls), the file SHALL contain a `:focus-visible` rule that sets `outline: 2px solid var(--ux4g-color-focus-ring, ...)` with `outline-offset: 2px`, and SHALL NOT contain any `:focus` rule that removes or overrides the outline without a corresponding `:focus-visible` preservation.

**Validates: Requirements 9.1, 9.2, 9.3, 9.5**

### Property 6: Reduced motion coverage

*For any* Component CSS file that defines a `transition` or `animation` property, the file SHALL also contain a `@media (prefers-reduced-motion: reduce)` query that sets `transition-duration: 0.01ms` and/or `animation-duration: 0.01ms`.

**Validates: Requirements 11.1, 11.2, 11.3**

### Property 7: Interactive state completeness

*For any* interactive component (buttons, links, controls, clickable items), the Component CSS file SHALL define both `:hover` and `:active` pseudo-class rules with visually distinct style changes.

**Validates: Requirements 4.3, 5.4, 5.5**

### Property 8: State class required properties

*For any* component that supports a disabled state, the `.ux4g-{component}-disabled` class SHALL contain `opacity`, `cursor: not-allowed`, and `pointer-events: none`. *For any* component that supports an error state, the `.ux4g-{component}-error` class SHALL reference `--ux4g-color-error`. *For any* component that supports a loading state, the `.ux4g-{component}-loading` class SHALL contain `pointer-events: none`.

**Validates: Requirements 5.1, 5.2, 5.3**

### Property 9: File header documentation

*For any* Component CSS file, the file SHALL begin with a block comment containing the component name and a reference to the React component class contract path.

**Validates: Requirements 20.1**

## Error Handling

### Missing Token Graceful Degradation

Every `var()` call includes a hardcoded fallback. If the `@ux4g/tokens` package is not loaded or a token is undefined, components render with the fallback values — visually acceptable defaults that maintain readability and usability.

### Missing CSS File

If a component CSS file is missing, the React component renders as unstyled HTML. The build verification script (class contract check) catches this at build time by comparing TSX class references against CSS definitions.

### Invalid Class References

If a TSX file references a class not defined in CSS, the build verification reports it as an error. The class simply has no effect at runtime (CSS ignores undefined classes), but the verification ensures no class is silently missing.

### Dark Mode Token Resolution Failure

If semantic tokens don't resolve in dark mode (e.g., custom theme missing dark values), the fallback values provide a light-mode appearance. This is acceptable degradation — the component remains usable, just not dark-themed.

### PostCSS Build Failure

If a CSS file has syntax errors, the PostCSS build fails and reports the file and line number. The nesting syntax is validated by `postcss-nesting` during build.

## Testing Strategy

### Unit Tests (Example-Based)

Unit tests verify specific component implementations:

- **File existence**: All 59 CSS files exist in `src/app/styles-package/src/components/`
- **Index imports**: `components/index.css` contains `@import` for all 87 component files
- **Category-specific properties**: Layout primitives have correct display values, overlays have z-index, forms have field structure, etc.
- **Size class values**: sm/md/lg classes have correct min-height values
- **Touch target compliance**: Interactive sm-sized components meet 44×44px minimum

### Property-Based Tests

Property-based tests verify universal structural rules across all 59 CSS files. The test framework parses CSS files and checks properties hold for every file.

- **Library**: `fast-check` (JavaScript property-based testing library)
- **Minimum iterations**: 100 per property (though many properties enumerate all 59 files deterministically)
- **Tag format**: `Feature: component-css-styles, Property {N}: {title}`

Each correctness property from the design document maps to one property-based test:

1. **Class contract alignment** — For each component, extract TSX class refs and verify CSS defines them
2. **Token-only values** — Parse CSS values and verify no hardcoded colors/spacing outside fallbacks
3. **Token fallback completeness** — Parse all `var()` calls and verify fallback argument exists
4. **Naming convention** — Parse all selectors and verify `ux4g-` prefix + kebab-case
5. **Focus indicator** — For interactive components, verify `:focus-visible` rules
6. **Reduced motion** — For animated components, verify `prefers-reduced-motion` query
7. **Interactive states** — For interactive components, verify `:hover` and `:active` rules
8. **State class properties** — For stateful components, verify disabled/error/loading classes
9. **File header** — Verify block comment at file start

### Integration Tests

- **PostCSS build**: Run `pnpm run build` in the styles-package and verify it completes without errors
- **Bundle size**: Verify the complete `dist/components.css` bundle is within expected size range
- **Import resolution**: Verify all `@import` paths resolve correctly

### Visual Regression Tests

- **Playwright snapshots**: Capture rendered components in light and dark mode
- **Reduced motion**: Capture with `prefers-reduced-motion: reduce` enabled
- **Focus states**: Capture components in focused state

### Build Verification Script

A class contract verification script (run as part of `pnpm run verify`):
1. For each React component, extract all `ux4g-*` class names from TSX
2. For the corresponding CSS file, extract all defined selectors
3. Report any TSX class reference without a CSS definition
