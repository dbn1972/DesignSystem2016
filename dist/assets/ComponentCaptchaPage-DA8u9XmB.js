import{j as e,r as h,p as m,E as f}from"./index-BYMLq1ET.js";import{C as y}from"./ComponentDocumentation-CxrYZXwp.js";import{S as n}from"./shield-K2szB7qG.js";import{V as o}from"./volume-2-CrNVsVcA.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const r=({type:a,difficulty:i,theme:t,children:c,...l})=>{const[p,d]=h.useState(0);return e.jsxs("div",{className:`inline-block border-2 rounded-lg p-4 ${t==="dark"?"bg-gray-800 border-gray-600":"bg-white border-gray-300"}`,...l,children:[a==="image"&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("p",{className:`text-sm font-medium ${t==="dark"?"text-gray-200":"text-gray-700"}`,children:"Select all images with traffic lights"}),e.jsx("button",{onClick:()=>d(s=>s+1),className:"p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700","aria-label":"Refresh CAPTCHA",children:e.jsx(m,{size:16,className:t==="dark"?"text-gray-300":"text-gray-600"})})]}),e.jsx("div",{className:"grid grid-cols-3 gap-1 w-64 h-64 bg-gray-200",children:[...Array(9)].map((s,u)=>e.jsx("div",{className:"bg-gray-300 hover:bg-gray-400 cursor-pointer border border-gray-400"},`${p}-${u}`))}),e.jsxs("button",{className:"flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700",children:[e.jsx(o,{size:14}),e.jsx("span",{children:"Audio challenge"})]})]}),a==="audio"&&e.jsxs("div",{className:"space-y-3 w-64",children:[e.jsx("p",{className:`text-sm font-medium ${t==="dark"?"text-gray-200":"text-gray-700"}`,children:"Type the numbers you hear"}),e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded",children:[e.jsx(o,{size:20,className:t==="dark"?"text-gray-300":"text-gray-600"}),e.jsx("button",{className:"text-sm text-blue-600 hover:text-blue-700",children:"Play audio"})]}),e.jsx("input",{type:"text",placeholder:"Enter numbers",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("button",{className:"flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700",children:[e.jsx(f,{size:14}),e.jsx("span",{children:"Visual challenge"})]})]}),a==="math"&&e.jsxs("div",{className:"space-y-3 w-64",children:[e.jsx("p",{className:`text-sm font-medium ${t==="dark"?"text-gray-200":"text-gray-700"}`,children:"Solve the math problem"}),e.jsx("div",{className:"flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded",children:e.jsxs("span",{className:`text-2xl font-bold ${t==="dark"?"text-gray-200":"text-gray-800"}`,children:[i==="easy"?"5 + 3":i==="hard"?"17 × 4":"12 - 7"," = ?"]})}),e.jsx("input",{type:"text",placeholder:"Enter answer",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a==="puzzle"&&e.jsxs("div",{className:"space-y-3 w-64",children:[e.jsx("p",{className:`text-sm font-medium ${t==="dark"?"text-gray-200":"text-gray-700"}`,children:"Slide to verify"}),e.jsxs("div",{className:"relative w-full h-12 bg-gray-200 rounded overflow-hidden",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 w-12 bg-blue-500 flex items-center justify-center cursor-move",children:e.jsx(n,{size:20,className:"text-white"})}),e.jsx("div",{className:"flex items-center justify-center h-full",children:e.jsx("span",{className:"text-sm text-gray-500",children:"Slide to verify"})})]})]}),c]})};function w(){return e.jsx(y,{name:"CAPTCHA",description:"Security component for bot prevention in government service applications. Supports multiple CAPTCHA types including image recognition, audio challenges, math problems, and puzzle verification with full accessibility compliance.",category:"Government Services",maturity:"stable",tier:"core",since:"v1.0.0",updated:"v2.3.0",props:[{name:"type",type:"'image' | 'audio' | 'math' | 'puzzle'",default:"'image'",required:!1,description:"Type of CAPTCHA challenge. Image for visual recognition, audio for hearing-based verification, math for simple arithmetic, puzzle for interactive sliding verification."},{name:"difficulty",type:"'easy' | 'medium' | 'hard'",default:"'medium'",required:!1,description:"Difficulty level of the CAPTCHA challenge. Affects complexity of images, audio clarity, or math operations."},{name:"onVerify",type:"(token: string, success: boolean) => void",required:!0,description:"Callback function triggered when verification is attempted. Returns verification token and success status."},{name:"refreshable",type:"boolean",default:"true",required:!1,description:"Whether users can request a new challenge. Required for accessibility."},{name:"audioEnabled",type:"boolean",default:"true",required:!1,description:"Whether audio alternative is available for visual challenges. Required for WCAG compliance."},{name:"accessibleAlternative",type:"boolean",default:"true",required:!1,description:"Provides accessible alternatives for users with disabilities (audio for visual, visual for audio)."},{name:"siteKey",type:"string",required:!0,description:"Site key for third-party CAPTCHA services (reCAPTCHA, hCaptcha). Obtained from service provider."},{name:"theme",type:"'light' | 'dark'",default:"'light'",required:!1,description:"Visual theme of the CAPTCHA component."},{name:"language",type:"string",default:"'en'",required:!1,description:"Language code for CAPTCHA instructions and challenges."},{name:"onExpire",type:"() => void",required:!1,description:"Callback triggered when CAPTCHA token expires (typically after 2 minutes)."},{name:"onError",type:"(error: Error) => void",required:!1,description:"Error handler for CAPTCHA loading or verification failures."}],examples:[{title:"Image CAPTCHA",description:"Traditional image-based CAPTCHA with object recognition challenge.",code:`import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      console.log('Verification successful:', token);
      // Proceed with form submission
    } else {
      console.log('Verification failed');
    }
  };

  return (
    <Captcha
      type="image"
      difficulty="medium"
      onVerify={handleVerify}
      siteKey="your-site-key"
      audioEnabled={true}
      refreshable={true}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{type:"image",difficulty:"medium",theme:"light"})})},{title:"Audio CAPTCHA",description:"Audio-based CAPTCHA for visually impaired users or as alternative to image CAPTCHA.",code:`import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      console.log('Audio verification successful:', token);
    }
  };

  return (
    <Captcha
      type="audio"
      difficulty="easy"
      onVerify={handleVerify}
      siteKey="your-site-key"
      accessibleAlternative={true}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{type:"audio",difficulty:"easy",theme:"light"})})},{title:"Math CAPTCHA",description:"Simple arithmetic challenge for basic bot prevention.",code:`import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      console.log('Math challenge solved:', token);
    }
  };

  return (
    <Captcha
      type="math"
      difficulty="easy"
      onVerify={handleVerify}
      siteKey="your-site-key"
      refreshable={true}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{type:"math",difficulty:"easy",theme:"light"})})},{title:"Puzzle CAPTCHA",description:"Interactive sliding puzzle verification for modern user experience.",code:`import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      console.log('Puzzle solved:', token);
      // Enable form submission
    }
  };

  return (
    <Captcha
      type="puzzle"
      difficulty="medium"
      onVerify={handleVerify}
      siteKey="your-site-key"
      theme="light"
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{type:"puzzle",difficulty:"medium",theme:"light"})})},{title:"reCAPTCHA v3 Integration",description:"Invisible reCAPTCHA v3 with score-based verification.",code:`import { Captcha } from '@ux4g/react-core';
import { useEffect } from 'react';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    // Send token to backend for score verification
    fetch('/api/verify-captcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.score >= 0.5) {
          console.log('reCAPTCHA v3 passed');
        } else {
          console.log('Suspicious activity detected');
        }
      });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Captcha
        type="invisible"
        version="v3"
        siteKey="your-recaptcha-v3-site-key"
        onVerify={handleVerify}
        action="submit_application"
      />
      <button type="submit">Submit Application</button>
    </form>
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"p-4 border-2 border-dashed border-gray-300 rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Invisible reCAPTCHA v3"}),e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Submit Application"})]})})},{title:"hCaptcha Integration",description:"Privacy-focused hCaptcha integration for government services.",code:`import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      // Verify token on backend
      fetch('/api/verify-hcaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.verified) {
            console.log('hCaptcha verification successful');
          }
        });
    }
  };

  const handleError = (error: Error) => {
    console.error('hCaptcha error:', error);
  };

  return (
    <Captcha
      provider="hcaptcha"
      siteKey="your-hcaptcha-site-key"
      onVerify={handleVerify}
      onError={handleError}
      theme="light"
      size="normal"
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"p-4 border-2 border-gray-300 rounded-lg bg-white",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(n,{size:20,className:"text-gray-600"}),e.jsx("p",{className:"text-sm font-medium text-gray-700",children:"hCaptcha"})]}),e.jsxs("div",{className:"w-64 h-20 bg-gray-100 rounded flex items-center justify-center",children:[e.jsx("input",{type:"checkbox",className:"mr-2"}),e.jsx("span",{className:"text-sm text-gray-600",children:"I am human"})]})]})})}],reactCode:{component:`import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { CaptchaProps } from './Captcha.types';

export const Captcha = forwardRef<HTMLDivElement, CaptchaProps>(
  (
    {
      className,
      type = 'image',
      difficulty = 'medium',
      onVerify,
      refreshable = true,
      audioEnabled = true,
      accessibleAlternative = true,
      siteKey,
      theme = 'light',
      language = 'en',
      onExpire,
      onError,
      provider = 'recaptcha',
      version = 'v2',
      size = 'normal',
      action,
      ...props
    },
    ref
  ) => {
    const captchaRef = useRef<HTMLDivElement>(null);
    const [currentType, setCurrentType] = useState(type);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
      // Load CAPTCHA script based on provider
      const loadCaptchaScript = () => {
        if (provider === 'recaptcha') {
          const script = document.createElement('script');
          script.src = \`https://www.google.com/recaptcha/api.js?hl=\${language}\`;
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
        } else if (provider === 'hcaptcha') {
          const script = document.createElement('script');
          script.src = \`https://js.hcaptcha.com/1/api.js?hl=\${language}\`;
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
        }
      };

      loadCaptchaScript();

      return () => {
        // Cleanup
      };
    }, [provider, language]);

    const handleRefresh = () => {
      setRefreshKey(prev => prev + 1);
      if (captchaRef.current && (window as any).grecaptcha) {
        (window as any).grecaptcha.reset();
      }
    };

    const toggleAlternative = () => {
      if (accessibleAlternative) {
        setCurrentType(currentType === 'image' ? 'audio' : 'image');
      }
    };

    const handleVerification = (token: string) => {
      onVerify(token, true);
    };

    const handleExpiration = () => {
      if (onExpire) {
        onExpire();
      }
    };

    const handleErrorCallback = (error: Error) => {
      if (onError) {
        onError(error);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'captcha-container',
          \`captcha-theme-\${theme}\`,
          \`captcha-type-\${currentType}\`,
          className
        )}
        {...props}
      >
        <div
          ref={captchaRef}
          className="g-recaptcha"
          data-sitekey={siteKey}
          data-theme={theme}
          data-size={size}
          data-callback={handleVerification}
          data-expired-callback={handleExpiration}
          data-error-callback={handleErrorCallback}
        />

        {refreshable && (
          <button
            type="button"
            onClick={handleRefresh}
            className="captcha-refresh"
            aria-label="Refresh CAPTCHA"
          >
            Refresh
          </button>
        )}

        {accessibleAlternative && audioEnabled && (
          <button
            type="button"
            onClick={toggleAlternative}
            className="captcha-alternative"
            aria-label={currentType === 'image' ? 'Switch to audio challenge' : 'Switch to visual challenge'}
          >
            {currentType === 'image' ? 'Audio challenge' : 'Visual challenge'}
          </button>
        )}
      </div>
    );
  }
);

Captcha.displayName = 'Captcha';`,types:`export type CaptchaType = 'image' | 'audio' | 'math' | 'puzzle' | 'invisible';
export type CaptchaDifficulty = 'easy' | 'medium' | 'hard';
export type CaptchaTheme = 'light' | 'dark';
export type CaptchaProvider = 'recaptcha' | 'hcaptcha' | 'turnstile';
export type CaptchaVersion = 'v2' | 'v3';
export type CaptchaSize = 'normal' | 'compact';

export interface CaptchaProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: CaptchaType;
  difficulty?: CaptchaDifficulty;
  onVerify: (token: string, success: boolean) => void;
  refreshable?: boolean;
  audioEnabled?: boolean;
  accessibleAlternative?: boolean;
  siteKey: string;
  theme?: CaptchaTheme;
  language?: string;
  onExpire?: () => void;
  onError?: (error: Error) => void;
  provider?: CaptchaProvider;
  version?: CaptchaVersion;
  size?: CaptchaSize;
  action?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const captchaVariants = cva(
  [
    'inline-block rounded-lg border-2',
    'transition-all duration-150 ease-in-out',
  ],
  {
    variants: {
      theme: {
        light: [
          'bg-white border-gray-300',
          'text-gray-800',
        ],
        dark: [
          'bg-gray-800 border-gray-600',
          'text-gray-200',
        ],
      },
      type: {
        image: ['p-4'],
        audio: ['p-4'],
        math: ['p-4'],
        puzzle: ['p-4'],
        invisible: ['p-0 border-0'],
      },
    },
    defaultVariants: {
      theme: 'light',
      type: 'image',
    },
  }
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

type CaptchaType = 'image' | 'audio' | 'math' | 'puzzle' | 'invisible';
type CaptchaDifficulty = 'easy' | 'medium' | 'hard';
type CaptchaTheme = 'light' | 'dark';

@Component({
  selector: 'ux4g-captcha',
  template: \`
    <div
      [class]="getCaptchaClasses()"
      [attr.data-theme]="theme"
    >
      <div
        #captchaContainer
        class="g-recaptcha"
        [attr.data-sitekey]="siteKey"
        [attr.data-theme]="theme"
        [attr.data-callback]="'onCaptchaVerify'"
        [attr.data-expired-callback]="'onCaptchaExpire'"
        [attr.data-error-callback]="'onCaptchaError'"
      ></div>

      <button
        *ngIf="refreshable"
        type="button"
        (click)="handleRefresh()"
        class="captcha-refresh"
        aria-label="Refresh CAPTCHA"
      >
        Refresh
      </button>

      <button
        *ngIf="accessibleAlternative && audioEnabled"
        type="button"
        (click)="toggleAlternative()"
        class="captcha-alternative"
      >
        {{ currentType === 'image' ? 'Audio challenge' : 'Visual challenge' }}
      </button>
    </div>
  \`,
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit, OnDestroy {
  @Input() type: CaptchaType = 'image';
  @Input() difficulty: CaptchaDifficulty = 'medium';
  @Input() refreshable = true;
  @Input() audioEnabled = true;
  @Input() accessibleAlternative = true;
  @Input() siteKey!: string;
  @Input() theme: CaptchaTheme = 'light';
  @Input() language = 'en';

  @Output() verify = new EventEmitter<{ token: string; success: boolean }>();
  @Output() expire = new EventEmitter<void>();
  @Output() error = new EventEmitter<Error>();

  currentType: CaptchaType;
  private scriptLoaded = false;

  ngOnInit(): void {
    this.currentType = this.type;
    this.loadCaptchaScript();

    // Setup global callbacks
    (window as any).onCaptchaVerify = this.handleVerify.bind(this);
    (window as any).onCaptchaExpire = this.handleExpire.bind(this);
    (window as any).onCaptchaError = this.handleError.bind(this);
  }

  ngOnDestroy(): void {
    // Cleanup
    delete (window as any).onCaptchaVerify;
    delete (window as any).onCaptchaExpire;
    delete (window as any).onCaptchaError;
  }

  private loadCaptchaScript(): void {
    if (this.scriptLoaded) return;

    const script = document.createElement('script');
    script.src = \`https://www.google.com/recaptcha/api.js?hl=\${this.language}\`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    this.scriptLoaded = true;
  }

  handleRefresh(): void {
    if ((window as any).grecaptcha) {
      (window as any).grecaptcha.reset();
    }
  }

  toggleAlternative(): void {
    if (this.accessibleAlternative) {
      this.currentType = this.currentType === 'image' ? 'audio' : 'image';
    }
  }

  handleVerify(token: string): void {
    this.verify.emit({ token, success: true });
  }

  handleExpire(): void {
    this.expire.emit();
  }

  handleError(err: Error): void {
    this.error.emit(err);
  }

  getCaptchaClasses(): string {
    const baseClasses = 'ux4g-captcha';
    const themeClass = \`ux4g-captcha-theme-\${this.theme}\`;
    const typeClass = \`ux4g-captcha-type-\${this.currentType}\`;

    return [baseClasses, themeClass, typeClass]
      .filter(Boolean)
      .join(' ');
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchaComponent } from './captcha.component';

@NgModule({
  declarations: [CaptchaComponent],
  imports: [CommonModule],
  exports: [CaptchaComponent]
})
export class CaptchaModule { }`,types:`export type CaptchaType = 'image' | 'audio' | 'math' | 'puzzle' | 'invisible';
export type CaptchaDifficulty = 'easy' | 'medium' | 'hard';
export type CaptchaTheme = 'light' | 'dark';
export type CaptchaProvider = 'recaptcha' | 'hcaptcha' | 'turnstile';`},comparisons:[{system:"Google reCAPTCHA",component:"reCAPTCHA v2/v3",variants:"Checkbox, Invisible, v3 Score",accessibility:"WCAG 2.1 AA (audio alternative)",documentation:"Comprehensive",link:"https://developers.google.com/recaptcha"},{system:"hCaptcha",component:"hCaptcha",variants:"Checkbox, Invisible, Passive",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://www.hcaptcha.com/"},{system:"Cloudflare Turnstile",component:"Turnstile",variants:"Managed, Non-interactive, Invisible",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://www.cloudflare.com/products/turnstile/"},{system:"Arkose Labs",component:"FunCaptcha",variants:"Interactive games, puzzles",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://www.arkoselabs.com/"},{system:"AWS WAF Captcha",component:"AWS WAF CAPTCHA",variants:"Puzzle, Challenge",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://aws.amazon.com/waf/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Audio alternative provided for visual challenges (WCAG 1.4.2)","Visual alternative provided for audio challenges","Keyboard navigation support for all interactive elements (WCAG 2.1.1)","Clear instructions provided before CAPTCHA challenge (WCAG 3.3.2)","Refresh/reload option available for new challenges (WCAG 2.2.3)","Sufficient color contrast for all text and controls (WCAG 1.4.3)","Focus indicators visible on all interactive elements (WCAG 2.4.7)","Time limits can be extended or disabled for users who need more time (WCAG 2.2.1)","Error messages provide clear guidance (WCAG 3.3.3)","Compatible with screen readers and assistive technologies"],keyboardSupport:[{key:"Tab",action:"Navigate between CAPTCHA elements"},{key:"Shift + Tab",action:"Navigate backwards through elements"},{key:"Enter",action:"Activate buttons and submit answers"},{key:"Space",action:"Select checkboxes and toggle options"},{key:"Arrow Keys",action:"Navigate grid-based image challenges"}],screenReader:["Announces CAPTCHA type and instructions","Describes audio playback controls and status","Announces when new challenge is loaded","Provides feedback on verification success/failure","Announces time remaining if time-limited","Alternative text for all images and controls"]},tokens:{file:"/tokens/components/captcha.json",mappings:[{property:"Container Padding",token:"base.padding.md",value:"16px"},{property:"Border Width",token:"base.borderWidth.md",value:"2px"},{property:"Border Radius",token:"base.borderRadius",value:"8px"},{property:"Light Background",token:"variant.light.background",value:"#FFFFFF"},{property:"Light Border",token:"variant.light.border",value:"#D1D5DB (Gray 300)"},{property:"Dark Background",token:"variant.dark.background",value:"#1F2937 (Gray 800)"},{property:"Dark Border",token:"variant.dark.border",value:"#4B5563 (Gray 600)"},{property:"Button Text Color",token:"semantic.interactive.text",value:"#2563EB (Blue 600)"},{property:"Button Hover Color",token:"semantic.interactive.hover",value:"#1D4ED8 (Blue 700)"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"},{property:"Focus Ring Color",token:"accessibility.focusRingColor",value:"#3B82F6 (Blue 500)"}]},governmentContext:{useCases:[{title:"Online Form Submission",description:"Prevent automated spam and fraudulent submissions on government application forms.",example:"Visa applications, permit requests, public feedback forms"},{title:"Citizen Portal Login Protection",description:"Protect user accounts from brute-force attacks and unauthorized access attempts.",example:"MyGov portals, tax filing systems, social security access"},{title:"Event and Service Booking",description:"Prevent ticket scalping and automated booking by bots for government services.",example:"Passport appointments, court hearings, vaccination slots"},{title:"Public Service Applications",description:"Ensure legitimate citizens access benefits and services, not automated bots.",example:"License renewals, welfare applications, subsidy registrations"},{title:"Voting and Survey Systems",description:"Maintain integrity of online polls, surveys, and e-voting platforms.",example:"Public consultations, citizen feedback surveys, budget voting"},{title:"Document Download Protection",description:"Prevent bulk automated downloads of sensitive or rate-limited documents.",example:"Official certificates, legal documents, public records"}],regulations:[{regulation:"WCAG 2.1 Level AA",requirement:"Must provide accessible alternatives for users with disabilities",compliance:"Audio alternative for visual CAPTCHA, visual alternative for audio CAPTCHA"},{regulation:"Section 508",requirement:"Federal systems must be accessible to people with disabilities",compliance:"Keyboard navigation, screen reader compatibility, alternative input methods"},{regulation:"GDPR/Privacy Laws",requirement:"User data must be processed lawfully and protected",compliance:"No personal data stored in CAPTCHA challenges, privacy-focused providers available"},{regulation:"ADA Compliance",requirement:"Government services must be accessible to all citizens",compliance:"Multiple CAPTCHA types accommodate different abilities and preferences"}]}})}export{w as default};
