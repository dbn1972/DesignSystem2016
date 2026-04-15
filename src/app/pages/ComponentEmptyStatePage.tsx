/**
 * Empty State Component Documentation Page
 * Complete documentation for the Empty State component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Inbox, Search, FileX, AlertCircle, Upload, FolderOpen } from 'lucide-react';

// Import the actual Empty State component for live preview
const EmptyStatePreview = ({ variant, icon, title, description, actionLabel, onAction, ...props }: any) => (
  <div
    className={'flex flex-col items-center justify-center p-8 text-center ' + (
      variant === 'error' ? 'bg-red-50 border border-red-200 rounded-lg' :
      variant === 'search' ? 'bg-blue-50 border border-blue-200 rounded-lg' :
      variant === 'first-time' ? 'bg-green-50 border border-green-200 rounded-lg' :
      'bg-background border border-border rounded-lg'
    )}
    role="status"
    aria-live="polite"
    {...props}
  >
    {icon && (
      <div className="mb-4 text-gray-400" aria-hidden="true">
        {icon}
      </div>
    )}
    <h3 className="text-lg font-semibold text-foreground mb-2">
      {title}
    </h3>
    {description && (
      <p className="text-sm text-muted-foreground mb-4 max-w-md">
        {description}
      </p>
    )}
    {actionLabel && onAction && (
      <button
        onClick={onAction}
        className="inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] bg-[#005196] text-white border-[#005196] hover:bg-[#004178] h-10 px-4 text-base"
      >
        {actionLabel}
      </button>
    )}
  </div>
);

function EmptyStatePlayground() {
  const [showAction, setShowAction] = React.useState(false);
  const [showIllustration, setShowIllustration] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <EmptyStatePreview />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showAction} onChange={e => setShowAction(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show Action</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showIllustration} onChange={e => setShowIllustration(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show Illustration</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<EmptyState${showAction ? ' showAction' : ''}${showIllustration ? ' showIllustration' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentEmptyStatePage() {
  return (
    <ComponentDocumentation
      name="Empty State"
      description="Placeholder content when no data is available, guiding users to take action. Provides clear messaging and actionable next steps for various empty states across government services."
      category="Feedback"
      maturity="beta"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <EmptyStatePreview />
        </div>
      }

      props={[
        {
          name: 'variant',
          type: "'default' | 'error' | 'search' | 'first-time'",
          default: "'default'",
          required: false,
          description: 'Visual variant of the empty state. Default for general empty states, error for failed operations, search for no search results, first-time for new user onboarding.',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          required: false,
          description: 'Icon to display above the title. Should be relevant to the empty state context.',
        },
        {
          name: 'illustration',
          type: 'ReactNode',
          required: false,
          description: 'Custom illustration or image to display instead of icon. Useful for more detailed empty states.',
        },
        {
          name: 'title',
          type: 'string',
          required: true,
          description: 'Primary heading text describing the empty state. Should be clear and concise.',
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          description: 'Secondary text providing additional context or guidance. Explains why the state is empty or what the user can do.',
        },
        {
          name: 'actionLabel',
          type: 'string',
          required: false,
          description: 'Text for the primary action button. Should be action-oriented.',
        },
        {
          name: 'onAction',
          type: '() => void',
          required: false,
          description: 'Callback function when the primary action button is clicked.',
        },
        {
          name: 'secondaryActionLabel',
          type: 'string',
          required: false,
          description: 'Text for an optional secondary action button.',
        },
        {
          name: 'onSecondaryAction',
          type: '() => void',
          required: false,
          description: 'Callback function when the secondary action button is clicked.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with variant classes.',
        },
        {
          name: 'ariaLabel',
          type: 'string',
          required: false,
          description: 'Accessible label for screen readers. Defaults to title.',
        },
      ]}

      examples={[
        {
          title: 'No Results Found',
          description: 'Default empty state when search or filter returns no results.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { Search } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <EmptyState\n      variant="search"\n      icon={<Search size={48} />}\n      title="No results found"\n      description="We could not find any items matching your search criteria. Try adjusting your filters or search terms."\n      actionLabel="Clear filters"\n      onAction={() => console.log(\'Filters cleared\')}\n    />\n  );\n}',
          preview: (
            <EmptyStatePreview
              variant="search"
              icon={React.createElement(Search, { size: 48 })}
              title="No results found"
              description="We could not find any items matching your search criteria. Try adjusting your filters or search terms."
              actionLabel="Clear filters"
              onAction={() => console.log('Filters cleared')}
            />
          ),
        },
        {
          title: 'No Applications',
          description: 'Empty state for government service application list.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { FileX } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <EmptyState\n      icon={<FileX size={48} />}\n      title="No applications yet"\n      description="You have not submitted any applications. Start a new application to access government services."\n      actionLabel="Start new application"\n      onAction={() => console.log(\'New application started\')}\n    />\n  );\n}',
          preview: (
            <EmptyStatePreview
              icon={React.createElement(FileX, { size: 48 })}
              title="No applications yet"
              description="You have not submitted any applications. Start a new application to access government services."
              actionLabel="Start new application"
              onAction={() => console.log('New application started')}
            />
          ),
        },
        {
          title: 'Empty Inbox',
          description: 'Empty state for messaging or notification inbox.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { Inbox } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <EmptyState\n      icon={<Inbox size={48} />}\n      title="Your inbox is empty"\n      description="You have no messages at this time. New notifications and messages will appear here."\n    />\n  );\n}',
          preview: (
            <EmptyStatePreview
              icon={React.createElement(Inbox, { size: 48 })}
              title="Your inbox is empty"
              description="You have no messages at this time. New notifications and messages will appear here."
            />
          ),
        },
        {
          title: 'No Documents Uploaded',
          description: 'Empty state for document upload area with action button.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { Upload } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <EmptyState\n      icon={<Upload size={48} />}\n      title="No documents uploaded"\n      description="Upload supporting documents for your application. Accepted formats: PDF, JPG, PNG. Maximum file size: 10MB."\n      actionLabel="Upload document"\n      onAction={() => console.log(\'Upload initiated\')}\n      secondaryActionLabel="Learn more"\n      onSecondaryAction={() => console.log(\'Help opened\')}\n    />\n  );\n}',
          preview: (
            <div className="space-y-4">
              <EmptyStatePreview
                icon={React.createElement(Upload, { size: 48 })}
                title="No documents uploaded"
                description="Upload supporting documents for your application. Accepted formats: PDF, JPG, PNG. Maximum file size: 10MB."
                actionLabel="Upload document"
                onAction={() => console.log('Upload initiated')}
              />
            </div>
          ),
        },
        {
          title: 'First-Time Setup',
          description: 'Welcoming empty state for new users with onboarding guidance.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { FolderOpen } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <EmptyState\n      variant="first-time"\n      icon={<FolderOpen size={48} />}\n      title="Welcome to the Citizen Portal"\n      description="Get started by completing your profile and exploring available government services. We will guide you through each step."\n      actionLabel="Complete profile"\n      onAction={() => console.log(\'Profile setup started\')}\n    />\n  );\n}',
          preview: (
            <EmptyStatePreview
              variant="first-time"
              icon={React.createElement(FolderOpen, { size: 48 })}
              title="Welcome to the Citizen Portal"
              description="Get started by completing your profile and exploring available government services. We will guide you through each step."
              actionLabel="Complete profile"
              onAction={() => console.log('Profile setup started')}
            />
          ),
        },
        {
          title: 'Error State',
          description: 'Empty state shown when data failed to load or an error occurred.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { AlertCircle } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <EmptyState\n      variant="error"\n      icon={<AlertCircle size={48} />}\n      title="Unable to load data"\n      description="We encountered an error while loading your information. Please try again or contact support if the problem persists."\n      actionLabel="Try again"\n      onAction={() => console.log(\'Retry attempted\')}\n    />\n  );\n}',
          preview: (
            <EmptyStatePreview
              variant="error"
              icon={React.createElement(AlertCircle, { size: 48 })}
              title="Unable to load data"
              description="We encountered an error while loading your information. Please try again or contact support if the problem persists."
              actionLabel="Try again"
              onAction={() => console.log('Retry attempted')}
            />
          ),
        },
      ]}

      reactCode={{
        component: 'import React from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { emptyStateVariants } from \'./emptyState.variants\';\nimport { EmptyStateProps } from \'./EmptyState.types\';\n\nexport const EmptyState: React.FC<EmptyStateProps> = ({\n  variant = \'default\',\n  icon,\n  illustration,\n  title,\n  description,\n  actionLabel,\n  onAction,\n  secondaryActionLabel,\n  onSecondaryAction,\n  className,\n  ariaLabel,\n}) => {\n  return (\n    <div\n      className={cn(\n        emptyStateVariants({ variant }),\n        className\n      )}\n      role="status"\n      aria-live="polite"\n      aria-label={ariaLabel || title}\n    >\n      {(icon || illustration) && (\n        <div className="mb-4 text-gray-400" aria-hidden="true">\n          {illustration || icon}\n        </div>\n      )}\n      \n      <h3 className="text-lg font-semibold text-foreground mb-2">\n        {title}\n      </h3>\n      \n      {description && (\n        <p className="text-sm text-muted-foreground mb-4 max-w-md">\n          {description}\n        </p>\n      )}\n      \n      {(actionLabel || secondaryActionLabel) && (\n        <div className="flex flex-wrap gap-3 justify-center">\n          {actionLabel && onAction && (\n            <button\n              onClick={onAction}\n              className="inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] bg-[#005196] text-white border-[#005196] hover:bg-[#004178] h-10 px-4 text-base"\n            >\n              {actionLabel}\n            </button>\n          )}\n          {secondaryActionLabel && onSecondaryAction && (\n            <button\n              onClick={onSecondaryAction}\n              className="inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] bg-card text-[#005196] border-[#005196] hover:bg-[#f5f5f5] h-10 px-4 text-base"\n            >\n              {secondaryActionLabel}\n            </button>\n          )}\n        </div>\n      )}\n    </div>\n  );\n};\n\nEmptyState.displayName = \'EmptyState\';',
        types: 'export interface EmptyStateProps {\n  variant?: \'default\' | \'error\' | \'search\' | \'first-time\';\n  icon?: React.ReactNode;\n  illustration?: React.ReactNode;\n  title: string;\n  description?: string;\n  actionLabel?: string;\n  onAction?: () => void;\n  secondaryActionLabel?: string;\n  onSecondaryAction?: () => void;\n  className?: string;\n  ariaLabel?: string;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const emptyStateVariants = cva(\n  [\n    \'flex flex-col items-center justify-center\',\n    \'p-8 text-center\',\n    \'rounded-lg border\',\n    \'transition-colors duration-150\',\n  ],\n  {\n    variants: {\n      variant: {\n        default: [\n          \'bg-background border-border\',\n        ],\n        error: [\n          \'bg-red-50 border-red-200\',\n        ],\n        search: [\n          \'bg-blue-50 border-blue-200\',\n        ],\n        \'first-time\': [\n          \'bg-green-50 border-green-200\',\n        ],\n      },\n    },\n    defaultVariants: {\n      variant: \'default\',\n    },\n  }\n);\n\nexport type EmptyStateVariantProps = VariantProps<typeof emptyStateVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input, Output, EventEmitter } from \'@angular/core\';\n\ntype EmptyStateVariant = \'default\' | \'error\' | \'search\' | \'first-time\';\n\n@Component({\n  selector: \'ux4g-empty-state\',\n  template: `\n    <div\n      role="status"\n      aria-live="polite"\n      [attr.aria-label]="ariaLabel || title"\n      [class]="getEmptyStateClasses()"\n    >\n      <div *ngIf="icon || illustration" class="mb-4 text-gray-400" aria-hidden="true">\n        <ng-content select="[icon]"></ng-content>\n      </div>\n      \n      <h3 class="text-lg font-semibold text-foreground mb-2">\n        {{ title }}\n      </h3>\n      \n      <p *ngIf="description" class="text-sm text-muted-foreground mb-4 max-w-md">\n        {{ description }}\n      </p>\n      \n      <div *ngIf="actionLabel || secondaryActionLabel" class="flex flex-wrap gap-3 justify-center">\n        <button\n          *ngIf="actionLabel"\n          (click)="handleAction()"\n          class="ux4g-button ux4g-button-primary ux4g-button-md"\n        >\n          {{ actionLabel }}\n        </button>\n        <button\n          *ngIf="secondaryActionLabel"\n          (click)="handleSecondaryAction()"\n          class="ux4g-button ux4g-button-secondary ux4g-button-md"\n        >\n          {{ secondaryActionLabel }}\n        </button>\n      </div>\n    </div>\n  `,\n  styleUrls: [\'./empty-state.component.css\']\n})\nexport class EmptyStateComponent {\n  @Input() variant: EmptyStateVariant = \'default\';\n  @Input() icon = false;\n  @Input() illustration = false;\n  @Input() title!: string;\n  @Input() description?: string;\n  @Input() actionLabel?: string;\n  @Input() secondaryActionLabel?: string;\n  @Input() ariaLabel?: string;\n  \n  @Output() action = new EventEmitter<void>();\n  @Output() secondaryAction = new EventEmitter<void>();\n\n  getEmptyStateClasses(): string {\n    const baseClasses = \'ux4g-empty-state\';\n    const variantClass = \'ux4g-empty-state-\' + this.variant;\n    \n    return [baseClasses, variantClass]\n      .filter(Boolean)\n      .join(\' \');\n  }\n\n  handleAction(): void {\n    this.action.emit();\n  }\n\n  handleSecondaryAction(): void {\n    this.secondaryAction.emit();\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { EmptyStateComponent } from \'./empty-state.component\';\n\n@NgModule({\n  declarations: [EmptyStateComponent],\n  imports: [CommonModule],\n  exports: [EmptyStateComponent]\n})\nexport class EmptyStateModule { }',
        types: 'export type EmptyStateVariant = \'default\' | \'error\' | \'search\' | \'first-time\';',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-empty-state> custom element",
        html: "<ux4g-empty-state variant=\"primary\" size=\"md\"><!-- EmptyState --></ux4g-empty-state>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'No dedicated component',
          variants: 'Custom implementation',
          accessibility: 'N/A',
          documentation: 'Pattern only',
          link: 'https://mui.com/material-ui/react-skeleton/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Empty',
          variants: 'default, simple',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/empty',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Pattern guidance',
          variants: 'Context-specific',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/patterns/',
        },
        {
          system: 'Chakra UI',
          component: 'Custom component pattern',
          variants: 'Custom',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Pattern only',
          link: 'https://chakra-ui.com/docs/components',
        },
        {
          system: 'Polaris (Shopify)',
          component: 'EmptyState',
          variants: 'default, subdued',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://polaris.shopify.com/components/layout-and-structure/empty-state',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'ARIA live region (role="status", aria-live="polite") announces content changes to screen readers',
          'Semantic heading structure with h3 element for title',
          'Descriptive aria-label for the container, defaulting to title',
          'Icons and illustrations marked with aria-hidden="true" to prevent redundant announcements',
          'Action buttons meet minimum 44x44px touch target size (WCAG 2.5.5)',
          'Focus indicators with 2px ring and 2px offset for keyboard navigation (WCAG 2.4.7)',
          'Color contrast ratios meet or exceed 4.5:1 for all text (WCAG 1.4.3)',
          'Clear, actionable button labels that describe the action being performed',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to action buttons when present' },
          { key: 'Shift + Tab', action: 'Move focus backwards through action buttons' },
          { key: 'Enter', action: 'Activate focused action button' },
          { key: 'Space', action: 'Activate focused action button' },
        ],
        screenReader: [
          'Container announced as status region with polite live region',
          'Title announced as heading level 3',
          'Description announced as supplementary text',
          'Action buttons announced with their label and button role',
          'Icons and illustrations hidden from screen reader tree',
          'State changes (empty to populated) announced automatically via aria-live',
        ],
      }}

      tokens={{
        file: '/tokens/components/empty-state.json',
        mappings: [
          { property: 'Container Padding', token: 'base.spacing.8', value: '32px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '8px' },
          { property: 'Border Width', token: 'base.borderWidth', value: '1px' },
          { property: 'Title Font Size', token: 'base.fontSize.lg', value: '18px' },
          { property: 'Title Font Weight', token: 'base.fontWeight.semibold', value: '600' },
          { property: 'Description Font Size', token: 'base.fontSize.sm', value: '14px' },
          { property: 'Description Max Width', token: 'base.maxWidth.md', value: '448px' },
          { property: 'Icon Size', token: 'base.iconSize.xl', value: '48px' },
          { property: 'Icon Color', token: 'base.color.gray.400', value: '#9CA3AF' },
          { property: 'Default Background', token: 'variant.default.background', value: '#F9FAFB (Gray 50)' },
          { property: 'Default Border', token: 'variant.default.border', value: '#E5E7EB (Gray 200)' },
          { property: 'Error Background', token: 'variant.error.background', value: '#FEF2F2 (Red 50)' },
          { property: 'Error Border', token: 'variant.error.border', value: '#FECACA (Red 200)' },
          { property: 'Search Background', token: 'variant.search.background', value: '#EFF6FF (Blue 50)' },
          { property: 'Search Border', token: 'variant.search.border', value: '#BFDBFE (Blue 200)' },
          { property: 'First-time Background', token: 'variant.firstTime.background', value: '#F0FDF4 (Green 50)' },
          { property: 'First-time Border', token: 'variant.firstTime.border', value: '#BBF7D0 (Green 200)' },
          { property: 'Button Gap', token: 'base.spacing.3', value: '12px' },
          { property: 'Content Gap', token: 'base.spacing.4', value: '16px' },
        ],
      }}

      useCases={[
        {
          title: 'No Applications Found',
          description: 'Citizen portal showing empty application list for a user who has not submitted any applications yet.',
          scenario: 'Citizen portal showing empty application list for a user who has not submitted any applications yet.',
          implementation: 'Display empty state with FileX icon, encouraging message, and prominent "Start New Application" button.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { FileX } from \'lucide-react\';\n\nfunction ApplicationList() {\n  const applications = [];\n  \n  if (applications.length === 0) {\n    return (\n      <EmptyState\n        icon={<FileX size={48} />}\n        title="No applications found"\n        description="You have not submitted any applications. Start a new application to access government services and benefits."\n        actionLabel="Start new application"\n        onAction={() => router.push(\'/applications/new\')}\n      />\n    );\n  }\n  \n  return <ApplicationGrid applications={applications} />;\n}',
        },
        {
          title: 'No Pending Approvals',
          description: 'Government employee dashboard showing no pending approval requests in their queue.',
          scenario: 'Government employee dashboard showing no pending approval requests in their queue.',
          implementation: 'Use default variant with Inbox icon and informative message about the empty queue state.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { Inbox } from \'lucide-react\';\n\nfunction ApprovalQueue() {\n  const pendingApprovals = [];\n  \n  if (pendingApprovals.length === 0) {\n    return (\n      <EmptyState\n        icon={<Inbox size={48} />}\n        title="No pending approvals"\n        description="Your approval queue is empty. New approval requests will appear here as they are submitted."\n      />\n    );\n  }\n  \n  return <ApprovalList items={pendingApprovals} />;\n}',
        },
        {
          title: 'Search Returned Zero Results',
          description: 'User searching for government services or documents with no matching results found.',
          scenario: 'User searching for government services or documents with no matching results found.',
          implementation: 'Use search variant with Search icon, helpful message, and action to clear or modify search.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { Search } from \'lucide-react\';\n\nfunction ServiceSearch({ query, onClearSearch }) {\n  const results = [];\n  \n  if (query && results.length === 0) {\n    return (\n      <EmptyState\n        variant="search"\n        icon={<Search size={48} />}\n        title="No services found"\n        description={"We could not find any services matching \\"" + query + "\\". Try different keywords or browse all services."}\n        actionLabel="Clear search"\n        onAction={onClearSearch}\n        secondaryActionLabel="Browse all"\n        onSecondaryAction={() => router.push(\'/services\')}\n      />\n    );\n  }\n  \n  return <ServiceResults results={results} />;\n}',
        },
        {
          title: 'No Documents in Folder',
          description: 'Document management system showing an empty folder with no uploaded files.',
          scenario: 'Document management system showing an empty folder with no uploaded files.',
          implementation: 'Display empty state with Upload icon and action button to upload first document.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { Upload } from \'lucide-react\';\n\nfunction DocumentFolder({ folderId, onUpload }) {\n  const documents = [];\n  \n  if (documents.length === 0) {\n    return (\n      <EmptyState\n        icon={<Upload size={48} />}\n        title="No documents in this folder"\n        description="Upload documents to organize and manage your files. Supported formats: PDF, DOC, DOCX, JPG, PNG. Maximum size: 25MB."\n        actionLabel="Upload document"\n        onAction={onUpload}\n      />\n    );\n  }\n  \n  return <DocumentGrid documents={documents} />;\n}',
        },
        {
          title: 'First-Time Citizen Portal',
          description: 'New user accessing the citizen portal for the first time with no history or saved items.',
          scenario: 'New user accessing the citizen portal for the first time with no history or saved items.',
          implementation: 'Use first-time variant with welcoming message and onboarding action to complete profile.',
          code: 'import { EmptyState } from \'@ux4g/react-core\';\nimport { FolderOpen } from \'lucide-react\';\n\nfunction Dashboard({ isFirstTime, onStartOnboarding }) {\n  if (isFirstTime) {\n    return (\n      <EmptyState\n        variant="first-time"\n        icon={<FolderOpen size={48} />}\n        title="Welcome to the Citizen Portal"\n        description="Get started by completing your profile to access personalized government services, track applications, and receive important notifications."\n        actionLabel="Complete your profile"\n        onAction={onStartOnboarding}\n        secondaryActionLabel="Explore services"\n        onSecondaryAction={() => router.push(\'/services\')}\n      />\n    );\n  }\n  \n  return <DashboardContent />;\n}',
        },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use EmptyState when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Lists or tables with no data</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Search results with no matches</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>First-time user experiences</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Filtered views with no results</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use EmptyState when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Loading states — use Skeleton or Spinner</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Error states — use Alert</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Partial data — show what exists</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Temporary states — use Toast</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <div className="text-center py-4 mb-3"><p className="text-sm font-medium text-foreground mb-1">No applications yet</p><p className="text-xs text-muted-foreground mb-2">Start your first application to see it here.</p><button className="px-3 py-1 text-xs bg-[#005196] text-white rounded">Start Application</button></div>
                  <p className="text-sm text-muted-foreground">Include a clear CTA in empty states — they have 3x higher conversion to first action.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="text-center py-4 mb-3 text-muted-foreground text-xs">No data</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t show a blank page when there is no data — always provide guidance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different EmptyState configurations in real time.</p>
            <EmptyStatePlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/skeleton" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Skeleton</h3>
                <p className="text-sm text-muted-foreground">For loading states</p>
              </a>
              <a href="/components/alert" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Alert</h3>
                <p className="text-sm text-muted-foreground">For error states</p>
              </a>
              <a href="/components/card" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Card</h3>
                <p className="text-sm text-muted-foreground">For content containers</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added action button slot</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added illustration support</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with title and description</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Empty states drive engagement</h3>
                <p className="text-sm text-muted-foreground">Empty states with a clear CTA have 3x higher conversion to first action than blank pages (Intercom research).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
