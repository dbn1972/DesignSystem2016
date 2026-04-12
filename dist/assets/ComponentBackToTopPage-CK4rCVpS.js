import{j as e,r as l}from"./index-LBJNeHTL.js";import{C as y}from"./ComponentDocumentation-DvEedSJi.js";import{A as w}from"./arrow-up-Dlu6Iv-j.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const s=({position:o="bottom-right",shape:t="circle",size:n="md",label:r,showAfter:a=300,smooth:c=!0,color:p="default",...d})=>{const[m,u]=l.useState(!1);l.useEffect(()=>{const i=()=>{u(window.scrollY>a)};return window.addEventListener("scroll",i),i(),()=>window.removeEventListener("scroll",i)},[a]);const h=()=>{c?window.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0})},b=o==="bottom-right"?"bottom-4 right-4":o==="bottom-left"?"bottom-4 left-4":o==="bottom-center"?"bottom-4 left-1/2 -translate-x-1/2":"bottom-4 right-4",f=t==="circle"?"rounded-full":t==="square"?"rounded-none":t==="rounded"?"rounded-lg":"rounded-full",g=n==="sm"?"w-10 h-10":n==="lg"?"w-16 h-16":"w-12 h-12",x=p==="primary"?"bg-[#005196] text-white hover:bg-[#004178]":"bg-[#008800] text-white hover:bg-[#006600]",v=n==="sm"?16:n==="lg"?24:20;return m?e.jsxs("button",{onClick:h,className:"fixed z-50 flex items-center justify-center gap-2 border-0 shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] min-h-[44px] min-w-[44px] "+b+" "+f+" "+g+" "+x,"aria-label":"Back to top",...d,children:[e.jsx(w,{size:v}),r&&e.jsx("span",{className:"text-sm font-medium whitespace-nowrap",children:r})]}):null};function C(){return e.jsx(y,{name:"Back to Top",description:"Floating button that allows users to quickly scroll back to the top of long pages. Appears automatically after scrolling down, with customizable position, shape, and behavior. Essential for improving navigation on content-heavy government service pages.",category:"Navigation",maturity:"stable",tier:"core",since:"v1.2.0",updated:"v2.1.0",props:[{name:"showAfter",type:"number",default:"300",required:!1,description:"Scroll distance in pixels after which the button appears. Lower values show the button earlier."},{name:"position",type:"'bottom-right' | 'bottom-left' | 'bottom-center'",default:"'bottom-right'",required:!1,description:"Position of the button on the screen. Bottom-right is most common, bottom-left for RTL languages, bottom-center for centered layouts."},{name:"smooth",type:"boolean",default:"true",required:!1,description:"Whether to use smooth scrolling animation. When false, jumps instantly to top. Respects prefers-reduced-motion."},{name:"onClick",type:"() => void",required:!1,description:"Optional callback function called after scrolling to top completes."},{name:"visibilityHeight",type:"number",default:"300",required:!1,description:"Alias for showAfter. Scroll threshold in pixels for button visibility."},{name:"duration",type:"number",default:"500",required:!1,description:"Animation duration in milliseconds for smooth scrolling. Only applies when smooth is true."},{name:"shape",type:"'circle' | 'square' | 'rounded'",default:"'circle'",required:!1,description:"Visual shape of the button. Circle is most common, square for modern designs, rounded for balanced approach."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the button. Small (40px), Medium (48px), Large (64px). All meet minimum 44px touch target."},{name:"label",type:"string",required:!1,description:"Optional text label to display alongside the icon. Makes purpose clearer for some users."},{name:"color",type:"'default' | 'primary'",default:"'default'",required:!1,description:"Color scheme of the button. Default uses success green, primary uses navy blue."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with position and shape classes."},{name:"aria-label",type:"string",default:"'Back to top'",required:!1,description:"Accessible label for screen readers. Should describe the action clearly."}],examples:[{title:"Basic Button",description:"Default back to top button that appears after scrolling 300px down the page.",code:`import { BackToTop } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <BackToTop />
      {/* Your page content */}
    </div>
  );
}`,preview:e.jsxs("div",{className:"relative h-64 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Scroll down in this container to see the Back to Top button appear."}),e.jsxs("div",{className:"h-[800px] bg-gradient-to-b from-blue-50 to-blue-100 rounded p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Long Content Area"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Keep scrolling down..."}),Array.from({length:20}).map((o,t)=>e.jsxs("p",{className:"mb-4 text-sm",children:["This is paragraph ",t+1," of the long content. The Back to Top button will appear as you scroll down."]},t))]})]}),e.jsx(s,{})]})},{title:"Different Positions",description:"Back to top button can be positioned at bottom-right, bottom-left, or bottom-center.",code:`import { BackToTop } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      {/* Bottom Right (default) */}
      <BackToTop position="bottom-right" />
      
      {/* Bottom Left */}
      <BackToTop position="bottom-left" />
      
      {/* Bottom Center */}
      <BackToTop position="bottom-center" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"relative h-48 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"h-[600px] bg-gradient-to-b from-green-50 to-green-100 rounded p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Bottom Right Position"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Scroll to see button in bottom-right corner (default)."})]}),e.jsx(s,{position:"bottom-right",showAfter:50})]}),e.jsxs("div",{className:"relative h-48 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"h-[600px] bg-gradient-to-b from-purple-50 to-purple-100 rounded p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Bottom Left Position"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Scroll to see button in bottom-left corner."})]}),e.jsx(s,{position:"bottom-left",showAfter:50})]}),e.jsxs("div",{className:"relative h-48 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"h-[600px] bg-gradient-to-b from-orange-50 to-orange-100 rounded p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Bottom Center Position"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Scroll to see button in bottom-center."})]}),e.jsx(s,{position:"bottom-center",showAfter:50})]})]})},{title:"With Text Label",description:"Add a text label alongside the icon to make the purpose clearer.",code:`import { BackToTop } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <BackToTop label="Back to Top" shape="rounded" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"relative h-64 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"h-[800px] bg-gradient-to-b from-indigo-50 to-indigo-100 rounded p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"With Text Label"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Scroll down to see the labeled button."}),Array.from({length:15}).map((o,t)=>e.jsxs("p",{className:"mb-4 text-sm",children:["Content paragraph ",t+1,". The button includes a text label for clarity."]},t))]}),e.jsx(s,{label:"Top",shape:"rounded",showAfter:50})]})},{title:"Custom Threshold",description:"Control when the button appears by setting a custom scroll threshold.",code:`import { BackToTop } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      {/* Appears after 100px scroll */}
      <BackToTop showAfter={100} />
      
      {/* Appears after 500px scroll */}
      <BackToTop showAfter={500} />
      
      {/* Appears after 1000px scroll */}
      <BackToTop showAfter={1000} />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"relative h-48 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"h-[400px] bg-gradient-to-b from-pink-50 to-pink-100 rounded p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Appears Early (100px)"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Button appears after minimal scrolling."}),Array.from({length:8}).map((o,t)=>e.jsxs("p",{className:"mb-4 text-sm",children:["Paragraph ",t+1]},t))]}),e.jsx(s,{showAfter:20,size:"sm"})]}),e.jsxs("div",{className:"relative h-48 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"h-[1200px] bg-gradient-to-b from-yellow-50 to-yellow-100 rounded p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Appears Late (500px)"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Button appears after scrolling halfway down."}),Array.from({length:20}).map((o,t)=>e.jsxs("p",{className:"mb-4 text-sm",children:["Paragraph ",t+1]},t))]}),e.jsx(s,{showAfter:200,size:"sm"})]})]})},{title:"Different Shapes",description:"Choose between circle, square, or rounded rectangle shapes.",code:`import { BackToTop } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      {/* Circle (default) */}
      <BackToTop shape="circle" />
      
      {/* Square */}
      <BackToTop shape="square" />
      
      {/* Rounded */}
      <BackToTop shape="rounded" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex gap-4 items-center justify-center p-8 bg-gray-50 rounded",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{shape:"circle",position:"bottom-right",style:{position:"relative",bottom:"auto",right:"auto"}}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Circle"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{shape:"square",position:"bottom-right",style:{position:"relative",bottom:"auto",right:"auto"}}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Square"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{shape:"rounded",position:"bottom-right",style:{position:"relative",bottom:"auto",right:"auto"}}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Rounded"})]})]})},{title:"Smooth vs Instant Scroll",description:"Compare smooth animated scrolling with instant jump to top.",code:`import { BackToTop } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      {/* Smooth scroll (default) */}
      <BackToTop smooth={true} />
      
      {/* Instant scroll */}
      <BackToTop smooth={false} />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"relative h-64 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"h-[1000px] bg-gradient-to-b from-teal-50 to-teal-100 rounded p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Smooth Scroll Animation"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Click the button to smoothly animate back to top."}),Array.from({length:20}).map((o,t)=>e.jsxs("p",{className:"mb-4 text-sm",children:["Paragraph ",t+1,". Notice the smooth scrolling animation when you click Back to Top."]},t))]}),e.jsx(s,{smooth:!0,showAfter:50,label:"Smooth",shape:"rounded"})]}),e.jsxs("div",{className:"relative h-64 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"h-[1000px] bg-gradient-to-b from-red-50 to-red-100 rounded p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Instant Scroll (No Animation)"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Click the button to instantly jump back to top."}),Array.from({length:20}).map((o,t)=>e.jsxs("p",{className:"mb-4 text-sm",children:["Paragraph ",t+1,". Notice the instant jump when you click Back to Top."]},t))]}),e.jsx(s,{smooth:!1,showAfter:50,label:"Instant",shape:"rounded"})]})]})},{title:"On Long Content Page",description:"Real-world example with multiple sections of content, demonstrating practical usage.",code:`import { BackToTop } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <section id="section-1">
        <h2>Introduction</h2>
        <p>Long content here...</p>
      </section>
      
      <section id="section-2">
        <h2>Main Content</h2>
        <p>More long content here...</p>
      </section>
      
      <section id="section-3">
        <h2>Conclusion</h2>
        <p>Final content here...</p>
      </section>
      
      <BackToTop 
        showAfter={400} 
        position="bottom-right"
        shape="circle"
        size="md"
      />
    </div>
  );
}`,preview:e.jsxs("div",{className:"relative h-96 overflow-auto border rounded p-4",children:[e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:"bg-white p-6 rounded shadow-sm",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Section 1: Introduction"}),e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:"This is a long-form content page demonstrating the Back to Top component in a real-world scenario. As you scroll through multiple sections, the button will appear to help you navigate back quickly."}),Array.from({length:5}).map((o,t)=>e.jsxs("p",{className:"mb-3 text-sm text-gray-600",children:["Additional introductory paragraph ",t+1," providing context and background information."]},t))]}),e.jsxs("section",{className:"bg-white p-6 rounded shadow-sm",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Section 2: Main Content"}),e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:"The main content section contains detailed information organized into subsections."}),Array.from({length:8}).map((o,t)=>e.jsxs("div",{className:"mb-4",children:[e.jsxs("h3",{className:"font-semibold text-sm mb-2",children:["Subsection ",t+1]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Detailed content for subsection ",t+1," with important information and explanations."]})]},t))]}),e.jsxs("section",{className:"bg-white p-6 rounded shadow-sm",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Section 3: Additional Information"}),e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:"Further details and supporting content continue here."}),Array.from({length:6}).map((o,t)=>e.jsxs("p",{className:"mb-3 text-sm text-gray-600",children:["Supporting paragraph ",t+1," with supplementary information."]},t))]}),e.jsxs("section",{className:"bg-white p-6 rounded shadow-sm",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Section 4: Conclusion"}),e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:"Summary and final thoughts about the topic."}),Array.from({length:4}).map((o,t)=>e.jsxs("p",{className:"mb-3 text-sm text-gray-600",children:["Concluding paragraph ",t+1," wrapping up the discussion."]},t))]})]}),e.jsx(s,{showAfter:100})]})}],reactCode:{component:`import React, { useState, useEffect, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { backToTopVariants } from './back-to-top.variants';
import { BackToTopProps } from './BackToTop.types';
import { ArrowUp } from 'lucide-react';

export const BackToTop = forwardRef<HTMLButtonElement, BackToTopProps>(
  (
    {
      showAfter = 300,
      position = 'bottom-right',
      smooth = true,
      onClick,
      visibilityHeight,
      duration = 500,
      shape = 'circle',
      size = 'md',
      label,
      color = 'default',
      className,
      'aria-label': ariaLabel = 'Back to top',
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const threshold = visibilityHeight || showAfter;

    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.scrollY > threshold;
        setIsVisible(scrolled);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [threshold]);

    const scrollToTop = () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (smooth && !prefersReducedMotion) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0 });
      }

      if (onClick) {
        onClick();
      }
    };

    if (!isVisible) {
      return null;
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={scrollToTop}
        className={cn(
          backToTopVariants({ position, shape, size, color, hasLabel: !!label }),
          className
        )}
        aria-label={ariaLabel}
        {...props}
      >
        <ArrowUp className="shrink-0" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} aria-hidden="true" />
        {label && (
          <span className="text-sm font-medium whitespace-nowrap">
            {label}
          </span>
        )}
      </button>
    );
  }
);

BackToTop.displayName = 'BackToTop';`,types:`export interface BackToTopProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>,
          BackToTopVariantProps {
  showAfter?: number;
  visibilityHeight?: number;
  smooth?: boolean;
  onClick?: () => void;
  duration?: number;
  label?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const backToTopVariants = cva(
  [
    'fixed z-50',
    'flex items-center justify-center gap-2',
    'border-0 shadow-lg',
    'transition-all duration-300 ease-in-out',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]',
    'min-h-[44px] min-w-[44px]',
    'cursor-pointer select-none touch-manipulation',
  ],
  {
    variants: {
      position: {
        'bottom-right': [
          'bottom-4 right-4',
        ],
        'bottom-left': [
          'bottom-4 left-4',
        ],
        'bottom-center': [
          'bottom-4 left-1/2 -translate-x-1/2',
        ],
      },
      shape: {
        circle: [
          'rounded-full',
        ],
        square: [
          'rounded-none',
        ],
        rounded: [
          'rounded-lg',
        ],
      },
      size: {
        sm: [
          'w-10 h-10',
        ],
        md: [
          'w-12 h-12',
        ],
        lg: [
          'w-16 h-16',
        ],
      },
      color: {
        default: [
          'bg-[#008800] text-white',
          'hover:bg-[#006600]',
          'active:bg-[#004400]',
        ],
        primary: [
          'bg-[#005196] text-white',
          'hover:bg-[#004178]',
          'active:bg-[#00315a]',
        ],
      },
      hasLabel: {
        true: [
          'w-auto px-4',
        ],
      },
    },
    defaultVariants: {
      position: 'bottom-right',
      shape: 'circle',
      size: 'md',
      color: 'default',
      hasLabel: false,
    },
  }
);

export type BackToTopVariantProps = VariantProps<typeof backToTopVariants>;`},angularCode:{component:`import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';

type BackToTopPosition = 'bottom-right' | 'bottom-left' | 'bottom-center';
type BackToTopShape = 'circle' | 'square' | 'rounded';
type BackToTopSize = 'sm' | 'md' | 'lg';
type BackToTopColor = 'default' | 'primary';

@Component({
  selector: 'ux4g-back-to-top',
  template: \`
    <button
      *ngIf="isVisible"
      type="button"
      [class]="getButtonClasses()"
      [attr.aria-label]="ariaLabel"
      (click)="scrollToTop()"
    >
      <svg
        class="shrink-0"
        [attr.width]="getIconSize()"
        [attr.height]="getIconSize()"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
      <span *ngIf="label" class="text-sm font-medium whitespace-nowrap">
        {{ label }}
      </span>
    </button>
  \`,
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit, OnDestroy {
  @Input() showAfter = 300;
  @Input() visibilityHeight?: number;
  @Input() position: BackToTopPosition = 'bottom-right';
  @Input() shape: BackToTopShape = 'circle';
  @Input() size: BackToTopSize = 'md';
  @Input() color: BackToTopColor = 'default';
  @Input() smooth = true;
  @Input() duration = 500;
  @Input() label?: string;
  @Input() ariaLabel = 'Back to top';
  
  @Output() clicked = new EventEmitter<void>();

  isVisible = false;
  private scrollListener?: () => void;

  ngOnInit(): void {
    this.scrollListener = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener, { passive: true });
    this.handleScroll();
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  @HostListener('window:scroll')
  handleScroll(): void {
    const threshold = this.visibilityHeight || this.showAfter;
    this.isVisible = window.scrollY > threshold;
  }

  scrollToTop(): void {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (this.smooth && !prefersReducedMotion) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }

    this.clicked.emit();
  }

  getIconSize(): number {
    if (this.size === 'sm') return 16;
    if (this.size === 'lg') return 24;
    return 20;
  }

  getButtonClasses(): string {
    const baseClasses = 'ux4g-back-to-top';
    const positionClass = 'ux4g-back-to-top-' + this.position;
    const shapeClass = 'ux4g-back-to-top-' + this.shape;
    const sizeClass = 'ux4g-back-to-top-' + this.size;
    const colorClass = 'ux4g-back-to-top-' + this.color;
    const labelClass = this.label ? 'ux4g-back-to-top-with-label' : '';
    
    return [baseClasses, positionClass, shapeClass, sizeClass, colorClass, labelClass]
      .filter(Boolean)
      .join(' ');
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from './back-to-top.component';

@NgModule({
  declarations: [BackToTopComponent],
  imports: [CommonModule],
  exports: [BackToTopComponent]
})
export class BackToTopModule { }`,types:`export type BackToTopPosition = 'bottom-right' | 'bottom-left' | 'bottom-center';
export type BackToTopShape = 'circle' | 'square' | 'rounded';
export type BackToTopSize = 'sm' | 'md' | 'lg';
export type BackToTopColor = 'default' | 'primary';`},comparisons:[{system:"Material UI (Google)",component:"Fab (Floating Action Button)",variants:"circular, extended",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://mui.com/material-ui/react-floating-action-button/"},{system:"Ant Design (Alibaba)",component:"BackTop",variants:"default, custom",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/back-top"},{system:"GOV.UK Design System",component:"Back to top link",variants:"text link only",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://design-system.service.gov.uk/components/back-to-top/"},{system:"Chakra UI",component:"Custom with Button",variants:"requires custom implementation",accessibility:"WCAG 2.1 AA",documentation:"Limited",link:"https://chakra-ui.com/docs/components/button"},{system:"Bootstrap",component:"Scroll to top (utility)",variants:"custom implementation",accessibility:"WCAG 2.1 AA",documentation:"Limited",link:"https://getbootstrap.com/docs/5.3/helpers/position/"},{system:"Mantine",component:"Affix",variants:"position-based",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://mantine.dev/core/affix/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 44x44px touch target size for all button sizes (WCAG 2.5.5)","2px focus ring with 2px offset for clear keyboard navigation visibility (WCAG 2.4.7)","Color contrast ratio exceeds 4.5:1 for text and 3:1 for UI components (WCAG 1.4.3, 1.4.11)","Semantic HTML button element for proper keyboard and screen reader support","Clear aria-label describing the action performed","Respects prefers-reduced-motion for users sensitive to animation (WCAG 2.3.3)","Icon properly hidden from screen readers with aria-hidden","Smooth scroll behavior can be disabled for accessibility needs","Visible focus indicator meets enhanced contrast requirements","Component is keyboard accessible without requiring mouse interaction"],keyboardSupport:[{key:"Tab",action:"Move focus to Back to Top button when visible"},{key:"Shift + Tab",action:"Move focus away from button"},{key:"Enter",action:"Activate button and scroll to top"},{key:"Space",action:"Activate button and scroll to top"}],screenReader:["Announces button role and accessible label (Back to top)","Button only present in DOM when visible, avoiding confusion",'Arrow icon hidden from screen readers (aria-hidden="true")',"Text label (when present) is announced alongside button","Focus moves to button, announcing position and action"]},tokens:{file:"/tokens/components/back-to-top.json",mappings:[{property:"Size Medium (Width/Height)",token:"base.size.md",value:"48px"},{property:"Size Small (Width/Height)",token:"base.size.sm",value:"40px"},{property:"Size Large (Width/Height)",token:"base.size.lg",value:"64px"},{property:"Border Radius (Circle)",token:"base.borderRadius.full",value:"9999px"},{property:"Border Radius (Rounded)",token:"base.borderRadius.lg",value:"8px"},{property:"Default Background",token:"variant.default.background",value:"#008800 (Success 500)"},{property:"Default Hover",token:"variant.default.background.hover",value:"#006600 (Success 600)"},{property:"Primary Background",token:"variant.primary.background",value:"#005196 (Navy 500)"},{property:"Primary Hover",token:"variant.primary.background.hover",value:"#004178 (Navy 600)"},{property:"Shadow",token:"base.shadow.lg",value:"0 10px 15px -3px rgba(0,0,0,0.1)"},{property:"Position Bottom",token:"base.spacing.4",value:"16px"},{property:"Position Right/Left",token:"base.spacing.4",value:"16px"},{property:"Min Touch Target",token:"accessibility.minTouchTarget",value:"44px"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"},{property:"Transition Duration",token:"base.transition.duration.normal",value:"300ms"}]},useCases:[{title:"Long Policy Documents",description:"Essential for multi-page policy documents, terms of service, and legal agreements where users need to quickly return to navigation or table of contents after reading.",example:"Privacy Policy page with 20+ sections requiring easy navigation back to top menu."},{title:"Multi-Section Forms",description:"Helpful in long application forms or surveys where users might need to return to the top to review instructions, change earlier answers, or access the main navigation.",example:"Benefits application form with 15 steps where users need to reference instructions at the top."},{title:"Service Catalogs",description:"Useful in government service directories or catalogs with extensive listings where users browse down the page and need quick access back to search or filters.",example:"Department services listing with 50+ services organized by category."},{title:"FAQ Pages",description:"Critical for FAQ pages with many questions where users scroll to find answers and need easy navigation back to the question categories or search.",example:"Public health FAQ with 100+ questions organized into topics."},{title:"Terms and Conditions",description:"Necessary for lengthy terms and conditions or user agreements where users need to navigate back to specific sections or the beginning of the document.",example:"Online service terms with 30+ clauses and subsections."},{title:"Documentation Pages",description:"Important for technical documentation, guides, and tutorials with extensive content where users need to return to the navigation menu or page header.",example:"Developer API documentation with detailed endpoints and examples spanning multiple screens."}]})}export{C as default};
