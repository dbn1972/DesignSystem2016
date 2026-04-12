import{j as e,R as n}from"./index-LBJNeHTL.js";import{C as l}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const t=({label:o,disabled:s=!1})=>{const[i,a]=n.useState(!1);return e.jsxs("label",{className:`flex items-center gap-3 ${s?"opacity-60 cursor-not-allowed":"cursor-pointer"}`,children:[e.jsx("button",{type:"button",role:"switch","aria-checked":i,onClick:()=>!s&&a(!i),disabled:s,className:`relative w-11 h-6 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] ${i?"bg-[#138808]":"bg-gray-300"} ${!s&&"cursor-pointer"}`,children:e.jsx("span",{className:`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${i?"translate-x-5":"translate-x-0"}`})}),e.jsx("span",{className:"text-gray-900",children:o})]})};function u(){return e.jsx(l,{name:"Switch",description:"Toggle control for binary on/off states. Provides immediate feedback for settings and preferences in government applications.",category:"Form Elements",maturity:"beta",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"checked",type:"boolean",required:!1,description:"Controlled checked state of the switch."},{name:"defaultChecked",type:"boolean",required:!1,description:"Uncontrolled default checked state."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the switch is disabled."},{name:"label",type:"string | ReactNode",required:!1,description:"Label text or element for the switch."},{name:"helperText",type:"string",required:!1,description:"Helper text to guide the user."},{name:"labelPosition",type:"'left' | 'right'",default:"'right'",required:!1,description:"Position of the label relative to switch."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the switch control."},{name:"className",type:"string",required:!1,description:"Additional CSS classes."},{name:"onChange",type:"(checked: boolean) => void",required:!1,description:"Change event handler."}],examples:[{title:"Basic Switch",description:"Simple on/off toggle with label.",code:`import { Switch } from '@ux4g/react-core';

function Example() {
  const [enabled, setEnabled] = React.useState(false);
  
  return (
    <Switch
      label="Enable notifications"
      checked={enabled}
      onChange={setEnabled}
    />
  );
}`,preview:e.jsx(t,{label:"Enable notifications"})},{title:"Switch Group",description:"Multiple switches for different settings.",code:`import { Switch } from '@ux4g/react-core';

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
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{label:"Email notifications"}),e.jsx(t,{label:"SMS notifications"}),e.jsx(t,{label:"Push notifications"})]})},{title:"With Helper Text",description:"Switch with additional context.",code:`import { Switch } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <Switch
        label="Two-factor authentication"
        helperText="Add an extra layer of security to your account"
      />
    </div>
  );
}`,preview:e.jsxs("div",{children:[e.jsx(t,{label:"Two-factor authentication"}),e.jsx("p",{className:"ml-14 mt-1 text-sm text-gray-600",children:"Add an extra layer of security to your account"})]})},{title:"Disabled State",description:"Disabled switches prevent interaction.",code:`import { Switch } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" checked disabled />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{label:"Disabled off",disabled:!0}),e.jsx(t,{label:"Disabled on",disabled:!0})]})},{title:"Label Positions",description:"Label can be positioned left or right of switch.",code:`import { Switch } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Switch label="Label on right (default)" labelPosition="right" />
      <Switch label="Label on left" labelPosition="left" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{label:"Label on right (default)"}),e.jsxs("div",{className:"flex items-center gap-3 flex-row-reverse justify-end",children:[e.jsx("span",{className:"text-gray-900",children:"Label on left"}),e.jsx("button",{type:"button",className:"relative w-11 h-6 rounded-full transition-colors bg-gray-300",children:e.jsx("span",{className:"absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm"})})]})]})}],reactCode:{component:`import React, { forwardRef } from 'react';
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
          isChecked ? 'bg-[#138808]' : 'bg-gray-300',
          disabled && 'opacity-60 cursor-not-allowed',
          className
        )}
        {...props}
      >
        <span
          className={cn(
            'absolute top-0.5 left-0.5 bg-white rounded-full shadow-sm transition-transform',
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
            <span className="text-gray-900 select-none">
              {label}
            </span>
          )}
        </label>

        {helperText && (
          <p className={cn(
            'text-sm text-gray-600',
            labelPosition === 'right' ? 'ml-14' : 'mr-14'
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';`,types:`export interface SwitchProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string | React.ReactNode;
  helperText?: string;
  labelPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  onChange?: (checked: boolean) => void;
}`,variants:`import { cva } from 'class-variance-authority';

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
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
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

        <span *ngIf="label" class="text-gray-900 select-none">
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
    const base = 'absolute top-0.5 left-0.5 bg-white rounded-full shadow-sm transition-transform';
    const size = this.size === 'sm' ? 'w-4 h-4' : this.size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
    const translate = this.checked 
      ? (this.size === 'sm' ? 'translate-x-4' : this.size === 'lg' ? 'translate-x-6' : 'translate-x-5')
      : 'translate-x-0';
    
    return [base, size, translate].join(' ');
  }

  getHelperTextClasses(): string {
    const base = 'text-sm text-gray-600';
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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';

@NgModule({
  declarations: [SwitchComponent],
  imports: [CommonModule],
  exports: [SwitchComponent]
})
export class SwitchModule { }`,types:`export type SwitchSize = 'sm' | 'md' | 'lg';
export type LabelPosition = 'left' | 'right';

export interface SwitchProps {
  checked?: boolean;
  label?: string;
  helperText?: string;
  disabled?: boolean;
  labelPosition?: LabelPosition;
  size?: SwitchSize;
}`},comparisons:[{system:"Material UI (Google)",component:"Switch",variants:"default, with label, sizes",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-switch/"},{system:"Ant Design (Alibaba)",component:"Switch",variants:"default, disabled, loading, sizes",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/switch"},{system:"GOV.UK Design System",component:"N/A",variants:"Uses radios/checkboxes instead",accessibility:"N/A",documentation:"N/A",link:"https://design-system.service.gov.uk/"},{system:"Chakra UI",component:"Switch",variants:"default, sizes, color schemes",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/switch"},{system:"Radix UI",component:"Switch",variants:"checked, unchecked",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://www.radix-ui.com/primitives/docs/components/switch"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 24x44px touch target (WCAG 2.5.5)","2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)","Color contrast ratios meet 3:1 for UI components (WCAG 1.4.11)","Does not rely on color alone for state indication (visual thumb position)",'Semantic button element with role="switch"',"aria-checked attribute properly indicates state","Proper label associations","Clear visual state indication (thumb position)"],keyboardSupport:[{key:"Tab",action:"Move focus to switch"},{key:"Shift + Tab",action:"Move focus away from switch"},{key:"Space",action:"Toggle switch state"},{key:"Enter",action:"Toggle switch state"}],screenReader:["Announces switch role","Announces label text","Announces checked/unchecked state (on/off)","Announces state changes when toggled","Announces disabled state when applicable","Reads helper text when provided"]},tokens:{file:"/tokens/components/switch.json",mappings:[{property:"Width (Medium)",token:"base.width.md",value:"44px"},{property:"Height (Medium)",token:"base.height.md",value:"24px"},{property:"Thumb Size (Medium)",token:"thumb.size.md",value:"20px"},{property:"Border Radius",token:"base.borderRadius",value:"9999px (full)"},{property:"Background (Off)",token:"background.off",value:"#D1D5DB (Gray 300)"},{property:"Background (On)",token:"background.on",value:"#138808 (Green 600)"},{property:"Thumb Color",token:"thumb.color",value:"#FFFFFF (White)"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"}]}})}export{u as default};
