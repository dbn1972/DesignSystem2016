/**
 * Container Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const ContainerPreview = ({ maxWidth = 'lg' }: any) => (
  <div className={`mx-auto px-4 ${maxWidth === 'sm' ? 'max-w-2xl' : maxWidth === 'md' ? 'max-w-4xl' : maxWidth === 'lg' ? 'max-w-6xl' : maxWidth === 'xl' ? 'max-w-7xl' : 'max-w-full'} bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg p-6`}>
    <p className="text-center text-muted-foreground">Container content ({maxWidth})</p>
  </div>
);

function ContainerPlayground() {
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [centered, setCentered] = React.useState(true);
  const [padding, setPadding] = React.useState('md');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <ContainerPreview maxWidth={maxWidth} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Max Width</label>
            <select value={maxWidth} onChange={e => setMaxWidth(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
              <option value="full">full</option>
            </select>
          </div>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={centered} onChange={e => setCentered(e.target.checked)} className="accent-primary" /><span className="text-foreground">Centered</span></label>
          <div><label className="block font-semibold text-foreground mb-1">Padding</label><select value={padding} onChange={e => setPadding(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="none">None</option><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option></select></div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Container ${maxWidth} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentContainerPage() {
  return (
    <ComponentDocumentation
      name="Container"
      description="Layout component that centers and constrains content width. Provides consistent horizontal spacing and responsive max-widths for optimal readability across devices."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <ContainerPreview maxWidth="md"><div className="bg-muted/30 rounded p-4 text-sm text-muted-foreground text-center">Content within max-width container</div></ContainerPreview>
        </div>
      }
      
      props={[
        {
          name: 'maxWidth',
          type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
          default: "'lg'",
          required: false,
          description: 'Maximum width constraint for the container.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Content to be contained.',
        },
        {
          name: 'centered',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to center the container horizontally.',
        },
        {
          name: 'padding',
          type: "'none' | 'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Horizontal padding inside the container.',
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
          title: 'Container Sizes',
          description: 'Different maximum width constraints.',
          code: `import { Container } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-8">
      <Container maxWidth="sm">
        <h2>Small Container</h2>
        <p>Max width: 672px (42rem)</p>
      </Container>
      
      <Container maxWidth="md">
        <h2>Medium Container</h2>
        <p>Max width: 896px (56rem)</p>
      </Container>
      
      <Container maxWidth="lg">
        <h2>Large Container</h2>
        <p>Max width: 1152px (72rem)</p>
      </Container>
      
      <Container maxWidth="xl">
        <h2>Extra Large Container</h2>
        <p>Max width: 1280px (80rem)</p>
      </Container>
    </div>
  );
}`,
          preview: (
            <div className="space-y-6 w-full">
              <ContainerPreview maxWidth="sm" />
              <ContainerPreview maxWidth="md" />
              <ContainerPreview maxWidth="lg" />
              <ContainerPreview maxWidth="xl" />
            </div>
          ),
        },
        {
          title: 'Full Width Container',
          description: 'Container without max-width constraint.',
          code: `import { Container } from '@ux4g/react-core';

function Example() {
  return (
    <Container maxWidth="full">
      <h2>Full Width Container</h2>
      <p>Spans the entire viewport width with padding.</p>
    </Container>
  );
}`,
          preview: <ContainerPreview maxWidth="full" />,
        },
        {
          title: 'Padding Variants',
          description: 'Different horizontal padding options.',
          code: `import { Container } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Container padding="none">
        No padding
      </Container>
      
      <Container padding="sm">
        Small padding (8px)
      </Container>
      
      <Container padding="md">
        Medium padding (16px)
      </Container>
      
      <Container padding="lg">
        Large padding (32px)
      </Container>
    </div>
  );
}`,
          preview: (
            <div className="space-y-4 w-full">
              <div className="mx-auto max-w-6xl bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg p-0">
                <p className="text-center text-muted-foreground">No padding</p>
              </div>
              <div className="mx-auto max-w-6xl bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg px-2 py-4">
                <p className="text-center text-muted-foreground">Small padding</p>
              </div>
              <div className="mx-auto max-w-6xl bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg px-4 py-4">
                <p className="text-center text-muted-foreground">Medium padding</p>
              </div>
              <div className="mx-auto max-w-6xl bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg px-8 py-4">
                <p className="text-center text-muted-foreground">Large padding</p>
              </div>
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { containerVariants } from './container.variants';
import { ContainerProps } from './Container.types';

export const Container: React.FC<ContainerProps> = ({
  maxWidth = 'lg',
  children,
  centered = true,
  padding = 'md',
  className,
}) => {
  return (
    <div
      className={cn(
        containerVariants({ maxWidth, centered, padding }),
        className
      )}
    >
      {children}
    </div>
  );
};`,
        types: `export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg';

export interface ContainerProps {
  maxWidth?: ContainerMaxWidth;
  children: React.ReactNode;
  centered?: boolean;
  padding?: ContainerPadding;
  className?: string;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const containerVariants = cva(
  'w-full',
  {
    variants: {
      maxWidth: {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full',
      },
      centered: {
        true: 'mx-auto',
        false: '',
      },
      padding: {
        none: 'px-0',
        sm: 'px-2 sm:px-4',
        md: 'px-4 sm:px-6 lg:px-8',
        lg: 'px-8 sm:px-12 lg:px-16',
      },
    },
    defaultVariants: {
      maxWidth: 'lg',
      centered: true,
      padding: 'md',
    },
  }
);`,
      }}
      
      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-container',
  template: \`
    <div [class]="getContainerClasses()">
      <ng-content></ng-content>
    </div>
  \`
})
export class ContainerComponent {
  @Input() maxWidth: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'lg';
  @Input() centered = true;
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  
  getContainerClasses(): string {
    const maxWidthClasses = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };
    
    const paddingClasses = {
      none: 'px-0',
      sm: 'px-2 sm:px-4',
      md: 'px-4 sm:px-6 lg:px-8',
      lg: 'px-8 sm:px-12 lg:px-16',
    };
    
    let classes = 'w-full';
    classes += ' ' + maxWidthClasses[this.maxWidth];
    if (this.centered) classes += ' mx-auto';
    classes += ' ' + paddingClasses[this.padding];
    
    return classes;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule],
  exports: [ContainerComponent]
})
export class ContainerModule { }`,
        types: `export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg';

export interface ContainerProps {
  maxWidth?: ContainerMaxWidth;
  centered?: boolean;
  padding?: ContainerPadding;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-container> custom element",
        html: "<ux4g-container variant=\"primary\" size=\"md\"><!-- Container --></ux4g-container>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Container',
          variants: 'maxWidth: xs, sm, md, lg, xl, fixed',
          accessibility: 'N/A (Layout)',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-container/',
        },
        {
          system: 'Bootstrap',
          component: 'Container',
          variants: 'container, container-fluid, container-{breakpoint}',
          accessibility: 'N/A (Layout)',
          documentation: 'Comprehensive',
          link: 'https://getbootstrap.com/docs/5.3/layout/containers/',
        },
        {
          system: 'Chakra UI',
          component: 'Container',
          variants: 'maxWidth: sm, md, lg, xl, 2xl',
          accessibility: 'N/A (Layout)',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/container',
        },
        {
          system: 'Tailwind CSS',
          component: 'Container',
          variants: 'container class with responsive max-widths',
          accessibility: 'N/A (Layout)',
          documentation: 'Comprehensive',
          link: 'https://tailwindcss.com/docs/container',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'Layout Component (No specific WCAG criteria)',
        features: [
          'Semantic HTML div element',
          'Responsive design support',
          'Does not interfere with screen readers',
          'Maintains document flow',
          'Supports nested interactive elements',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Container is non-interactive' },
        ],
        screenReader: [
          'Transparent to screen readers',
          'Does not announce as landmark',
          'Content within is read normally',
        ],
      }}
      
      tokens={{
        file: '/tokens/layout/container.json',
        mappings: [
          { property: 'Max Width (Small)', token: 'container.maxWidth.sm', value: '672px (42rem)' },
          { property: 'Max Width (Medium)', token: 'container.maxWidth.md', value: '896px (56rem)' },
          { property: 'Max Width (Large)', token: 'container.maxWidth.lg', value: '1152px (72rem)' },
          { property: 'Max Width (XL)', token: 'container.maxWidth.xl', value: '1280px (80rem)' },
          { property: 'Padding (Small)', token: 'container.padding.sm', value: '8px / 16px (responsive)' },
          { property: 'Padding (Medium)', token: 'container.padding.md', value: '16px / 24px / 32px (responsive)' },
          { property: 'Padding (Large)', token: 'container.padding.lg', value: '32px / 48px / 64px (responsive)' },
        ],
      }}

      useCases={[
        { title: "Page Content Wrapper", description: "Max-width container for page content.", scenario: "All documentation pages.", implementation: "<Container maxWidth=\"1200px\"><PageContent /></Container>" },
        { title: "Form Container", description: "Centered form with max width.", scenario: "Certificate application form.", implementation: "<Container maxWidth=\"600px\"><ApplicationForm /></Container>" },
      
        { title: 'Form Page Container', description: 'Max-width container for application forms.', scenario: 'Certificate form is contained within readable width.', implementation: '<Container maxWidth="600px"><ApplicationForm /></Container>' },
        { title: 'Content Page Container', description: 'Readable width container for policy documents.', scenario: 'Citizen reads RTI guidelines within comfortable line length.', implementation: '<Container maxWidth="800px"><PolicyContent /></Container>' },
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
                  Do use Container when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Page-level content containment</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Max-width wrappers for readability</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Centered content areas</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Consistent page margins</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Container when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Full-bleed sections — use no container</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Nested containers — avoid double wrapping</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Grid items — use Grid instead</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Fixed-width elements — use direct styling</li>
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
                  <p className="text-sm text-muted-foreground">Use containers with 60-80 character line length for optimal readability.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t nest containers — it creates double margins and unexpected layouts.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Container configurations in real time.</p>
            <ContainerPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/section" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Section</h3>
                <p className="text-sm text-muted-foreground">For semantic page sections</p>
              </a>
              <a href="/components/grid" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Grid</h3>
                <p className="text-sm text-muted-foreground">For grid layouts</p>
              </a>
              <a href="/components/flex" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Flex</h3>
                <p className="text-sm text-muted-foreground">For flexible layouts</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with responsive max-width</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Optimal line length</h3>
                <p className="text-sm text-muted-foreground">Content containers with 60-80 characters per line improve reading speed by 20% compared to full-width text (Baymard Institute).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
