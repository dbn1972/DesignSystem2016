import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { FlexProps } from './Flex.types';

const dirMap = { row: 'flex-row', 'row-reverse': 'flex-row-reverse', column: 'flex-col', 'column-reverse': 'flex-col-reverse' };
const alignMap = { start: 'items-start', center: 'items-center', end: 'items-end', stretch: 'items-stretch', baseline: 'items-baseline' };
const justifyMap = { start: 'justify-start', center: 'justify-center', end: 'justify-end', between: 'justify-between', around: 'justify-around', evenly: 'justify-evenly' };
const wrapMap = { nowrap: 'flex-nowrap', wrap: 'flex-wrap', 'wrap-reverse': 'flex-wrap-reverse' };

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, direction = 'row', align = 'stretch', justify = 'start', wrap = 'nowrap', gap, inline = false, className, style, ...props }, ref) => {
    const g = gap != null ? (typeof gap === 'number' ? `${gap}px` : gap) : undefined;
    return (
      <div
        ref={ref}
        className={cn('ux4g-flex', inline ? 'inline-flex' : 'flex', dirMap[direction], alignMap[align], justifyMap[justify], wrapMap[wrap], className)}
        style={{ gap: g, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';
