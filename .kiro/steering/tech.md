# Tech Stack & Build System

## Core Stack

- **Runtime**: React 18.3, TypeScript 5.9+
- **Build**: Vite 6.3 with `@vitejs/plugin-react`
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin), CSS custom properties for design tokens
- **Package Manager**: pnpm (workspace mode, `pnpm-workspace.yaml`)
- **Module Target**: ES2022, ESNext modules, Bundler resolution

## Testing

- **Unit/Component Tests**: Vitest 4 with jsdom environment, globals enabled
- **Test Utilities**: `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`
- **Visual Regression**: Playwright (Chromium, `tests/visual/`)
- **Test Setup**: `src/test/setup.ts` — extends Vitest expect with jest-dom matchers, auto-cleanup, mocks `matchMedia` and `IntersectionObserver`

## Key Libraries

- Radix UI primitives (accordion, dialog, dropdown, popover, select, tabs, tooltip, etc.)
- `class-variance-authority` + `clsx` + `tailwind-merge` for variant styling
- `lucide-react` for icons
- `react-router` v7 for routing
- `react-hook-form` for forms
- `recharts` for charts
- `i18next` + `react-i18next` for internationalization
- `framer-motion` / `motion` for animations
- `sonner` for toasts
- `tsup` for package bundling (core packages)

## Path Aliases

- `@/*` maps to `src/*` (configured in tsconfig.json and vite.config.ts)

## Common Commands

```bash
pnpm install          # Install dependencies
pnpm run dev          # Start dev server (Vite)
pnpm run build        # Production build
pnpm run typecheck    # TypeScript type checking (tsc --noEmit)
pnpm run test         # Run Vitest (watch mode)
pnpm vitest --run     # Run tests once (no watch)
pnpm run test:a11y    # Run accessibility-focused test subset
pnpm run test:coverage # Run tests with V8 coverage
pnpm run test:visual  # Playwright visual regression tests
pnpm run verify       # Full verification: typecheck + build + a11y tests + doc checks + semantic color checks
pnpm run check:docs-links      # Validate documentation links
pnpm run check:api-docs        # Check API doc drift
pnpm run check:semantic-colors # Validate semantic color tokens
```
