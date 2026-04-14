/**
 * Badge Component
 * Small label for displaying status, counts, or tags
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { BadgeProps } from './Badge.types';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      className,
      variant = 'neutral',
      size = 'md',
      dot = false,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'ux4g-badge',
          `ux4g-badge-${variant}`,
          `ux4g-badge-${size}`,
          dot && 'ux4g-badge-dot',
          className
        )}
        {...props}
      >
        {dot && <span className="ux4g-badge-dot-indicator" />}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
