import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { DividerProps } from './Divider.types';

const spacingMap = { sm: 'my-2', md: 'my-4', lg: 'my-8' };
const vSpacingMap = { sm: 'mx-2', md: 'mx-4', lg: 'mx-8' };

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', label, spacing = 'md', className, ...props }, ref) => {
    if (orientation === 'vertical') {
      return (
        <hr
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={cn('ux4g-divider inline-block border-l border-border h-full min-h-[1em]', vSpacingMap[spacing], className)}
          {...props}
        />
      );
    }

    if (label) {
      return (
        <div role="separator" className={cn('ux4g-divider flex items-center gap-4', spacingMap[spacing], className)}>
          <hr ref={ref} className="flex-1 border-border" {...props} />
          <span className="text-sm text-muted-foreground shrink-0">{label}</span>
          <hr className="flex-1 border-border" />
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn('ux4g-divider border-border', spacingMap[spacing], className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
