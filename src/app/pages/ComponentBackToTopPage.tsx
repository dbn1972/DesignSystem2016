/**
 * Back to Top Component Documentation Page
 * Complete documentation for the Back to Top component with examples, code downloads, and comparisons
 */

import React, { useState, useEffect } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ArrowUp, ChevronUp } from 'lucide-react';

// Import the actual BackToTop component for live preview
const BackToTopPreview = ({
  position = 'bottom-right',
  shape = 'circle',
  size = 'md',
  label,
  showAfter = 300,
  smooth = true,
  color = 'default',
  ...props
}: any) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  const positionClasses =
    position === 'bottom-right' ? 'bottom-4 right-4' :
    position === 'bottom-left' ? 'bottom-4 left-4' :
    position === 'bottom-center' ? 'bottom-4 left-1/2 -translate-x-1/2' :
    'bottom-4 right-4';

  const shapeClasses =
    shape === 'circle' ? 'rounded-full' :
    shape === 'square' ? 'rounded-none' :
    shape === 'rounded' ? 'rounded-lg' :
    'rounded-full';

  const sizeClasses =
    size === 'sm' ? 'w-10 h-10' :
    size === 'lg' ? 'w-16 h-16' :
    'w-12 h-12';

  const colorClasses =
    color === 'primary' ? 'bg-[#005196] text-white hover:bg-[#004178]' :
    'bg-[#008800] text-white hover:bg-[#006600]';

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={'fixed z-50 flex items-center justify-center gap-2 border-0 shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] min-h-[44px] min-w-[44px] ' + positionClasses + ' ' + shapeClasses + ' ' + sizeClasses + ' ' + colorClasses}
      aria-label="Back to top"
      {...props}
    >
      <ArrowUp size={iconSize} />
      {label && <span className="text-sm font-medium whitespace-nowrap">{label}</span>}
    </button>
  );
};

function BackToTopPlayground() {
  const [smooth, setSmooth] = React.useState(false);
  const [threshold, setThreshold] = React.useState('200');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <BackToTopPreview threshold={100} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={smooth} onChange={e => setSmooth(e.target.checked)} className="accent-primary" /><span className="text-foreground">Smooth</span></label>
          <div>
            <label className="block font-semibold text-foreground mb-1">Threshold</label>
            <select value={threshold} onChange={e => setThreshold(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="500">500</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<BackToTop${smooth ? ' smooth' : ''} ${threshold} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentBackToTopPage() {
  return (
    <ComponentDocumentation
      name="Back to Top"
      description="Floating button that allows users to quickly scroll back to the top of long pages. Appears automatically after scrolling down, with customizable position, shape, and behavior. Essential for improving navigation on content-heavy government service pages."
      category="Navigation"
      maturity="stable"
      tier="core"
      since="v1.2.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl">
          <BackToTopPreview />
        </div>
      }

      props={[
        {
          name: 'showAfter',
          type: 'number',
          default: '300',
          required: false,
          description: 'Scroll distance in pixels after which the button appears. Lower values show the button earlier.',
        },
        {
          name: 'position',
          type: "'bottom-right' | 'bottom-left' | 'bottom-center'",
          default: "'bottom-right'",
          required: false,
          description: 'Position of the button on the screen. Bottom-right is most common, bottom-left for RTL languages, bottom-center for centered layouts.',
        },
        {
          name: 'smooth',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to use smooth scrolling animation. When false, jumps instantly to top. Respects prefers-reduced-motion.',
        },
        {
          name: 'onClick',
          type: '() => void',
          required: false,
          description: 'Optional callback function called after scrolling to top completes.',
        },
        {
          name: 'visibilityHeight',
          type: 'number',
          default: '300',
          required: false,
          description: 'Alias for showAfter. Scroll threshold in pixels for button visibility.',
        },
        {
          name: 'duration',
          type: 'number',
          default: '500',
          required: false,
          description: 'Animation duration in milliseconds for smooth scrolling. Only applies when smooth is true.',
        },
        {
          name: 'shape',
          type: "'circle' | 'square' | 'rounded'",
          default: "'circle'",
          required: false,
          description: 'Visual shape of the button. Circle is most common, square for modern designs, rounded for balanced approach.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the button. Small (40px), Medium (48px), Large (64px). All meet minimum 44px touch target.',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Optional text label to display alongside the icon. Makes purpose clearer for some users.',
        },
        {
          name: 'color',
          type: "'default' | 'primary'",
          default: "'default'",
          required: false,
          description: 'Color scheme of the button. Default uses success green, primary uses navy blue.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with position and shape classes.',
        },
        {
          name: 'aria-label',
          type: 'string',
          default: "'Back to top'",
          required: false,
          description: 'Accessible label for screen readers. Should describe the action clearly.',
        },
      ]}

      examples={[
        {
          title: 'Basic Button',
          description: 'Default back to top button that appears after scrolling 300px down the page.',
          code: 'import { BackToTop } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div>\n      <BackToTop />\n      {/* Your page content */}\n    </div>\n  );\n}',
          preview: (
            <div className="relative h-64 overflow-auto border rounded p-4">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Scroll down in this container to see the Back to Top button appear.</p>
                <div className="h-[800px] bg-gradient-to-b from-blue-50 to-blue-100 rounded p-4">
                  <h3 className="font-semibold mb-2">Long Content Area</h3>
                  <p className="text-sm text-muted-foreground mb-4">Keep scrolling down...</p>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i} className="mb-4 text-sm">
                      This is paragraph {i + 1} of the long content. The Back to Top button will appear as you scroll down.
                    </p>
                  ))}
                </div>
              </div>
              <BackToTopPreview />
            </div>
          ),
        },
        {
          title: 'Different Positions',
          description: 'Back to top button can be positioned at bottom-right, bottom-left, or bottom-center.',
          code: 'import { BackToTop } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div>\n      {/* Bottom Right (default) */}\n      <BackToTop position="bottom-right" />\n      \n      {/* Bottom Left */}\n      <BackToTop position="bottom-left" />\n      \n      {/* Bottom Center */}\n      <BackToTop position="bottom-center" />\n    </div>\n  );\n}',
          preview: (
            <div className="space-y-4">
              <div className="relative h-48 overflow-auto border rounded p-4">
                <div className="h-[600px] bg-gradient-to-b from-green-50 to-green-100 rounded p-4">
                  <h3 className="font-semibold mb-2">Bottom Right Position</h3>
                  <p className="text-sm text-muted-foreground">Scroll to see button in bottom-right corner (default).</p>
                </div>
                <BackToTopPreview position="bottom-right" showAfter={50} />
              </div>
              <div className="relative h-48 overflow-auto border rounded p-4">
                <div className="h-[600px] bg-gradient-to-b from-purple-50 to-purple-100 rounded p-4">
                  <h3 className="font-semibold mb-2">Bottom Left Position</h3>
                  <p className="text-sm text-muted-foreground">Scroll to see button in bottom-left corner.</p>
                </div>
                <BackToTopPreview position="bottom-left" showAfter={50} />
              </div>
              <div className="relative h-48 overflow-auto border rounded p-4">
                <div className="h-[600px] bg-gradient-to-b from-orange-50 to-orange-100 rounded p-4">
                  <h3 className="font-semibold mb-2">Bottom Center Position</h3>
                  <p className="text-sm text-muted-foreground">Scroll to see button in bottom-center.</p>
                </div>
                <BackToTopPreview position="bottom-center" showAfter={50} />
              </div>
            </div>
          ),
        },
        {
          title: 'With Text Label',
          description: 'Add a text label alongside the icon to make the purpose clearer.',
          code: 'import { BackToTop } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div>\n      <BackToTop label="Back to Top" shape="rounded" />\n    </div>\n  );\n}',
          preview: (
            <div className="relative h-64 overflow-auto border rounded p-4">
              <div className="h-[800px] bg-gradient-to-b from-indigo-50 to-indigo-100 rounded p-4">
                <h3 className="font-semibold mb-2">With Text Label</h3>
                <p className="text-sm text-muted-foreground mb-4">Scroll down to see the labeled button.</p>
                {Array.from({ length: 15 }).map((_, i) => (
                  <p key={i} className="mb-4 text-sm">
                    Content paragraph {i + 1}. The button includes a text label for clarity.
                  </p>
                ))}
              </div>
              <BackToTopPreview label="Top" shape="rounded" showAfter={50} />
            </div>
          ),
        },
        {
          title: 'Custom Threshold',
          description: 'Control when the button appears by setting a custom scroll threshold.',
          code: 'import { BackToTop } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div>\n      {/* Appears after 100px scroll */}\n      <BackToTop showAfter={100} />\n      \n      {/* Appears after 500px scroll */}\n      <BackToTop showAfter={500} />\n      \n      {/* Appears after 1000px scroll */}\n      <BackToTop showAfter={1000} />\n    </div>\n  );\n}',
          preview: (
            <div className="space-y-4">
              <div className="relative h-48 overflow-auto border rounded p-4">
                <div className="h-[400px] bg-gradient-to-b from-pink-50 to-pink-100 rounded p-4">
                  <h3 className="font-semibold mb-2">Appears Early (100px)</h3>
                  <p className="text-sm text-muted-foreground">Button appears after minimal scrolling.</p>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <p key={i} className="mb-4 text-sm">Paragraph {i + 1}</p>
                  ))}
                </div>
                <BackToTopPreview showAfter={20} size="sm" />
              </div>
              <div className="relative h-48 overflow-auto border rounded p-4">
                <div className="h-[1200px] bg-gradient-to-b from-yellow-50 to-yellow-100 rounded p-4">
                  <h3 className="font-semibold mb-2">Appears Late (500px)</h3>
                  <p className="text-sm text-muted-foreground">Button appears after scrolling halfway down.</p>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i} className="mb-4 text-sm">Paragraph {i + 1}</p>
                  ))}
                </div>
                <BackToTopPreview showAfter={200} size="sm" />
              </div>
            </div>
          ),
        },
        {
          title: 'Different Shapes',
          description: 'Choose between circle, square, or rounded rectangle shapes.',
          code: 'import { BackToTop } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div>\n      {/* Circle (default) */}\n      <BackToTop shape="circle" />\n      \n      {/* Square */}\n      <BackToTop shape="square" />\n      \n      {/* Rounded */}\n      <BackToTop shape="rounded" />\n    </div>\n  );\n}',
          preview: (
            <div className="flex gap-4 items-center justify-center p-8 bg-background rounded">
              <div className="text-center">
                <BackToTopPreview shape="circle" position="bottom-right" style={{ position: 'relative', bottom: 'auto', right: 'auto' }} />
                <p className="text-sm text-muted-foreground mt-2">Circle</p>
              </div>
              <div className="text-center">
                <BackToTopPreview shape="square" position="bottom-right" style={{ position: 'relative', bottom: 'auto', right: 'auto' }} />
                <p className="text-sm text-muted-foreground mt-2">Square</p>
              </div>
              <div className="text-center">
                <BackToTopPreview shape="rounded" position="bottom-right" style={{ position: 'relative', bottom: 'auto', right: 'auto' }} />
                <p className="text-sm text-muted-foreground mt-2">Rounded</p>
              </div>
            </div>
          ),
        },
        {
          title: 'Smooth vs Instant Scroll',
          description: 'Compare smooth animated scrolling with instant jump to top.',
          code: 'import { BackToTop } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div>\n      {/* Smooth scroll (default) */}\n      <BackToTop smooth={true} />\n      \n      {/* Instant scroll */}\n      <BackToTop smooth={false} />\n    </div>\n  );\n}',
          preview: (
            <div className="space-y-4">
              <div className="relative h-64 overflow-auto border rounded p-4">
                <div className="h-[1000px] bg-gradient-to-b from-teal-50 to-teal-100 rounded p-4">
                  <h3 className="font-semibold mb-2">Smooth Scroll Animation</h3>
                  <p className="text-sm text-muted-foreground mb-4">Click the button to smoothly animate back to top.</p>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i} className="mb-4 text-sm">
                      Paragraph {i + 1}. Notice the smooth scrolling animation when you click Back to Top.
                    </p>
                  ))}
                </div>
                <BackToTopPreview smooth={true} showAfter={50} label="Smooth" shape="rounded" />
              </div>
              <div className="relative h-64 overflow-auto border rounded p-4">
                <div className="h-[1000px] bg-gradient-to-b from-red-50 to-red-100 rounded p-4">
                  <h3 className="font-semibold mb-2">Instant Scroll (No Animation)</h3>
                  <p className="text-sm text-muted-foreground mb-4">Click the button to instantly jump back to top.</p>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i} className="mb-4 text-sm">
                      Paragraph {i + 1}. Notice the instant jump when you click Back to Top.
                    </p>
                  ))}
                </div>
                <BackToTopPreview smooth={false} showAfter={50} label="Instant" shape="rounded" />
              </div>
            </div>
          ),
        },
        {
          title: 'On Long Content Page',
          description: 'Real-world example with multiple sections of content, demonstrating practical usage.',
          code: 'import { BackToTop } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div>\n      <section id="section-1">\n        <h2>Introduction</h2>\n        <p>Long content here...</p>\n      </section>\n      \n      <section id="section-2">\n        <h2>Main Content</h2>\n        <p>More long content here...</p>\n      </section>\n      \n      <section id="section-3">\n        <h2>Conclusion</h2>\n        <p>Final content here...</p>\n      </section>\n      \n      <BackToTop \n        showAfter={400} \n        position="bottom-right"\n        shape="circle"\n        size="md"\n      />\n    </div>\n  );\n}',
          preview: (
            <div className="relative h-96 overflow-auto border rounded p-4">
              <div className="space-y-8">
                <section className="bg-card p-6 rounded shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Section 1: Introduction</h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    This is a long-form content page demonstrating the Back to Top component in a real-world scenario.
                    As you scroll through multiple sections, the button will appear to help you navigate back quickly.
                  </p>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <p key={i} className="mb-3 text-sm text-muted-foreground">
                      Additional introductory paragraph {i + 1} providing context and background information.
                    </p>
                  ))}
                </section>

                <section className="bg-card p-6 rounded shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Section 2: Main Content</h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    The main content section contains detailed information organized into subsections.
                  </p>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="mb-4">
                      <h3 className="font-semibold text-sm mb-2">Subsection {i + 1}</h3>
                      <p className="text-sm text-muted-foreground">
                        Detailed content for subsection {i + 1} with important information and explanations.
                      </p>
                    </div>
                  ))}
                </section>

                <section className="bg-card p-6 rounded shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Section 3: Additional Information</h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    Further details and supporting content continue here.
                  </p>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <p key={i} className="mb-3 text-sm text-muted-foreground">
                      Supporting paragraph {i + 1} with supplementary information.
                    </p>
                  ))}
                </section>

                <section className="bg-card p-6 rounded shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Section 4: Conclusion</h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    Summary and final thoughts about the topic.
                  </p>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <p key={i} className="mb-3 text-sm text-muted-foreground">
                      Concluding paragraph {i + 1} wrapping up the discussion.
                    </p>
                  ))}
                </section>
              </div>
              <BackToTopPreview showAfter={100} />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { useState, useEffect, forwardRef } from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { backToTopVariants } from \'./back-to-top.variants\';\nimport { BackToTopProps } from \'./BackToTop.types\';\nimport { ArrowUp } from \'lucide-react\';\n\nexport const BackToTop = forwardRef<HTMLButtonElement, BackToTopProps>(\n  (\n    {\n      showAfter = 300,\n      position = \'bottom-right\',\n      smooth = true,\n      onClick,\n      visibilityHeight,\n      duration = 500,\n      shape = \'circle\',\n      size = \'md\',\n      label,\n      color = \'default\',\n      className,\n      \'aria-label\': ariaLabel = \'Back to top\',\n      ...props\n    },\n    ref\n  ) => {\n    const [isVisible, setIsVisible] = useState(false);\n    const threshold = visibilityHeight || showAfter;\n\n    useEffect(() => {\n      const handleScroll = () => {\n        const scrolled = window.scrollY > threshold;\n        setIsVisible(scrolled);\n      };\n\n      window.addEventListener(\'scroll\', handleScroll, { passive: true });\n      handleScroll();\n\n      return () => {\n        window.removeEventListener(\'scroll\', handleScroll);\n      };\n    }, [threshold]);\n\n    const scrollToTop = () => {\n      const prefersReducedMotion = window.matchMedia(\n        \'(prefers-reduced-motion: reduce)\'\n      ).matches;\n\n      if (smooth && !prefersReducedMotion) {\n        window.scrollTo({ top: 0, behavior: \'smooth\' });\n      } else {\n        window.scrollTo({ top: 0 });\n      }\n\n      if (onClick) {\n        onClick();\n      }\n    };\n\n    if (!isVisible) {\n      return null;\n    }\n\n    return (\n      <button\n        ref={ref}\n        type="button"\n        onClick={scrollToTop}\n        className={cn(\n          backToTopVariants({ position, shape, size, color, hasLabel: !!label }),\n          className\n        )}\n        aria-label={ariaLabel}\n        {...props}\n      >\n        <ArrowUp className="shrink-0" size={size === \'sm\' ? 16 : size === \'lg\' ? 24 : 20} aria-hidden="true" />\n        {label && (\n          <span className="text-sm font-medium whitespace-nowrap">\n            {label}\n          </span>\n        )}\n      </button>\n    );\n  }\n);\n\nBackToTop.displayName = \'BackToTop\';',
        types: 'export interface BackToTopProps \n  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, \'onClick\'>,\n          BackToTopVariantProps {\n  showAfter?: number;\n  visibilityHeight?: number;\n  smooth?: boolean;\n  onClick?: () => void;\n  duration?: number;\n  label?: string;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const backToTopVariants = cva(\n  [\n    \'fixed z-50\',\n    \'flex items-center justify-center gap-2\',\n    \'border-0 shadow-lg\',\n    \'transition-all duration-300 ease-in-out\',\n    \'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]\',\n    \'min-h-[44px] min-w-[44px]\',\n    \'cursor-pointer select-none touch-manipulation\',\n  ],\n  {\n    variants: {\n      position: {\n        \'bottom-right\': [\n          \'bottom-4 right-4\',\n        ],\n        \'bottom-left\': [\n          \'bottom-4 left-4\',\n        ],\n        \'bottom-center\': [\n          \'bottom-4 left-1/2 -translate-x-1/2\',\n        ],\n      },\n      shape: {\n        circle: [\n          \'rounded-full\',\n        ],\n        square: [\n          \'rounded-none\',\n        ],\n        rounded: [\n          \'rounded-lg\',\n        ],\n      },\n      size: {\n        sm: [\n          \'w-10 h-10\',\n        ],\n        md: [\n          \'w-12 h-12\',\n        ],\n        lg: [\n          \'w-16 h-16\',\n        ],\n      },\n      color: {\n        default: [\n          \'bg-[#008800] text-white\',\n          \'hover:bg-[#006600]\',\n          \'active:bg-[#004400]\',\n        ],\n        primary: [\n          \'bg-[#005196] text-white\',\n          \'hover:bg-[#004178]\',\n          \'active:bg-[#00315a]\',\n        ],\n      },\n      hasLabel: {\n        true: [\n          \'w-auto px-4\',\n        ],\n      },\n    },\n    defaultVariants: {\n      position: \'bottom-right\',\n      shape: \'circle\',\n      size: \'md\',\n      color: \'default\',\n      hasLabel: false,\n    },\n  }\n);\n\nexport type BackToTopVariantProps = VariantProps<typeof backToTopVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener } from \'@angular/core\';\n\ntype BackToTopPosition = \'bottom-right\' | \'bottom-left\' | \'bottom-center\';\ntype BackToTopShape = \'circle\' | \'square\' | \'rounded\';\ntype BackToTopSize = \'sm\' | \'md\' | \'lg\';\ntype BackToTopColor = \'default\' | \'primary\';\n\n@Component({\n  selector: \'ux4g-back-to-top\',\n  template: `\n    <button\n      *ngIf="isVisible"\n      type="button"\n      [class]="getButtonClasses()"\n      [attr.aria-label]="ariaLabel"\n      (click)="scrollToTop()"\n    >\n      <svg\n        class="shrink-0"\n        [attr.width]="getIconSize()"\n        [attr.height]="getIconSize()"\n        viewBox="0 0 24 24"\n        fill="none"\n        stroke="currentColor"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n        aria-hidden="true"\n      >\n        <line x1="12" y1="19" x2="12" y2="5"></line>\n        <polyline points="5 12 12 5 19 12"></polyline>\n      </svg>\n      <span *ngIf="label" class="text-sm font-medium whitespace-nowrap">\n        {{ label }}\n      </span>\n    </button>\n  `,\n  styleUrls: [\'./back-to-top.component.css\']\n})\nexport class BackToTopComponent implements OnInit, OnDestroy {\n  @Input() showAfter = 300;\n  @Input() visibilityHeight?: number;\n  @Input() position: BackToTopPosition = \'bottom-right\';\n  @Input() shape: BackToTopShape = \'circle\';\n  @Input() size: BackToTopSize = \'md\';\n  @Input() color: BackToTopColor = \'default\';\n  @Input() smooth = true;\n  @Input() duration = 500;\n  @Input() label?: string;\n  @Input() ariaLabel = \'Back to top\';\n  \n  @Output() clicked = new EventEmitter<void>();\n\n  isVisible = false;\n  private scrollListener?: () => void;\n\n  ngOnInit(): void {\n    this.scrollListener = this.handleScroll.bind(this);\n    window.addEventListener(\'scroll\', this.scrollListener, { passive: true });\n    this.handleScroll();\n  }\n\n  ngOnDestroy(): void {\n    if (this.scrollListener) {\n      window.removeEventListener(\'scroll\', this.scrollListener);\n    }\n  }\n\n  @HostListener(\'window:scroll\')\n  handleScroll(): void {\n    const threshold = this.visibilityHeight || this.showAfter;\n    this.isVisible = window.scrollY > threshold;\n  }\n\n  scrollToTop(): void {\n    const prefersReducedMotion = window.matchMedia(\n      \'(prefers-reduced-motion: reduce)\'\n    ).matches;\n\n    if (this.smooth && !prefersReducedMotion) {\n      window.scrollTo({ top: 0, behavior: \'smooth\' });\n    } else {\n      window.scrollTo({ top: 0 });\n    }\n\n    this.clicked.emit();\n  }\n\n  getIconSize(): number {\n    if (this.size === \'sm\') return 16;\n    if (this.size === \'lg\') return 24;\n    return 20;\n  }\n\n  getButtonClasses(): string {\n    const baseClasses = \'ux4g-back-to-top\';\n    const positionClass = \'ux4g-back-to-top-\' + this.position;\n    const shapeClass = \'ux4g-back-to-top-\' + this.shape;\n    const sizeClass = \'ux4g-back-to-top-\' + this.size;\n    const colorClass = \'ux4g-back-to-top-\' + this.color;\n    const labelClass = this.label ? \'ux4g-back-to-top-with-label\' : \'\';\n    \n    return [baseClasses, positionClass, shapeClass, sizeClass, colorClass, labelClass]\n      .filter(Boolean)\n      .join(\' \');\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { BackToTopComponent } from \'./back-to-top.component\';\n\n@NgModule({\n  declarations: [BackToTopComponent],\n  imports: [CommonModule],\n  exports: [BackToTopComponent]\n})\nexport class BackToTopModule { }',
        types: 'export type BackToTopPosition = \'bottom-right\' | \'bottom-left\' | \'bottom-center\';\nexport type BackToTopShape = \'circle\' | \'square\' | \'rounded\';\nexport type BackToTopSize = \'sm\' | \'md\' | \'lg\';\nexport type BackToTopColor = \'default\' | \'primary\';',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-back-to-top> custom element",
        html: "<ux4g-back-to-top variant=\"primary\" size=\"md\"><!-- BackToTop --></ux4g-back-to-top>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Fab (Floating Action Button)',
          variants: 'circular, extended',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://mui.com/material-ui/react-floating-action-button/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'BackTop',
          variants: 'default, custom',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/back-top',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Back to top link',
          variants: 'text link only',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://design-system.service.gov.uk/components/back-to-top/',
        },
        {
          system: 'Chakra UI',
          component: 'Custom with Button',
          variants: 'requires custom implementation',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Limited',
          link: 'https://chakra-ui.com/docs/components/button',
        },
        {
          system: 'Bootstrap',
          component: 'Scroll to top (utility)',
          variants: 'custom implementation',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Limited',
          link: 'https://getbootstrap.com/docs/5.3/helpers/position/',
        },
        {
          system: 'Mantine',
          component: 'Affix',
          variants: 'position-based',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://mantine.dev/core/affix/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch target size for all button sizes (WCAG 2.5.5)',
          '2px focus ring with 2px offset for clear keyboard navigation visibility (WCAG 2.4.7)',
          'Color contrast ratio exceeds 4.5:1 for text and 3:1 for UI components (WCAG 1.4.3, 1.4.11)',
          'Semantic HTML button element for proper keyboard and screen reader support',
          'Clear aria-label describing the action performed',
          'Respects prefers-reduced-motion for users sensitive to animation (WCAG 2.3.3)',
          'Icon properly hidden from screen readers with aria-hidden',
          'Smooth scroll behavior can be disabled for accessibility needs',
          'Visible focus indicator meets enhanced contrast requirements',
          'Component is keyboard accessible without requiring mouse interaction',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to Back to Top button when visible' },
          { key: 'Shift + Tab', action: 'Move focus away from button' },
          { key: 'Enter', action: 'Activate button and scroll to top' },
          { key: 'Space', action: 'Activate button and scroll to top' },
        ],
        screenReader: [
          'Announces button role and accessible label (Back to top)',
          'Button only present in DOM when visible, avoiding confusion',
          'Arrow icon hidden from screen readers (aria-hidden="true")',
          'Text label (when present) is announced alongside button',
          'Focus moves to button, announcing position and action',
        ],
      }}

      tokens={{
        file: '/tokens/components/back-to-top.json',
        mappings: [
          { property: 'Size Medium (Width/Height)', token: 'base.size.md', value: '48px' },
          { property: 'Size Small (Width/Height)', token: 'base.size.sm', value: '40px' },
          { property: 'Size Large (Width/Height)', token: 'base.size.lg', value: '64px' },
          { property: 'Border Radius (Circle)', token: 'base.borderRadius.full', value: '9999px' },
          { property: 'Border Radius (Rounded)', token: 'base.borderRadius.lg', value: '8px' },
          { property: 'Default Background', token: 'variant.default.background', value: '#008800 (Success 500)' },
          { property: 'Default Hover', token: 'variant.default.background.hover', value: '#006600 (Success 600)' },
          { property: 'Primary Background', token: 'variant.primary.background', value: '#005196 (Navy 500)' },
          { property: 'Primary Hover', token: 'variant.primary.background.hover', value: '#004178 (Navy 600)' },
          { property: 'Shadow', token: 'base.shadow.lg', value: '0 10px 15px -3px rgba(0,0,0,0.1)' },
          { property: 'Position Bottom', token: 'base.spacing.4', value: '16px' },
          { property: 'Position Right/Left', token: 'base.spacing.4', value: '16px' },
          { property: 'Min Touch Target', token: 'accessibility.minTouchTarget', value: '44px' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
          { property: 'Transition Duration', token: 'base.transition.duration.normal', value: '300ms' },
        ],
      }}

      useCases={[
        {
          title: 'Long Policy Documents',
          description: 'Essential for multi-page policy documents, terms of service, and legal agreements where users need to quickly return to navigation or table of contents after reading.',
          implementation: 'Privacy Policy page with 20+ sections requiring easy navigation back to top menu.',
        },
        {
          title: 'Multi-Section Forms',
          description: 'Helpful in long application forms or surveys where users might need to return to the top to review instructions, change earlier answers, or access the main navigation.',
          implementation: 'Benefits application form with 15 steps where users need to reference instructions at the top.',
        },
        {
          title: 'Service Catalogs',
          description: 'Useful in government service directories or catalogs with extensive listings where users browse down the page and need quick access back to search or filters.',
          implementation: 'Department services listing with 50+ services organized by category.',
        },
        {
          title: 'FAQ Pages',
          description: 'Critical for FAQ pages with many questions where users scroll to find answers and need easy navigation back to the question categories or search.',
          implementation: 'Public health FAQ with 100+ questions organized into topics.',
        },
        {
          title: 'Terms and Conditions',
          description: 'Necessary for lengthy terms and conditions or user agreements where users need to navigate back to specific sections or the beginning of the document.',
          implementation: 'Online service terms with 30+ clauses and subsections.',
        },
        {
          title: 'Documentation Pages',
          description: 'Important for technical documentation, guides, and tutorials with extensive content where users need to return to the navigation menu or page header.',
          implementation: 'Developer API documentation with detailed endpoints and examples spanning multiple screens.',
        },
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
                  Do use BackToTop when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Long scrollable pages</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Documentation and content pages</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Search results with many items</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Mobile views where scrolling is extensive</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use BackToTop when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Short pages that fit in viewport</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Pages with sticky navigation</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Single-screen applications</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Pages with anchor navigation</li>
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
                  <p className="text-sm text-muted-foreground">Show back-to-top on pages longer than 3 viewports — it reduces navigation time by 70%.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t show back-to-top on short pages that fit in the viewport.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different BackToTop configurations in real time.</p>
            <BackToTopPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/pagination" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Pagination</h3>
                <p className="text-sm text-muted-foreground">For paged content navigation</p>
              </a>
              <a href="/components/breadcrumb" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Breadcrumb</h3>
                <p className="text-sm text-muted-foreground">For hierarchical navigation</p>
              </a>
              <a href="/components/stepper" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Stepper</h3>
                <p className="text-sm text-muted-foreground">For step-based navigation</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with threshold and smooth scroll</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Back-to-top improves navigation</h3>
                <p className="text-sm text-muted-foreground">Back-to-top buttons reduce time to reach page header by 70% on pages longer than 3 viewports (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
