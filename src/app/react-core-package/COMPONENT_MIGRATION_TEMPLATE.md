# Component Migration Template

**Quick Start Guide for Migrating Components to Token-Driven CVA Pattern**

Use this template as a checklist when migrating or creating new components with the token-driven CVA approach.

---

## Step-by-Step Migration Guide

### Step 1: Create Component Tokens

📁 **Location:** `/src/app/tokens-package/tokens/components/{component-name}.json`

**Template:**

```json
{
  "$schema": "https://tr.designtokens.org/format/",
  "ux4g": {
    "component": {
      "{component-name}": {
        "base": {
          "$type": "dimension",
          "height": {
            "sm": { "value": "32px", "description": "Small {component} height" },
            "md": { "value": "40px", "description": "Medium {component} height - default" },
            "lg": { "value": "48px", "description": "Large {component} height" }
          },
          "padding": {
            "horizontal": {
              "sm": { "value": "8px", "description": "Small horizontal padding" },
              "md": { "value": "12px", "description": "Medium horizontal padding" },
              "lg": { "value": "16px", "description": "Large horizontal padding" }
            },
            "vertical": {
              "sm": { "value": "6px", "description": "Small vertical padding" },
              "md": { "value": "10px", "description": "Medium vertical padding" },
              "lg": { "value": "12px", "description": "Large vertical padding" }
            }
          },
          "borderWidth": {
            "value": "1px",
            "description": "{Component} border width"
          },
          "borderRadius": {
            "value": "4px",
            "description": "{Component} border radius"
          },
          "fontSize": {
            "sm": { "value": "14px", "description": "Small font size" },
            "md": { "value": "16px", "description": "Medium font size" },
            "lg": { "value": "18px", "description": "Large font size" }
          },
          "transition": {
            "duration": { "value": "150ms", "description": "Transition duration" },
            "timing": { "value": "ease-in-out", "description": "Transition timing" }
          }
        },
        "variant": {
          "primary": {
            "$type": "color",
            "background": {
              "default": { "value": "#005196", "description": "Primary background - Navy 500" },
              "hover": { "value": "#004178", "description": "Primary hover - Navy 600" },
              "active": { "value": "#00315a", "description": "Primary active - Navy 700" },
              "disabled": { "value": "#d4d4d4", "description": "Primary disabled - Neutral 300" }
            },
            "text": {
              "default": { "value": "#ffffff", "description": "Primary text - White" },
              "disabled": { "value": "#a3a3a3", "description": "Primary disabled text - Neutral 400" }
            },
            "border": {
              "default": { "value": "#005196", "description": "Primary border - Navy 500" },
              "hover": { "value": "#004178", "description": "Primary hover border - Navy 600" },
              "disabled": { "value": "#d4d4d4", "description": "Primary disabled border - Neutral 300" }
            }
          },
          "secondary": {
            "$type": "color",
            "background": {
              "default": { "value": "#ffffff", "description": "Secondary background - White" },
              "hover": { "value": "#f5f5f5", "description": "Secondary hover - Neutral 100" },
              "active": { "value": "#e5e5e5", "description": "Secondary active - Neutral 200" },
              "disabled": { "value": "#fafafa", "description": "Secondary disabled - Neutral 50" }
            },
            "text": {
              "default": { "value": "#005196", "description": "Secondary text - Navy 500" },
              "disabled": { "value": "#a3a3a3", "description": "Secondary disabled text - Neutral 400" }
            },
            "border": {
              "default": { "value": "#005196", "description": "Secondary border - Navy 500" },
              "disabled": { "value": "#d4d4d4", "description": "Secondary disabled border - Neutral 300" }
            }
          }
        },
        "accessibility": {
          "$type": "dimension",
          "minTouchTarget": {
            "value": "44px",
            "description": "Minimum touch target size per WCAG 2.5.5"
          },
          "focusRingWidth": {
            "value": "2px",
            "description": "Focus ring width for accessibility"
          },
          "focusRingOffset": {
            "value": "2px",
            "description": "Focus ring offset"
          }
        }
      }
    }
  }
}
```

**Checklist:**
- [ ] File created in correct location
- [ ] Schema reference included
- [ ] All size variants defined (sm, md, lg)
- [ ] All visual variants defined
- [ ] All states defined (default, hover, active, disabled)
- [ ] Accessibility tokens included
- [ ] Descriptions provided for all tokens
- [ ] Values reference base tokens where appropriate

---

### Step 2: Create CVA Variants File

📁 **Location:** `/src/app/react-core-package/src/components/{Component}/{component}.variants.ts`

**Template:**

```typescript
/**
 * {Component} Variants
 * Token-driven variant system using class-variance-authority (CVA)
 * 
 * @package @ux4g/react-core
 * @maturity Beta 🟡
 * @since v2.0.0
 */

import { cva, type VariantProps } from 'class-variance-authority';

/**
 * {Component} variants using CVA
 * 
 * Token mappings:
 * - Base styles: tokens/components/{component}.json -> base
 * - Variant styles: tokens/components/{component}.json -> variant
 * - Size styles: tokens/components/{component}.json -> base.height, base.padding, base.fontSize
 */
export const {component}Variants = cva(
  // Base classes - applied to all variants
  [
    // Layout & Structure
    'inline-flex',
    'items-center',
    'justify-center',
    
    // Typography
    'font-medium', // token: base.fontWeight
    'leading-normal', // token: base.lineHeight
    'text-center',
    
    // Border & Radius
    'rounded', // token: base.borderRadius (4px)
    'border', // token: base.borderWidth (1px)
    
    // Transitions - token: base.transition
    'transition-all',
    'duration-150', // token: base.transition.duration (150ms)
    'ease-in-out', // token: base.transition.timing
    
    // Focus Management (WCAG 2.4.7)
    'focus:outline-none',
    'focus-visible:ring-2', // token: accessibility.focusRingWidth (2px)
    'focus-visible:ring-offset-2', // token: accessibility.focusRingOffset (2px)
    
    // Disabled State
    'disabled:cursor-not-allowed',
    'disabled:opacity-60',
    
    // Accessibility
    'min-h-[44px]', // token: accessibility.minTouchTarget (44px - WCAG 2.5.5)
  ],
  {
    variants: {
      /**
       * Visual variant
       * Token mapping: tokens/components/{component}.json -> variant
       */
      variant: {
        primary: [
          'bg-[#005196]', // token: variant.primary.background.default (Navy 500)
          'text-white', // token: variant.primary.text.default
          'border-[#005196]', // token: variant.primary.border.default
          'hover:bg-[#004178]', // token: variant.primary.background.hover (Navy 600)
          'hover:border-[#004178]', // token: variant.primary.border.hover
          'active:bg-[#00315a]', // token: variant.primary.background.active (Navy 700)
          'focus-visible:ring-[#005196]', // token: variant.primary.focus.ring
          'disabled:bg-[#d4d4d4]', // token: variant.primary.background.disabled
          'disabled:border-[#d4d4d4]', // token: variant.primary.border.disabled
          'disabled:text-[#a3a3a3]', // token: variant.primary.text.disabled
        ],
        
        secondary: [
          'bg-white', // token: variant.secondary.background.default
          'text-[#005196]', // token: variant.secondary.text.default (Navy 500)
          'border-[#005196]', // token: variant.secondary.border.default
          'hover:bg-[#f5f5f5]', // token: variant.secondary.background.hover (Neutral 100)
          'hover:border-[#004178]', // token: variant.secondary.border.hover
          'active:bg-[#e5e5e5]', // token: variant.secondary.background.active (Neutral 200)
          'focus-visible:ring-[#005196]', // token: variant.secondary.focus.ring
          'disabled:bg-[#fafafa]', // token: variant.secondary.background.disabled
          'disabled:border-[#d4d4d4]', // token: variant.secondary.border.disabled
          'disabled:text-[#a3a3a3]', // token: variant.secondary.text.disabled
        ],
      },
      
      /**
       * Size variant
       * Token mapping: tokens/components/{component}.json -> base.height, base.padding, base.fontSize
       */
      size: {
        sm: [
          'h-8', // token: base.height.sm (32px)
          'px-3', // token: base.padding.horizontal.sm (12px)
          'py-1.5', // token: base.padding.vertical.sm (6px)
          'text-sm', // token: base.fontSize.sm (14px)
        ],
        
        md: [
          'h-10', // token: base.height.md (40px)
          'px-4', // token: base.padding.horizontal.md (16px)
          'py-2.5', // token: base.padding.vertical.md (10px)
          'text-base', // token: base.fontSize.md (16px)
        ],
        
        lg: [
          'h-12', // token: base.height.lg (48px)
          'px-6', // token: base.padding.horizontal.lg (24px)
          'py-3', // token: base.padding.vertical.lg (12px)
          'text-lg', // token: base.fontSize.lg (18px)
        ],
      },
    },
    
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

/**
 * TypeScript type for {component} variant props
 * Automatically inferred from CVA configuration
 */
export type {Component}VariantProps = VariantProps<typeof {component}Variants>;
```

**Checklist:**
- [ ] File created in correct location
- [ ] All variants mapped to tokens (with comments)
- [ ] Base classes include accessibility requirements
- [ ] Focus states implemented (WCAG 2.4.7)
- [ ] Minimum touch targets met (WCAG 2.5.5)
- [ ] All states included (hover, active, disabled)
- [ ] Default variants specified
- [ ] TypeScript types exported

**Token Comment Format:**
```typescript
'bg-[#005196]', // token: variant.primary.background.default (Navy 500)
```

---

### Step 3: Update Component Implementation

📁 **Location:** `/src/app/react-core-package/src/components/{Component}/{Component}.v2.tsx`

**Template:**

```typescript
/**
 * {Component} Component (Token-Driven with CVA)
 * {Brief description}
 *
 * @package @ux4g/react-core
 * @maturity Beta 🟡
 * @tier Core
 * @since v1.0.0
 * @updated v2.0.0 - Token-driven with CVA
 * 
 * @example Basic usage
 * ```tsx
 * <{Component} variant="primary" size="md">
 *   Content
 * </{Component}>
 * ```
 * 
 * @example With additional props
 * ```tsx
 * <{Component} 
 *   variant="secondary" 
 *   size="lg"
 *   disabled={false}
 * >
 *   Content
 * </{Component}>
 * ```
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { {component}Variants, type {Component}VariantProps } from './{component}.variants';
import { {Component}Props } from './{Component}.types';

/**
 * {Component} Component with Token-Driven Styling via CVA
 * 
 * All visual styles are derived from design tokens defined in:
 * `/src/app/tokens-package/tokens/components/{component}.json`
 * 
 * Accessibility Features (WCAG 2.1 AA):
 * - Minimum 44px touch target (WCAG 2.5.5) via tokens
 * - 2px focus ring with offset (WCAG 2.4.7)
 * - aria-disabled for disabled state
 * - Semantic HTML element (keyboard accessible)
 * - [Add component-specific features]
 */
export const {Component} = forwardRef<HTMLElement, {Component}Props>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <element
        ref={ref}
        className={cn(
          {component}Variants({ variant, size }),
          className
        )}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </element>
    );
  }
);

{Component}.displayName = '{Component}';
```

**Checklist:**
- [ ] File created with `.v2.tsx` extension (during migration)
- [ ] Component uses forwardRef
- [ ] Props interface extends CVA variant props
- [ ] CVA variants applied via `cn()` utility
- [ ] Custom className supported
- [ ] Default prop values match CVA defaults
- [ ] Accessibility attributes included
- [ ] JSDoc comments comprehensive
- [ ] displayName set for debugging

---

### Step 4: Update Type Definitions

📁 **Location:** `/src/app/react-core-package/src/components/{Component}/{Component}.types.ts`

**Template:**

```typescript
/**
 * {Component} Component Type Definitions
 * 
 * @package @ux4g/react-core
 * @maturity Beta 🟡
 */

import { type {Component}VariantProps } from './{component}.variants';

/**
 * Props for the {Component} component
 * 
 * Extends CVA variant props for type-safe variant handling
 */
export interface {Component}Props 
  extends React.HTMLAttributes<HTMLElement>,
          {Component}VariantProps {
  /**
   * Content to display in the {component}
   */
  children?: React.ReactNode;
  
  /**
   * Additional CSS classes to apply
   * Merged with CVA variant classes via cn() utility
   */
  className?: string;
  
  /**
   * Whether the {component} is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Accessible label for the {component}
   * Required if children is not descriptive text
   */
  'aria-label'?: string;
}
```

**Checklist:**
- [ ] Extends CVA variant props
- [ ] Extends appropriate HTML element attributes
- [ ] All props documented with JSDoc
- [ ] Default values documented
- [ ] Accessibility props included
- [ ] children and className always included

---

### Step 5: Update Index Exports

📁 **Location:** `/src/app/react-core-package/src/components/{Component}/index.ts`

**Template:**

```typescript
/**
 * {Component} Component Exports
 * @package @ux4g/react-core
 */

// Export v2 (token-driven) component
export { {Component} } from './{Component}.v2';
export type { {Component}Props } from './{Component}.types';
export type { {Component}VariantProps } from './{component}.variants';

// Export v1 (legacy) component for backwards compatibility (during migration)
// export { {Component} as {Component}Legacy } from './{Component}';

// Export maturity metadata
export const {COMPONENT}_MATURITY = 'beta' as const;
export const {COMPONENT}_TIER = 'core' as const;
```

**Checklist:**
- [ ] v2 component exported as primary
- [ ] All TypeScript types exported
- [ ] Maturity metadata exported
- [ ] Legacy component export commented during migration

---

### Step 6: Create Component README

📁 **Location:** `/src/app/react-core-package/src/components/{Component}/README.md`

**Template:**

```markdown
# {Component}

**Maturity:** 🟡 Beta  
**Tier:** Core  
**Package:** @ux4g/react-core  
**Since:** v1.0.0  
**Updated:** v2.0.0 - Token-driven with CVA

{Brief description of component purpose}

---

## Installation

\`\`\`bash
npm install @ux4g/react-core
# or
pnpm add @ux4g/react-core
\`\`\`

---

## Usage

### Basic Example

\`\`\`tsx
import { {Component} } from '@ux4g/react-core';

function MyComponent() {
  return (
    <{Component} variant="primary" size="md">
      Content
    </{Component}>
  );
}
\`\`\`

### All Variants

\`\`\`tsx
<{Component} variant="primary">Primary</{Component}>
<{Component} variant="secondary">Secondary</{Component}>
\`\`\`

### All Sizes

\`\`\`tsx
<{Component} size="sm">Small</{Component}>
<{Component} size="md">Medium</{Component}>
<{Component} size="lg">Large</{Component}>
\`\`\`

### Disabled State

\`\`\`tsx
<{Component} disabled>
  Disabled Content
</{Component}>
\`\`\`

---

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Content to display |

---

## Token Mappings

All styles derived from: `/tokens/components/{component}.json`

### Base Tokens
- **Height:** `base.height.{size}`
- **Padding:** `base.padding.{horizontal|vertical}.{size}`
- **Border Radius:** `base.borderRadius`
- **Font Size:** `base.fontSize.{size}`

### Variant Tokens
- **Background:** `variant.{variant}.background.{state}`
- **Text:** `variant.{variant}.text.{state}`
- **Border:** `variant.{variant}.border.{state}`

### Accessibility Tokens
- **Min Touch Target:** `accessibility.minTouchTarget` (44px - WCAG 2.5.5)
- **Focus Ring:** `accessibility.focusRingWidth` (2px - WCAG 2.4.7)

---

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **WCAG 2.5.5** - Target Size: Minimum 44x44px touch targets
- ✅ **WCAG 2.4.7** - Focus Visible: 2px focus ring with offset
- ✅ **WCAG 2.1.1** - Keyboard: Fully keyboard accessible
- ✅ **WCAG 4.1.2** - Name, Role, Value: Proper ARIA attributes

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Focus {component} |
| `Enter` | Activate {component} |
| `Space` | Activate {component} |

### Screen Reader Support

- Announces disabled state via `aria-disabled`
- Uses semantic HTML element
- Custom labels via `aria-label`

---

## Examples

### Example 1: [Describe scenario]

\`\`\`tsx
// Example code
\`\`\`

---

## Migration from v1

### Before (v1)

\`\`\`tsx
<{Component} className="ux4g-{component} ux4g-{component}-primary ux4g-{component}-md">
  Content
</{Component}>
\`\`\`

### After (v2)

\`\`\`tsx
<{Component} variant="primary" size="md">
  Content
</{Component}>
\`\`\`

### Breaking Changes

- CSS class names changed to token-driven approach
- Props now use `variant` and `size` instead of className modifiers

---

## Related Components

- [{RelatedComponent}](./{RelatedComponent}/README.md)

---

**Last Updated:** 2026-04-10  
**Version:** 2.0.0
```

**Checklist:**
- [ ] Maturity badge included
- [ ] Installation instructions provided
- [ ] Basic usage example included
- [ ] All variants showcased
- [ ] API reference complete
- [ ] Token mappings documented
- [ ] Accessibility features listed
- [ ] Migration guide provided
- [ ] Examples comprehensive

---

## Final Checklist

### Pre-Migration
- [ ] Review existing component implementation
- [ ] Identify all variants and states
- [ ] Document current usage patterns
- [ ] Plan token structure

### Token Creation
- [ ] Component token file created
- [ ] All values mapped from base tokens
- [ ] Accessibility tokens included
- [ ] Descriptions comprehensive

### CVA Implementation
- [ ] Variants file created
- [ ] All classes map to tokens (with comments)
- [ ] Accessibility classes included
- [ ] TypeScript types exported

### Component Update
- [ ] v2 component implemented
- [ ] Props extend CVA variant props
- [ ] forwardRef implemented
- [ ] Accessibility attributes added

### Documentation
- [ ] Component README created
- [ ] Token mappings documented
- [ ] Usage examples comprehensive
- [ ] Migration guide provided

### Testing
- [ ] All variants render correctly
- [ ] States work as expected
- [ ] Keyboard navigation functional
- [ ] Focus states visible
- [ ] Screen reader compatible

### Code Quality
- [ ] TypeScript errors resolved
- [ ] Linting passes
- [ ] No console warnings
- [ ] Props properly typed

### Review
- [ ] Peer review completed
- [ ] Accessibility review done
- [ ] Design review approved
- [ ] Documentation reviewed

---

## Quick Reference

### Token File Path
```
/src/app/tokens-package/tokens/components/{component}.json
```

### CVA Variants File Path
```
/src/app/react-core-package/src/components/{Component}/{component}.variants.ts
```

### Component File Path
```
/src/app/react-core-package/src/components/{Component}/{Component}.v2.tsx
```

### Import Pattern
```typescript
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
```

### CVA Usage Pattern
```typescript
export const variants = cva(
  [/* base classes */],
  {
    variants: {
      variant: { /* ... */ },
      size: { /* ... */ },
    },
    defaultVariants: { /* ... */ },
  }
);
```

### Component Usage Pattern
```typescript
<element
  className={cn(variants({ variant, size }), className)}
  {...props}
/>
```

---

**Need Help?**

- Review: [Phase 2 Documentation](./PHASE2_TOKEN_CVA_INTEGRATION.md)
- Reference: [Button Component](./src/components/Button/) (completed example)
- Ask: UX4G Design System Team

---

**Last Updated:** 2026-04-10  
**Template Version:** 1.0.0
