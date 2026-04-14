/**
 * Stack Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const StackPreview = ({ direction = 'vertical', spacing = 'md' }: any) => {
  const spacingClasses = {
    xs: direction === 'vertical' ? 'space-y-1' : 'space-x-1',
    sm: direction === 'vertical' ? 'space-y-2' : 'space-x-2',
    md: direction === 'vertical' ? 'space-y-4' : 'space-x-4',
    lg: direction === 'vertical' ? 'space-y-6' : 'space-x-6',
    xl: direction === 'vertical' ? 'space-y-8' : 'space-x-8',
  };
  
  return (
    <div className={`${direction === 'vertical' ? 'flex flex-col' : 'flex flex-row'} ${spacingClasses[spacing as keyof typeof spacingClasses]}`}>
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-green-100 border-2 border-green-300 rounded-lg p-4 text-center">
          <span className="text-muted-foreground font-semibold">Item {i}</span>
        </div>
      ))}
    </div>
  );
};

export default function ComponentStackPage() {
  return (
    <ComponentDocumentation
      name="Stack"
      description="Layout component for arranging items in a vertical or horizontal line with consistent spacing. Simplifies common flexbox patterns and ensures uniform spacing between elements."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"
      
      props={[
        {
          name: 'direction',
          type: "'vertical' | 'horizontal'",
          default: "'vertical'",
          required: false,
          description: 'Direction of stack items.',
        },
        {
          name: 'spacing',
          type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",
          default: "'md'",
          required: false,
          description: 'Space between stack items.',
        },
        {
          name: 'align',
          type: "'start' | 'center' | 'end' | 'stretch'",
          default: "'stretch'",
          required: false,
          description: 'Alignment of items along cross axis.',
        },
        {
          name: 'justify',
          type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
          default: "'start'",
          required: false,
          description: 'Justification of items along main axis.',
        },
        {
          name: 'wrap',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether items should wrap to next line.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Stack items to display.',
        },
      ]}
      
      examples={[
        {
          title: 'Vertical Stack',
          description: 'Items stacked vertically with medium spacing.',
          code: `import { Stack } from '@ux4g/react-core';

function Example() {
  return (
    <Stack direction="vertical" spacing="md">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}`,
          preview: <StackPreview direction="vertical" spacing="md" />,
        },
        {
          title: 'Horizontal Stack',
          description: 'Items stacked horizontally.',
          code: `import { Stack } from '@ux4g/react-core';

function Example() {
  return (
    <Stack direction="horizontal" spacing="md">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}`,
          preview: <StackPreview direction="horizontal" spacing="md" />,
        },
        {
          title: 'Spacing Variants',
          description: 'Different spacing sizes.',
          code: `import { Stack } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-8">
      <Stack spacing="xs">
        <div>Extra Small</div>
        <div>Spacing</div>
      </Stack>
      
      <Stack spacing="sm">
        <div>Small</div>
        <div>Spacing</div>
      </Stack>
      
      <Stack spacing="md">
        <div>Medium</div>
        <div>Spacing</div>
      </Stack>
      
      <Stack spacing="lg">
        <div>Large</div>
        <div>Spacing</div>
      </Stack>
      
      <Stack spacing="xl">
        <div>Extra Large</div>
        <div>Spacing</div>
      </Stack>
    </div>
  );
}`,
          preview: (
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Extra Small</p>
                <StackPreview direction="vertical" spacing="xs" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Medium</p>
                <StackPreview direction="vertical" spacing="md" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Large</p>
                <StackPreview direction="vertical" spacing="lg" />
              </div>
            </div>
          ),
        },
        {
          title: 'Alignment Options',
          description: 'Different alignment configurations.',
          code: `import { Stack } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Stack direction="horizontal" align="start">
        <div>Align Start</div>
        <div style={{ height: '60px' }}>Tall Item</div>
      </Stack>
      
      <Stack direction="horizontal" align="center">
        <div>Align Center</div>
        <div style={{ height: '60px' }}>Tall Item</div>
      </Stack>
      
      <Stack direction="horizontal" align="end">
        <div>Align End</div>
        <div style={{ height: '60px' }}>Tall Item</div>
      </Stack>
    </div>
  );
}`,
          preview: (
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">Start</div>
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 h-20 flex items-center">Tall</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">Center</div>
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 h-20 flex items-center">Tall</div>
              </div>
              <div className="flex items-end space-x-4">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">End</div>
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 h-20 flex items-center">Tall</div>
              </div>
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { StackProps } from './Stack.types';

export const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  children,
  className,
}) => {
  const spacingClasses = {
    none: direction === 'vertical' ? 'space-y-0' : 'space-x-0',
    xs: direction === 'vertical' ? 'space-y-1' : 'space-x-1',
    sm: direction === 'vertical' ? 'space-y-2' : 'space-x-2',
    md: direction === 'vertical' ? 'space-y-4' : 'space-x-4',
    lg: direction === 'vertical' ? 'space-y-6' : 'space-x-6',
    xl: direction === 'vertical' ? 'space-y-8' : 'space-x-8',
  };
  
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };
  
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };
  
  return (
    <div
      className={cn(
        'flex',
        direction === 'vertical' ? 'flex-col' : 'flex-row',
        spacingClasses[spacing],
        alignClasses[align],
        justifyClasses[justify],
        wrap && 'flex-wrap',
        className
      )}
    >
      {children}
    </div>
  );
};`,
        types: `export type StackDirection = 'vertical' | 'horizontal';
export type StackSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface StackProps {
  direction?: StackDirection;
  spacing?: StackSpacing;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  children: React.ReactNode;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-stack',
  template: \`
    <div [class]="getStackClasses()">
      <ng-content></ng-content>
    </div>
  \`
})
export class StackComponent {
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
  @Input() spacing: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  @Input() justify: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' = 'start';
  @Input() wrap = false;
  
  getStackClasses(): string {
    const isVertical = this.direction === 'vertical';
    
    const spacingClasses = {
      none: isVertical ? 'space-y-0' : 'space-x-0',
      xs: isVertical ? 'space-y-1' : 'space-x-1',
      sm: isVertical ? 'space-y-2' : 'space-x-2',
      md: isVertical ? 'space-y-4' : 'space-x-4',
      lg: isVertical ? 'space-y-6' : 'space-x-6',
      xl: isVertical ? 'space-y-8' : 'space-x-8',
    };
    
    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    };
    
    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    };
    
    let classes = 'flex';
    classes += isVertical ? ' flex-col' : ' flex-row';
    classes += ' ' + spacingClasses[this.spacing];
    classes += ' ' + alignClasses[this.align];
    classes += ' ' + justifyClasses[this.justify];
    if (this.wrap) classes += ' flex-wrap';
    
    return classes;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from './stack.component';

@NgModule({
  declarations: [StackComponent],
  imports: [CommonModule],
  exports: [StackComponent]
})
export class StackModule { }`,
        types: `export type StackDirection = 'vertical' | 'horizontal';
export type StackSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';`,
      }}
      
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Stack',
          variants: 'direction, spacing, dividers',
          accessibility: 'N/A (Layout)',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-stack/',
        },
        {
          system: 'Chakra UI',
          component: 'Stack / VStack / HStack',
          variants: 'vertical, horizontal, spacing',
          accessibility: 'N/A (Layout)',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/stack',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Space',
          variants: 'horizontal, vertical, size, wrap',
          accessibility: 'N/A (Layout)',
          documentation: 'Good',
          link: 'https://ant.design/components/space',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'Layout Component (No specific WCAG criteria)',
        features: [
          'Semantic flexbox structure',
          'Maintains DOM reading order',
          'Does not interfere with screen readers',
          'Supports nested interactive elements',
          'Responsive design support',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Stack is non-interactive layout container' },
        ],
        screenReader: [
          'Transparent to screen readers',
          'Content read in DOM order',
          'Visual arrangement does not affect semantic order',
        ],
      }}
      
      tokens={{
        file: '/tokens/layout/stack.json',
        mappings: [
          { property: 'Spacing (XS)', token: 'stack.spacing.xs', value: '4px (0.25rem)' },
          { property: 'Spacing (SM)', token: 'stack.spacing.sm', value: '8px (0.5rem)' },
          { property: 'Spacing (MD)', token: 'stack.spacing.md', value: '16px (1rem)' },
          { property: 'Spacing (LG)', token: 'stack.spacing.lg', value: '24px (1.5rem)' },
          { property: 'Spacing (XL)', token: 'stack.spacing.xl', value: '32px (2rem)' },
        ],
      }}
    />
  );
}
