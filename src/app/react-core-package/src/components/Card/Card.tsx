/**
 * Card Component
 * Container component for grouping related content
 *
 * @example
 * ```tsx
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { CardProps } from './Card.types';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = 'elevated',
      clickable = false,
      padding = 'md',
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ux4g-card',
          `ux4g-card-${variant}`,
          `ux4g-card-padding-${padding}`,
          clickable && 'ux4g-card-clickable',
          className
        )}
        onClick={onClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
