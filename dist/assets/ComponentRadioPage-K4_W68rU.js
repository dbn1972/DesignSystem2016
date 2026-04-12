import{j as e,R as p}from"./index-wYwTiNL-.js";import{C as u}from"./ComponentDocumentation-DKnXH-Pi.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const t=({name:o,options:a,disabled:r=!1})=>{var i;const[s,l]=p.useState(((i=a[0])==null?void 0:i.value)||"");return e.jsx("div",{className:"space-y-3",children:a.map((n,d)=>e.jsxs("label",{className:`flex items-center gap-3 ${r?"opacity-60 cursor-not-allowed":"cursor-pointer"}`,children:[e.jsx("div",{className:"relative",children:e.jsx("input",{type:"radio",name:o,value:n.value,checked:s===n.value,onChange:c=>!r&&l(c.target.value),disabled:r,className:"w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:border-[#005196] checked:border-[6px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] transition-all cursor-pointer"})}),e.jsx("span",{className:"text-gray-900",children:n.label})]},d))})};function f(){return e.jsx(u,{name:"Radio",description:"Selection control that allows users to select exactly one option from a set. Essential for mutually exclusive choices in government forms and applications.",category:"Form Elements",maturity:"beta",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"value",type:"string",required:!0,description:"The value of this radio button option."},{name:"checked",type:"boolean",required:!1,description:"Controlled checked state."},{name:"name",type:"string",required:!0,description:"Name attribute for grouping radio buttons."},{name:"label",type:"string | ReactNode",required:!1,description:"Label text or element for the radio button."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the radio button is disabled."},{name:"error",type:"boolean",default:"false",required:!1,description:"Whether the radio button has an error state."},{name:"helperText",type:"string",required:!1,description:"Helper text for the individual option."},{name:"onChange",type:"(event: ChangeEvent<HTMLInputElement>) => void",required:!1,description:"Change event handler."}],examples:[{title:"Basic Radio Group",description:"Simple radio button group for single selection.",code:`import { Radio, RadioGroup } from '@ux4g/react-core';

function Example() {
  const [value, setValue] = React.useState('option1');
  
  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  );
}`,preview:e.jsx(t,{name:"basic",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]})},{title:"Payment Method Selection",description:"Radio group for selecting payment methods.",code:`import { Radio, RadioGroup } from '@ux4g/react-core';

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
}`,preview:e.jsx("div",{className:"space-y-4",children:e.jsx(t,{name:"payment",options:[{value:"upi",label:"UPI Payment"},{value:"netbanking",label:"Net Banking"},{value:"card",label:"Credit/Debit Card"}]})})},{title:"With Descriptions",description:"Radio options with detailed descriptions.",code:`import { Radio, RadioGroup } from '@ux4g/react-core';

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
}`,preview:e.jsx("div",{className:"space-y-4",children:[{value:"aadhaar",label:"Aadhaar Card",helper:"12-digit unique identification number"},{value:"pan",label:"PAN Card",helper:"Permanent Account Number"},{value:"voter",label:"Voter ID",helper:"Electoral Photo Identity Card"}].map((o,a)=>e.jsxs("div",{children:[e.jsxs("label",{className:"flex items-center gap-3 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"docs",className:"w-5 h-5 border-2 border-gray-300 rounded-full"}),e.jsx("span",{className:"text-gray-900",children:o.label})]}),e.jsx("p",{className:"ml-8 mt-1 text-sm text-gray-600",children:o.helper})]},a))})},{title:"Disabled State",description:"Disabled radio buttons prevent interaction.",code:`import { Radio, RadioGroup } from '@ux4g/react-core';

function Example() {
  return (
    <RadioGroup>
      <Radio value="enabled" label="Enabled option" />
      <Radio value="disabled" label="Disabled option" disabled />
    </RadioGroup>
  );
}`,preview:e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{name:"disabled",options:[{value:"enabled",label:"Enabled option"}]}),e.jsx(t,{name:"disabled2",options:[{value:"disabled",label:"Disabled option"}],disabled:!0})]})}],reactCode:{component:`import React, { forwardRef, createContext, useContext } from 'react';
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
            <span className="text-gray-900 select-none">
              {label}
            </span>
          )}
        </label>

        {helperText && (
          <p className="ml-8 text-sm text-gray-600">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';`,types:`export interface RadioGroupProps {
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
}`,variants:`import { cva } from 'class-variance-authority';

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

        <span *ngIf="label" class="text-gray-900 select-none">
          {{ label }}
        </span>
      </label>

      <p *ngIf="helperText" class="ml-8 text-sm text-gray-600">
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
    const state = this.checked ? 'border-blue-600 border-[6px]' : 'border-gray-300';
    const error = this.error ? 'border-red-500' : '';
    
    return [base, focus, state, error].join(' ');
  }

  handleChange(event: Event): void {
    if (!this.disabled) {
      this.checkedChange.emit(this.value);
    }
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioComponent, RadioGroupComponent } from './radio.component';

@NgModule({
  declarations: [RadioComponent, RadioGroupComponent],
  imports: [CommonModule, FormsModule],
  exports: [RadioComponent, RadioGroupComponent]
})
export class RadioModule { }`,types:`export interface RadioProps {
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
}`},comparisons:[{system:"Material UI (Google)",component:"Radio",variants:"default, with label, custom icon",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-radio-button/"},{system:"Ant Design (Alibaba)",component:"Radio",variants:"default, button style, disabled",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/radio"},{system:"GOV.UK Design System",component:"Radios",variants:"default, inline, conditional reveal",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/radios/"},{system:"Chakra UI",component:"Radio",variants:"default, sizes, color schemes",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/radio"},{system:"Radix UI",component:"Radio Group",variants:"checked, unchecked",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://www.radix-ui.com/primitives/docs/components/radio-group"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 20x20px touch target (WCAG 2.5.5)","2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)","Color contrast ratios meet 3:1 for UI components (WCAG 1.4.11)","Does not rely on color alone (visual fill indicator)",'Semantic HTML input with type="radio"',"Proper label associations",'RadioGroup uses role="radiogroup"',"Arrow key navigation between radio options"],keyboardSupport:[{key:"Tab",action:"Move focus to radio group"},{key:"Arrow Up/Down",action:"Navigate between radio options in group"},{key:"Arrow Left/Right",action:"Navigate between radio options in group"},{key:"Space",action:"Select focused radio button"}],screenReader:["Announces radio button role","Announces label text","Announces checked/unchecked state",'Announces position in group (e.g., "1 of 3")',"Announces disabled state when applicable","Reads helper text when provided","Announces radio group context"]},tokens:{file:"/tokens/components/radio.json",mappings:[{property:"Size",token:"base.size",value:"20px"},{property:"Border Width (Unchecked)",token:"base.borderWidth",value:"2px"},{property:"Border Width (Checked)",token:"base.borderWidth.checked",value:"6px"},{property:"Border Radius",token:"base.borderRadius",value:"50% (full circle)"},{property:"Border Color (Unchecked)",token:"border.default",value:"#D1D5DB (Gray 300)"},{property:"Border Color (Checked)",token:"border.checked",value:"#005196 (Navy 500)"},{property:"Border Color (Error)",token:"border.error",value:"#EF4444 (Red 500)"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"}]}})}export{f as default};
