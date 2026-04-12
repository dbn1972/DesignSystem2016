import{e as p,j as e,R as t,S as d,b as m}from"./index-wYwTiNL-.js";import{C as u}from"./ComponentDocumentation-DKnXH-Pi.js";import{F as y}from"./file-x-CatZuV1D.js";import{U as f}from"./upload-CZX8gqKz.js";import{F as g}from"./folder-open-BiVf0IeY.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],h=p("inbox",b),o=({variant:n,icon:a,title:c,description:i,actionLabel:r,onAction:s,...l})=>e.jsxs("div",{className:"flex flex-col items-center justify-center p-8 text-center "+(n==="error"?"bg-red-50 border border-red-200 rounded-lg":n==="search"?"bg-blue-50 border border-blue-200 rounded-lg":n==="first-time"?"bg-green-50 border border-green-200 rounded-lg":"bg-gray-50 border border-gray-200 rounded-lg"),role:"status","aria-live":"polite",...l,children:[a&&e.jsx("div",{className:"mb-4 text-gray-400","aria-hidden":"true",children:a}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:c}),i&&e.jsx("p",{className:"text-sm text-gray-600 mb-4 max-w-md",children:i}),r&&s&&e.jsx("button",{onClick:s,className:"inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] bg-[#005196] text-white border-[#005196] hover:bg-[#004178] h-10 px-4 text-base",children:r})]});function N(){return e.jsx(u,{name:"Empty State",description:"Placeholder content when no data is available, guiding users to take action. Provides clear messaging and actionable next steps for various empty states across government services.",category:"Feedback",maturity:"beta",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"variant",type:"'default' | 'error' | 'search' | 'first-time'",default:"'default'",required:!1,description:"Visual variant of the empty state. Default for general empty states, error for failed operations, search for no search results, first-time for new user onboarding."},{name:"icon",type:"ReactNode",required:!1,description:"Icon to display above the title. Should be relevant to the empty state context."},{name:"illustration",type:"ReactNode",required:!1,description:"Custom illustration or image to display instead of icon. Useful for more detailed empty states."},{name:"title",type:"string",required:!0,description:"Primary heading text describing the empty state. Should be clear and concise."},{name:"description",type:"string",required:!1,description:"Secondary text providing additional context or guidance. Explains why the state is empty or what the user can do."},{name:"actionLabel",type:"string",required:!1,description:"Text for the primary action button. Should be action-oriented."},{name:"onAction",type:"() => void",required:!1,description:"Callback function when the primary action button is clicked."},{name:"secondaryActionLabel",type:"string",required:!1,description:"Text for an optional secondary action button."},{name:"onSecondaryAction",type:"() => void",required:!1,description:"Callback function when the secondary action button is clicked."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with variant classes."},{name:"ariaLabel",type:"string",required:!1,description:"Accessible label for screen readers. Defaults to title."}],examples:[{title:"No Results Found",description:"Default empty state when search or filter returns no results.",code:`import { EmptyState } from '@ux4g/react-core';
import { Search } from 'lucide-react';

function Example() {
  return (
    <EmptyState
      variant="search"
      icon={<Search size={48} />}
      title="No results found"
      description="We could not find any items matching your search criteria. Try adjusting your filters or search terms."
      actionLabel="Clear filters"
      onAction={() => console.log('Filters cleared')}
    />
  );
}`,preview:e.jsx(o,{variant:"search",icon:t.createElement(d,{size:48}),title:"No results found",description:"We could not find any items matching your search criteria. Try adjusting your filters or search terms.",actionLabel:"Clear filters",onAction:()=>console.log("Filters cleared")})},{title:"No Applications",description:"Empty state for government service application list.",code:`import { EmptyState } from '@ux4g/react-core';
import { FileX } from 'lucide-react';

function Example() {
  return (
    <EmptyState
      icon={<FileX size={48} />}
      title="No applications yet"
      description="You have not submitted any applications. Start a new application to access government services."
      actionLabel="Start new application"
      onAction={() => console.log('New application started')}
    />
  );
}`,preview:e.jsx(o,{icon:t.createElement(y,{size:48}),title:"No applications yet",description:"You have not submitted any applications. Start a new application to access government services.",actionLabel:"Start new application",onAction:()=>console.log("New application started")})},{title:"Empty Inbox",description:"Empty state for messaging or notification inbox.",code:`import { EmptyState } from '@ux4g/react-core';
import { Inbox } from 'lucide-react';

function Example() {
  return (
    <EmptyState
      icon={<Inbox size={48} />}
      title="Your inbox is empty"
      description="You have no messages at this time. New notifications and messages will appear here."
    />
  );
}`,preview:e.jsx(o,{icon:t.createElement(h,{size:48}),title:"Your inbox is empty",description:"You have no messages at this time. New notifications and messages will appear here."})},{title:"No Documents Uploaded",description:"Empty state for document upload area with action button.",code:`import { EmptyState } from '@ux4g/react-core';
import { Upload } from 'lucide-react';

function Example() {
  return (
    <EmptyState
      icon={<Upload size={48} />}
      title="No documents uploaded"
      description="Upload supporting documents for your application. Accepted formats: PDF, JPG, PNG. Maximum file size: 10MB."
      actionLabel="Upload document"
      onAction={() => console.log('Upload initiated')}
      secondaryActionLabel="Learn more"
      onSecondaryAction={() => console.log('Help opened')}
    />
  );
}`,preview:e.jsx("div",{className:"space-y-4",children:e.jsx(o,{icon:t.createElement(f,{size:48}),title:"No documents uploaded",description:"Upload supporting documents for your application. Accepted formats: PDF, JPG, PNG. Maximum file size: 10MB.",actionLabel:"Upload document",onAction:()=>console.log("Upload initiated")})})},{title:"First-Time Setup",description:"Welcoming empty state for new users with onboarding guidance.",code:`import { EmptyState } from '@ux4g/react-core';
import { FolderOpen } from 'lucide-react';

function Example() {
  return (
    <EmptyState
      variant="first-time"
      icon={<FolderOpen size={48} />}
      title="Welcome to the Citizen Portal"
      description="Get started by completing your profile and exploring available government services. We will guide you through each step."
      actionLabel="Complete profile"
      onAction={() => console.log('Profile setup started')}
    />
  );
}`,preview:e.jsx(o,{variant:"first-time",icon:t.createElement(g,{size:48}),title:"Welcome to the Citizen Portal",description:"Get started by completing your profile and exploring available government services. We will guide you through each step.",actionLabel:"Complete profile",onAction:()=>console.log("Profile setup started")})},{title:"Error State",description:"Empty state shown when data failed to load or an error occurred.",code:`import { EmptyState } from '@ux4g/react-core';
import { AlertCircle } from 'lucide-react';

function Example() {
  return (
    <EmptyState
      variant="error"
      icon={<AlertCircle size={48} />}
      title="Unable to load data"
      description="We encountered an error while loading your information. Please try again or contact support if the problem persists."
      actionLabel="Try again"
      onAction={() => console.log('Retry attempted')}
    />
  );
}`,preview:e.jsx(o,{variant:"error",icon:t.createElement(m,{size:48}),title:"Unable to load data",description:"We encountered an error while loading your information. Please try again or contact support if the problem persists.",actionLabel:"Try again",onAction:()=>console.log("Retry attempted")})}],reactCode:{component:`import React from 'react';
import { cn } from '../../utils/cn';
import { emptyStateVariants } from './emptyState.variants';
import { EmptyStateProps } from './EmptyState.types';

export const EmptyState: React.FC<EmptyStateProps> = ({
  variant = 'default',
  icon,
  illustration,
  title,
  description,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  className,
  ariaLabel,
}) => {
  return (
    <div
      className={cn(
        emptyStateVariants({ variant }),
        className
      )}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel || title}
    >
      {(icon || illustration) && (
        <div className="mb-4 text-gray-400" aria-hidden="true">
          {illustration || icon}
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      {description && (
        <p className="text-sm text-gray-600 mb-4 max-w-md">
          {description}
        </p>
      )}
      
      {(actionLabel || secondaryActionLabel) && (
        <div className="flex flex-wrap gap-3 justify-center">
          {actionLabel && onAction && (
            <button
              onClick={onAction}
              className="inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] bg-[#005196] text-white border-[#005196] hover:bg-[#004178] h-10 px-4 text-base"
            >
              {actionLabel}
            </button>
          )}
          {secondaryActionLabel && onSecondaryAction && (
            <button
              onClick={onSecondaryAction}
              className="inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] bg-white text-[#005196] border-[#005196] hover:bg-[#f5f5f5] h-10 px-4 text-base"
            >
              {secondaryActionLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

EmptyState.displayName = 'EmptyState';`,types:`export interface EmptyStateProps {
  variant?: 'default' | 'error' | 'search' | 'first-time';
  icon?: React.ReactNode;
  illustration?: React.ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  className?: string;
  ariaLabel?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const emptyStateVariants = cva(
  [
    'flex flex-col items-center justify-center',
    'p-8 text-center',
    'rounded-lg border',
    'transition-colors duration-150',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-gray-50 border-gray-200',
        ],
        error: [
          'bg-red-50 border-red-200',
        ],
        search: [
          'bg-blue-50 border-blue-200',
        ],
        'first-time': [
          'bg-green-50 border-green-200',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type EmptyStateVariantProps = VariantProps<typeof emptyStateVariants>;`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';

type EmptyStateVariant = 'default' | 'error' | 'search' | 'first-time';

@Component({
  selector: 'ux4g-empty-state',
  template: \`
    <div
      role="status"
      aria-live="polite"
      [attr.aria-label]="ariaLabel || title"
      [class]="getEmptyStateClasses()"
    >
      <div *ngIf="icon || illustration" class="mb-4 text-gray-400" aria-hidden="true">
        <ng-content select="[icon]"></ng-content>
      </div>
      
      <h3 class="text-lg font-semibold text-gray-900 mb-2">
        {{ title }}
      </h3>
      
      <p *ngIf="description" class="text-sm text-gray-600 mb-4 max-w-md">
        {{ description }}
      </p>
      
      <div *ngIf="actionLabel || secondaryActionLabel" class="flex flex-wrap gap-3 justify-center">
        <button
          *ngIf="actionLabel"
          (click)="handleAction()"
          class="ux4g-button ux4g-button-primary ux4g-button-md"
        >
          {{ actionLabel }}
        </button>
        <button
          *ngIf="secondaryActionLabel"
          (click)="handleSecondaryAction()"
          class="ux4g-button ux4g-button-secondary ux4g-button-md"
        >
          {{ secondaryActionLabel }}
        </button>
      </div>
    </div>
  \`,
  styleUrls: ['./empty-state.component.css']
})
export class EmptyStateComponent {
  @Input() variant: EmptyStateVariant = 'default';
  @Input() icon = false;
  @Input() illustration = false;
  @Input() title!: string;
  @Input() description?: string;
  @Input() actionLabel?: string;
  @Input() secondaryActionLabel?: string;
  @Input() ariaLabel?: string;
  
  @Output() action = new EventEmitter<void>();
  @Output() secondaryAction = new EventEmitter<void>();

  getEmptyStateClasses(): string {
    const baseClasses = 'ux4g-empty-state';
    const variantClass = 'ux4g-empty-state-' + this.variant;
    
    return [baseClasses, variantClass]
      .filter(Boolean)
      .join(' ');
  }

  handleAction(): void {
    this.action.emit();
  }

  handleSecondaryAction(): void {
    this.secondaryAction.emit();
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state.component';

@NgModule({
  declarations: [EmptyStateComponent],
  imports: [CommonModule],
  exports: [EmptyStateComponent]
})
export class EmptyStateModule { }`,types:"export type EmptyStateVariant = 'default' | 'error' | 'search' | 'first-time';"},comparisons:[{system:"Material UI (Google)",component:"No dedicated component",variants:"Custom implementation",accessibility:"N/A",documentation:"Pattern only",link:"https://mui.com/material-ui/react-skeleton/"},{system:"Ant Design (Alibaba)",component:"Empty",variants:"default, simple",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/empty"},{system:"GOV.UK Design System",component:"Pattern guidance",variants:"Context-specific",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/patterns/"},{system:"Chakra UI",component:"Custom component pattern",variants:"Custom",accessibility:"WCAG 2.1 AA",documentation:"Pattern only",link:"https://chakra-ui.com/docs/components"},{system:"Polaris (Shopify)",component:"EmptyState",variants:"default, subdued",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://polaris.shopify.com/components/layout-and-structure/empty-state"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['ARIA live region (role="status", aria-live="polite") announces content changes to screen readers',"Semantic heading structure with h3 element for title","Descriptive aria-label for the container, defaulting to title",'Icons and illustrations marked with aria-hidden="true" to prevent redundant announcements',"Action buttons meet minimum 44x44px touch target size (WCAG 2.5.5)","Focus indicators with 2px ring and 2px offset for keyboard navigation (WCAG 2.4.7)","Color contrast ratios meet or exceed 4.5:1 for all text (WCAG 1.4.3)","Clear, actionable button labels that describe the action being performed"],keyboardSupport:[{key:"Tab",action:"Move focus to action buttons when present"},{key:"Shift + Tab",action:"Move focus backwards through action buttons"},{key:"Enter",action:"Activate focused action button"},{key:"Space",action:"Activate focused action button"}],screenReader:["Container announced as status region with polite live region","Title announced as heading level 3","Description announced as supplementary text","Action buttons announced with their label and button role","Icons and illustrations hidden from screen reader tree","State changes (empty to populated) announced automatically via aria-live"]},tokens:{file:"/tokens/components/empty-state.json",mappings:[{property:"Container Padding",token:"base.spacing.8",value:"32px"},{property:"Border Radius",token:"base.borderRadius",value:"8px"},{property:"Border Width",token:"base.borderWidth",value:"1px"},{property:"Title Font Size",token:"base.fontSize.lg",value:"18px"},{property:"Title Font Weight",token:"base.fontWeight.semibold",value:"600"},{property:"Description Font Size",token:"base.fontSize.sm",value:"14px"},{property:"Description Max Width",token:"base.maxWidth.md",value:"448px"},{property:"Icon Size",token:"base.iconSize.xl",value:"48px"},{property:"Icon Color",token:"base.color.gray.400",value:"#9CA3AF"},{property:"Default Background",token:"variant.default.background",value:"#F9FAFB (Gray 50)"},{property:"Default Border",token:"variant.default.border",value:"#E5E7EB (Gray 200)"},{property:"Error Background",token:"variant.error.background",value:"#FEF2F2 (Red 50)"},{property:"Error Border",token:"variant.error.border",value:"#FECACA (Red 200)"},{property:"Search Background",token:"variant.search.background",value:"#EFF6FF (Blue 50)"},{property:"Search Border",token:"variant.search.border",value:"#BFDBFE (Blue 200)"},{property:"First-time Background",token:"variant.firstTime.background",value:"#F0FDF4 (Green 50)"},{property:"First-time Border",token:"variant.firstTime.border",value:"#BBF7D0 (Green 200)"},{property:"Button Gap",token:"base.spacing.3",value:"12px"},{property:"Content Gap",token:"base.spacing.4",value:"16px"}]},useCases:[{title:"No Applications Found",scenario:"Citizen portal showing empty application list for a user who has not submitted any applications yet.",implementation:'Display empty state with FileX icon, encouraging message, and prominent "Start New Application" button.',code:`import { EmptyState } from '@ux4g/react-core';
import { FileX } from 'lucide-react';

function ApplicationList() {
  const applications = [];
  
  if (applications.length === 0) {
    return (
      <EmptyState
        icon={<FileX size={48} />}
        title="No applications found"
        description="You have not submitted any applications. Start a new application to access government services and benefits."
        actionLabel="Start new application"
        onAction={() => router.push('/applications/new')}
      />
    );
  }
  
  return <ApplicationGrid applications={applications} />;
}`},{title:"No Pending Approvals",scenario:"Government employee dashboard showing no pending approval requests in their queue.",implementation:"Use default variant with Inbox icon and informative message about the empty queue state.",code:`import { EmptyState } from '@ux4g/react-core';
import { Inbox } from 'lucide-react';

function ApprovalQueue() {
  const pendingApprovals = [];
  
  if (pendingApprovals.length === 0) {
    return (
      <EmptyState
        icon={<Inbox size={48} />}
        title="No pending approvals"
        description="Your approval queue is empty. New approval requests will appear here as they are submitted."
      />
    );
  }
  
  return <ApprovalList items={pendingApprovals} />;
}`},{title:"Search Returned Zero Results",scenario:"User searching for government services or documents with no matching results found.",implementation:"Use search variant with Search icon, helpful message, and action to clear or modify search.",code:`import { EmptyState } from '@ux4g/react-core';
import { Search } from 'lucide-react';

function ServiceSearch({ query, onClearSearch }) {
  const results = [];
  
  if (query && results.length === 0) {
    return (
      <EmptyState
        variant="search"
        icon={<Search size={48} />}
        title="No services found"
        description={"We could not find any services matching \\"" + query + "\\". Try different keywords or browse all services."}
        actionLabel="Clear search"
        onAction={onClearSearch}
        secondaryActionLabel="Browse all"
        onSecondaryAction={() => router.push('/services')}
      />
    );
  }
  
  return <ServiceResults results={results} />;
}`},{title:"No Documents in Folder",scenario:"Document management system showing an empty folder with no uploaded files.",implementation:"Display empty state with Upload icon and action button to upload first document.",code:`import { EmptyState } from '@ux4g/react-core';
import { Upload } from 'lucide-react';

function DocumentFolder({ folderId, onUpload }) {
  const documents = [];
  
  if (documents.length === 0) {
    return (
      <EmptyState
        icon={<Upload size={48} />}
        title="No documents in this folder"
        description="Upload documents to organize and manage your files. Supported formats: PDF, DOC, DOCX, JPG, PNG. Maximum size: 25MB."
        actionLabel="Upload document"
        onAction={onUpload}
      />
    );
  }
  
  return <DocumentGrid documents={documents} />;
}`},{title:"First-Time Citizen Portal",scenario:"New user accessing the citizen portal for the first time with no history or saved items.",implementation:"Use first-time variant with welcoming message and onboarding action to complete profile.",code:`import { EmptyState } from '@ux4g/react-core';
import { FolderOpen } from 'lucide-react';

function Dashboard({ isFirstTime, onStartOnboarding }) {
  if (isFirstTime) {
    return (
      <EmptyState
        variant="first-time"
        icon={<FolderOpen size={48} />}
        title="Welcome to the Citizen Portal"
        description="Get started by completing your profile to access personalized government services, track applications, and receive important notifications."
        actionLabel="Complete your profile"
        onAction={onStartOnboarding}
        secondaryActionLabel="Explore services"
        onSecondaryAction={() => router.push('/services')}
      />
    );
  }
  
  return <DashboardContent />;
}`}]})}export{N as default};
