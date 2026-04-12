import{j as e,l as d,i as p}from"./index-wYwTiNL-.js";import{C as c}from"./ComponentDocumentation-DKnXH-Pi.js";import{P as h}from"./printer-mogTdK8y.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const o=({above:i,below:t,breakpoint:n,children:s,className:r,ssr:m,...a})=>{const l=()=>i?i==="sm"?"hidden sm:block":i==="md"?"hidden md:block":i==="lg"?"hidden lg:block":i==="xl"?"hidden xl:block":"block":t?t==="sm"?"block sm:hidden":t==="md"?"block md:hidden":t==="lg"?"block lg:hidden":t==="xl"?"block xl:hidden":"block":n?n==="sm"?"hidden sm:block md:hidden":n==="md"?"hidden md:block lg:hidden":n==="lg"?"hidden lg:block xl:hidden":n==="xl"?"hidden xl:block":"block":"block";return e.jsx("div",{className:`${l()} ${r||""}`,...a,children:s})};function y(){return e.jsx(c,{name:"Show/Hide",description:"Responsive visibility utility component for controlling element display across different screen sizes. Enables mobile-first design patterns with declarative breakpoint-based visibility controls and server-side rendering support.",category:"Layout",maturity:"stable",tier:"foundations",since:"v1.0.0",updated:"v2.3.0",props:[{name:"above",type:"'sm' | 'md' | 'lg' | 'xl'",required:!1,description:"Show content only above the specified breakpoint. Content is hidden below and visible at and above the breakpoint."},{name:"below",type:"'sm' | 'md' | 'lg' | 'xl'",required:!1,description:"Show content only below the specified breakpoint. Content is visible below and hidden at and above the breakpoint."},{name:"breakpoint",type:"'sm' | 'md' | 'lg' | 'xl'",required:!1,description:"Show content only at the specific breakpoint range. Content is hidden outside the breakpoint range."},{name:"children",type:"ReactNode",required:!0,description:"Content to show or hide based on breakpoint conditions."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with visibility classes."},{name:"ssr",type:"boolean",default:"true",required:!1,description:"Server-side rendering support. When true, renders a safe default to prevent hydration mismatches."}],examples:[{title:"Hide on Mobile",description:"Hide content on mobile devices, show on tablet and desktop.",code:`import { ShowHide } from '@ux4g/react-core';

function Example() {
  return (
    <ShowHide above="md">
      <div className="desktop-feature">
        This advanced feature is only available on larger screens.
      </div>
    </ShowHide>
  );
}`,preview:e.jsx(o,{above:"md",children:e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded",children:[e.jsx("p",{className:"text-blue-900 font-medium",children:"Desktop Feature"}),e.jsx("p",{className:"text-sm text-blue-700",children:"This content is hidden on mobile, visible on tablet and desktop."})]})})},{title:"Show on Desktop Only",description:"Display content exclusively on desktop screens (xl breakpoint and above).",code:`import { ShowHide } from '@ux4g/react-core';

function Example() {
  return (
    <ShowHide above="xl">
      <aside className="sidebar">
        <h3>Additional Resources</h3>
        <ul>
          <li>Documentation</li>
          <li>API Reference</li>
          <li>Tutorials</li>
        </ul>
      </aside>
    </ShowHide>
  );
}`,preview:e.jsx(o,{above:"xl",children:e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"text-green-900 font-semibold mb-2",children:"Additional Resources"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"Documentation"}),e.jsx("li",{children:"API Reference"}),e.jsx("li",{children:"Tutorials"})]})]})})},{title:"Hide on Tablet",description:"Show content on mobile and desktop, but hide on tablet sizes.",code:`import { ShowHide } from '@ux4g/react-core';

function Example() {
  return (
    <>
      <ShowHide below="md">
        <div className="mobile-view">Mobile optimized content</div>
      </ShowHide>
      <ShowHide above="lg">
        <div className="desktop-view">Desktop optimized content</div>
      </ShowHide>
    </>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{below:"md",children:e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded",children:[e.jsx("p",{className:"text-purple-900 font-medium",children:"Mobile View"}),e.jsx("p",{className:"text-sm text-purple-700",children:"Visible on mobile only"})]})}),e.jsx(o,{above:"lg",children:e.jsxs("div",{className:"p-4 bg-indigo-50 border border-indigo-200 rounded",children:[e.jsx("p",{className:"text-indigo-900 font-medium",children:"Desktop View"}),e.jsx("p",{className:"text-sm text-indigo-700",children:"Visible on desktop only"})]})})]})},{title:"Responsive Navigation",description:"Show different navigation patterns based on screen size.",code:`import { ShowHide } from '@ux4g/react-core';
import { Menu } from 'lucide-react';

function Example() {
  return (
    <nav>
      <ShowHide below="lg">
        <button aria-label="Open menu">
          <Menu size={24} />
        </button>
      </ShowHide>

      <ShowHide above="lg">
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </ShowHide>
    </nav>
  );
}`,preview:e.jsxs("nav",{className:"flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded",children:[e.jsx("span",{className:"font-semibold text-gray-900",children:"Logo"}),e.jsx(o,{below:"lg",children:e.jsx("button",{className:"p-2 hover:bg-gray-200 rounded","aria-label":"Open menu",children:e.jsx(d,{size:24})})}),e.jsx(o,{above:"lg",children:e.jsxs("ul",{className:"flex gap-6 text-sm",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-gray-700 hover:text-gray-900",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-gray-700 hover:text-gray-900",children:"Services"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-gray-700 hover:text-gray-900",children:"About"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-gray-700 hover:text-gray-900",children:"Contact"})})]})})]})},{title:"Mobile Menu Toggle",description:"Toggle between compact and expanded views for mobile.",code:`import { ShowHide } from '@ux4g/react-core';
import { ChevronDown } from 'lucide-react';

function Example() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ShowHide below="md">
      <div className="mobile-menu">
        <button onClick={() => setIsOpen(!isOpen)}>
          Menu <ChevronDown />
        </button>
        {isOpen && (
          <div className="menu-items">
            <a href="/dashboard">Dashboard</a>
            <a href="/profile">Profile</a>
            <a href="/settings">Settings</a>
          </div>
        )}
      </div>
    </ShowHide>
  );
}`,preview:e.jsx(o,{below:"md",children:e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded",children:[e.jsxs("button",{className:"flex items-center gap-2 w-full p-2 bg-white border border-gray-300 rounded hover:bg-gray-50",children:[e.jsx("span",{children:"Menu"}),e.jsx(p,{size:16})]}),e.jsxs("div",{className:"mt-2 space-y-1",children:[e.jsx("a",{href:"#",className:"block p-2 text-sm hover:bg-gray-100 rounded",children:"Dashboard"}),e.jsx("a",{href:"#",className:"block p-2 text-sm hover:bg-gray-100 rounded",children:"Profile"}),e.jsx("a",{href:"#",className:"block p-2 text-sm hover:bg-gray-100 rounded",children:"Settings"})]})]})})},{title:"Print-only Content",description:"Display content exclusively when printing.",code:`import { ShowHide } from '@ux4g/react-core';
import { Printer } from 'lucide-react';

function Example() {
  return (
    <>
      <ShowHide className="print:hidden">
        <button onClick={() => window.print()}>
          <Printer size={16} /> Print Document
        </button>
      </ShowHide>

      <ShowHide className="hidden print:block">
        <div className="print-header">
          <p>Printed on: {new Date().toLocaleDateString()}</p>
          <p>https://example.gov/document/123</p>
        </div>
      </ShowHide>
    </>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{className:"print:hidden",children:e.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200",children:[e.jsx(h,{size:16}),e.jsx("span",{children:"Print Document"})]})}),e.jsx(o,{className:"hidden print:block",children:e.jsxs("div",{className:"p-4 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsxs("p",{className:"text-sm text-yellow-900",children:["Printed on: ",new Date().toLocaleDateString()]}),e.jsx("p",{className:"text-sm text-yellow-700",children:"https://example.gov/document/123"})]})})]})}],reactCode:{component:`import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { showHideVariants } from './show-hide.variants';
import { ShowHideProps } from './ShowHide.types';

export const ShowHide = forwardRef<HTMLDivElement, ShowHideProps>(
  (
    {
      children,
      className,
      above,
      below,
      breakpoint,
      ssr = true,
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    // Validation: only one prop should be set
    const propsSet = [above, below, breakpoint].filter(Boolean).length;

    if (propsSet > 1) {
      console.warn(
        'ShowHide: Only one of "above", "below", or "breakpoint" should be set. Using the first defined prop.'
      );
    }

    if (propsSet === 0) {
      console.warn(
        'ShowHide: No visibility prop set. Component will always be visible.'
      );
    }

    // Generate visibility classes based on props
    const visibilityClasses = showHideVariants({ above, below, breakpoint });

    // SSR handling: render with safe defaults to prevent hydration mismatch
    const ssrClasses = ssr ? 'ssr-safe' : '';

    return (
      <Component
        ref={ref}
        className={cn(visibilityClasses, ssrClasses, className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

ShowHide.displayName = 'ShowHide';

// Convenience components for common patterns
export const HideOnMobile = ({ children, ...props }: Omit<ShowHideProps, 'above'>) => (
  <ShowHide above="md" {...props}>
    {children}
  </ShowHide>
);

export const ShowOnMobile = ({ children, ...props }: Omit<ShowHideProps, 'below'>) => (
  <ShowHide below="md" {...props}>
    {children}
  </ShowHide>
);

export const HideOnDesktop = ({ children, ...props }: Omit<ShowHideProps, 'below'>) => (
  <ShowHide below="lg" {...props}>
    {children}
  </ShowHide>
);

export const ShowOnDesktop = ({ children, ...props }: Omit<ShowHideProps, 'above'>) => (
  <ShowHide above="lg" {...props}>
    {children}
  </ShowHide>
);`,types:`export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export interface ShowHideProps extends React.HTMLAttributes<HTMLElement> {
  /** Show content only above the specified breakpoint */
  above?: Breakpoint;

  /** Show content only below the specified breakpoint */
  below?: Breakpoint;

  /** Show content only at the specific breakpoint range */
  breakpoint?: Breakpoint;

  /** Content to show or hide */
  children: React.ReactNode;

  /** Additional CSS classes */
  className?: string;

  /** Server-side rendering support (default: true) */
  ssr?: boolean;

  /** HTML element to render as (default: 'div') */
  as?: React.ElementType;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const showHideVariants = cva('', {
  variants: {
    above: {
      sm: 'hidden sm:block',
      md: 'hidden md:block',
      lg: 'hidden lg:block',
      xl: 'hidden xl:block',
    },
    below: {
      sm: 'block sm:hidden',
      md: 'block md:hidden',
      lg: 'block lg:hidden',
      xl: 'block xl:hidden',
    },
    breakpoint: {
      sm: 'hidden sm:block md:hidden',
      md: 'hidden md:block lg:hidden',
      lg: 'hidden lg:block xl:hidden',
      xl: 'hidden xl:block',
    },
  },
});

export type ShowHideVariantProps = VariantProps<typeof showHideVariants>;`},angularCode:{component:`import { Component, Input, ElementRef, OnInit } from '@angular/core';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ux4g-show-hide',
  template: \`
    <div [class]="getClasses()">
      <ng-content></ng-content>
    </div>
  \`,
  styleUrls: ['./show-hide.component.css']
})
export class ShowHideComponent implements OnInit {
  @Input() above?: Breakpoint;
  @Input() below?: Breakpoint;
  @Input() breakpoint?: Breakpoint;
  @Input() ssr = true;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.validateProps();
  }

  private validateProps(): void {
    const propsSet = [this.above, this.below, this.breakpoint].filter(Boolean).length;

    if (propsSet > 1) {
      console.warn(
        'ShowHide: Only one of "above", "below", or "breakpoint" should be set.'
      );
    }

    if (propsSet === 0) {
      console.warn(
        'ShowHide: No visibility prop set. Component will always be visible.'
      );
    }
  }

  getClasses(): string {
    const classes: string[] = ['ux4g-show-hide'];

    if (this.above) {
      classes.push(\`ux4g-show-above-\${this.above}\`);
    } else if (this.below) {
      classes.push(\`ux4g-show-below-\${this.below}\`);
    } else if (this.breakpoint) {
      classes.push(\`ux4g-show-at-\${this.breakpoint}\`);
    }

    if (this.ssr) {
      classes.push('ux4g-ssr-safe');
    }

    return classes.join(' ');
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHideComponent } from './show-hide.component';

@NgModule({
  declarations: [ShowHideComponent],
  imports: [CommonModule],
  exports: [ShowHideComponent]
})
export class ShowHideModule { }`,types:`export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export interface ShowHideConfig {
  above?: Breakpoint;
  below?: Breakpoint;
  breakpoint?: Breakpoint;
  ssr?: boolean;
}`},comparisons:[{system:"Chakra UI",component:"Show / Hide",variants:"above, below, breakpoint props",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/show-hide"},{system:"Material UI",component:"Hidden",variants:"only, up, down props",accessibility:"WCAG 2.1 AA",documentation:"Good (deprecated in v5)",link:"https://v4.mui.com/components/hidden/"},{system:"Bootstrap",component:"Display Utilities",variants:"d-none, d-{breakpoint}-{value}",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://getbootstrap.com/docs/5.3/utilities/display/"},{system:"Tailwind CSS",component:"Display Utilities",variants:"hidden, block, {breakpoint}:hidden",accessibility:"Manual implementation",documentation:"Comprehensive",link:"https://tailwindcss.com/docs/display"},{system:"GOV.UK Design System",component:"Grid System (with display utilities)",variants:"Custom responsive classes",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://design-system.service.gov.uk/styles/layout/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Content reflow support - no horizontal scrolling at 320px width (WCAG 1.4.10)","Proper semantic HTML maintained across all breakpoints","No content is permanently hidden from assistive technologies","CSS-based visibility (display: none) properly removes content from accessibility tree","Server-side rendering support prevents layout shift and hydration issues","Respects prefers-reduced-motion for any transitions","Focus management preserved across breakpoint changes","No reliance on CSS-only content - all meaningful content is in DOM"],keyboardSupport:[{key:"Tab",action:"Navigate through visible interactive elements"},{key:"Shift + Tab",action:"Navigate backwards through visible elements"}],screenReader:["Hidden content is properly removed from accessibility tree using display: none","No aria-hidden used - content is truly hidden, not just visually hidden","Screen readers only encounter content visible at current viewport","No confusing navigation through hidden elements"]},tokens:{file:"/tokens/layout/show-hide.json",mappings:[{property:"Breakpoint SM",token:"breakpoint.sm",value:"640px"},{property:"Breakpoint MD",token:"breakpoint.md",value:"768px"},{property:"Breakpoint LG",token:"breakpoint.lg",value:"1024px"},{property:"Breakpoint XL",token:"breakpoint.xl",value:"1280px"},{property:"Display Hidden",token:"display.hidden",value:"none"},{property:"Display Block",token:"display.block",value:"block"},{property:"Display Inline",token:"display.inline",value:"inline"},{property:"Display Flex",token:"display.flex",value:"flex"}]}})}export{y as default};
