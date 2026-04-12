import{j as e,R as l}from"./index-LBJNeHTL.js";import{C as d}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const p=()=>{const[o,i]=l.useState(""),s=t=>{const r=t.replace(/\D/g,""),n=[];for(let a=0;a<r.length;a+=4)n.push(r.slice(a,a+4));return n.join(" ").slice(0,14)};return e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Aadhaar Number"}),e.jsx("input",{type:"text",value:s(o),onChange:t=>i(t.target.value.replace(/\D/g,"")),placeholder:"XXXX XXXX XXXX",maxLength:14,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005196] focus:outline-none font-mono text-lg tracking-wider"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Enter your 12-digit Aadhaar number"})]})};function X(){return e.jsx(d,{name:"Aadhaar Input",description:"Specialized input for India's Aadhaar unique identification number. Auto-formats to XXXX-XXXX-XXXX pattern, validates 12 digits, supports masking for privacy.",category:"Government Specific",maturity:"stable",tier:"composite",since:"v2.0.0",props:[{name:"value",type:"string",required:!0,description:"Aadhaar number (12 digits)."},{name:"onChange",type:"(value: string) => void",required:!0,description:"Change callback with unformatted digits."},{name:"masked",type:"boolean",default:"false",required:!1,description:"Show masked format (XXXX-XXXX-1234)."},{name:"error",type:"string",required:!1,description:"Validation error message."}],examples:[{title:"Aadhaar Verification",description:"Input with validation and formatting.",code:`import { AadhaarInput } from '@ux4g/react-core';

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
}`,preview:e.jsx(p,{})}],reactCode:{component:`import React from 'react';
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
          \${error ? 'border-red-500' : 'border-gray-300'}
          \${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        \`}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};`,types:`export interface AadhaarInputProps {
  value: string;
  onChange: (value: string) => void;
  masked?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
}`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';

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
        class="w-full px-4 py-3 border border-gray-300 rounded-lg font-mono text-lg tracking-wider focus:ring-2 focus:ring-blue-500"
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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AadhaarInputComponent } from './aadhaar-input.component';

@NgModule({
  declarations: [AadhaarInputComponent],
  imports: [CommonModule],
  exports: [AadhaarInputComponent]
})
export class AadhaarInputModule { }`,types:""},comparisons:[{system:"Custom Implementation",component:"Formatted Input",variants:"India-specific",accessibility:"WCAG 2.1 AA",documentation:"N/A",link:""}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Clear label and instructions","Error messages","Monospace font for readability","Auto-formatting"],keyboardSupport:[{key:"Number keys",action:"Enter digits"},{key:"Backspace",action:"Delete digits"}],screenReader:["Announces label","Reads formatted value","Announces errors"]},tokens:{file:"/tokens/components/aadhaar-input.json",mappings:[{property:"Font Family",token:"aadhaar.font",value:"Monospace"},{property:"Letter Spacing",token:"aadhaar.letterSpacing",value:"0.1em"}]}})}export{X as default};
