import{j as o,R as a}from"./index-LBJNeHTL.js";import{C as d}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const c=()=>{const[i,u]=a.useState(["","","","","",""]),r=a.useRef([]),l=(n,t)=>{var s;if(!/^\d*$/.test(t))return;const e=[...i];e[n]=t.slice(-1),u(e),t&&n<5&&((s=r.current[n+1])==null||s.focus())},p=(n,t)=>{var e;t.key==="Backspace"&&!i[n]&&n>0&&((e=r.current[n-1])==null||e.focus())};return o.jsxs("div",{children:[o.jsx("div",{className:"flex gap-3 justify-center",children:i.map((n,t)=>o.jsx("input",{ref:e=>r.current[t]=e,type:"text",inputMode:"numeric",maxLength:1,value:n,onChange:e=>l(t,e.target.value),onKeyDown:e=>p(t,e),className:"w-12 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-[#005196] focus:outline-none"},t))}),o.jsx("p",{className:"text-center mt-4 text-sm text-gray-600",children:"Enter the 6-digit OTP sent to your mobile"})]})};function v(){return o.jsx(d,{name:"OTP Input",description:"One-Time Password input component for secure authentication. Automatically focuses next field on digit entry. Essential for Aadhaar-based authentication and 2FA in government services.",category:"Advanced Form",maturity:"stable",tier:"composite",since:"v2.0.0",props:[{name:"length",type:"number",default:"6",required:!1,description:"Number of OTP digits."},{name:"value",type:"string",required:!1,description:"Current OTP value (controlled)."},{name:"onChange",type:"(otp: string) => void",required:!0,description:"Callback when OTP changes."},{name:"onComplete",type:"(otp: string) => void",required:!1,description:"Callback when all digits are entered."},{name:"autoFocus",type:"boolean",default:"true",required:!1,description:"Auto-focus first input on mount."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Disable all inputs."},{name:"error",type:"boolean",default:"false",required:!1,description:"Show error state."}],examples:[{title:"Aadhaar OTP Verification",description:"6-digit OTP for Aadhaar authentication.",code:`import { OTPInput } from '@ux4g/react-core';

function Example() {
  const [otp, setOtp] = React.useState('');
  
  const handleComplete = (code: string) => {
    console.log('Verifying OTP:', code);
    // Verify OTP
  };
  
  return (
    <OTPInput
      length={6}
      value={otp}
      onChange={setOtp}
      onComplete={handleComplete}
    />
  );
}`,preview:o.jsx(c,{})}],reactCode:{component:`import React, { useRef, useEffect } from 'react';
import { OTPInputProps } from './OTPInput.types';

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value = '',
  onChange,
  onComplete,
  autoFocus = true,
  disabled = false,
  error = false,
}) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const digits = value.split('').concat(Array(length).fill('')).slice(0, length);
  
  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus]);
  
  useEffect(() => {
    if (value.length === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);
  
  const handleChange = (index: number, inputValue: string) => {
    if (disabled) return;
    
    // Only allow digits
    if (!/^\\d*$/.test(inputValue)) return;
    
    const newDigits = [...digits];
    newDigits[index] = inputValue.slice(-1);
    const newValue = newDigits.join('').replace(/\\s/g, '');
    
    onChange(newValue);
    
    // Auto-focus next input
    if (inputValue && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      if (!digits[index] && index > 0) {
        const newDigits = [...digits];
        newDigits[index - 1] = '';
        onChange(newDigits.join('').replace(/\\s/g, ''));
        inputsRef.current[index - 1]?.focus();
      } else if (digits[index]) {
        const newDigits = [...digits];
        newDigits[index] = '';
        onChange(newDigits.join('').replace(/\\s/g, ''));
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\\D/g, '').slice(0, length);
    onChange(pastedData);
    
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputsRef.current[nextIndex]?.focus();
  };
  
  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={el => inputsRef.current[index] = el}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digits[index] || ''}
          onChange={e => handleChange(index, e.target.value)}
          onKeyDown={e => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          className={\`
            w-12 h-14 text-center text-2xl font-semibold rounded-lg
            border-2 transition-colors
            \${error ? 'border-red-500' : 'border-gray-300'}
            \${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
            focus:border-[#005196] focus:outline-none
          \`}
        />
      ))}
    </div>
  );
};`,types:`export interface OTPInputProps {
  length?: number;
  value?: string;
  onChange: (otp: string) => void;
  onComplete?: (otp: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
}`},angularCode:{component:`import { Component, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ux4g-otp-input',
  template: \`
    <div class="flex gap-3 justify-center">
      <input
        *ngFor="let digit of digits; let i = index"
        #otpInput
        type="text"
        inputmode="numeric"
        maxlength="1"
        [value]="digit"
        [disabled]="disabled"
        (input)="handleInput(i, $event)"
        (keydown)="handleKeydown(i, $event)"
        [class]="getInputClasses()"
      />
    </div>
  \`
})
export class OTPInputComponent implements AfterViewInit {
  @Input() length = 6;
  @Input() value = '';
  @Input() autoFocus = true;
  @Input() disabled = false;
  @Input() error = false;
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() complete = new EventEmitter<string>();
  
  @ViewChildren('otpInput') inputs!: QueryList<ElementRef<HTMLInputElement>>;
  
  digits: string[] = [];
  
  ngOnInit() {
    this.digits = Array(this.length).fill('');
    if (this.value) {
      this.digits = this.value.split('').concat(Array(this.length).fill('')).slice(0, this.length);
    }
  }
  
  ngAfterViewInit() {
    if (this.autoFocus && this.inputs.first) {
      this.inputs.first.nativeElement.focus();
    }
  }
  
  handleInput(index: number, event: any) {
    const value = event.target.value;
    if (!/^\\d*$/.test(value)) return;
    
    this.digits[index] = value.slice(-1);
    this.value = this.digits.join('');
    this.valueChange.emit(this.value);
    
    if (value && index < this.length - 1) {
      this.inputs.toArray()[index + 1].nativeElement.focus();
    }
    
    if (this.value.length === this.length) {
      this.complete.emit(this.value);
    }
  }
  
  handleKeydown(index: number, event: KeyboardEvent) {
    if (event.key === 'Backspace' && !this.digits[index] && index > 0) {
      this.inputs.toArray()[index - 1].nativeElement.focus();
    }
  }
  
  getInputClasses(): string {
    let classes = 'w-12 h-14 text-center text-2xl font-semibold border-2 rounded-lg focus:outline-none transition-colors';
    classes += this.error ? ' border-red-500' : ' border-gray-300 focus:border-blue-600';
    classes += this.disabled ? ' bg-gray-100 cursor-not-allowed' : '';
    return classes;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OTPInputComponent } from './otp-input.component';

@NgModule({
  declarations: [OTPInputComponent],
  imports: [CommonModule],
  exports: [OTPInputComponent]
})
export class OTPInputModule { }`,types:""},comparisons:[{system:"Ant Design (Alibaba)",component:"Input.OTP",variants:"sizes, validation",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/input"},{system:"Chakra UI",component:"PinInput",variants:"sizes, mask, placeholder",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/pin-input"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['Numeric keyboard on mobile (inputMode="numeric")',"Auto-focus management between inputs","Keyboard navigation with arrow keys","Paste support for full OTP","Clear focus indicators","Error state indication"],keyboardSupport:[{key:"Number keys",action:"Enter digit"},{key:"Backspace",action:"Delete digit and move to previous"},{key:"Arrow Left",action:"Move to previous input"},{key:"Arrow Right",action:"Move to next input"},{key:"Cmd/Ctrl + V",action:"Paste full OTP"}],screenReader:["Announces input purpose","Reads entered digits","Announces error state","Indicates completion"]},tokens:{file:"/tokens/components/otp-input.json",mappings:[{property:"Input Width",token:"otpinput.width",value:"48px (3rem)"},{property:"Input Height",token:"otpinput.height",value:"56px (3.5rem)"},{property:"Border Color (Default)",token:"otpinput.border.default",value:"#D1D5DB (Gray 300)"},{property:"Border Color (Focus)",token:"otpinput.border.focus",value:"#005196 (Navy 500)"},{property:"Border Color (Error)",token:"otpinput.border.error",value:"#EF4444 (Red 500)"},{property:"Gap",token:"otpinput.gap",value:"12px (0.75rem)"}]}})}export{v as default};
