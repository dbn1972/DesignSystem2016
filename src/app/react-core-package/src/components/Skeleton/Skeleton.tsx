/**
 * Skeleton Component
 * Accessible loading placeholder with pulse animation.
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" width="60%" />
 * <Skeleton variant="circular" width={48} height={48} />
 * <Skeleton variant="rectangular" height={200} />
 * <Skeleton variant="text" lines={3} />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SkeletonProps } from './Skeleton.types';

const variantClasses: Record<string, string> = {
  text: 'rounded',
  circular: 'rounded-full',
  rectangular: 'rounded-none',
  rounded: 'rounded-lg',
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      width,
      height,
      lines,
      animate = true,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const resolvedWidth = typeof width === 'number' ? `${width}px` : width;
    const resolvedHeight = typeof height === 'number' ? `${height}px` : height;
    const defaultHeight = resolvedHeight || (variant === 'text' ? '1em' : undefined);

    // Multi-line text skeleton
    if (variant === 'text' && lines && lines > 1) {
      return (
        <div
          ref={ref}
          role="status"
          aria-label="Loading"
          aria-busy="true"
          className={cn('ux4g-skeleton-group space-y-2', className)}
          {...props}
        >
          {Array.from({ length: lines }, (_, i) => (
            <div
              key={i}
              className={cn(
                'ux4g-skeleton bg-muted',
                animate && 'animate-pulse',
                variantClasses.text
              )}
              style={{
                width: i === lines - 1 ? '75%' : resolvedWidth || '100%',
                height: defaultHeight,
              }}
            />
          ))}
          <span className="sr-only">Loading content</span>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        aria-busy="true"
        className={cn(
          'ux4g-skeleton bg-muted',
          animate && 'animate-pulse',
          variantClasses[variant],
          className
        )}
        style={{
          width: resolvedWidth || (variant === 'circular' ? resolvedHeight : '100%'),
          height: defaultHeight,
          ...style,
        }}
        {...props}
      >
        <span className="sr-only">Loading</span>
      </div>
    );
  }
);

Skeleton.displayName = 'Skeleton';
