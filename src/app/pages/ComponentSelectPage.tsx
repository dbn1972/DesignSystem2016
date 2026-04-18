/**
 * Select Component Documentation Page
 * Complete documentation for the Select dropdown component
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ChevronDown } from 'lucide-react';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';

const SelectPreview = ({ placeholder, options, disabled = false, error = false }: any) => {
  const [value, setValue] = React.useState('');
  
  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
          className={`w-full px-4 py-3 pr-10 border rounded-lg appearance-none bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all ${
            error 
              ? 'border-red-500 focus-visible:ring-red-500' 
              : 'border-border focus-visible:ring-[#005196]'
          } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt: any, idx: number) => (
            <option key={idx} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" 
          size={20} 
        />
      </div>
    </div>
  );
};

const STATES = [{ value: 'DL', label: 'Delhi' }, { value: 'MH', label: 'Maharashtra' }, { value: 'KA', label: 'Karnataka' }, { value: 'TN', label: 'Tamil Nadu' }, { value: 'UP', label: 'Uttar Pradesh' }];

const SELECT_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  { name: 'disabled', label: 'Disabled', type: 'boolean', defaultValue: false },
  { name: 'error', label: 'Error', type: 'boolean', defaultValue: false },
  { name: 'required', label: 'Required', type: 'boolean', defaultValue: false },
  { name: 'placeholder', label: 'Placeholder', type: 'text', defaultValue: 'Select a state' },
];

function SelectPlayground() {
  return (
    <ComponentPlayground
      name="Select"
      controls={SELECT_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg">
          <SelectPreview placeholder={v.placeholder} options={STATES} disabled={v.disabled} error={v.error} />
        </div>
      )}
      codeTemplate={(v) =>
        `<Select placeholder="${v.placeholder}"${v.disabled ? ' disabled' : ''}${v.error ? ' error' : ''}${v.required ? ' required' : ''} options={states} />`
      }
    />
  );
}

export default function ComponentSelectPage() {
  return (
    <ComponentDocumentation
      name="Select"
      description="Dropdown selection control for choosing one option from a list. Provides a compact way to present many options in government forms and applications."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="flex flex-wrap items-end gap-6">
          <SelectPreview placeholder="Select State / UT" options={STATES} />
          <SelectPreview placeholder="Disabled" options={STATES} disabled />
          <SelectPreview placeholder="Error state" options={[]} error />
        </div>
      }
      
      props={[
        {
          name: 'placeholder',
          type: 'string',
          required: false,
          description: 'Placeholder text shown when no option is selected.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          required: false,
          description: 'Select size variant.',
        },
        {
          name: 'fullWidth',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the select should take full width.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: false,
          description: 'Option elements to render inside the select.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the select is disabled.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the select is required.',
        },
        {
          name: 'readOnly',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the select is read-only.',
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the select has an error state.',
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
          description: 'Field ID (links label to select).',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
        {
          name: 'aria-label',
          type: 'string',
          required: false,
          description: 'Accessible label for screen readers.',
        },
        {
          name: 'onChange',
          type: '(event: ChangeEvent<HTMLSelectElement>) => void',
          required: false,
          description: 'Change event handler.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Select',
          description: 'Simple dropdown with options.',
          code: `import { Select } from '@ux4g/react-core';

function Example() {
  const [value, setValue] = React.useState('');
  
  const options = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'kolkata', label: 'Kolkata' },
  ];
  
  return (
    <Select
      placeholder="Select a city"
      options={options}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`,          preview: (
            <SelectPreview
              placeholder="Select a city"
              options={[
                { value: 'delhi', label: 'Delhi' },
                { value: 'mumbai', label: 'Mumbai' },
                { value: 'bangalore', label: 'Bangalore' },
                { value: 'kolkata', label: 'Kolkata' },
              ]}
            />
          ),
        },
        {
          title: 'States Selection',
          description: 'Dropdown for selecting Indian states.',
          code: `import { Select } from '@ux4g/react-core';

function Example() {
  const states = [
    { value: 'AN', label: 'Andaman and Nicobar Islands' },
    { value: 'AP', label: 'Andhra Pradesh' },
    { value: 'AR', label: 'Arunachal Pradesh' },
    { value: 'AS', label: 'Assam' },
    { value: 'BR', label: 'Bihar' },
    { value: 'CG', label: 'Chhattisgarh' },
    { value: 'DL', label: 'Delhi' },
    // ... more states
  ];
  
  return (
    <Select
      placeholder="Select your state"
      options={states}
    />
  );
}`,
          preview: (
            <SelectPreview
              placeholder="Select your state"
              options={[
                { value: 'AN', label: 'Andaman and Nicobar Islands' },
                { value: 'AP', label: 'Andhra Pradesh' },
                { value: 'AR', label: 'Arunachal Pradesh' },
                { value: 'DL', label: 'Delhi' },
                { value: 'MH', label: 'Maharashtra' },
              ]}
            />
          ),
        },
        {
          title: 'Error State',
          description: 'Select with validation error.',
          code: `import { Select } from '@ux4g/react-core';

function Example() {
  const [value, setValue] = React.useState('');
  const hasError = value === '';
  
  return (
    <Select
      placeholder="Select an option"
      options={options}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={hasError}
      errorMessage="Please select an option"
    />
  );
}`,
          preview: (
            <div className="w-full max-w-md">
              <SelectPreview
                placeholder="Select an option"
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
                error
              />
              <p className="mt-2 text-sm text-red-600">Please select an option</p>
            </div>
          ),
        },
        {
          title: 'Disabled State',
          description: 'Disabled select prevents interaction.',
          code: `import { Select } from '@ux4g/react-core';

function Example() {
  return (
    <Select
      placeholder="Cannot select"
      options={options}
      disabled
    />
  );
}`,
          preview: (
            <SelectPreview
              placeholder="Cannot select"
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ]}
              disabled
            />
          ),
        },
      ]}

      useCases={[
        { title: "State/UT Selection", description: "Dropdown for selecting Indian state or union territory.", scenario: "Address form in certificate application.", implementation: '<Select label="State / UT" options={INDIAN_STATES} required />' },
        { title: "Certificate Type", description: "Select the type of certificate being applied for.", scenario: "Pre-application eligibility check.", implementation: '<Select label="Certificate Type" options={CERT_TYPES} />' },
        { title: "Payment Method", description: "Choose payment method for application fee.", scenario: "Payment step in service flow.", implementation: '<Select label="Payment Method" options={PAYMENT_METHODS} />' },
        { title: 'District Selection', description: 'Select district after choosing state.', scenario: 'Address form shows districts filtered by selected state.', implementation: '<Select label="District" options={filteredDistricts} required />' },
      ]}


      
      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use Select when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Choosing one option from 5+ predefined choices</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Standardized selections (states, categories, types)</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Dependent dropdowns (district depends on state)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Select when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Fewer than 5 options — use Radio instead</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Multiple selections — use Checkbox group</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Free-text with suggestions — use Autocomplete</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <SelectPlayground />
          </div>
        </>
      }


      reactCode={{
        component: `import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { selectVariants } from './select.variants';
import { SelectProps } from './Select.types';
import { ChevronDown } from 'lucide-react';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      options,
      placeholder,
      error = false,
      errorMessage,
      helperText,
      fullWidth = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const helperId = React.useId();
    const errorId = React.useId();

    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        <select
          ref={ref}
          className={cn(
            selectVariants({ error, fullWidth }),
            'appearance-none pr-10',
            className
          )}
          disabled={disabled}
          aria-invalid={error}
          aria-describedby={cn(
            helperText && helperId,
            error && errorMessage && errorId
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
          size={20}
        />

        {helperText && !error && (
          <p id={helperId} className="mt-2 text-sm text-muted-foreground">
            {helperText}
          </p>
        )}

        {error && errorMessage && (
          <p id={errorId} className="mt-2 text-sm text-red-600">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';`,
        types: `export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps 
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  fullWidth?: boolean;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const selectVariants = cva(
  [
    'px-4 py-3 rounded-lg border bg-card',
    'text-base text-foreground',
    'transition-all duration-150',
    'cursor-pointer',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:bg-muted disabled:cursor-not-allowed disabled:opacity-60',
    'min-h-[44px]',
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
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
      fullWidth: false,
    },
  }
);`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'ux4g-select',
  template: \`
    <div [class]="fullWidth ? 'w-full relative' : 'relative'">
      <select
        [value]="value"
        [disabled]="disabled"
        [attr.aria-invalid]="error"
        [class]="getSelectClasses()"
        (change)="handleChange($event)"
      >
        <option *ngIf="placeholder" value="" disabled>{{ placeholder }}</option>
        <option 
          *ngFor="let option of options" 
          [value]="option.value"
          [disabled]="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>

      <svg
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>

      <p *ngIf="helperText && !error" class="mt-2 text-sm text-muted-foreground">
        {{ helperText }}
      </p>

      <p *ngIf="error && errorMessage" class="mt-2 text-sm text-red-600">
        {{ errorMessage }}
      </p>
    </div>
  \`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: SelectOption[] = [];
  @Input() placeholder?: string;
  @Input() disabled = false;
  @Input() error = false;
  @Input() errorMessage?: string;
  @Input() helperText?: string;
  @Input() fullWidth = false;
  
  @Output() valueChange = new EventEmitter<string>();
  
  value: string = '';
  
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  getSelectClasses(): string {
    const base = 'px-4 py-3 rounded-lg border bg-card appearance-none pr-10 transition-all cursor-pointer';
    const focus = 'focus:outline-none focus:ring-2 focus:ring-offset-2';
    const state = this.error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-border focus:ring-blue-500';
    const width = this.fullWidth ? 'w-full' : '';
    
    return [base, focus, state, width].join(' ');
  }

  handleChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, FormsModule],
  exports: [SelectComponent]
})
export class SelectModule { }`,
        types: `export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  fullWidth?: boolean;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-select> custom element",
        html: "<ux4g-select variant=\"primary\" size=\"md\"><!-- Select --></ux4g-select>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Select',
          variants: 'outlined, filled, standard, native',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-select/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Select',
          variants: 'default, multiple, tags, search',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/select',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Select',
          variants: 'default',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/select/',
        },
        {
          system: 'Chakra UI',
          component: 'Select',
          variants: 'outline, filled, flushed, unstyled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/select',
        },
        {
          system: 'Radix UI',
          component: 'Select',
          variants: 'custom styled primitives',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/select',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44px touch target height (WCAG 2.5.5)',
          '2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)',
          'Color contrast ratios meet 4.5:1 for text (WCAG 1.4.3)',
          'Semantic HTML select element',
          'aria-invalid attribute for error states',
          'aria-describedby linking to helper and error text',
          'Clear visual chevron indicator',
          'Error messages announced to screen readers',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to select' },
          { key: 'Shift + Tab', action: 'Move focus away from select' },
          { key: 'Space', action: 'Open dropdown menu' },
          { key: 'Enter', action: 'Open dropdown menu' },
          { key: 'Arrow Up/Down', action: 'Navigate through options' },
          { key: 'Escape', action: 'Close dropdown menu' },
          { key: 'Type character', action: 'Jump to option starting with that character' },
        ],
        screenReader: [
          'Announces select role',
          'Announces current selected value',
          'Announces number of options available',
          'Announces when dropdown is opened/closed',
          'Reads each option as user navigates',
          'Announces disabled options',
          'Reads helper text via aria-describedby',
          'Reads error message via aria-describedby',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/select.json',
        mappings: [
          { property: 'Height', token: 'base.height.md', value: '44px' },
          { property: 'Padding Horizontal', token: 'base.padding.horizontal.md', value: '16px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '8px' },
          { property: 'Font Size', token: 'base.fontSize.md', value: '16px' },
          { property: 'Border Color', token: 'border.default', value: '#D1D5DB (Gray 300)' },
          { property: 'Border Color (Error)', token: 'border.error', value: '#EF4444 (Red 500)' },
          { property: 'Focus Ring Color', token: 'focus.ring.color', value: '#005196 (Navy 500)' },
          { property: 'Chevron Color', token: 'icon.color', value: '#9CA3AF (Gray 400)' },
        ],
      }}
    />
  );
}
