/**
 * ButtonGroup Component
 * Groups related buttons with consistent spacing and optional connected styling.
 *
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button variant="primary">Save</Button>
 *   <Button variant="secondary">Cancel</Button>
 * </ButtonGroup>
 * ```
 */

import { forwardRef, ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface ButtonGroupProps {
  children: ReactNode;
  /** Orientation of the group */
  orientation?: 'horizontal' | 'vertical';
  /** Gap between buttons */
  gap?: 'none' | 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

const gapClasses = {
  none: 'gap-0',
  sm: 'gap-1',
  md: 'gap-2',
  lg: 'gap-4',
};

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, orientation = 'horizontal', gap = 'md', className }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(
          'inline-flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
          gapClasses[gap],
          gap === 'none' && orientation === 'horizontal' && '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)]:-ml-px',
          gap === 'none' && orientation === 'vertical' && '[&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)]:-mt-px',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';
