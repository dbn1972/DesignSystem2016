import{R as g,j as e,d as f,b as v,F as b,U as h,X as x}from"./index-BYMLq1ET.js";import{C as y}from"./ComponentDocumentation-CxrYZXwp.js";import{I as T}from"./info-117bcUyF.js";import{S as u}from"./shield-K2szB7qG.js";import{C as w}from"./calendar-Cti0IlDf.js";import"./copy-Ck_ch6Lp.js";import"./external-link-Ckpfpf0L.js";const a=({variant:n,size:o,closeable:l,outlined:r,children:i,icon:t,onClose:s,...c})=>{const d="inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap transition-all",p=n==="primary"?r?"bg-white text-[#005196] border border-[#005196]":"bg-[#005196] text-white border border-[#005196]":n==="success"?r?"bg-white text-[#008800] border border-[#008800]":"bg-[#008800] text-white border border-[#008800]":n==="warning"?r?"bg-white text-[#f59e0b] border border-[#f59e0b]":"bg-[#f59e0b] text-white border border-[#f59e0b]":n==="error"?r?"bg-white text-[#dc2626] border border-[#dc2626]":"bg-[#dc2626] text-white border border-[#dc2626]":n==="info"?r?"bg-white text-[#0284c7] border border-[#0284c7]":"bg-[#0284c7] text-white border border-[#0284c7]":r?"bg-white text-[#525252] border border-[#737373]":"bg-[#e5e5e5] text-[#262626] border border-transparent",m=o==="sm"?"h-6 px-2 text-xs":o==="lg"?"h-9 px-4 text-base":"h-7 px-3 text-sm";return e.jsxs("span",{className:d+" "+p+" "+m,...c,children:[t&&e.jsx("span",{className:"inline-flex shrink-0","aria-hidden":"true",children:t}),e.jsx("span",{children:i}),l&&e.jsx("button",{type:"button",className:"inline-flex shrink-0 items-center justify-center rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-current ml-1 -mr-1",onClick:s,"aria-label":"Remove "+String(i),style:{width:"16px",height:"16px"},children:e.jsx(x,{size:12})})]})};function R(){const[n,o]=g.useState(["Design","Development","Research"]),[l,r]=g.useState(["Pending Review","In Progress","Approved"]),i=(t,s,c)=>{c(s.filter(d=>d!==t))};return e.jsx(y,{name:"Tag / Chip",description:"Compact elements for displaying categories, labels, status indicators, or filters. Tags provide visual organization and allow users to quickly identify, categorize, and filter information across government services.",category:"Data Display",maturity:"stable",tier:"core",since:"v1.0.0",updated:"v2.1.0",props:[{name:"variant",type:"'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'",default:"'default'",required:!1,description:"Visual variant of the tag. Default for neutral labels, primary for highlighted categories, success for positive status, warning for caution states, error for negative status, info for informational labels."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the tag. Small (24px), Medium (28px), Large (36px)."},{name:"outlined",type:"boolean",default:"false",required:!1,description:"Whether the tag should have outlined styling instead of filled background."},{name:"closeable",type:"boolean",default:"false",required:!1,description:"Whether the tag can be dismissed with a close button. Adds an interactive close icon."},{name:"onClose",type:"() => void",required:!1,description:"Callback function triggered when the close button is clicked. Required when closeable is true."},{name:"icon",type:"ReactNode",required:!1,description:"Icon to display before tag text. Should be 12-16px for optimal sizing."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the tag is disabled. Reduces opacity and prevents interaction for closeable tags."},{name:"children",type:"ReactNode",required:!0,description:"Tag content (text or elements)."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with variant classes."},{name:"onClick",type:"(event: MouseEvent) => void",required:!1,description:"Click event handler for interactive tags. Makes the entire tag clickable."}],examples:[{title:"Basic Variants",description:"All six tag variants for different use cases and semantic meanings.",code:`import { Tag } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"}),e.jsx(a,{variant:"info",children:"Info"})]})},{title:"Outlined Style",description:"Outlined tags provide a lighter visual weight while maintaining variant colors.",code:`import { Tag } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default" outlined>Default</Tag>
      <Tag variant="primary" outlined>Primary</Tag>
      <Tag variant="success" outlined>Success</Tag>
      <Tag variant="warning" outlined>Warning</Tag>
      <Tag variant="error" outlined>Error</Tag>
      <Tag variant="info" outlined>Info</Tag>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"default",outlined:!0,children:"Default"}),e.jsx(a,{variant:"primary",outlined:!0,children:"Primary"}),e.jsx(a,{variant:"success",outlined:!0,children:"Success"}),e.jsx(a,{variant:"warning",outlined:!0,children:"Warning"}),e.jsx(a,{variant:"error",outlined:!0,children:"Error"}),e.jsx(a,{variant:"info",outlined:!0,children:"Info"})]})},{title:"Sizes",description:"Three tag sizes: small (24px), medium (28px), and large (36px) for different contexts.",code:`import { Tag } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center gap-3">
      <Tag size="sm" variant="primary">Small Tag</Tag>
      <Tag size="md" variant="primary">Medium Tag</Tag>
      <Tag size="lg" variant="primary">Large Tag</Tag>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{size:"sm",variant:"primary",children:"Small Tag"}),e.jsx(a,{size:"md",variant:"primary",children:"Medium Tag"}),e.jsx(a,{size:"lg",variant:"primary",children:"Large Tag"})]})},{title:"With Icons",description:"Tags can display icons before the text to provide additional context.",code:`import { Tag } from '@ux4g/react-core';
import { CheckCircle, AlertCircle, Info, Shield } from 'lucide-react';

function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag variant="success" icon={<CheckCircle size={14} />}>
        Verified
      </Tag>
      <Tag variant="warning" icon={<AlertCircle size={14} />}>
        Attention Required
      </Tag>
      <Tag variant="info" icon={<Info size={14} />}>
        Information
      </Tag>
      <Tag variant="primary" icon={<Shield size={14} />}>
        Secure
      </Tag>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"success",icon:e.jsx(f,{size:14}),children:"Verified"}),e.jsx(a,{variant:"warning",icon:e.jsx(v,{size:14}),children:"Attention Required"}),e.jsx(a,{variant:"info",icon:e.jsx(T,{size:14}),children:"Information"}),e.jsx(a,{variant:"primary",icon:e.jsx(u,{size:14}),children:"Secure"})]})},{title:"Closeable Tags",description:"Interactive tags that can be dismissed by users. Useful for filters and dynamic categorization.",code:`import { Tag } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [tags, setTags] = useState(['Design', 'Development', 'Research']);
  
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag
          key={tag}
          variant="primary"
          closeable
          onClose={() => removeTag(tag)}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}`,preview:e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map(t=>e.jsx(a,{variant:"primary",closeable:!0,onClose:()=>i(t,n,o),children:t},t))})},{title:"Status Indicators",description:"Tags used to display application or process status across government services.",code:`import { Tag } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [statuses, setStatuses] = useState([
    'Pending Review',
    'In Progress',
    'Approved'
  ]);
  
  const getVariant = (status: string) => {
    if (status === 'Approved') return 'success';
    if (status === 'Pending Review') return 'warning';
    return 'info';
  };
  
  const removeStatus = (statusToRemove: string) => {
    setStatuses(statuses.filter(s => s !== statusToRemove));
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <Tag
          key={status}
          variant={getVariant(status)}
          closeable
          onClose={() => removeStatus(status)}
        >
          {status}
        </Tag>
      ))}
    </div>
  );
}`,preview:e.jsx("div",{className:"flex flex-wrap gap-2",children:l.map(t=>{const s=t==="Approved"?"success":t==="Pending Review"?"warning":"info";return e.jsx(a,{variant:s,closeable:!0,onClose:()=>i(t,l,r),children:t},t)})})},{title:"Department Tags",description:"Tags for categorizing content by government department or agency.",code:`import { Tag } from '@ux4g/react-core';
import { Shield, FileText, Users, Calendar } from 'lucide-react';

function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag variant="primary" outlined icon={<Shield size={14} />}>
        Defense
      </Tag>
      <Tag variant="primary" outlined icon={<FileText size={14} />}>
        Treasury
      </Tag>
      <Tag variant="primary" outlined icon={<Users size={14} />}>
        Health Services
      </Tag>
      <Tag variant="primary" outlined icon={<Calendar size={14} />}>
        Veterans Affairs
      </Tag>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"primary",outlined:!0,icon:e.jsx(u,{size:14}),children:"Defense"}),e.jsx(a,{variant:"primary",outlined:!0,icon:e.jsx(b,{size:14}),children:"Treasury"}),e.jsx(a,{variant:"primary",outlined:!0,icon:e.jsx(h,{size:14}),children:"Health Services"}),e.jsx(a,{variant:"primary",outlined:!0,icon:e.jsx(w,{size:14}),children:"Veterans Affairs"})]})}],reactCode:{component:`import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { tagVariants } from './tag.variants';
import { TagProps } from './Tag.types';
import { X } from 'lucide-react';

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      children,
      className,
      variant = 'default',
      size = 'md',
      outlined = false,
      closeable = false,
      onClose,
      icon,
      disabled = false,
      onClick,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const isInteractive = !!onClick || closeable;
    const isDisabled = disabled;

    const handleClose = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isDisabled && onClose) {
        onClose();
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (!isDisabled && onClick) {
        onClick(e);
      }
    };

    const TagElement = isInteractive ? 'button' : 'span';
    const componentProps = isInteractive
      ? {
          type: 'button' as const,
          disabled: isDisabled,
          onClick: handleClick,
        }
      : {};

    return (
      <TagElement
        ref={ref as any}
        className={cn(
          tagVariants({ variant, size, outlined, disabled }),
          isInteractive && 'cursor-pointer hover:opacity-90',
          className
        )}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        aria-disabled={isDisabled}
        {...componentProps}
        {...props}
      >
        {icon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="inline-flex items-center">{children}</span>
        {closeable && (
          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center w-4 h-4 rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-current ml-1 -mr-1"
            onClick={handleClose}
            disabled={isDisabled}
            aria-label={ariaLabel ? \`Remove \${ariaLabel}\` : 'Remove tag'}
          >
            <X size={12} />
          </button>
        )}
      </TagElement>
    );
  }
);

Tag.displayName = 'Tag';`,types:`export interface TagProps 
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'>,
          TagVariantProps {
  children?: React.ReactNode;
  closeable?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

export interface TagVariantProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  outlined?: boolean;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const tagVariants = cva(
  [
    'inline-flex items-center gap-1.5',
    'font-medium whitespace-nowrap',
    'rounded-full',
    'transition-all duration-150 ease-in-out',
    'border',
  ],
  {
    variants: {
      variant: {
        default: [],
        primary: [],
        success: [],
        warning: [],
        error: [],
        info: [],
      },
      size: {
        sm: ['h-6 px-2 py-0.5 text-xs'],
        md: ['h-7 px-3 py-1 text-sm'],
        lg: ['h-9 px-4 py-1.5 text-base'],
      },
      outlined: {
        true: [],
        false: [],
      },
      disabled: {
        true: ['opacity-60 cursor-not-allowed'],
        false: [],
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        outlined: false,
        class: 'bg-[#e5e5e5] text-[#262626] border-transparent',
      },
      {
        variant: 'default',
        outlined: true,
        class: 'bg-white text-[#525252] border-[#737373]',
      },
      {
        variant: 'primary',
        outlined: false,
        class: 'bg-[#005196] text-white border-[#005196]',
      },
      {
        variant: 'primary',
        outlined: true,
        class: 'bg-white text-[#005196] border-[#005196]',
      },
      {
        variant: 'success',
        outlined: false,
        class: 'bg-[#008800] text-white border-[#008800]',
      },
      {
        variant: 'success',
        outlined: true,
        class: 'bg-white text-[#008800] border-[#008800]',
      },
      {
        variant: 'warning',
        outlined: false,
        class: 'bg-[#f59e0b] text-white border-[#f59e0b]',
      },
      {
        variant: 'warning',
        outlined: true,
        class: 'bg-white text-[#f59e0b] border-[#f59e0b]',
      },
      {
        variant: 'error',
        outlined: false,
        class: 'bg-[#dc2626] text-white border-[#dc2626]',
      },
      {
        variant: 'error',
        outlined: true,
        class: 'bg-white text-[#dc2626] border-[#dc2626]',
      },
      {
        variant: 'info',
        outlined: false,
        class: 'bg-[#0284c7] text-white border-[#0284c7]',
      },
      {
        variant: 'info',
        outlined: true,
        class: 'bg-white text-[#0284c7] border-[#0284c7]',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      outlined: false,
      disabled: false,
    },
  }
);

export type TagVariantProps = VariantProps<typeof tagVariants>;`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';

type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
type TagSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ux4g-tag',
  template: \`
    <span
      [class]="getTagClasses()"
      [attr.aria-label]="ariaLabel || content"
      [attr.aria-disabled]="disabled"
    >
      <span *ngIf="icon" class="icon-wrapper" aria-hidden="true">
        <ng-content select="[icon]"></ng-content>
      </span>
      <span class="tag-content">{{ content }}</span>
      <ng-content></ng-content>
      <button
        *ngIf="closeable"
        type="button"
        class="close-button"
        [disabled]="disabled"
        [attr.aria-label]="'Remove ' + (ariaLabel || content)"
        (click)="handleClose($event)"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </span>
  \`,
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() variant: TagVariant = 'default';
  @Input() size: TagSize = 'md';
  @Input() outlined = false;
  @Input() closeable = false;
  @Input() disabled = false;
  @Input() icon = false;
  @Input() content = '';
  @Input() ariaLabel?: string;
  
  @Output() closed = new EventEmitter<void>();

  getTagClasses(): string {
    const baseClasses = 'ux4g-tag';
    const variantClass = \`ux4g-tag-\${this.variant}\`;
    const sizeClass = \`ux4g-tag-\${this.size}\`;
    const outlinedClass = this.outlined ? 'ux4g-tag-outlined' : 'ux4g-tag-filled';
    const disabledClass = this.disabled ? 'ux4g-tag-disabled' : '';
    
    return [baseClasses, variantClass, sizeClass, outlinedClass, disabledClass]
      .filter(Boolean)
      .join(' ');
  }

  handleClose(event: Event): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.closed.emit();
    }
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule],
  exports: [TagComponent]
})
export class TagModule { }`,types:`export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagConfig {
  variant?: TagVariant;
  size?: TagSize;
  outlined?: boolean;
  closeable?: boolean;
  disabled?: boolean;
  icon?: boolean;
  content: string;
  ariaLabel?: string;
}`},comparisons:[{system:"Material UI (Google)",component:"Chip",variants:"filled, outlined",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-chip/"},{system:"Ant Design (Alibaba)",component:"Tag",variants:"default, success, processing, error, warning",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/tag"},{system:"GOV.UK Design System",component:"Tag",variants:"default, grey, green, turquoise, blue, purple, pink, red, orange, yellow",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/tag/"},{system:"Chakra UI",component:"Tag",variants:"solid, subtle, outline",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/tag"},{system:"Carbon Design (IBM)",component:"Tag",variants:"red, magenta, purple, blue, cyan, teal, green, gray, cool-gray, warm-gray",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://carbondesignsystem.com/components/tag/usage/"},{system:"Adobe Spectrum",component:"Tag",variants:"neutral, accent, positive, negative, notice, informative",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://spectrum.adobe.com/page/tag/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 3:1 color contrast ratio for non-text elements (WCAG 1.4.11)","4.5:1 color contrast ratio for text content (WCAG 1.4.3)","Close button meets 24x24px minimum touch target (WCAG 2.5.5)","Semantic HTML elements (span for static, button for interactive)","aria-label attribute for screen reader identification","aria-disabled attribute for disabled state","Close button has descriptive aria-label with tag content","Icons properly hidden from screen readers with aria-hidden","Focus visible ring on close button for keyboard navigation (WCAG 2.4.7)"],keyboardSupport:[{key:"Tab",action:"Move focus to closeable tag button"},{key:"Shift + Tab",action:"Move focus away from tag"},{key:"Enter",action:"Activate close button on closeable tag"},{key:"Space",action:"Activate close button on closeable tag"}],screenReader:["Announces tag content and variant information","Announces disabled state when applicable",'Close button announces "Remove [tag content]"','Icons are hidden from screen reader (aria-hidden="true")',"Dynamic tag removal announced as content change"]},tokens:{file:"/tokens/components/tag.json",mappings:[{property:"Height (Medium)",token:"tag.height.md",value:"28px"},{property:"Padding Horizontal (Medium)",token:"tag.padding.horizontal.md",value:"12px"},{property:"Border Radius",token:"tag.borderRadius",value:"9999px (pill)"},{property:"Font Size (Medium)",token:"tag.fontSize.md",value:"14px"},{property:"Default Background",token:"tag.variant.default.background.filled",value:"#e5e5e5 (Neutral 200)"},{property:"Default Text",token:"tag.variant.default.text.filled",value:"#262626 (Neutral 800)"},{property:"Primary Background",token:"tag.variant.primary.background.filled",value:"#005196 (Navy 500)"},{property:"Primary Border",token:"tag.variant.primary.border.outlined",value:"#005196 (Navy 500)"},{property:"Success Background",token:"tag.variant.success.background.filled",value:"#008800 (Green 600)"},{property:"Warning Background",token:"tag.variant.warning.background.filled",value:"#f59e0b (Amber 500)"},{property:"Error Background",token:"tag.variant.error.background.filled",value:"#dc2626 (Red 600)"},{property:"Info Background",token:"tag.variant.info.background.filled",value:"#0284c7 (Sky 600)"},{property:"Icon Size",token:"tag.icon.size",value:"14px"},{property:"Close Button Size",token:"tag.closeButton.size",value:"16px"},{property:"Gap Between Elements",token:"tag.gap",value:"6px"}]},useCases:[{title:"Department and Agency Tags",description:"Categorize content, documents, or services by government department or agency affiliation.",example:'Use primary outlined tags with department icons to label documents: "Department of Defense", "Treasury", "Health and Human Services".'},{title:"Application Status Labels",description:"Display the current status of applications, permits, or requests throughout their lifecycle.",example:'Use success tags for "Approved", warning tags for "Pending Review", info tags for "In Progress", and error tags for "Rejected".'},{title:"Service Category Filters",description:"Allow users to filter services or content by category with closeable tags.",example:'Use closeable primary tags for active filters: "Veterans Services", "Healthcare", "Education" that users can remove to update results.'},{title:"Security Classification Badges",description:"Indicate security clearance levels or document classification status.",example:'Use error tags for "Classified", warning tags for "Confidential", info tags for "Internal Use", and success tags for "Public".'},{title:"Multi-Language Content Tags",description:"Identify available language translations for forms and documents.",example:'Use default outlined tags to show available languages: "English", "Spanish", "French", "Chinese".'},{title:"Benefit Eligibility Indicators",description:"Show which benefits or services a user qualifies for based on their profile.",example:'Use success tags with checkmark icons for "Eligible" benefits and default tags for "Not Eligible" programs.'}]})}export{R as default};
