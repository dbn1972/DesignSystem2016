/**
 * Switch Component Documentation Page
 * Complete documentation for the Switch (toggle) component
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const SwitchPreview = ({ label, disabled = false }: any) => {
  const [checked, setChecked] = React.useState(false);
  
  return (
    <label className={`flex items-center gap-3 ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => !disabled && setChecked(!checked)}
        disabled={disabled}
        className={`relative w-11 h-6 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] ${
          checked ? 'bg-green-700' : 'bg-gray-300'
        } ${!disabled && 'cursor-pointer'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-card rounded-full transition-transform shadow-sm ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <span className="text-foreground">{label}</span>
    </label>
  );
};

function SwitchPlayground() {
  const [disabled, setDisabled] = React.useState(false);
  const [size, setSize] = React.useState('sm');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <SwitchPreview label="Dark mode" disabled={disabled} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} className="accent-primary" /><span className="text-foreground">Disabled</span></label>
          <div>
            <label className="block font-semibold text-foreground mb-1">Size</label>
            <select value={size} onChange={e => setSize(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Switch${disabled ? ' disabled' : ''} ${size} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentSwitchPage() {
  return (
    <ComponentDocumentation
      name="Switch"
      description="Toggle control for binary on/off states. Provides immediate feedback for settings and preferences in government applications."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <SwitchPreview />
        </div>
      }
      
      props={[
        {
          name: 'checked',
          type: 'boolean',
          required: false,
          description: 'Controlled checked state of the switch.',
        },
        {
          name: 'defaultChecked',
          type: 'boolean',
          required: false,
          description: 'Uncontrolled default checked state.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the switch is disabled.',
        },
        {
          name: 'label',
          type: 'string | ReactNode',
          required: false,
          description: 'Label text or element for the switch.',
        },
        {
          name: 'helperText',
          type: 'string',
          required: false,
          description: 'Helper text to guide the user.',
        },
        {
          name: 'labelPosition',
          type: "'left' | 'right'",
          default: "'right'",
          required: false,
          description: 'Position of the label relative to switch.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the switch control.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
        {
          name: 'onChange',
          type: '(checked: boolean) => void',
          required: false,
          description: 'Change event handler.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Switch',
          description: 'Simple on/off toggle with label.',
          code: `import { Switch } from '@ux4g/react-core';

function Example() {
  const [enabled, setEnabled] = React.useState(false);
  
  return (
    <Switch
      label="Enable notifications"
      checked={enabled}
      onChange={setEnabled}

      useCases={[
        { title: "Dark Mode Toggle", description: "Toggle between light and dark themes.", scenario: "Header theme switcher.", implementation: "<Switch label=\"Dark mode\" checked={isDark} onChange={toggle} />" },
        { title: "Notification Preference", description: "Toggle SMS/email notifications.", scenario: "User profile notification settings.", implementation: "<Switch label=\"SMS notifications\" />" },
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
                  Do use Switch when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Immediate on/off toggles</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Settings that take effect instantly</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Binary preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Switch when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Form submissions — use Checkbox</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Multiple selections — use Checkbox group</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Mutually exclusive options — use Radio</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3"><div className="w-10 h-5 bg-[#005196] rounded-full relative"><div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" /></div><span className="text-xs text-foreground">Dark mode</span></div>
                  <p className="text-sm text-muted-foreground">Use switches for settings that take effect immediately without a save button.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3"><input type="checkbox" className="accent-[#005196]" /><span className="text-xs text-foreground">Enable notifications</span><button className="ml-2 px-2 py-0.5 text-[10px] bg-[#005196] text-white rounded">Save</button></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use switches in forms that require submission — use Checkbox instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Switch configurations in real time.</p>
            <SwitchPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/checkbox" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Checkbox</h3>
                <p className="text-sm text-muted-foreground">For form-submitted choices</p>
              </a>
              <a href="/components/radio" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Radio</h3>
                <p className="text-sm text-muted-foreground">For mutually exclusive options</p>
              </a>
              <a href="/components/button" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Button</h3>
                <p className="text-sm text-muted-foreground">For actions</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added label position option</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added size variants</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with on/off states</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Switch vs Checkbox</h3>
                <p className="text-sm text-muted-foreground">Switches should take effect immediately. If a save/submit is needed, use a checkbox instead (Material Design guidelines).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}`,
          preview: <SwitchPreview label="Enable notifications" />,
        },
        {
          title: 'Switch Group',
          description: 'Multiple switches for different settings.',
          code: `import { Switch } from '@ux4g/react-core';

function Example() {
  const [settings, setSettings] = React.useState({
    emailNotif: true,
    smsNotif: false,
    pushNotif: true,
  });
  
  return (
    <div className="space-y-4">
      <Switch
        label="Email notifications"
        checked={settings.emailNotif}
        onChange={(checked) => setSettings({ ...settings, emailNotif: checked })}
      />
      <Switch
        label="SMS notifications"
        checked={settings.smsNotif}
        onChange={(checked) => setSettings({ ...settings, smsNotif: checked })}
      />
      <Switch
        label="Push notifications"
        checked={settings.pushNotif}
        onChange={(checked) => setSettings({ ...settings, pushNotif: checked })}
      />
    </div>
  );
}`,
          preview: (
            <div className="space-y-4">
              <SwitchPreview label="Email notifications" />
              <SwitchPreview label="SMS notifications" />
              <SwitchPreview label="Push notifications" />
            </div>
          ),
        },
        {
          title: 'With Helper Text',
          description: 'Switch with additional context.',
          code: `import { Switch } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <Switch
        label="Two-factor authentication"
        helperText="Add an extra layer of security to your account"
      />
    </div>
  );
}`,
          preview: (
            <div>
              <SwitchPreview label="Two-factor authentication" />
              <p className="ml-14 mt-1 text-sm text-muted-foreground">Add an extra layer of security to your account</p>
            </div>
          ),
        },
        {
          title: 'Disabled State',
          description: 'Disabled switches prevent interaction.',
          code: `import { Switch } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" checked disabled />
    </div>
  );
}`,
          preview: (
            <div className="space-y-4">
              <SwitchPreview label="Disabled off" disabled />
              <SwitchPreview label="Disabled on" disabled />
            </div>
          ),
        },
        {
          title: 'Label Positions',
          description: 'Label can be positioned left or right of switch.',
          code: `import { Switch } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Switch label="Label on right (default)" labelPosition="right" />
      <Switch label="Label on left" labelPosition="left" />
    </div>
  );
}`,
          preview: (
            <div className="space-y-4">
              <SwitchPreview label="Label on right (default)" />
              <div className="flex items-center gap-3 flex-row-reverse justify-end">
                <span className="text-foreground">Label on left</span>
                <button
                  type="button"
                  className="relative w-11 h-6 rounded-full transition-colors bg-gray-300"
                >
                  <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-card rounded-full shadow-sm" />
                </button>
              </div>
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { switchVariants } from './switch.variants';
import { SwitchProps } from './Switch.types';

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      label,
      helperText,
      checked,
      defaultChecked,
      disabled = false,
      labelPosition = 'right',
      size = 'md',
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(
      checked ?? defaultChecked ?? false
    );

    const isChecked = checked ?? internalChecked;

    const handleChange = () => {
      if (disabled) return;
      
      const newChecked = !isChecked;
      setInternalChecked(newChecked);
      onChange?.(newChecked);
    };

    const switchElement = (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleChange}
        className={cn(
          switchVariants({ size }),
          isChecked ? 'bg-green-700' : 'bg-gray-300',
          disabled && 'opacity-60 cursor-not-allowed',
          className
        )}
        {...props}
      >
        <span
          className={cn(
            'absolute top-0.5 left-0.5 bg-card rounded-full shadow-sm transition-transform',
            size === 'sm' && 'w-4 h-4',
            size === 'md' && 'w-5 h-5',
            size === 'lg' && 'w-6 h-6',
            isChecked && size === 'sm' && 'translate-x-4',
            isChecked && size === 'md' && 'translate-x-5',
            isChecked && size === 'lg' && 'translate-x-6'
          )}
        />
      </button>
    );

    return (
      <div className="flex flex-col gap-1">
        <label
          className={cn(
            'flex items-center gap-3',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            labelPosition === 'left' && 'flex-row-reverse justify-end'
          )}
        >
          {switchElement}
          {label && (
            <span className="text-foreground select-none">
              {label}
            </span>
          )}
        </label>

        {helperText && (
          <p className={cn(
            'text-sm text-muted-foreground',
            labelPosition === 'right' ? 'ml-14' : 'mr-14'
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';`,
        types: `export interface SwitchProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string | React.ReactNode;
  helperText?: string;
  labelPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  onChange?: (checked: boolean) => void;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const switchVariants = cva(
  [
    'relative rounded-full transition-colors',
    'cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: 'w-9 h-5',
        md: 'w-11 h-6',
        lg: 'w-14 h-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ux4g-switch',
  template: \`
    <div class="flex flex-col gap-1">
      <label [class]="getLabelClasses()">
        <button
          type="button"
          role="switch"
          [attr.aria-checked]="checked"
          [disabled]="disabled"
          [class]="getSwitchClasses()"
          (click)="handleToggle()"
        >
          <span [class]="getThumbClasses()"></span>
        </button>

        <span *ngIf="label" class="text-foreground select-none">
          {{ label }}
        </span>
      </label>

      <p *ngIf="helperText" [class]="getHelperTextClasses()">
        {{ helperText }}
      </p>
    </div>
  \`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  
  @Output() checkedChange = new EventEmitter<boolean>();
  
  checked = false;
  
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  getLabelClasses(): string {
    const base = 'flex items-center gap-3';
    const cursor = this.disabled ? 'cursor-not-allowed' : 'cursor-pointer';
    const position = this.labelPosition === 'left' ? 'flex-row-reverse justify-end' : '';
    return [base, cursor, position].join(' ');
  }

  getSwitchClasses(): string {
    const base = 'relative rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
    const size = this.size === 'sm' ? 'w-9 h-5' : this.size === 'lg' ? 'w-14 h-7' : 'w-11 h-6';
    const color = this.checked ? 'bg-green-600' : 'bg-gray-300';
    const disabled = this.disabled ? 'opacity-60 cursor-not-allowed' : '';
    
    return [base, size, color, disabled].join(' ');
  }

  getThumbClasses(): string {
    const base = 'absolute top-0.5 left-0.5 bg-card rounded-full shadow-sm transition-transform';
    const size = this.size === 'sm' ? 'w-4 h-4' : this.size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
    const translate = this.checked 
      ? (this.size === 'sm' ? 'translate-x-4' : this.size === 'lg' ? 'translate-x-6' : 'translate-x-5')
      : 'translate-x-0';
    
    return [base, size, translate].join(' ');
  }

  getHelperTextClasses(): string {
    const base = 'text-sm text-muted-foreground';
    const margin = this.labelPosition === 'right' ? 'ml-14' : 'mr-14';
    return \`\${base} \${margin}\`;
  }

  handleToggle(): void {
    if (this.disabled) return;
    
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
    this.checkedChange.emit(this.checked);
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
import { SwitchComponent } from './switch.component';

@NgModule({
  declarations: [SwitchComponent],
  imports: [CommonModule],
  exports: [SwitchComponent]
})
export class SwitchModule { }`,
        types: `export type SwitchSize = 'sm' | 'md' | 'lg';
export type LabelPosition = 'left' | 'right';

export interface SwitchProps {
  checked?: boolean;
  label?: string;
  helperText?: string;
  disabled?: boolean;
  labelPosition?: LabelPosition;
  size?: SwitchSize;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-switch> custom element",
        html: "<ux4g-switch variant=\"primary\" size=\"md\"><!-- Switch --></ux4g-switch>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Switch',
          variants: 'default, with label, sizes',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-switch/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Switch',
          variants: 'default, disabled, loading, sizes',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/switch',
        },
        {
          system: 'GOV.UK Design System',
          component: 'N/A',
          variants: 'Uses radios/checkboxes instead',
          accessibility: 'N/A',
          documentation: 'N/A',
          link: 'https://design-system.service.gov.uk/',
        },
        {
          system: 'Chakra UI',
          component: 'Switch',
          variants: 'default, sizes, color schemes',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/switch',
        },
        {
          system: 'Radix UI',
          component: 'Switch',
          variants: 'checked, unchecked',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/switch',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 24x44px touch target (WCAG 2.5.5)',
          '2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)',
          'Color contrast ratios meet 3:1 for UI components (WCAG 1.4.11)',
          'Does not rely on color alone for state indication (visual thumb position)',
          'Semantic button element with role="switch"',
          'aria-checked attribute properly indicates state',
          'Proper label associations',
          'Clear visual state indication (thumb position)',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to switch' },
          { key: 'Shift + Tab', action: 'Move focus away from switch' },
          { key: 'Space', action: 'Toggle switch state' },
          { key: 'Enter', action: 'Toggle switch state' },
        ],
        screenReader: [
          'Announces switch role',
          'Announces label text',
          'Announces checked/unchecked state (on/off)',
          'Announces state changes when toggled',
          'Announces disabled state when applicable',
          'Reads helper text when provided',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/switch.json',
        mappings: [
          { property: 'Width (Medium)', token: 'base.width.md', value: '44px' },
          { property: 'Height (Medium)', token: 'base.height.md', value: '24px' },
          { property: 'Thumb Size (Medium)', token: 'thumb.size.md', value: '20px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '9999px (full)' },
          { property: 'Background (Off)', token: 'background.off', value: '#D1D5DB (Gray 300)' },
          { property: 'Background (On)', token: 'background.on', value: '#138808 (Green 600)' },
          { property: 'Thumb Color', token: 'thumb.color', value: '#FFFFFF (White)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
        ],
      }}
    />
  );
}
