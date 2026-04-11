/**
 * Button Component
 * Primary interactive element for user actions
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Submit Application
 * </Button>
 * ```
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ButtonProps } from './Button.types';

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

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'ux4g-button',
          `ux4g-button-${variant}`,
          `ux4g-button-${size}`,
          fullWidth && 'ux4g-w-full',
          loading && 'ux4g-button-loading',
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        aria-label={loading ? loadingText : ariaLabel}
        {...props}
      >
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
      </button>
    );
  }
);

Button.displayName = 'Button';
