import{e as r,j as e,d as s,b as p}from"./index-wYwTiNL-.js";import{C as u}from"./ComponentDocumentation-DKnXH-Pi.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]],g=r("file-question",x);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],h=r("loader-circle",f),t=({inline:n=!1,minHeight:o,children:a,as:l="div",className:c="",...i})=>{const m=n?"span":l,d=n?"inline-flex items-center justify-center":"flex items-center justify-center";return e.jsx(m,{className:`${d} ${c}`,style:{minHeight:o||(n?void 0:"200px"),...i.style},...i,children:a})};function w(){return e.jsx(u,{name:"Center",description:"Utility component for centering content both horizontally and vertically. Simplifies layout patterns for loading states, empty states, icons, modal content, and error messages with accessibility built-in.",category:"Layout",maturity:"stable",tier:"foundations",since:"v1.0.0",updated:"v2.3.0",props:[{name:"inline",type:"boolean",default:"false",required:!1,description:"Whether to center inline (span with inline-flex) vs block (div with flex). Use inline for centering within text or inline contexts."},{name:"children",type:"ReactNode",required:!0,description:"Content to be centered."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with centering classes."},{name:"as",type:"'div' | 'section' | 'article' | 'main' | 'span'",default:"'div'",required:!1,description:"The HTML element type to render. Use semantic elements for better accessibility."},{name:"minHeight",type:"string | number",required:!1,description:'Minimum height of the container. Useful for full-page centers or ensuring adequate space. Accepts CSS values (e.g., "100vh", "400px", 300).'}],examples:[{title:"Centered Icon",description:"Center a single icon or graphic element.",code:`import { Center } from '@ux4g/react-core';
import { CheckCircle } from 'lucide-react';

function Example() {
  return (
    <Center className="bg-gray-50 border border-gray-200 rounded">
      <CheckCircle size={48} className="text-green-600" />
    </Center>
  );
}`,preview:e.jsx(t,{className:"bg-gray-50 border border-gray-200 rounded",children:e.jsx(s,{size:48,className:"text-green-600"})})},{title:"Loading State",description:"Display a centered loading spinner with message.",code:`import { Center } from '@ux4g/react-core';
import { Loader2 } from 'lucide-react';

function Example() {
  return (
    <Center className="bg-white" minHeight="300px">
      <div className="flex flex-col items-center gap-3">
        <Loader2 size={40} className="text-blue-600 animate-spin" />
        <p className="text-gray-600">Loading your data...</p>
      </div>
    </Center>
  );
}`,preview:e.jsx(t,{className:"bg-white border border-gray-200 rounded",minHeight:"300px",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(h,{size:40,className:"text-blue-600 animate-spin"}),e.jsx("p",{className:"text-gray-600",children:"Loading your data..."})]})})},{title:"Empty State",description:"Center empty state messaging with icon and action.",code:`import { Center } from '@ux4g/react-core';
import { FileQuestion } from 'lucide-react';

function Example() {
  return (
    <Center className="bg-gray-50" minHeight="400px">
      <div className="flex flex-col items-center gap-4 max-w-md text-center">
        <FileQuestion size={64} className="text-gray-400" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">No documents found</h3>
          <p className="text-gray-600 mt-1">
            Upload your first document to get started.
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Upload Document
        </button>
      </div>
    </Center>
  );
}`,preview:e.jsx(t,{className:"bg-gray-50 border border-gray-200 rounded",minHeight:"400px",children:e.jsxs("div",{className:"flex flex-col items-center gap-4 max-w-md text-center",children:[e.jsx(g,{size:64,className:"text-gray-400"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"No documents found"}),e.jsx("p",{className:"text-gray-600 mt-1",children:"Upload your first document to get started."})]}),e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]",children:"Upload Document"})]})})},{title:"Modal Content",description:"Center content within a modal dialog.",code:`import { Center } from '@ux4g/react-core';
import { AlertCircle } from 'lucide-react';

function Example() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
      <Center minHeight="200px">
        <div className="flex flex-col items-center gap-4 text-center">
          <AlertCircle size={56} className="text-amber-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Confirm Action
            </h2>
            <p className="text-gray-600 mt-2">
              Are you sure you want to proceed with this action?
            </p>
          </div>
          <div className="flex gap-3 mt-2">
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Confirm
            </button>
          </div>
        </div>
      </Center>
    </div>
  );
}`,preview:e.jsx("div",{className:"bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto",children:e.jsx(t,{minHeight:"200px",children:e.jsxs("div",{className:"flex flex-col items-center gap-4 text-center",children:[e.jsx(p,{size:56,className:"text-amber-500"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Confirm Action"}),e.jsx("p",{className:"text-gray-600 mt-2",children:"Are you sure you want to proceed with this action?"})]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx("button",{className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]",children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]",children:"Confirm"})]})]})})})},{title:"Centered Text",description:"Center text content in a semantic element.",code:`import { Center } from '@ux4g/react-core';

function Example() {
  return (
    <Center as="section" className="bg-blue-50 py-12">
      <div className="max-w-2xl px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to UX4Gov
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Building accessible, consistent government digital services.
        </p>
      </div>
    </Center>
  );
}`,preview:e.jsx(t,{as:"section",className:"bg-blue-50 border border-blue-200 rounded py-12",children:e.jsxs("div",{className:"max-w-2xl px-4 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Welcome to UX4Gov"}),e.jsx("p",{className:"text-lg text-gray-600 mt-4",children:"Building accessible, consistent government digital services."})]})})},{title:"Full Page Center",description:"Center content to fill the entire viewport height.",code:`import { Center } from '@ux4g/react-core';
import { CheckCircle } from 'lucide-react';

function Example() {
  return (
    <Center as="main" minHeight="100vh">
      <div className="flex flex-col items-center gap-4 text-center">
        <CheckCircle size={72} className="text-green-600" />
        <h1 className="text-2xl font-bold text-gray-900">
          Application Submitted
        </h1>
        <p className="text-gray-600 max-w-md">
          Your application has been successfully submitted.
          You will receive a confirmation email shortly.
        </p>
      </div>
    </Center>
  );
}`,preview:e.jsx(t,{as:"main",minHeight:"400px",className:"bg-gradient-to-b from-green-50 to-white border border-green-200 rounded",children:e.jsxs("div",{className:"flex flex-col items-center gap-4 text-center",children:[e.jsx(s,{size:72,className:"text-green-600"}),e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Application Submitted"}),e.jsx("p",{className:"text-gray-600 max-w-md px-4",children:"Your application has been successfully submitted. You will receive a confirmation email shortly."})]})})}],reactCode:{component:`import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { CenterProps } from './Center.types';

export const Center = forwardRef<HTMLElement, CenterProps>(
  (
    {
      children,
      className,
      inline = false,
      as: Component = 'div',
      minHeight,
      style,
      ...props
    },
    ref
  ) => {
    const ElementType = inline ? 'span' : Component;

    const baseClasses = inline
      ? 'inline-flex items-center justify-center'
      : 'flex items-center justify-center';

    const styles = {
      ...style,
      ...(minHeight && { minHeight }),
    };

    return (
      <ElementType
        ref={ref as any}
        className={cn(baseClasses, className)}
        style={styles}
        {...props}
      >
        {children}
      </ElementType>
    );
  }
);

Center.displayName = 'Center';`,types:`import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';

export interface CenterProps extends HTMLAttributes<HTMLElement> {
  /**
   * Content to be centered
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether to center inline (span) vs block (div)
   * @default false
   */
  inline?: boolean;

  /**
   * The HTML element type to render
   * @default 'div'
   */
  as?: ElementType;

  /**
   * Minimum height of the container
   * Accepts CSS values (e.g., "100vh", "400px", 300)
   */
  minHeight?: string | number;

  /**
   * Custom inline styles
   */
  style?: CSSProperties;
}`,variants:`// Center doesn't use CVA variants as it's a simple layout utility
// The component uses direct className composition for flexibility

export const centerClasses = {
  block: 'flex items-center justify-center',
  inline: 'inline-flex items-center justify-center',
} as const;`},angularCode:{component:`import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-center',
  template: \`
    <ng-container [ngSwitch]="inline">
      <span
        *ngSwitchCase="true"
        class="inline-flex items-center justify-center"
        [class]="className"
        [style.min-height]="minHeight"
      >
        <ng-content></ng-content>
      </span>

      <div
        *ngSwitchDefault
        class="flex items-center justify-center"
        [class]="className"
        [style.min-height]="minHeight"
      >
        <ng-content></ng-content>
      </div>
    </ng-container>
  \`,
  styles: [\`
    :host {
      display: contents;
    }
  \`]
})
export class CenterComponent {
  @Input() inline = false;
  @Input() className = '';
  @Input() minHeight?: string;
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterComponent } from './center.component';

@NgModule({
  declarations: [CenterComponent],
  imports: [CommonModule],
  exports: [CenterComponent]
})
export class CenterModule { }`,types:`export interface CenterConfig {
  inline?: boolean;
  className?: string;
  minHeight?: string;
}`},comparisons:[{system:"Chakra UI",component:"Center",variants:"Simple utility component",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/center"},{system:"Material UI",component:"Box (with centering props)",variants:"Flexible with sx prop",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-box/"},{system:"Bootstrap",component:"d-flex justify-content-center align-items-center",variants:"Utility classes",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://getbootstrap.com/docs/5.0/utilities/flex/"},{system:"Mantine",component:"Center",variants:"Simple utility with inline option",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://mantine.dev/core/center/"},{system:"Tailwind CSS",component:"flex items-center justify-center",variants:"Utility classes",accessibility:"N/A (utility framework)",documentation:"Comprehensive",link:"https://tailwindcss.com/docs/justify-content"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['Semantic HTML elements supported via "as" prop for proper document structure',"Does not interfere with keyboard navigation or focus management","Maintains normal document flow for screen readers","Supports all ARIA attributes through standard HTML props","No hardcoded dimensions that could clip content or cause overflow issues","Compatible with reduced motion preferences (no animations)","Works with browser zoom and text scaling","Maintains logical content order regardless of visual centering"],keyboardSupport:[{key:"N/A",action:"Component is layout-only and does not intercept keyboard events"}],screenReader:["Announces content normally based on semantic element (div, section, etc.)","Does not add any additional announcements or roles","Content order in DOM matches visual order",'Use semantic "as" prop values (section, main, article) for better navigation landmarks']},tokens:{file:"/tokens/layout/center.json",mappings:[{property:"Display (Block)",token:"layout.center.display.block",value:"flex"},{property:"Display (Inline)",token:"layout.center.display.inline",value:"inline-flex"},{property:"Align Items",token:"layout.center.alignItems",value:"center"},{property:"Justify Content",token:"layout.center.justifyContent",value:"center"},{property:"Default Min Height",token:"layout.center.minHeight.default",value:"auto"},{property:"Full Viewport",token:"layout.center.minHeight.fullViewport",value:"100vh"}]}})}export{w as default};
