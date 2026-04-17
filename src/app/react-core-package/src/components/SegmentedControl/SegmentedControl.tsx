import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SegmentedControlProps } from './SegmentedControl.types';

const sizeMap = { sm: 'text-xs px-3 py-1.5', md: 'text-sm px-4 py-2', lg: 'text-base px-5 py-2.5' };

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ options, value, onChange, size = 'md', disabled = false, 'aria-label': ariaLabel = 'Options', className, ...props }, ref) => (
    <div
      ref={ref}
      role="radiogroup"
      aria-label={ariaLabel}
      className={cn('ux4g-segmented-control inline-flex rounded-lg border border-border bg-muted/50 p-1', disabled && 'opacity-50', className)}
      {...props}
    >
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={disabled || opt.disabled}
            onClick={() => onChange?.(opt.value)}
            className={cn(
              'ux4g-segmented-control-option rounded-md font-medium transition-colors',
              sizeMap[size],
              selected ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
              (disabled || opt.disabled) && 'cursor-not-allowed'
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  )
);

SegmentedControl.displayName = 'SegmentedControl';
