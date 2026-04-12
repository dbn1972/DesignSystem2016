/**
 * Common types used across UX4G Angular components
 */

/**
 * Standard component sizes
 */
export const COMPONENT_SIZES = ['sm', 'md', 'lg'] as const;
export type ComponentSize = 'sm' | 'md' | 'lg';
export type ComponentMaturity = 'stable' | 'beta' | 'experimental';

/**
 * Button and interactive component variants
 */
export const COMPONENT_VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost', 'destructive'] as const;
export type ComponentVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';

/**
 * Status and feedback variants
 */
export const STATUS_VARIANTS = ['neutral', 'info', 'success', 'warning', 'error'] as const;
export type StatusVariant = 'neutral' | 'info' | 'success' | 'warning' | 'error';

/**
 * Canonical state names shared across UX4G components.
 */
export type ComponentState =
  | 'disabled'
  | 'loading'
  | 'readonly'
  | 'required'
  | 'invalid'
  | 'selected'
  | 'checked'
  | 'open'
  | 'active';

/**
 * Canonical event semantics shared across frameworks.
 */
export type ComponentEventName =
  | 'activate'
  | 'change'
  | 'openChange'
  | 'selectionChange'
  | 'dismiss'
  | 'submit'
  | 'valueCommit';

/**
 * Shared conceptual content regions for projected content.
 */
export type ComponentSlotName =
  | 'default'
  | 'label'
  | 'description'
  | 'hint'
  | 'error'
  | 'icon-leading'
  | 'icon-trailing'
  | 'actions'
  | 'header'
  | 'footer'
  | 'empty';

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
