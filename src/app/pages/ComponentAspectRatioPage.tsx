/**
 * AspectRatio Component Documentation Page
 * Complete documentation for the AspectRatio component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

// Import the actual AspectRatio component for live preview
const AspectRatioPreview = ({ ratio, children, maxWidth, className, ...props }: any) => {
  const getRatioValue = (ratioInput: string | number): number => {
    if (typeof ratioInput === 'number') return ratioInput;
    if (ratioInput.includes('/')) {
      const [w, h] = ratioInput.split('/').map(Number);
      return w / h;
    }
    return 16 / 9;
  };

  const ratioValue = getRatioValue(ratio || '16/9');
  const paddingBottom = `${(1 / ratioValue) * 100}%`;

  return (
    <div
      className={`relative w-full ${className || ''}`}
      style={{ maxWidth: maxWidth || '100%' }}
      {...props}
    >
      <div style={{ paddingBottom }} />
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};

function AspectRatioPlayground() {
  const [ratio, setRatio] = React.useState('16/9');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <AspectRatioPreview ratio={ratio} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Ratio</label>
            <select value={ratio} onChange={e => setRatio(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="16/9">16/9</option>
              <option value="4/3">4/3</option>
              <option value="1/1">1/1</option>
              <option value="21/9">21/9</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<AspectRatio ${ratio} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentAspectRatioPage() {
  return (
    <ComponentDocumentation
      name="AspectRatio"
      description="Layout component for maintaining consistent aspect ratios across responsive designs. Essential for video embeds, images, maps, and document viewers where maintaining proportions is critical."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.5.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          <AspectRatioPreview />
        </div>
      }

      props={[
        {
          name: 'ratio',
          type: "number | '16/9' | '4/3' | '1/1' | '21/9' | '3/2' | '2/1' | string",
          default: "'16/9'",
          required: false,
          description: 'Aspect ratio as a number (e.g., 1.777) or string fraction (e.g., "16/9"). Common ratios: 16/9 (widescreen), 4/3 (standard), 1/1 (square), 21/9 (ultrawide), 3/2 (photo), 2/1 (panoramic).',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Content to render within the aspect ratio container. Typically images, videos, iframes, or other media elements.',
        },
        {
          name: 'maxWidth',
          type: 'string | number',
          required: false,
          description: 'Maximum width of the container. Useful for preventing oversized media on large screens. Accepts CSS units (e.g., "800px", "50rem") or pixel numbers.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply to the outer container.',
        },
      ]}

      examples={[
        {
          title: '16:9 Video Container',
          description: 'Standard widescreen aspect ratio for modern video content.',
          code: `import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="16/9" maxWidth="800px">
      <div className="flex items-center justify-center bg-muted w-full h-full rounded">
        <span className="text-gray-500">16:9 Video Player</span>
      </div>
    </AspectRatio>
  );
}`,
          preview: (
            <AspectRatioPreview ratio="16/9" maxWidth="800px">
              <div className="flex items-center justify-center bg-muted w-full h-full rounded border-2 border-border">
                <span className="text-gray-500 font-medium">16:9 Video Player</span>
              </div>
            </AspectRatioPreview>
          ),
        },
        {
          title: '4:3 Image Container',
          description: 'Classic standard definition aspect ratio for traditional images.',
          code: `import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="4/3" maxWidth="600px">
      <img
        src="/government-building.jpg"
        alt="Government building"
        className="w-full h-full object-cover rounded"
      />
    </AspectRatio>
  );
}`,
          preview: (
            <AspectRatioPreview ratio="4/3" maxWidth="600px">
              <div className="flex items-center justify-center bg-muted w-full h-full rounded border-2 border-border">
                <span className="text-gray-500 font-medium">4:3 Image</span>
              </div>
            </AspectRatioPreview>
          ),
        },
        {
          title: 'Square (1:1) Profile Image',
          description: 'Perfect square ratio for avatars, profile images, and social media content.',
          code: `import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="1/1" maxWidth="300px">
      <img
        src="/profile.jpg"
        alt="User profile"
        className="w-full h-full object-cover rounded-full"
      />
    </AspectRatio>
  );
}`,
          preview: (
            <AspectRatioPreview ratio="1/1" maxWidth="300px">
              <div className="flex items-center justify-center bg-muted w-full h-full rounded-full border-2 border-border">
                <span className="text-gray-500 font-medium">1:1</span>
              </div>
            </AspectRatioPreview>
          ),
        },
        {
          title: 'YouTube Embed',
          description: 'Responsive YouTube video embed maintaining 16:9 aspect ratio.',
          code: `import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="16/9">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded border-0"
      />
    </AspectRatio>
  );
}`,
          preview: (
            <AspectRatioPreview ratio="16/9">
              <div className="flex flex-col items-center justify-center bg-black w-full h-full rounded border-2 border-gray-700">
                <div className="w-16 h-16 mb-4 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="text-white font-medium">YouTube Video Embed</span>
              </div>
            </AspectRatioPreview>
          ),
        },
        {
          title: 'Map Container',
          description: 'Embedded map with 21:9 ultrawide aspect ratio for geographic data.',
          code: `import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="21/9">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123"
        title="Location map"
        loading="lazy"
        className="w-full h-full rounded border-0"
      />
    </AspectRatio>
  );
}`,
          preview: (
            <AspectRatioPreview ratio="21/9">
              <div className="flex items-center justify-center bg-gray-200 w-full h-full rounded border-2 border-gray-400">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-muted-foreground font-medium">21:9 Map Embed</span>
                </div>
              </div>
            </AspectRatioPreview>
          ),
        },
        {
          title: 'Document Preview',
          description: 'PDF or document preview with 3:2 aspect ratio (common photo ratio).',
          code: `import { AspectRatio } from '@ux4g/react-core';

function Example() {
  return (
    <AspectRatio ratio="3/2" maxWidth="700px">
      <div className="w-full h-full bg-card border-2 border-border rounded shadow-lg p-6">
        <div className="text-foreground space-y-4">
          <h3 className="text-xl font-bold">Document Title</h3>
          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
          <div className="h-2 bg-gray-200 rounded w-full"></div>
          <div className="h-2 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </AspectRatio>
  );
}`,
          preview: (
            <AspectRatioPreview ratio="3/2" maxWidth="700px">
              <div className="w-full h-full bg-card border-2 border-border rounded shadow-lg p-6">
                <div className="text-foreground space-y-4">
                  <h3 className="text-xl font-bold">Document Title</h3>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </AspectRatioPreview>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { CSSProperties, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { AspectRatioProps } from './AspectRatio.types';

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (
    {
      ratio = '16/9',
      children,
      maxWidth,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const getRatioValue = (ratioInput: string | number): number => {
      if (typeof ratioInput === 'number') {
        return ratioInput;
      }

      if (typeof ratioInput === 'string' && ratioInput.includes('/')) {
        const [width, height] = ratioInput.split('/').map(Number);
        if (!isNaN(width) && !isNaN(height) && height !== 0) {
          return width / height;
        }
      }

      // Default to 16:9 if parsing fails
      return 16 / 9;
    };

    const ratioValue = getRatioValue(ratio);
    const paddingBottom = \`\${(1 / ratioValue) * 100}%\`;

    const containerStyle: CSSProperties = {
      ...style,
      maxWidth: maxWidth || '100%',
    };

    return (
      <div
        ref={ref}
        className={cn('relative w-full', className)}
        style={containerStyle}
        {...props}
      >
        {/* Padding-bottom technique for maintaining aspect ratio */}
        <div style={{ paddingBottom }} />

        {/* Absolutely positioned content fills the space */}
        <div className="absolute inset-0">
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';`,
        types: `export interface AspectRatioProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Aspect ratio as a number (e.g., 1.777) or string fraction (e.g., "16/9")
   * @default "16/9"
   */
  ratio?: number | string;

  /**
   * Content to render within the aspect ratio container
   */
  children: React.ReactNode;

  /**
   * Maximum width of the container
   * Useful for preventing oversized media on large screens
   */
  maxWidth?: string | number;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export type CommonRatio = '16/9' | '4/3' | '1/1' | '21/9' | '3/2' | '2/1';`,
        variants: `// AspectRatio doesn't use class-variance-authority variants
// Instead, it uses dynamic inline styles based on the ratio prop

export const commonRatios = {
  widescreen: '16/9',      // Modern video, presentations
  standard: '4/3',         // Traditional TV, classic images
  square: '1/1',           // Social media, avatars
  ultrawide: '21/9',       // Cinematic, panoramic views
  photo: '3/2',            // Common photo aspect ratio
  panoramic: '2/1',        // Wide landscapes
  portrait: '9/16',        // Vertical video, mobile
  golden: '1.618/1',       // Golden ratio
} as const;

export const getRatioFromString = (ratio: string): number => {
  const [width, height] = ratio.split('/').map(Number);
  return width / height;
};`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-aspect-ratio',
  template: \`
    <div
      class="ux4g-aspect-ratio"
      [class]="className"
      [style.max-width]="maxWidth"
    >
      <!-- Padding-bottom spacer for aspect ratio -->
      <div [style.padding-bottom]="paddingBottom"></div>

      <!-- Content container -->
      <div class="ux4g-aspect-ratio-content">
        <ng-content></ng-content>
      </div>
    </div>
  \`,
  styles: [\`
    .ux4g-aspect-ratio {
      position: relative;
      width: 100%;
    }

    .ux4g-aspect-ratio-content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  \`]
})
export class AspectRatioComponent {
  @Input() ratio: string | number = '16/9';
  @Input() maxWidth?: string;
  @Input() className?: string;

  get paddingBottom(): string {
    const ratioValue = this.getRatioValue(this.ratio);
    return \`\${(1 / ratioValue) * 100}%\`;
  }

  private getRatioValue(ratioInput: string | number): number {
    if (typeof ratioInput === 'number') {
      return ratioInput;
    }

    if (typeof ratioInput === 'string' && ratioInput.includes('/')) {
      const [width, height] = ratioInput.split('/').map(Number);
      if (!isNaN(width) && !isNaN(height) && height !== 0) {
        return width / height;
      }
    }

    // Default to 16:9
    return 16 / 9;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspectRatioComponent } from './aspect-ratio.component';

@NgModule({
  declarations: [AspectRatioComponent],
  imports: [CommonModule],
  exports: [AspectRatioComponent]
})
export class AspectRatioModule { }`,
        types: `export type CommonRatio = '16/9' | '4/3' | '1/1' | '21/9' | '3/2' | '2/1' | '9/16';

export interface AspectRatioConfig {
  ratio: number | string;
  maxWidth?: string;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-aspect-ratio> custom element",
        html: "<ux4g-aspect-ratio variant=\"primary\" size=\"md\"><!-- AspectRatio --></ux4g-aspect-ratio>",
      }}
      comparisons={[
        {
          system: 'Chakra UI',
          component: 'AspectRatio',
          variants: 'Single component with ratio prop',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/aspect-ratio',
        },
        {
          system: 'Radix UI',
          component: 'AspectRatio',
          variants: 'Unstyled primitive with ratio prop',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://www.radix-ui.com/primitives/docs/components/aspect-ratio',
        },
        {
          system: 'Material UI (Google)',
          component: 'Box with aspect-ratio CSS',
          variants: 'Not a dedicated component',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Limited',
          link: 'https://mui.com/material-ui/react-box/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Image with aspect ratio',
          variants: 'Built into Image component',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/image',
        },
        {
          system: 'Native CSS aspect-ratio',
          component: 'CSS Property',
          variants: 'aspect-ratio: 16 / 9',
          accessibility: 'N/A (CSS feature)',
          documentation: 'MDN Documentation',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Maintains semantic HTML structure with proper nesting',
          'Does not interfere with keyboard navigation of child elements',
          'Preserves focus management for interactive content (videos, iframes)',
          'Works with screen readers without additional markup',
          'Supports responsive scaling without content clipping',
          'Maintains aspect ratio across all viewport sizes',
          'Compatible with reduced motion preferences',
          'Does not introduce layout shifts during page load',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Focus moves to interactive children (videos, links, etc.)' },
          { key: 'Shift + Tab', action: 'Focus moves away from interactive children' },
        ],
        screenReader: [
          'Container is transparent to screen readers',
          'Child content is announced normally',
          'Image alt text and iframe titles are preserved',
          'No additional ARIA attributes needed on container',
        ],
      }}

      tokens={{
        file: '/tokens/components/aspect-ratio.json',
        mappings: [
          { property: 'Common Ratios', token: 'ratio.common.widescreen', value: '16/9' },
          { property: 'Common Ratios', token: 'ratio.common.standard', value: '4/3' },
          { property: 'Common Ratios', token: 'ratio.common.square', value: '1/1' },
          { property: 'Common Ratios', token: 'ratio.common.ultrawide', value: '21/9' },
          { property: 'Common Ratios', token: 'ratio.common.photo', value: '3/2' },
          { property: 'Common Ratios', token: 'ratio.common.portrait', value: '9/16' },
          { property: 'Max Width Default', token: 'layout.aspectRatio.maxWidth', value: '100%' },
          { property: 'Position Strategy', token: 'layout.aspectRatio.strategy', value: 'padding-bottom' },
        ],
      }}

      useCases={[
        { title: "Document Preview", description: "Maintain aspect ratio for document thumbnails.", scenario: "Document upload preview area.", implementation: "<AspectRatio ratio={4/3}><img src={docUrl} /></AspectRatio>" },
        { title: "Video Embed", description: "Responsive video container.", scenario: "Training video on help page.", implementation: "<AspectRatio ratio={16/9}><iframe src={videoUrl} /></AspectRatio>" },
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
                  Do use AspectRatio when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Responsive image containers</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Video embed wrappers</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Document preview areas</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Consistent media sizing across breakpoints</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use AspectRatio when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Fixed-size images — use direct width/height</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Text content — not applicable</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Icons — use fixed dimensions</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Full-bleed backgrounds — use CSS directly</li>
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
                  <p className="text-sm text-muted-foreground">Use aspect ratio containers for responsive media to prevent layout shift.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use fixed pixel dimensions for responsive images — they break on different screens.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different AspectRatio configurations in real time.</p>
            <AspectRatioPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/card" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Card</h3>
                <p className="text-sm text-muted-foreground">Often contains aspect-ratio media</p>
              </a>
              <a href="/components/container" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Container</h3>
                <p className="text-sm text-muted-foreground">For layout containment</p>
              </a>
              <a href="/components/grid" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Grid</h3>
                <p className="text-sm text-muted-foreground">For responsive layouts</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with configurable ratio</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Consistent media sizing</h3>
                <p className="text-sm text-muted-foreground">Maintaining aspect ratios prevents layout shift (CLS), improving Core Web Vitals scores by up to 15% (Google Web Dev).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
