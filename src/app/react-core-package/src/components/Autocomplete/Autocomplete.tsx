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

import { useState, useRef, useEffect, forwardRef, useId, KeyboardEvent } from 'react';
import { cn } from '../../utils/cn';
import { AutocompleteProps, AutocompleteOption } from './Autocomplete.types';
import { useFieldContext } from '../Field/Field.context';

function mergeDescribedBy(...values: Array<string | undefined>): string | undefined {
  const merged = values
    .flatMap((value) => (value ? value.split(' ') : []))
    .filter(Boolean);

  return merged.length > 0 ? Array.from(new Set(merged)).join(' ') : undefined;
}

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
      disabled,
      error,
      className,
      id,
      required,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const field = useFieldContext();
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const listboxId = useId();
    const inputId = id ?? field?.inputId;
    const resolvedDisabled = disabled ?? field?.disabled ?? false;
    const resolvedError = error ?? field?.invalid ?? false;
    const resolvedRequired = required ?? field?.required ?? false;
    const describedBy = mergeDescribedBy(ariaDescribedBy, field?.describedBy);

    const value = controlledValue ?? internalValue;
    const isControlled = controlledValue !== undefined;

    const defaultFilterFn = (option: AutocompleteOption, query: string) => {
      const label = typeof option.label === 'string' ? option.label : option.value;
      return label.toLowerCase().includes(query.toLowerCase());
    };

    const filteredOptions = options
      .filter((option) => (value ? (filterFn || defaultFilterFn)(option, value) : true))
      .slice(0, maxOptions);

    useEffect(() => {
      const handleClickOutside = (event: globalThis.MouseEvent) => {
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
      setHighlightedIndex(filteredOptions.length > 0 ? 0 : -1);
    };

    const handleSelect = (option: AutocompleteOption) => {
      if (option.disabled) return;
      const newValue = typeof option.label === 'string' ? option.label : option.value;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      onSelect?.(option);
      setIsOpen(false);
      setHighlightedIndex(-1);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          setIsOpen(true);
          setHighlightedIndex(filteredOptions.findIndex((option) => !option.disabled));
        }
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex((prev) => {
            const nextIndex = prev < filteredOptions.length - 1 ? prev + 1 : 0;
            return filteredOptions[nextIndex]?.disabled
              ? filteredOptions.findIndex((option, index) => index > nextIndex && !option.disabled)
              : nextIndex;
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex((prev) => {
            const nextIndex = prev > 0 ? prev - 1 : filteredOptions.length - 1;
            return filteredOptions[nextIndex]?.disabled
              ? [...filteredOptions]
                  .map((option, index) => ({ option, index }))
                  .reverse()
                  .find(({ option, index }) => index < nextIndex && !option.disabled)?.index ?? -1
              : nextIndex;
          });
          break;
        case 'Enter':
          event.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
        case 'Tab':
          setIsOpen(false);
          break;
      }
    };

    const activeOption =
      highlightedIndex >= 0 && filteredOptions[highlightedIndex]
        ? `${listboxId}-option-${highlightedIndex}`
        : undefined;

    return (
      <div ref={wrapperRef} className={cn('ux4g-autocomplete', className)}>
        <input
          ref={ref}
          id={inputId}
          type="text"
          className={cn(
            'ux4g-input',
            `ux4g-input-${size}`,
            resolvedError && 'ux4g-input-error',
            resolvedDisabled && 'ux4g-input-disabled'
          )}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          disabled={resolvedDisabled}
          required={resolvedRequired}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-activedescendant={isOpen ? activeOption : undefined}
          aria-describedby={describedBy}
          aria-invalid={ariaInvalid ?? resolvedError}
          {...props}
        />

        {isOpen && (
          <div
            id={listboxId}
            role="listbox"
            className="ux4g-autocomplete-dropdown"
          >
            {loading ? (
              <div className="ux4g-autocomplete-loading" role="status" aria-live="polite">
                Loading...
              </div>
            ) : filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  id={`${listboxId}-option-${index}`}
                  key={option.value}
                  role="option"
                  aria-selected={index === highlightedIndex}
                  aria-disabled={option.disabled || undefined}
                  className={cn(
                    'ux4g-autocomplete-option',
                    index === highlightedIndex && 'ux4g-autocomplete-option-highlighted',
                    option.disabled && 'ux4g-autocomplete-option-disabled'
                  )}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => !option.disabled && setHighlightedIndex(index)}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="ux4g-autocomplete-empty" role="status" aria-live="polite">
                {emptyMessage}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';
