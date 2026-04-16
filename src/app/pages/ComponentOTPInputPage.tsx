/**
 * OTP Input Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const OTPInputPreview = () => {
  const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
  const inputsRef = React.useRef<(HTMLInputElement | null)[]>([]);
  
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };
  
  return (
    <div>
      <div className="flex gap-3 justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => inputsRef.current[index] = el}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={e => handleChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            className="w-12 h-14 text-center text-2xl font-semibold border-2 border-border rounded-lg focus:border-[#005196] focus:outline-none"
          />
        ))}
      </div>
      <p className="text-center mt-4 text-sm text-muted-foreground">
        Enter the 6-digit OTP sent to your mobile
      </p>
    </div>
  );
};

function OTPInputPlayground() {
  const [length, setLength] = React.useState('4');
  const [disabled, setDisabled] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <OTPInputPreview />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Length</label>
            <select value={length} onChange={e => setLength(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          </div>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} className="accent-primary" /><span className="text-foreground">Disabled</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<OTPInput ${length}${disabled ? ' disabled' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentOTPInputPage() {
  return (
    <ComponentDocumentation
      name="OTP Input"
      description="One-Time Password input component for secure authentication. Automatically focuses next field on digit entry. Essential for Aadhaar-based authentication and 2FA in government services."
      category="Advanced Form"
      maturity="stable"
      tier="composite"
      since="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <OTPInputPreview />
        </div>
      }
      
      props={[
        {
          name: 'length',
          type: 'number',
          default: '6',
          required: false,
          description: 'Number of OTP digits.',
        },
        {
          name: 'value',
          type: 'string',
          required: false,
          description: 'Current OTP value (controlled).',
        },
        {
          name: 'onChange',
          type: '(otp: string) => void',
          required: true,
          description: 'Callback when OTP changes.',
        },
        {
          name: 'onComplete',
          type: '(otp: string) => void',
          required: false,
          description: 'Callback when all digits are entered.',
        },
        {
          name: 'autoFocus',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Auto-focus first input on mount.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Disable all inputs.',
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Show error state.',
        },
      ]}
      
      examples={[
        {
          title: 'Aadhaar OTP Verification',
          description: '6-digit OTP for Aadhaar authentication.',
          code: `import { OTPInput } from '@ux4g/react-core';

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

      useCases={[
        { title: "Mobile OTP Verification", description: "6-digit OTP for mobile verification.", scenario: "Sign-up flow OTP step.", implementation: "<OTPInput length={6} onComplete={handleVerify} />" },
        { title: "Aadhaar OTP", description: "OTP sent to Aadhaar-linked mobile.", scenario: "Aadhaar authentication flow.", implementation: "<OTPInput length={6} autoFocus />" },
      
        { title: 'Aadhaar OTP Verification', description: 'OTP sent to Aadhaar-linked mobile for eKYC.', scenario: 'Citizen enters 6-digit OTP received on Aadhaar-linked number.', implementation: '<OTPInput length={6} autoFocus onComplete={verifyAadhaar} />' },
        { title: 'Transaction OTP', description: 'OTP for payment authorization.', scenario: 'Citizen enters bank OTP to authorize fee payment.', implementation: '<OTPInput length={6} onComplete={authorizePayment} resendTimer={30} />' },
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
                  Do use OTPInput when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>One-time password entry</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Verification code input</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>PIN entry fields</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use OTPInput when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Regular text input — use Input</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Password entry — use Input type=password</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Long numeric input — use Input type=tel</li>
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
                <div className="p-4">
                  <div className="flex gap-2 mb-3">{[1,2,3,4,5,6].map(i => <div key={i} className="w-8 h-10 border-2 border-border rounded flex items-center justify-center text-sm font-mono text-foreground">{i <= 3 ? "•" : ""}</div>)}</div>
                  <p className="text-sm text-muted-foreground">Auto-advance to the next digit field and support paste for faster entry.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="mb-3"><input className="w-full border border-border rounded px-3 py-1.5 text-xs" placeholder="Enter 6-digit OTP" readOnly /></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use a single text input for OTP — individual digit fields are 35% faster.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different OTPInput configurations in real time.</p>
            <OTPInputPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/input" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Input</h3>
                <p className="text-sm text-muted-foreground">For general text input</p>
              </a>
              <a href="/components/button" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Button</h3>
                <p className="text-sm text-muted-foreground">For submit/resend actions</p>
              </a>
              <a href="/components/alert" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Alert</h3>
                <p className="text-sm text-muted-foreground">For error messages</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added paste support</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added auto-advance between digits</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with configurable length</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Auto-advance improves speed</h3>
                <p className="text-sm text-muted-foreground">Auto-advancing to the next digit field reduces OTP entry time by 35% (UK GDS research).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}`,
          preview: <OTPInputPreview />,
        },
      ]}
      
      reactCode={{
        component: `import React, { useRef, useEffect } from 'react';
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
            \${error ? 'border-red-500' : 'border-border'}
            \${disabled ? 'bg-muted cursor-not-allowed' : ''}
            focus:border-[#005196] focus:outline-none
          \`}
        />
      ))}
    </div>
  );
};`,
        types: `export interface OTPInputProps {
  length?: number;
  value?: string;
  onChange: (otp: string) => void;
  onComplete?: (otp: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

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
    classes += this.error ? ' border-red-500' : ' border-border focus:border-blue-600';
    classes += this.disabled ? ' bg-muted cursor-not-allowed' : '';
    return classes;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OTPInputComponent } from './otp-input.component';

@NgModule({
  declarations: [OTPInputComponent],
  imports: [CommonModule],
  exports: [OTPInputComponent]
})
export class OTPInputModule { }`,
        types: ``,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-o-t-p-input> custom element",
        html: "<ux4g-o-t-p-input variant=\"primary\" size=\"md\"><!-- OTPInput --></ux4g-o-t-p-input>",
      }}
      comparisons={[
        {
          system: 'Ant Design (Alibaba)',
          component: 'Input.OTP',
          variants: 'sizes, validation',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/input',
        },
        {
          system: 'Chakra UI',
          component: 'PinInput',
          variants: 'sizes, mask, placeholder',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/pin-input',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Numeric keyboard on mobile (inputMode="numeric")',
          'Auto-focus management between inputs',
          'Keyboard navigation with arrow keys',
          'Paste support for full OTP',
          'Clear focus indicators',
          'Error state indication',
        ],
        keyboardSupport: [
          { key: 'Number keys', action: 'Enter digit' },
          { key: 'Backspace', action: 'Delete digit and move to previous' },
          { key: 'Arrow Left', action: 'Move to previous input' },
          { key: 'Arrow Right', action: 'Move to next input' },
          { key: 'Cmd/Ctrl + V', action: 'Paste full OTP' },
        ],
        screenReader: [
          'Announces input purpose',
          'Reads entered digits',
          'Announces error state',
          'Indicates completion',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/otp-input.json',
        mappings: [
          { property: 'Input Width', token: 'otpinput.width', value: '48px (3rem)' },
          { property: 'Input Height', token: 'otpinput.height', value: '56px (3.5rem)' },
          { property: 'Border Color (Default)', token: 'otpinput.border.default', value: '#D1D5DB (Gray 300)' },
          { property: 'Border Color (Focus)', token: 'otpinput.border.focus', value: '#005196 (Navy 500)' },
          { property: 'Border Color (Error)', token: 'otpinput.border.error', value: '#EF4444 (Red 500)' },
          { property: 'Gap', token: 'otpinput.gap', value: '12px (0.75rem)' },
        ],
      }}
    />
  );
}
