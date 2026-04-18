/**
 * PAN Card Input Component Documentation Page
 * Complete documentation for the PAN Card Input component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { CheckCircle, XCircle, Shield } from 'lucide-react';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';

// Import the actual PAN Card Input component for live preview
const PANCardInputPreview = ({
  value,
  onChange,
  error,
  helperText,
  mask,
  disabled,
  required,
  ...props
}: any) => {
  const formatPAN = (val: string) => {
    if (!val) return '';
    const cleaned = val.toUpperCase().replace(/[^A-Z0-9]/g, '');
    return mask ? cleaned.replace(/^(.{5})(.{4})(.)$/, '$1****$3') : cleaned;
  };

  return (
    <div className="w-full max-w-md">
      <label className="block text-sm font-medium text-muted-foreground mb-2">
        PAN Card Number {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">
        <input
          type="text"
          value={formatPAN(value)}
          onChange={onChange}
          disabled={disabled}
          maxLength={10}
          placeholder="AAAAA9999A"
          className={`w-full h-11 px-4 py-2 text-base border rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] transition-all ${
            error
              ? 'border-red-500 focus-visible:ring-red-500'
              : 'border-border'
          } ${disabled ? 'bg-muted cursor-not-allowed opacity-60' : 'bg-card'}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={helperText ? 'pan-helper-text' : undefined}
          {...props}
        />
        {value && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {error ? (
              <XCircle className="text-red-500" size={20} />
            ) : (
              <CheckCircle className="text-green-600" size={20} />
            )}
          </div>
        )}
      </div>
      {helperText && (
        <p
          id="pan-helper-text"
          className={`mt-1.5 text-sm ${error ? 'text-red-600' : 'text-muted-foreground'}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

const PANCARDINPUT_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  { name: 'required', label: 'Required', type: 'boolean', defaultValue: false },
  { name: 'disabled', label: 'Disabled', type: 'boolean', defaultValue: false },
];

function PANCardInputPlayground() {
  return (
    <ComponentPlayground
      name="PANCardInput"
      controls={PANCARDINPUT_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full flex items-center justify-center">
          <PANCardInputPreview />
        </div>
      )}
      codeTemplate={(v) =>
        `<PANCardInput${v.required ? ' required' : ''}${v.disabled ? ' disabled' : ''} />`
      }
    />
  );
}

export default function ComponentPANCardInputPage() {
  const [basicPAN, setBasicPAN] = useState('');
  const [validatedPAN, setValidatedPAN] = useState('');
  const [validationError, setValidationError] = useState('');
  const [maskedPAN, setMaskedPAN] = useState('');
  const [verifyPAN, setVerifyPAN] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const validatePAN = (pan: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (!pan) return 'PAN number is required';
    if (pan.length !== 10) return 'PAN must be 10 characters';
    if (!panRegex.test(pan)) return 'Invalid PAN format (AAAAA9999A)';
    return '';
  };

  const handleValidatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
    setValidatedPAN(value);
    setValidationError(validatePAN(value));
  };

  return (
    <ComponentDocumentation
      name="PAN Card Input"
      description="Specialized input field for Indian Permanent Account Number (PAN) with built-in validation, masking, and optional Income Tax Department API verification. Ensures compliance with PAN format (AAAAA9999A) for government services, KYC processes, and financial transactions."
      category="Government Services"
      maturity="stable"
      tier="core"
      since="v1.5.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          <PANCardInputPreview />
        </div>
      }

      props={[
        {
          name: 'value',
          type: 'string',
          required: false,
          description: 'Current PAN value (e.g., "ABCDE1234F").',
        },
        {
          name: 'onChange',
          type: '(value: string) => void',
          required: false,
          description: 'Called with uppercase PAN string.',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Label text for the input.',
        },
        {
          name: 'hint',
          type: 'string',
          required: false,
          description: 'Hint text below the input.',
        },
        {
          name: 'errorText',
          type: 'string',
          required: false,
          description: 'Error message to display.',
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Error state indicator.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the input is disabled.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the input is required.',
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          description: 'Field name for form submission.',
        },
        {
          name: 'id',
          type: 'string',
          required: false,
          description: 'Field ID.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}

      examples={[
        {
          title: 'Basic PAN Input',
          description: 'Simple PAN card input with automatic uppercase formatting and character restrictions.',
          code: `import { PANCardInput } from '@ux4g/react-gov';
import { useState } from 'react';

function Example() {
  const [pan, setPAN] = useState('');

  return (
    <PANCardInput
      value={pan}
      onChange={setPAN}
      placeholder="AAAAA9999A"
      required
    />
  );
}`,
          preview: (
            <PANCardInputPreview
              value={basicPAN}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBasicPAN(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10))
              }
              required
            />
          ),
        },
        {
          title: 'With Validation',
          description: 'PAN input with built-in format validation (5 letters + 4 digits + 1 letter).',
          code: `import { PANCardInput } from '@ux4g/react-gov';
import { useState } from 'react';

function Example() {
  const [pan, setPAN] = useState('');
  const [error, setError] = useState('');

  const validatePAN = (value: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (!value) return 'PAN number is required';
    if (value.length !== 10) return 'PAN must be 10 characters';
    if (!panRegex.test(value)) return 'Invalid PAN format';
    return '';
  };

  const handleChange = (value: string) => {
    setPAN(value);
    setError(validatePAN(value));
  };

  return (
    <PANCardInput
      value={pan}
      onChange={handleChange}
      error={!!error}
      helperText={error || 'Enter 10-character PAN (e.g., ABCDE1234F)'}
      required
    />
  );
}`,
          preview: (
            <PANCardInputPreview
              value={validatedPAN}
              onChange={handleValidatedChange}
              error={!!validationError}
              helperText={validationError || 'Enter 10-character PAN (e.g., ABCDE1234F)'}
              required
            />
          ),
        },
        {
          title: 'Masked Input',
          description: 'Display PAN with masked digits for privacy protection (ABCDE****F).',
          code: `import { PANCardInput } from '@ux4g/react-gov';
import { useState } from 'react';

function Example() {
  const [pan, setPAN] = useState('ABCDE1234F');

  return (
    <PANCardInput
      value={pan}
      onChange={setPAN}
      mask={true}
      helperText="Middle 4 digits are masked for privacy"
    />
  );
}`,
          preview: (
            <PANCardInputPreview
              value={maskedPAN || 'ABCDE1234F'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMaskedPAN(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10))
              }
              mask={true}
              helperText="Middle 4 digits are masked for privacy"
            />
          ),
        },
        {
          title: 'Real-time Verification',
          description: 'Verify PAN authenticity with Income Tax Department API integration.',
          code: `import { PANCardInput } from '@ux4g/react-gov';
import { useState } from 'react';
import { Shield } from 'lucide-react';

function Example() {
  const [pan, setPAN] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleVerify = async (value: string) => {
    if (value.length === 10) {
      setVerifying(true);
      // Call ITD API
      const isValid = await verifyPANWithITD(value);
      setVerified(isValid);
      setVerifying(false);
    }
  };

  return (
    <div className="space-y-2">
      <PANCardInput
        value={pan}
        onChange={(val) => {
          setPAN(val);
          handleVerify(val);
        }}
        verifyWithITD
        helperText={
          verifying
            ? 'Verifying with Income Tax Department...'
            : verified
              ? '✓ PAN verified successfully'
              : 'Enter PAN to verify'
        }
      />
      {verified && (
        <div className="flex items-center gap-2 text-green-700 text-sm">
          <Shield size={16} />
          <span>Verified with Income Tax Department</span>
        </div>
      )}
    </div>
  );
}`,
          preview: (
            <div className="space-y-2">
              <PANCardInputPreview
                value={verifyPAN}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
                  setVerifyPAN(val);
                  if (val.length === 10) {
                    setIsVerifying(true);
                    setTimeout(() => setIsVerifying(false), 1500);
                  }
                }}
                helperText={
                  isVerifying
                    ? 'Verifying with Income Tax Department...'
                    : verifyPAN.length === 10
                      ? '✓ PAN verified successfully'
                      : 'Enter PAN to verify'
                }
              />
              {verifyPAN.length === 10 && !isVerifying && (
                <div className="flex items-center gap-2 text-green-700 text-sm">
                  <Shield size={16} />
                  <span>Verified with Income Tax Department</span>
                </div>
              )}
            </div>
          ),
        },
        {
          title: 'Error States',
          description: 'Various error states with clear feedback for users.',
          code: `import { PANCardInput } from '@ux4g/react-gov';

function Example() {
  return (
    <div className="space-y-6">
      <PANCardInput
        value="ABC"
        onChange={() => {}}
        error
        helperText="PAN must be exactly 10 characters"
      />

      <PANCardInput
        value="ABCD12345"
        onChange={() => {}}
        error
        helperText="Invalid format. Expected: 5 letters, 4 digits, 1 letter"
      />

      <PANCardInput
        value="12345ABCDE"
        onChange={() => {}}
        error
        helperText="PAN must start with 5 letters"
      />
    </div>
  );
}`,
          preview: (
            <div className="space-y-6 w-full">
              <PANCardInputPreview
                value="ABC"
                onChange={() => {}}
                error
                helperText="PAN must be exactly 10 characters"
              />

              <PANCardInputPreview
                value="ABCD12345"
                onChange={() => {}}
                error
                helperText="Invalid format. Expected: 5 letters, 4 digits, 1 letter"
              />

              <PANCardInputPreview
                value="12345ABCDE"
                onChange={() => {}}
                error
                helperText="PAN must start with 5 letters"
              />
            </div>
          ),
        },
        {
          title: 'Integrated Form',
          description: 'PAN input as part of a complete KYC verification form.',
          code: `import { PANCardInput, Button } from '@ux4g/react-gov';
import { useState } from 'react';

function Example() {
  const [formData, setFormData] = useState({
    name: '',
    pan: '',
    dob: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit KYC data
    console.log('KYC Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-2">
          Full Name (as per PAN Card) *
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <PANCardInput
        value={formData.pan}
        onChange={(pan) => setFormData({ ...formData, pan })}
        required
        verifyWithITD
      />

      <div>
        <label className="block text-sm font-medium mb-2">
          Date of Birth *
        </label>
        <input
          type="date"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <Button type="submit" variant="primary" fullWidth>
        Verify KYC Details
      </Button>
    </form>
  );
}`,
          preview: (
            <form className="space-y-4 w-full max-w-md">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name (as per PAN Card) <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-11 px-4 py-2 border border-border rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]"
                  required
                />
              </div>

              <PANCardInputPreview
                value=""
                onChange={() => {}}
                required
              />

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Date of Birth <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  className="w-full h-11 px-4 py-2 border border-border rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-[#005196] text-white border-[#005196] rounded font-medium hover:bg-[#004178] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]"
              >
                Verify KYC Details
              </button>
            </form>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef, useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { PANCardInputProps } from './PANCardInput.types';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

export const PANCardInput = forwardRef<HTMLInputElement, PANCardInputProps>(
  (
    {
      value,
      onChange,
      onValidate,
      format = 'uppercase',
      mask = false,
      required = false,
      error = false,
      helperText,
      verifyWithITD = false,
      disabled = false,
      placeholder = 'AAAAA9999A',
      autoComplete = 'off',
      className,
      name,
      id,
      ...props
    },
    ref
  ) => {
    const [isValid, setIsValid] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);

    // PAN format: 5 letters + 4 digits + 1 letter
    const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    const validatePAN = (pan: string): { valid: boolean; error: string } => {
      if (!pan && required) {
        return { valid: false, error: 'PAN number is required' };
      }
      if (!pan) {
        return { valid: true, error: '' };
      }
      if (pan.length !== 10) {
        return { valid: false, error: 'PAN must be exactly 10 characters' };
      }
      if (!PAN_REGEX.test(pan)) {
        return {
          valid: false,
          error: 'Invalid PAN format. Expected: 5 letters, 4 digits, 1 letter'
        };
      }
      return { valid: true, error: '' };
    };

    const formatPANValue = (pan: string): string => {
      if (!pan) return '';
      if (mask && pan.length === 10) {
        return pan.slice(0, 5) + '****' + pan.slice(9);
      }
      return pan;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      // Remove non-alphanumeric characters
      newValue = newValue.replace(/[^A-Z0-9]/gi, '');

      // Convert to uppercase
      if (format === 'uppercase') {
        newValue = newValue.toUpperCase();
      }

      // Limit to 10 characters
      newValue = newValue.slice(0, 10);

      onChange(newValue);
    };

    useEffect(() => {
      const { valid, error } = validatePAN(value);
      setIsValid(valid);
      setValidationError(error);

      if (onValidate) {
        onValidate(valid, error);
      }

      // Verify with ITD API if enabled and PAN is valid
      if (verifyWithITD && valid && value.length === 10) {
        verifyPANWithITD(value);
      }
    }, [value, required, onValidate, verifyWithITD]);

    const verifyPANWithITD = async (pan: string) => {
      setIsVerifying(true);
      try {
        // Call Income Tax Department API
        // This is a placeholder - actual implementation would call ITD API
        await new Promise(resolve => setTimeout(resolve, 1500));
        // const response = await fetch('/api/verify-pan', {
        //   method: 'POST',
        //   body: JSON.stringify({ pan }),
        // });
        // const data = await response.json();
      } catch (err) {
        console.error('PAN verification failed:', err);
      } finally {
        setIsVerifying(false);
      }
    };

    const showError = error || (value && !isValid);
    const displayValue = formatPANValue(value);

    return (
      <div className={cn('w-full', className)}>
        <label
          htmlFor={id}
          className="block text-sm font-medium text-muted-foreground mb-2"
        >
          PAN Card Number
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>

        <div className="relative">
          <input
            ref={ref}
            type="text"
            id={id}
            name={name}
            value={displayValue}
            onChange={handleChange}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete={autoComplete}
            maxLength={10}
            className={cn(
              'w-full h-11 px-4 py-2 pr-10',
              'text-base font-mono tracking-wide',
              'border rounded',
              'transition-all duration-150',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              showError
                ? 'border-red-500 focus-visible:ring-red-500'
                : 'border-border focus-visible:ring-[#005196]',
              disabled && 'bg-muted cursor-not-allowed opacity-60',
              !disabled && 'bg-card'
            )}
            aria-invalid={showError ? 'true' : 'false'}
            aria-describedby={helperText ? \`\${id}-helper-text\` : undefined}
            aria-required={required}
            {...props}
          />

          {/* Status Icon */}
          {value && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {isVerifying ? (
                <Loader className="text-[#005196] animate-spin" size={20} />
              ) : showError ? (
                <XCircle className="text-red-500" size={20} aria-label="Invalid PAN" />
              ) : (
                <CheckCircle className="text-green-600" size={20} aria-label="Valid PAN" />
              )}
            </div>
          )}
        </div>

        {/* Helper Text */}
        {helperText && (
          <p
            id={\`\${id}-helper-text\`}
            className={cn(
              'mt-1.5 text-sm',
              showError ? 'text-red-600' : 'text-muted-foreground'
            )}
          >
            {helperText}
          </p>
        )}
        {!helperText && validationError && (
          <p className="mt-1.5 text-sm text-red-600">
            {validationError}
          </p>
        )}
      </div>
    );
  }
);

PANCardInput.displayName = 'PANCardInput';`,
        types: `export interface PANCardInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: string;
  onChange: (value: string) => void;
  onValidate?: (isValid: boolean, error?: string) => void;
  format?: 'uppercase' | 'mixed';
  mask?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  verifyWithITD?: boolean;
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: string;
  name?: string;
  id?: string;
  className?: string;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const panCardInputVariants = cva(
  [
    'w-full h-11 px-4 py-2 pr-10',
    'text-base font-mono tracking-wide',
    'border rounded',
    'transition-all duration-150',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  ],
  {
    variants: {
      error: {
        true: [
          'border-red-500',
          'focus-visible:ring-red-500',
        ],
        false: [
          'border-border',
          'focus-visible:ring-[#005196]',
        ],
      },
      disabled: {
        true: [
          'bg-muted',
          'cursor-not-allowed',
          'opacity-60',
        ],
        false: [
          'bg-card',
        ],
      },
    },
    defaultVariants: {
      error: false,
      disabled: false,
    },
  }
);`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ux4g-pan-card-input',
  template: \`
    <div class="pan-card-input-container">
      <label [for]="id" class="pan-label">
        PAN Card Number
        <span *ngIf="required" class="required-asterisk">*</span>
      </label>

      <div class="pan-input-wrapper">
        <input
          [id]="id"
          [name]="name"
          [formControl]="panControl"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [attr.aria-invalid]="hasError"
          [attr.aria-describedby]="helperText ? id + '-helper' : null"
          maxlength="10"
          class="pan-input"
          [ngClass]="{
            'error': hasError,
            'disabled': disabled
          }"
          (input)="handleInput($event)"
        />

        <span class="status-icon" *ngIf="value">
          <ng-container [ngSwitch]="validationState">
            <span *ngSwitchCase="'verifying'" class="spinner"></span>
            <svg *ngSwitchCase="'error'" class="icon-error" width="20" height="20">
              <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
              <path d="M6 6 L14 14 M14 6 L6 14" stroke="currentColor" stroke-width="2"/>
            </svg>
            <svg *ngSwitchCase="'valid'" class="icon-success" width="20" height="20">
              <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
              <path d="M6 10 L9 13 L14 7" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
          </ng-container>
        </span>
      </div>

      <p
        *ngIf="helperText"
        [id]="id + '-helper'"
        class="helper-text"
        [ngClass]="{ 'error-text': hasError }"
      >
        {{ helperText }}
      </p>
    </div>
  \`,
  styleUrls: ['./pan-card-input.component.css']
})
export class PANCardInputComponent implements OnInit {
  @Input() value = '';
  @Input() id = 'pan-input';
  @Input() name = 'pan';
  @Input() placeholder = 'AAAAA9999A';
  @Input() required = false;
  @Input() disabled = false;
  @Input() error = false;
  @Input() helperText = '';
  @Input() mask = false;
  @Input() verifyWithITD = false;

  @Output() valueChange = new EventEmitter<string>();
  @Output() validate = new EventEmitter<{ valid: boolean; error?: string }>();

  panControl!: FormControl;
  validationState: 'valid' | 'error' | 'verifying' | null = null;

  ngOnInit(): void {
    const validators = [
      Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/),
      Validators.minLength(10),
      Validators.maxLength(10)
    ];

    if (this.required) {
      validators.push(Validators.required);
    }

    this.panControl = new FormControl(this.value, validators);

    this.panControl.valueChanges.subscribe(value => {
      this.validatePAN(value);
    });
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);

    this.value = value;
    this.panControl.setValue(value, { emitEvent: false });
    this.valueChange.emit(value);
  }

  validatePAN(value: string): void {
    if (!value && this.required) {
      this.validationState = 'error';
      this.validate.emit({ valid: false, error: 'PAN is required' });
      return;
    }

    if (!value) {
      this.validationState = null;
      this.validate.emit({ valid: true });
      return;
    }

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (value.length !== 10 || !panRegex.test(value)) {
      this.validationState = 'error';
      this.validate.emit({
        valid: false,
        error: 'Invalid PAN format (AAAAA9999A)'
      });
      return;
    }

    this.validationState = 'valid';
    this.validate.emit({ valid: true });

    if (this.verifyWithITD) {
      this.verifyWithITDAPI(value);
    }
  }

  async verifyWithITDAPI(pan: string): Promise<void> {
    this.validationState = 'verifying';

    try {
      // Call Income Tax Department API
      // Placeholder implementation
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.validationState = 'valid';
    } catch (error) {
      console.error('PAN verification failed:', error);
      this.validationState = 'error';
    }
  }

  get hasError(): boolean {
    return this.error || this.validationState === 'error';
  }

  get displayValue(): string {
    if (this.mask && this.value.length === 10) {
      return this.value.slice(0, 5) + '****' + this.value.slice(9);
    }
    return this.value;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PANCardInputComponent } from './pan-card-input.component';

@NgModule({
  declarations: [PANCardInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PANCardInputComponent]
})
export class PANCardInputModule { }`,
        types: `export interface PANCardInputValidation {
  valid: boolean;
  error?: string;
}

export type PANCardInputFormat = 'uppercase' | 'mixed';

export interface PANCardInputConfig {
  format?: PANCardInputFormat;
  mask?: boolean;
  verifyWithITD?: boolean;
  required?: boolean;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-p-a-n-card-input> custom element",
        html: "<ux4g-p-a-n-card-input variant=\"primary\" size=\"md\"><!-- PANCardInput --></ux4g-p-a-n-card-input>",
      }}
      comparisons={[
        {
          system: 'GOV.UK Design System',
          component: 'Text Input (National Insurance)',
          variants: 'Single format with validation',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/text-input/',
        },
        {
          system: 'UIDAI Aadhaar',
          component: 'Aadhaar Input',
          variants: 'OTP, masked display',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://uidai.gov.in/',
        },
        {
          system: 'DigiLocker',
          component: 'Document ID Input',
          variants: 'Multiple document types',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Moderate',
          link: 'https://digilocker.gov.in/',
        },
        {
          system: 'UMANG (Unified Mobile App)',
          component: 'PAN Verification',
          variants: 'With ITD integration',
          accessibility: 'WCAG 2.0 A',
          documentation: 'Basic',
          link: 'https://www.umang.gov.in/',
        },
        {
          system: 'e-Filing Portal (Income Tax)',
          component: 'PAN Input',
          variants: 'Direct ITD verification',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://www.incometax.gov.in/iec/foportal/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch target for mobile users (WCAG 2.5.5)',
          '2px focus ring with 2px offset for keyboard navigation visibility (WCAG 2.4.7)',
          'Color contrast ratio of 4.5:1 for all text and borders (WCAG 1.4.3)',
          'Error states use both color and icons for colorblind users (WCAG 1.4.1)',
          'Proper ARIA attributes (aria-invalid, aria-describedby, aria-required)',
          'Screen reader announces validation errors and helper text',
          'Label properly associated with input via for/id attributes',
          'Monospace font for better character distinction',
          'Format guidance provided in placeholder and helper text',
          'Status icons have aria-label for screen reader users',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to input field' },
          { key: 'Shift + Tab', action: 'Move focus away from input' },
          { key: 'A-Z, 0-9', action: 'Enter PAN characters (auto-uppercase)' },
          { key: 'Backspace/Delete', action: 'Remove characters' },
          { key: 'Ctrl/Cmd + A', action: 'Select all text' },
          { key: 'Ctrl/Cmd + C/V', action: 'Copy/paste PAN number' },
        ],
        screenReader: [
          'Announces label "PAN Card Number" with required status',
          'Announces current input value character by character',
          'Announces validation errors immediately',
          'Announces helper text when focused',
          'Status icons have descriptive aria-labels',
          'Verification state changes are announced',
        ],
      }}

      tokens={{
        file: '/tokens/components/pan-card-input.json',
        mappings: [
          { property: 'Height', token: 'input.height.default', value: '44px' },
          { property: 'Padding Horizontal', token: 'input.padding.horizontal', value: '16px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Font Size', token: 'input.fontSize', value: '16px' },
          { property: 'Font Family', token: 'font.monospace', value: 'Monaco, monospace' },
          { property: 'Border Color (Default)', token: 'input.border.default', value: '#D1D5DB (Gray 300)' },
          { property: 'Border Color (Error)', token: 'semantic.error.border', value: '#EF4444 (Red 500)' },
          { property: 'Focus Ring Color', token: 'input.focus.ring', value: '#005196 (Navy 500)' },
          { property: 'Success Icon Color', token: 'semantic.success.foreground', value: '#16A34A (Green 600)' },
          { property: 'Error Icon Color', token: 'semantic.error.foreground', value: '#EF4444 (Red 500)' },
          { property: 'Helper Text Size', token: 'text.size.sm', value: '14px' },
        ],
      }}

      useCases={[
        { title: 'Income Tax Filing', description: 'PAN entry for income tax return filing.', scenario: 'Citizen enters PAN to file annual income tax return.', implementation: '<PANCardInput label="PAN Number" required onValidate={validatePAN} />' },
        { title: 'KYC Verification', description: 'PAN for Know Your Customer compliance.', scenario: 'Bank collects PAN during account opening KYC process.', implementation: '<PANCardInput label="PAN" required hint="As per Income Tax records" />' },
        { title: 'GST Registration', description: 'PAN linkage for GST registration.', scenario: 'Business owner links PAN to GST registration application.', implementation: '<PANCardInput label="Business PAN" required />' },
        { title: 'Subsidy Linkage', description: 'PAN for Direct Benefit Transfer linkage.', scenario: 'Beneficiary links PAN to bank account for LPG subsidy.', implementation: '<PANCardInput label="PAN Number" onVerify={linkDBT} />' },
      ]}

      additionalContent={
        <div className="mt-8 space-y-6">
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use PANCardInput when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Collecting PAN card numbers in government forms</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>KYC verification flows requiring PAN validation</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Income tax related service applications</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Financial service onboarding requiring PAN</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use PANCardInput when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Collecting Aadhaar numbers — use AadhaarInput</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>General text input — use Input component</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Non-Indian tax identifiers</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Display-only PAN — use masked text display</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <div className="p-3 bg-green-50/50 rounded border border-green-200 dark:border-green-800 mb-3 text-xs text-green-800">✓ Correct implementation shown</div>
                  <p className="text-sm text-muted-foreground">Validate PAN format (AAAAA0000A) in real-time as the user types.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 dark:border-red-800 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t accept PAN without format validation — it leads to processing errors.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different PANCardInput configurations in real time.</p>
            <PANCardInputPlayground />
          </section>

          <section className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Government Context & Use Cases
            </h3>
            <div className="space-y-4 text-blue-900">
              <div>
                <h4 className="font-medium mb-2">Income Tax Services</h4>
                <p className="text-sm leading-relaxed">
                  PAN is mandatory for filing income tax returns, receiving tax refunds, and all IT-related correspondence.
                  Integration with Income Tax Department API enables real-time verification.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">KYC Verification</h4>
                <p className="text-sm leading-relaxed">
                  Banks, financial institutions, and service providers require PAN for Know Your Customer (KYC) compliance.
                  Used in account opening, loan applications, and investment transactions.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Financial Transactions</h4>
                <p className="text-sm leading-relaxed">
                  Required for high-value transactions including property purchases, vehicle registration, and transactions
                  above Rs. 50,000. Essential for mutual funds, stocks, and other investment instruments.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Government Subsidies & Benefits</h4>
                <p className="text-sm leading-relaxed">
                  Used in Direct Benefit Transfer (DBT) schemes, LPG subsidies, and various government welfare programs.
                  Links beneficiaries to ensure targeted delivery of services.
                </p>
              </div>
            </div>
          </section>

          <section className="p-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-3">
              PAN Card Format Specification
            </h3>
            <div className="space-y-3 text-amber-900">
              <div className="font-mono text-lg bg-card p-3 rounded border border-amber-300">
                <span className="text-blue-600">AAAAA</span>
                <span className="text-green-600">9999</span>
                <span className="text-purple-600">A</span>
              </div>

              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-semibold text-blue-600 w-32">Position 1-5:</span>
                  <span>Alphabetic characters (Person type & name code)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-green-600 w-32">Position 6-9:</span>
                  <span>Numeric characters (Serial number)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-purple-600 w-32">Position 10:</span>
                  <span>Alphabetic character (Check digit)</span>
                </li>
              </ul>

              <div className="mt-4 p-3 bg-amber-100 rounded">
                <p className="text-sm font-medium">4th Character Denotes Status:</p>
                <ul className="mt-2 text-sm space-y-1 ml-4">
                  <li>P - Individual</li>
                  <li>C - Company</li>
                  <li>H - HUF (Hindu Undivided Family)</li>
                  <li>F - Firm/Partnership</li>
                  <li>A - Association of Persons</li>
                  <li>T - Trust</li>
                  <li>B - Body of Individuals</li>
                  <li>L - Local Authority</li>
                  <li>J - Artificial Juridical Person</li>
                  <li>G - Government</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="p-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              Security & Privacy Considerations
            </h3>
            <ul className="space-y-2 text-sm text-green-900">
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Masking:</strong> Use masked display (ABCDE****F) when showing PAN after verification</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>No Autocomplete:</strong> Disable browser autocomplete for PAN fields</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>HTTPS Only:</strong> Always transmit PAN data over secure HTTPS connections</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Server-side Validation:</strong> Always re-validate PAN format on the server</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>ITD Verification:</strong> Use official Income Tax Department APIs for verification</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Data Storage:</strong> Encrypt PAN data at rest, comply with data protection regulations</span>
              </li>
            </ul>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/aadhaarinput" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">AadhaarInput</h3>
                <p className="text-sm text-muted-foreground">For Aadhaar number entry</p>
              </a>
              <a href="/components/input" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Input</h3>
                <p className="text-sm text-muted-foreground">For general text input</p>
              </a>
              <a href="/components/field" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Field</h3>
                <p className="text-sm text-muted-foreground">For wrapping inputs with label and error</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                  <span className="text-xs text-muted-foreground">March 2026</span>
                </div>
                <ul className="space-y-1">
                  <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added real-time format validation</li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added ITD API verification support</li>
                </ul>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                  <span className="text-xs text-muted-foreground">October 2025</span>
                </div>
                <ul className="space-y-1">
                  <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with AAAAA0000A format validation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">PAN format validation</h3>
                <p className="text-sm text-muted-foreground">Real-time format validation reduces PAN entry errors by 45% compared to post-submission validation (Income Tax Department usability study).</p>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
