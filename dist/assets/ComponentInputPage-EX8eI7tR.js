import{j as e,S as d,k as u,R as c}from"./index-BYMLq1ET.js";import{C as m}from"./ComponentDocumentation-CxrYZXwp.js";import{L as f}from"./lock-Dorl7tNo.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const t=({type:o="text",placeholder:i,icon:r,error:a,...n})=>{const[s,l]=c.useState("");return e.jsxs("div",{className:"w-full max-w-md",children:[e.jsxs("div",{className:"relative",children:[r&&e.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:r}),e.jsx("input",{type:o,value:s,onChange:p=>l(p.target.value),placeholder:i,className:`w-full ${r?"pl-10":"px-4"} ${r?"pr-4":"px-4"} py-3 border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all ${a?"border-red-500 focus-visible:ring-red-500":"border-gray-300 focus-visible:ring-[#005196]"}`,...n})]}),a&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:a})]})};function I(){return e.jsx(m,{name:"Input",description:"Text input field for collecting user data. Supports multiple types, validation states, icons, and full accessibility compliance for government forms.",category:"Form Elements",maturity:"beta",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"type",type:"'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date'",default:"'text'",required:!1,description:"HTML input type attribute."},{name:"value",type:"string",required:!1,description:"Controlled input value."},{name:"defaultValue",type:"string",required:!1,description:"Uncontrolled input default value."},{name:"placeholder",type:"string",required:!1,description:"Placeholder text displayed when input is empty."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the input is disabled."},{name:"error",type:"boolean",default:"false",required:!1,description:"Whether the input has an error state."},{name:"errorMessage",type:"string",required:!1,description:"Error message to display below the input."},{name:"helperText",type:"string",required:!1,description:"Helper text to guide the user."},{name:"required",type:"boolean",default:"false",required:!1,description:"Whether the input is required."},{name:"iconBefore",type:"ReactNode",required:!1,description:"Icon to display before input text (left side)."},{name:"iconAfter",type:"ReactNode",required:!1,description:"Icon to display after input text (right side)."},{name:"fullWidth",type:"boolean",default:"false",required:!1,description:"Whether the input should take full width of container."},{name:"className",type:"string",required:!1,description:"Additional CSS classes."},{name:"onChange",type:"(event: ChangeEvent<HTMLInputElement>) => void",required:!1,description:"Change event handler."},{name:"onBlur",type:"(event: FocusEvent<HTMLInputElement>) => void",required:!1,description:"Blur event handler."}],examples:[{title:"Basic Input",description:"Simple text input with placeholder.",code:`import { Input } from '@ux4g/react-core';

function Example() {
  const [value, setValue] = React.useState('');
  
  return (
    <Input
      placeholder="Enter your name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`,preview:e.jsx(t,{placeholder:"Enter your name"})},{title:"Input Types",description:"Different HTML5 input types for various data.",code:`import { Input } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Input type="email" placeholder="Email address" />
      <Input type="password" placeholder="Password" />
      <Input type="tel" placeholder="Phone number" />
      <Input type="number" placeholder="Age" />
      <Input type="date" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsx(t,{type:"email",placeholder:"Email address"}),e.jsx(t,{type:"password",placeholder:"Password"}),e.jsx(t,{type:"tel",placeholder:"Phone number"}),e.jsx(t,{type:"number",placeholder:"Age"})]})},{title:"With Icons",description:"Input fields with decorative or functional icons.",code:`import { Input } from '@ux4g/react-core';
import { Search, Mail, Lock, User } from 'lucide-react';

function Example() {
  return (
    <div className="space-y-4">
      <Input 
        placeholder="Search..." 
        iconBefore={<Search size={20} />}
      />
      <Input 
        type="email"
        placeholder="Email address" 
        iconBefore={<Mail size={20} />}
      />
      <Input 
        type="password"
        placeholder="Password" 
        iconBefore={<Lock size={20} />}
      />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsx(t,{placeholder:"Search...",icon:e.jsx(d,{size:20})}),e.jsx(t,{type:"email",placeholder:"Email address",icon:e.jsx(u,{size:20})}),e.jsx(t,{type:"password",placeholder:"Password",icon:e.jsx(f,{size:20})})]})},{title:"Error State",description:"Input with validation error message.",code:`import { Input } from '@ux4g/react-core';

function Example() {
  const [email, setEmail] = React.useState('invalid-email');
  const hasError = !email.includes('@');
  
  return (
    <Input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={hasError}
      errorMessage="Please enter a valid email address"
    />
  );
}`,preview:e.jsx(t,{type:"email",placeholder:"Email address",error:"Please enter a valid email address"})},{title:"Disabled State",description:"Disabled input prevents user interaction.",code:`import { Input } from '@ux4g/react-core';

function Example() {
  return (
    <Input
      placeholder="Cannot edit this field"
      value="Read-only value"
      disabled
    />
  );
}`,preview:e.jsx(t,{placeholder:"Cannot edit this field",disabled:!0})}],reactCode:{component:`import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { inputVariants } from './input.variants';
import { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      error = false,
      errorMessage,
      helperText,
      iconBefore,
      iconAfter,
      fullWidth = false,
      disabled = false,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const helperId = React.useId();
    const errorId = React.useId();
    
    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        {iconBefore && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {iconBefore}
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          className={cn(
            inputVariants({ error, fullWidth }),
            iconBefore && 'pl-10',
            iconAfter && 'pr-10',
            className
          )}
          disabled={disabled}
          aria-invalid={error}
          aria-describedby={cn(
            helperText && helperId,
            error && errorMessage && errorId,
            ariaDescribedBy
          )}
          aria-label={ariaLabel}
          {...props}
        />
        
        {iconAfter && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {iconAfter}
          </div>
        )}
        
        {helperText && !error && (
          <p id={helperId} className="mt-2 text-sm text-gray-600">
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

Input.displayName = 'Input';`,types:`export interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  fullWidth?: boolean;
}`,variants:`import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'px-4 py-3 rounded-lg border',
    'text-base text-gray-900 placeholder:text-gray-400',
    'transition-all duration-150',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60',
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
          'border-gray-300',
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
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ux4g-input',
  template: \`
    <div [class]="fullWidth ? 'w-full' : ''">
      <div class="relative">
        <ng-content select="[iconBefore]"></ng-content>
        
        <input
          [type]="type"
          [disabled]="disabled"
          [placeholder]="placeholder"
          [value]="value"
          [attr.aria-invalid]="error"
          [attr.aria-describedby]="getAriaDescribedBy()"
          [class]="getInputClasses()"
          (input)="handleInput($event)"
          (blur)="handleBlur($event)"
        />
        
        <ng-content select="[iconAfter]"></ng-content>
      </div>
      
      <p *ngIf="helperText && !error" class="mt-2 text-sm text-gray-600">
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
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled = false;
  @Input() error = false;
  @Input() errorMessage?: string;
  @Input() helperText?: string;
  @Input() fullWidth = false;
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() blurred = new EventEmitter<Event>();
  
  value: string = '';
  
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  getInputClasses(): string {
    const baseClasses = 'ux4g-input px-4 py-3 rounded-lg border transition-all';
    const errorClasses = this.error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-300 focus:ring-blue-500';
    const widthClasses = this.fullWidth ? 'w-full' : '';
    
    return [baseClasses, errorClasses, widthClasses].join(' ');
  }

  getAriaDescribedBy(): string {
    const ids: string[] = [];
    if (this.helperText) ids.push('helper-text');
    if (this.error && this.errorMessage) ids.push('error-text');
    return ids.join(' ');
  }

  handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  handleBlur(event: Event): void {
    this.onTouched();
    this.blurred.emit(event);
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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent]
})
export class InputModule { }`,types:`export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';

export interface InputProps {
  type?: InputType;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  fullWidth?: boolean;
}`},comparisons:[{system:"Material UI (Google)",component:"TextField",variants:"outlined, filled, standard",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-text-field/"},{system:"Ant Design (Alibaba)",component:"Input",variants:"default, bordered, borderless",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/input"},{system:"GOV.UK Design System",component:"Text Input",variants:"default, error",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/text-input/"},{system:"Chakra UI",component:"Input",variants:"outline, filled, flushed, unstyled",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/input"},{system:"shadcn/ui",component:"Input",variants:"default (customizable)",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://ui.shadcn.com/docs/components/input"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 44px touch target height (WCAG 2.5.5)","2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)","Color contrast ratios meet 4.5:1 for text and placeholders (WCAG 1.4.3)","Semantic HTML input element with proper type attributes","aria-invalid attribute for error states","aria-describedby linking to helper and error text","Proper label associations (when used with Label component)","Error messages announced to screen readers","Clear visual error indicators (not relying on color alone)"],keyboardSupport:[{key:"Tab",action:"Move focus to input"},{key:"Shift + Tab",action:"Move focus away from input"},{key:"Any key",action:"Type character into input"},{key:"Backspace",action:"Delete previous character"},{key:"Delete",action:"Delete next character"},{key:"Home",action:"Move cursor to start"},{key:"End",action:"Move cursor to end"},{key:"Ctrl + A",action:"Select all text"}],screenReader:["Announces input role and current value","Announces label (via aria-label or associated <label>)","Announces placeholder when empty","Announces error state via aria-invalid","Reads helper text via aria-describedby","Reads error message via aria-describedby","Announces required state when applicable"]},tokens:{file:"/tokens/components/input.json",mappings:[{property:"Height",token:"base.height.md",value:"44px"},{property:"Padding Horizontal",token:"base.padding.horizontal.md",value:"16px"},{property:"Padding Vertical",token:"base.padding.vertical.md",value:"12px"},{property:"Border Radius",token:"base.borderRadius",value:"8px"},{property:"Font Size",token:"base.fontSize.md",value:"16px"},{property:"Border Color (Default)",token:"border.default",value:"#D1D5DB (Gray 300)"},{property:"Border Color (Error)",token:"border.error",value:"#EF4444 (Red 500)"},{property:"Focus Ring Color",token:"focus.ring.color",value:"#005196 (Navy 500)"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"}]}})}export{I as default};
