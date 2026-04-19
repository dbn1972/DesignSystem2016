import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/app/components/ui/utils';

interface SearchFilterProps {
  /** Current search value (controlled) */
  value: string;
  /** Called with debounced search value */
  onChange: (value: string) => void;
  /** Number of tokens matching the current filter */
  resultCount: number;
  /** Total number of tokens */
  totalCount: number;
  className?: string;
}

const SearchFilter = forwardRef<HTMLInputElement, SearchFilterProps>(
  ({ value, onChange, resultCount, totalCount, className }, ref) => {
    const [internalValue, setInternalValue] = useState(value);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Sync internal state when controlled value changes externally
    useEffect(() => {
      setInternalValue(value);
    }, [value]);

    // Debounce onChange calls
    useEffect(() => {
      timerRef.current = setTimeout(() => {
        onChange(internalValue);
      }, 150);

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, [internalValue, onChange]);

    const isFiltering = value.trim().length > 0;
    const liveMessage = isFiltering
      ? resultCount === 0
        ? 'No tokens found'
        : `${resultCount} tokens found`
      : '';

    return (
      <div className={cn('ux4g-search-filter w-full', className)}>
        <div className="ux4g-search-filter__input-wrapper relative">
          <Search className="ux4g-search-filter__icon pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            ref={ref}
            type="search"
            aria-label="Search design tokens"
            value={internalValue}
            onChange={(e) => setInternalValue(e.target.value)}
            placeholder="Search tokens by name, variable, or value…"
            className="ux4g-search-filter__input w-full rounded-lg border bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div
          aria-live="polite"
          className="ux4g-search-filter__live-region sr-only"
        >
          {liveMessage}
        </div>
      </div>
    );
  }
);

SearchFilter.displayName = 'SearchFilter';

export { SearchFilter };
export type { SearchFilterProps };
