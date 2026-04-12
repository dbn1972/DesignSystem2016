import{j as e,r as x,h as y}from"./index-BYMLq1ET.js";import{C as f}from"./ComponentDocumentation-CxrYZXwp.js";import{C as h}from"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const n=({code:o,language:b="text",inline:p=!1,showLineNumbers:m=!1,showCopyButton:i=!1,filename:t,size:a="md",maxHeight:s,...r})=>{const[l,c]=x.useState(!1),u=()=>{navigator.clipboard.writeText(o),c(!0),setTimeout(()=>c(!1),2e3)};return p?e.jsx("code",{className:"inline-flex items-center rounded bg-gray-100 border border-gray-300 font-mono text-gray-900 "+(a==="sm"?"px-1.5 py-0.5 text-xs":a==="lg"?"px-2.5 py-1 text-base":"px-2 py-0.5 text-sm"),...r,children:o}):e.jsxs("div",{className:"relative rounded-lg border border-gray-300 bg-gray-50",...r,children:[(t||i)&&e.jsxs("div",{className:"flex items-center justify-between border-b border-gray-300 bg-gray-100 px-4 py-2",children:[t&&e.jsx("span",{className:"text-sm font-medium text-gray-700",children:t}),!t&&e.jsx("div",{}),i&&e.jsx("button",{onClick:u,className:"inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500","aria-label":l?"Copied":"Copy code",children:l?e.jsxs(e.Fragment,{children:[e.jsx(y,{size:14}),e.jsx("span",{children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(h,{size:14}),e.jsx("span",{children:"Copy"})]})})]}),e.jsx("div",{className:"overflow-auto p-4",style:s?{maxHeight:s}:void 0,children:e.jsx("pre",{className:"font-mono "+(a==="sm"?"text-xs":a==="lg"?"text-base":"text-sm"),children:m?e.jsx("code",{children:o.split(`
`).map((g,d)=>e.jsxs("div",{className:"table-row",children:[e.jsx("span",{className:"table-cell select-none pr-4 text-right text-gray-500 w-8",children:d+1}),e.jsx("span",{className:"table-cell text-gray-900",children:g})]},d))}):e.jsx("code",{className:"text-gray-900",children:o})})})]})};function B(){return e.jsx(f,{name:"Code Block",description:"Display formatted code snippets, reference numbers, IDs, and monospaced text with syntax highlighting. Essential for showing application reference IDs, Aadhaar numbers, PAN cards, transaction codes, API responses, and configuration examples across government services.",category:"Content Display",maturity:"beta",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"code",type:"string",required:!0,description:"The code or text content to display. Can be single-line or multi-line."},{name:"language",type:"'typescript' | 'javascript' | 'json' | 'html' | 'css' | 'python' | 'java' | 'bash' | 'text'",default:"'text'",required:!1,description:"Programming language for syntax highlighting. Used for code snippets and technical documentation."},{name:"inline",type:"boolean",default:"false",required:!1,description:"Render as inline code within text flow. Use for reference numbers, IDs, and short technical terms."},{name:"showLineNumbers",type:"boolean",default:"false",required:!1,description:"Display line numbers on the left side. Useful for code review and technical documentation."},{name:"showCopyButton",type:"boolean",default:"false",required:!1,description:"Show a copy-to-clipboard button. Essential for reference IDs, API keys, and code snippets."},{name:"filename",type:"string",required:!1,description:"Display a filename or title in the header. Helps identify configuration files or API endpoints."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Font size variant. Small (12px), Medium (14px), Large (16px)."},{name:"maxHeight",type:"string",required:!1,description:'Maximum height with scrolling. Example: "200px" or "50vh". Prevents long code from dominating the page.'},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with component classes."}],examples:[{title:"Inline Code",description:"Use inline code for reference numbers, IDs, and technical terms within text.",code:`import { CodeBlock } from '@ux4g/react-core';

function Example() {
  return (
    <p>
      Your application ID is{" "}
      <CodeBlock code="APP-2024-MH-00123456" inline />
      {" "}and reference number is{" "}
      <CodeBlock code="REF-987654321" inline />
    </p>
  );
}`,preview:e.jsx("div",{className:"space-y-4",children:e.jsxs("p",{className:"text-gray-900",children:["Your application ID is"," ",e.jsx(n,{code:"APP-2024-MH-00123456",inline:!0})," ","and reference number is"," ",e.jsx(n,{code:"REF-987654321",inline:!0})]})})},{title:"Code Block with Line Numbers",description:"Display multi-line code with line numbers for technical documentation.",code:`import { CodeBlock } from '@ux4g/react-core';

function Example() {
  const code = 'function validateAadhaar(number) {\\n  const regex = /^[2-9]{1}[0-9]{11}$/;\\n  return regex.test(number);\\n}';
  
  return (
    <CodeBlock
      code={code}
      language="javascript"
      showLineNumbers
    />
  );
}`,preview:e.jsx(n,{code:`function validateAadhaar(number) {
  const regex = /^[2-9]{1}[0-9]{11}$/;
  return regex.test(number);
}`,language:"javascript",showLineNumbers:!0})},{title:"With Copy Button",description:"Add a copy button for easy copying of reference IDs, API keys, and code snippets.",code:`import { CodeBlock } from '@ux4g/react-core';

function Example() {
  return (
    <CodeBlock
      code="curl -X POST https://api.gov.in/v1/verify \\\\\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\\\\n  -d 'aadhaar=123456789012'"
      language="bash"
      showCopyButton
      filename="API Request"
    />
  );
}`,preview:e.jsx(n,{code:`curl -X POST https://api.gov.in/v1/verify \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -d 'aadhaar=123456789012'`,language:"bash",showCopyButton:!0,filename:"API Request"})},{title:"Government Reference IDs",description:"Display formatted government IDs with proper spacing and copy functionality.",code:`import { CodeBlock } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Aadhaar Number
        </label>
        <CodeBlock
          code="2345 6789 0123"
          inline
          size="lg"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          PAN Card Number
        </label>
        <CodeBlock
          code="ABCDE1234F"
          inline
          size="lg"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Transaction ID
        </label>
        <CodeBlock
          code="TXN20240411MH0012345678"
          inline
          size="lg"
        />
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Aadhaar Number"}),e.jsx(n,{code:"2345 6789 0123",inline:!0,size:"lg"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"PAN Card Number"}),e.jsx(n,{code:"ABCDE1234F",inline:!0,size:"lg"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Transaction ID"}),e.jsx(n,{code:"TXN20240411MH0012345678",inline:!0,size:"lg"})]})]})},{title:"JSON API Response",description:"Display formatted JSON responses from government APIs.",code:`import { CodeBlock } from '@ux4g/react-core';

function Example() {
  const jsonResponse = '{
  "status": "success",
  "applicationId": "APP-2024-MH-00123456",
  "applicant": {
    "name": "Rajesh Kumar",
    "aadhaar": "XXXX-XXXX-0123",
    "pan": "ABCDE1234F"
  },
  "submittedAt": "2024-04-11T10:30:00Z",
  "referenceNumber": "REF-987654321"
}';
  
  return (
    <CodeBlock
      code={jsonResponse}
      language="json"
      showLineNumbers
      showCopyButton
      filename="Application Response"
      maxHeight="300px"
    />
  );
}`,preview:e.jsx(n,{code:`{
  "status": "success",
  "applicationId": "APP-2024-MH-00123456",
  "applicant": {
    "name": "Rajesh Kumar",
    "aadhaar": "XXXX-XXXX-0123",
    "pan": "ABCDE1234F"
  },
  "submittedAt": "2024-04-11T10:30:00Z",
  "referenceNumber": "REF-987654321"
}`,language:"json",showLineNumbers:!0,showCopyButton:!0,filename:"Application Response",maxHeight:"300px"})},{title:"Size Variants",description:"Three size variants for different use cases and visual hierarchy.",code:`import { CodeBlock } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <CodeBlock code="Small code: APP-2024-001" inline size="sm" />
      <CodeBlock code="Medium code: APP-2024-002" inline size="md" />
      <CodeBlock code="Large code: APP-2024-003" inline size="lg" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(n,{code:"Small code: APP-2024-001",inline:!0,size:"sm"})}),e.jsx("div",{children:e.jsx(n,{code:"Medium code: APP-2024-002",inline:!0,size:"md"})}),e.jsx("div",{children:e.jsx(n,{code:"Large code: APP-2024-003",inline:!0,size:"lg"})})]})},{title:"Configuration File",description:"Display configuration files with syntax highlighting and copy functionality.",code:`import { CodeBlock } from '@ux4g/react-core';

function Example() {
  const configCode = '// Government Service Configuration
const config = {
  apiEndpoint: "https://api.gov.in/v1",
  timeout: 30000,
  retryAttempts: 3,
  aadhaarValidation: true,
  panValidation: true,
  allowedStates: ["MH", "KA", "DL", "TN"],
  dateFormat: "DD-MM-YYYY"
};';
  
  return (
    <CodeBlock
      code={configCode}
      language="javascript"
      showLineNumbers
      showCopyButton
      filename="config.js"
    />
  );
}`,preview:e.jsx(n,{code:`// Government Service Configuration
const config = {
  apiEndpoint: "https://api.gov.in/v1",
  timeout: 30000,
  retryAttempts: 3,
  aadhaarValidation: true,
  panValidation: true,
  allowedStates: ["MH", "KA", "DL", "TN"],
  dateFormat: "DD-MM-YYYY"
};`,language:"javascript",showLineNumbers:!0,showCopyButton:!0,filename:"config.js"})},{title:"Multi-Language Support",description:"Support for multiple programming languages with appropriate syntax highlighting.",code:`import { CodeBlock } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold mb-2">Python</h4>
        <CodeBlock
          code={'import re\\n\\ndef validate_aadhaar(number):\\n    pattern = r"^[2-9]{1}[0-9]{11}$"\\n    return bool(re.match(pattern, number))'}
          language="python"
          showLineNumbers
        />
      </div>
      
      <div>
        <h4 className="text-sm font-semibold mb-2">Java</h4>
        <CodeBlock
          code={'public class AadhaarValidator {\\n    public static boolean validate(String number) {\\n        return number.matches("^[2-9]{1}[0-9]{11}$");\\n    }\\n}'}
          language="java"
          showLineNumbers
        />
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold mb-2 text-gray-900",children:"Python"}),e.jsx(n,{code:`import re

def validate_aadhaar(number):
    pattern = r"^[2-9]{1}[0-9]{11}$"
    return bool(re.match(pattern, number))`,language:"python",showLineNumbers:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold mb-2 text-gray-900",children:"Java"}),e.jsx(n,{code:`public class AadhaarValidator {
    public static boolean validate(String number) {
        return number.matches("^[2-9]{1}[0-9]{11}$");
    }
}`,language:"java",showLineNumbers:!0})]})]})}],reactCode:{component:`import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { codeBlockVariants } from './codeBlock.variants';
import { CodeBlockProps } from './CodeBlock.types';
import { Copy, Check } from 'lucide-react';

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      code,
      language = 'text',
      inline = false,
      showLineNumbers = false,
      showCopyButton = false,
      filename,
      size = 'md',
      maxHeight,
      className,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    if (inline) {
      return (
        <code
          className={cn(
            codeBlockVariants({ inline: true, size }),
            className
          )}
          {...props}
        >
          {code}
        </code>
      );
    }

    const lines = code.split('\\n');

    return (
      <div
        ref={ref}
        className={cn('relative rounded-lg border border-gray-300 bg-gray-50', className)}
        {...props}
      >
        {(filename || showCopyButton) && (
          <div className="flex items-center justify-between border-b border-gray-300 bg-gray-100 px-4 py-2">
            {filename && (
              <span className="text-sm font-medium text-gray-700">
                {filename}
              </span>
            )}
            {!filename && <div />}
            {showCopyButton && (
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <Check size={14} aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}
        <div
          className="overflow-auto p-4"
          style={maxHeight ? { maxHeight } : undefined}
          role="region"
          aria-label={filename ? filename + ' code' : 'Code block'}
        >
          <pre
            className={cn(
              'font-mono',
              size === 'sm' && 'text-xs',
              size === 'md' && 'text-sm',
              size === 'lg' && 'text-base'
            )}
          >
            {showLineNumbers ? (
              <code>
                {lines.map((line, index) => (
                  <div key={index} className="table-row">
                    <span className="table-cell select-none pr-4 text-right text-gray-500 w-8">
                      {index + 1}
                    </span>
                    <span className="table-cell text-gray-900">{line}</span>
                  </div>
                ))}
              </code>
            ) : (
              <code className="text-gray-900">{code}</code>
            )}
          </pre>
        </div>
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';`,types:`export interface CodeBlockProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  code: string;
  language?: 'typescript' | 'javascript' | 'json' | 'html' | 'css' | 'python' | 'java' | 'bash' | 'text';
  inline?: boolean;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  filename?: string;
  size?: 'sm' | 'md' | 'lg';
  maxHeight?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const codeBlockVariants = cva(
  [
    'font-mono',
  ],
  {
    variants: {
      inline: {
        true: [
          'inline-flex',
          'items-center',
          'rounded',
          'bg-gray-100',
          'border',
          'border-gray-300',
          'text-gray-900',
        ],
        false: [
          'block',
        ],
      },
      size: {
        sm: [],
        md: [],
        lg: [],
      },
    },
    compoundVariants: [
      {
        inline: true,
        size: 'sm',
        class: 'px-1.5 py-0.5 text-xs',
      },
      {
        inline: true,
        size: 'md',
        class: 'px-2 py-0.5 text-sm',
      },
      {
        inline: true,
        size: 'lg',
        class: 'px-2.5 py-1 text-base',
      },
      {
        inline: false,
        size: 'sm',
        class: 'text-xs',
      },
      {
        inline: false,
        size: 'md',
        class: 'text-sm',
      },
      {
        inline: false,
        size: 'lg',
        class: 'text-base',
      },
    ],
    defaultVariants: {
      inline: false,
      size: 'md',
    },
  }
);

export type CodeBlockVariantProps = VariantProps<typeof codeBlockVariants>;`},angularCode:{component:`import { Component, Input } from '@angular/core';

type CodeBlockLanguage = 'typescript' | 'javascript' | 'json' | 'html' | 'css' | 'python' | 'java' | 'bash' | 'text';
type CodeBlockSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ux4g-code-block',
  template: \`
    <code
      *ngIf="inline"
      [class]="getInlineClasses()"
    >
      {{ code }}
    </code>

    <div
      *ngIf="!inline"
      class="relative rounded-lg border border-gray-300 bg-gray-50"
      [attr.role]="'region'"
      [attr.aria-label]="filename ? filename + ' code' : 'Code block'"
    >
      <div
        *ngIf="filename || showCopyButton"
        class="flex items-center justify-between border-b border-gray-300 bg-gray-100 px-4 py-2"
      >
        <span *ngIf="filename" class="text-sm font-medium text-gray-700">
          {{ filename }}
        </span>
        <div *ngIf="!filename"></div>
        <button
          *ngIf="showCopyButton"
          (click)="handleCopy()"
          class="inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          [attr.aria-label]="copied ? 'Copied to clipboard' : 'Copy code to clipboard'"
          [attr.aria-live]="'polite'"
        >
          <ng-container *ngIf="copied">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied</span>
          </ng-container>
          <ng-container *ngIf="!copied">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span>
          </ng-container>
        </button>
      </div>
      <div
        class="overflow-auto p-4"
        [style.max-height]="maxHeight"
      >
        <pre [class]="getPreClasses()"><code *ngIf="!showLineNumbers" class="text-gray-900">{{ code }}</code><code *ngIf="showLineNumbers"><div *ngFor="let line of getLines(); let i = index" class="table-row"><span class="table-cell select-none pr-4 text-right text-gray-500 w-8">{{ i + 1 }}</span><span class="table-cell text-gray-900">{{ line }}</span></div></code></pre>
      </div>
    </div>
  \`,
  styleUrls: ['./code-block.component.css']
})
export class CodeBlockComponent {
  @Input() code!: string;
  @Input() language: CodeBlockLanguage = 'text';
  @Input() inline = false;
  @Input() showLineNumbers = false;
  @Input() showCopyButton = false;
  @Input() filename?: string;
  @Input() size: CodeBlockSize = 'md';
  @Input() maxHeight?: string;

  copied = false;

  getInlineClasses(): string {
    const baseClasses = 'inline-flex items-center rounded bg-gray-100 border border-gray-300 font-mono text-gray-900';
    const sizeClasses = {
      sm: 'px-1.5 py-0.5 text-xs',
      md: 'px-2 py-0.5 text-sm',
      lg: 'px-2.5 py-1 text-base'
    };
    return baseClasses + ' ' + sizeClasses[this.size];
  }

  getPreClasses(): string {
    const baseClasses = 'font-mono';
    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    };
    return baseClasses + ' ' + sizeClasses[this.size];
  }

  getLines(): string[] {
    return this.code.split('\\n');
  }

  async handleCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.code);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block.component';

@NgModule({
  declarations: [CodeBlockComponent],
  imports: [CommonModule],
  exports: [CodeBlockComponent]
})
export class CodeBlockModule { }`,types:`export type CodeBlockLanguage = 'typescript' | 'javascript' | 'json' | 'html' | 'css' | 'python' | 'java' | 'bash' | 'text';
export type CodeBlockSize = 'sm' | 'md' | 'lg';`},comparisons:[{system:"Material UI (Google)",component:"Code (Typography)",variants:"inline, block",accessibility:"WCAG 2.1 AA",documentation:"Basic",link:"https://mui.com/material-ui/react-typography/"},{system:"Ant Design (Alibaba)",component:"Typography.Text (code)",variants:"inline code, code block",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/typography"},{system:"GOV.UK Design System",component:"Code",variants:"inline, block",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/styles/typography/"},{system:"Chakra UI",component:"Code",variants:"inline, block with colorScheme",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/code"},{system:"GitHub Primer",component:"Code Block",variants:"inline, block, with syntax highlighting",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://primer.style/design/components/code-block"},{system:"Radix UI",component:"Code (as styled primitive)",variants:"Custom (unstyled)",accessibility:"WCAG 2.1 AAA",documentation:"Minimal",link:"https://www.radix-ui.com/primitives"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Semantic HTML code and pre elements for proper structure (WCAG 1.3.1)","Sufficient color contrast for code text (4.5:1 minimum) against background (WCAG 1.4.3)","Monospace font for clear distinction between code and regular text (WCAG 1.4.8)","Copy button meets minimum 44x44px touch target size for mobile accessibility (WCAG 2.5.5)",'role="region" and aria-label on code blocks for screen reader context (WCAG 4.1.2)',"Keyboard accessible copy button with visible focus indicator (WCAG 2.4.7)",'aria-live="polite" announces copy success to screen readers (WCAG 4.1.3)',"Line numbers are select-none to prevent copying (UX best practice)","Scrollable overflow for long code with keyboard navigation support (WCAG 2.1.1)"],keyboardSupport:[{key:"Tab",action:"Focus copy button (when showCopyButton is true)"},{key:"Shift + Tab",action:"Move focus away from copy button"},{key:"Enter",action:"Activate copy button"},{key:"Space",action:"Activate copy button"},{key:"Arrow Keys",action:"Scroll through code content when focused"}],screenReader:['Announces "Code block" or filename when entering region',"Reads code content as plain text (preserves line breaks)",'Announces "Copy code to clipboard" button label','Announces "Copied to clipboard" confirmation via aria-live',"Line numbers are hidden from screen readers (not announced)",'Icons have aria-hidden="true" to prevent redundant announcements']},tokens:{file:"/tokens/components/code-block.json",mappings:[{property:"Font Family",token:"base.fontFamily.mono",value:"Monaco, Consolas, monospace"},{property:"Font Size (Small)",token:"base.fontSize.xs",value:"12px"},{property:"Font Size (Medium)",token:"base.fontSize.sm",value:"14px"},{property:"Font Size (Large)",token:"base.fontSize.base",value:"16px"},{property:"Background Color",token:"semantic.surface.secondary",value:"#F9FAFB (Gray 50)"},{property:"Border Color",token:"semantic.border.default",value:"#D1D5DB (Gray 300)"},{property:"Text Color",token:"semantic.text.primary",value:"#111827 (Gray 900)"},{property:"Line Number Color",token:"semantic.text.tertiary",value:"#6B7280 (Gray 500)"},{property:"Border Radius",token:"base.borderRadius.lg",value:"8px"},{property:"Padding Inline (Small)",token:"base.padding.inline.xs",value:"6px"},{property:"Padding Inline (Medium)",token:"base.padding.inline.sm",value:"8px"},{property:"Header Background",token:"semantic.surface.tertiary",value:"#F3F4F6 (Gray 100)"}]},useCases:[{title:"Application Reference Numbers",description:"Display application IDs and reference numbers for citizen tracking.",example:'<CodeBlock code="APP-2024-MH-00123456" inline size="lg" />'},{title:"Aadhaar Display",description:"Show masked or full Aadhaar numbers with proper formatting.",example:'<CodeBlock code="XXXX-XXXX-0123" inline /> or <CodeBlock code="2345 6789 0123" inline />'},{title:"PAN Card Format",description:"Display PAN card numbers in the standard 10-character format.",example:'<CodeBlock code="ABCDE1234F" inline size="lg" />'},{title:"Transaction IDs",description:"Show payment and transaction reference codes for government services.",example:'<CodeBlock code="TXN20240411MH0012345678" inline showCopyButton />'},{title:"API Documentation",description:"Document API endpoints, requests, and responses for developer portals.",example:'<CodeBlock code={apiExample} language="json" showLineNumbers showCopyButton filename="API Response" />'},{title:"Configuration Examples",description:"Show configuration file examples for government service integration.",example:'<CodeBlock code={configCode} language="javascript" showLineNumbers filename="config.js" />'},{title:"Validation Code Snippets",description:"Display code examples for Aadhaar, PAN, and other ID validation.",example:'<CodeBlock code={validationCode} language="javascript" showLineNumbers showCopyButton />'},{title:"JSON Data Display",description:"Format and display JSON data from government APIs and databases.",example:'<CodeBlock code={jsonData} language="json" showLineNumbers maxHeight="400px" />'}]})}export{B as default};
