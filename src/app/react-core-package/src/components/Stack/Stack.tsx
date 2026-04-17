import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { StackProps } from './Stack.types';

const alignMap = { start: 'items-start', center: 'items-center', end: 'items-end', stretch: 'items-stretch' };
const justifyMap = { start: 'justify-start', center: 'justify-center', end: 'justify-end', between: 'justify-between', around: 'justify-around' };

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ children, direction = 'vertical', gap = 16, align = 'stretch', justify = 'start', wrap = false, className, style, ...props }, ref) => {
    const g = typeof gap === 'number' ? `${gap}px` : gap;
    return (
      <div
        ref={ref}
        className={cn(
          'ux4g-stack flex',
          direction === 'horizontal' ? 'flex-row' : 'flex-col',
          alignMap[align],
          justifyMap[justify],
          wrap && 'flex-wrap',
          className
        )}
        style={{ gap: g, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
