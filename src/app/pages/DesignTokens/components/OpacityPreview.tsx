import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import type { TokenEntry } from '../utils/tokenUtils';

interface OpacityPreviewProps {
  token: TokenEntry;
  className?: string;
}

const OpacityPreview = forwardRef<HTMLDivElement, OpacityPreviewProps>(
  ({ token, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('ux4g-opacity-preview space-y-2', className)}
      >
        <div
          className="ux4g-opacity-preview__checkerboard relative h-16 w-full overflow-hidden rounded-md"
          style={{
            backgroundImage:
              'repeating-conic-gradient(#d4d4d4 0% 25%, transparent 0% 50%)',
            backgroundSize: '16px 16px',
          }}
        >
          <div
            className="ux4g-opacity-preview__fill absolute inset-0 bg-primary"
            style={{ opacity: token.value }}
          />
        </div>
        <p className="ux4g-opacity-preview__name text-sm font-bold">
          {token.name}
        </p>
        <p className="ux4g-opacity-preview__value font-mono text-xs text-muted-foreground">
          {token.value}
        </p>
        <p className="ux4g-opacity-preview__css-var font-mono text-xs text-muted-foreground">
          {token.cssVariable}
        </p>
      </div>
    );
  }
);

OpacityPreview.displayName = 'OpacityPreview';

export { OpacityPreview };
export type { OpacityPreviewProps };
