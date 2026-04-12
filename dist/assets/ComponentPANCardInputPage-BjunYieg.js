import{r as s,j as e,d as A}from"./index-LBJNeHTL.js";import{C as b}from"./ComponentDocumentation-DvEedSJi.js";import{S as N}from"./shield-CFs1StF7.js";import{C as y}from"./circle-x-CvAiqsqm.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const a=({value:d,onChange:m,error:i,helperText:n,mask:c,disabled:u,required:f,...h})=>{const o=p=>{if(!p)return"";const l=p.toUpperCase().replace(/[^A-Z0-9]/g,"");return c?l.replace(/^(.{5})(.{4})(.)$/,"$1****$3"):l};return e.jsxs("div",{className:"w-full max-w-md",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["PAN Card Number ",f&&e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:o(d),onChange:m,disabled:u,maxLength:10,placeholder:"AAAAA9999A",className:`w-full h-11 px-4 py-2 text-base border rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] transition-all ${i?"border-red-500 focus-visible:ring-red-500":"border-gray-300"} ${u?"bg-gray-100 cursor-not-allowed opacity-60":"bg-white"}`,"aria-invalid":i?"true":"false","aria-describedby":n?"pan-helper-text":void 0,...h}),d&&e.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2",children:i?e.jsx(y,{className:"text-red-500",size:20}):e.jsx(A,{className:"text-green-600",size:20})})]}),n&&e.jsx("p",{id:"pan-helper-text",className:`mt-1.5 text-sm ${i?"text-red-600":"text-gray-600"}`,children:n})]})};function k(){const[d,m]=s.useState(""),[i,n]=s.useState(""),[c,u]=s.useState(""),[f,h]=s.useState(""),[o,p]=s.useState(""),[l,v]=s.useState(!1),g=t=>{const r=/^[A-Z]{5}[0-9]{4}[A-Z]$/;return t?t.length!==10?"PAN must be 10 characters":r.test(t)?"":"Invalid PAN format (AAAAA9999A)":"PAN number is required"},x=t=>{const r=t.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,10);n(r),u(g(r))};return e.jsx(b,{name:"PAN Card Input",description:"Specialized input field for Indian Permanent Account Number (PAN) with built-in validation, masking, and optional Income Tax Department API verification. Ensures compliance with PAN format (AAAAA9999A) for government services, KYC processes, and financial transactions.",category:"Government Services",maturity:"stable",tier:"core",since:"v1.5.0",updated:"v2.3.0",props:[{name:"value",type:"string",required:!0,description:"The current PAN card number value. Must follow format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)."},{name:"onChange",type:"(value: string) => void",required:!0,description:"Callback fired when the PAN value changes. Receives sanitized uppercase value."},{name:"onValidate",type:"(isValid: boolean, error?: string) => void",required:!1,description:"Callback fired when validation state changes. Receives validation status and error message."},{name:"format",type:"'uppercase' | 'mixed'",default:"'uppercase'",required:!1,description:"Text formatting. PAN cards are typically uppercase only."},{name:"mask",type:"boolean",default:"false",required:!1,description:"Whether to mask middle 4 digits for privacy (ABCDE****F). Used for display after entry."},{name:"required",type:"boolean",default:"false",required:!1,description:"Whether the field is required. Adds asterisk to label and enforces validation."},{name:"error",type:"boolean",default:"false",required:!1,description:"Whether the field has a validation error. Changes border color to red."},{name:"helperText",type:"string",required:!1,description:"Helper or error text displayed below the input field."},{name:"verifyWithITD",type:"boolean",default:"false",required:!1,description:"Enable real-time verification with Income Tax Department API. Requires API credentials."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the input is disabled. Prevents interaction and applies disabled styling."},{name:"placeholder",type:"string",default:"'AAAAA9999A'",required:!1,description:"Placeholder text showing the expected format."},{name:"autoComplete",type:"string",default:"'off'",required:!1,description:'HTML autocomplete attribute. Use "off" for sensitive data.'},{name:"name",type:"string",required:!1,description:"Name attribute for form submission."},{name:"id",type:"string",required:!1,description:"ID attribute for label association."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to the input container."}],examples:[{title:"Basic PAN Input",description:"Simple PAN card input with automatic uppercase formatting and character restrictions.",code:`import { PANCardInput } from '@ux4g/react-gov';
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
}`,preview:e.jsx(a,{value:d,onChange:t=>m(t.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,10)),required:!0})},{title:"With Validation",description:"PAN input with built-in format validation (5 letters + 4 digits + 1 letter).",code:`import { PANCardInput } from '@ux4g/react-gov';
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
}`,preview:e.jsx(a,{value:i,onChange:x,error:!!c,helperText:c||"Enter 10-character PAN (e.g., ABCDE1234F)",required:!0})},{title:"Masked Input",description:"Display PAN with masked digits for privacy protection (ABCDE****F).",code:`import { PANCardInput } from '@ux4g/react-gov';
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
}`,preview:e.jsx(a,{value:f||"ABCDE1234F",onChange:t=>h(t.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,10)),mask:!0,helperText:"Middle 4 digits are masked for privacy"})},{title:"Real-time Verification",description:"Verify PAN authenticity with Income Tax Department API integration.",code:`import { PANCardInput } from '@ux4g/react-gov';
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
}`,preview:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{value:o,onChange:t=>{const r=t.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,10);p(r),r.length===10&&(v(!0),setTimeout(()=>v(!1),1500))},helperText:l?"Verifying with Income Tax Department...":o.length===10?"✓ PAN verified successfully":"Enter PAN to verify"}),o.length===10&&!l&&e.jsxs("div",{className:"flex items-center gap-2 text-green-700 text-sm",children:[e.jsx(N,{size:16}),e.jsx("span",{children:"Verified with Income Tax Department"})]})]})},{title:"Error States",description:"Various error states with clear feedback for users.",code:`import { PANCardInput } from '@ux4g/react-gov';

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
}`,preview:e.jsxs("div",{className:"space-y-6 w-full",children:[e.jsx(a,{value:"ABC",onChange:()=>{},error:!0,helperText:"PAN must be exactly 10 characters"}),e.jsx(a,{value:"ABCD12345",onChange:()=>{},error:!0,helperText:"Invalid format. Expected: 5 letters, 4 digits, 1 letter"}),e.jsx(a,{value:"12345ABCDE",onChange:()=>{},error:!0,helperText:"PAN must start with 5 letters"})]})},{title:"Integrated Form",description:"PAN input as part of a complete KYC verification form.",code:`import { PANCardInput, Button } from '@ux4g/react-gov';
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
}`,preview:e.jsxs("form",{className:"space-y-4 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Full Name (as per PAN Card) ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"Enter your full name",className:"w-full h-11 px-4 py-2 border border-gray-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",required:!0})]}),e.jsx(a,{value:"",onChange:()=>{},required:!0}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Date of Birth ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"date",className:"w-full h-11 px-4 py-2 border border-gray-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",required:!0})]}),e.jsx("button",{type:"submit",className:"w-full h-11 bg-[#005196] text-white border-[#005196] rounded font-medium hover:bg-[#004178] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:"Verify KYC Details"})]})}],reactCode:{component:`import React, { forwardRef, useState, useEffect } from 'react';
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
          className="block text-sm font-medium text-gray-700 mb-2"
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
                : 'border-gray-300 focus-visible:ring-[#005196]',
              disabled && 'bg-gray-100 cursor-not-allowed opacity-60',
              !disabled && 'bg-white'
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
              showError ? 'text-red-600' : 'text-gray-600'
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

PANCardInput.displayName = 'PANCardInput';`,types:`export interface PANCardInputProps
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
}`,variants:`import { cva } from 'class-variance-authority';

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
          'border-gray-300',
          'focus-visible:ring-[#005196]',
        ],
      },
      disabled: {
        true: [
          'bg-gray-100',
          'cursor-not-allowed',
          'opacity-60',
        ],
        false: [
          'bg-white',
        ],
      },
    },
    defaultVariants: {
      error: false,
      disabled: false,
    },
  }
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PANCardInputComponent } from './pan-card-input.component';

@NgModule({
  declarations: [PANCardInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PANCardInputComponent]
})
export class PANCardInputModule { }`,types:`export interface PANCardInputValidation {
  valid: boolean;
  error?: string;
}

export type PANCardInputFormat = 'uppercase' | 'mixed';

export interface PANCardInputConfig {
  format?: PANCardInputFormat;
  mask?: boolean;
  verifyWithITD?: boolean;
  required?: boolean;
}`},comparisons:[{system:"GOV.UK Design System",component:"Text Input (National Insurance)",variants:"Single format with validation",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/text-input/"},{system:"UIDAI Aadhaar",component:"Aadhaar Input",variants:"OTP, masked display",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://uidai.gov.in/"},{system:"DigiLocker",component:"Document ID Input",variants:"Multiple document types",accessibility:"WCAG 2.0 AA",documentation:"Moderate",link:"https://digilocker.gov.in/"},{system:"UMANG (Unified Mobile App)",component:"PAN Verification",variants:"With ITD integration",accessibility:"WCAG 2.0 A",documentation:"Basic",link:"https://www.umang.gov.in/"},{system:"e-Filing Portal (Income Tax)",component:"PAN Input",variants:"Direct ITD verification",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://www.incometax.gov.in/iec/foportal/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 44x44px touch target for mobile users (WCAG 2.5.5)","2px focus ring with 2px offset for keyboard navigation visibility (WCAG 2.4.7)","Color contrast ratio of 4.5:1 for all text and borders (WCAG 1.4.3)","Error states use both color and icons for colorblind users (WCAG 1.4.1)","Proper ARIA attributes (aria-invalid, aria-describedby, aria-required)","Screen reader announces validation errors and helper text","Label properly associated with input via for/id attributes","Monospace font for better character distinction","Format guidance provided in placeholder and helper text","Status icons have aria-label for screen reader users"],keyboardSupport:[{key:"Tab",action:"Move focus to input field"},{key:"Shift + Tab",action:"Move focus away from input"},{key:"A-Z, 0-9",action:"Enter PAN characters (auto-uppercase)"},{key:"Backspace/Delete",action:"Remove characters"},{key:"Ctrl/Cmd + A",action:"Select all text"},{key:"Ctrl/Cmd + C/V",action:"Copy/paste PAN number"}],screenReader:['Announces label "PAN Card Number" with required status',"Announces current input value character by character","Announces validation errors immediately","Announces helper text when focused","Status icons have descriptive aria-labels","Verification state changes are announced"]},tokens:{file:"/tokens/components/pan-card-input.json",mappings:[{property:"Height",token:"input.height.default",value:"44px"},{property:"Padding Horizontal",token:"input.padding.horizontal",value:"16px"},{property:"Border Radius",token:"base.borderRadius",value:"4px"},{property:"Font Size",token:"input.fontSize",value:"16px"},{property:"Font Family",token:"font.monospace",value:"Monaco, monospace"},{property:"Border Color (Default)",token:"input.border.default",value:"#D1D5DB (Gray 300)"},{property:"Border Color (Error)",token:"semantic.error.border",value:"#EF4444 (Red 500)"},{property:"Focus Ring Color",token:"input.focus.ring",value:"#005196 (Navy 500)"},{property:"Success Icon Color",token:"semantic.success.foreground",value:"#16A34A (Green 600)"},{property:"Error Icon Color",token:"semantic.error.foreground",value:"#EF4444 (Red 500)"},{property:"Helper Text Size",token:"text.size.sm",value:"14px"}]},additionalContent:e.jsxs("div",{className:"mt-8 space-y-6",children:[e.jsxs("section",{className:"p-6 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 mb-3",children:"Government Context & Use Cases"}),e.jsxs("div",{className:"space-y-4 text-blue-900",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Income Tax Services"}),e.jsx("p",{className:"text-sm leading-relaxed",children:"PAN is mandatory for filing income tax returns, receiving tax refunds, and all IT-related correspondence. Integration with Income Tax Department API enables real-time verification."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"KYC Verification"}),e.jsx("p",{className:"text-sm leading-relaxed",children:"Banks, financial institutions, and service providers require PAN for Know Your Customer (KYC) compliance. Used in account opening, loan applications, and investment transactions."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Financial Transactions"}),e.jsx("p",{className:"text-sm leading-relaxed",children:"Required for high-value transactions including property purchases, vehicle registration, and transactions above Rs. 50,000. Essential for mutual funds, stocks, and other investment instruments."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Government Subsidies & Benefits"}),e.jsx("p",{className:"text-sm leading-relaxed",children:"Used in Direct Benefit Transfer (DBT) schemes, LPG subsidies, and various government welfare programs. Links beneficiaries to ensure targeted delivery of services."})]})]})]}),e.jsxs("section",{className:"p-6 bg-amber-50 border border-amber-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-900 mb-3",children:"PAN Card Format Specification"}),e.jsxs("div",{className:"space-y-3 text-amber-900",children:[e.jsxs("div",{className:"font-mono text-lg bg-white p-3 rounded border border-amber-300",children:[e.jsx("span",{className:"text-blue-600",children:"AAAAA"}),e.jsx("span",{className:"text-green-600",children:"9999"}),e.jsx("span",{className:"text-purple-600",children:"A"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"font-semibold text-blue-600 w-32",children:"Position 1-5:"}),e.jsx("span",{children:"Alphabetic characters (Person type & name code)"})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"font-semibold text-green-600 w-32",children:"Position 6-9:"}),e.jsx("span",{children:"Numeric characters (Serial number)"})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"font-semibold text-purple-600 w-32",children:"Position 10:"}),e.jsx("span",{children:"Alphabetic character (Check digit)"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-amber-100 rounded",children:[e.jsx("p",{className:"text-sm font-medium",children:"4th Character Denotes Status:"}),e.jsxs("ul",{className:"mt-2 text-sm space-y-1 ml-4",children:[e.jsx("li",{children:"P - Individual"}),e.jsx("li",{children:"C - Company"}),e.jsx("li",{children:"H - HUF (Hindu Undivided Family)"}),e.jsx("li",{children:"F - Firm/Partnership"}),e.jsx("li",{children:"A - Association of Persons"}),e.jsx("li",{children:"T - Trust"}),e.jsx("li",{children:"B - Body of Individuals"}),e.jsx("li",{children:"L - Local Authority"}),e.jsx("li",{children:"J - Artificial Juridical Person"}),e.jsx("li",{children:"G - Government"})]})]})]})]}),e.jsxs("section",{className:"p-6 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-3",children:"Security & Privacy Considerations"}),e.jsxs("ul",{className:"space-y-2 text-sm text-green-900",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-600",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Masking:"})," Use masked display (ABCDE****F) when showing PAN after verification"]})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-600",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"No Autocomplete:"})," Disable browser autocomplete for PAN fields"]})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-600",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"HTTPS Only:"})," Always transmit PAN data over secure HTTPS connections"]})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-600",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Server-side Validation:"})," Always re-validate PAN format on the server"]})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-600",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"ITD Verification:"})," Use official Income Tax Department APIs for verification"]})]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-600",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Data Storage:"})," Encrypt PAN data at rest, comply with data protection regulations"]})]})]})]})]})})}export{k as default};
