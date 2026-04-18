/**
 * Badge Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const BadgePreview = ({ variant, children }: any) => {
  const variants = {
    primary: 'bg-[#005196] text-white',
    success: 'bg-green-700 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-600 text-white',
    neutral: 'bg-muted text-muted-foreground',
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${variants[variant as keyof typeof variants]}`}>
      {children}
    </span>
  );
};

function BadgePlayground() {
  const [variant, setVariant] = React.useState('primary');
  const [label, setLabel] = React.useState('Under Review');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[120px] rounded-xl border-2 border-dashed border-border bg-background p-4 sm:p-6 lg:p-8">
        <BadgePreview variant={variant}>{label}</BadgePreview>
      </div>
      <div className="space-y-4 text-sm">
        <div>
          <label className="block font-semibold text-foreground mb-1">Variant</label>
          <select value={variant} onChange={e => setVariant(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
            {['primary', 'success', 'warning', 'error', 'neutral'].map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-semibold text-foreground mb-1">Label</label>
          <input value={label} onChange={e => setLabel(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground" />
        </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">{`<Badge variant="${variant}">${label}</Badge>`}</p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentBadgePage() {
  return (
    <ComponentDocumentation
      name="Badge"
      description="Small status indicators and labels for highlighting information, counts, or status. Used throughout government interfaces to draw attention to important metadata."
      category="Feedback"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"

      preview={
        <div className="flex flex-wrap items-center gap-3">
          <BadgePreview variant="primary">Submitted</BadgePreview>
          <BadgePreview variant="warning">Under Review</BadgePreview>
          <BadgePreview variant="success">Approved</BadgePreview>
          <BadgePreview variant="error">Rejected</BadgePreview>
          <BadgePreview variant="neutral">Draft</BadgePreview>
        </div>
      }
      
      props={[
        {
          name: 'variant',
          type: "'neutral' | 'info' | 'success' | 'warning' | 'error'",
          default: "'info'",
          required: false,
          description: 'Badge color variant.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: false,
          description: 'Badge content (text or number).',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Badge size.',
        },
        {
          name: 'dot',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Show as a small dot indicator instead of text.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}
      
      examples={[
        {
          title: 'Badge Variants',
          description: 'Different badge styles for various contexts.',
          code: `import { Badge } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-3">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  );
}`,
          preview: (
            <div className="flex flex-wrap gap-3">
              <BadgePreview variant="primary">Primary</BadgePreview>
              <BadgePreview variant="success">Success</BadgePreview>
              <BadgePreview variant="warning">Warning</BadgePreview>
              <BadgePreview variant="error">Error</BadgePreview>
              <BadgePreview variant="neutral">Neutral</BadgePreview>
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { badgeVariants } from './badge.variants';
import { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'md',
  children,
  className,
}) => {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </span>
  );
};`,
        types: `export type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full font-semibold',
  {
    variants: {
      variant: {
        primary: 'bg-[#005196] text-white',
        success: 'bg-green-700 text-white',
        warning: 'bg-yellow-500 text-white',
        error: 'bg-red-600 text-white',
        neutral: 'bg-muted text-muted-foreground',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
    },
  }
);`,
      }}
      
      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-badge',
  template: '<span [class]="getBadgeClasses()"><ng-content></ng-content></span>'
})
export class BadgeComponent {
  @Input() variant: 'primary' | 'success' | 'warning' | 'error' | 'neutral' = 'neutral';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  
  getBadgeClasses(): string {
    return \`badge badge-\${this.variant} badge-\${this.size}\`;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule],
  exports: [BadgeComponent]
})
export class BadgeModule { }`,
        types: `export type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-badge> custom element",
        html: "<ux4g-badge variant=\"primary\" size=\"md\"><!-- Badge --></ux4g-badge>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Badge / Chip',
          variants: 'standard, outlined, dot',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-badge/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Badge / Tag',
          variants: 'default, status, ribbon',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/badge',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Tag',
          variants: 'default, grey, status colors',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/tag/',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Sufficient color contrast (4.5:1 minimum)',
          'Not relying on color alone for meaning',
          'Semantic HTML span element',
          'Readable text sizing',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Badges are non-interactive' },
        ],
        screenReader: [
          'Reads badge text content',
          'Context provided by surrounding elements',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/badge.json',
        mappings: [
          { property: 'Primary Background', token: 'badge.primary.bg', value: '#005196' },
          { property: 'Success Background', token: 'badge.success.bg', value: '#138808' },
          { property: 'Warning Background', token: 'badge.warning.bg', value: '#EAB308' },
          { property: 'Error Background', token: 'badge.error.bg', value: '#DC2626' },
        ],
      }}

      useCases={[
        { title: "Application Status", description: "Status badge on application cards.", scenario: "My Applications list shows status.", implementation: "<Badge variant=\"warning\">Under Review</Badge>" },
        { title: "Notification Count", description: "Numeric badge on bell icon.", scenario: "Header shows unread count.", implementation: "<Badge variant=\"error\">3</Badge>" },
        { title: "Maturity Indicator", description: "Stability level on component docs.", scenario: "Component page shows maturity.", implementation: "<Badge variant=\"success\">Stable</Badge>" },
      
        { title: 'Priority Indicator', description: 'Badge showing case priority level on officer dashboard.', scenario: 'High-priority cases show red badge for immediate attention.', implementation: '<Badge variant="error">High Priority</Badge>' },
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
                  Do use Badge when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Status indicators</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Notification counts</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Category labels</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Version indicators</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Badge when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Interactive elements — badges are read-only</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Long text — use Alert</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Actions — use Button</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Removable items — use Tag</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2"><BadgePreview variant="warning">Under Review</BadgePreview><span className="text-sm text-foreground">Application CERT-2026-001</span></div>
                  <p className="text-sm text-muted-foreground">Use badges with both color and text to convey status — color alone fails WCAG 1.4.1.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="text-sm text-foreground">Application CERT-2026-001</span></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use color-only indicators — they are inaccessible to users with color vision deficiency.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Badge configurations in real time.</p>
            <BadgePlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/tag" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Tag</h3>
                <p className="text-sm text-muted-foreground">For removable labels</p>
              </a>
              <a href="/components/alert" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Alert</h3>
                <p className="text-sm text-muted-foreground">For prominent messages</p>
              </a>
              <a href="/components/statistic" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Statistic</h3>
                <p className="text-sm text-muted-foreground">For numeric displays</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added dot variant</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added outline style</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with 5 variants</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Badge readability</h3>
                <p className="text-sm text-muted-foreground">Badges with color and text are understood 40% faster than color-only (Baymard).</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Badge fatigue</h3>
                <p className="text-sm text-muted-foreground">Persistent high-count badges cause notification fatigue (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
