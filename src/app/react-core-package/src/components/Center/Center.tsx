import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { CenterProps } from './Center.types';

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ children, minHeight, inline = false, className, style, ...props }, ref) => {
    const h = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;
    return (
      <div
        ref={ref}
        className={cn('ux4g-center flex items-center justify-center', inline && 'inline-flex', className)}
        style={{ minHeight: h, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Center.displayName = 'Center';
