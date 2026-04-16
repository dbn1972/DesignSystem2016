# Contributing to UX4G

## Getting Started

1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/dbn1972/DesignSystem2016.git
   cd DesignSystem2016
   pnpm install
   pnpm run dev
   ```

2. Create a feature branch:
   ```bash
   git checkout -b feature/component-name
   ```

## Adding a New Component

### 1. Create the component files

```
src/app/react-core-package/src/components/MyComponent/
├── MyComponent.tsx          # Component implementation
├── MyComponent.types.ts     # TypeScript interfaces
├── MyComponent.test.tsx     # Vitest + Testing Library tests
└── index.ts                 # Public exports
```

### 2. Component conventions

- Use `forwardRef` for all components
- Set `displayName` on every component
- Types extend HTML element attributes + `BaseComponentProps`
- CSS classes use `ux4g-` prefix (e.g., `ux4g-alert`)
- Use `cn()` utility for class merging
- Variants: `primary`, `secondary`, `tertiary`, `ghost`, `destructive`
- Sizes: `sm`, `md` (default), `lg`
- Accessibility: `role`, `aria-*` attributes, keyboard support required

### 3. Create the documentation page

File: `src/app/pages/ComponentMyComponentPage.tsx`

Every page must include these sections:
- `preview` prop with live component rendering
- `props` array with all typed props
- `examples` array with 3+ live examples
- `reactCode`, `angularCode`, `webComponentsCode`
- `comparisons` array (5 design systems)
- `accessibility` object (WCAG level, keyboard, screen reader)
- `tokens` object (design token mappings)
- `useCases` array (4 government service scenarios)
- `additionalContent` with: When to use, Do/Don't (2+2 cards), Playground, Related, Changelog, Research

Use `src/app/pages/ComponentButtonPage.tsx` as the reference.

### 4. Add the route

In `src/app/routes/domains/componentsRoutes.tsx`:
```tsx
const ComponentMyComponentPage = lazy(() => import("../../pages/ComponentMyComponentPage"));
// ...
{ path: "components/my-component", Component: ComponentMyComponentPage },
```

### 5. Write tests

Minimum test coverage per component:
- Renders with default props
- All variants apply correct classes
- All sizes apply correct classes
- Disabled state works
- Keyboard interaction works
- Ref forwarding works
- aria attributes are correct

### 6. Validate before PR

```bash
pnpm run typecheck        # 0 errors
pnpm vitest --run         # all passing
pnpm run build            # success
```

## Coding Standards

- **TypeScript** — strict mode, no `any` in component props (use in docs pages only)
- **Naming** — PascalCase for components, camelCase for props/functions
- **Imports** — use `@/*` path alias for src imports
- **Styling** — Tailwind CSS classes, no inline styles except for dynamic values
- **Accessibility** — every interactive component must have keyboard support and ARIA attributes
- **Testing** — Vitest + Testing Library, no snapshot tests

## Commit Convention

```
feat: add MyComponent with 3 variants
fix: MyComponent keyboard navigation
test: add MyComponent accessibility tests
docs: update MyComponent changelog
refactor: simplify MyComponent variant logic
```

## Pull Request Process

1. Branch from `main`
2. Make changes
3. Run `pnpm run verify` (typecheck + build + tests)
4. Push and create PR
5. PR must pass CI checks
6. Get 1 review approval
7. Squash merge to `main`
