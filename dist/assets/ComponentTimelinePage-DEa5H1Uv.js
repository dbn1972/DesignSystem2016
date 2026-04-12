import{j as e,d as n,F as s,b as m}from"./index-wYwTiNL-.js";import{C as p}from"./ComponentDocumentation-DKnXH-Pi.js";import{C as o}from"./clock-EAoSm68N.js";import{U as c}from"./user-Clui1dBr.js";import{S as u}from"./send-B4CVjX2k.js";import{C as g}from"./circle-x-hRMBIRMt.js";import{C as f}from"./circle-BJj3Wdfo.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const a=({items:l,variant:i="default",...d})=>e.jsx("div",{className:"space-y-0",...d,children:l.map((t,r)=>e.jsxs("div",{className:"relative flex gap-4 "+(i==="alternate"&&r%2===0?"flex-row-reverse":""),children:[e.jsxs("div",{className:"flex flex-col items-center "+(i==="left-aligned"?"w-auto":"w-24"),children:[i!=="left-aligned"&&e.jsx("div",{className:"text-sm text-gray-600 mb-2 "+(i==="alternate"&&r%2===0?"text-right":"text-left"),children:t.date}),e.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-full border-2 z-10 "+(t.status==="completed"?"bg-[#008800] border-[#008800] text-white":t.status==="pending"?"bg-yellow-500 border-yellow-500 text-white":t.status==="error"?"bg-[#dc2626] border-[#dc2626] text-white":t.status==="current"?"bg-[#005196] border-[#005196] text-white":"bg-white border-gray-300 text-gray-400"),children:t.icon||(t.status==="completed"?e.jsx(n,{size:16}):t.status==="pending"?e.jsx(o,{size:16}):t.status==="error"?e.jsx(g,{size:16}):t.status==="current"?e.jsx(m,{size:16}):e.jsx(f,{size:16}))}),r<l.length-1&&e.jsx("div",{className:"w-0.5 h-full min-h-[60px] bg-gray-300 mt-2"})]}),e.jsxs("div",{className:"flex-1 pb-8",children:[i==="left-aligned"&&e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:t.date}),e.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:t.title}),t.description&&e.jsx("p",{className:"text-sm text-gray-600",children:t.description}),t.metadata&&e.jsx("div",{className:"text-xs text-gray-500 mt-2",children:t.metadata})]})]},r))});function S(){return e.jsx(p,{name:"Timeline",description:"Vertical display of chronological events, process steps, or application history. Provides clear visual progression through time-ordered content with support for various states and metadata.",category:"Data Display",maturity:"beta",tier:"core",since:"v1.2.0",updated:"v2.1.0",props:[{name:"items",type:"TimelineItem[]",required:!0,description:"Array of timeline items to display. Each item contains title, description, date, status, and optional metadata."},{name:"variant",type:"'default' | 'alternate' | 'left-aligned'",default:"'default'",required:!1,description:"Layout variant. Default shows dates on left, alternate alternates left/right, left-aligned stacks date above content."},{name:"orientation",type:"'vertical' | 'horizontal'",default:"'vertical'",required:!1,description:"Timeline orientation. Currently only vertical is supported."},{name:"showConnector",type:"boolean",default:"true",required:!1,description:"Whether to show connecting line between timeline items."},{name:"iconPosition",type:"'start' | 'center' | 'end'",default:"'center'",required:!1,description:"Vertical position of the icon within timeline item."},{name:"colored",type:"boolean",default:"false",required:!1,description:"Whether to use colored icons and connectors based on status."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with base timeline classes."}],examples:[{title:"Application Status Tracking",description:"Track the progress of a government application through various stages with status indicators.",code:`import { Timeline } from '@ux4g/react-core';
import { CheckCircle, Clock, FileText } from 'lucide-react';

function Example() {
  const applicationSteps = [
    {
      title: 'Application Submitted',
      description: 'Your visa application has been received and is being processed.',
      date: 'Jan 15, 2026',
      status: 'completed',
      icon: <CheckCircle size={16} />,
      metadata: 'Reference: APP-2026-001234'
    },
    {
      title: 'Document Verification',
      description: 'Supporting documents are being reviewed by our team.',
      date: 'Jan 18, 2026',
      status: 'completed',
      icon: <FileText size={16} />
    },
    {
      title: 'Background Check',
      description: 'Security clearance and background verification in progress.',
      date: 'Jan 22, 2026',
      status: 'current',
      icon: <Clock size={16} />
    },
    {
      title: 'Final Decision',
      description: 'Application will be reviewed for final approval.',
      date: 'Pending',
      status: 'upcoming'
    }
  ];

  return (
    <Timeline items={applicationSteps} variant="default" />
  );
}`,preview:e.jsx(a,{variant:"default",items:[{title:"Application Submitted",description:"Your visa application has been received and is being processed.",date:"Jan 15, 2026",status:"completed",icon:e.jsx(n,{size:16}),metadata:"Reference: APP-2026-001234"},{title:"Document Verification",description:"Supporting documents are being reviewed by our team.",date:"Jan 18, 2026",status:"completed",icon:e.jsx(s,{size:16})},{title:"Background Check",description:"Security clearance and background verification in progress.",date:"Jan 22, 2026",status:"current",icon:e.jsx(o,{size:16})},{title:"Final Decision",description:"Application will be reviewed for final approval.",date:"Pending",status:"upcoming"}]})},{title:"Event History",description:"Display chronological event history with alternating layout for improved readability.",code:`import { Timeline } from '@ux4g/react-core';
import { User, FileText, CheckCircle } from 'lucide-react';

function Example() {
  const events = [
    {
      title: 'Account Created',
      description: 'New government services account registered successfully.',
      date: 'Mar 1, 2026',
      status: 'completed',
      icon: <User size={16} />
    },
    {
      title: 'Identity Verified',
      description: 'Two-factor authentication enabled and identity confirmed.',
      date: 'Mar 3, 2026',
      status: 'completed',
      icon: <CheckCircle size={16} />
    },
    {
      title: 'First Document Uploaded',
      description: 'Passport copy uploaded to secure document vault.',
      date: 'Mar 10, 2026',
      status: 'completed',
      icon: <FileText size={16} />
    },
    {
      title: 'Profile Updated',
      description: 'Contact information and mailing address updated.',
      date: 'Apr 2, 2026',
      status: 'completed'
    }
  ];

  return (
    <Timeline items={events} variant="alternate" />
  );
}`,preview:e.jsx(a,{variant:"alternate",items:[{title:"Account Created",description:"New government services account registered successfully.",date:"Mar 1, 2026",status:"completed",icon:e.jsx(c,{size:16})},{title:"Identity Verified",description:"Two-factor authentication enabled and identity confirmed.",date:"Mar 3, 2026",status:"completed",icon:e.jsx(n,{size:16})},{title:"First Document Uploaded",description:"Passport copy uploaded to secure document vault.",date:"Mar 10, 2026",status:"completed",icon:e.jsx(s,{size:16})},{title:"Profile Updated",description:"Contact information and mailing address updated.",date:"Apr 2, 2026",status:"completed"}]})},{title:"Process Steps with Status",description:"Multi-step process with completed, pending, and error states for operational workflows.",code:`import { Timeline } from '@ux4g/react-core';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

function Example() {
  const processSteps = [
    {
      title: 'Form Submission',
      description: 'Application form completed and submitted online.',
      date: '10:30 AM',
      status: 'completed'
    },
    {
      title: 'Payment Processing',
      description: 'Application fee payment confirmed via credit card.',
      date: '10:35 AM',
      status: 'completed'
    },
    {
      title: 'Document Upload',
      description: 'Required supporting documents failed validation.',
      date: '10:40 AM',
      status: 'error',
      metadata: 'Error: File format not supported. Please upload PDF or JPG.'
    },
    {
      title: 'Review Queue',
      description: 'Waiting for manual review by processing officer.',
      date: 'Pending',
      status: 'pending'
    }
  ];

  return (
    <Timeline items={processSteps} variant="left-aligned" colored />
  );
}`,preview:e.jsx(a,{variant:"left-aligned",items:[{title:"Form Submission",description:"Application form completed and submitted online.",date:"10:30 AM",status:"completed"},{title:"Payment Processing",description:"Application fee payment confirmed via credit card.",date:"10:35 AM",status:"completed"},{title:"Document Upload",description:"Required supporting documents failed validation.",date:"10:40 AM",status:"error",metadata:"Error: File format not supported. Please upload PDF or JPG."},{title:"Review Queue",description:"Waiting for manual review by processing officer.",date:"Pending",status:"pending"}]})},{title:"Approval Workflow",description:"Multi-level approval process showing hierarchical decision flow with reviewer information.",code:`import { Timeline } from '@ux4g/react-core';
import { User, CheckCircle, Clock } from 'lucide-react';

function Example() {
  const approvalSteps = [
    {
      title: 'Department Head Review',
      description: 'Approved by Sarah Johnson, Department of Immigration.',
      date: 'Apr 1, 2026',
      status: 'completed',
      icon: <User size={16} />,
      metadata: 'Approved in 2 business days'
    },
    {
      title: 'Legal Compliance Check',
      description: 'Reviewed and approved by Michael Chen, Legal Department.',
      date: 'Apr 3, 2026',
      status: 'completed',
      icon: <CheckCircle size={16} />,
      metadata: 'No compliance issues found'
    },
    {
      title: 'Director Approval',
      description: 'Pending approval from Regional Director.',
      date: 'Apr 5, 2026',
      status: 'current',
      icon: <Clock size={16} />,
      metadata: 'Assigned to Director Emily Rodriguez'
    },
    {
      title: 'Final Authorization',
      description: 'Awaiting final authorization from Assistant Secretary.',
      date: 'Scheduled',
      status: 'upcoming'
    }
  ];

  return (
    <Timeline items={approvalSteps} variant="default" />
  );
}`,preview:e.jsx(a,{variant:"default",items:[{title:"Department Head Review",description:"Approved by Sarah Johnson, Department of Immigration.",date:"Apr 1, 2026",status:"completed",icon:e.jsx(c,{size:16}),metadata:"Approved in 2 business days"},{title:"Legal Compliance Check",description:"Reviewed and approved by Michael Chen, Legal Department.",date:"Apr 3, 2026",status:"completed",icon:e.jsx(n,{size:16}),metadata:"No compliance issues found"},{title:"Director Approval",description:"Pending approval from Regional Director.",date:"Apr 5, 2026",status:"current",icon:e.jsx(o,{size:16}),metadata:"Assigned to Director Emily Rodriguez"},{title:"Final Authorization",description:"Awaiting final authorization from Assistant Secretary.",date:"Scheduled",status:"upcoming"}]})},{title:"Document History Timeline",description:"Track document revisions and changes with detailed metadata and user information.",code:`import { Timeline } from '@ux4g/react-core';
import { FileText, Send, CheckCircle } from 'lucide-react';

function Example() {
  const documentHistory = [
    {
      title: 'Document Created',
      description: 'Initial draft of policy document created.',
      date: 'Mar 15, 2026',
      status: 'completed',
      icon: <FileText size={16} />,
      metadata: 'Created by John Smith'
    },
    {
      title: 'First Revision',
      description: 'Updated sections 3 and 5 based on stakeholder feedback.',
      date: 'Mar 20, 2026',
      status: 'completed',
      metadata: 'Modified by Jane Doe - Version 1.1'
    },
    {
      title: 'Sent for Review',
      description: 'Document sent to legal team for compliance review.',
      date: 'Mar 25, 2026',
      status: 'completed',
      icon: <Send size={16} />,
      metadata: 'Sent to 5 reviewers'
    },
    {
      title: 'Final Approval',
      description: 'Document approved and published to internal portal.',
      date: 'Apr 1, 2026',
      status: 'completed',
      icon: <CheckCircle size={16} />,
      metadata: 'Approved by Director - Version 2.0'
    }
  ];

  return (
    <Timeline items={documentHistory} variant="left-aligned" />
  );
}`,preview:e.jsx(a,{variant:"left-aligned",items:[{title:"Document Created",description:"Initial draft of policy document created.",date:"Mar 15, 2026",status:"completed",icon:e.jsx(s,{size:16}),metadata:"Created by John Smith"},{title:"First Revision",description:"Updated sections 3 and 5 based on stakeholder feedback.",date:"Mar 20, 2026",status:"completed",metadata:"Modified by Jane Doe - Version 1.1"},{title:"Sent for Review",description:"Document sent to legal team for compliance review.",date:"Mar 25, 2026",status:"completed",icon:e.jsx(u,{size:16}),metadata:"Sent to 5 reviewers"},{title:"Final Approval",description:"Document approved and published to internal portal.",date:"Apr 1, 2026",status:"completed",icon:e.jsx(n,{size:16}),metadata:"Approved by Director - Version 2.0"}]})}],reactCode:{component:`import React from 'react';
import { cn } from '../../utils/cn';
import { timelineVariants } from './timeline.variants';
import { TimelineProps, TimelineItem } from './Timeline.types';
import { CheckCircle, Clock, Circle, XCircle, AlertCircle } from 'lucide-react';

const StatusIcon = ({ status }: { status?: string }) => {
  switch (status) {
    case 'completed':
      return <CheckCircle size={16} />;
    case 'pending':
      return <Clock size={16} />;
    case 'error':
      return <XCircle size={16} />;
    case 'current':
      return <AlertCircle size={16} />;
    default:
      return <Circle size={16} />;
  }
};

export const Timeline: React.FC<TimelineProps> = ({
  items,
  variant = 'default',
  orientation = 'vertical',
  showConnector = true,
  iconPosition = 'center',
  colored = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        timelineVariants({ variant, orientation }),
        className
      )}
      role="list"
      aria-label="Timeline"
      {...props}
    >
      {items.map((item: TimelineItem, index: number) => {
        const isAlternate = variant === 'alternate' && index % 2 === 0;
        const isLeftAligned = variant === 'left-aligned';
        
        return (
          <div
            key={index}
            className={cn(
              'relative flex gap-4',
              isAlternate && 'flex-row-reverse'
            )}
            role="listitem"
            aria-label={item.title}
          >
            <div
              className={cn(
                'flex flex-col items-center',
                isLeftAligned ? 'w-auto' : 'w-24'
              )}
            >
              {!isLeftAligned && (
                <div
                  className={cn(
                    'text-sm text-gray-600 mb-2',
                    isAlternate && 'text-right'
                  )}
                  aria-label="Date"
                >
                  {item.date}
                </div>
              )}
              
              <div
                className={cn(
                  'flex items-center justify-center w-8 h-8 rounded-full border-2 z-10',
                  item.status === 'completed' &&
                    'bg-[#008800] border-[#008800] text-white',
                  item.status === 'pending' &&
                    'bg-yellow-500 border-yellow-500 text-white',
                  item.status === 'error' &&
                    'bg-[#dc2626] border-[#dc2626] text-white',
                  item.status === 'current' &&
                    'bg-[#005196] border-[#005196] text-white',
                  !item.status &&
                    'bg-white border-gray-300 text-gray-400'
                )}
                role="img"
                aria-label={item.status || 'upcoming'}
              >
                {item.icon || <StatusIcon status={item.status} />}
              </div>
              
              {showConnector && index < items.length - 1 && (
                <div
                  className={cn(
                    'w-0.5 h-full min-h-[60px] mt-2',
                    colored && item.status === 'completed'
                      ? 'bg-[#008800]'
                      : 'bg-gray-300'
                  )}
                  aria-hidden="true"
                />
              )}
            </div>
            
            <div className="flex-1 pb-8">
              {isLeftAligned && (
                <div className="text-xs text-gray-500 mb-1">
                  {item.date}
                </div>
              )}
              
              <h3 className="font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              
              {item.description && (
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              )}
              
              {item.metadata && (
                <div className="text-xs text-gray-500 mt-2">
                  {item.metadata}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};`,types:`import { ReactNode } from 'react';

export interface TimelineItem {
  title: string;
  description?: string;
  date: string;
  status?: 'completed' | 'current' | 'pending' | 'upcoming' | 'error';
  icon?: ReactNode;
  metadata?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  variant?: 'default' | 'alternate' | 'left-aligned';
  orientation?: 'vertical' | 'horizontal';
  showConnector?: boolean;
  iconPosition?: 'start' | 'center' | 'end';
  colored?: boolean;
  className?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const timelineVariants = cva(
  [
    'space-y-0',
    'w-full'
  ],
  {
    variants: {
      variant: {
        default: [
          'timeline-default'
        ],
        alternate: [
          'timeline-alternate'
        ],
        'left-aligned': [
          'timeline-left-aligned'
        ],
      },
      orientation: {
        vertical: [
          'flex-col'
        ],
        horizontal: [
          'flex-row'
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'vertical',
    },
  }
);

export type TimelineVariantProps = VariantProps<typeof timelineVariants>;`},angularCode:{component:`import { Component, Input } from '@angular/core';

export interface TimelineItem {
  title: string;
  description?: string;
  date: string;
  status?: 'completed' | 'current' | 'pending' | 'upcoming' | 'error';
  metadata?: string;
}

type TimelineVariant = 'default' | 'alternate' | 'left-aligned';
type TimelineOrientation = 'vertical' | 'horizontal';

@Component({
  selector: 'ux4g-timeline',
  template: \`
    <div
      [class]="getTimelineClasses()"
      role="list"
      aria-label="Timeline"
    >
      <div
        *ngFor="let item of items; let i = index"
        [class]="getItemClasses(i)"
        role="listitem"
        [attr.aria-label]="item.title"
      >
        <div [class]="getIconContainerClasses()">
          <div
            *ngIf="!isLeftAligned()"
            [class]="getDateClasses(i)"
            aria-label="Date"
          >
            {{ item.date }}
          </div>
          
          <div
            [class]="getIconClasses(item.status)"
            role="img"
            [attr.aria-label]="item.status || 'upcoming'"
          >
            <ng-container [ngSwitch]="item.status">
              <span *ngSwitchCase="'completed'" class="icon-check"></span>
              <span *ngSwitchCase="'pending'" class="icon-clock"></span>
              <span *ngSwitchCase="'error'" class="icon-x"></span>
              <span *ngSwitchCase="'current'" class="icon-alert"></span>
              <span *ngSwitchDefault class="icon-circle"></span>
            </ng-container>
          </div>
          
          <div
            *ngIf="showConnector && i < items.length - 1"
            [class]="getConnectorClasses(item.status)"
            aria-hidden="true"
          ></div>
        </div>
        
        <div class="flex-1 pb-8">
          <div
            *ngIf="isLeftAligned()"
            class="text-xs text-gray-500 mb-1"
          >
            {{ item.date }}
          </div>
          
          <h3 class="font-semibold text-gray-900 mb-1">
            {{ item.title }}
          </h3>
          
          <p
            *ngIf="item.description"
            class="text-sm text-gray-600"
          >
            {{ item.description }}
          </p>
          
          <div
            *ngIf="item.metadata"
            class="text-xs text-gray-500 mt-2"
          >
            {{ item.metadata }}
          </div>
        </div>
      </div>
    </div>
  \`,
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  @Input() items: TimelineItem[] = [];
  @Input() variant: TimelineVariant = 'default';
  @Input() orientation: TimelineOrientation = 'vertical';
  @Input() showConnector = true;
  @Input() iconPosition: 'start' | 'center' | 'end' = 'center';
  @Input() colored = false;

  getTimelineClasses(): string {
    const baseClasses = 'space-y-0 w-full';
    const orientationClass = this.orientation === 'vertical' ? 'flex-col' : 'flex-row';
    const variantClass = 'timeline-' + this.variant;
    
    return [baseClasses, orientationClass, variantClass]
      .filter(Boolean)
      .join(' ');
  }

  getItemClasses(index: number): string {
    const baseClasses = 'relative flex gap-4';
    const isAlternate = this.variant === 'alternate' && index % 2 === 0;
    
    return isAlternate
      ? baseClasses + ' flex-row-reverse'
      : baseClasses;
  }

  getIconContainerClasses(): string {
    const baseClasses = 'flex flex-col items-center';
    const widthClass = this.isLeftAligned() ? 'w-auto' : 'w-24';
    
    return baseClasses + ' ' + widthClass;
  }

  getDateClasses(index: number): string {
    const baseClasses = 'text-sm text-gray-600 mb-2';
    const isAlternate = this.variant === 'alternate' && index % 2 === 0;
    
    return isAlternate
      ? baseClasses + ' text-right'
      : baseClasses + ' text-left';
  }

  getIconClasses(status?: string): string {
    const baseClasses = 'flex items-center justify-center w-8 h-8 rounded-full border-2 z-10';
    
    if (status === 'completed') {
      return baseClasses + ' bg-green-600 border-green-600 text-white';
    } else if (status === 'pending') {
      return baseClasses + ' bg-yellow-500 border-yellow-500 text-white';
    } else if (status === 'error') {
      return baseClasses + ' bg-red-600 border-red-600 text-white';
    } else if (status === 'current') {
      return baseClasses + ' bg-blue-600 border-blue-600 text-white';
    }
    
    return baseClasses + ' bg-white border-gray-300 text-gray-400';
  }

  getConnectorClasses(status?: string): string {
    const baseClasses = 'w-0.5 h-full min-h-[60px] mt-2';
    
    if (this.colored && status === 'completed') {
      return baseClasses + ' bg-green-600';
    }
    
    return baseClasses + ' bg-gray-300';
  }

  isLeftAligned(): boolean {
    return this.variant === 'left-aligned';
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [TimelineComponent],
  imports: [CommonModule],
  exports: [TimelineComponent]
})
export class TimelineModule { }`,types:`export interface TimelineItem {
  title: string;
  description?: string;
  date: string;
  status?: 'completed' | 'current' | 'pending' | 'upcoming' | 'error';
  metadata?: string;
}

export type TimelineVariant = 'default' | 'alternate' | 'left-aligned';
export type TimelineOrientation = 'vertical' | 'horizontal';`},comparisons:[{system:"Material UI (Google)",component:"Timeline",variants:"left, right, alternate, opposite",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-timeline/"},{system:"Ant Design (Alibaba)",component:"Timeline",variants:"left, right, alternate, label mode",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/timeline"},{system:"GOV.UK Design System",component:"Timeline (custom)",variants:"vertical list",accessibility:"WCAG 2.1 AAA",documentation:"Limited",link:"https://design-system.service.gov.uk/"},{system:"Chakra UI",component:"Timeline (community)",variants:"vertical, horizontal",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/community/recipes/timeline"},{system:"Mantine",component:"Timeline",variants:"left, right, alternate",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mantine.dev/core/timeline/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['Semantic list structure with role="list" and role="listitem" for proper document outline (WCAG 1.3.1)',"Aria-label attributes provide context for timeline and individual items","Status icons include aria-label for screen reader announcements","Sufficient color contrast ratios for all status indicators (WCAG 1.4.3)",'Decorative connector lines marked with aria-hidden="true"',"Keyboard navigation support through standard list navigation patterns","Dates and metadata properly associated with timeline items","Clear visual hierarchy with heading elements for item titles"],keyboardSupport:[{key:"Tab",action:"Navigate through interactive elements within timeline items"},{key:"Shift + Tab",action:"Navigate backwards through timeline"},{key:"Arrow Down",action:"Move to next timeline item (if applicable)"},{key:"Arrow Up",action:"Move to previous timeline item (if applicable)"}],screenReader:["Announces timeline as a list structure","Reads each timeline item with title, date, and description","Announces status of each timeline item (completed, pending, error, etc.)","Connector lines and decorative icons hidden from screen readers","Metadata and additional information properly announced in context"]},tokens:{file:"/tokens/components/timeline.json",mappings:[{property:"Icon Size",token:"base.iconSize.md",value:"32px"},{property:"Icon Border Width",token:"base.borderWidth.md",value:"2px"},{property:"Connector Width",token:"base.lineWidth.sm",value:"2px"},{property:"Item Spacing",token:"base.spacing.lg",value:"32px"},{property:"Completed Background",token:"status.success.background",value:"#008800 (Green 600)"},{property:"Pending Background",token:"status.warning.background",value:"#F59E0B (Yellow 500)"},{property:"Error Background",token:"status.error.background",value:"#DC2626 (Red 600)"},{property:"Current Background",token:"status.info.background",value:"#005196 (Navy 500)"},{property:"Connector Color",token:"base.color.border.default",value:"#D1D5DB (Gray 300)"},{property:"Title Font Size",token:"base.fontSize.md",value:"16px"},{property:"Description Font Size",token:"base.fontSize.sm",value:"14px"},{property:"Date Font Size",token:"base.fontSize.sm",value:"14px"}]}})}export{S as default};
