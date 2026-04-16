# Architecture

## System Overview

UX4G is a monorepo containing a documentation site and multiple framework-specific component packages.

```
┌─────────────────────────────────────────────────┐
│                 Vite Dev Server                   │
│              (Documentation Site)                 │
├─────────────────────────────────────────────────┤
│  Pages (77 component docs + patterns + services) │
│  Shared Components (Header, Footer, Layout)      │
│  Routes (React Router v7)                        │
├──────────┬──────────┬──────────┬────────────────┤
│  React   │ Angular  │   Web    │    Tokens      │
│  Core    │  Core    │ Comps    │   Package      │
│ Package  │ Package  │ Package  │                │
├──────────┴──────────┴──────────┴────────────────┤
│              Design Tokens (CSS vars)            │
│              Shared Styles (Tailwind v4)          │
└─────────────────────────────────────────────────┘
```

## Key Decisions

### Why React + Angular + Web Components?

Indian government departments use different tech stacks. Providing all three frameworks from a single source of truth ensures consistency regardless of the implementing team's stack choice.

### Why Vite (not Next.js or Docusaurus)?

- Faster dev server startup (sub-200ms)
- No SSR complexity needed for a documentation site
- Direct TypeScript/TSX support
- Simpler deployment (static files)

### Why Tailwind CSS v4?

- Utility-first approach matches component variant patterns
- CSS custom properties for design tokens
- Dark mode via CSS variables (no class toggling)
- Smaller bundle than CSS-in-JS solutions

### Why CVA (class-variance-authority)?

- Type-safe variant definitions
- Composable with Tailwind classes
- No runtime CSS generation
- Works across React, Angular (via class strings), and Web Components

### Why pnpm workspaces?

- Faster installs than npm/yarn
- Strict dependency resolution (no phantom dependencies)
- Workspace protocol for local package references
- Disk space efficient (content-addressable storage)

## Package Relationships

```
react-core-package ──→ tokens-package
                   ──→ styles-package

angular-core-package ──→ tokens-package
                     ──→ styles-package

web-components-package ──→ tokens-package
                       ──→ styles-package

react-patterns-package ──→ react-core-package
angular-patterns-package ──→ angular-core-package
```

## Component Architecture

Each React component follows:

```tsx
// 1. forwardRef wrapper
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, className, ...props }, ref) => {
    // 2. cn() for class merging
    const classes = cn('ux4g-button', `ux4g-button-${variant}`, className);
    // 3. Semantic HTML with ARIA
    return <button ref={ref} className={classes} {...props}>{children}</button>;
  }
);
// 4. displayName
Button.displayName = 'Button';
```

## Routing Architecture

```
routes.tsx (root)
├── componentsRoutes.tsx    → /components/*  (77 pages)
├── foundationsRoutes.tsx   → /foundations/*
├── patternsRoutes.tsx      → /patterns/*
├── servicesRoutes.tsx      → /reference-service/*
├── systemsRoutes.tsx       → /systems/*
└── governanceRoutes.tsx    → /governance/*
```

All page components are lazy-loaded via `React.lazy()` for code splitting.

## Design Token Flow

```
tokens/base.json → tokens/semantic.json → tokens/component.json
                                              ↓
                                    dist/tokens.css (CSS vars)
                                              ↓
                              src/styles/ux4g-tokens.css
                                              ↓
                           Component styles via var(--ux4g-*)
```

## Testing Architecture

| Layer | Tool | Location |
|---|---|---|
| Unit/Component | Vitest + Testing Library | `*.test.tsx` next to components |
| Quality Audit | Vitest (static file analysis) | `src/app/pages/__tests__/` |
| Visual Regression | Playwright | `tests/visual/` |
| Type Checking | TypeScript `tsc --noEmit` | `tsconfig.json` |
| Link Validation | Custom script | `scripts/check-doc-links.mjs` |
