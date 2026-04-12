/**
 * Field Component Types
 * Composition wrapper for form fields with label, input, and helper text
 */

import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface FieldProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps,
    ChildrenProp {
  /**
   * Whether the field has an error
   * Automatically adds error styling to child components
   * @default false
   */
  error?: boolean;

  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean;

  /**
   * Whether the field is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Shared control id used to connect label, hint, and error text.
   * If omitted, Field generates one automatically.
   */
  id?: string;

  /**
   * Optional label content rendered above the field control.
   */
  label?: ReactNode;

  /**
   * Optional helper text rendered below the field control.
   */
  hint?: ReactNode;

  /**
   * Optional error message rendered below the field control.
   * When present, the field is treated as invalid.
   */
  errorText?: ReactNode;
}
