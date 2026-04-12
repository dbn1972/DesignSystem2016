import{j as e}from"./index-LBJNeHTL.js";import{C as m}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const t=({ratio:i,children:a,maxWidth:r,className:n,...s})=>{const c=`${1/(o=>{if(typeof o=="number")return o;if(o.includes("/")){const[d,l]=o.split("/").map(Number);return d/l}return 1.7777777777777777})(i||"16/9")*100}%`;return e.jsxs("div",{className:`relative w-full ${n||""}`,style:{maxWidth:r||"100%"},...s,children:[e.jsx("div",{style:{paddingBottom:c}}),e.jsx("div",{className:"absolute inset-0",children:a})]})};function y(){return e.jsx(m,{name:"AspectRatio",description:"Layout component for maintaining consistent aspect ratios across responsive designs. Essential for video embeds, images, maps, and document viewers where maintaining proportions is critical.",category:"Layout",maturity:"stable",tier:"foundations",since:"v1.5.0",updated:"v2.3.0",props:[{name:"ratio",type:"number | '16/9' | '4/3' | '1/1' | '21/9' | '3/2' | '2/1' | string",default:"'16/9'",required:!1,description:'Aspect ratio as a number (e.g., 1.777) or string fraction (e.g., "16/9"). Common ratios: 16/9 (widescreen), 4/3 (standard), 1/1 (square), 21/9 (ultrawide), 3/2 (photo), 2/1 (panoramic).'},{name:"children",type:"ReactNode",required:!0,description:"Content to render within the aspect ratio container. Typically images, videos, iframes, or other media elements."},{name:"maxWidth",type:"string | number",required:!1,description:'Maximum width of the container. Useful for preventing oversized media on large screens. Accepts CSS units (e.g., "800px", "50rem") or pixel numbers.'},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to the outer container."}],examples:[{title:"16:9 Video Container",description:"Standard widescreen aspect ratio for modern video content.",code:`import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="16/9" maxWidth="800px">
      <div className="flex items-center justify-center bg-gray-100 w-full h-full rounded">
        <span className="text-gray-500">16:9 Video Player</span>
      </div>
    </AspectRatio>
  );
}`,preview:e.jsx(t,{ratio:"16/9",maxWidth:"800px",children:e.jsx("div",{className:"flex items-center justify-center bg-gray-100 w-full h-full rounded border-2 border-gray-300",children:e.jsx("span",{className:"text-gray-500 font-medium",children:"16:9 Video Player"})})})},{title:"4:3 Image Container",description:"Classic standard definition aspect ratio for traditional images.",code:`import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="4/3" maxWidth="600px">
      <img
        src="/government-building.jpg"
        alt="Government building"
        className="w-full h-full object-cover rounded"
      />
    </AspectRatio>
  );
}`,preview:e.jsx(t,{ratio:"4/3",maxWidth:"600px",children:e.jsx("div",{className:"flex items-center justify-center bg-gray-100 w-full h-full rounded border-2 border-gray-300",children:e.jsx("span",{className:"text-gray-500 font-medium",children:"4:3 Image"})})})},{title:"Square (1:1) Profile Image",description:"Perfect square ratio for avatars, profile images, and social media content.",code:`import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="1/1" maxWidth="300px">
      <img
        src="/profile.jpg"
        alt="User profile"
        className="w-full h-full object-cover rounded-full"
      />
    </AspectRatio>
  );
}`,preview:e.jsx(t,{ratio:"1/1",maxWidth:"300px",children:e.jsx("div",{className:"flex items-center justify-center bg-gray-100 w-full h-full rounded-full border-2 border-gray-300",children:e.jsx("span",{className:"text-gray-500 font-medium",children:"1:1"})})})},{title:"YouTube Embed",description:"Responsive YouTube video embed maintaining 16:9 aspect ratio.",code:`import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="16/9">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded border-0"
      />
    </AspectRatio>
  );
}`,preview:e.jsx(t,{ratio:"16/9",children:e.jsxs("div",{className:"flex flex-col items-center justify-center bg-black w-full h-full rounded border-2 border-gray-700",children:[e.jsx("div",{className:"w-16 h-16 mb-4 bg-red-600 rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M8 5v14l11-7z"})})}),e.jsx("span",{className:"text-white font-medium",children:"YouTube Video Embed"})]})})},{title:"Map Container",description:"Embedded map with 21:9 ultrawide aspect ratio for geographic data.",code:`import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="21/9">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123"
        title="Location map"
        loading="lazy"
        className="w-full h-full rounded border-0"
      />
    </AspectRatio>
  );
}`,preview:e.jsx(t,{ratio:"21/9",children:e.jsx("div",{className:"flex items-center justify-center bg-gray-200 w-full h-full rounded border-2 border-gray-400",children:e.jsxs("div",{className:"text-center",children:[e.jsxs("svg",{className:"w-12 h-12 mx-auto mb-2 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),e.jsx("span",{className:"text-gray-600 font-medium",children:"21:9 Map Embed"})]})})})},{title:"Document Preview",description:"PDF or document preview with 3:2 aspect ratio (common photo ratio).",code:`import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="3/2" maxWidth="700px">
      <div className="w-full h-full bg-white border-2 border-gray-300 rounded shadow-lg p-6">
        <div className="text-gray-800 space-y-4">
          <h3 className="text-xl font-bold">Document Title</h3>
          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
          <div className="h-2 bg-gray-200 rounded w-full"></div>
          <div className="h-2 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </AspectRatio>
  );
}`,preview:e.jsx(t,{ratio:"3/2",maxWidth:"700px",children:e.jsx("div",{className:"w-full h-full bg-white border-2 border-gray-300 rounded shadow-lg p-6",children:e.jsxs("div",{className:"text-gray-800 space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:"Document Title"}),e.jsx("div",{className:"h-2 bg-gray-200 rounded w-3/4"}),e.jsx("div",{className:"h-2 bg-gray-200 rounded w-full"}),e.jsx("div",{className:"h-2 bg-gray-200 rounded w-5/6"})]})})})}],reactCode:{component:`import React, { CSSProperties, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { AspectRatioProps } from './AspectRatio.types';

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (
    {
      ratio = '16/9',
      children,
      maxWidth,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const getRatioValue = (ratioInput: string | number): number => {
      if (typeof ratioInput === 'number') {
        return ratioInput;
      }

      if (typeof ratioInput === 'string' && ratioInput.includes('/')) {
        const [width, height] = ratioInput.split('/').map(Number);
        if (!isNaN(width) && !isNaN(height) && height !== 0) {
          return width / height;
        }
      }

      // Default to 16:9 if parsing fails
      return 16 / 9;
    };

    const ratioValue = getRatioValue(ratio);
    const paddingBottom = \`\${(1 / ratioValue) * 100}%\`;

    const containerStyle: CSSProperties = {
      ...style,
      maxWidth: maxWidth || '100%',
    };

    return (
      <div
        ref={ref}
        className={cn('relative w-full', className)}
        style={containerStyle}
        {...props}
      >
        {/* Padding-bottom technique for maintaining aspect ratio */}
        <div style={{ paddingBottom }} />

        {/* Absolutely positioned content fills the space */}
        <div className="absolute inset-0">
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';`,types:`export interface AspectRatioProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Aspect ratio as a number (e.g., 1.777) or string fraction (e.g., "16/9")
   * @default "16/9"
   */
  ratio?: number | string;

  /**
   * Content to render within the aspect ratio container
   */
  children: React.ReactNode;

  /**
   * Maximum width of the container
   * Useful for preventing oversized media on large screens
   */
  maxWidth?: string | number;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export type CommonRatio = '16/9' | '4/3' | '1/1' | '21/9' | '3/2' | '2/1';`,variants:`// AspectRatio doesn't use class-variance-authority variants
// Instead, it uses dynamic inline styles based on the ratio prop

export const commonRatios = {
  widescreen: '16/9',      // Modern video, presentations
  standard: '4/3',         // Traditional TV, classic images
  square: '1/1',           // Social media, avatars
  ultrawide: '21/9',       // Cinematic, panoramic views
  photo: '3/2',            // Common photo aspect ratio
  panoramic: '2/1',        // Wide landscapes
  portrait: '9/16',        // Vertical video, mobile
  golden: '1.618/1',       // Golden ratio
} as const;

export const getRatioFromString = (ratio: string): number => {
  const [width, height] = ratio.split('/').map(Number);
  return width / height;
};`},angularCode:{component:`import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-aspect-ratio',
  template: \`
    <div
      class="ux4g-aspect-ratio"
      [class]="className"
      [style.max-width]="maxWidth"
    >
      <!-- Padding-bottom spacer for aspect ratio -->
      <div [style.padding-bottom]="paddingBottom"></div>

      <!-- Content container -->
      <div class="ux4g-aspect-ratio-content">
        <ng-content></ng-content>
      </div>
    </div>
  \`,
  styles: [\`
    .ux4g-aspect-ratio {
      position: relative;
      width: 100%;
    }

    .ux4g-aspect-ratio-content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  \`]
})
export class AspectRatioComponent {
  @Input() ratio: string | number = '16/9';
  @Input() maxWidth?: string;
  @Input() className?: string;

  get paddingBottom(): string {
    const ratioValue = this.getRatioValue(this.ratio);
    return \`\${(1 / ratioValue) * 100}%\`;
  }

  private getRatioValue(ratioInput: string | number): number {
    if (typeof ratioInput === 'number') {
      return ratioInput;
    }

    if (typeof ratioInput === 'string' && ratioInput.includes('/')) {
      const [width, height] = ratioInput.split('/').map(Number);
      if (!isNaN(width) && !isNaN(height) && height !== 0) {
        return width / height;
      }
    }

    // Default to 16:9
    return 16 / 9;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspectRatioComponent } from './aspect-ratio.component';

@NgModule({
  declarations: [AspectRatioComponent],
  imports: [CommonModule],
  exports: [AspectRatioComponent]
})
export class AspectRatioModule { }`,types:`export type CommonRatio = '16/9' | '4/3' | '1/1' | '21/9' | '3/2' | '2/1' | '9/16';

export interface AspectRatioConfig {
  ratio: number | string;
  maxWidth?: string;
}`},comparisons:[{system:"Chakra UI",component:"AspectRatio",variants:"Single component with ratio prop",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/aspect-ratio"},{system:"Radix UI",component:"AspectRatio",variants:"Unstyled primitive with ratio prop",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://www.radix-ui.com/primitives/docs/components/aspect-ratio"},{system:"Material UI (Google)",component:"Box with aspect-ratio CSS",variants:"Not a dedicated component",accessibility:"WCAG 2.1 AA",documentation:"Limited",link:"https://mui.com/material-ui/react-box/"},{system:"Ant Design (Alibaba)",component:"Image with aspect ratio",variants:"Built into Image component",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/image"},{system:"Native CSS aspect-ratio",component:"CSS Property",variants:"aspect-ratio: 16 / 9",accessibility:"N/A (CSS feature)",documentation:"MDN Documentation",link:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Maintains semantic HTML structure with proper nesting","Does not interfere with keyboard navigation of child elements","Preserves focus management for interactive content (videos, iframes)","Works with screen readers without additional markup","Supports responsive scaling without content clipping","Maintains aspect ratio across all viewport sizes","Compatible with reduced motion preferences","Does not introduce layout shifts during page load"],keyboardSupport:[{key:"Tab",action:"Focus moves to interactive children (videos, links, etc.)"},{key:"Shift + Tab",action:"Focus moves away from interactive children"}],screenReader:["Container is transparent to screen readers","Child content is announced normally","Image alt text and iframe titles are preserved","No additional ARIA attributes needed on container"]},tokens:{file:"/tokens/components/aspect-ratio.json",mappings:[{property:"Common Ratios",token:"ratio.common.widescreen",value:"16/9"},{property:"Common Ratios",token:"ratio.common.standard",value:"4/3"},{property:"Common Ratios",token:"ratio.common.square",value:"1/1"},{property:"Common Ratios",token:"ratio.common.ultrawide",value:"21/9"},{property:"Common Ratios",token:"ratio.common.photo",value:"3/2"},{property:"Common Ratios",token:"ratio.common.portrait",value:"9/16"},{property:"Max Width Default",token:"layout.aspectRatio.maxWidth",value:"100%"},{property:"Position Strategy",token:"layout.aspectRatio.strategy",value:"padding-bottom"}]}})}export{y as default};
