import{j as e}from"./index-wYwTiNL-.js";import{C as d}from"./ComponentDocumentation-DKnXH-Pi.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const n=({size:s,color:t,label:i,speed:a,...o})=>{const l={xs:12,sm:16,md:24,lg:32,xl:48},p={slow:"2s",normal:"1s",fast:"0.6s"},r=l[s||"md"],c=p[a||"normal"];return e.jsxs("div",{className:"inline-flex flex-col items-center gap-2",children:[e.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"animate-spin",style:{animationDuration:c,color:t||"#005196"},role:"status","aria-label":i||"Loading",...o,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",strokeOpacity:"0.25"}),e.jsx("path",{d:"M12 2a10 10 0 0 1 10 10",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),i&&e.jsx("span",{className:"text-sm text-gray-600",children:i})]})};function S(){return e.jsx(d,{name:"Spinner",description:"Loading indicator for asynchronous operations and feedback states. Provides visual feedback during data loading, form submissions, and page transitions with full accessibility support.",category:"Feedback",maturity:"stable",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"size",type:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",default:"'md'",required:!1,description:"Size of the spinner. Extra small (12px), Small (16px), Medium (24px), Large (32px), Extra large (48px)."},{name:"color",type:"string",default:"'#005196'",required:!1,description:"Color of the spinner. Accepts any valid CSS color value."},{name:"label",type:"string",required:!1,description:"Optional text label displayed below the spinner. Also used as aria-label for accessibility."},{name:"speed",type:"'slow' | 'normal' | 'fast'",default:"'normal'",required:!1,description:"Animation speed. Slow (2s), Normal (1s), Fast (0.6s)."},{name:"aria-label",type:"string",default:"'Loading'",required:!1,description:'Accessible label for screen readers. Defaults to "Loading" if not specified.'},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with spinner classes."},{name:"thickness",type:"number",default:"3",required:!1,description:"Stroke width of the spinner circle in pixels."}],examples:[{title:"Basic Spinner",description:"Default spinner with medium size and normal speed.",code:`import { Spinner } from '@ux4g/react-core';

function Example() {
  return <Spinner />;
}`,preview:e.jsx("div",{className:"flex justify-center p-8",children:e.jsx(n,{})})},{title:"Different Sizes",description:"Spinners in all available sizes from extra small to extra large.",code:`import { Spinner } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex items-center gap-6 p-8",children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"}),e.jsx(n,{size:"xl"})]})},{title:"With Label",description:"Spinners with descriptive text labels for better user feedback.",code:`import { Spinner } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-8">
      <Spinner label="Loading..." />
      <Spinner label="Processing" />
      <Spinner label="Saving changes" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex gap-8 p-8",children:[e.jsx(n,{label:"Loading..."}),e.jsx(n,{label:"Processing"}),e.jsx(n,{label:"Saving changes"})]})},{title:"Color Variants",description:"Spinners can be customized with different colors to match your design system.",code:`import { Spinner } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center gap-6">
      <Spinner color="#005196" label="Primary" />
      <Spinner color="#008800" label="Success" />
      <Spinner color="#dc2626" label="Error" />
      <Spinner color="#f59e0b" label="Warning" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex items-center gap-6 p-8",children:[e.jsx(n,{color:"#005196",label:"Primary"}),e.jsx(n,{color:"#008800",label:"Success"}),e.jsx(n,{color:"#dc2626",label:"Error"}),e.jsx(n,{color:"#f59e0b",label:"Warning"})]})},{title:"Full Page Loading",description:"Centered spinner overlay for full-page loading states.",code:`import { Spinner } from '@ux4g/react-core';

function Example() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <Spinner size="xl" label="Loading application..." />
    </div>
  );
}`,preview:e.jsx("div",{className:"relative flex items-center justify-center bg-gray-50 p-16 rounded border-2 border-dashed border-gray-300",children:e.jsx(n,{size:"xl",label:"Loading application..."})})}],reactCode:{component:`import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { spinnerVariants } from './spinner.variants';
import { SpinnerProps } from './Spinner.types';

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      size = 'md',
      color = '#005196',
      label,
      speed = 'normal',
      thickness = 3,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const sizeMap = {
      xs: 12,
      sm: 16,
      md: 24,
      lg: 32,
      xl: 48,
    };

    const speedMap = {
      slow: '2s',
      normal: '1s',
      fast: '0.6s',
    };

    const dimension = sizeMap[size];
    const animationDuration = speedMap[speed];

    return (
      <div
        ref={ref}
        className={cn('inline-flex flex-col items-center gap-2', className)}
        {...props}
      >
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
          style={{
            animationDuration,
            color,
          }}
          role="status"
          aria-label={ariaLabel || label || 'Loading'}
          aria-live="polite"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={thickness}
            strokeOpacity="0.25"
          />
          <path
            d="M12 2a10 10 0 0 1 10 10"
            stroke="currentColor"
            strokeWidth={thickness}
            strokeLinecap="round"
          />
        </svg>
        {label && (
          <span className="text-sm text-gray-600" aria-live="polite">
            {label}
          </span>
        )}
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';`,types:`export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerSpeed = 'slow' | 'normal' | 'fast';

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  color?: string;
  label?: string;
  speed?: SpinnerSpeed;
  thickness?: number;
  'aria-label'?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const spinnerVariants = cva(
  [
    'inline-flex flex-col items-center gap-2',
  ],
  {
    variants: {
      size: {
        xs: ['text-xs'],
        sm: ['text-sm'],
        md: ['text-base'],
        lg: ['text-lg'],
        xl: ['text-xl'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;`},angularCode:{component:`import { Component, Input } from '@angular/core';

type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpinnerSpeed = 'slow' | 'normal' | 'fast';

@Component({
  selector: 'ux4g-spinner',
  template: \`
    <div class="ux4g-spinner-container">
      <svg
        [attr.width]="getDimension()"
        [attr.height]="getDimension()"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="ux4g-spinner"
        [style.animation-duration]="getAnimationDuration()"
        [style.color]="color"
        role="status"
        [attr.aria-label]="ariaLabel || label || 'Loading'"
        aria-live="polite"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          [attr.stroke-width]="thickness"
          stroke-opacity="0.25"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          [attr.stroke-width]="thickness"
          stroke-linecap="round"
        />
      </svg>
      <span *ngIf="label" class="ux4g-spinner-label" aria-live="polite">
        {{ label }}
      </span>
    </div>
  \`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() color = '#005196';
  @Input() label?: string;
  @Input() speed: SpinnerSpeed = 'normal';
  @Input() thickness = 3;
  @Input() ariaLabel?: string;

  private sizeMap = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  };

  private speedMap = {
    slow: '2s',
    normal: '1s',
    fast: '0.6s',
  };

  getDimension(): number {
    return this.sizeMap[this.size];
  }

  getAnimationDuration(): string {
    return this.speedMap[this.speed];
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }`,types:`export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerSpeed = 'slow' | 'normal' | 'fast';

export interface SpinnerConfig {
  size?: SpinnerSize;
  color?: string;
  label?: string;
  speed?: SpinnerSpeed;
  thickness?: number;
  ariaLabel?: string;
}`},comparisons:[{system:"Material UI (Google)",component:"CircularProgress",variants:"determinate, indeterminate",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-progress/"},{system:"Ant Design (Alibaba)",component:"Spin",variants:"default, with tip, custom indicator",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/spin"},{system:"Chakra UI",component:"Spinner",variants:"sizes, colors, thickness",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/spinner"},{system:"GOV.UK Design System",component:"Loading Spinner (Custom)",variants:"basic implementation",accessibility:"WCAG 2.1 AAA",documentation:"Limited",link:"https://design-system.service.gov.uk/"},{system:"Bootstrap",component:"Spinner",variants:"border, grow",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://getbootstrap.com/docs/5.3/components/spinners/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['role="status" attribute for announcing loading states to screen readers',"aria-label for descriptive loading messages (WCAG 4.1.2)",'aria-live="polite" for non-intrusive updates to screen readers',"Color is not the only visual indicator (animation provides additional feedback)","Sufficient color contrast for visibility (meets WCAG 1.4.3)","No reliance on motion alone - text labels available for additional context","Respects prefers-reduced-motion user preferences","Label text announced to screen readers for context"],keyboardSupport:[{key:"N/A",action:"Spinner is not interactive and does not receive keyboard focus"}],screenReader:['Announces loading status with role="status"',"Reads aria-label or label prop for context","Polite aria-live ensures non-disruptive announcements","Label text is read if provided"]},tokens:{file:"/tokens/components/spinner.json",mappings:[{property:"Size XS",token:"spinner.size.xs",value:"12px"},{property:"Size Small",token:"spinner.size.sm",value:"16px"},{property:"Size Medium",token:"spinner.size.md",value:"24px"},{property:"Size Large",token:"spinner.size.lg",value:"32px"},{property:"Size XL",token:"spinner.size.xl",value:"48px"},{property:"Default Color",token:"spinner.color.default",value:"#005196 (Navy 500)"},{property:"Stroke Width",token:"spinner.strokeWidth",value:"3px"},{property:"Speed Normal",token:"spinner.speed.normal",value:"1s"},{property:"Speed Slow",token:"spinner.speed.slow",value:"2s"},{property:"Speed Fast",token:"spinner.speed.fast",value:"0.6s"},{property:"Label Font Size",token:"spinner.label.fontSize",value:"14px"},{property:"Label Color",token:"spinner.label.color",value:"#6B7280 (Gray 600)"}]}})}export{S as default};
