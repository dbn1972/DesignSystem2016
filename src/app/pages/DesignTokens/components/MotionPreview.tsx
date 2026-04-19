import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import type { TokenEntry } from '../utils/tokenUtils';

interface MotionPreviewProps {
  token: TokenEntry;
  className?: string;
}

const MotionPreview = forwardRef<HTMLDivElement, MotionPreviewProps>(
  ({ token, className }, ref) => {
    const isEasing = token.group?.toLowerCase().includes('easing') ||
      token.name.toLowerCase().includes('easing') ||
      token.value.includes('cubic-bezier');

    return (
      <div
        ref={ref}
        className={cn('ux4g-motion-preview space-y-2', className)}
      >
        <div className="ux4g-motion-preview__track relative h-10 w-full overflow-hidden rounded bg-muted">
          <div
            className="ux4g-motion-preview__box absolute left-0 top-1 h-8 w-8 rounded bg-primary transition-transform hover:translate-x-[calc(100%-2rem)]"
            style={{
              transitionDuration: isEasing ? '500ms' : token.value,
              transitionTimingFunction: isEasing ? token.value : undefined,
            }}
          />
        </div>
        <div className="ux4g-motion-preview__info">
          <p className="ux4g-motion-preview__name text-sm font-bold">
            {token.name}
          </p>
          {isEasing && (
            <span className="ux4g-motion-preview__easing-label mt-0.5 inline-block rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
              easing
            </span>
          )}
          <p className="ux4g-motion-preview__value mt-0.5 font-mono text-xs text-muted-foreground">
            {token.value}
          </p>
          <p className="ux4g-motion-preview__css-var font-mono text-xs text-muted-foreground">
            {token.cssVariable}
          </p>
        </div>
      </div>
    );
  }
);

MotionPreview.displayName = 'MotionPreview';

export { MotionPreview };
export type { MotionPreviewProps };
