/**
 * AddressAutocompleteIndia Component
 * Indian address input with pincode-based auto-fill for state, district, and city.
 *
 * @example
 * ```tsx
 * <AddressAutocompleteIndia value={address} onChange={setAddress} label="Address" />
 * ```
 */

import { forwardRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { AddressAutocompleteIndiaProps, AddressValue } from './AddressAutocompleteIndia.types';

const PINCODE_MAP: Record<string, { state: string; district: string; city: string }> = {
  '110001': { state: 'Delhi', district: 'Central Delhi', city: 'New Delhi' },
  '400001': { state: 'Maharashtra', district: 'Mumbai', city: 'Mumbai' },
  '600001': { state: 'Tamil Nadu', district: 'Chennai', city: 'Chennai' },
  '700001': { state: 'West Bengal', district: 'Kolkata', city: 'Kolkata' },
  '560001': { state: 'Karnataka', district: 'Bangalore Urban', city: 'Bengaluru' },
};

const DEFAULT_VALUE: AddressValue = { pincode: '', state: '', district: '', city: '', address: '' };

export const AddressAutocompleteIndia = forwardRef<HTMLDivElement, AddressAutocompleteIndiaProps>(
  (
    {
      value = DEFAULT_VALUE,
      onChange,
      label = 'Address',
      error,
      errorText,
      disabled,
      required,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const resolvedError = error || !!errorText;

    const handleFieldChange = useCallback(
      (field: keyof AddressValue, fieldValue: string) => {
        const updated = { ...value, [field]: fieldValue };

        if (field === 'pincode' && fieldValue.length === 6) {
          const lookup = PINCODE_MAP[fieldValue];
          if (lookup) {
            updated.state = lookup.state;
            updated.district = lookup.district;
            updated.city = lookup.city;
          }
        }

        onChange?.(updated);
      },
      [value, onChange]
    );

    const inputClass = cn(
      'ux4g-address-input-field',
      'w-full px-3 py-2 border rounded-md text-sm',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
      resolvedError ? 'border-destructive' : 'border-border',
      disabled && 'opacity-50 cursor-not-allowed bg-muted'
    );

    return (
      <div
        ref={ref}
        className={cn('ux4g-address-autocomplete-india', className)}
        role="group"
        aria-label={label}
        {...props}
      >
        {label && (
          <legend className={cn('ux4g-address-label block text-sm font-medium text-foreground mb-2', disabled && 'text-muted-foreground')}>
            {label}
            {required && <span className="text-destructive ml-1" aria-hidden="true">*</span>}
          </legend>
        )}

        <div className="space-y-2">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Pincode"
            value={value.pincode}
            onChange={(e) => handleFieldChange('pincode', e.target.value.replace(/\D/g, '').slice(0, 6))}
            maxLength={6}
            disabled={disabled}
            aria-label="Pincode"
            className={inputClass}
          />
          <input
            type="text"
            placeholder="State"
            value={value.state}
            onChange={(e) => handleFieldChange('state', e.target.value)}
            disabled={disabled}
            aria-label="State"
            className={inputClass}
          />
          <input
            type="text"
            placeholder="District"
            value={value.district}
            onChange={(e) => handleFieldChange('district', e.target.value)}
            disabled={disabled}
            aria-label="District"
            className={inputClass}
          />
          <input
            type="text"
            placeholder="City"
            value={value.city}
            onChange={(e) => handleFieldChange('city', e.target.value)}
            disabled={disabled}
            aria-label="City"
            className={inputClass}
          />
          <textarea
            placeholder="Full Address"
            value={value.address}
            onChange={(e) => handleFieldChange('address', e.target.value)}
            disabled={disabled}
            aria-label="Full Address"
            rows={3}
            className={inputClass}
          />
        </div>

        {errorText && (
          <p role="alert" className="ux4g-address-error text-sm text-destructive mt-1">
            {errorText}
          </p>
        )}
      </div>
    );
  }
);

AddressAutocompleteIndia.displayName = 'AddressAutocompleteIndia';
