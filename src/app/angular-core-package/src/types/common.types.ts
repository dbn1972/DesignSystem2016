/**
 * Common types used across UX4G Angular components
 */

/**
 * Standard component sizes
 */
export type ComponentSize = 'sm' | 'md' | 'lg';

/**
 * Button and interactive component variants
 */
export type ComponentVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';

/**
 * Status and feedback variants
 */
export type StatusVariant = 'info' | 'success' | 'warning' | 'error';

/**
 * Alignment options
 */
export type Alignment = 'start' | 'center' | 'end';

/**
 * Orientation for layout components
 */
export type Orientation = 'horizontal' | 'vertical';

/**
 * Position options for overlays and tooltips
 */
export type Position = 'top' | 'right' | 'bottom' | 'left';

/**
 * Base input types
 */
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'search';

/**
 * Base interface for all UX4G components
 */
export interface BaseComponentConfig {
  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Test identifier for automated testing
   */
  testId?: string;
}

/**
 * Interactive component configuration
 */
export interface InteractiveComponentConfig extends BaseComponentConfig {
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;

  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;

  /**
   * ARIA described by reference
   */
  ariaDescribedBy?: string;
}

/**
 * Form field configuration
 */
export interface FormFieldConfig extends InteractiveComponentConfig {
  /**
   * Field name attribute
   */
  name?: string;

  /**
   * Field ID
   */
  id?: string;

  /**
   * Whether the field is required
   */
  required?: boolean;

  /**
   * Whether the field is read-only
   */
  readonly?: boolean;

  /**
   * Error state
   */
  error?: boolean;
}
