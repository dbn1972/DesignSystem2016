import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { AspectRatioProps } from './AspectRatio.types';

function parseRatio(ratio: number | string): number {
  if (typeof ratio === 'number') return ratio;
  const parts = ratio.split('/').map(Number);
  return parts.length === 2 && parts[1] ? parts[0] / parts[1] : 1;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ children, ratio = 1, className, style, ...props }, ref) => {
    const r = parseRatio(ratio);
    return (
      <div
        ref={ref}
        className={cn('ux4g-aspect-ratio relative overflow-hidden', className)}
        style={{ aspectRatio: String(r), ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';
