/**
 * SearchBar Component
 * Search input with icon
 *
 * @example
 * ```tsx
 * <SearchBar
 *   placeholder="Search applications..."
 *   onSearch={(value) => handleSearch(value)}
 * />
 * ```
 */

import { useState, forwardRef, ChangeEvent, KeyboardEvent } from 'react';
import { cn } from '../../utils/cn';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      size = 'md',
      disabled = false,
      error = false,
      showClearButton = true,
      loading = false,
      onSearch,
      onClear,
      onChange,
      value: controlledValue,
      defaultValue = '',
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);

    const value = controlledValue ?? internalValue;
    const isControlled = controlledValue !== undefined;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSearch?.(value as string);
      }
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      onClear?.();
    };

    return (
      <div
        className={cn(
          'ux4g-search-bar',
          `ux4g-search-bar-${size}`,
          error && 'ux4g-search-bar-error',
          disabled && 'ux4g-search-bar-disabled',
          className
        )}
      >
        <span className="ux4g-search-bar-icon" aria-hidden="true">
          🔍
        </span>
        <input
          ref={ref}
          type="search"
          className="ux4g-search-bar-input"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          {...props}
        />
        {loading && (
          <span className="ux4g-search-bar-loading" aria-hidden="true">
            ⏳
          </span>
        )}
        {showClearButton && value && !loading && (
          <button
            type="button"
            className="ux4g-search-bar-clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
