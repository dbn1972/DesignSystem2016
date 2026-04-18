/**
 * Divider Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const DividerPreview = ({ orientation = 'horizontal', variant = 'solid' }: any) => {
  if (orientation === 'vertical') {
    return (
      <div className="flex items-center h-24">
        <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">Left</div>
        <div className={`mx-4 h-full w-px ${variant === 'dashed' ? 'border-l border-dashed border-border' : 'bg-gray-300'}`} />
        <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">Right</div>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">Content Above</div>
      <div className={`h-px ${variant === 'dashed' ? 'border-t border-dashed border-border' : 'bg-gray-300'}`} />
      <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">Content Below</div>
    </div>
  );
};

const DIVIDER_CONTROLS: PlaygroundControl[] = [
  {
    name: 'orientation',
    label: 'Orientation',
    type: 'text',
    defaultValue: 'horizontal',
  },
  {
    name: 'variant',
    label: 'Variant',
    type: 'text',
    defaultValue: 'default',
  },
];

function DividerPlayground() {
  return (
    <ComponentPlayground
      name="Divider"
      controls={DIVIDER_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg">
          <DividerPreview {...v} />
        </div>
      )}
      codeTemplate={(v) => {
        const props: string[] = [];
        DIVIDER_CONTROLS.forEach((c) => {
          const val = v[c.name];
          if (c.type === 'boolean' && val) props.push(c.name);
          else if (c.type !== 'boolean' && val !== c.defaultValue) {
            props.push(`${c.name}="${val}"`);
          }
        });
        return `<Divider${props.length ? ' ' + props.join(' ') : ''} />`;
      }}
    />
  );
}

export default function ComponentDividerPage() {
  return (
    <ComponentDocumentation
      name="Divider"
      description="Visual separator component to divide content into distinct sections. Supports horizontal and vertical orientations with optional text labels."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <div className="w-full max-w-sm space-y-3"><p className="text-sm text-muted-foreground">Section A content</p><DividerPreview /><p className="text-sm text-muted-foreground">Section B content</p></div>
        </div>
      }
      
      props={[
        {
          name: 'orientation',
          type: "'horizontal' | 'vertical'",
          required: false,
          description: 'Orientation of the divider line.',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Label text displayed in the middle of the divider.',
        },
        {
          name: 'spacing',
          type: "'sm' | 'md' | 'lg'",
          required: false,
          description: 'Spacing around the divider.',
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
          title: 'Horizontal Divider',
          description: 'Basic horizontal separator.',
          code: `import { Divider } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>Content above divider</p>
      <Divider />
      <p>Content below divider</p>
    </div>
  );
}`,
          preview: <DividerPreview orientation="horizontal" variant="solid" />,
        },
        {
          title: 'Vertical Divider',
          description: 'Vertical separator between elements.',
          code: `import { Divider } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center">
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  );
}`,
          preview: <DividerPreview orientation="vertical" variant="solid" />,
        },
        {
          title: 'With Label',
          description: 'Divider with centered text label.',
          code: `import { Divider } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>Section 1</p>
      <Divider label="OR" />
      <p>Section 2</p>
    </div>
  );
}`,
          preview: (
            <div className="space-y-4">
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">Section 1</div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="text-sm font-semibold text-muted-foreground">OR</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">Section 2</div>
            </div>
          ),
        },
        {
          title: 'Dashed Divider',
          description: 'Dashed line variant.',
          code: `import { Divider } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>Content above</p>
      <Divider variant="dashed" />
      <p>Content below</p>
    </div>
  );
}`,
          preview: <DividerPreview orientation="horizontal" variant="dashed" />,
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  labelPosition = 'center',
  spacing = 'md',
  className,
}) => {
  const spacingClasses = {
    none: orientation === 'horizontal' ? 'my-0' : 'mx-0',
    sm: orientation === 'horizontal' ? 'my-2' : 'mx-2',
    md: orientation === 'horizontal' ? 'my-4' : 'mx-4',
    lg: orientation === 'horizontal' ? 'my-6' : 'mx-6',
  };
  
  const variantClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };
  
  // Horizontal divider with label
  if (orientation === 'horizontal' && label) {
    return (
      <div className={cn('flex items-center', spacingClasses[spacing], className)}>
        {labelPosition !== 'left' && (
          <div className={cn('flex-1', variantClasses[variant], 'border-t border-border')} />
        )}
        <span className="px-4 text-sm font-semibold text-muted-foreground">
          {label}
        </span>
        {labelPosition !== 'right' && (
          <div className={cn('flex-1', variantClasses[variant], 'border-t border-border')} />
        )}
      </div>
    );
  }
  
  // Horizontal divider without label
  if (orientation === 'horizontal') {
    return (
      <hr
        className={cn(
          'border-0 border-t border-border',
          variantClasses[variant],
          spacingClasses[spacing],
          className
        )}
      />
    );
  }
  
  // Vertical divider
  return (
    <div
      className={cn(
        'self-stretch w-px bg-gray-300',
        spacingClasses[spacing],
        className
      )}
      role="separator"
      aria-orientation="vertical"

      useCases={[
        { title: "Section Separator", description: "Visual break between page sections.", scenario: "Certificate service landing page sections.", implementation: "<Divider />" },
        { title: "List Item Separator", description: "Thin line between list items.", scenario: "Notification list items.", implementation: "<Divider variant=\"subtle\" />" },
      
        { title: 'Form Section Separator', description: 'Visual break between form sections.', scenario: 'Application form separates Personal and Address sections.', implementation: '<Divider />' },
        { title: 'Footer Separator', description: 'Divider above page footer.', scenario: 'Government portal separates content from footer links.', implementation: '<Divider variant="subtle" />' },
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
                  Do use Divider when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Separating content sections visually</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Between list items</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Before footer or action areas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Divider when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Spacing only — use Spacer instead</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Card boundaries — cards have their own borders</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Between every element — use sparingly</li>
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
                <div className="p-4">
                  <div className="space-y-2 mb-3"><p className="text-xs text-muted-foreground">Personal Details</p><hr className="border-border" /><p className="text-xs text-muted-foreground">Address Details</p></div>
                  <p className="text-sm text-muted-foreground">Use dividers between distinct content sections to improve scanning.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="space-y-0.5 mb-3"><hr className="border-border" /><hr className="border-border" /><hr className="border-border" /></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t overuse dividers between every element — use spacing instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <DividerPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/spacer" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Spacer</h3>
                <p className="text-sm text-muted-foreground">For spacing without a line</p>
              </a>
              <a href="/components/section" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Section</h3>
                <p className="text-sm text-muted-foreground">For semantic page sections</p>
              </a>
              <a href="/components/card" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Card</h3>
                <p className="text-sm text-muted-foreground">For bordered content groups</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with horizontal and vertical orientations</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Visual hierarchy</h3>
                <p className="text-sm text-muted-foreground">Dividers improve content scanning speed by 12% when used between distinct sections (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
};`,
        types: `export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';
export type DividerLabelPosition = 'left' | 'center' | 'right';
export type DividerSpacing = 'none' | 'sm' | 'md' | 'lg';

export interface DividerProps {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  label?: string | React.ReactNode;
  labelPosition?: DividerLabelPosition;
  spacing?: DividerSpacing;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-divider',
  template: \`
    <!-- Horizontal with label -->
    <div *ngIf="orientation === 'horizontal' && label"
         [class]="getContainerClasses()">
      <div *ngIf="labelPosition !== 'left'" 
           [class]="getLineClasses()"></div>
      <span class="px-4 text-sm font-semibold text-muted-foreground">{{ label }}</span>
      <div *ngIf="labelPosition !== 'right'" 
           [class]="getLineClasses()"></div>
    </div>
    
    <!-- Horizontal without label -->
    <hr *ngIf="orientation === 'horizontal' && !label"
        [class]="getHrClasses()" />
    
    <!-- Vertical -->
    <div *ngIf="orientation === 'vertical'"
         [class]="getVerticalClasses()"
         role="separator"
         aria-orientation="vertical">
    </div>
  \`
})
export class DividerComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() variant: 'solid' | 'dashed' | 'dotted' = 'solid';
  @Input() label?: string;
  @Input() labelPosition: 'left' | 'center' | 'right' = 'center';
  @Input() spacing: 'none' | 'sm' | 'md' | 'lg' = 'md';
  
  getContainerClasses(): string {
    const spacingClasses = {
      none: 'my-0',
      sm: 'my-2',
      md: 'my-4',
      lg: 'my-6',
    };
    return \`flex items-center \${spacingClasses[this.spacing]}\`;
  }
  
  getLineClasses(): string {
    const variantClasses = {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    };
    return \`flex-1 border-t border-border \${variantClasses[this.variant]}\`;
  }
  
  getHrClasses(): string {
    const spacingClasses = {
      none: 'my-0',
      sm: 'my-2',
      md: 'my-4',
      lg: 'my-6',
    };
    const variantClasses = {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    };
    return \`border-0 border-t border-border \${variantClasses[this.variant]} \${spacingClasses[this.spacing]}\`;
  }
  
  getVerticalClasses(): string {
    const spacingClasses = {
      none: 'mx-0',
      sm: 'mx-2',
      md: 'mx-4',
      lg: 'mx-6',
    };
    return \`self-stretch w-px bg-gray-300 \${spacingClasses[this.spacing]}\`;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider.component';

@NgModule({
  declarations: [DividerComponent],
  imports: [CommonModule],
  exports: [DividerComponent]
})
export class DividerModule { }`,
        types: `export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';
export type DividerLabelPosition = 'left' | 'center' | 'right';
export type DividerSpacing = 'none' | 'sm' | 'md' | 'lg';`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-divider> custom element",
        html: "<ux4g-divider variant=\"primary\" size=\"md\"><!-- Divider --></ux4g-divider>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Divider',
          variants: 'horizontal, vertical, with text, inset',
          accessibility: 'N/A (Visual)',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-divider/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Divider',
          variants: 'horizontal, vertical, with text, dashed',
          accessibility: 'N/A (Visual)',
          documentation: 'Good',
          link: 'https://ant.design/components/divider',
        },
        {
          system: 'Chakra UI',
          component: 'Divider',
          variants: 'horizontal, vertical, orientation',
          accessibility: 'ARIA separator role',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/divider',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'Visual Component (No specific WCAG criteria)',
        features: [
          'Semantic <hr> element for horizontal dividers',
          'role="separator" for vertical dividers',
          'aria-orientation attribute on vertical dividers',
          'Does not interfere with screen readers',
          'Purely decorative/visual element',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Divider is non-interactive visual element' },
        ],
        screenReader: [
          'Typically ignored by screen readers',
          'Does not announce unless labeled',
          'Visual separation only',
        ],
      }}
      
      tokens={{
        file: '/tokens/layout/divider.json',
        mappings: [
          { property: 'Color', token: 'divider.color', value: '#D1D5DB (Gray 300)' },
          { property: 'Thickness', token: 'divider.thickness', value: '1px' },
          { property: 'Spacing (SM)', token: 'divider.spacing.sm', value: '8px' },
          { property: 'Spacing (MD)', token: 'divider.spacing.md', value: '16px' },
          { property: 'Spacing (LG)', token: 'divider.spacing.lg', value: '24px' },
        ],
      }}
    />
  );
}
