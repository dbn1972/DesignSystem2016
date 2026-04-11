/**
 * Button Component Variants
 * Token-driven variant system using class-variance-authority (CVA)
 * 
 * @package @ux4g/react-core
 * @maturity Beta 🟡
 * @since v2.0.0
 */

import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Button variants using CVA for systematic variant management
 * 
 * Token mappings:
 * - Base styles: tokens/components/button.json -> base
 * - Variant styles: tokens/components/button.json -> variant
 * - Size styles: tokens/components/button.json -> base.height, base.padding, base.fontSize
 */
export const buttonVariants = cva(
  // Base styles - applied to all button variants
  [
    // Layout & Structure
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2', // token: base.gap.md (8px)
    
    // Typography
    'font-medium', // token: base.fontWeight (500)
    'leading-normal', // token: base.lineHeight (1.5)
    'text-center',
    'whitespace-nowrap',
    
    // Border & Radius
    'rounded', // token: base.borderRadius (4px)
    'border', // token: base.borderWidth (1px)
    
    // Interaction
    'cursor-pointer',
    'select-none',
    'touch-manipulation',
    
    // Transitions - token: base.transition
    'transition-all',
    'duration-150', // token: base.transition.duration (150ms)
    'ease-in-out', // token: base.transition.timing (ease-in-out)
    
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
       * Visual variant of the button
       * Token mapping: tokens/components/button.json -> variant
       */
      variant: {
        // Primary - High emphasis actions (token: variant.primary)
        primary: [
          'bg-[#005196]', // token: variant.primary.background.default (Navy 500)
          'text-white', // token: variant.primary.text.default
          'border-[#005196]', // token: variant.primary.border.default
          'hover:bg-[#004178]', // token: variant.primary.background.hover (Navy 600)
          'hover:border-[#004178]', // token: variant.primary.border.hover
          'active:bg-[#00315a]', // token: variant.primary.background.active (Navy 700)
          'active:border-[#00315a]', // token: variant.primary.border.active
          'focus-visible:ring-[#005196]', // token: variant.primary.focus.ring
          'disabled:bg-[#d4d4d4]', // token: variant.primary.background.disabled (Neutral 300)
          'disabled:border-[#d4d4d4]', // token: variant.primary.border.disabled
          'disabled:text-[#a3a3a3]', // token: variant.primary.text.disabled (Neutral 400)
        ],
        
        // Secondary - Medium emphasis actions (token: variant.secondary)
        secondary: [
          'bg-white', // token: variant.secondary.background.default
          'text-[#005196]', // token: variant.secondary.text.default (Navy 500)
          'border-[#005196]', // token: variant.secondary.border.default
          'hover:bg-[#f5f5f5]', // token: variant.secondary.background.hover (Neutral 100)
          'hover:border-[#004178]', // token: variant.secondary.border.hover (Navy 600)
          'active:bg-[#e5e5e5]', // token: variant.secondary.background.active (Neutral 200)
          'active:border-[#00315a]', // token: variant.secondary.border.active
          'focus-visible:ring-[#005196]', // token: variant.secondary.focus.ring
          'disabled:bg-[#fafafa]', // token: variant.secondary.background.disabled (Neutral 50)
          'disabled:border-[#d4d4d4]', // token: variant.secondary.border.disabled
          'disabled:text-[#a3a3a3]', // token: variant.secondary.text.disabled
        ],
        
        // Tertiary - Low emphasis actions (token: variant.tertiary)
        tertiary: [
          'bg-transparent', // token: variant.tertiary.background.default
          'text-[#005196]', // token: variant.tertiary.text.default (Navy 500)
          'border-transparent', // token: variant.tertiary.border.default
          'hover:bg-[#f5f5f5]', // token: variant.tertiary.background.hover (Neutral 100)
          'active:bg-[#e5e5e5]', // token: variant.tertiary.background.active (Neutral 200)
          'focus-visible:ring-[#005196]', // token: variant.tertiary.focus.ring
          'disabled:bg-transparent', // token: variant.tertiary.background.disabled
          'disabled:text-[#a3a3a3]', // token: variant.tertiary.text.disabled
        ],
        
        // Danger - Destructive actions (token: variant.danger)
        danger: [
          'bg-[#dc2626]', // token: variant.danger.background.default (Error DEFAULT)
          'text-white', // token: variant.danger.text.default
          'border-[#dc2626]', // token: variant.danger.border.default
          'hover:bg-[#991b1b]', // token: variant.danger.background.hover (Error dark)
          'hover:border-[#991b1b]', // token: variant.danger.border.hover
          'active:bg-[#7f1d1d]', // token: variant.danger.background.active
          'active:border-[#7f1d1d]', // token: variant.danger.border.active
          'focus-visible:ring-[#dc2626]', // token: variant.danger.focus.ring
          'disabled:bg-[#d4d4d4]', // token: variant.danger.background.disabled
          'disabled:border-[#d4d4d4]', // token: variant.danger.border.disabled
          'disabled:text-[#a3a3a3]', // token: variant.danger.text.disabled
        ],
        
        // Success - Positive actions (token: variant.success)
        success: [
          'bg-[#008800]', // token: variant.success.background.default (Green 600)
          'text-white', // token: variant.success.text.default
          'border-[#008800]', // token: variant.success.border.default
          'hover:bg-[#006600]', // token: variant.success.background.hover (Green 700)
          'hover:border-[#006600]', // token: variant.success.border.hover
          'active:bg-[#004400]', // token: variant.success.background.active (Green 800)
          'active:border-[#004400]', // token: variant.success.border.active
          'focus-visible:ring-[#008800]', // token: variant.success.focus.ring
          'disabled:bg-[#d4d4d4]', // token: variant.success.background.disabled
          'disabled:border-[#d4d4d4]', // token: variant.success.border.disabled
          'disabled:text-[#a3a3a3]', // token: variant.success.text.disabled
        ],
      },
      
      /**
       * Size variant of the button
       * Token mapping: tokens/components/button.json -> base.height, base.padding, base.fontSize
       */
      size: {
        // Small - Compact spaces (token: base.height.sm, base.padding.sm, base.fontSize.sm)
        sm: [
          'h-8', // token: base.height.sm (32px)
          'px-3', // token: base.padding.horizontal.sm (12px)
          'py-1.5', // token: base.padding.vertical.sm (6px)
          'text-sm', // token: base.fontSize.sm (14px)
          'gap-1.5', // token: base.gap.sm (6px)
          'min-w-[64px]', // Proportional to base.minWidth
        ],
        
        // Medium - Default size (token: base.height.md, base.padding.md, base.fontSize.md)
        md: [
          'h-10', // token: base.height.md (40px)
          'px-4', // token: base.padding.horizontal.md (16px)
          'py-2.5', // token: base.padding.vertical.md (10px)
          'text-base', // token: base.fontSize.md (16px)
          'gap-2', // token: base.gap.md (8px)
          'min-w-[80px]', // token: base.minWidth (80px)
        ],
        
        // Large - Emphasis (token: base.height.lg, base.padding.lg, base.fontSize.lg)
        lg: [
          'h-12', // token: base.height.lg (48px)
          'px-6', // token: base.padding.horizontal.lg (24px)
          'py-3', // token: base.padding.vertical.lg (12px)
          'text-lg', // token: base.fontSize.lg (18px)
          'gap-2.5', // token: base.gap.lg (10px)
          'min-w-[96px]', // Proportional to base.minWidth
        ],
      },
      
      /**
       * Full width option
       */
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      
      /**
       * Loading state
       */
      loading: {
        true: 'relative pointer-events-none',
        false: '',
      },
    },
    
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      loading: false,
    },
  }
);

/**
 * TypeScript type for button variant props
 * Automatically inferred from CVA configuration
 */
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
