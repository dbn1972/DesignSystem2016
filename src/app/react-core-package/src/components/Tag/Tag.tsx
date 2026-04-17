/**
 * Tag Component
 * Compact label for categorization, filtering, and status display.
 *
 * @example
 * ```tsx
 * <Tag label="Active" variant="success" />
 * <Tag label="React" removable onRemove={() => {}} />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { TagProps } from './Tag.types';

const variantClasses = {
  neutral: 'bg-muted text-foreground border-border',
  info: 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800',
  success: 'bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-800',
  warning: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800',
  error: 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-200 dark:border-red-800',
};

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5 gap-1',
  md: 'text-sm px-2.5 py-1 gap-1.5',
  lg: 'text-sm px-3 py-1.5 gap-2',
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      label,
      variant = 'neutral',
      size = 'md',
      icon,
      removable = false,
      onRemove,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'ux4g-tag',
          'inline-flex items-center rounded-full border font-medium',
          variantClasses[variant],
          sizeClasses[size],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {icon && <span className="ux4g-tag-icon shrink-0" aria-hidden="true">{icon}</span>}
        <span className="ux4g-tag-label">{label}</span>
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            disabled={disabled}
            aria-label={`Remove ${label}`}
            className={cn(
              'ux4g-tag-remove',
              'inline-flex items-center justify-center rounded-full shrink-0',
              'hover:bg-black/10 dark:hover:bg-white/10 transition-colors',
              size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4',
              disabled && 'pointer-events-none'
            )}
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';
