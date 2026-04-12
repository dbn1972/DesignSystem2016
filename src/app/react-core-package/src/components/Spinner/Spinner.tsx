/**
 * Spinner Component
 * Loading spinners
 *
 * @example
 * ```tsx
 * <Spinner size="lg" label="Loading..." />
 * ```
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { SpinnerProps } from './Spinner.types';

export function Spinner({
  size = 'md',
  variant = 'primary',
  label,
  centered = false,
  className,
  ...props
}: SpinnerProps) {
  const spinner = (
    <div
      role="status"
      aria-live="polite"
      aria-label={label || 'Loading'}
      className={cn(
        'ux4g-spinner',
        `ux4g-spinner-${size}`,
        `ux4g-spinner-${variant}`,
        className
      )}
      {...props}
    >
      <span className="ux4g-visually-hidden">{label || 'Loading'}</span>
    </div>
  );

  if (centered) {
    return (
      <div className="ux4g-spinner-container">
        {spinner}
        {label && <div className="ux4g-spinner-label">{label}</div>}
      </div>
    );
  }

  return (
    <>
      {spinner}
      {label && <span className="ux4g-spinner-label">{label}</span>}
    </>
  );
}

Spinner.displayName = 'Spinner';
