import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import { CopyButton } from './CopyButton';
import type { TokenEntry } from '../utils/tokenUtils';

interface TokenCardProps {
  token: TokenEntry;
  children?: React.ReactNode;
  className?: string;
}

const TokenCard = forwardRef<HTMLDivElement, TokenCardProps>(
  ({ token, children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ux4g-token-card rounded-lg border bg-card p-4 text-card-foreground',
          className
        )}
      >
        {children && (
          <div className="ux4g-token-card__preview mb-3">{children}</div>
        )}
        <p className="ux4g-token-card__name text-sm font-bold">{token.name}</p>
        <p className="ux4g-token-card__css-var mt-1 font-mono text-xs text-muted-foreground">
          {token.cssVariable}
        </p>
        <p className="ux4g-token-card__value mt-1 text-xs text-muted-foreground">
          {token.value}
        </p>
        <div className="ux4g-token-card__actions mt-2 flex items-center gap-1">
          <CopyButton
            text={token.cssVariable}
            label={`Copy CSS variable ${token.cssVariable}`}
          />
          <CopyButton
            text={token.value}
            label={`Copy value ${token.value}`}
          />
        </div>
      </div>
    );
  }
);

TokenCard.displayName = 'TokenCard';

export { TokenCard };
export type { TokenCardProps };
