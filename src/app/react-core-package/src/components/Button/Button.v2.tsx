/**
 * Button Component (Token-Driven with CVA)
 * Primary interactive element for user actions
 *
 * @package @ux4g/react-core
 * @maturity Beta 🟡
 * @tier Core
 * @since v1.0.0
 * @updated v2.0.0 - Token-driven with CVA
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Submit Application
 * </Button>
 * ```
 * 
 * @example With icons
 * ```tsx
 * <Button 
 *   variant="secondary" 
 *   size="lg"
 *   iconBefore={<SaveIcon />}
 * >
 *   Save Draft
 * </Button>
 * ```
 * 
 * @example Loading state
 * ```tsx
 * <Button 
 *   variant="primary" 
 *   loading={isSubmitting}
 *   loadingText="Submitting..."
 * >
 *   Submit
 * </Button>
 * ```
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { buttonVariants, type ButtonVariantProps } from './button.variants';
import { ButtonProps } from './Button.types';

/**
 * LoadingSpinner component for button loading state
 * Token mapping: tokens/components/button.json -> loading.spinner
 */
const LoadingSpinner = ({ variant }: { variant: ButtonVariantProps['variant'] }) => {
  // Determine spinner color based on button variant (token-driven)
  const spinnerColor = variant === 'primary' || variant === 'danger' || variant === 'success'
    ? 'border-white' // token: loading.spinner.primary
    : 'border-[#005196]'; // token: loading.spinner.secondary (Navy 500)
  
  return (
    <svg
      className={cn(
        'animate-spin h-4 w-4',
        spinnerColor
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

/**
 * Button Component with Token-Driven Styling via CVA
 * 
 * All visual styles are derived from design tokens defined in:
 * `/src/app/tokens-package/tokens/components/button.json`
 * 
 * Accessibility Features (WCAG 2.1 AA):
 * - Minimum 44px touch target (WCAG 2.5.5) via tokens
 * - 2px focus ring with offset (WCAG 2.4.7)
 * - aria-disabled for disabled state
 * - aria-busy for loading state
 * - Screen reader announcements for loading
 * - Semantic button element (keyboard accessible)
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      loadingText = 'Loading...',
      fullWidth = false,
      iconBefore,
      iconAfter,
      type = 'button',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    
    // Show loading text when loading, otherwise show children
    const buttonContent = loading ? loadingText : children;
    
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({ variant, size, fullWidth, loading }),
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        aria-label={loading ? loadingText : ariaLabel}
        {...props}
      >
        {/* Loading Spinner - Appears before content when loading */}
        {loading && <LoadingSpinner variant={variant} />}
        
        {/* Icon Before - Only shown when not loading */}
        {!loading && iconBefore && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {iconBefore}
          </span>
        )}
        
        {/* Button Text Content */}
        <span className="inline-flex items-center">
          {buttonContent}
        </span>
        
        {/* Icon After - Only shown when not loading */}
        {!loading && iconAfter && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {iconAfter}
          </span>
        )}
        
        {/* Screen Reader Only - Loading Announcement */}
        {loading && (
          <span className="sr-only" role="status">
            {loadingText}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
