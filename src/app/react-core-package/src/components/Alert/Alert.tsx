/**
 * Alert Component
 * Display important feedback messages to users
 *
 * @example
 * ```tsx
 * <Alert variant="success" title="Success" description="Your application was submitted." />
 * <Alert variant="error" onClose={handleClose}>
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Failed to submit application.</AlertDescription>
 * </Alert>
 * ```
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { AlertProps } from './Alert.types';

const defaultIcons = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕'
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      className,
      variant = 'info',
      title,
      description,
      icon,
      showIcon = true,
      onClose,
      closeLabel = 'Close alert',
      ...props
    },
    ref
  ) => {
    const iconContent = icon ?? defaultIcons[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'ux4g-alert',
          `ux4g-alert-${variant}`,
          className
        )}
        {...props}
      >
        {showIcon && iconContent && (
          <div className="ux4g-alert-icon" aria-hidden="true">
            {iconContent}
          </div>
        )}

        <div className="ux4g-alert-content">
          {title && (
            <div className="ux4g-alert-title">
              {title}
            </div>
          )}

          {description && (
            <div className="ux4g-alert-description">
              {description}
            </div>
          )}

          {children}
        </div>

        {onClose && (
          <button
            type="button"
            className="ux4g-alert-close"
            onClick={onClose}
            aria-label={closeLabel}
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
