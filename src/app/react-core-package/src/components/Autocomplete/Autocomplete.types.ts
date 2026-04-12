/**
 * Autocomplete Component Types
 * Autocomplete/typeahead input
 */

import { ReactNode, InputHTMLAttributes } from 'react';
import { FormFieldProps, ComponentSize, ControlledValueProps } from '../../types/common';

export interface AutocompleteOption {
  /**
   * Option value
   */
  value: string;

  /**
   * Option label
   */
  label: ReactNode;

  /**
   * Option disabled state
   */
  disabled?: boolean;
}

export interface AutocompleteProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'>,
    FormFieldProps,
    Omit<ControlledValueProps<string>, 'onChange'> {
  /**
   * Available options
   */
  options: AutocompleteOption[];

  /**
   * Input size
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Change handler
   */
  onChange?: (value: string) => void;

  /**
   * Select handler
   */
  onSelect?: (option: AutocompleteOption) => void;

  /**
   * Filter function
   */
  filterFn?: (option: AutocompleteOption, query: string) => boolean;

  /**
   * Loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Empty state message
   */
  emptyMessage?: ReactNode;

  /**
   * Maximum options to show
   * @default 10
   */
  maxOptions?: number;
}
