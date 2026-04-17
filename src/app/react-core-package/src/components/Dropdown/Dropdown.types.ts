import { BaseComponentProps, ComponentSize } from '../../types/common';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps extends BaseComponentProps {
  /** Label text */
  label?: string;
  /** Options list */
  options: DropdownOption[];
  /** Selected value */
  value?: string;
  /** Placeholder when no value selected */
  placeholder?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Size */
  size?: ComponentSize;
  /** Disabled */
  disabled?: boolean;
  /** Required */
  required?: boolean;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorText?: string;
  /** Hint text */
  hint?: string;
  /** Field id */
  id?: string;
  /** Field name */
  name?: string;
}
