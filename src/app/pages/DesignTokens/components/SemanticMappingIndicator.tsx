import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';

interface SemanticMappingIndicatorProps {
  reference: string;
  className?: string;
}

const SemanticMappingIndicator = forwardRef<HTMLSpanElement, SemanticMappingIndicatorProps>(
  ({ reference, className }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'ux4g-semantic-indicator text-xs text-muted-foreground',
          className
        )}
      >
        → {reference}
      </span>
    );
  }
);

SemanticMappingIndicator.displayName = 'SemanticMappingIndicator';

export { SemanticMappingIndicator };
export type { SemanticMappingIndicatorProps };
