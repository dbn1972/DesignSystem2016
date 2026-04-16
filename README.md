# UX4G — Government of India Design System Platform

A government-grade design system platform for building consistent, accessible digital public services across Indian government ministries, departments, and agencies.

## What It Is

- **77 documented components** with React, Angular, and Web Components implementations
- **Full documentation site** with live previews, interactive playgrounds, Do/Don't guidance, accessibility specs, and research evidence
- **India-specific components** — AadhaarInput, PANCardInput, AddressAutocompleteIndia, PaymentGateway (UPI), LanguageSelector (22 languages)
- **Service blueprints** — Certificate service flow, identity patterns, officer dashboards
- **Design tokens** — CSS custom properties with `--ux4g-*` prefix
- **2,551 automated tests** across 85 test files

## Quick Start

### Prerequisites

- Node.js 20+ (tested on v24.14)
- pnpm 10+ (`npm install -g pnpm`)

### Install & Run

```bash
# Clone
git clone https://github.com/dbn1972/DesignSystem2016.git
cd DesignSystem2016

# Install dependencies
pnpm install

# Start dev server
pnpm run dev
# → http://localhost:5173/

# Run tests
pnpm vitest --run

# Type check
pnpm run typecheck

# Production build
pnpm run build
```

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | React 18.3, TypeScript 5.9+ |
| Build | Vite 6.3 with `@vitejs/plugin-react` |
| Styling | Tailwind CSS v4, CSS custom properties |
| Testing | Vitest 4, Testing Library, Playwright |
| Package Manager | pnpm (workspace mode) |
| Routing | React Router v7 |
| Icons | Lucide React |
| Variants | class-variance-authority (CVA) |
| i18n | i18next + react-i18next |

## Project Structure

```
src/
├── main.tsx                        # App entry point
├── styles/                         # Global styles, tokens, theme
├── app/
│   ├── App.tsx                     # Root component
│   ├── routes.tsx                  # Route definitions
│   ├── routes/                     # Route domain configs
│   ├── pages/                      # 77 component doc pages + other pages
│   ├── components/                 # Shared components (Header, Footer, Layout)
│   ├── react-core-package/         # ★ React component library
│   ├── angular-core-package/       # Angular component library
│   ├── web-components-package/     # Web Components library
│   ├── tokens-package/             # Design tokens (JSON → CSS)
│   ├── styles-package/             # Shared CSS styles
│   ├── react-patterns-package/     # React pattern compositions
│   ├── angular-patterns-package/   # Angular pattern compositions
│   ├── services/                   # Business logic services
│   ├── contexts/                   # React contexts (Theme, DarkMode)
│   ├── config/                     # App configuration
│   ├── content/                    # Content library data
│   └── i18n/                       # Internationalization
├── scripts/                        # Build & validation scripts
└── tests/visual/                   # Playwright visual regression
```

## Key Commands

```bash
pnpm run dev              # Start dev server (Vite)
pnpm run build            # Production build
pnpm run typecheck        # TypeScript type checking
pnpm vitest --run         # Run all tests once
pnpm run test:a11y        # Accessibility test subset
pnpm run test:coverage    # Tests with V8 coverage
pnpm run test:visual      # Playwright visual regression
pnpm run verify           # Full verification pipeline
pnpm run check:docs-links # Validate documentation links
pnpm run check:api-docs   # Check API doc drift
```

## Component Documentation Standard

Every component page includes:

1. **Live Preview Hero** — Interactive component rendering
2. **Props API** — Full typed props table
3. **Examples** — 3-7 live code examples with previews
4. **Code Downloads** — React, Angular, Web Components code
5. **Design System Comparison** — vs Material UI, Ant Design, GOV.UK, Chakra, Radix
6. **Accessibility** — WCAG level, keyboard support, screen reader behavior
7. **Token Mappings** — Design token to CSS property mappings
8. **Government Use Cases** — 4 India-specific scenarios per component
9. **When to Use / Don't Use** — Editorial guidance
10. **Do / Don't** — Visual examples of correct vs incorrect usage
11. **Interactive Playground** — Real-time prop controls
12. **Related Components** — Cross-references
13. **Changelog** — Version history
14. **Research & Evidence** — Accessibility and usability research citations

## Framework Packages

| Package | Path | Description |
|---|---|---|
| `@ux4g/react-core` | `src/app/react-core-package/` | 34 React components |
| `@ux4g/angular-core` | `src/app/angular-core-package/` | Angular component library |
| `@ux4g/web-components` | `src/app/web-components-package/` | Web Components library |
| `@ux4g/tokens` | `src/app/tokens-package/` | Design tokens |
| `@ux4g/styles` | `src/app/styles-package/` | Shared CSS styles |

## Path Aliases

- `@/*` maps to `src/*` (configured in tsconfig.json and vite.config.ts)

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

## License

Government of India — Internal Use
