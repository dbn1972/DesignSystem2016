/**
 * Radio Component Documentation Page
 * Complete documentation for the Radio button component
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const RadioPreview = ({ name, options, disabled = false }: any) => {
  const [selected, setSelected] = React.useState(options[0]?.value || '');
  
  return (
    <div className="space-y-3">
      {options.map((option: any, idx: number) => (
        <label key={idx} className={`flex items-center gap-3 ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}>
          <div className="relative">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selected === option.value}
              onChange={(e) => !disabled && setSelected(e.target.value)}
              disabled={disabled}
              className="w-5 h-5 border-2 border-border rounded-full appearance-none checked:border-[#005196] checked:border-[6px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] transition-all cursor-pointer"
            />
          </div>
          <span className="text-foreground">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

const RADIO_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  { name: 'disabled', label: 'Disabled', type: 'boolean', defaultValue: false },
  { name: 'orientation', label: 'Orientation', type: 'text', defaultValue: 'vertical' },
];

function RadioPlayground() {
  return (
    <ComponentPlayground
      name="Radio"
      controls={RADIO_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg">
          <fieldset className={`flex ${v.orientation === 'horizontal' ? 'flex-row gap-6' : 'flex-col gap-3'}`}>
          <legend className="text-sm font-semibold text-foreground mb-2">Processing Type</legend>
          {['Normal (7-10 days)', 'Tatkal (2-3 days)', 'Super Tatkal (1 day)'].map((opt, i) => (
            <label key={i} className={`flex items-center gap-2 text-sm ${v.disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}>
              <input type="radio" name="pg-radio" disabled={v.disabled} defaultChecked={i === 0} className="accent-[#005196] w-4 h-4" />
              <span className="text-foreground">{opt}</span>
            </label>
          ))}
        </fieldset>
        </div>
      )}
      codeTemplate={(v) =>
        `<RadioGroup orientation="${v.orientation}"${v.disabled ? ' disabled' : ''}>\n  <Radio value="normal" label="Normal" />\n</RadioGroup>`
      }
    />
  );
}

export default function ComponentRadioPage() {
  return (
    <ComponentDocumentation
      name="Radio"
      description="Selection control that allows users to select exactly one option from a set. Essential for mutually exclusive choices in government forms and applications."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Horizontal</p>
            <fieldset className="flex flex-row gap-6">
              {['Normal', 'Tatkal', 'Super Tatkal'].map((opt, i) => (
                <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="preview-h" defaultChecked={i === 0} className="accent-[#005196] w-4 h-4" />
                  <span className="text-foreground">{opt}</span>
                </label>
              ))}
            </fieldset>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Vertical</p>
            <fieldset className="flex flex-col gap-3">
              {['UPI', 'Net Banking', 'Credit/Debit Card'].map((opt, i) => (
                <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="preview-v" defaultChecked={i === 0} className="accent-[#005196] w-4 h-4" />
                  <span className="text-foreground">{opt}</span>
                </label>
              ))}
            </fieldset>
          </div>
        </div>
      }
      
      props={[
        {
          name: 'value',
          type: 'string',
          required: true,
          description: 'The value of this radio button option.',
        },
        {
          name: 'checked',
          type: 'boolean',
          required: false,
          description: 'Controlled checked state.',
        },
        {
          name: 'defaultChecked',
          type: 'boolean',
          required: false,
          description: 'Default checked state for uncontrolled component.',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Label text for the radio button.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: false,
          description: 'Content to render as the radio label (alternative to label prop).',
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          description: 'Name attribute for grouping radio buttons.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the radio button is disabled.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the radio button is required.',
        },
        {
          name: 'readOnly',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the radio button is read-only.',
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the radio button has an error state.',
        },
        {
          name: 'id',
          type: 'string',
          required: false,
          description: 'Field ID (links label to input).',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
        {
          name: 'onChange',
          type: '(event: ChangeEvent<HTMLInputElement>) => void',
          required: false,
          description: 'Change event handler.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Radio Group',
          description: 'Simple radio button group for single selection.',
          code: `import { Radio, RadioGroup } from '@ux4g/react-core';

function Example() {
  const [value, setValue] = React.useState('option1');
  
  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  );
}`,
          preview: (
            <RadioPreview
              name="basic"
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
              ]}
            />
          ),
        },
        {
          title: 'Payment Method Selection',
          description: 'Radio group for selecting payment methods.',
          code: `import { Radio, RadioGroup } from '@ux4g/react-core';

function Example() {
  const [method, setMethod] = React.useState('upi');
  
  return (
    <RadioGroup value={method} onChange={setMethod}>
      <Radio 
        value="upi" 
        label="UPI Payment"
        helperText="Pay using UPI apps like BHIM, PhonePe, Google Pay"
      />
      <Radio 
        value="netbanking" 
        label="Net Banking"
        helperText="Pay directly from your bank account"
      />
      <Radio 
        value="card" 
        label="Credit/Debit Card"
        helperText="Pay using Visa, Mastercard, or RuPay"
      />
    </RadioGroup>
  );
}`,
          preview: (
            <div className="space-y-4">
              <RadioPreview
                name="payment"
                options={[
                  { value: 'upi', label: 'UPI Payment' },
                  { value: 'netbanking', label: 'Net Banking' },
                  { value: 'card', label: 'Credit/Debit Card' },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'With Descriptions',
          description: 'Radio options with detailed descriptions.',
          code: `import { Radio, RadioGroup } from '@ux4g/react-core';

function Example() {
  return (
    <RadioGroup>
      <Radio 
        value="aadhaar" 
        label="Aadhaar Card"
        helperText="12-digit unique identification number"
      />
      <Radio 
        value="pan" 
        label="PAN Card"
        helperText="Permanent Account Number for tax purposes"
      />
      <Radio 
        value="voter" 
        label="Voter ID"
        helperText="Electoral Photo Identity Card"
      />
    </RadioGroup>
  );
}`,
          preview: (
            <div className="space-y-4">
              {[
                { value: 'aadhaar', label: 'Aadhaar Card', helper: '12-digit unique identification number' },
                { value: 'pan', label: 'PAN Card', helper: 'Permanent Account Number' },
                { value: 'voter', label: 'Voter ID', helper: 'Electoral Photo Identity Card' },
              ].map((opt, idx) => (
                <div key={idx}>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="docs"
                      className="w-5 h-5 border-2 border-border rounded-full"
                    />
                    <span className="text-foreground">{opt.label}</span>
                  </label>
                  <p className="ml-8 mt-1 text-sm text-muted-foreground">{opt.helper}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: 'Disabled State',
          description: 'Disabled radio buttons prevent interaction.',
          code: `import { Radio, RadioGroup } from '@ux4g/react-core';

function Example() {
  return (
    <RadioGroup>
      <Radio value="enabled" label="Enabled option" />
      <Radio value="disabled" label="Disabled option" disabled />
    </RadioGroup>
  );
}`,
          preview: (
            <div className="space-y-3">
              <RadioPreview
                name="disabled"
                options={[
                  { value: 'enabled', label: 'Enabled option' },
                ]}
              />
              <RadioPreview
                name="disabled2"
                options={[
                  { value: 'disabled', label: 'Disabled option' },
                ]}
                disabled
              />
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React, { forwardRef, createContext, useContext } from 'react';
import { cn } from '../../utils/cn';
import { radioVariants } from './radio.variants';
import { RadioProps, RadioGroupProps } from './Radio.types';

const RadioGroupContext = createContext<{
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
}>({});

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value,
  onChange,
  name,
  className,
}) => {
  return (
    <RadioGroupContext.Provider value={{ value, onChange, name }}>
      <div className={cn('space-y-3', className)} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      helperText,
      error = false,
      disabled = false,
      value,
      checked,
      onChange,
      name: propName,
      ...props
    },
    ref
  ) => {
    const context = useContext(RadioGroupContext);
    const isChecked = checked ?? (context.value === value);
    const radioName = propName ?? context.name;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      context.onChange?.(e.target.value);
    };

    return (
      <div className="flex flex-col gap-1">
        <label
          className={cn(
            'flex items-center gap-3',
            disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
          )}
        >
          <input
            ref={ref}
            type="radio"
            name={radioName}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            className={cn(
              radioVariants({ error }),
              'appearance-none',
              className
            )}
            {...props}
          />

          {label && (
            <span className="text-foreground select-none">
              {label}
            </span>
          )}
        </label>

        {helperText && (
          <p className="ml-8 text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';`,
        types: `export interface RadioGroupProps {
  children: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
}

export interface RadioProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string | React.ReactNode;
  helperText?: string;
  error?: boolean;
  value: string;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const radioVariants = cva(
  [
    'w-5 h-5 rounded-full border-2',
    'transition-all duration-150',
    'cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]',
    'disabled:cursor-not-allowed',
    'checked:border-[#005196] checked:border-[6px]',
  ],
  {
    variants: {
      error: {
        true: 'border-red-500',
        false: 'border-border',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ux4g-radio-group',
  template: \`
    <div class="space-y-3" role="radiogroup">
      <ng-content></ng-content>
    </div>
  \`
})
export class RadioGroupComponent implements ControlValueAccessor {
  @Input() name?: string;
  @Output() valueChange = new EventEmitter<string>();
  
  value: string = '';
  
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  setValue(value: string): void {
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
}

@Component({
  selector: 'ux4g-radio',
  template: \`
    <div class="flex flex-col gap-1">
      <label [class]="getLabelClasses()">
        <input
          type="radio"
          [name]="name"
          [value]="value"
          [checked]="checked"
          [disabled]="disabled"
          [attr.aria-invalid]="error"
          [class]="getRadioClasses()"
          (change)="handleChange($event)"
        />

        <span *ngIf="label" class="text-foreground select-none">
          {{ label }}
        </span>
      </label>

      <p *ngIf="helperText" class="ml-8 text-sm text-muted-foreground">
        {{ helperText }}
      </p>
    </div>
  \`
})
export class RadioComponent {
  @Input() name?: string;
  @Input() value!: string;
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() error = false;
  
  @Output() checkedChange = new EventEmitter<string>();

  getLabelClasses(): string {
    const base = 'flex items-center gap-3';
    const cursor = this.disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer';
    return \`\${base} \${cursor}\`;
  }

  getRadioClasses(): string {
    const base = 'w-5 h-5 rounded-full border-2 appearance-none transition-all cursor-pointer';
    const focus = 'focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
    const state = this.checked ? 'border-blue-600 border-[6px]' : 'border-border';
    const error = this.error ? 'border-red-500' : '';
    
    return [base, focus, state, error].join(' ');
  }

  handleChange(event: Event): void {
    if (!this.disabled) {
      this.checkedChange.emit(this.value);
    }
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioComponent, RadioGroupComponent } from './radio.component';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';

@NgModule({
  declarations: [RadioComponent, RadioGroupComponent],
  imports: [CommonModule, FormsModule],
  exports: [RadioComponent, RadioGroupComponent]
})
export class RadioModule { }`,
        types: `export interface RadioProps {
  name?: string;
  value: string;
  label?: string;
  helperText?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export interface RadioGroupProps {
  name?: string;
  value?: string;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-radio> custom element",
        html: "<ux4g-radio variant=\"primary\" size=\"md\"><!-- Radio --></ux4g-radio>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Radio',
          variants: 'default, with label, custom icon',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-radio-button/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Radio',
          variants: 'default, button style, disabled',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/radio',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Radios',
          variants: 'default, inline, conditional reveal',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/radios/',
        },
        {
          system: 'Chakra UI',
          component: 'Radio',
          variants: 'default, sizes, color schemes',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/radio',
        },
        {
          system: 'Radix UI',
          component: 'Radio Group',
          variants: 'checked, unchecked',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/radio-group',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 20x20px touch target (WCAG 2.5.5)',
          '2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)',
          'Color contrast ratios meet 3:1 for UI components (WCAG 1.4.11)',
          'Does not rely on color alone (visual fill indicator)',
          'Semantic HTML input with type="radio"',
          'Proper label associations',
          'RadioGroup uses role="radiogroup"',
          'Arrow key navigation between radio options',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to radio group' },
          { key: 'Arrow Up/Down', action: 'Navigate between radio options in group' },
          { key: 'Arrow Left/Right', action: 'Navigate between radio options in group' },
          { key: 'Space', action: 'Select focused radio button' },
        ],
        screenReader: [
          'Announces radio button role',
          'Announces label text',
          'Announces checked/unchecked state',
          'Announces position in group (e.g., "1 of 3")',
          'Announces disabled state when applicable',
          'Reads helper text when provided',
          'Announces radio group context',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/radio.json',
        mappings: [
          { property: 'Size', token: 'base.size', value: '20px' },
          { property: 'Border Width (Unchecked)', token: 'base.borderWidth', value: '2px' },
          { property: 'Border Width (Checked)', token: 'base.borderWidth.checked', value: '6px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '50% (full circle)' },
          { property: 'Border Color (Unchecked)', token: 'border.default', value: '#D1D5DB (Gray 300)' },
          { property: 'Border Color (Checked)', token: 'border.checked', value: '#005196 (Navy 500)' },
          { property: 'Border Color (Error)', token: 'border.error', value: '#EF4444 (Red 500)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
        ],
      }}

      useCases={[
        { title: "Gender Selection", description: "Radio group for gender in personal details form.", scenario: "Certificate application personal information step.", implementation: "<RadioGroup label=\"Gender\"><Radio value=\"female\" label=\"Female\" /><Radio value=\"male\" label=\"Male\" /><Radio value=\"other\" label=\"Other\" /></RadioGroup>" },
        { title: "Processing Type", description: "Normal vs Tatkal processing selection.", scenario: "Additional details step in application.", implementation: "<RadioGroup label=\"Processing\"><Radio value=\"normal\" label=\"Normal (7-10 days)\" /><Radio value=\"tatkal\" label=\"Tatkal (2-3 days)\" /></RadioGroup>" },
        { title: "Payment Method", description: "Select one payment method from available options.", scenario: "Payment step with UPI, Net Banking, Card options.", implementation: "<RadioGroup label=\"Payment Method\"><Radio value=\"upi\" label=\"UPI\" /><Radio value=\"netbanking\" label=\"Net Banking\" /></RadioGroup>" },
        { title: "Delivery Preference", description: "Choose certificate delivery method — digital download, postal, or in-person collection.", scenario: "Citizen selects how to receive the issued certificate after approval.", implementation: "<RadioGroup label=\"Delivery Method\"><Radio value=\"digital\" label=\"Digital Download (Instant)\" /><Radio value=\"postal\" label=\"Speed Post (3-5 days)\" /><Radio value=\"collect\" label=\"Collect from Office\" /></RadioGroup>" },
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
                  Do use Radio when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Mutually exclusive selection from 2–5 visible options</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>When users need to see all options at once</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Form fields where comparison between options matters</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Radio when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>More than 5 options — use Select instead</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Multiple selections allowed — use Checkbox</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Binary toggle — use Switch</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Searchable options — use Autocomplete</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4 space-y-3">
                  <fieldset className="space-y-2">
                    <legend className="text-sm font-medium text-foreground mb-1">Processing Type</legend>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="do-radio" defaultChecked className="accent-[#005196]" />Normal (7-10 days)</label>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="do-radio" className="accent-[#005196]" />Tatkal (2-3 days)</label>
                  </fieldset>
                  <p className="text-sm text-muted-foreground">Use Radio for 2-5 mutually exclusive options where users need to compare choices.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <select className="w-full px-3 py-2 border border-border rounded text-sm bg-card"><option>Normal</option><option>Tatkal</option></select>
                  <p className="text-sm text-muted-foreground">Don&apos;t hide 2-3 options in a dropdown — Radio buttons let users compare all options at once.</p>
                </div>
              </div>
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4 space-y-3">
                  <fieldset className="space-y-2">
                    <legend className="text-xs font-medium text-foreground mb-1">Gender</legend>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="do-gender" defaultChecked className="accent-[#005196]" />Female</label>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="do-gender" className="accent-[#005196]" />Male</label>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="do-gender" className="accent-[#005196]" />Other</label>
                  </fieldset>
                  <p className="text-sm text-muted-foreground">Pre-select the most common option to reduce form completion time by 12% (Formisimo research).</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <fieldset className="space-y-2">
                    <legend className="text-xs font-medium text-foreground mb-1">Gender</legend>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="dont-gender" className="accent-[#005196]" />Female</label>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="dont-gender" className="accent-[#005196]" />Male</label>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="dont-gender" className="accent-[#005196]" />Other</label>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="dont-gender" className="accent-[#005196]" />Prefer not to say</label>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="dont-gender" className="accent-[#005196]" />Non-binary</label>
                    <label className="flex items-center gap-2 text-sm"><input type="radio" name="dont-gender" className="accent-[#005196]" />Custom...</label>
                  </fieldset>
                  <p className="text-sm text-muted-foreground">Don&apos;t use Radio for 6+ options — it takes too much vertical space. Use Select instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <RadioPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/select" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Select</h3>
                <p className="text-sm text-muted-foreground">For longer option lists</p>
              </a>
              <a href="/components/checkbox" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Checkbox</h3>
                <p className="text-sm text-muted-foreground">For multiple selections</p>
              </a>
              <a href="/components/switch" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Switch</h3>
                <p className="text-sm text-muted-foreground">For binary toggles</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added RadioGroup wrapper component</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added horizontal layout option</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with vertical radio group</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Radio vs Select threshold</h3>
                <p className="text-sm text-muted-foreground">Baymard Institute recommends radio buttons for 2–5 options and dropdowns for 5+. Radio buttons reduce cognitive load by showing all options.</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Default selection</h3>
                <p className="text-sm text-muted-foreground">Pre-selecting the most common option (e.g., &quot;Normal&quot; processing) reduces form completion time by 12% (Formisimo research).</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Horizontal vs vertical layout</h3>
                <p className="text-sm text-muted-foreground">NNG research shows horizontal radio groups work well for 2-3 short-label options, while vertical layout is preferred for 4+ options or options with descriptions. UX4G supports both orientations.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
