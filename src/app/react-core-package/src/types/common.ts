/**
 * Common type definitions shared across all UX4G React components
 *
 * Design Principles:
 * - Consistent prop naming across all components
 * - Accessibility-first with required ARIA support
 * - Token-based variants and sizes
 * - Polymorphic component support
 */

import { AriaAttributes, ReactNode, HTMLAttributes } from 'react';

/**
 * Base size variants used across components
 * Maps to UX4G spacing and typography tokens
 */
export type ComponentSize = 'sm' | 'md' | 'lg';

/**
 * Semantic variant types for interactive components
 * Maps to UX4G color tokens
 */
export type ComponentVariant =
  | 'primary'    // Primary action (--ux4g-color-primary)
  | 'secondary'  // Secondary action
  | 'tertiary'   // Tertiary action
  | 'ghost'      // Minimal styling
  | 'destructive'; // Destructive action (--ux4g-color-error)

/**
 * Status variants for feedback components
 * Maps to UX4G semantic color tokens
 */
export type StatusVariant =
  | 'info'     // --ux4g-color-info
  | 'success'  // --ux4g-color-success
  | 'warning'  // --ux4g-color-warning
  | 'error';   // --ux4g-color-error

/**
 * Common base props for all UX4G components
 */
export interface BaseComponentProps {
  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Inline styles (use sparingly, prefer className with tokens)
   */
  style?: React.CSSProperties;

  /**
   * Test ID for testing frameworks
   */
  'data-testid'?: string;
}

/**
 * Common props for interactive components
 */
export interface InteractiveComponentProps extends BaseComponentProps {
  /**
   * Whether the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;

  /**
   * ARIA labelled by reference
   */
  'aria-labelledby'?: string;

  /**
   * ARIA described by reference
   */
  'aria-describedby'?: string;
}

/**
 * Props for form field components
 */
export interface FormFieldProps extends InteractiveComponentProps {
  /**
   * Field name for form submission
   */
  name?: string;

  /**
   * Field ID (links label to input)
   */
  id?: string;

  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean;

  /**
   * Whether the field is read-only
   * @default false
   */
  readOnly?: boolean;

  /**
   * Error state indicator
   * @default false
   */
  error?: boolean;

  /**
   * ARIA invalid state
   */
  'aria-invalid'?: boolean;

  /**
   * ARIA required state
   */
  'aria-required'?: boolean;
}

/**
 * Polymorphic component props
 * Allows components to render as different HTML elements
 */
export type PolymorphicComponentProps<
  E extends React.ElementType,
  P = {}
> = P & Omit<React.ComponentPropsWithoutRef<E>, keyof P> & {
  as?: E;
};

/**
 * Children prop types
 */
export type ChildrenProp = {
  children?: ReactNode;
};

/**
 * Loading state props
 */
export interface LoadingStateProps {
  /**
   * Loading state indicator
   * @default false
   */
  loading?: boolean;

  /**
   * Accessible label for loading state
   */
  loadingText?: string;
}

/**
 * Controlled component value props
 */
export interface ControlledValueProps<T = string> {
  /**
   * Controlled value
   */
  value?: T;

  /**
   * Default value for uncontrolled mode
   */
  defaultValue?: T;

  /**
   * Change handler
   */
  onChange?: (value: T) => void;
}

/**
 * Component with description support
 */
export interface DescribableProps {
  /**
   * Helper/hint text displayed below the component
   */
  hint?: ReactNode;

  /**
   * Error message text
   */
  errorText?: ReactNode;
}
