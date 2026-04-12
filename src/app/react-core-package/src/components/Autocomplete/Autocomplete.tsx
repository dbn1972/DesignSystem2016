/**
 * Autocomplete Component
 * Autocomplete/typeahead input
 *
 * @example
 * ```tsx
 * <Autocomplete
 *   options={states}
 *   value={state}
 *   onChange={setState}
 *   placeholder="Select state"
 * />
 * ```
 */

import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { AutocompleteProps } from './Autocomplete.types';

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue = '',
      onChange,
      onSelect,
      filterFn,
      loading = false,
      emptyMessage = 'No options found',
      maxOptions = 10,
      size = 'md',
      disabled = false,
      error = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const value = controlledValue ?? internalValue;
    const isControlled = controlledValue !== undefined;

    const defaultFilterFn = (option: AutocompleteOption, query: string) => {
      const label = typeof option.label === 'string' ? option.label : option.value;
      return label.toLowerCase().includes(query.toLowerCase());
    };

    const filteredOptions = options
      .filter((option) =>
        value ? (filterFn || defaultFilterFn)(option, value) : true
      )
      .filter((option) => !option.disabled)
      .slice(0, maxOptions);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      setIsOpen(true);
      setHighlightedIndex(-1);
    };

    const handleSelect = (option: AutocompleteOption) => {
      const newValue = typeof option.label === 'string' ? option.label : option.value;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      onSelect?.(option);
      setIsOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen) {
        if (event.key === 'ArrowDown') {
          setIsOpen(true);
        }
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter':
          event.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    return (
      <div ref={wrapperRef} className={cn('ux4g-autocomplete', className)}>
        <input
          ref={ref}
          type="text"
          className={cn(
            'ux4g-input',
            `ux4g-input-${size}`,
            error && 'ux4g-input-error',
            disabled && 'ux4g-input-disabled'
          )}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls="autocomplete-listbox"
          {...props}
        />

        {isOpen && (
          <div
            id="autocomplete-listbox"
            role="listbox"
            className="ux4g-autocomplete-dropdown"
          >
            {loading ? (
              <div className="ux4g-autocomplete-loading">Loading...</div>
            ) : filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={option.value}
                  role="option"
                  aria-selected={index === highlightedIndex}
                  className={cn(
                    'ux4g-autocomplete-option',
                    index === highlightedIndex && 'ux4g-autocomplete-option-highlighted'
                  )}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="ux4g-autocomplete-empty">{emptyMessage}</div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';
