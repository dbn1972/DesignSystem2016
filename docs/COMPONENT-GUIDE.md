# Component Development Guide

Step-by-step guide to creating a new UX4G component.

## 1. Create Component Files

```bash
mkdir -p src/app/react-core-package/src/components/MyComponent
```

Create these files:

### MyComponent.tsx
```tsx
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { MyComponentProps } from './MyComponent.types';

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ children, variant = 'default', size = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('ux4g-mycomponent', `ux4g-mycomponent-${variant}`, `ux4g-mycomponent-${size}`, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MyComponent.displayName = 'MyComponent';
```

### MyComponent.types.ts
```tsx
import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface MyComponentProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}
```

### MyComponent.test.tsx
```tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders with default props', () => {
    render(<MyComponent>Content</MyComponent>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    const { container } = render(<MyComponent variant="primary">Content</MyComponent>);
    expect(container.firstChild).toHaveClass('ux4g-mycomponent-primary');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<MyComponent ref={ref}>Content</MyComponent>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
```

### index.ts
```tsx
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent.types';
```

## 2. Create Documentation Page

File: `src/app/pages/ComponentMyComponentPage.tsx`

Use `ComponentButtonPage.tsx` as the template. Required sections:

| Section | Prop | Minimum |
|---|---|---|
| Preview hero | `preview={...}` | 2-4 component states |
| Props table | `props={[...]}` | All public props |
| Examples | `examples={[...]}` | 3+ with live previews |
| React code | `reactCode={{...}}` | Component + types |
| Angular code | `angularCode={{...}}` | Component + module |
| Web Components | `webComponentsCode={{...}}` | Package + HTML |
| Comparisons | `comparisons={[...]}` | 5 design systems |
| Accessibility | `accessibility={{...}}` | WCAG, keyboard, screen reader |
| Tokens | `tokens={{...}}` | All token mappings |
| Use cases | `useCases={[...]}` | 4 government scenarios |
| Additional content | `additionalContent={...}` | See below |

### additionalContent must include:

1. **When to use** — 5 Do items + 5 Don't items
2. **Do/Don't** — 2+2 visual example cards
3. **Interactive Playground** — 3+ controls wired to preview
4. **Related Components** — 3 linked cards
5. **Changelog** — 4 version entries
6. **Research** — 3+ evidence cards

## 3. Add Route

In `src/app/routes/domains/componentsRoutes.tsx`:

```tsx
const ComponentMyComponentPage = lazy(() => import("../../pages/ComponentMyComponentPage"));

// In the routes array:
{ path: "components/my-component", Component: ComponentMyComponentPage },
```

## 4. Validate

```bash
pnpm run typecheck    # 0 errors
pnpm vitest --run     # all passing
pnpm run build        # success
```

The quality audit test at `src/app/pages/__tests__/component-pages-quality.test.tsx` will automatically check your new page for all required sections.
