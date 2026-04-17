import { BaseComponentProps } from '../../types/common';

export type FieldType = 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date';

export interface FormFieldConfig {
  /** Unique field key */
  key: string;
  /** Field label */
  label: string;
  /** Input type */
  type: FieldType;
  /** Placeholder text */
  placeholder?: string;
  /** Whether field is required */
  required?: boolean;
  /** Options for select/radio */
  options?: { value: string; label: string }[];
  /** Hint text */
  hint?: string;
  /** Validation pattern (regex string) */
  pattern?: string;
  /** Custom validation error message */
  errorMessage?: string;
  /** Default value */
  defaultValue?: string;
}

export interface FormBuilderProps extends BaseComponentProps {
  /** Field configurations */
  fields: FormFieldConfig[];
  /** Called on form submit with field values */
  onSubmit: (values: Record<string, string>) => void;
  /** Submit button text */
  submitLabel?: string;
  /** Whether form is submitting */
  loading?: boolean;
  /** Form title */
  title?: string;
  /** Form description */
  description?: string;
}
