/**
 * Button Component
 * Primary interactive element for user actions.
 *
 * Supports polymorphic rendering via the `as` prop — pass `"a"` to render
 * as a link, or a React Router `Link` component for client-side navigation.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Submit Application
 * </Button>
 *
 * <Button as="a" href="/next" variant="secondary">
 *   Continue
 * </Button>
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ButtonProps, ButtonVariant } from './Button.types';

/**
 * Normalise legacy variant names to canonical ones.
 * `danger` → `destructive` (canonical contract alignment).
 */
function normaliseVariant(v: ButtonVariant): string {
  if (v === 'danger') return 'destructive';
  return v;
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
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
      as,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const canonicalVariant = normaliseVariant(variant);

    const classes = cn(
      'ux4g-button',
      `ux4g-button-${canonicalVariant}`,
      `ux4g-button-${size}`,
      fullWidth && 'ux4g-w-full',
      loading && 'ux4g-button-loading',
      className
    );

    const inner = (
      <>
        {loading && (
          <span className="ux4g-spinner ux4g-spinner-sm ux4g-mr-2" aria-hidden="true" />
        )}
        {!loading && iconBefore && (
          <span className="ux4g-button-icon-before ux4g-mr-2" aria-hidden="true">
            {iconBefore}
          </span>
        )}
        <span className="ux4g-button-text">{loading ? loadingText : children}</span>
        {!loading && iconAfter && (
          <span className="ux4g-button-icon-after ux4g-ml-2" aria-hidden="true">
            {iconAfter}
          </span>
        )}
      </>
    );

    // Polymorphic: render as the element specified by `as`
    const Component = as || 'button';
    const isButton = !as || as === 'button';

    return (
      <Component
        ref={ref}
        {...(isButton ? { type, disabled: isDisabled } : {})}
        className={classes}
        aria-disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-label={loading ? loadingText : ariaLabel}
        {...props}
      >
        {inner}
      </Component>
    );
  }
);

Button.displayName = 'Button';
