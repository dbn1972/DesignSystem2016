/**
 * Card Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const CardPreview = ({ title, children }: any) => (
  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground mb-4">{children}</p>
    <button className="px-4 py-2 bg-[#005196] text-white rounded-lg text-sm font-semibold">
      Learn More
    </button>
  </div>
);

export default function ComponentCardPage() {
  return (
    <ComponentDocumentation
      name="Card"
      description="Flexible container component for grouping related content. Provides a contained surface for displaying information with consistent spacing and visual hierarchy."
      category="Data Display"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      
      props={[
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Card content.',
        },
        {
          name: 'title',
          type: 'string',
          required: false,
          description: 'Card title/heading.',
        },
        {
          name: 'header',
          type: 'ReactNode',
          required: false,
          description: 'Custom header content.',
        },
        {
          name: 'footer',
          type: 'ReactNode',
          required: false,
          description: 'Card footer content.',
        },
        {
          name: 'hoverable',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether card shows hover effect.',
        },
        {
          name: 'bordered',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether card has border.',
        },
        {
          name: 'onClick',
          type: '() => void',
          required: false,
          description: 'Click handler for interactive cards.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Card',
          description: 'Simple card with title and content.',
          code: `import { Card } from '@ux4g/react-core';

function Example() {
  return (
    <Card title="Card Title">
      <p>This is the card content with some descriptive text.</p>
    </Card>
  );
}`,
          preview: (
            <CardPreview title="Card Title">
              This is the card content with some descriptive text.
            </CardPreview>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  children,
  title,
  header,
  footer,
  hoverable = false,
  bordered = true,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-card rounded-xl p-6',
        bordered && 'border border-border',
        hoverable && 'hover:shadow-lg transition-shadow',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {header && <div className="mb-4">{header}</div>}
      
      {title && (
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
      )}
      
      <div>{children}</div>
      
      {footer && (
        <div className="mt-4 pt-4 border-t border-border">
          {footer}
        </div>
      )}
    </div>
  );
};`,
        types: `export interface CardProps {
  children: React.ReactNode;
  title?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hoverable?: boolean;
  bordered?: boolean;
  onClick?: () => void;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux4g-card',
  template: \`
    <div [class]="getCardClasses()" (click)="handleClick()">
      <div *ngIf="hasHeader" class="mb-4">
        <ng-content select="[header]"></ng-content>
      </div>
      
      <h3 *ngIf="title" class="text-xl font-semibold text-foreground mb-3">
        {{ title }}
      </h3>
      
      <div>
        <ng-content></ng-content>
      </div>
      
      <div *ngIf="hasFooter" class="mt-4 pt-4 border-t border-border">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  \`
})
export class CardComponent {
  @Input() title?: string;
  @Input() hoverable = false;
  @Input() bordered = true;
  @Input() hasHeader = false;
  @Input() hasFooter = false;
  @Output() clicked = new EventEmitter<void>();
  
  getCardClasses(): string {
    let classes = 'bg-card rounded-xl p-6';
    if (this.bordered) classes += ' border border-border';
    if (this.hoverable) classes += ' hover:shadow-lg transition-shadow';
    if (this.clicked.observers.length > 0) classes += ' cursor-pointer';
    return classes;
  }
  
  handleClick(): void {
    this.clicked.emit();
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule],
  exports: [CardComponent]
})
export class CardModule { }`,
        types: `export interface CardProps {
  title?: string;
  hoverable?: boolean;
  bordered?: boolean;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-card> custom element",
        html: "<ux4g-card variant=\"primary\" size=\"md\"><!-- Card --></ux4g-card>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Card',
          variants: 'default, elevation, outlined',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-card/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Card',
          variants: 'default, bordered, hoverable, grid',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/card',
        },
        {
          system: 'Chakra UI',
          component: 'Card',
          variants: 'default, elevated, outline, filled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/card',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic HTML structure',
          'Sufficient color contrast',
          'Clear visual hierarchy',
          'Keyboard accessible when interactive',
          'Proper heading levels',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Focus interactive cards' },
          { key: 'Enter', action: 'Activate clickable card' },
        ],
        screenReader: [
          'Reads card content in logical order',
          'Announces headings properly',
          'Context provided by surrounding content',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/card.json',
        mappings: [
          { property: 'Background', token: 'card.bg', value: '#FFFFFF' },
          { property: 'Border Color', token: 'card.border', value: '#E5E7EB' },
          { property: 'Border Radius', token: 'card.borderRadius', value: '12px' },
          { property: 'Padding', token: 'card.padding', value: '24px' },
        ],
      }}
    />
  );
}
