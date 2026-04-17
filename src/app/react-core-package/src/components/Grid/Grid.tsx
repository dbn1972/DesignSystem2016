import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { GridProps } from './Grid.types';

const alignMap = { start: 'items-start', center: 'items-center', end: 'items-end', stretch: 'items-stretch' };

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, columns = 12, gap, rowGap, columnGap, align = 'stretch', className, style, ...props }, ref) => {
    const toCss = (v: number | string | undefined) => v == null ? undefined : typeof v === 'number' ? `${v}px` : v;
    const cols = typeof columns === 'number' ? `repeat(${columns}, minmax(0, 1fr))` : columns;
    return (
      <div
        ref={ref}
        className={cn('ux4g-grid grid', alignMap[align], className)}
        style={{ gridTemplateColumns: cols, gap: toCss(gap), rowGap: toCss(rowGap), columnGap: toCss(columnGap), ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';
