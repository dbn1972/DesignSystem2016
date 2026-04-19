import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import type { TokenEntry } from '../utils/tokenUtils';

const DEFAULT_SAMPLE = 'The quick brown fox jumps over the lazy dog';

interface TypographySampleProps {
  token: TokenEntry;
  sampleText?: string;
  className?: string;
}

function getStyleForToken(token: TokenEntry): React.CSSProperties {
  const group = token.group?.toLowerCase() ?? '';
  const name = token.name.toLowerCase();

  if (group.includes('family') || name.includes('family')) {
    return { fontFamily: token.value };
  }
  if (group.includes('size') || name.includes('size')) {
    return { fontSize: token.value };
  }
  if (group.includes('weight') || name.includes('weight')) {
    return { fontWeight: token.value };
  }
  if (group.includes('lineheight') || group.includes('line-height') || name.includes('lineheight') || name.includes('line-height')) {
    return { lineHeight: token.value };
  }
  if (group.includes('letterspacing') || group.includes('letter-spacing') || name.includes('letterspacing') || name.includes('letter-spacing')) {
    return { letterSpacing: token.value };
  }

  // Fallback: try to infer from value
  return { fontFamily: token.value };
}

const TypographySample = forwardRef<HTMLDivElement, TypographySampleProps>(
  ({ token, sampleText, className }, ref) => {
    const style = getStyleForToken(token);
    const text = sampleText ?? DEFAULT_SAMPLE;

    return (
      <div
        ref={ref}
        className={cn('ux4g-typography-sample space-y-1', className)}
      >
        <div className="ux4g-typography-sample__info flex items-baseline gap-2">
          <span className="ux4g-typography-sample__name text-sm font-bold">
            {token.name}
          </span>
          <span className="ux4g-typography-sample__value font-mono text-xs text-muted-foreground">
            {token.value}
          </span>
        </div>
        <p
          className="ux4g-typography-sample__preview rounded border bg-muted/30 p-3"
          style={style}
        >
          {text}
        </p>
        <p className="ux4g-typography-sample__css-var font-mono text-xs text-muted-foreground">
          {token.cssVariable}
        </p>
      </div>
    );
  }
);

TypographySample.displayName = 'TypographySample';

export { TypographySample };
export type { TypographySampleProps };
