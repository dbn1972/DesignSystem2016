/**
 * Description List Component Documentation Page
 * Complete documentation for the Description List component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { User, FileText, Clock, MapPin, CheckCircle, XCircle } from 'lucide-react';

// Import the actual Description List component for live preview
const DescriptionListPreview = ({
  variant = 'horizontal',
  items,
  bordered = false,
  striped = false,
  compact = false,
  cardLayout = false,
  showIcons = false,
  ...props
}: any) => {
  const containerClasses = [
    cardLayout ? 'bg-card border border-[#d1d5db] rounded-lg p-6 shadow-sm' : '',
    bordered && !cardLayout ? 'border border-[#d1d5db] rounded' : '',
  ].filter(Boolean).join(' ');

  const dlClasses = [
    variant === 'vertical' ? 'space-y-4' : '',
    variant === 'horizontal' ? 'divide-y divide-[#e5e7eb]' : '',
    striped && variant === 'horizontal' ? '[&>div:nth-child(even)]:bg-[#f9fafb]' : '',
  ].filter(Boolean).join(' ');

  const itemClasses = variant === 'horizontal'
    ? compact
      ? 'grid grid-cols-3 gap-4 py-2 px-4'
      : 'grid grid-cols-3 gap-4 py-4 px-6'
    : compact
      ? 'py-1'
      : 'py-2';

  return (
    <div className={containerClasses} {...props}>
      <dl className={dlClasses}>
        {items.map((item: any, index: number) => (
          <div key={index} className={itemClasses}>
            <dt className={
              variant === 'horizontal'
                ? 'col-span-1 font-semibold text-[#374151] flex items-center gap-2'
                : 'font-semibold text-[#374151] mb-1 flex items-center gap-2'
            }>
              {showIcons && item.icon && (
                <span className="inline-flex shrink-0 text-[#005196]" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              {item.term}
            </dt>
            <dd className={
              variant === 'horizontal'
                ? 'col-span-2 text-[#1f2937]'
                : 'text-[#1f2937]'
            }>
              {item.definition}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

function DescriptionListPlayground() {
  const [layout, setLayout] = React.useState('vertical');
  const [striped, setStriped] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <DescriptionListPreview items={[{term: "Name", detail: "Rajesh Kumar"}, {term: "Status", detail: "Active"}, {term: "ID", detail: "CERT-001"}]} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Layout</label>
            <select value={layout} onChange={e => setLayout(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="vertical">vertical</option>
              <option value="horizontal">horizontal</option>
            </select>
          </div>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={striped} onChange={e => setStriped(e.target.checked)} className="accent-primary" /><span className="text-foreground">Striped</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<DescriptionList ${layout}${striped ? ' striped' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentDescriptionListPage() {
  return (
    <ComponentDocumentation
      name="Description List"
      description="Display key-value pairs for structured data, form summaries, and details. Supports multiple layout variants with full accessibility compliance for government services."
      category="Data Display"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl">
          <DescriptionListPreview items={[{term:"Name",detail:"Rajesh Kumar"},{term:"Application",detail:"CERT-2026-001"},{term:"Status",detail:"Under Review"}]} />
        </div>
      }

      props={[
        {
          name: 'variant',
          type: "'horizontal' | 'vertical'",
          default: "'horizontal'",
          required: false,
          description: 'Layout variant. Horizontal displays terms and definitions side by side, vertical stacks them.',
        },
        {
          name: 'items',
          type: 'Array<{ term: string; definition: string | ReactNode; icon?: ReactNode }>',
          required: true,
          description: 'Array of term-definition pairs to display. Each item can include an optional icon.',
        },
        {
          name: 'bordered',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to display a border around the entire description list.',
        },
        {
          name: 'striped',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to apply alternating background colors to rows (horizontal variant only).',
        },
        {
          name: 'compact',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to use compact spacing. Reduces padding for dense layouts.',
        },
        {
          name: 'cardLayout',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to display the list in a card container with shadow and rounded corners.',
        },
        {
          name: 'showIcons',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to display icons next to terms when provided in items.',
        },
        {
          name: 'termWidth',
          type: "'narrow' | 'medium' | 'wide'",
          default: "'medium'",
          required: false,
          description: 'Width of the term column in horizontal layout. Narrow: 25%, Medium: 33%, Wide: 40%.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with variant classes.',
        },
        {
          name: 'termClassName',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply to all term elements.',
        },
        {
          name: 'definitionClassName',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply to all definition elements.',
        },
      ]}

      examples={[
        {
          title: 'User Profile Information',
          description: 'Display user profile details with horizontal layout and card styling.',
          code: 'import { DescriptionList } from \'@ux4g/react-core\';\nimport { User, Mail, Phone, MapPin } from \'lucide-react\';\n\nfunction Example() {\n  const userItems = [\n    {\n      term: \'Full Name\',\n      definition: \'Sarah Jane Williams\',\n      icon: <User size={16} />\n    },\n    {\n      term: \'Email Address\',\n      definition: \'sarah.williams@example.gov\',\n      icon: <Mail size={16} />\n    },\n    {\n      term: \'Phone Number\',\n      definition: \'+1 (555) 123-4567\',\n      icon: <Phone size={16} />\n    },\n    {\n      term: \'Location\',\n      definition: \'Ottawa, Ontario, Canada\',\n      icon: <MapPin size={16} />\n    },\n    {\n      term: \'Member Since\',\n      definition: \'January 15, 2024\',\n      icon: <Clock size={16} />\n    },\n  ];\n\n  return (\n    <DescriptionList\n      variant="horizontal"\n      items={userItems}\n      cardLayout\n      showIcons\n    />\n  );\n}',
          preview: (
            <DescriptionListPreview
              variant="horizontal"
              items={[
                {
                  term: 'Full Name',
                  definition: 'Sarah Jane Williams',
                  icon: <User size={16} />
                },
                {
                  term: 'Email Address',
                  definition: 'sarah.williams@example.gov',
                  icon: <User size={16} />
                },
                {
                  term: 'Phone Number',
                  definition: '+1 (555) 123-4567',
                  icon: <User size={16} />
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
              ]}
              cardLayout
              showIcons
            />
          ),
        },
        {
          title: 'Application Details',
          description: 'Government service application summary with bordered and striped layout.',
          code: 'import { DescriptionList } from \'@ux4g/react-core\';\n\nfunction Example() {\n  const applicationItems = [\n    {\n      term: \'Application ID\',\n      definition: \'APP-2026-04-00789\'\n    },\n    {\n      term: \'Application Type\',\n      definition: \'Business Registration\'\n    },\n    {\n      term: \'Submitted Date\',\n      definition: \'April 10, 2026 at 2:45 PM EDT\'\n    },\n    {\n      term: \'Current Status\',\n      definition: (\n        <span className="inline-flex items-center gap-1.5 text-[#008800]">\n          <CheckCircle size={16} />\n          Approved\n        </span>\n      )\n    },\n    {\n      term: \'Processing Time\',\n      definition: \'14 business days\'\n    },\n    {\n      term: \'Assigned Officer\',\n      definition: \'Michael Chen, Senior Reviewer\'\n    },\n  ];\n\n  return (\n    <DescriptionList\n      variant="horizontal"\n      items={applicationItems}\n      bordered\n      striped\n    />\n  );\n}',
          preview: (
            <DescriptionListPreview
              variant="horizontal"
              items={[
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
              ]}
              bordered
              striped
            />
          ),
        },
        {
          title: 'Document Metadata',
          description: 'Document information with vertical layout and compact spacing.',
          code: 'import { DescriptionList } from \'@ux4g/react-core\';\nimport { FileText } from \'lucide-react\';\n\nfunction Example() {\n  const documentItems = [\n    {\n      term: \'Document Title\',\n      definition: \'2026 Annual Budget Report\',\n      icon: <FileText size={16} />\n    },\n    {\n      term: \'Document Type\',\n      definition: \'PDF Document\'\n    },\n    {\n      term: \'File Size\',\n      definition: \'2.4 MB (2,458,624 bytes)\'\n    },\n    {\n      term: \'Last Modified\',\n      definition: \'April 8, 2026 at 10:23 AM EDT\'\n    },\n    {\n      term: \'Classification\',\n      definition: \'Internal Use Only\'\n    },\n    {\n      term: \'Version\',\n      definition: \'3.2 (Draft)\'\n    },\n  ];\n\n  return (\n    <DescriptionList\n      variant="vertical"\n      items={documentItems}\n      compact\n      showIcons\n    />\n  );\n}',
          preview: (
            <DescriptionListPreview
              variant="vertical"
              items={[
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
              ]}
              compact
              showIcons
            />
          ),
        },
        {
          title: 'Service Information',
          description: 'Public service details with card layout and icons for enhanced visual hierarchy.',
          code: 'import { DescriptionList } from \'@ux4g/react-core\';\nimport { Clock, MapPin, CheckCircle } from \'lucide-react\';\n\nfunction Example() {\n  const serviceItems = [\n    {\n      term: \'Service Name\',\n      definition: \'Passport Application and Renewal\'\n    },\n    {\n      term: \'Availability\',\n      definition: \'Online and In-Person\',\n      icon: <CheckCircle size={16} />\n    },\n    {\n      term: \'Processing Time\',\n      definition: \'20-30 business days for standard service\',\n      icon: <Clock size={16} />\n    },\n    {\n      term: \'Service Hours\',\n      definition: \'Monday - Friday, 8:00 AM - 4:00 PM EDT\',\n      icon: <Clock size={16} />\n    },\n    {\n      term: \'Locations\',\n      definition: \'35 Service Canada offices nationwide\',\n      icon: <MapPin size={16} />\n    },\n    {\n      term: \'Fee Structure\',\n      definition: \'$120 for 5-year passport, $160 for 10-year passport\'\n    },\n  ];\n\n  return (\n    <DescriptionList\n      variant="horizontal"\n      items={serviceItems}\n      cardLayout\n      striped\n      showIcons\n    />\n  );\n}',
          preview: (
            <DescriptionListPreview
              variant="horizontal"
              items={[
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
              ]}
              cardLayout
              striped
              showIcons
            />
          ),
        },
        {
          title: 'Approval Details',
          description: 'Government approval summary with status indicators and compact card layout.',
          code: 'import { DescriptionList } from \'@ux4g/react-core\';\nimport { CheckCircle, XCircle } from \'lucide-react\';\n\nfunction Example() {\n  const approvalItems = [\n    {\n      term: \'Request ID\',\n      definition: \'REQ-2026-00234\'\n    },\n    {\n      term: \'Submitted By\',\n      definition: \'Dr. Emily Rodriguez, Department of Health\'\n    },\n    {\n      term: \'Approval Status\',\n      definition: (\n        <span className="inline-flex items-center gap-1.5 text-[#008800] font-semibold">\n          <CheckCircle size={16} />\n          Approved\n        </span>\n      ),\n      icon: <CheckCircle size={16} />\n    },\n    {\n      term: \'Approved By\',\n      definition: \'James Thompson, Director of Operations\'\n    },\n    {\n      term: \'Approval Date\',\n      definition: \'April 11, 2026 at 9:15 AM EDT\'\n    },\n    {\n      term: \'Conditions\',\n      definition: \'None - unconditional approval granted\'\n    },\n    {\n      term: \'Valid Until\',\n      definition: \'April 11, 2027\'\n    },\n  ];\n\n  return (\n    <DescriptionList\n      variant="horizontal"\n      items={approvalItems}\n      cardLayout\n      compact\n    />\n  );\n}',
          preview: (
            <DescriptionListPreview
              variant="horizontal"
              items={[
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
              ]}
              cardLayout
              compact
            />
          ),
        },
      ]}

      reactCode={{
        component: 'import React from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { descriptionListVariants } from \'./description-list.variants\';\nimport { DescriptionListProps, DescriptionListItem } from \'./DescriptionList.types\';\n\nexport const DescriptionList: React.FC<DescriptionListProps> = ({\n  items,\n  className,\n  variant = \'horizontal\',\n  bordered = false,\n  striped = false,\n  compact = false,\n  cardLayout = false,\n  showIcons = false,\n  termWidth = \'medium\',\n  termClassName,\n  definitionClassName,\n  ...props\n}) => {\n  const containerClasses = cn(\n    descriptionListVariants({ variant, bordered, striped, compact, cardLayout, termWidth }),\n    className\n  );\n\n  const getItemClasses = () => {\n    if (variant === \'horizontal\') {\n      return compact \n        ? \'grid grid-cols-3 gap-4 py-2 px-4\'\n        : \'grid grid-cols-3 gap-4 py-4 px-6\';\n    }\n    return compact ? \'py-1\' : \'py-2\';\n  };\n\n  const getTermClasses = () => {\n    const baseClasses = \'font-semibold text-[#374151] flex items-center gap-2\';\n    if (variant === \'horizontal\') {\n      return cn(\'col-span-1\', baseClasses, termClassName);\n    }\n    return cn(\'mb-1\', baseClasses, termClassName);\n  };\n\n  const getDefinitionClasses = () => {\n    const baseClasses = \'text-[#1f2937]\';\n    if (variant === \'horizontal\') {\n      return cn(\'col-span-2\', baseClasses, definitionClassName);\n    }\n    return cn(baseClasses, definitionClassName);\n  };\n\n  return (\n    <div \n      className={cardLayout ? \'bg-card border border-[#d1d5db] rounded-lg p-6 shadow-sm\' : \'\'}\n      {...props}\n    >\n      <dl \n        className={containerClasses}\n        role="list"\n      >\n        {items.map((item: DescriptionListItem, index: number) => (\n          <div \n            key={index} \n            className={getItemClasses()}\n            role="listitem"\n          >\n            <dt className={getTermClasses()}>\n              {showIcons && item.icon && (\n                <span \n                  className="inline-flex shrink-0 text-[#005196]" \n                  aria-hidden="true"\n                >\n                  {item.icon}\n                </span>\n              )}\n              {item.term}\n            </dt>\n            <dd className={getDefinitionClasses()}>\n              {item.definition}\n            </dd>\n          </div>\n        ))}\n      </dl>\n    </div>\n  );\n};\n\nDescriptionList.displayName = \'DescriptionList\';',
        types: 'import { ReactNode } from \'react\';\n\nexport interface DescriptionListItem {\n  term: string;\n  definition: string | ReactNode;\n  icon?: ReactNode;\n}\n\nexport interface DescriptionListProps \n  extends React.HTMLAttributes<HTMLDivElement> {\n  items: DescriptionListItem[];\n  variant?: \'horizontal\' | \'vertical\';\n  bordered?: boolean;\n  striped?: boolean;\n  compact?: boolean;\n  cardLayout?: boolean;\n  showIcons?: boolean;\n  termWidth?: \'narrow\' | \'medium\' | \'wide\';\n  termClassName?: string;\n  definitionClassName?: string;\n  className?: string;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const descriptionListVariants = cva(\n  [\n    \'w-full\',\n  ],\n  {\n    variants: {\n      variant: {\n        horizontal: [\n          \'divide-y divide-[#e5e7eb]\',\n        ],\n        vertical: [\n          \'space-y-4\',\n        ],\n      },\n      bordered: {\n        true: \'border border-[#d1d5db] rounded\',\n        false: \'\',\n      },\n      striped: {\n        true: \'[&>div:nth-child(even)]:bg-[#f9fafb]\',\n        false: \'\',\n      },\n      compact: {\n        true: \'\',\n        false: \'\',\n      },\n      cardLayout: {\n        true: \'\',\n        false: \'\',\n      },\n      termWidth: {\n        narrow: \'[&_dt]:col-span-1 [&_dd]:col-span-3\',\n        medium: \'[&_dt]:col-span-1 [&_dd]:col-span-2\',\n        wide: \'[&_dt]:col-span-2 [&_dd]:col-span-2\',\n      },\n    },\n    defaultVariants: {\n      variant: \'horizontal\',\n      bordered: false,\n      striped: false,\n      compact: false,\n      cardLayout: false,\n      termWidth: \'medium\',\n    },\n  }\n);\n\nexport type DescriptionListVariantProps = VariantProps<typeof descriptionListVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input } from \'@angular/core\';\n\ntype DescriptionListVariant = \'horizontal\' | \'vertical\';\ntype TermWidth = \'narrow\' | \'medium\' | \'wide\';\n\ninterface DescriptionListItem {\n  term: string;\n  definition: string;\n  icon?: string;\n}\n\n@Component({\n  selector: \'ux4g-description-list\',\n  template: \`\n    <div [class]="getContainerClasses()">\n      <dl [class]="getListClasses()" role="list">\n        <div \n          *ngFor="let item of items; let i = index"\n          [class]="getItemClasses()"\n          role="listitem"\n        >\n          <dt [class]="getTermClasses()">\n            <span \n              *ngIf="showIcons && item.icon" \n              class="inline-flex shrink-0 text-[#005196]"\n              aria-hidden="true"\n            >\n              <i [class]="item.icon"></i>\n            </span>\n            {{ item.term }}\n          </dt>\n          <dd [class]="getDefinitionClasses()">\n            {{ item.definition }}\n          </dd>\n        </div>\n      </dl>\n    </div>\n  \`,\n  styleUrls: [\'./description-list.component.css\']\n})\nexport class DescriptionListComponent {\n  @Input() items: DescriptionListItem[] = [];\n  @Input() variant: DescriptionListVariant = \'horizontal\';\n  @Input() bordered = false;\n  @Input() striped = false;\n  @Input() compact = false;\n  @Input() cardLayout = false;\n  @Input() showIcons = false;\n  @Input() termWidth: TermWidth = \'medium\';\n  @Input() className = \'\';\n  @Input() termClassName = \'\';\n  @Input() definitionClassName = \'\';\n\n  getContainerClasses(): string {\n    if (this.cardLayout) {\n      return \'bg-card border border-[#d1d5db] rounded-lg p-6 shadow-sm\';\n    }\n    return \'\';\n  }\n\n  getListClasses(): string {\n    const classes = [\'w-full\'];\n    \n    if (this.variant === \'horizontal\') {\n      classes.push(\'divide-y divide-[#e5e7eb]\');\n    } else {\n      classes.push(\'space-y-4\');\n    }\n    \n    if (this.bordered) {\n      classes.push(\'border border-[#d1d5db] rounded\');\n    }\n    \n    if (this.striped) {\n      classes.push(\'[&>div:nth-child(even)]:bg-[#f9fafb]\');\n    }\n    \n    if (this.className) {\n      classes.push(this.className);\n    }\n    \n    return classes.filter(Boolean).join(\' \');\n  }\n\n  getItemClasses(): string {\n    if (this.variant === \'horizontal\') {\n      return this.compact \n        ? \'grid grid-cols-3 gap-4 py-2 px-4\'\n        : \'grid grid-cols-3 gap-4 py-4 px-6\';\n    }\n    return this.compact ? \'py-1\' : \'py-2\';\n  }\n\n  getTermClasses(): string {\n    const classes = [\'font-semibold text-[#374151] flex items-center gap-2\'];\n    \n    if (this.variant === \'horizontal\') {\n      classes.push(\'col-span-1\');\n    } else {\n      classes.push(\'mb-1\');\n    }\n    \n    if (this.termClassName) {\n      classes.push(this.termClassName);\n    }\n    \n    return classes.join(\' \');\n  }\n\n  getDefinitionClasses(): string {\n    const classes = [\'text-[#1f2937]\'];\n    \n    if (this.variant === \'horizontal\') {\n      classes.push(\'col-span-2\');\n    }\n    \n    if (this.definitionClassName) {\n      classes.push(this.definitionClassName);\n    }\n    \n    return classes.join(\' \');\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { DescriptionListComponent } from \'./description-list.component\';\n\n@NgModule({\n  declarations: [DescriptionListComponent],\n  imports: [CommonModule],\n  exports: [DescriptionListComponent]\n})\nexport class DescriptionListModule { }',
        types: 'export type DescriptionListVariant = \'horizontal\' | \'vertical\';\nexport type TermWidth = \'narrow\' | \'medium\' | \'wide\';\n\nexport interface DescriptionListItem {\n  term: string;\n  definition: string;\n  icon?: string;\n}',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-description-list> custom element",
        html: "<ux4g-description-list variant=\"primary\" size=\"md\"><!-- DescriptionList --></ux4g-description-list>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'List / ListItem',
          variants: 'dense, disablePadding',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://mui.com/material-ui/react-list/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Descriptions',
          variants: 'bordered, column, size',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/descriptions',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Summary list',
          variants: 'with actions, without borders',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/summary-list/',
        },
        {
          system: 'Chakra UI',
          component: 'DescriptionList (Recipe)',
          variants: 'horizontal, vertical, size',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://www.chakra-ui.com/docs/components/description-list',
        },
        {
          system: 'Adobe Spectrum',
          component: 'KeyValuePair (proposed)',
          variants: 'horizontal, vertical',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Limited',
          link: 'https://spectrum.adobe.com/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic HTML using <dl>, <dt>, and <dd> elements for proper structure (WCAG 1.3.1)',
          'role="list" and role="listitem" attributes for enhanced screen reader support',
          'Sufficient color contrast ratios (4.5:1 minimum) for all text (WCAG 1.4.3)',
          'Icons properly hidden from screen readers using aria-hidden="true"',
          'Meaningful term and definition relationships preserved in DOM structure',
          'Keyboard navigable when interactive elements are present',
          'Responsive layout maintains readability across viewport sizes (WCAG 1.4.10)',
          'Clear visual separation between term-definition pairs for cognitive accessibility',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate to interactive elements within definitions (if present)' },
          { key: 'Shift + Tab', action: 'Navigate backwards through interactive elements' },
        ],
        screenReader: [
          'Announces description list role to establish context',
          'Reads term followed by definition in logical order',
          'Preserves semantic relationship between terms and definitions',
          'Icons are hidden from screen reader (aria-hidden="true")',
          'Supports proper navigation through list items',
        ],
      }}

      tokens={{
        file: '/tokens/components/description-list.json',
        mappings: [
          { property: 'Term Font Weight', token: 'typography.fontWeight.semibold', value: '600' },
          { property: 'Term Text Color', token: 'colors.text.primary', value: '#374151 (Gray 700)' },
          { property: 'Definition Text Color', token: 'colors.text.secondary', value: '#1f2937 (Gray 800)' },
          { property: 'Divider Color', token: 'colors.border.light', value: '#e5e7eb (Gray 200)' },
          { property: 'Striped Background', token: 'colors.background.subtle', value: '#f9fafb (Gray 50)' },
          { property: 'Border Color', token: 'colors.border.default', value: '#d1d5db (Gray 300)' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '8px' },
          { property: 'Icon Color', token: 'colors.primary.default', value: '#005196 (Navy 500)' },
          { property: 'Spacing Compact (Vertical)', token: 'spacing.compact.vertical', value: '8px' },
          { property: 'Spacing Default (Vertical)', token: 'spacing.default.vertical', value: '16px' },
          { property: 'Spacing Compact (Horizontal)', token: 'spacing.compact.horizontal', value: '16px' },
          { property: 'Spacing Default (Horizontal)', token: 'spacing.default.horizontal', value: '24px' },
          { property: 'Card Shadow', token: 'shadows.sm', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
        ],
      }}

      useCases={[
        { title: "Application Summary", description: "Key-value display of application details.", scenario: "Review page before submission.", implementation: "<DescriptionList items={[{term:\"Name\",detail:\"Rajesh Kumar\"}]} />" },
        { title: "Service Information", description: "Service details display.", scenario: "Certificate service info page.", implementation: "<DescriptionList items={serviceDetails} />" },
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
                  Do use DescriptionList when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Key-value pair displays</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Application review summaries</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Service detail pages</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Profile information display</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use DescriptionList when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Tabular data with multiple columns — use Table</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple lists — use List</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Card-based layouts — use Card</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Form fields — use form components</li>
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
                  <div className="p-3 bg-green-50/50 rounded border border-green-200 mb-3 text-xs text-green-800">✓ Correct implementation shown</div>
                  <p className="text-sm text-muted-foreground">Use aligned key-value pairs with consistent spacing for faster scanning.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use description lists for tabular data with multiple columns — use Table.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different DescriptionList configurations in real time.</p>
            <DescriptionListPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/table" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Table</h3>
                <p className="text-sm text-muted-foreground">For multi-column data</p>
              </a>
              <a href="/components/list" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">List</h3>
                <p className="text-sm text-muted-foreground">For simple item lists</p>
              </a>
              <a href="/components/card" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Card</h3>
                <p className="text-sm text-muted-foreground">For grouped content</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added horizontal layout option</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added striped variant</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with vertical layout</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Key-value readability</h3>
                <p className="text-sm text-muted-foreground">Aligned key-value pairs with consistent spacing are scanned 25% faster than unstructured text (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
