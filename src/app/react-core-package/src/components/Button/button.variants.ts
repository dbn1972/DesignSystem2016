/**
 * Button Component Variants
 * Token-driven variant system using class-variance-authority (CVA)
 *
 * All colors now use CSS custom properties so dark mode works automatically.
 * Hardcoded hex values are kept only as fallbacks inside var().
 *
 * @package @ux4g/react-core
 * @maturity Beta 🟡
 * @since v2.0.0
 */

import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    // Layout
    'inline-flex', 'items-center', 'justify-center', 'gap-2',
    // Typography
    'font-medium', 'leading-normal', 'text-center', 'whitespace-nowrap',
    // Border & Radius
    'rounded', 'border',
    // Interaction
    'cursor-pointer', 'select-none', 'touch-manipulation',
    // Transitions — respects prefers-reduced-motion
    'transition-all', 'duration-150', 'ease-in-out',
    'motion-reduce:transition-none',
    // Focus (WCAG 2.4.7)
    'focus:outline-none',
    'focus-visible:ring-2', 'focus-visible:ring-offset-2',
    // Disabled
    'disabled:cursor-not-allowed', 'disabled:opacity-60',
    // Min touch target (WCAG 2.5.5)
    'min-h-[44px]',
  ],
  {
    variants: {
      variant: {
        // Primary — high emphasis
        primary: [
          'bg-primary', 'text-primary-foreground', 'border-primary',
          'hover:bg-primary/90', 'hover:border-primary/90',
          'active:bg-primary/80', 'active:border-primary/80',
          'focus-visible:ring-primary',
          'disabled:bg-muted', 'disabled:border-muted', 'disabled:text-muted-foreground',
        ],
        // Secondary — medium emphasis
        secondary: [
          'bg-card', 'text-primary', 'border-primary',
          'hover:bg-muted', 'hover:border-primary/80',
          'active:bg-muted/80',
          'focus-visible:ring-primary',
          'disabled:bg-muted/50', 'disabled:border-muted', 'disabled:text-muted-foreground',
        ],
        // Tertiary — low emphasis with border
        tertiary: [
          'bg-transparent', 'text-primary', 'border-transparent',
          'hover:bg-muted',
          'active:bg-muted/80',
          'focus-visible:ring-primary',
          'disabled:text-muted-foreground',
        ],
        // Ghost — transparent, no border (canonical contract)
        ghost: [
          'bg-transparent', 'text-foreground', 'border-transparent',
          'hover:bg-accent', 'hover:text-accent-foreground',
          'active:bg-accent/80',
          'focus-visible:ring-ring',
          'disabled:text-muted-foreground',
        ],
        // Destructive — danger actions (canonical name)
        destructive: [
          'bg-destructive', 'text-destructive-foreground', 'border-destructive',
          'hover:bg-destructive/90', 'hover:border-destructive/90',
          'active:bg-destructive/80',
          'focus-visible:ring-destructive',
          'disabled:bg-muted', 'disabled:border-muted', 'disabled:text-muted-foreground',
        ],
        // Danger — legacy alias, same as destructive
        danger: [
          'bg-destructive', 'text-destructive-foreground', 'border-destructive',
          'hover:bg-destructive/90', 'hover:border-destructive/90',
          'active:bg-destructive/80',
          'focus-visible:ring-destructive',
          'disabled:bg-muted', 'disabled:border-muted', 'disabled:text-muted-foreground',
        ],
        // Success — positive actions
        success: [
          'bg-[var(--ux4g-color-feedback-success,#008800)]',
          'text-white',
          'border-[var(--ux4g-color-feedback-success,#008800)]',
          'hover:opacity-90',
          'active:opacity-80',
          'focus-visible:ring-[var(--ux4g-color-feedback-success,#008800)]',
          'disabled:bg-muted', 'disabled:border-muted', 'disabled:text-muted-foreground',
        ],
      },
      size: {
        sm: ['h-8', 'px-3', 'py-1.5', 'text-sm', 'gap-1.5', 'min-w-[64px]'],
        md: ['h-10', 'px-4', 'py-2.5', 'text-base', 'gap-2', 'min-w-[80px]'],
        lg: ['h-12', 'px-6', 'py-3', 'text-lg', 'gap-2.5', 'min-w-[96px]'],
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
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

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
