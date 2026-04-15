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

function StackPlayground() {
  const [direction, setDirection] = React.useState('vertical');
  const [gap, setGap] = React.useState('2');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <StackPreview direction={direction} spacing={gap} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Direction</label>
            <select value={direction} onChange={e => setDirection(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="vertical">vertical</option>
              <option value="horizontal">horizontal</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-foreground mb-1">Gap</label>
            <select value={gap} onChange={e => setGap(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Stack ${direction} ${gap} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentStackPage() {
  return (
    <ComponentDocumentation
      name="Stack"
      description="Layout component for arranging items in a vertical or horizontal line with consistent spacing. Simplifies common flexbox patterns and ensures uniform spacing between elements."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <StackPreview direction="vertical" spacing="md"><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 1</div><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 2</div><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 3</div></StackPreview>
        </div>
      }
      
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
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-stack> custom element",
        html: "<ux4g-stack variant=\"primary\" size=\"md\"><!-- Stack --></ux4g-stack>",
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

      useCases={[
        { title: "Form Layout", description: "Vertical stack of form fields.", scenario: "Certificate application form.", implementation: "<Stack gap={4}><Input /><Select /><Button>Submit</Button></Stack>" },
        { title: "Card Content", description: "Stack content inside a card.", scenario: "Service information card.", implementation: "<Stack gap={2}><h3>Title</h3><p>Description</p><Badge>Status</Badge></Stack>" },
      
        { title: 'Form Field Stack', description: 'Vertical stack of form fields with consistent spacing.', scenario: 'Certificate application stacks input fields vertically.', implementation: '<Stack gap={4}><Input label="Name" /><Input label="Email" /><Button>Submit</Button></Stack>' },
        { title: 'Card Content Stack', description: 'Stack content elements inside a service card.', scenario: 'Service card stacks title, description, and status badge.', implementation: '<Stack gap={2}><h3>Birth Certificate</h3><p>Apply online</p><Badge>Available</Badge></Stack>' },
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
                  Do use Stack when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Vertical or horizontal element stacking</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Form field layouts</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Card content organization</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Simple one-directional layouts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Stack when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Two-dimensional layouts — use Grid</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Complex alignment — use Flex</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Centering — use Center</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Page containment — use Container</li>
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
                  <p className="text-sm text-muted-foreground">Use Stack for vertical form layouts — they are completed 15% faster on mobile.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use Stack for two-dimensional layouts — use Grid instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Stack configurations in real time.</p>
            <StackPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/flex" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Flex</h3>
                <p className="text-sm text-muted-foreground">For flexible layouts</p>
              </a>
              <a href="/components/grid" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Grid</h3>
                <p className="text-sm text-muted-foreground">For 2D layouts</p>
              </a>
              <a href="/components/center" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Center</h3>
                <p className="text-sm text-muted-foreground">For centering content</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added responsive variants</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Improved dark mode support</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with vertical and horizontal stacking</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Vertical stacking for forms</h3>
                <p className="text-sm text-muted-foreground">Vertically stacked form fields are completed 15% faster than multi-column layouts on mobile (Luke Wroblewski).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
