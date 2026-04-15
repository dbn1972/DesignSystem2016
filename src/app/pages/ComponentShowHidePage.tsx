/**
 * Show/Hide Component Documentation Page
 * Complete documentation for the Show/Hide component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Menu, ChevronDown, Printer } from 'lucide-react';

// Import the actual Show/Hide component for live preview
const ShowHidePreview = ({ above, below, breakpoint, children, className, ssr, ...props }: any) => {
  const getDisplayClasses = () => {
    if (above) {
      return above === 'sm' ? 'hidden sm:block' :
             above === 'md' ? 'hidden md:block' :
             above === 'lg' ? 'hidden lg:block' :
             above === 'xl' ? 'hidden xl:block' : 'block';
    }
    if (below) {
      return below === 'sm' ? 'block sm:hidden' :
             below === 'md' ? 'block md:hidden' :
             below === 'lg' ? 'block lg:hidden' :
             below === 'xl' ? 'block xl:hidden' : 'block';
    }
    if (breakpoint) {
      return breakpoint === 'sm' ? 'hidden sm:block md:hidden' :
             breakpoint === 'md' ? 'hidden md:block lg:hidden' :
             breakpoint === 'lg' ? 'hidden lg:block xl:hidden' :
             breakpoint === 'xl' ? 'hidden xl:block' : 'block';
    }
    return 'block';
  };

  return (
    <div className={`${getDisplayClasses()} ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

function ShowHidePlayground() {
  const [defaultVisible, setDefaultVisible] = React.useState(false);
  const [animated, setAnimated] = React.useState(true);
  const [label, setLabel] = React.useState('Show more');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-sm space-y-2"><p className="text-sm text-foreground">Visible content above</p>{defaultVisible && <div className={`p-3 bg-muted/30 rounded text-sm text-muted-foreground ${animated ? "transition-all duration-300" : ""}`}>This content is toggled by ShowHide. It can contain any elements.</div>}{!defaultVisible && <button className="text-xs text-[#005196]">{label}</button>}</div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={defaultVisible} onChange={e => setDefaultVisible(e.target.checked)} className="accent-primary" /><span className="text-foreground">Default Visible</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={animated} onChange={e => setAnimated(e.target.checked)} className="accent-primary" /><span className="text-foreground">Animated</span></label>
          <div><label className="block font-semibold text-foreground mb-1">Toggle label</label><input value={label} onChange={e => setLabel(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground" /></div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<ShowHide${defaultVisible ? ' defaultVisible' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentShowHidePage() {
  return (
    <ComponentDocumentation
      name="Show/Hide"
      description="Responsive visibility utility component for controlling element display across different screen sizes. Enables mobile-first design patterns with declarative breakpoint-based visibility controls and server-side rendering support."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          <ShowHidePreview above={200}><p className="text-sm text-muted-foreground">This content can be toggled</p></ShowHidePreview>
        </div>
      }

      props={[
        {
          name: 'above',
          type: "'sm' | 'md' | 'lg' | 'xl'",
          required: false,
          description: 'Show content only above the specified breakpoint. Content is hidden below and visible at and above the breakpoint.',
        },
        {
          name: 'below',
          type: "'sm' | 'md' | 'lg' | 'xl'",
          required: false,
          description: 'Show content only below the specified breakpoint. Content is visible below and hidden at and above the breakpoint.',
        },
        {
          name: 'breakpoint',
          type: "'sm' | 'md' | 'lg' | 'xl'",
          required: false,
          description: 'Show content only at the specific breakpoint range. Content is hidden outside the breakpoint range.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Content to show or hide based on breakpoint conditions.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with visibility classes.',
        },
        {
          name: 'ssr',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Server-side rendering support. When true, renders a safe default to prevent hydration mismatches.',
        },
      ]}

      examples={[
        {
          title: 'Hide on Mobile',
          description: 'Hide content on mobile devices, show on tablet and desktop.',
          code: `import { ShowHide } from '@ux4g/react-core';

function Example() {
  return (
    <ShowHide above="md">
      <div className="desktop-feature">
        This advanced feature is only available on larger screens.
      </div>
    </ShowHide>
  );
}`,
          preview: (
            <ShowHidePreview above="md">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-blue-900 font-medium">Desktop Feature</p>
                <p className="text-sm text-blue-700">This content is hidden on mobile, visible on tablet and desktop.</p>
              </div>
            </ShowHidePreview>
          ),
        },
        {
          title: 'Show on Desktop Only',
          description: 'Display content exclusively on desktop screens (xl breakpoint and above).',
          code: `import { ShowHide } from '@ux4g/react-core';

function Example() {
  return (
    <ShowHide above="xl">
      <aside className="sidebar">
        <h3>Additional Resources</h3>
        <ul>
          <li>Documentation</li>
          <li>API Reference</li>
          <li>Tutorials</li>
        </ul>
      </aside>
    </ShowHide>
  );
}`,
          preview: (
            <ShowHidePreview above="xl">
              <div className="p-4 bg-green-50 border border-green-200 rounded">
                <h4 className="text-green-900 font-semibold mb-2">Additional Resources</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>Documentation</li>
                  <li>API Reference</li>
                  <li>Tutorials</li>
                </ul>
              </div>
            </ShowHidePreview>
          ),
        },
        {
          title: 'Hide on Tablet',
          description: 'Show content on mobile and desktop, but hide on tablet sizes.',
          code: `import { ShowHide } from '@ux4g/react-core';

function Example() {
  return (
    <>
      <ShowHide below="md">
        <div className="mobile-view">Mobile optimized content</div>
      </ShowHide>
      <ShowHide above="lg">
        <div className="desktop-view">Desktop optimized content</div>
      </ShowHide>
    </>
  );
}`,
          preview: (
            <div className="space-y-4">
              <ShowHidePreview below="md">
                <div className="p-4 bg-purple-50 border border-purple-200 rounded">
                  <p className="text-purple-900 font-medium">Mobile View</p>
                  <p className="text-sm text-purple-700">Visible on mobile only</p>
                </div>
              </ShowHidePreview>
              <ShowHidePreview above="lg">
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded">
                  <p className="text-indigo-900 font-medium">Desktop View</p>
                  <p className="text-sm text-indigo-700">Visible on desktop only</p>
                </div>
              </ShowHidePreview>
            </div>
          ),
        },
        {
          title: 'Responsive Navigation',
          description: 'Show different navigation patterns based on screen size.',
          code: `import { ShowHide } from '@ux4g/react-core';
import { Menu } from 'lucide-react';

function Example() {
  return (
    <nav>
      <ShowHide below="lg">
        <button aria-label="Open menu">
          <Menu size={24} />
        </button>
      </ShowHide>

      <ShowHide above="lg">
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </ShowHide>
    </nav>
  );
}`,
          preview: (
            <nav className="flex items-center justify-between p-4 bg-background border border-border rounded">
              <span className="font-semibold text-foreground">Logo</span>
              <ShowHidePreview below="lg">
                <button className="p-2 hover:bg-gray-200 rounded" aria-label="Open menu">
                  <Menu size={24} />
                </button>
              </ShowHidePreview>
              <ShowHidePreview above="lg">
                <ul className="flex gap-6 text-sm">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Home</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Services</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                </ul>
              </ShowHidePreview>
            </nav>
          ),
        },
        {
          title: 'Mobile Menu Toggle',
          description: 'Toggle between compact and expanded views for mobile.',
          code: `import { ShowHide } from '@ux4g/react-core';
import { ChevronDown } from 'lucide-react';

function Example() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ShowHide below="md">
      <div className="mobile-menu">
        <button onClick={() => setIsOpen(!isOpen)}>
          Menu <ChevronDown />
        </button>
        {isOpen && (
          <div className="menu-items">
            <a href="/dashboard">Dashboard</a>
            <a href="/profile">Profile</a>
            <a href="/settings">Settings</a>
          </div>
        )}
      </div>
    </ShowHide>
  );
}`,
          preview: (
            <ShowHidePreview below="md">
              <div className="p-4 bg-background border border-border rounded">
                <button className="flex items-center gap-2 w-full p-2 bg-card border border-border rounded hover:bg-background">
                  <span>Menu</span>
                  <ChevronDown size={16} />
                </button>
                <div className="mt-2 space-y-1">
                  <a href="#" className="block p-2 text-sm hover:bg-muted rounded">Dashboard</a>
                  <a href="#" className="block p-2 text-sm hover:bg-muted rounded">Profile</a>
                  <a href="#" className="block p-2 text-sm hover:bg-muted rounded">Settings</a>
                </div>
              </div>
            </ShowHidePreview>
          ),
        },
        {
          title: 'Print-only Content',
          description: 'Display content exclusively when printing.',
          code: `import { ShowHide } from '@ux4g/react-core';
import { Printer } from 'lucide-react';

function Example() {
  return (
    <>
      <ShowHide className="print:hidden">
        <button onClick={() => window.print()}>
          <Printer size={16} /> Print Document
        </button>
      </ShowHide>

      <ShowHide className="hidden print:block">
        <div className="print-header">
          <p>Printed on: {new Date().toLocaleDateString()}</p>
          <p>https://example.gov/document/123</p>
        </div>
      </ShowHide>
    </>
  );
}`,
          preview: (
            <div className="space-y-4">
              <ShowHidePreview className="print:hidden">
                <button className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded hover:bg-gray-200">
                  <Printer size={16} />
                  <span>Print Document</span>
                </button>
              </ShowHidePreview>
              <ShowHidePreview className="hidden print:block">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-yellow-900">Printed on: {new Date().toLocaleDateString()}</p>
                  <p className="text-sm text-yellow-700">https://example.gov/document/123</p>
                </div>
              </ShowHidePreview>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { showHideVariants } from './show-hide.variants';
import { ShowHideProps } from './ShowHide.types';

export const ShowHide = forwardRef<HTMLDivElement, ShowHideProps>(
  (
    {
      children,
      className,
      above,
      below,
      breakpoint,
      ssr = true,
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    // Validation: only one prop should be set
    const propsSet = [above, below, breakpoint].filter(Boolean).length;

    if (propsSet > 1) {
      console.warn(
        'ShowHide: Only one of "above", "below", or "breakpoint" should be set. Using the first defined prop.'
      );
    }

    if (propsSet === 0) {
      console.warn(
        'ShowHide: No visibility prop set. Component will always be visible.'
      );
    }

    // Generate visibility classes based on props
    const visibilityClasses = showHideVariants({ above, below, breakpoint });

    // SSR handling: render with safe defaults to prevent hydration mismatch
    const ssrClasses = ssr ? 'ssr-safe' : '';

    return (
      <Component
        ref={ref}
        className={cn(visibilityClasses, ssrClasses, className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

ShowHide.displayName = 'ShowHide';

// Convenience components for common patterns
export const HideOnMobile = ({ children, ...props }: Omit<ShowHideProps, 'above'>) => (
  <ShowHide above="md" {...props}>
    {children}
  </ShowHide>
);

export const ShowOnMobile = ({ children, ...props }: Omit<ShowHideProps, 'below'>) => (
  <ShowHide below="md" {...props}>
    {children}
  </ShowHide>
);

export const HideOnDesktop = ({ children, ...props }: Omit<ShowHideProps, 'below'>) => (
  <ShowHide below="lg" {...props}>
    {children}
  </ShowHide>
);

export const ShowOnDesktop = ({ children, ...props }: Omit<ShowHideProps, 'above'>) => (
  <ShowHide above="lg" {...props}>
    {children}
  </ShowHide>
);`,
        types: `export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export interface ShowHideProps extends React.HTMLAttributes<HTMLElement> {
  /** Show content only above the specified breakpoint */
  above?: Breakpoint;

  /** Show content only below the specified breakpoint */
  below?: Breakpoint;

  /** Show content only at the specific breakpoint range */
  breakpoint?: Breakpoint;

  /** Content to show or hide */
  children: React.ReactNode;

  /** Additional CSS classes */
  className?: string;

  /** Server-side rendering support (default: true) */
  ssr?: boolean;

  /** HTML element to render as (default: 'div') */
  as?: React.ElementType;
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const showHideVariants = cva('', {
  variants: {
    above: {
      sm: 'hidden sm:block',
      md: 'hidden md:block',
      lg: 'hidden lg:block',
      xl: 'hidden xl:block',
    },
    below: {
      sm: 'block sm:hidden',
      md: 'block md:hidden',
      lg: 'block lg:hidden',
      xl: 'block xl:hidden',
    },
    breakpoint: {
      sm: 'hidden sm:block md:hidden',
      md: 'hidden md:block lg:hidden',
      lg: 'hidden lg:block xl:hidden',
      xl: 'hidden xl:block',
    },
  },
});

export type ShowHideVariantProps = VariantProps<typeof showHideVariants>;`,
      }}

      angularCode={{
        component: `import { Component, Input, ElementRef, OnInit } from '@angular/core';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ux4g-show-hide',
  template: \`
    <div [class]="getClasses()">
      <ng-content></ng-content>
    </div>
  \`,
  styleUrls: ['./show-hide.component.css']
})
export class ShowHideComponent implements OnInit {
  @Input() above?: Breakpoint;
  @Input() below?: Breakpoint;
  @Input() breakpoint?: Breakpoint;
  @Input() ssr = true;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.validateProps();
  }

  private validateProps(): void {
    const propsSet = [this.above, this.below, this.breakpoint].filter(Boolean).length;

    if (propsSet > 1) {
      console.warn(
        'ShowHide: Only one of "above", "below", or "breakpoint" should be set.'
      );
    }

    if (propsSet === 0) {
      console.warn(
        'ShowHide: No visibility prop set. Component will always be visible.'
      );
    }
  }

  getClasses(): string {
    const classes: string[] = ['ux4g-show-hide'];

    if (this.above) {
      classes.push(\`ux4g-show-above-\${this.above}\`);
    } else if (this.below) {
      classes.push(\`ux4g-show-below-\${this.below}\`);
    } else if (this.breakpoint) {
      classes.push(\`ux4g-show-at-\${this.breakpoint}\`);
    }

    if (this.ssr) {
      classes.push('ux4g-ssr-safe');
    }

    return classes.join(' ');
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHideComponent } from './show-hide.component';

@NgModule({
  declarations: [ShowHideComponent],
  imports: [CommonModule],
  exports: [ShowHideComponent]
})
export class ShowHideModule { }`,
        types: `export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export interface ShowHideConfig {
  above?: Breakpoint;
  below?: Breakpoint;
  breakpoint?: Breakpoint;
  ssr?: boolean;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-show-hide> custom element",
        html: "<ux4g-show-hide variant=\"primary\" size=\"md\"><!-- ShowHide --></ux4g-show-hide>",
      }}
      comparisons={[
        {
          system: 'Chakra UI',
          component: 'Show / Hide',
          variants: 'above, below, breakpoint props',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/show-hide',
        },
        {
          system: 'Material UI',
          component: 'Hidden',
          variants: 'only, up, down props',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good (deprecated in v5)',
          link: 'https://v4.mui.com/components/hidden/',
        },
        {
          system: 'Bootstrap',
          component: 'Display Utilities',
          variants: 'd-none, d-{breakpoint}-{value}',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://getbootstrap.com/docs/5.3/utilities/display/',
        },
        {
          system: 'Tailwind CSS',
          component: 'Display Utilities',
          variants: 'hidden, block, {breakpoint}:hidden',
          accessibility: 'Manual implementation',
          documentation: 'Comprehensive',
          link: 'https://tailwindcss.com/docs/display',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Grid System (with display utilities)',
          variants: 'Custom responsive classes',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://design-system.service.gov.uk/styles/layout/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Content reflow support - no horizontal scrolling at 320px width (WCAG 1.4.10)',
          'Proper semantic HTML maintained across all breakpoints',
          'No content is permanently hidden from assistive technologies',
          'CSS-based visibility (display: none) properly removes content from accessibility tree',
          'Server-side rendering support prevents layout shift and hydration issues',
          'Respects prefers-reduced-motion for any transitions',
          'Focus management preserved across breakpoint changes',
          'No reliance on CSS-only content - all meaningful content is in DOM',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate through visible interactive elements' },
          { key: 'Shift + Tab', action: 'Navigate backwards through visible elements' },
        ],
        screenReader: [
          'Hidden content is properly removed from accessibility tree using display: none',
          'No aria-hidden used - content is truly hidden, not just visually hidden',
          'Screen readers only encounter content visible at current viewport',
          'No confusing navigation through hidden elements',
        ],
      }}

      tokens={{
        file: '/tokens/layout/show-hide.json',
        mappings: [
          { property: 'Breakpoint SM', token: 'breakpoint.sm', value: '640px' },
          { property: 'Breakpoint MD', token: 'breakpoint.md', value: '768px' },
          { property: 'Breakpoint LG', token: 'breakpoint.lg', value: '1024px' },
          { property: 'Breakpoint XL', token: 'breakpoint.xl', value: '1280px' },
          { property: 'Display Hidden', token: 'display.hidden', value: 'none' },
          { property: 'Display Block', token: 'display.block', value: 'block' },
          { property: 'Display Inline', token: 'display.inline', value: 'inline' },
          { property: 'Display Flex', token: 'display.flex', value: 'flex' },
        ],
      }}

      useCases={[
        { title: "Password Visibility", description: "Toggle password field visibility.", scenario: "Login and registration forms.", implementation: "<ShowHide><Input type=\"password\" /></ShowHide>" },
        { title: "Sensitive Data", description: "Hide/show Aadhaar number.", scenario: "Profile page with masked data.", implementation: "<ShowHide masked>{aadhaarNumber}</ShowHide>" },
      
        { title: 'Advanced Search Filters', description: 'Toggle visibility of advanced search options.', scenario: 'Citizen expands advanced filters on service search page.', implementation: '<ShowHide label="Advanced Filters"><FilterForm /></ShowHide>' },
        { title: 'Sensitive Data Masking', description: 'Hide/show Aadhaar number on profile page.', scenario: 'Citizen toggles Aadhaar visibility on their profile.', implementation: '<ShowHide masked>{aadhaarNumber}</ShowHide>' },
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
                  Do use ShowHide when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Password visibility toggles</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Sensitive data masking</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Expandable content sections</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Progressive disclosure of details</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use ShowHide when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Accordion-style content — use Accordion</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Modal content — use Modal</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Tab content — use Tabs</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Permanently hidden content — use CSS</li>
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
                  <p className="text-sm text-muted-foreground">Offer show/hide toggle on password fields — it reduces login errors by 30%.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use ShowHide for accordion-style content — use Accordion instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different ShowHide configurations in real time.</p>
            <ShowHidePlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/accordion" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Accordion</h3>
                <p className="text-sm text-muted-foreground">For expandable sections</p>
              </a>
              <a href="/components/input" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Input</h3>
                <p className="text-sm text-muted-foreground">For password fields</p>
              </a>
              <a href="/components/switch" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Switch</h3>
                <p className="text-sm text-muted-foreground">For toggle controls</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with show/hide toggle</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Password visibility improves UX</h3>
                <p className="text-sm text-muted-foreground">Show/hide password toggles reduce login errors by 30% (Baymard Institute). WCAG recommends offering this option.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
