/**
 * Spacer Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const SpacerPreview = ({ size = 'md', axis = 'vertical' }: any) => {
  const sizes = {
    xs: axis === 'vertical' ? 'h-1' : 'w-1',
    sm: axis === 'vertical' ? 'h-2' : 'w-2',
    md: axis === 'vertical' ? 'h-4' : 'w-4',
    lg: axis === 'vertical' ? 'h-8' : 'w-8',
    xl: axis === 'vertical' ? 'h-16' : 'w-16',
  };
  
  if (axis === 'horizontal') {
    return (
      <div className="flex items-center">
        <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4">Left</div>
        <div className={`${sizes[size as keyof typeof sizes]} bg-yellow-200 border border-yellow-400`} />
        <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4">Right</div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4">Above</div>
      <div className={`${sizes[size as keyof typeof sizes]} bg-yellow-200 border border-yellow-400`} />
      <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4">Below</div>
    </div>
  );
};

export default function ComponentSpacerPage() {
  return (
    <ComponentDocumentation
      name="Spacer"
      description="Flexible spacing component that creates empty space between elements. Useful for precise layout control and maintaining consistent spacing without margin/padding utilities."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"
      
      props={[
        {
          name: 'size',
          type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | number",
          default: "'md'",
          required: false,
          description: 'Size of the space (preset or custom pixels).',
        },
        {
          name: 'axis',
          type: "'vertical' | 'horizontal' | 'both'",
          default: "'vertical'",
          required: false,
          description: 'Direction of spacing.',
        },
        {
          name: 'flex',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Use flex:1 to fill available space.',
        },
      ]}
      
      examples={[
        {
          title: 'Vertical Spacing',
          description: 'Create vertical space between elements.',
          code: `import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>First element</p>
      <Spacer size="md" />
      <p>Second element</p>
    </div>
  );
}`,
          preview: <SpacerPreview size="md" axis="vertical" />,
        },
        {
          title: 'Horizontal Spacing',
          description: 'Create horizontal space between elements.',
          code: `import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex">
      <span>Left</span>
      <Spacer size="md" axis="horizontal" />
      <span>Right</span>
    </div>
  );
}`,
          preview: <SpacerPreview size="md" axis="horizontal" />,
        },
        {
          title: 'Size Variants',
          description: 'Different spacing sizes.',
          code: `import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-8">
      <div>
        <p>Element</p>
        <Spacer size="xs" />
        <p>Extra Small (4px)</p>
      </div>
      
      <div>
        <p>Element</p>
        <Spacer size="sm" />
        <p>Small (8px)</p>
      </div>
      
      <div>
        <p>Element</p>
        <Spacer size="md" />
        <p>Medium (16px)</p>
      </div>
      
      <div>
        <p>Element</p>
        <Spacer size="lg" />
        <p>Large (32px)</p>
      </div>
      
      <div>
        <p>Element</p>
        <Spacer size="xl" />
        <p>Extra Large (64px)</p>
      </div>
    </div>
  );
}`,
          preview: (
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Extra Small (4px)</p>
                <SpacerPreview size="xs" axis="vertical" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Medium (16px)</p>
                <SpacerPreview size="md" axis="vertical" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Large (32px)</p>
                <SpacerPreview size="lg" axis="vertical" />
              </div>
            </div>
          ),
        },
        {
          title: 'Flexible Spacer',
          description: 'Spacer that fills available space (flex: 1).',
          code: `import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex">
      <button>Left Button</button>
      <Spacer flex />
      <button>Right Button</button>
    </div>
  );
}`,
          preview: (
            <div className="flex w-full">
              <button className="px-4 py-2 bg-orange-500 text-white rounded">Left</button>
              <div className="flex-1 bg-yellow-200 border-y border-yellow-400" />
              <button className="px-4 py-2 bg-orange-500 text-white rounded">Right</button>
            </div>
          ),
        },
        {
          title: 'Custom Size',
          description: 'Spacer with custom pixel size.',
          code: `import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>Element</p>
      <Spacer size={24} />
      <p>Custom 24px spacing</p>
    </div>
  );
}`,
          preview: (
            <div>
              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4">Above</div>
              <div className="h-6 bg-yellow-200 border border-yellow-400" />
              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4">Below (24px)</div>
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { SpacerProps } from './Spacer.types';

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  axis = 'vertical',
  flex = false,
  className,
}) => {
  if (flex) {
    return <div className={cn('flex-1', className)} aria-hidden="true" />;
  }
  
  const sizeClasses = {
    xs: { vertical: 'h-1', horizontal: 'w-1', both: 'h-1 w-1' },
    sm: { vertical: 'h-2', horizontal: 'w-2', both: 'h-2 w-2' },
    md: { vertical: 'h-4', horizontal: 'w-4', both: 'h-4 w-4' },
    lg: { vertical: 'h-8', horizontal: 'w-8', both: 'h-8 w-8' },
    xl: { vertical: 'h-16', horizontal: 'w-16', both: 'h-16 w-16' },
  };
  
  // Custom pixel size
  if (typeof size === 'number') {
    const style: React.CSSProperties = {};
    if (axis === 'vertical') style.height = \`\${size}px\`;
    if (axis === 'horizontal') style.width = \`\${size}px\`;
    if (axis === 'both') {
      style.height = \`\${size}px\`;
      style.width = \`\${size}px\`;
    }
    
    return (
      <div
        className={className}
        style={style}
        aria-hidden="true"
      />
    );
  }
  
  return (
    <div
      className={cn(sizeClasses[size][axis], className)}
      aria-hidden="true"

      useCases={[
        { title: "Section Spacing", description: "Add vertical space between sections.", scenario: "Documentation page layout.", implementation: "<Spacer size=\"lg\" />" },
        { title: "Inline Spacing", description: "Add horizontal space between elements.", scenario: "Button group spacing.", implementation: "<Spacer size=\"md\" direction=\"horizontal\" />" },
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
                  Do use Spacer when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Adding consistent spacing between elements</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Vertical space between page sections</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Horizontal space between inline elements</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Layout spacing without margins</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Spacer when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Visual separation with a line — use Divider</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Component gaps — use Flex/Grid gap</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Padding — use CSS padding</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Large empty areas — reconsider layout</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/divider" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Divider</h3>
                <p className="text-sm text-muted-foreground">For visual separation with a line</p>
              </a>
              <a href="/components/flex" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Flex</h3>
                <p className="text-sm text-muted-foreground">For gap-based spacing</p>
              </a>
              <a href="/components/stack" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Stack</h3>
                <p className="text-sm text-muted-foreground">For stacked layouts with spacing</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with size and direction props</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Whitespace improves comprehension</h3>
                <p className="text-sm text-muted-foreground">Adequate whitespace between content sections improves reading comprehension by 20% (Wichita State University study).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
};`,
        types: `export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
export type SpacerAxis = 'vertical' | 'horizontal' | 'both';

export interface SpacerProps {
  size?: SpacerSize;
  axis?: SpacerAxis;
  flex?: boolean;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-spacer',
  template: \`
    <div [class]="getSpacerClasses()" 
         [style]="getSpacerStyles()"
         aria-hidden="true">
    </div>
  \`
})
export class SpacerComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number = 'md';
  @Input() axis: 'vertical' | 'horizontal' | 'both' = 'vertical';
  @Input() flex = false;
  
  getSpacerClasses(): string {
    if (this.flex) return 'flex-1';
    
    if (typeof this.size === 'number') return '';
    
    const sizeClasses: Record<string, Record<string, string>> = {
      xs: { vertical: 'h-1', horizontal: 'w-1', both: 'h-1 w-1' },
      sm: { vertical: 'h-2', horizontal: 'w-2', both: 'h-2 w-2' },
      md: { vertical: 'h-4', horizontal: 'w-4', both: 'h-4 w-4' },
      lg: { vertical: 'h-8', horizontal: 'w-8', both: 'h-8 w-8' },
      xl: { vertical: 'h-16', horizontal: 'w-16', both: 'h-16 w-16' },
    };
    
    return sizeClasses[this.size][this.axis];
  }
  
  getSpacerStyles(): Partial<CSSStyleDeclaration> | null {
    if (typeof this.size !== 'number') return null;
    
    const styles: any = {};
    const px = \`\${this.size}px\`;
    
    if (this.axis === 'vertical') styles.height = px;
    if (this.axis === 'horizontal') styles.width = px;
    if (this.axis === 'both') {
      styles.height = px;
      styles.width = px;
    }
    
    return styles;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacerComponent } from './spacer.component';

@NgModule({
  declarations: [SpacerComponent],
  imports: [CommonModule],
  exports: [SpacerComponent]
})
export class SpacerModule { }`,
        types: `export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
export type SpacerAxis = 'vertical' | 'horizontal' | 'both';

export interface SpacerProps {
  size?: SpacerSize;
  axis?: SpacerAxis;
  flex?: boolean;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-spacer> custom element",
        html: "<ux4g-spacer variant=\"primary\" size=\"md\"><!-- Spacer --></ux4g-spacer>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Box (with spacing)',
          variants: 'm, p, margin, padding props',
          accessibility: 'N/A (Layout)',
          documentation: 'Good',
          link: 'https://mui.com/material-ui/react-box/',
        },
        {
          system: 'Chakra UI',
          component: 'Spacer',
          variants: 'flex-based spacer',
          accessibility: 'N/A (Layout)',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/spacer',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Space',
          variants: 'horizontal, vertical, size',
          accessibility: 'N/A (Layout)',
          documentation: 'Good',
          link: 'https://ant.design/components/space',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'Layout Component (No specific WCAG criteria)',
        features: [
          'aria-hidden="true" (purely visual)',
          'Does not interfere with screen readers',
          'Transparent to assistive technologies',
          'Does not affect document flow semantics',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Spacer is non-interactive visual element' },
        ],
        screenReader: [
          'Completely hidden from screen readers',
          'Does not announce',
          'Purely visual spacing element',
        ],
      }}
      
      tokens={{
        file: '/tokens/layout/spacer.json',
        mappings: [
          { property: 'Size (XS)', token: 'spacer.size.xs', value: '4px (0.25rem)' },
          { property: 'Size (SM)', token: 'spacer.size.sm', value: '8px (0.5rem)' },
          { property: 'Size (MD)', token: 'spacer.size.md', value: '16px (1rem)' },
          { property: 'Size (LG)', token: 'spacer.size.lg', value: '32px (2rem)' },
          { property: 'Size (XL)', token: 'spacer.size.xl', value: '64px (4rem)' },
        ],
      }}
    />
  );
}
