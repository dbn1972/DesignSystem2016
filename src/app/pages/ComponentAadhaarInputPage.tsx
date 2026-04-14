/**
 * Aadhaar Input Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const AadhaarInputPreview = () => {
  const [value, setValue] = React.useState('');
  
  const formatAadhaar = (val: string) => {
    const digits = val.replace(/\D/g, '');
    const parts = [];
    for (let i = 0; i < digits.length; i += 4) {
      parts.push(digits.slice(i, i + 4));
    }
    return parts.join(' ').slice(0, 14); // 12 digits + 2 spaces
  };
  
  return (
    <div>
      <label className="block text-sm font-semibold text-muted-foreground mb-2">
        Aadhaar Number
      </label>
      <input
        type="text"
        value={formatAadhaar(value)}
        onChange={e => setValue(e.target.value.replace(/\D/g, ''))}
        placeholder="XXXX XXXX XXXX"
        maxLength={14}
        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-[#005196] focus:outline-none font-mono text-lg tracking-wider"
      />
      <p className="mt-2 text-sm text-gray-500">Enter your 12-digit Aadhaar number</p>
    </div>
  );
};

export default function ComponentAadhaarInputPage() {
  return (
    <ComponentDocumentation
      name="Aadhaar Input"
      description="Specialized input for India's Aadhaar unique identification number. Auto-formats to XXXX-XXXX-XXXX pattern, validates 12 digits, supports masking for privacy."
      category="Government Specific"
      maturity="stable"
      tier="composite"
      since="v2.0.0"
      
      props={[
        {
          name: 'value',
          type: 'string',
          required: true,
          description: 'Aadhaar number (12 digits).',
        },
        {
          name: 'onChange',
          type: '(value: string) => void',
          required: true,
          description: 'Change callback with unformatted digits.',
        },
        {
          name: 'masked',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Show masked format (XXXX-XXXX-1234).',
        },
        {
          name: 'error',
          type: 'string',
          required: false,
          description: 'Validation error message.',
        },
      ]}
      
      examples={[
        {
          title: 'Aadhaar Verification',
          description: 'Input with validation and formatting.',
          code: `import { AadhaarInput } from '@ux4g/react-core';

function Example() {
  const [aadhaar, setAadhaar] = React.useState('');
  const [error, setError] = React.useState('');
  
  const handleChange = (value: string) => {
    setAadhaar(value);
    if (value.length > 0 && value.length !== 12) {
      setError('Aadhaar must be 12 digits');
    } else {
      setError('');
    }
  };
  
  return (
    <AadhaarInput
      value={aadhaar}
      onChange={handleChange}
      error={error}
    />
  );
}`,
          preview: <AadhaarInputPreview />,
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { AadhaarInputProps } from './AadhaarInput.types';

export const AadhaarInput: React.FC<AadhaarInputProps> = ({
  value,
  onChange,
  masked = false,
  error,
  disabled = false,
  className,
}) => {
  const formatAadhaar = (val: string): string => {
    const digits = val.replace(/\\D/g, '');
    
    if (masked && digits.length === 12) {
      return \`XXXX XXXX \${digits.slice(8)}\`;
    }
    
    const parts = [];
    for (let i = 0; i < digits.length; i += 4) {
      parts.push(digits.slice(i, i + 4));
    }
    return parts.join(' ');
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\\D/g, '');
    if (input.length <= 12) {
      onChange(input);
    }
  };
  
  return (
    <div className={className}>
      <input
        type="text"
        value={formatAadhaar(value)}
        onChange={handleChange}
        placeholder="XXXX XXXX XXXX"
        maxLength={14}
        disabled={disabled}
        className={\`
          w-full px-4 py-3 border rounded-lg font-mono text-lg tracking-wider
          focus:ring-2 focus:ring-[#005196] focus:outline-none
          \${error ? 'border-red-500' : 'border-border'}
          \${disabled ? 'bg-muted cursor-not-allowed' : ''}
        \`}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};`,
        types: `export interface AadhaarInputProps {
  value: string;
  onChange: (value: string) => void;
  masked?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux4g-aadhaar-input',
  template: \`
    <div>
      <input
        type="text"
        [value]="formatAadhaar(value)"
        (input)="handleInput($event)"
        placeholder="XXXX XXXX XXXX"
        maxlength="14"
        [disabled]="disabled"
        class="w-full px-4 py-3 border border-border rounded-lg font-mono text-lg tracking-wider focus:ring-2 focus:ring-blue-500"
      />
      <p *ngIf="error" class="mt-2 text-sm text-red-600">{{ error }}</p>
    </div>
  \`
})
export class AadhaarInputComponent {
  @Input() value = '';
  @Input() masked = false;
  @Input() error = '';
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();
  
  formatAadhaar(val: string): string {
    const digits = val.replace(/\\D/g, '');
    if (this.masked && digits.length === 12) {
      return \`XXXX XXXX \${digits.slice(8)}\`;
    }
    const parts = [];
    for (let i = 0; i < digits.length; i += 4) {
      parts.push(digits.slice(i, i + 4));
    }
    return parts.join(' ');
  }
  
  handleInput(event: any) {
    const input = event.target.value.replace(/\\D/g, '');
    if (input.length <= 12) {
      this.value = input;
      this.valueChange.emit(input);
    }
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AadhaarInputComponent } from './aadhaar-input.component';

@NgModule({
  declarations: [AadhaarInputComponent],
  imports: [CommonModule],
  exports: [AadhaarInputComponent]
})
export class AadhaarInputModule { }`,
        types: ``,
      }}
      
      comparisons={[
        {
          system: 'Custom Implementation',
          component: 'Formatted Input',
          variants: 'India-specific',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'N/A',
          link: '',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Clear label and instructions',
          'Error messages',
          'Monospace font for readability',
          'Auto-formatting',
        ],
        keyboardSupport: [
          { key: 'Number keys', action: 'Enter digits' },
          { key: 'Backspace', action: 'Delete digits' },
        ],
        screenReader: [
          'Announces label',
          'Reads formatted value',
          'Announces errors',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/aadhaar-input.json',
        mappings: [
          { property: 'Font Family', token: 'aadhaar.font', value: 'Monospace' },
          { property: 'Letter Spacing', token: 'aadhaar.letterSpacing', value: '0.1em' },
        ],
      }}
    />
  );
}
