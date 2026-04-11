# Phase 2: Quick Start Guide

**Get Started with Token-Driven Components in 15 Minutes**

This quick start guide will walk you through creating your first token-driven component using CVA.

---

## Prerequisites

- [x] CVA installed: `class-variance-authority@0.7.1`
- [x] Tailwind CSS configured
- [x] Design tokens package available

---

## 5-Step Process

### Step 1: Create Tokens (5 min)

Create `/src/app/tokens-package/tokens/components/badge.json`:

```json
{
  "$schema": "https://tr.designtokens.org/format/",
  "ux4g": {
    "component": {
      "badge": {
        "base": {
          "$type": "dimension",
          "padding": {
            "horizontal": { "value": "8px" },
            "vertical": { "value": "4px" }
          },
          "borderRadius": { "value": "12px" },
          "fontSize": { "value": "12px" },
          "fontWeight": { "value": "500" }
        },
        "variant": {
          "default": {
            "$type": "color",
            "background": { "value": "#f5f5f5" },
            "text": { "value": "#525252" }
          },
          "primary": {
            "$type": "color",
            "background": { "value": "#005196" },
            "text": { "value": "#ffffff" }
          },
          "success": {
            "$type": "color",
            "background": { "value": "#008800" },
            "text": { "value": "#ffffff" }
          }
        }
      }
    }
  }
}
```

---

### Step 2: Create CVA Variants (5 min)

Create `/src/app/react-core-package/src/components/Badge/badge.variants.ts`:

```typescript
import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
  [
    // Base styles
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-full', // token: base.borderRadius (12px)
    'px-2', // token: base.padding.horizontal (8px)
    'py-1', // token: base.padding.vertical (4px)
    'text-xs', // token: base.fontSize (12px)
    'font-medium', // token: base.fontWeight (500)
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-[#f5f5f5]', // token: variant.default.background
          'text-[#525252]', // token: variant.default.text
        ],
        primary: [
          'bg-[#005196]', // token: variant.primary.background
          'text-white', // token: variant.primary.text
        ],
        success: [
          'bg-[#008800]', // token: variant.success.background
          'text-white', // token: variant.success.text
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;
```

---

### Step 3: Create Component (3 min)

Create `/src/app/react-core-package/src/components/Badge/Badge.tsx`:

```typescript
import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { badgeVariants, type BadgeVariantProps } from './badge.variants';

export interface BadgeProps 
  extends React.HTMLAttributes<HTMLSpanElement>,
          BadgeVariantProps {
  children?: React.ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
```

---

### Step 4: Create Exports (1 min)

Create `/src/app/react-core-package/src/components/Badge/index.ts`:

```typescript
export { Badge } from './Badge';
export type { BadgeProps } from './Badge';
export type { BadgeVariantProps } from './badge.variants';
```

---

### Step 5: Use Component (1 min)

```tsx
import { Badge } from '@ux4g/react-core';

function MyComponent() {
  return (
    <>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
    </>
  );
}
```

---

## Complete Example

Here's a complete component with all features:

```typescript
// badge.variants.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
  [
    'inline-flex',
    'items-center',
    'gap-1',
    'rounded-full',
    'px-2',
    'py-1',
    'text-xs',
    'font-medium',
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        default: ['bg-[#f5f5f5]', 'text-[#525252]'],
        primary: ['bg-[#005196]', 'text-white'],
        success: ['bg-[#008800]', 'text-white'],
        warning: ['bg-[#ff7700]', 'text-white'],
        danger: ['bg-[#dc2626]', 'text-white'],
      },
      size: {
        sm: ['px-1.5', 'py-0.5', 'text-[10px]'],
        md: ['px-2', 'py-1', 'text-xs'],
        lg: ['px-3', 'py-1.5', 'text-sm'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;

// Badge.tsx
import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { badgeVariants, type BadgeVariantProps } from './badge.variants';

export interface BadgeProps 
  extends React.HTMLAttributes<HTMLSpanElement>,
          BadgeVariantProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onRemove?: () => void;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, size, className, children, icon, onRemove, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {onRemove && (
          <button
            onClick={onRemove}
            className="inline-flex shrink-0 hover:opacity-70"
            aria-label="Remove"
          >
            ×
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

// Usage
import { Badge } from '@ux4g/react-core';
import { CheckIcon, XIcon } from 'lucide-react';

function Example() {
  return (
    <>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary" size="lg">Large Primary</Badge>
      <Badge variant="success" icon={<CheckIcon size={12} />}>
        Approved
      </Badge>
      <Badge variant="danger" onRemove={() => console.log('removed')}>
        Removable
      </Badge>
    </>
  );
}
```

---

## Common Patterns

### Pattern 1: Color Variants

```typescript
variants: {
  variant: {
    primary: [
      'bg-[#005196]', // Background
      'text-white',    // Text
      'border-[#005196]', // Border (if needed)
    ],
  },
}
```

### Pattern 2: Size Variants

```typescript
variants: {
  size: {
    sm: ['h-8', 'px-3', 'text-sm'],
    md: ['h-10', 'px-4', 'text-base'],
    lg: ['h-12', 'px-6', 'text-lg'],
  },
}
```

### Pattern 3: State Variants

```typescript
variants: {
  state: {
    default: ['border-[#d4d4d4]'],
    error: ['border-[#dc2626]', 'focus:ring-[#dc2626]'],
    success: ['border-[#008800]', 'focus:ring-[#008800]'],
  },
}
```

### Pattern 4: Compound Variants

```typescript
{
  variants: {
    variant: { primary: [], secondary: [] },
    size: { sm: [], md: [], lg: [] },
  },
  compoundVariants: [
    {
      variant: 'primary',
      size: 'lg',
      class: 'shadow-lg', // Extra style for large primary
    },
  ],
}
```

---

## Tips & Tricks

### 1. Token Comments

Always comment your token mappings:
```typescript
'bg-[#005196]', // token: variant.primary.background.default (Navy 500)
```

### 2. Accessibility First

Include minimum touch targets and focus states:
```typescript
cva([
  'min-h-[44px]', // WCAG 2.5.5: Min touch target
  'focus-visible:ring-2', // WCAG 2.4.7: Focus visible
])
```

### 3. Custom Overrides

Allow className overrides with `cn()`:
```typescript
className={cn(variants({ variant, size }), className)}
```

### 4. Default Variants

Always specify sensible defaults:
```typescript
defaultVariants: {
  variant: 'primary',
  size: 'md',
}
```

### 5. TypeScript Types

Export variant types for type safety:
```typescript
export type ComponentVariantProps = VariantProps<typeof componentVariants>;
```

---

## Troubleshooting

### Issue: Classes Not Applying

**Problem:** Tailwind classes not being applied

**Solution:** Ensure Tailwind is scanning the component files:
```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
}
```

### Issue: TypeScript Errors

**Problem:** Type errors with CVA

**Solution:** Ensure you're importing the type helper:
```typescript
import { type VariantProps } from 'class-variance-authority';
```

### Issue: Token Values Not Matching

**Problem:** Visual output doesn't match token file

**Solution:** Use exact values with arbitrary syntax:
```typescript
'bg-[#005196]' // Exact hex value
```
Not:
```typescript
'bg-navy-500' // Tailwind color (may not match)
```

---

## Next Steps

1. **Review:** [Full Phase 2 Documentation](./PHASE2_TOKEN_CVA_INTEGRATION.md)
2. **Template:** [Component Migration Template](./COMPONENT_MIGRATION_TEMPLATE.md)
3. **Reference:** [Token Reference Guide](../tokens-package/COMPONENT_TOKENS_REFERENCE.md)
4. **Example:** [Button Component Implementation](./src/components/Button/)

---

## Checklist

Use this checklist for each component:

- [ ] Tokens created in `/tokens/components/{component}.json`
- [ ] CVA variants file created
- [ ] Component implementation created
- [ ] Types exported properly
- [ ] Accessibility features included
- [ ] Token comments added
- [ ] Default variants specified
- [ ] Documentation written
- [ ] Examples provided
- [ ] Tested all variants

---

**Questions?**

- Read: [Phase 2 Full Documentation](./PHASE2_TOKEN_CVA_INTEGRATION.md)
- Check: [Component Examples](./src/components/)
- Ask: UX4G Design System Team

---

**Last Updated:** 2026-04-10  
**Version:** 1.0.0
