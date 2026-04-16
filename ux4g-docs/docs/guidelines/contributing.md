---
sidebar_position: 1
title: Contributing
---

# Contributing

## Adding a New Component

1. Create component files in `src/app/react-core-package/src/components/MyComponent/`
2. Create documentation page in `src/app/pages/ComponentMyComponentPage.tsx`
3. Add route in `src/app/routes/domains/componentsRoutes.tsx`
4. Write tests (minimum: render, variants, sizes, disabled, keyboard, ref)
5. Run `pnpm run verify` before submitting PR

See the full [Component Development Guide](/docs/COMPONENT-GUIDE.md) for details.

## Coding Standards

- TypeScript strict mode
- PascalCase for components, camelCase for props
- `@/*` path alias for imports
- Tailwind CSS for styling
- `ux4g-` prefix for component CSS classes
- `forwardRef` + `displayName` on all components

## Commit Convention

```
feat: add new component
fix: resolve keyboard navigation issue
test: add accessibility tests
docs: update component changelog
```
