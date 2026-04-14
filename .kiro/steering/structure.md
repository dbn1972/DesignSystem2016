# Project Structure

## Top-Level Layout

```
src/
├── main.tsx                    # App entry point
├── styles/                     # Global styles (Tailwind, tokens, theme, fonts)
├── test/                       # Test setup (Vitest + jest-dom + mocks)
├── imports/                    # Product documentation / reference docs
└── app/                        # Main application code
    ├── App.tsx                 # Root component (ThemeProvider + RouterProvider)
    ├── routes.tsx              # Route definitions
    ├── routes/                 # Route path configuration
    ├── pages/                  # Page components (documentation site pages)
    ├── components/             # Shared app-level components (Header, Footer, Layout, UI)
    ├── contexts/               # React contexts (Theme, DarkMode)
    ├── services/               # Business logic services (validation, mock APIs, flow services)
    ├── config/                 # App configuration
    ├── content/                # Content library data
    ├── i18n/                   # Internationalization (i18next config + locale files)
    ├── react-core-package/     # ★ Core React component library (publishable)
    ├── angular-core-package/   # Angular component library
    ├── styles-package/         # Shared CSS styles package
    ├── tokens-package/         # Design tokens (JSON → CSS custom properties)
    ├── react-patterns-package/ # React pattern compositions
    ├── angular-patterns-package/ # Angular pattern compositions
    └── web-components-package/ # Web Components (exploratory)
```

## React Core Package (`src/app/react-core-package/`)

This is the primary component library. Each component follows a strict file convention:

```
src/components/{ComponentName}/
├── {ComponentName}.tsx         # Component implementation
├── {ComponentName}.types.ts    # TypeScript interfaces/types
├── {ComponentName}.test.tsx    # Vitest + Testing Library tests
├── {ComponentName}.stories.tsx # Storybook stories
└── index.ts                    # Public exports (component + types)
```

### Component Conventions

- Use `forwardRef` for all components
- Set `displayName` on every component
- Types extend HTML element attributes + `BaseComponentProps` from `src/types/common.ts`
- CSS classes use `ux4g-` prefix (e.g., `ux4g-alert`, `ux4g-button`)
- Use `cn()` utility (from `src/utils/cn.ts`) for class merging
- Variants: interactive (`primary`, `secondary`, `tertiary`, `ghost`, `destructive`), feedback/status (`neutral`, `info`, `success`, `warning`, `error`)
- Sizes: `sm`, `md` (default), `lg`
- Accessibility: `role`, `aria-*` attributes, keyboard support are required

## Design Tokens (`src/app/tokens-package/`)

- Source tokens in `tokens/` (JSON format: base, semantic, component-level)
- Built to CSS custom properties in `dist/tokens.css`
- Token naming: `--ux4g-*` prefix

## Styles (`src/styles/`)

- `index.css` — imports fonts, tokens, Tailwind, theme, dark mode compat
- `tailwind.css` — Tailwind v4 config with `tw-animate-css`
- `theme.css` — Theme-level CSS custom properties
- `ux4g-tokens.css` — Additional token definitions

## Other Key Directories

- `scripts/` — Build/validation scripts (doc link checker, API doc drift, semantic color validation)
- `tests/visual/` — Playwright visual regression tests
- `starter-repos/` — Starter templates (React, Angular)
- `ux4g-docs/` — Docusaurus-based documentation site (separate from main Vite app)
- `docs/` — Architecture docs, governance, progress tracking, reviews
