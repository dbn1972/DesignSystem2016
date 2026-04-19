import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import type { TokenEntry } from '../utils/tokenUtils';

interface ColorSwatchProps {
  token: TokenEntry;
  className?: string;
}

const ColorSwatch = forwardRef<HTMLDivElement, ColorSwatchProps>(
  ({ token, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('ux4g-color-swatch flex items-start gap-3', className)}
      >
        <div
          className="ux4g-color-swatch__preview h-12 w-12 shrink-0 rounded-md border"
          style={{ backgroundColor: token.value }}
          aria-hidden="true"
        />
        <div className="ux4g-color-swatch__info min-w-0">
          <p className="ux4g-color-swatch__name text-sm font-bold">
            {token.name}
          </p>
          <p className="ux4g-color-swatch__hex mt-0.5 font-mono text-xs text-muted-foreground">
            {token.value}
          </p>
          <p className="ux4g-color-swatch__css-var mt-0.5 font-mono text-xs text-muted-foreground">
            {token.cssVariable}
          </p>
          {token.a11y && (
            <span className="ux4g-color-swatch__a11y mt-1 inline-block rounded bg-green-100 px-1.5 py-0.5 text-xs font-semibold text-green-800">
              {token.a11y}
            </span>
          )}
        </div>
      </div>
    );
  }
);

ColorSwatch.displayName = 'ColorSwatch';

export { ColorSwatch };
export type { ColorSwatchProps };
