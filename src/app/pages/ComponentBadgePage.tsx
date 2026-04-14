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

export default function ComponentBadgePage() {
  return (
    <ComponentDocumentation
      name="Badge"
      description="Small status indicators and labels for highlighting information, counts, or status. Used throughout government interfaces to draw attention to important metadata."
      category="Feedback"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"
      
      props={[
        {
          name: 'variant',
          type: "'primary' | 'success' | 'warning' | 'error' | 'neutral'",
          default: "'neutral'",
          required: false,
          description: 'Visual variant of the badge.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Badge content (text or number).',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the badge.',
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
    />
  );
}
