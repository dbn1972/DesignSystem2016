/**
 * Checkbox Component Documentation Page
 * Complete documentation for the Checkbox component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';
import { Check } from 'lucide-react';

// Checkbox preview component
const CheckboxPreview = ({ label, disabled = false, indeterminate = false }: any) => {
  const [checked, setChecked] = React.useState(false);
  
  return (
    <label className={`flex items-center gap-3 ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => !disabled && setChecked(e.target.checked)}
          disabled={disabled}
          className={`w-5 h-5 border-2 rounded appearance-none transition-all ${
            checked 
              ? 'bg-[#005196] border-[#005196]' 
              : 'bg-card border-border'
          } ${!disabled && 'cursor-pointer'} focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]`}
        />
        {checked && (
          <Check 
            size={16} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none" 
          />
        )}
        {indeterminate && !checked && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-0.5 bg-[#005196] pointer-events-none" />
        )}
      </div>
      <span className="text-foreground">{label}</span>
    </label>
  );
};

const CHECKBOX_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  {
    name: 'disabled',
    label: 'Disabled',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'required',
    label: 'Required',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'label',
    label: 'Label',
    type: 'text',
    defaultValue: 'I accept the Terms of Service',
  },
];

function CheckboxPlayground() {
  return (
    <ComponentPlayground
      name="Checkbox"
      controls={CHECKBOX_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg">
          <CheckboxPreview label={v.label} disabled={v.disabled} />
        </div>
      )}
      codeTemplate={(v) =>
        `<Checkbox label="${v.label}"${v.disabled ? ' disabled' : ''}${v.required ? ' required' : ''} />`}
    />
  );
}

export default function ComponentCheckboxPage() {
  return (
    <ComponentDocumentation
      name="Checkbox"
      description="Selection control that allows users to select one or more options from a set. Essential for forms, settings, and multi-select interfaces in government services."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="flex flex-wrap items-center gap-8">
          <CheckboxPreview label="Unchecked" />
          <CheckboxPreview label="Disabled" disabled />
        </div>
      }
      
      props={[
        {
          name: 'checked',
          type: 'boolean',
          required: false,
          description: 'Controlled checked state of the checkbox.',
        },
        {
          name: 'defaultChecked',
          type: 'boolean',
          required: false,
          description: 'Default checked state for uncontrolled component.',
        },
        {
          name: 'indeterminate',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Indeterminate state (used for "select all" checkboxes when some items are selected).',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Label text for the checkbox.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: false,
          description: 'Content to render as the checkbox label (alternative to label prop).',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the checkbox is disabled.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the checkbox is required.',
        },
        {
          name: 'readOnly',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the checkbox is read-only.',
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the checkbox has an error state.',
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
          title: 'Basic Checkbox',
          description: 'Simple checkbox with label.',
          code: `import { Checkbox } from '@ux4g/react-core';

function Example() {
  const [checked, setChecked] = React.useState(false);
  
  return (
    <Checkbox
      label="I agree to terms and conditions"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}

      useCases={[
        { title: "Terms & Conditions Acceptance", description: "Required consent checkbox before form submission.", scenario: "Declaration step in certificate application.", implementation: "<Checkbox label=\"I accept the Terms of Service\" required />" },
        { title: "Document Checklist", description: "Multiple checkboxes for document upload verification.", scenario: "Officer verifies uploaded documents.", implementation: "<Checkbox label=\"Aadhaar Card verified\" />" },
        { title: "Notification Preferences", description: "Optional checkboxes for communication channels.", scenario: "User profile notification settings.", implementation: "<Checkbox label=\"Receive SMS updates\" defaultChecked />" },
      
        { title: 'Scheme Selection', description: 'Multiple checkboxes for selecting applicable welfare schemes.', scenario: 'Citizen selects all applicable schemes during registration.', implementation: '<Checkbox label="PM-KISAN" /><Checkbox label="MGNREGA" /><Checkbox label="Ayushman Bharat" />' },
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
                  Do use Checkbox when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Binary yes/no choices</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Multiple selections from a list</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Terms and conditions acceptance</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Optional preferences or settings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Checkbox when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Mutually exclusive options — use Radio instead</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Immediate on/off toggle — use Switch instead</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Single selection from many — use Select</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Actions — use Button instead</li>
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
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-[#005196]" readOnly /> Aadhaar Card verified</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-[#005196]" readOnly /> Address proof verified</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-[#005196]" readOnly /> Photo verified</label>
                  </div>
                  <p className="text-sm text-muted-foreground">Use checkboxes for multiple independent selections from a list.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-[#005196]" readOnly /> Male</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-[#005196]" readOnly /> Female</label>
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-[#005196]" readOnly /> Other</label>
                  </div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use checkboxes for mutually exclusive options — use Radio buttons instead.</p>
                </div>
              </div>
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-[#005196]" readOnly /> I declare that the information provided is true and correct <span className="text-red-500">*</span></label>
                  </div>
                  <p className="text-sm text-muted-foreground">Leave consent checkboxes unchecked by default — pre-checking violates GDPR and Indian IT Act requirements.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-[#005196]" defaultChecked readOnly /> I agree to receive promotional emails</label>
                  </div>
                  <p className="text-sm text-muted-foreground">Don&apos;t pre-check consent or marketing checkboxes — users must actively opt in.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <CheckboxPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/radio" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Radio</h3>
                <p className="text-sm text-muted-foreground">For mutually exclusive choices</p>
              </a>
              <a href="/components/switch" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Switch</h3>
                <p className="text-sm text-muted-foreground">For immediate toggle actions</p>
              </a>
              <a href="/components/select" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Select</h3>
                <p className="text-sm text-muted-foreground">For single selection from many</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added indeterminate state</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added checkbox group support</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with checked/unchecked states</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Checkbox vs Switch</h3>
                <p className="text-sm text-muted-foreground">Material Design guidelines recommend checkboxes for settings that require form submission, and switches for settings that take effect immediately.</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Pre-checked consent</h3>
                <p className="text-sm text-muted-foreground">GDPR and Indian IT Act require consent checkboxes to be unchecked by default. Pre-checking consent violates user autonomy.</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Indeterminate state for parent checkboxes</h3>
                <p className="text-sm text-muted-foreground">GOV.UK research found that indeterminate (partially checked) state on parent checkboxes reduces user confusion by 35% when managing nested selections like document checklists.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}`,
          preview: <CheckboxPreview label="I agree to terms and conditions" />,
        },
        {
          title: 'Checkbox Group',
          description: 'Multiple checkboxes for selecting multiple options.',
          code: `import { Checkbox } from '@ux4g/react-core';

function Example() {
  const [options, setOptions] = React.useState({
    email: false,
    sms: false,
    push: false,
  });
  
  return (
    <div className="space-y-3">
      <Checkbox
        label="Email notifications"
        checked={options.email}
        onChange={(e) => setOptions({ ...options, email: e.target.checked })}
      />
      <Checkbox
        label="SMS notifications"
        checked={options.sms}
        onChange={(e) => setOptions({ ...options, sms: e.target.checked })}
      />
      <Checkbox
        label="Push notifications"
        checked={options.push}
        onChange={(e) => setOptions({ ...options, push: e.target.checked })}
      />
    </div>
  );
}`,
          preview: (
            <div className="space-y-3">
              <CheckboxPreview label="Email notifications" />
              <CheckboxPreview label="SMS notifications" />
              <CheckboxPreview label="Push notifications" />
            </div>
          ),
        },
        {
          title: 'Indeterminate State',
          description: 'Used for "select all" when some child items are selected.',
          code: `import { Checkbox } from '@ux4g/react-core';

function Example() {
  const [parent, setParent] = React.useState(false);
  const [children, setChildren] = React.useState([false, false, false]);
  
  const allChecked = children.every(Boolean);
  const someChecked = children.some(Boolean) && !allChecked;
  
  return (
    <div className="space-y-3">
      <Checkbox
        label="Select all"
        checked={allChecked}
        indeterminate={someChecked}
        onChange={(e) => {
          const checked = e.target.checked;
          setChildren([checked, checked, checked]);
        }}
      />
      <div className="pl-6 space-y-2">
        {children.map((checked, idx) => (
          <Checkbox
            key={idx}
            label={\`Option \${idx + 1}\`}
            checked={checked}
            onChange={(e) => {
              const newChildren = [...children];
              newChildren[idx] = e.target.checked;
              setChildren(newChildren);
            }}
          />
        ))}
      </div>
    </div>
  );
}`,
          preview: (
            <div className="space-y-3">
              <CheckboxPreview label="Select all" indeterminate />
              <div className="pl-6 space-y-2">
                <CheckboxPreview label="Option 1" />
                <CheckboxPreview label="Option 2" />
                <CheckboxPreview label="Option 3" />
              </div>
            </div>
          ),
        },
        {
          title: 'Disabled State',
          description: 'Disabled checkboxes prevent user interaction.',
          code: `import { Checkbox } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" checked disabled />
    </div>
  );
}`,
          preview: (
            <div className="space-y-3">
              <CheckboxPreview label="Disabled unchecked" disabled />
              <CheckboxPreview label="Disabled checked" disabled />
            </div>
          ),
        },
        {
          title: 'With Helper Text',
          description: 'Checkbox with additional context.',
          code: `import { Checkbox } from '@ux4g/react-core';

function Example() {
  return (
    <Checkbox
      label="Subscribe to newsletter"
      helperText="You can unsubscribe at any time"
    />
  );
}`,
          preview: (
            <div>
              <CheckboxPreview label="Subscribe to newsletter" />
              <p className="ml-8 mt-1 text-sm text-muted-foreground">You can unsubscribe at any time</p>
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React, { forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import { checkboxVariants } from './checkbox.variants';
import { CheckboxProps } from './Checkbox.types';
import { Check, Minus } from 'lucide-react';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      helperText,
      error = false,
      errorMessage,
      indeterminate = false,
      disabled = false,
      checked,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const helperId = React.useId();
    const errorId = React.useId();

    // Handle indeterminate state
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <div className="flex flex-col gap-1">
        <label
          className={cn(
            'flex items-center gap-3',
            disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
          )}
        >
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              disabled={disabled}
              className={cn(
                checkboxVariants({ error }),
                'appearance-none',
                className
              )}
              aria-invalid={error}
              aria-describedby={cn(
                helperText && helperId,
                error && errorMessage && errorId
              )}
              {...props}
            />
            
            {/* Check icon */}
            {checked && !indeterminate && (
              <Check
                size={16}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none"
              />
            )}
            
            {/* Indeterminate icon */}
            {indeterminate && (
              <Minus
                size={16}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none"
              />
            )}
          </div>

          {label && (
            <span className="text-foreground select-none">
              {label}
            </span>
          )}
        </label>

        {helperText && !error && (
          <p id={helperId} className="ml-8 text-sm text-muted-foreground">
            {helperText}
          </p>
        )}

        {error && errorMessage && (
          <p id={errorId} className="ml-8 text-sm text-red-600">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';`,
        types: `export interface CheckboxProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string | React.ReactNode;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  indeterminate?: boolean;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  [
    'w-5 h-5 rounded border-2',
    'transition-all duration-150',
    'cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]',
    'disabled:cursor-not-allowed',
    'checked:bg-[#005196] checked:border-[#005196]',
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
  selector: 'ux4g-checkbox',
  template: \`
    <div class="flex flex-col gap-1">
      <label [class]="getLabelClasses()">
        <div class="relative flex items-center">
          <input
            type="checkbox"
            [checked]="checked"
            [disabled]="disabled"
            [attr.aria-invalid]="error"
            [class]="getCheckboxClasses()"
            (change)="handleChange($event)"
          />
          
          <svg
            *ngIf="checked && !indeterminate"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          
          <svg
            *ngIf="indeterminate"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>

        <span *ngIf="label" class="text-foreground select-none">
          {{ label }}
        </span>
      </label>

      <p *ngIf="helperText && !error" class="ml-8 text-sm text-muted-foreground">
        {{ helperText }}
      </p>

      <p *ngIf="error && errorMessage" class="ml-8 text-sm text-red-600">
        {{ errorMessage }}
      </p>
    </div>
  \`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() error = false;
  @Input() errorMessage?: string;
  @Input() disabled = false;
  @Input() indeterminate = false;
  
  @Output() checkedChange = new EventEmitter<boolean>();
  
  checked = false;
  
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  getLabelClasses(): string {
    const base = 'flex items-center gap-3';
    const disabled = this.disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer';
    return \`\${base} \${disabled}\`;
  }

  getCheckboxClasses(): string {
    const base = 'w-5 h-5 rounded border-2 appearance-none transition-all cursor-pointer';
    const focus = 'focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
    const state = this.checked ? 'bg-blue-600 border-blue-600' : 'bg-card border-border';
    const error = this.error ? 'border-red-500' : '';
    
    return [base, focus, state, error].join(' ');
  }

  handleChange(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.checked = checked;
    this.onChange(checked);
    this.onTouched();
    this.checkedChange.emit(checked);
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
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
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, FormsModule],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }`,
        types: `export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  indeterminate?: boolean;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-checkbox> custom element",
        html: "<ux4g-checkbox variant=\"primary\" size=\"md\"><!-- Checkbox --></ux4g-checkbox>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Checkbox',
          variants: 'default, indeterminate',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-checkbox/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Checkbox',
          variants: 'default, indeterminate, disabled',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/checkbox',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Checkboxes',
          variants: 'default, conditional reveal',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/checkboxes/',
        },
        {
          system: 'Chakra UI',
          component: 'Checkbox',
          variants: 'default, indeterminate, custom icon',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/checkbox',
        },
        {
          system: 'Radix UI',
          component: 'Checkbox',
          variants: 'checked, unchecked, indeterminate',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/checkbox',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 20x20px touch target with adequate spacing (WCAG 2.5.5)',
          '2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)',
          'Color contrast ratios meet 3:1 for UI components (WCAG 1.4.11)',
          'Does not rely on color alone for state indication (WCAG 1.4.1)',
          'Semantic HTML input element with type="checkbox"',
          'Proper label associations for all checkboxes',
          'aria-invalid attribute for error states',
          'aria-describedby linking to helper and error text',
          'Indeterminate state properly communicated to assistive technologies',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to checkbox' },
          { key: 'Shift + Tab', action: 'Move focus away from checkbox' },
          { key: 'Space', action: 'Toggle checkbox state' },
        ],
        screenReader: [
          'Announces checkbox role',
          'Announces label text',
          'Announces checked/unchecked state',
          'Announces indeterminate state when applicable',
          'Announces required state when applicable',
          'Announces disabled state when applicable',
          'Reads helper text via aria-describedby',
          'Reads error message via aria-describedby',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/checkbox.json',
        mappings: [
          { property: 'Size', token: 'base.size', value: '20px' },
          { property: 'Border Width', token: 'base.borderWidth', value: '2px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Border Color (Unchecked)', token: 'border.default', value: '#D1D5DB (Gray 300)' },
          { property: 'Border Color (Error)', token: 'border.error', value: '#EF4444 (Red 500)' },
          { property: 'Background (Checked)', token: 'background.checked', value: '#005196 (Navy 500)' },
          { property: 'Check Icon Color', token: 'icon.color', value: '#FFFFFF (White)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
        ],
      }}
    />
  );
}
