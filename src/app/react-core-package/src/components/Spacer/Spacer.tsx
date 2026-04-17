import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SpacerProps } from './Spacer.types';

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ size = 16, axis = 'vertical', className, style, ...props }, ref) => {
    const s = typeof size === 'number' ? `${size}px` : size;
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn('ux4g-spacer', className)}
        style={{
          width: axis === 'horizontal' ? s : undefined,
          minWidth: axis === 'horizontal' ? s : undefined,
          height: axis === 'vertical' ? s : undefined,
          minHeight: axis === 'vertical' ? s : undefined,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer';
