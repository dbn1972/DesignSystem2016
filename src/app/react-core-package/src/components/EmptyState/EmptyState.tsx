/**
 * EmptyState Component
 * Placeholder for empty lists, tables, search results, or data views.
 *
 * @example
 * ```tsx
 * <EmptyState
 *   icon={<SearchX size={48} />}
 *   title="No results found"
 *   description="Try adjusting your search or filters."
 *   action={<Button>Clear filters</Button>}
 * />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { EmptyStateProps } from './EmptyState.types';

const sizeClasses = {
  sm: { wrapper: 'py-8 px-4', icon: 'mb-3', title: 'text-base', desc: 'text-xs', gap: 'mt-4' },
  md: { wrapper: 'py-12 px-6', icon: 'mb-4', title: 'text-lg', desc: 'text-sm', gap: 'mt-6' },
  lg: { wrapper: 'py-16 px-8', icon: 'mb-5', title: 'text-xl', desc: 'text-base', gap: 'mt-8' },
};

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      title,
      description,
      icon,
      action,
      secondaryAction,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const s = sizeClasses[size];

    return (
      <div
        ref={ref}
        role="status"
        className={cn(
          'ux4g-empty-state',
          'flex flex-col items-center justify-center text-center',
          s.wrapper,
          className
        )}
        {...props}
      >
        {icon && (
          <div className={cn('ux4g-empty-state-icon text-muted-foreground', s.icon)}>
            {icon}
          </div>
        )}

        <h3 className={cn('ux4g-empty-state-title font-semibold text-foreground', s.title)}>
          {title}
        </h3>

        {description && (
          <p className={cn('ux4g-empty-state-description text-muted-foreground mt-2 max-w-md', s.desc)}>
            {description}
          </p>
        )}

        {(action || secondaryAction) && (
          <div className={cn('ux4g-empty-state-actions flex items-center gap-3', s.gap)}>
            {action}
            {secondaryAction}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';
