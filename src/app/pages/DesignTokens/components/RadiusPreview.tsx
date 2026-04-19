import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import type { TokenEntry } from '../utils/tokenUtils';

interface RadiusPreviewProps {
  token: TokenEntry;
  className?: string;
}

const RadiusPreview = forwardRef<HTMLDivElement, RadiusPreviewProps>(
  ({ token, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('ux4g-radius-preview space-y-2', className)}
      >
        <div
          className="ux4g-radius-preview__box h-20 w-20 border-2 border-primary bg-muted/50"
          style={{ borderRadius: token.value }}
        />
        <p className="ux4g-radius-preview__name text-sm font-bold">
          {token.name}
        </p>
        <p className="ux4g-radius-preview__value font-mono text-xs text-muted-foreground">
          {token.value}
        </p>
        <p className="ux4g-radius-preview__css-var font-mono text-xs text-muted-foreground">
          {token.cssVariable}
        </p>
      </div>
    );
  }
);

RadiusPreview.displayName = 'RadiusPreview';

export { RadiusPreview };
export type { RadiusPreviewProps };
