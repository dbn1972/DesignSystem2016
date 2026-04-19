import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import type { TokenEntry } from '../utils/tokenUtils';

interface ShadowPreviewProps {
  token: TokenEntry;
  className?: string;
}

const ShadowPreview = forwardRef<HTMLDivElement, ShadowPreviewProps>(
  ({ token, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('ux4g-shadow-preview space-y-2', className)}
      >
        <div
          className="ux4g-shadow-preview__box h-20 w-full rounded-lg bg-card"
          style={{ boxShadow: token.value }}
        />
        <p className="ux4g-shadow-preview__name text-sm font-bold">
          {token.name}
        </p>
        <p className="ux4g-shadow-preview__value font-mono text-xs text-muted-foreground">
          {token.value}
        </p>
        <p className="ux4g-shadow-preview__css-var font-mono text-xs text-muted-foreground">
          {token.cssVariable}
        </p>
      </div>
    );
  }
);

ShadowPreview.displayName = 'ShadowPreview';

export { ShadowPreview };
export type { ShadowPreviewProps };
