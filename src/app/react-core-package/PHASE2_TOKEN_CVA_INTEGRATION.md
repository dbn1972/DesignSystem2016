# Phase 2: Token Integration with CVA

**UX4G Design System - Component Maturity Enhancement**

This document outlines Phase 2 of the design system evolution: migrating components to a token-driven architecture using Class Variance Authority (CVA) for systematic variant management.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Token Structure](#token-structure)
4. [CVA Integration](#cva-integration)
5. [Implementation Guide](#implementation-guide)
6. [Migration Checklist](#migration-checklist)
7. [Examples](#examples)
8. [Benefits](#benefits)
9. [Next Steps](#next-steps)

---

## Overview

### Goals

1. **Token-Driven Design**: All component styles derived from centralized design tokens
2. **Systematic Variants**: CVA for type-safe, predictable variant management
3. **Enhanced Maintainability**: Single source of truth for design decisions
4. **Improved DX**: Better TypeScript support and autocomplete
5. **Scalability**: Easy to add new variants and maintain consistency

### What Changed

**Before (v1.x):**
```tsx
// CSS classes with hardcoded styles
<button className="ux4g-button ux4g-button-primary ux4g-button-md">
  Submit
</button>
```

**After (v2.x):**
```tsx
// Token-driven with CVA variants
<Button variant="primary" size="md">
  Submit
</Button>
```

---

## Architecture

### Component Layer Structure

```
┌─────────────────────────────────────┐
│     Component Layer (React)         │  ← Button.tsx
│  - Props interface                  │
│  - Accessibility logic              │
│  - Rendering logic                  │
└─────────────────────────────────────┘
              ↓ uses
┌─────────────────────────────────────┐
│     Variant Layer (CVA)             │  ← button.variants.ts
│  - Variant definitions              │
│  - Class composition                │
│  - TypeScript types                 │
└─────────────────────────────────────┘
              ↓ references
┌─────────────────────────────────────┐
│     Token Layer (JSON)              │  ← tokens/components/button.json
│  - Design values                    │
│  - Semantic naming                  │
│  - Documentation                    │
└─────────────────────────────────────┘
```

### File Organization

```
react-core-package/
└── src/
    └── components/
        └── Button/
            ├── Button.tsx              # Main component (v1 - legacy)
            ├── Button.v2.tsx           # Token-driven component (v2)
            ├── Button.types.ts         # TypeScript interfaces
            ├── button.variants.ts      # CVA variant definitions (NEW)
            ├── index.ts                # Public exports
            └── README.md               # Component documentation

tokens-package/
└── tokens/
    ├── base/                           # Base tokens (colors, spacing, etc.)
    │   ├── colors.json
    │   ├── spacing.json
    │   └── typography.json
    └── components/                     # Component-specific tokens (NEW)
        ├── button.json
        ├── input.json
        └── alert.json
```

---

## Token Structure

### Component Token Architecture

Component tokens are organized into logical groups:

```json
{
  "ux4g": {
    "component": {
      "button": {
        "base": {           // Structural properties
          "height": {},
          "padding": {},
          "borderRadius": {},
          "fontSize": {}
        },
        "variant": {        // Visual variants
          "primary": {},
          "secondary": {},
          "tertiary": {}
        },
        "accessibility": {  // A11y requirements
          "minTouchTarget": {},
          "focusRingWidth": {}
        }
      }
    }
  }
}
```

### Token Naming Convention

**Pattern:** `{category}.{component}.{group}.{property}.{modifier}`

**Examples:**
- `ux4g.component.button.base.height.md` → Medium button height
- `ux4g.component.button.variant.primary.background.hover` → Primary button hover background
- `ux4g.component.input.state.error.border` → Input error border color

### Token Documentation

Each token includes:
- **value**: The actual CSS value
- **description**: Human-readable explanation
- **a11y** (optional): Accessibility notes (contrast ratios, WCAG compliance)

```json
{
  "value": "#005196",
  "description": "Primary button background - Navy 500",
  "a11y": "Passes AAA on white"
}
```

---

## CVA Integration

### Why CVA?

**Class Variance Authority** provides:
1. **Type Safety**: Automatic TypeScript inference
2. **Composability**: Easy to combine variants
3. **Performance**: No runtime overhead
4. **DX**: Excellent IDE autocomplete

### CVA Pattern

```typescript
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  // Base classes (applied to all variants)
  'inline-flex items-center justify-center rounded border',
  {
    variants: {
      // Variant dimension 1: Visual style
      variant: {
        primary: 'bg-navy-500 text-white border-navy-500',
        secondary: 'bg-white text-navy-500 border-navy-500',
      },
      // Variant dimension 2: Size
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// TypeScript type inference
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
```

### Using CVA in Components

```typescript
import { cn } from '../../utils/cn';
import { buttonVariants } from './button.variants';

export const Button = ({ variant, size, className, ...props }) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        className // Allow overrides
      )}
      {...props}
    />
  );
};
```

---

## Implementation Guide

### Step 1: Create Component Tokens

Create `/tokens/components/{component}.json`:

```json
{
  "$schema": "https://tr.designtokens.org/format/",
  "ux4g": {
    "component": {
      "{component-name}": {
        "base": {
          "$type": "dimension",
          // Structural tokens
        },
        "variant": {
          "$type": "color",
          // Variant-specific tokens
        },
        "accessibility": {
          "$type": "dimension",
          // A11y tokens
        }
      }
    }
  }
}
```

**Token Categories:**

1. **base**: Structural properties (height, padding, borders, typography)
2. **variant**: Visual styles per variant (colors, backgrounds)
3. **state**: State-specific styles (hover, focus, disabled, error)
4. **accessibility**: WCAG compliance values (min sizes, focus rings)

### Step 2: Create CVA Variants File

Create `{Component}.variants.ts`:

```typescript
/**
 * Component Variants
 * Token-driven variant system using CVA
 * 
 * @package @ux4g/react-core
 * @maturity Beta 🟡
 */

import { cva, type VariantProps } from 'class-variance-authority';

export const componentVariants = cva(
  [
    // Base classes with token comments
    'inline-flex', // Layout
    'items-center',
    'rounded', // token: base.borderRadius (4px)
    'border', // token: base.borderWidth (1px)
    'transition-all', // token: base.transition
    'duration-150',
    
    // Accessibility
    'focus:outline-none',
    'focus-visible:ring-2', // token: accessibility.focusRingWidth
    'min-h-[44px]', // token: accessibility.minTouchTarget (WCAG 2.5.5)
  ],
  {
    variants: {
      variant: {
        // Map each variant to token values
        primary: [
          'bg-[#005196]', // token: variant.primary.background.default
          'text-white',
          'hover:bg-[#004178]', // token: variant.primary.background.hover
        ],
      },
      size: {
        sm: [
          'h-8', // token: base.height.sm (32px)
          'px-3', // token: base.padding.horizontal.sm
          'text-sm', // token: base.fontSize.sm
        ],
        md: [
          'h-10', // token: base.height.md (40px)
          'px-4',
          'text-base',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ComponentVariantProps = VariantProps<typeof componentVariants>;
```

**Key Practices:**

1. **Comment Token References**: Map each class to its token source
2. **Use Exact Values**: Use `[#005196]` instead of named colors for token alignment
3. **Group Logically**: Organize classes by concern (layout, colors, states)
4. **Include Accessibility**: Always include focus states, min sizes
5. **Default Variants**: Specify sensible defaults

### Step 3: Update Component Implementation

Update `{Component}.tsx` to use CVA:

```typescript
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { componentVariants } from './component.variants';
import type { ComponentProps } from './Component.types';

export const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(
          componentVariants({ variant, size }),
          className
        )}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';
```

### Step 4: Update Type Definitions

Ensure `{Component}.types.ts` extends CVA variant props:

```typescript
import { type ComponentVariantProps } from './component.variants';

export interface ComponentProps 
  extends React.HTMLAttributes<HTMLElement>,
          ComponentVariantProps {
  // Additional component-specific props
  loading?: boolean;
  disabled?: boolean;
}
```

### Step 5: Create Component Documentation

Create comprehensive README with:
- Token mappings
- Usage examples
- Accessibility notes
- Variant showcase

---

## Migration Checklist

### Per Component

- [ ] **Tokens Created**
  - [ ] Component token file created in `/tokens/components/`
  - [ ] All variants documented with values and descriptions
  - [ ] Accessibility tokens included (min sizes, focus states)
  - [ ] Token naming follows convention

- [ ] **CVA Variants**
  - [ ] `{component}.variants.ts` file created
  - [ ] All variants mapped to tokens (with comments)
  - [ ] Base styles include accessibility classes
  - [ ] TypeScript types exported
  - [ ] Default variants specified

- [ ] **Component Implementation**
  - [ ] Component uses CVA variants
  - [ ] Props interface extends CVA variant props
  - [ ] `cn()` utility used for class merging
  - [ ] Custom className prop supported (for overrides)
  - [ ] ForwardRef properly implemented

- [ ] **Documentation**
  - [ ] Component README updated
  - [ ] Token mappings documented
  - [ ] Examples include all variants
  - [ ] Accessibility features documented
  - [ ] Migration notes for v1 users

- [ ] **Testing**
  - [ ] All variants render correctly
  - [ ] Accessibility features verified (keyboard, screen reader)
  - [ ] Focus states work properly
  - [ ] Token values correctly applied

- [ ] **Maturity Status**
  - [ ] Maturity level badge updated in code
  - [ ] Component inventory updated
  - [ ] Changelog entry created

---

## Examples

### Example 1: Button Component

**Tokens** (`tokens/components/button.json`):
```json
{
  "ux4g": {
    "component": {
      "button": {
        "base": {
          "height": {
            "md": { "value": "40px" }
          },
          "borderRadius": { "value": "4px" }
        },
        "variant": {
          "primary": {
            "background": {
              "default": { "value": "#005196" },
              "hover": { "value": "#004178" }
            }
          }
        }
      }
    }
  }
}
```

**CVA Variants** (`button.variants.ts`):
```typescript
export const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'rounded', // token: base.borderRadius (4px)
    'transition-all',
    'min-h-[44px]', // WCAG 2.5.5
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[#005196]', // token: variant.primary.background.default
          'text-white',
          'hover:bg-[#004178]', // token: variant.primary.background.hover
        ],
      },
      size: {
        md: [
          'h-10', // token: base.height.md (40px)
          'px-4',
          'text-base',
        ],
      },
    },
  }
);
```

**Component** (`Button.tsx`):
```typescript
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
```

**Usage**:
```tsx
<Button variant="primary" size="md">Submit</Button>
```

### Example 2: Input Component

**Tokens** (`tokens/components/input.json`):
```json
{
  "ux4g": {
    "component": {
      "input": {
        "state": {
          "default": {
            "border": { "value": "#d4d4d4" }
          },
          "focus": {
            "border": { "value": "#005196" },
            "ring": { "value": "#005196" }
          },
          "error": {
            "border": { "value": "#dc2626" }
          }
        }
      }
    }
  }
}
```

**CVA Variants** (`input.variants.ts`):
```typescript
export const inputVariants = cva(
  [
    'w-full',
    'rounded',
    'border',
    'transition-all',
    'focus:outline-none',
    'focus:ring-2', // WCAG 2.4.7
  ],
  {
    variants: {
      state: {
        default: [
          'border-[#d4d4d4]', // token: state.default.border
          'focus:border-[#005196]', // token: state.focus.border
          'focus:ring-[#005196]', // token: state.focus.ring
        ],
        error: [
          'border-[#dc2626]', // token: state.error.border
          'focus:border-[#dc2626]',
          'focus:ring-[#dc2626]',
        ],
      },
    },
  }
);
```

---

## Benefits

### 1. Single Source of Truth

**Before:**
- Colors scattered across CSS files
- Duplication between components
- Hard to maintain consistency

**After:**
- All values in token files
- Components reference tokens
- Global changes in one place

### 2. Type Safety

```typescript
// TypeScript knows all valid variants
<Button variant="primary" /> // ✅ Valid
<Button variant="purple" /> // ❌ Type error

// Autocomplete in IDE
<Button variant={/* IDE suggests: primary, secondary, tertiary, danger, success */} />
```

### 3. Documentation as Code

Tokens are self-documenting:
```json
{
  "value": "#005196",
  "description": "Primary button background - Navy 500",
  "a11y": "Passes AAA on white (contrast 8.6:1)"
}
```

### 4. Accessibility by Default

```typescript
// WCAG compliance built into variants
cva([
  'min-h-[44px]', // WCAG 2.5.5: Min touch target
  'focus-visible:ring-2', // WCAG 2.4.7: Focus visible
  'focus-visible:ring-offset-2',
])
```

### 5. Easy Theming

Change one token, update all components:
```json
// Update primary color everywhere
"variant.primary.background.default": { "value": "#NEW_COLOR" }
```

### 6. Better DX

- IntelliSense autocomplete
- Type checking
- Clear API
- Easy to extend

---

## Next Steps

### Immediate (Sprint 1)

1. **✅ Complete Button Migration**
   - [x] Create button tokens
   - [x] Create button variants (CVA)
   - [x] Update Button component
   - [ ] Test all variants
   - [ ] Update documentation

2. **🔄 Input Component**
   - [x] Create input tokens
   - [ ] Create input variants (CVA)
   - [ ] Update Input component
   - [ ] Test all states
   - [ ] Update documentation

3. **📋 Alert Component**
   - [x] Create alert tokens
   - [ ] Create alert variants (CVA)
   - [ ] Update Alert component
   - [ ] Test all variants
   - [ ] Update documentation

### Short Term (Sprint 2-3)

4. **Core Components** (Tier 1 & 2)
   - [ ] Field
   - [ ] Label
   - [ ] ErrorText
   - [ ] HintText
   - [ ] Textarea
   - [ ] Select
   - [ ] Checkbox
   - [ ] Radio

5. **Documentation Template**
   - [ ] Create standardized component README template
   - [ ] Include token mapping section
   - [ ] Add accessibility checklist
   - [ ] Provide usage examples

### Medium Term (Sprint 4-6)

6. **Composite Components** (Tier 3)
   - [ ] Card
   - [ ] Badge
   - [ ] Tabs
   - [ ] Dialog
   - [ ] Table

7. **Token Build Pipeline**
   - [ ] Automated token compilation
   - [ ] CSS custom properties generation
   - [ ] Token documentation site
   - [ ] Design token validation

### Long Term (Sprint 7+)

8. **Pattern Components** (Tier 4)
   - [ ] Forms
   - [ ] Search
   - [ ] Pagination
   - [ ] Navigation

9. **Advanced Features**
   - [ ] Theme switcher support
   - [ ] Dark mode tokens
   - [ ] Regional variants (state-specific colors)
   - [ ] Token versioning

10. **Tooling**
    - [ ] Token visualization tool
    - [ ] Component playground
    - [ ] Automated migration codemods
    - [ ] Visual regression testing

---

## Migration Strategy

### Versioning Approach

- **v1.x**: Legacy CSS-based components (maintain for 6 months)
- **v2.x**: Token-driven CVA components (current development)
- **Coexistence**: Both versions available during migration period

### File Naming Convention

During migration:
- `Button.tsx` - Legacy v1 component
- `Button.v2.tsx` - New token-driven component
- `button.variants.ts` - CVA variant definitions

After migration complete:
- `Button.tsx` - Token-driven component (v2 replaces v1)
- `button.variants.ts` - CVA variants

### Component Priority

**Order of migration** (based on usage and impact):

1. **Foundation** (High impact, used everywhere)
   - Button ✅ In Progress
   - Input 🔄 Next
   - Alert 📋 Planned

2. **Core Forms** (High usage in services)
   - Field
   - Label
   - Select
   - Checkbox/Radio

3. **Feedback** (User experience critical)
   - Badge
   - Notification
   - Toast

4. **Layout** (Structural components)
   - Card
   - Container
   - Grid

5. **Composite** (Complex, lower priority)
   - Table
   - Tabs
   - Dialog

---

## Governance

### Review Process

1. **Token Review**
   - Design team approval for token values
   - Accessibility review for WCAG compliance
   - Cross-reference with existing tokens for consistency

2. **CVA Review**
   - Code review for variant completeness
   - TypeScript type checking
   - Performance considerations

3. **Component Review**
   - Functionality testing
   - Accessibility testing (keyboard, screen reader)
   - Visual regression testing
   - Documentation completeness

### Quality Gates

Before marking component as "migrated":
- [ ] All variants implemented
- [ ] Tokens documented with descriptions
- [ ] Accessibility features verified
- [ ] Tests passing (unit + integration + a11y)
- [ ] Documentation updated
- [ ] Example usage provided
- [ ] Peer review completed

---

## FAQ

**Q: Why CVA instead of styled-components or CSS modules?**

A: CVA provides excellent TypeScript support, no runtime overhead, and works well with Tailwind. It's perfect for design system component variants.

**Q: Can I still use custom className?**

A: Yes! CVA is used with `cn()` utility which allows className overrides:
```tsx
<Button className="my-custom-class" variant="primary" />
```

**Q: How do tokens relate to Tailwind classes?**

A: Tokens define the values, CVA maps them to Tailwind classes. We use arbitrary values like `bg-[#005196]` to ensure exact token alignment.

**Q: What about existing CSS?**

A: Legacy CSS will be maintained during the migration period (6 months). New components are token-driven only.

**Q: How do I add a new variant?**

A:
1. Add token values to component token file
2. Add variant to CVA configuration
3. Update TypeScript types (automatic with CVA)
4. Document the new variant

**Q: What about backwards compatibility?**

A: We maintain both v1 and v2 components during migration. v1 will be deprecated after 6 months with migration guide provided.

---

## Related Documentation

- [Component Maturity Framework](./MATURITY_FRAMEWORK.md)
- [Component Taxonomy](./COMPONENT_TAXONOMY.md)
- [Token Architecture](../tokens-package/ARCHITECTURE.md)
- [Accessibility Testing Guide](./ACCESSIBILITY_TESTING.md)

---

**Last Updated:** 2026-04-10  
**Version:** 1.0.0  
**Phase:** 2 - Token Integration with CVA  
**Owner:** UX4G Design System Team
