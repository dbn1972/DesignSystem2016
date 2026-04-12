import{j as e,d as s,F as b}from"./index-LBJNeHTL.js";import{C}from"./ComponentDocumentation-DvEedSJi.js";import{U as r}from"./user-Cb11iFvg.js";import{M as c}from"./map-pin-C-aJqSPI.js";import{C as o}from"./clock-c-DG08fK.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const t=({variant:i="horizontal",items:d,bordered:p=!1,striped:m=!1,compact:a=!1,cardLayout:l=!1,showIcons:u=!1,...f})=>{const h=[l?"bg-white border border-[#d1d5db] rounded-lg p-6 shadow-sm":"",p&&!l?"border border-[#d1d5db] rounded":""].filter(Boolean).join(" "),y=[i==="vertical"?"space-y-4":"",i==="horizontal"?"divide-y divide-[#e5e7eb]":"",m&&i==="horizontal"?"[&>div:nth-child(even)]:bg-[#f9fafb]":""].filter(Boolean).join(" "),v=i==="horizontal"?a?"grid grid-cols-3 gap-4 py-2 px-4":"grid grid-cols-3 gap-4 py-4 px-6":a?"py-1":"py-2";return e.jsx("div",{className:h,...f,children:e.jsx("dl",{className:y,children:d.map((n,g)=>e.jsxs("div",{className:v,children:[e.jsxs("dt",{className:i==="horizontal"?"col-span-1 font-semibold text-[#374151] flex items-center gap-2":"font-semibold text-[#374151] mb-1 flex items-center gap-2",children:[u&&n.icon&&e.jsx("span",{className:"inline-flex shrink-0 text-[#005196]","aria-hidden":"true",children:n.icon}),n.term]}),e.jsx("dd",{className:i==="horizontal"?"col-span-2 text-[#1f2937]":"text-[#1f2937]",children:n.definition})]},g))})})};function k(){return e.jsx(C,{name:"Description List",description:"Display key-value pairs for structured data, form summaries, and details. Supports multiple layout variants with full accessibility compliance for government services.",category:"Data Display",maturity:"stable",tier:"core",since:"v1.0.0",updated:"v2.1.0",props:[{name:"variant",type:"'horizontal' | 'vertical'",default:"'horizontal'",required:!1,description:"Layout variant. Horizontal displays terms and definitions side by side, vertical stacks them."},{name:"items",type:"Array<{ term: string; definition: string | ReactNode; icon?: ReactNode }>",required:!0,description:"Array of term-definition pairs to display. Each item can include an optional icon."},{name:"bordered",type:"boolean",default:"false",required:!1,description:"Whether to display a border around the entire description list."},{name:"striped",type:"boolean",default:"false",required:!1,description:"Whether to apply alternating background colors to rows (horizontal variant only)."},{name:"compact",type:"boolean",default:"false",required:!1,description:"Whether to use compact spacing. Reduces padding for dense layouts."},{name:"cardLayout",type:"boolean",default:"false",required:!1,description:"Whether to display the list in a card container with shadow and rounded corners."},{name:"showIcons",type:"boolean",default:"false",required:!1,description:"Whether to display icons next to terms when provided in items."},{name:"termWidth",type:"'narrow' | 'medium' | 'wide'",default:"'medium'",required:!1,description:"Width of the term column in horizontal layout. Narrow: 25%, Medium: 33%, Wide: 40%."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with variant classes."},{name:"termClassName",type:"string",required:!1,description:"Additional CSS classes to apply to all term elements."},{name:"definitionClassName",type:"string",required:!1,description:"Additional CSS classes to apply to all definition elements."}],examples:[{title:"User Profile Information",description:"Display user profile details with horizontal layout and card styling.",code:`import { DescriptionList } from '@ux4g/react-core';
import { User, Mail, Phone, MapPin } from 'lucide-react';

function Example() {
  const userItems = [
    {
      term: 'Full Name',
      definition: 'Sarah Jane Williams',
      icon: <User size={16} />
    },
    {
      term: 'Email Address',
      definition: 'sarah.williams@example.gov',
      icon: <Mail size={16} />
    },
    {
      term: 'Phone Number',
      definition: '+1 (555) 123-4567',
      icon: <Phone size={16} />
    },
    {
      term: 'Location',
      definition: 'Ottawa, Ontario, Canada',
      icon: <MapPin size={16} />
    },
    {
      term: 'Member Since',
      definition: 'January 15, 2024',
      icon: <Clock size={16} />
    },
  ];

  return (
    <DescriptionList
      variant="horizontal"
      items={userItems}
      cardLayout
      showIcons
    />
  );
}`,preview:e.jsx(t,{variant:"horizontal",items:[{term:"Full Name",definition:"Sarah Jane Williams",icon:e.jsx(r,{size:16})},{term:"Email Address",definition:"sarah.williams@example.gov",icon:e.jsx(r,{size:16})},{term:"Phone Number",definition:"+1 (555) 123-4567",icon:e.jsx(r,{size:16})},{term:"Location",definition:"Ottawa, Ontario, Canada",icon:e.jsx(c,{size:16})},{term:"Member Since",definition:"January 15, 2024",icon:e.jsx(o,{size:16})}],cardLayout:!0,showIcons:!0})},{title:"Application Details",description:"Government service application summary with bordered and striped layout.",code:`import { DescriptionList } from '@ux4g/react-core';

function Example() {
  const applicationItems = [
    {
      term: 'Application ID',
      definition: 'APP-2026-04-00789'
    },
    {
      term: 'Application Type',
      definition: 'Business Registration'
    },
    {
      term: 'Submitted Date',
      definition: 'April 10, 2026 at 2:45 PM EDT'
    },
    {
      term: 'Current Status',
      definition: (
        <span className="inline-flex items-center gap-1.5 text-[#008800]">
          <CheckCircle size={16} />
          Approved
        </span>
      )
    },
    {
      term: 'Processing Time',
      definition: '14 business days'
    },
    {
      term: 'Assigned Officer',
      definition: 'Michael Chen, Senior Reviewer'
    },
  ];

  return (
    <DescriptionList
      variant="horizontal"
      items={applicationItems}
      bordered
      striped
    />
  );
}`,preview:e.jsx(t,{variant:"horizontal",items:[{term:"Application ID",definition:"APP-2026-04-00789"},{term:"Application Type",definition:"Business Registration"},{term:"Submitted Date",definition:"April 10, 2026 at 2:45 PM EDT"},{term:"Current Status",definition:e.jsxs("span",{className:"inline-flex items-center gap-1.5 text-[#008800]",children:[e.jsx(s,{size:16}),"Approved"]})},{term:"Processing Time",definition:"14 business days"},{term:"Assigned Officer",definition:"Michael Chen, Senior Reviewer"}],bordered:!0,striped:!0})},{title:"Document Metadata",description:"Document information with vertical layout and compact spacing.",code:`import { DescriptionList } from '@ux4g/react-core';
import { FileText } from 'lucide-react';

function Example() {
  const documentItems = [
    {
      term: 'Document Title',
      definition: '2026 Annual Budget Report',
      icon: <FileText size={16} />
    },
    {
      term: 'Document Type',
      definition: 'PDF Document'
    },
    {
      term: 'File Size',
      definition: '2.4 MB (2,458,624 bytes)'
    },
    {
      term: 'Last Modified',
      definition: 'April 8, 2026 at 10:23 AM EDT'
    },
    {
      term: 'Classification',
      definition: 'Internal Use Only'
    },
    {
      term: 'Version',
      definition: '3.2 (Draft)'
    },
  ];

  return (
    <DescriptionList
      variant="vertical"
      items={documentItems}
      compact
      showIcons
    />
  );
}`,preview:e.jsx(t,{variant:"vertical",items:[{term:"Document Title",definition:"2026 Annual Budget Report",icon:e.jsx(b,{size:16})},{term:"Document Type",definition:"PDF Document"},{term:"File Size",definition:"2.4 MB (2,458,624 bytes)"},{term:"Last Modified",definition:"April 8, 2026 at 10:23 AM EDT"},{term:"Classification",definition:"Internal Use Only"},{term:"Version",definition:"3.2 (Draft)"}],compact:!0,showIcons:!0})},{title:"Service Information",description:"Public service details with card layout and icons for enhanced visual hierarchy.",code:`import { DescriptionList } from '@ux4g/react-core';
import { Clock, MapPin, CheckCircle } from 'lucide-react';

function Example() {
  const serviceItems = [
    {
      term: 'Service Name',
      definition: 'Passport Application and Renewal'
    },
    {
      term: 'Availability',
      definition: 'Online and In-Person',
      icon: <CheckCircle size={16} />
    },
    {
      term: 'Processing Time',
      definition: '20-30 business days for standard service',
      icon: <Clock size={16} />
    },
    {
      term: 'Service Hours',
      definition: 'Monday - Friday, 8:00 AM - 4:00 PM EDT',
      icon: <Clock size={16} />
    },
    {
      term: 'Locations',
      definition: '35 Service Canada offices nationwide',
      icon: <MapPin size={16} />
    },
    {
      term: 'Fee Structure',
      definition: '$120 for 5-year passport, $160 for 10-year passport'
    },
  ];

  return (
    <DescriptionList
      variant="horizontal"
      items={serviceItems}
      cardLayout
      striped
      showIcons
    />
  );
}`,preview:e.jsx(t,{variant:"horizontal",items:[{term:"Service Name",definition:"Passport Application and Renewal"},{term:"Availability",definition:"Online and In-Person",icon:e.jsx(s,{size:16})},{term:"Processing Time",definition:"20-30 business days for standard service",icon:e.jsx(o,{size:16})},{term:"Service Hours",definition:"Monday - Friday, 8:00 AM - 4:00 PM EDT",icon:e.jsx(o,{size:16})},{term:"Locations",definition:"35 Service Canada offices nationwide",icon:e.jsx(c,{size:16})},{term:"Fee Structure",definition:"$120 for 5-year passport, $160 for 10-year passport"}],cardLayout:!0,striped:!0,showIcons:!0})},{title:"Approval Details",description:"Government approval summary with status indicators and compact card layout.",code:`import { DescriptionList } from '@ux4g/react-core';
import { CheckCircle, XCircle } from 'lucide-react';

function Example() {
  const approvalItems = [
    {
      term: 'Request ID',
      definition: 'REQ-2026-00234'
    },
    {
      term: 'Submitted By',
      definition: 'Dr. Emily Rodriguez, Department of Health'
    },
    {
      term: 'Approval Status',
      definition: (
        <span className="inline-flex items-center gap-1.5 text-[#008800] font-semibold">
          <CheckCircle size={16} />
          Approved
        </span>
      ),
      icon: <CheckCircle size={16} />
    },
    {
      term: 'Approved By',
      definition: 'James Thompson, Director of Operations'
    },
    {
      term: 'Approval Date',
      definition: 'April 11, 2026 at 9:15 AM EDT'
    },
    {
      term: 'Conditions',
      definition: 'None - unconditional approval granted'
    },
    {
      term: 'Valid Until',
      definition: 'April 11, 2027'
    },
  ];

  return (
    <DescriptionList
      variant="horizontal"
      items={approvalItems}
      cardLayout
      compact
    />
  );
}`,preview:e.jsx(t,{variant:"horizontal",items:[{term:"Request ID",definition:"REQ-2026-00234"},{term:"Submitted By",definition:"Dr. Emily Rodriguez, Department of Health"},{term:"Approval Status",definition:e.jsxs("span",{className:"inline-flex items-center gap-1.5 text-[#008800] font-semibold",children:[e.jsx(s,{size:16}),"Approved"]}),icon:e.jsx(s,{size:16})},{term:"Approved By",definition:"James Thompson, Director of Operations"},{term:"Approval Date",definition:"April 11, 2026 at 9:15 AM EDT"},{term:"Conditions",definition:"None - unconditional approval granted"},{term:"Valid Until",definition:"April 11, 2027"}],cardLayout:!0,compact:!0})}],reactCode:{component:`import React from 'react';
import { cn } from '../../utils/cn';
import { descriptionListVariants } from './description-list.variants';
import { DescriptionListProps, DescriptionListItem } from './DescriptionList.types';

export const DescriptionList: React.FC<DescriptionListProps> = ({
  items,
  className,
  variant = 'horizontal',
  bordered = false,
  striped = false,
  compact = false,
  cardLayout = false,
  showIcons = false,
  termWidth = 'medium',
  termClassName,
  definitionClassName,
  ...props
}) => {
  const containerClasses = cn(
    descriptionListVariants({ variant, bordered, striped, compact, cardLayout, termWidth }),
    className
  );

  const getItemClasses = () => {
    if (variant === 'horizontal') {
      return compact 
        ? 'grid grid-cols-3 gap-4 py-2 px-4'
        : 'grid grid-cols-3 gap-4 py-4 px-6';
    }
    return compact ? 'py-1' : 'py-2';
  };

  const getTermClasses = () => {
    const baseClasses = 'font-semibold text-[#374151] flex items-center gap-2';
    if (variant === 'horizontal') {
      return cn('col-span-1', baseClasses, termClassName);
    }
    return cn('mb-1', baseClasses, termClassName);
  };

  const getDefinitionClasses = () => {
    const baseClasses = 'text-[#1f2937]';
    if (variant === 'horizontal') {
      return cn('col-span-2', baseClasses, definitionClassName);
    }
    return cn(baseClasses, definitionClassName);
  };

  return (
    <div 
      className={cardLayout ? 'bg-white border border-[#d1d5db] rounded-lg p-6 shadow-sm' : ''}
      {...props}
    >
      <dl 
        className={containerClasses}
        role="list"
      >
        {items.map((item: DescriptionListItem, index: number) => (
          <div 
            key={index} 
            className={getItemClasses()}
            role="listitem"
          >
            <dt className={getTermClasses()}>
              {showIcons && item.icon && (
                <span 
                  className="inline-flex shrink-0 text-[#005196]" 
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
              )}
              {item.term}
            </dt>
            <dd className={getDefinitionClasses()}>
              {item.definition}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

DescriptionList.displayName = 'DescriptionList';`,types:`import { ReactNode } from 'react';

export interface DescriptionListItem {
  term: string;
  definition: string | ReactNode;
  icon?: ReactNode;
}

export interface DescriptionListProps 
  extends React.HTMLAttributes<HTMLDivElement> {
  items: DescriptionListItem[];
  variant?: 'horizontal' | 'vertical';
  bordered?: boolean;
  striped?: boolean;
  compact?: boolean;
  cardLayout?: boolean;
  showIcons?: boolean;
  termWidth?: 'narrow' | 'medium' | 'wide';
  termClassName?: string;
  definitionClassName?: string;
  className?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const descriptionListVariants = cva(
  [
    'w-full',
  ],
  {
    variants: {
      variant: {
        horizontal: [
          'divide-y divide-[#e5e7eb]',
        ],
        vertical: [
          'space-y-4',
        ],
      },
      bordered: {
        true: 'border border-[#d1d5db] rounded',
        false: '',
      },
      striped: {
        true: '[&>div:nth-child(even)]:bg-[#f9fafb]',
        false: '',
      },
      compact: {
        true: '',
        false: '',
      },
      cardLayout: {
        true: '',
        false: '',
      },
      termWidth: {
        narrow: '[&_dt]:col-span-1 [&_dd]:col-span-3',
        medium: '[&_dt]:col-span-1 [&_dd]:col-span-2',
        wide: '[&_dt]:col-span-2 [&_dd]:col-span-2',
      },
    },
    defaultVariants: {
      variant: 'horizontal',
      bordered: false,
      striped: false,
      compact: false,
      cardLayout: false,
      termWidth: 'medium',
    },
  }
);

export type DescriptionListVariantProps = VariantProps<typeof descriptionListVariants>;`},angularCode:{component:`import { Component, Input } from '@angular/core';

type DescriptionListVariant = 'horizontal' | 'vertical';
type TermWidth = 'narrow' | 'medium' | 'wide';

interface DescriptionListItem {
  term: string;
  definition: string;
  icon?: string;
}

@Component({
  selector: 'ux4g-description-list',
  template: \`
    <div [class]="getContainerClasses()">
      <dl [class]="getListClasses()" role="list">
        <div 
          *ngFor="let item of items; let i = index"
          [class]="getItemClasses()"
          role="listitem"
        >
          <dt [class]="getTermClasses()">
            <span 
              *ngIf="showIcons && item.icon" 
              class="inline-flex shrink-0 text-[#005196]"
              aria-hidden="true"
            >
              <i [class]="item.icon"></i>
            </span>
            {{ item.term }}
          </dt>
          <dd [class]="getDefinitionClasses()">
            {{ item.definition }}
          </dd>
        </div>
      </dl>
    </div>
  \`,
  styleUrls: ['./description-list.component.css']
})
export class DescriptionListComponent {
  @Input() items: DescriptionListItem[] = [];
  @Input() variant: DescriptionListVariant = 'horizontal';
  @Input() bordered = false;
  @Input() striped = false;
  @Input() compact = false;
  @Input() cardLayout = false;
  @Input() showIcons = false;
  @Input() termWidth: TermWidth = 'medium';
  @Input() className = '';
  @Input() termClassName = '';
  @Input() definitionClassName = '';

  getContainerClasses(): string {
    if (this.cardLayout) {
      return 'bg-white border border-[#d1d5db] rounded-lg p-6 shadow-sm';
    }
    return '';
  }

  getListClasses(): string {
    const classes = ['w-full'];
    
    if (this.variant === 'horizontal') {
      classes.push('divide-y divide-[#e5e7eb]');
    } else {
      classes.push('space-y-4');
    }
    
    if (this.bordered) {
      classes.push('border border-[#d1d5db] rounded');
    }
    
    if (this.striped) {
      classes.push('[&>div:nth-child(even)]:bg-[#f9fafb]');
    }
    
    if (this.className) {
      classes.push(this.className);
    }
    
    return classes.filter(Boolean).join(' ');
  }

  getItemClasses(): string {
    if (this.variant === 'horizontal') {
      return this.compact 
        ? 'grid grid-cols-3 gap-4 py-2 px-4'
        : 'grid grid-cols-3 gap-4 py-4 px-6';
    }
    return this.compact ? 'py-1' : 'py-2';
  }

  getTermClasses(): string {
    const classes = ['font-semibold text-[#374151] flex items-center gap-2'];
    
    if (this.variant === 'horizontal') {
      classes.push('col-span-1');
    } else {
      classes.push('mb-1');
    }
    
    if (this.termClassName) {
      classes.push(this.termClassName);
    }
    
    return classes.join(' ');
  }

  getDefinitionClasses(): string {
    const classes = ['text-[#1f2937]'];
    
    if (this.variant === 'horizontal') {
      classes.push('col-span-2');
    }
    
    if (this.definitionClassName) {
      classes.push(this.definitionClassName);
    }
    
    return classes.join(' ');
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionListComponent } from './description-list.component';

@NgModule({
  declarations: [DescriptionListComponent],
  imports: [CommonModule],
  exports: [DescriptionListComponent]
})
export class DescriptionListModule { }`,types:`export type DescriptionListVariant = 'horizontal' | 'vertical';
export type TermWidth = 'narrow' | 'medium' | 'wide';

export interface DescriptionListItem {
  term: string;
  definition: string;
  icon?: string;
}`},comparisons:[{system:"Material UI (Google)",component:"List / ListItem",variants:"dense, disablePadding",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://mui.com/material-ui/react-list/"},{system:"Ant Design (Alibaba)",component:"Descriptions",variants:"bordered, column, size",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/descriptions"},{system:"GOV.UK Design System",component:"Summary list",variants:"with actions, without borders",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/summary-list/"},{system:"Chakra UI",component:"DescriptionList (Recipe)",variants:"horizontal, vertical, size",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://www.chakra-ui.com/docs/components/description-list"},{system:"Adobe Spectrum",component:"KeyValuePair (proposed)",variants:"horizontal, vertical",accessibility:"WCAG 2.1 AA",documentation:"Limited",link:"https://spectrum.adobe.com/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Semantic HTML using <dl>, <dt>, and <dd> elements for proper structure (WCAG 1.3.1)",'role="list" and role="listitem" attributes for enhanced screen reader support',"Sufficient color contrast ratios (4.5:1 minimum) for all text (WCAG 1.4.3)",'Icons properly hidden from screen readers using aria-hidden="true"',"Meaningful term and definition relationships preserved in DOM structure","Keyboard navigable when interactive elements are present","Responsive layout maintains readability across viewport sizes (WCAG 1.4.10)","Clear visual separation between term-definition pairs for cognitive accessibility"],keyboardSupport:[{key:"Tab",action:"Navigate to interactive elements within definitions (if present)"},{key:"Shift + Tab",action:"Navigate backwards through interactive elements"}],screenReader:["Announces description list role to establish context","Reads term followed by definition in logical order","Preserves semantic relationship between terms and definitions",'Icons are hidden from screen reader (aria-hidden="true")',"Supports proper navigation through list items"]},tokens:{file:"/tokens/components/description-list.json",mappings:[{property:"Term Font Weight",token:"typography.fontWeight.semibold",value:"600"},{property:"Term Text Color",token:"colors.text.primary",value:"#374151 (Gray 700)"},{property:"Definition Text Color",token:"colors.text.secondary",value:"#1f2937 (Gray 800)"},{property:"Divider Color",token:"colors.border.light",value:"#e5e7eb (Gray 200)"},{property:"Striped Background",token:"colors.background.subtle",value:"#f9fafb (Gray 50)"},{property:"Border Color",token:"colors.border.default",value:"#d1d5db (Gray 300)"},{property:"Border Radius",token:"base.borderRadius",value:"8px"},{property:"Icon Color",token:"colors.primary.default",value:"#005196 (Navy 500)"},{property:"Spacing Compact (Vertical)",token:"spacing.compact.vertical",value:"8px"},{property:"Spacing Default (Vertical)",token:"spacing.default.vertical",value:"16px"},{property:"Spacing Compact (Horizontal)",token:"spacing.compact.horizontal",value:"16px"},{property:"Spacing Default (Horizontal)",token:"spacing.default.horizontal",value:"24px"},{property:"Card Shadow",token:"shadows.sm",value:"0 1px 2px 0 rgba(0, 0, 0, 0.05)"}]}})}export{k as default};
