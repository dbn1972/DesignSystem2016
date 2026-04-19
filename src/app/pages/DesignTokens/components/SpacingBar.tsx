import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import type { TokenEntry } from '../utils/tokenUtils';
import { toPixels } from '../utils/tokenUtils';

interface SpacingBarProps {
  token: TokenEntry;
  className?: string;
}

const SpacingBar = forwardRef<HTMLDivElement, SpacingBarProps>(
  ({ token, className }, ref) => {
    const pxValue = toPixels(token.value);

    return (
      <div
        ref={ref}
        className={cn('ux4g-spacing-bar space-y-1', className)}
      >
        <div className="ux4g-spacing-bar__info flex items-baseline gap-2">
          <span className="ux4g-spacing-bar__name text-sm font-bold">
            {token.name}
          </span>
          <span className="ux4g-spacing-bar__value font-mono text-xs text-muted-foreground">
            {token.value}
            {pxValue && pxValue !== token.value && ` (${pxValue})`}
          </span>
        </div>
        <div className="ux4g-spacing-bar__track h-3 w-full rounded bg-muted">
          <div
            className="ux4g-spacing-bar__fill h-full rounded bg-primary"
            style={{ width: token.value, maxWidth: '100%' }}
          />
        </div>
        <p className="ux4g-spacing-bar__css-var font-mono text-xs text-muted-foreground">
          {token.cssVariable}
        </p>
      </div>
    );
  }
);

SpacingBar.displayName = 'SpacingBar';

export { SpacingBar };
export type { SpacingBarProps };
