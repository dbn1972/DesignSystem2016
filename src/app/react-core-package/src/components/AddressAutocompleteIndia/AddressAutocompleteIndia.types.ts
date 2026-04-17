import { BaseComponentProps, FormFieldProps } from '../../types/common';

export interface AddressValue {
  pincode: string;
  state: string;
  district: string;
  city: string;
  address: string;
}

export interface AddressAutocompleteIndiaProps
  extends Omit<FormFieldProps, 'onChange'>,
    BaseComponentProps {
  /** Current address value */
  value?: AddressValue;

  /** Called when any address field changes */
  onChange?: (value: AddressValue) => void;

  /** Label text */
  label?: string;

  /** Error state */
  error?: boolean;

  /** Error message text */
  errorText?: string;

  /** Whether the field is disabled */
  disabled?: boolean;

  /** Whether the field is required */
  required?: boolean;
}
