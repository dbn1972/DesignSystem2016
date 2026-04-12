import{j as e,R as c,h as l}from"./index-LBJNeHTL.js";import{C as d}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const t=({label:a,disabled:o=!1,indeterminate:s=!1})=>{const[r,n]=c.useState(!1);return e.jsxs("label",{className:`flex items-center gap-3 ${o?"opacity-60 cursor-not-allowed":"cursor-pointer"}`,children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:i=>!o&&n(i.target.checked),disabled:o,className:`w-5 h-5 border-2 rounded appearance-none transition-all ${r?"bg-[#005196] border-[#005196]":"bg-white border-gray-300"} ${!o&&"cursor-pointer"} focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]`}),r&&e.jsx(l,{size:16,className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none"}),s&&!r&&e.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-0.5 bg-[#005196] pointer-events-none"})]}),e.jsx("span",{className:"text-gray-900",children:a})]})};function x(){return e.jsx(d,{name:"Checkbox",description:"Selection control that allows users to select one or more options from a set. Essential for forms, settings, and multi-select interfaces in government services.",category:"Form Elements",maturity:"beta",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"checked",type:"boolean",required:!1,description:"Controlled checked state of the checkbox."},{name:"defaultChecked",type:"boolean",required:!1,description:"Uncontrolled default checked state."},{name:"indeterminate",type:"boolean",default:"false",required:!1,description:'Indeterminate state (used for "select all" checkboxes when some items are selected).'},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the checkbox is disabled."},{name:"error",type:"boolean",default:"false",required:!1,description:"Whether the checkbox has an error state."},{name:"label",type:"string | ReactNode",required:!1,description:"Label text or element for the checkbox."},{name:"helperText",type:"string",required:!1,description:"Helper text to guide the user."},{name:"errorMessage",type:"string",required:!1,description:"Error message to display."},{name:"required",type:"boolean",default:"false",required:!1,description:"Whether the checkbox is required."},{name:"className",type:"string",required:!1,description:"Additional CSS classes."},{name:"onChange",type:"(event: ChangeEvent<HTMLInputElement>) => void",required:!1,description:"Change event handler."}],examples:[{title:"Basic Checkbox",description:"Simple checkbox with label.",code:`import { Checkbox } from '@ux4g/react-core';

function Example() {
  const [checked, setChecked] = React.useState(false);
  
  return (
    <Checkbox
      label="I agree to terms and conditions"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}`,preview:e.jsx(t,{label:"I agree to terms and conditions"})},{title:"Checkbox Group",description:"Multiple checkboxes for selecting multiple options.",code:`import { Checkbox } from '@ux4g/react-core';

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
}`,preview:e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{label:"Email notifications"}),e.jsx(t,{label:"SMS notifications"}),e.jsx(t,{label:"Push notifications"})]})},{title:"Indeterminate State",description:'Used for "select all" when some child items are selected.',code:`import { Checkbox } from '@ux4g/react-core';

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
}`,preview:e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{label:"Select all",indeterminate:!0}),e.jsxs("div",{className:"pl-6 space-y-2",children:[e.jsx(t,{label:"Option 1"}),e.jsx(t,{label:"Option 2"}),e.jsx(t,{label:"Option 3"})]})]})},{title:"Disabled State",description:"Disabled checkboxes prevent user interaction.",code:`import { Checkbox } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" checked disabled />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{label:"Disabled unchecked",disabled:!0}),e.jsx(t,{label:"Disabled checked",disabled:!0})]})},{title:"With Helper Text",description:"Checkbox with additional context.",code:`import { Checkbox } from '@ux4g/react-core';

function Example() {
  return (
    <Checkbox
      label="Subscribe to newsletter"
      helperText="You can unsubscribe at any time"
    />
  );
}`,preview:e.jsxs("div",{children:[e.jsx(t,{label:"Subscribe to newsletter"}),e.jsx("p",{className:"ml-8 mt-1 text-sm text-gray-600",children:"You can unsubscribe at any time"})]})}],reactCode:{component:`import React, { forwardRef, useEffect, useRef } from 'react';
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
            <span className="text-gray-900 select-none">
              {label}
            </span>
          )}
        </label>

        {helperText && !error && (
          <p id={helperId} className="ml-8 text-sm text-gray-600">
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

Checkbox.displayName = 'Checkbox';`,types:`export interface CheckboxProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string | React.ReactNode;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  indeterminate?: boolean;
}`,variants:`import { cva } from 'class-variance-authority';

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
        false: 'border-gray-300',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
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

        <span *ngIf="label" class="text-gray-900 select-none">
          {{ label }}
        </span>
      </label>

      <p *ngIf="helperText && !error" class="ml-8 text-sm text-gray-600">
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
    const state = this.checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300';
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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, FormsModule],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }`,types:`export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  indeterminate?: boolean;
}`},comparisons:[{system:"Material UI (Google)",component:"Checkbox",variants:"default, indeterminate",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-checkbox/"},{system:"Ant Design (Alibaba)",component:"Checkbox",variants:"default, indeterminate, disabled",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/checkbox"},{system:"GOV.UK Design System",component:"Checkboxes",variants:"default, conditional reveal",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/checkboxes/"},{system:"Chakra UI",component:"Checkbox",variants:"default, indeterminate, custom icon",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/checkbox"},{system:"Radix UI",component:"Checkbox",variants:"checked, unchecked, indeterminate",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://www.radix-ui.com/primitives/docs/components/checkbox"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 20x20px touch target with adequate spacing (WCAG 2.5.5)","2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)","Color contrast ratios meet 3:1 for UI components (WCAG 1.4.11)","Does not rely on color alone for state indication (WCAG 1.4.1)",'Semantic HTML input element with type="checkbox"',"Proper label associations for all checkboxes","aria-invalid attribute for error states","aria-describedby linking to helper and error text","Indeterminate state properly communicated to assistive technologies"],keyboardSupport:[{key:"Tab",action:"Move focus to checkbox"},{key:"Shift + Tab",action:"Move focus away from checkbox"},{key:"Space",action:"Toggle checkbox state"}],screenReader:["Announces checkbox role","Announces label text","Announces checked/unchecked state","Announces indeterminate state when applicable","Announces required state when applicable","Announces disabled state when applicable","Reads helper text via aria-describedby","Reads error message via aria-describedby"]},tokens:{file:"/tokens/components/checkbox.json",mappings:[{property:"Size",token:"base.size",value:"20px"},{property:"Border Width",token:"base.borderWidth",value:"2px"},{property:"Border Radius",token:"base.borderRadius",value:"4px"},{property:"Border Color (Unchecked)",token:"border.default",value:"#D1D5DB (Gray 300)"},{property:"Border Color (Error)",token:"border.error",value:"#EF4444 (Red 500)"},{property:"Background (Checked)",token:"background.checked",value:"#005196 (Navy 500)"},{property:"Check Icon Color",token:"icon.color",value:"#FFFFFF (White)"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"}]}})}export{x as default};
