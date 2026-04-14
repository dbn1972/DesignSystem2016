/**
 * SearchBar Component Types
 * Search input with icon
 */

import { InputHTMLAttributes } from 'react';
import { FormFieldProps, ComponentSize } from '../../types/common';

export interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'aria-invalid' | 'aria-required'>,
    FormFieldProps {
  /**
   * Input size
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Search handler
   */
  onSearch?: (value: string) => void;

  /**
   * Clear handler
   */
  onClear?: () => void;

  /**
   * Show clear button
   * @default true
   */
  showClearButton?: boolean;

  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
}
