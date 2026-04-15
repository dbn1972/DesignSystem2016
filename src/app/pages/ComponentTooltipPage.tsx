/**
 * Tooltip Component Documentation Page
 * Complete documentation for the Tooltip component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Info, HelpCircle, Settings } from 'lucide-react';

// Import the actual Tooltip component for live preview
const TooltipPreview = ({ content, placement = 'top', arrow = false, delay = 0, children }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowPositions = {
    top: 'top-full left-1/2 -translate-x-1/2 -mt-1 border-t-[#1f2937] border-x-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-[#1f2937] border-x-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 -ml-1 border-l-[#1f2937] border-y-transparent border-r-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 -mr-1 border-r-[#1f2937] border-y-transparent border-l-transparent',
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        tabIndex={0}
      >
        {children}
      </div>
      {isVisible && (
        <div
          role="tooltip"
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-[#1f2937] rounded shadow-lg whitespace-nowrap ${positions[placement as keyof typeof positions]}`}
        >
          {content}
          {arrow && (
            <div
              className={`absolute w-0 h-0 border-4 ${arrowPositions[placement as keyof typeof arrowPositions]}`}
            />
          )}
        </div>
      )}
    </div>
  );
};

function TooltipPlayground() {
  const [position, setPosition] = React.useState('top');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <TooltipPreview />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Position</label>
            <select value={position} onChange={e => setPosition(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Tooltip ${position} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentTooltipPage() {
  return (
    <ComponentDocumentation
      name="Tooltip"
      description="Displays contextual information on hover or focus. Provides supplementary details about UI elements without cluttering the interface. Designed for government services with full accessibility compliance."
      category="Data Display"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <TooltipPreview />
        </div>
      }

      props={[
        {
          name: 'content',
          type: 'string | ReactNode',
          required: true,
          description: 'The content to display inside the tooltip. Can be a string or React elements for rich content.',
        },
        {
          name: 'placement',
          type: "'top' | 'right' | 'bottom' | 'left'",
          default: "'top'",
          required: false,
          description: 'Position of the tooltip relative to the trigger element.',
        },
        {
          name: 'delay',
          type: 'number',
          default: '0',
          required: false,
          description: 'Delay in milliseconds before showing the tooltip on hover.',
        },
        {
          name: 'arrow',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to show an arrow pointing to the trigger element.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'The trigger element that activates the tooltip on hover/focus.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the tooltip is disabled and will not show.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes for the tooltip container.',
        },
        {
          name: 'onOpen',
          type: '() => void',
          required: false,
          description: 'Callback fired when tooltip opens.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: false,
          description: 'Callback fired when tooltip closes.',
        },
      ]}

      examples={[
        {
          title: 'Basic Tooltip',
          description: 'Simple tooltip with text content on hover.',
          code: `import { Tooltip } from '@ux4g/react-core';
import { Info } from 'lucide-react';

function Example() {
  return (
    <Tooltip content="This is helpful information">
      <button className="inline-flex items-center gap-2 px-4 py-2 text-[#005196] border border-[#005196] rounded hover:bg-[#f5f5f5]">
        <Info size={16} />
        Hover me
      </button>
    </Tooltip>
  );
}`,
          preview: (
            <TooltipPreview content="This is helpful information">
              <button className="inline-flex items-center gap-2 px-4 py-2 text-[#005196] border border-[#005196] rounded hover:bg-[#f5f5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]">
                <Info size={16} />
                Hover me
              </button>
            </TooltipPreview>
          ),
        },
        {
          title: 'Different Placements',
          description: 'Tooltips can be positioned on all four sides of the trigger element.',
          code: `import { Tooltip } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Top tooltip" placement="top">
        <button>Top</button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <button>Right</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <button>Left</button>
      </Tooltip>
    </div>
  );
}`,
          preview: (
            <div className="flex gap-4">
              <TooltipPreview content="Top tooltip" placement="top">
                <button className="px-4 py-2 text-white bg-[#005196] rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]">
                  Top
                </button>
              </TooltipPreview>
              <TooltipPreview content="Right tooltip" placement="right">
                <button className="px-4 py-2 text-white bg-[#005196] rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]">
                  Right
                </button>
              </TooltipPreview>
              <TooltipPreview content="Bottom tooltip" placement="bottom">
                <button className="px-4 py-2 text-white bg-[#005196] rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]">
                  Bottom
                </button>
              </TooltipPreview>
              <TooltipPreview content="Left tooltip" placement="left">
                <button className="px-4 py-2 text-white bg-[#005196] rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]">
                  Left
                </button>
              </TooltipPreview>
            </div>
          ),
        },
        {
          title: 'With Arrow',
          description: 'Tooltips can display an arrow pointing to the trigger element for better visual connection.',
          code: `import { Tooltip } from '@ux4g/react-core';
import { HelpCircle } from 'lucide-react';

function Example() {
  return (
    <div className="flex gap-8">
      <Tooltip
        content="Arrow pointing down"
        placement="top"
        arrow
      >
        <button className="inline-flex items-center gap-2">
          <HelpCircle size={16} />
          Help
        </button>
      </Tooltip>
      <Tooltip
        content="Arrow pointing left"
        placement="right"
        arrow
      >
        <button className="inline-flex items-center gap-2">
          <Settings size={16} />
          Settings
        </button>
      </Tooltip>
    </div>
  );
}`,
          preview: (
            <div className="flex gap-8">
              <TooltipPreview content="Arrow pointing down" placement="top" arrow>
                <button className="inline-flex items-center gap-2 px-4 py-2 text-[#005196] border border-[#005196] rounded hover:bg-[#f5f5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]">
                  <HelpCircle size={16} />
                  Help
                </button>
              </TooltipPreview>
              <TooltipPreview content="Arrow pointing left" placement="right" arrow>
                <button className="inline-flex items-center gap-2 px-4 py-2 text-[#005196] border border-[#005196] rounded hover:bg-[#f5f5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]">
                  <Settings size={16} />
                  Settings
                </button>
              </TooltipPreview>
            </div>
          ),
        },
        {
          title: 'Rich Content Tooltip',
          description: 'Tooltips can contain formatted text, icons, and other React elements.',
          code: `import { Tooltip } from '@ux4g/react-core';
import { Info } from 'lucide-react';

function Example() {
  return (
    <Tooltip
      content={
        <div className="space-y-1">
          <div className="font-semibold">System Status</div>
          <div className="text-xs text-gray-300">
            All services operational
          </div>
        </div>
      }
      placement="right"
      arrow
    >
      <button className="inline-flex items-center gap-2">
        <Info size={16} />
        Status
      </button>
    </Tooltip>
  );
}`,
          preview: (
            <TooltipPreview
              content={
                <div className="space-y-1">
                  <div className="font-semibold">System Status</div>
                  <div className="text-xs text-gray-300">
                    All services operational
                  </div>
                </div>
              }
              placement="right"
              arrow
            >
              <button className="inline-flex items-center gap-2 px-4 py-2 text-[#005196] border border-[#005196] rounded hover:bg-[#f5f5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]">
                <Info size={16} />
                Status
              </button>
            </TooltipPreview>
          ),
        },
        {
          title: 'Disabled State',
          description: 'Tooltips can be disabled to prevent them from showing.',
          code: `import { Tooltip } from '@ux4g/react-core';

function Example() {
  const [tooltipDisabled, setTooltipDisabled] = React.useState(true);

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={!tooltipDisabled}
          onChange={(e) => setTooltipDisabled(!e.target.checked)}
        />
        Enable tooltip
      </label>
      <Tooltip
        content="This tooltip can be toggled"
        disabled={tooltipDisabled}
      >
        <button className="px-4 py-2 bg-[#005196] text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  );
}`,
          preview: (
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                (Tooltip always enabled in preview)
              </div>
              <TooltipPreview content="This tooltip can be toggled">
                <button className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]">
                  Hover me
                </button>
              </TooltipPreview>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useState, useRef, useEffect } from 'react';
import { useHover } from '../../hooks/useHover';
import { cn } from '../../utils/cn';
import { TooltipProps } from './Tooltip.types';
import { tooltipVariants } from './tooltip.variants';

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = 'top',
  delay = 0,
  arrow = false,
  children,
  disabled = false,
  className,
  onOpen,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDelayed, setShowDelayed] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const isHovered = useHover(triggerRef);

  useEffect(() => {
    if (disabled) {
      setIsVisible(false);
      setShowDelayed(false);
      return;
    }

    if (isHovered) {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          setShowDelayed(true);
          setIsVisible(true);
          onOpen?.();
        }, delay);
      } else {
        setIsVisible(true);
        onOpen?.();
      }
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
      setShowDelayed(false);
      onClose?.();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovered, disabled, delay, onOpen, onClose]);

  const handleFocus = () => {
    if (!disabled) {
      setIsVisible(true);
      onOpen?.();
    }
  };

  const handleBlur = () => {
    setIsVisible(false);
    onClose?.();
  };

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby={isVisible ? 'tooltip' : undefined}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          id="tooltip"
          role="tooltip"
          className={cn(
            tooltipVariants({ placement, arrow }),
            className
          )}
        >
          {content}
          {arrow && (
            <div className={cn('tooltip-arrow', \`tooltip-arrow-\${placement}\`)} />
          )}
        </div>
      )}
    </div>
  );
};`,
        types: `export interface TooltipProps {
  content: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  arrow?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const tooltipVariants = cva(
  [
    'absolute z-50',
    'px-3 py-2',
    'text-sm text-white',
    'bg-gray-800 rounded shadow-lg',
    'whitespace-nowrap',
    'pointer-events-none',
  ],
  {
    variants: {
      placement: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
      },
      arrow: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      placement: 'top',
      arrow: false,
    },
  }
);`,
      }}

      angularCode={{
        component: `import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';

type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'ux4g-tooltip',
  template: \`
    <div class="tooltip-container">
      <div
        #trigger
        class="tooltip-trigger"
        [attr.aria-describedby]="isVisible ? 'tooltip-' + tooltipId : null"
      >
        <ng-content></ng-content>
      </div>
      <div
        *ngIf="isVisible && !disabled"
        [id]="'tooltip-' + tooltipId"
        role="tooltip"
        [class]="getTooltipClasses()"
        #tooltipElement
      >
        {{ content }}
        <div *ngIf="arrow" [class]="getArrowClasses()"></div>
      </div>
    </div>
  \`,
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit, OnDestroy {
  @Input() content: string = '';
  @Input() placement: TooltipPlacement = 'top';
  @Input() delay: number = 0;
  @Input() arrow: boolean = false;
  @Input() disabled: boolean = false;

  @ViewChild('trigger', { static: true }) trigger!: ElementRef;
  @ViewChild('tooltipElement') tooltipElement?: ElementRef;

  isVisible = false;
  tooltipId = Math.random().toString(36).substr(2, 9);
  private showTimeout?: any;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.disabled) return;

    if (this.delay > 0) {
      this.showTimeout = setTimeout(() => {
        this.isVisible = true;
      }, this.delay);
    } else {
      this.isVisible = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
    this.isVisible = false;
  }

  @HostListener('focusin')
  onFocus(): void {
    if (!this.disabled) {
      this.isVisible = true;
    }
  }

  @HostListener('focusout')
  onBlur(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {
    // Initialize component
  }

  ngOnDestroy(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
  }

  getTooltipClasses(): string {
    const baseClasses = 'ux4g-tooltip';
    const placementClass = \`ux4g-tooltip-\${this.placement}\`;
    return [baseClasses, placementClass].join(' ');
  }

  getArrowClasses(): string {
    return \`ux4g-tooltip-arrow ux4g-tooltip-arrow-\${this.placement}\`;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [TooltipComponent, TooltipDirective],
  imports: [CommonModule],
  exports: [TooltipComponent, TooltipDirective]
})
export class TooltipModule { }`,
        types: `export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipConfig {
  content: string;
  placement?: TooltipPlacement;
  delay?: number;
  arrow?: boolean;
  disabled?: boolean;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-tooltip> custom element",
        html: "<ux4g-tooltip variant=\"primary\" size=\"md\"><!-- Tooltip --></ux4g-tooltip>",
      }}
      comparisons={[
        {
          system: 'Radix UI',
          component: 'Tooltip',
          variants: 'Custom (unstyled primitive)',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/tooltip',
        },
        {
          system: 'Chakra UI',
          component: 'Tooltip',
          variants: 'Placement-based positioning',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/tooltip',
        },
        {
          system: 'Material UI (Google)',
          component: 'Tooltip',
          variants: 'Standard, Arrow variants',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-tooltip/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Tooltip',
          variants: 'Multiple placements, colors',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/tooltip',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Details (disclosure)',
          variants: 'Progressive disclosure pattern',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/details/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'role="tooltip" for proper semantic identification',
          'aria-describedby linking trigger to tooltip content',
          'Keyboard accessible - shows on focus, hides on blur',
          'Mouse accessible - shows on hover, hides on mouse leave',
          'Sufficient color contrast (white text on dark background)',
          'Dismissible with Escape key',
          'Does not obscure critical interface elements',
          'Content remains accessible when tooltip is hidden',
          'No time limits for reading tooltip content',
          'Touch device support with tap to show/hide',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Focus trigger element and show tooltip' },
          { key: 'Shift + Tab', action: 'Move focus away and hide tooltip' },
          { key: 'Escape', action: 'Hide tooltip while maintaining focus on trigger' },
        ],
        screenReader: [
          'Tooltip content announced when trigger receives focus',
          'aria-describedby associates tooltip with trigger element',
          'role="tooltip" indicates supplementary information',
          'Tooltip does not trap focus or interrupt navigation',
          'Content is readable when tooltip is not visible',
        ],
      }}

      tokens={{
        file: '/tokens/components/tooltip.json',
        mappings: [
          { property: 'Background Color', token: 'tooltip.background', value: '#1f2937 (Gray 800)' },
          { property: 'Text Color', token: 'tooltip.text', value: '#ffffff (White)' },
          { property: 'Font Size', token: 'tooltip.fontSize', value: '14px' },
          { property: 'Padding Horizontal', token: 'tooltip.padding.horizontal', value: '12px' },
          { property: 'Padding Vertical', token: 'tooltip.padding.vertical', value: '8px' },
          { property: 'Border Radius', token: 'tooltip.borderRadius', value: '4px' },
          { property: 'Box Shadow', token: 'tooltip.shadow', value: '0 4px 6px rgba(0, 0, 0, 0.1)' },
          { property: 'Z-Index', token: 'tooltip.zIndex', value: '50' },
          { property: 'Arrow Size', token: 'tooltip.arrow.size', value: '4px' },
          { property: 'Default Delay', token: 'tooltip.delay.default', value: '0ms' },
          { property: 'Offset Distance', token: 'tooltip.offset', value: '8px' },
        ],
      }}

      useCases={[
        { title: "Icon Button Label", description: "Tooltip on icon-only buttons.", scenario: "Toolbar with icon-only actions.", implementation: "<Tooltip content=\"Delete\"><Button variant=\"ghost\"><Trash /></Button></Tooltip>" },
        { title: "Truncated Text", description: "Show full text on hover.", scenario: "Table cell with truncated application ID.", implementation: "<Tooltip content={fullId}><span>{truncatedId}</span></Tooltip>" },
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
                  Do use Tooltip when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Supplementary info on hover/focus</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Icon-only button labels</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Truncated text full display</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Brief explanations of UI elements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Tooltip when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Essential information — show it directly</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Interactive content — use Popover</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Long content — use Popover or Modal</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Mobile-primary interfaces — tooltips need hover</li>
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
                  <div className="inline-flex flex-col items-center mb-3"><div className="px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg mb-1">Delete application</div><button className="p-2 border border-border rounded text-muted-foreground text-xs">🗑</button></div>
                  <p className="text-sm text-muted-foreground">Use tooltips for supplementary info on icon-only buttons and truncated text.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="mb-3"><button className="p-2 border border-border rounded text-muted-foreground text-xs">🗑</button></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t put essential information in tooltips — they require hover and are invisible on mobile.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Tooltip configurations in real time.</p>
            <TooltipPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/popover" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Popover</h3>
                <p className="text-sm text-muted-foreground">For interactive tooltip content</p>
              </a>
              <a href="/components/hinttext" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">HintText</h3>
                <p className="text-sm text-muted-foreground">For persistent help text</p>
              </a>
              <a href="/components/modal" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Modal</h3>
                <p className="text-sm text-muted-foreground">For detailed information</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added arrow positioning</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added delay configuration</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with 4 positions</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Tooltip discoverability</h3>
                <p className="text-sm text-muted-foreground">Only 40% of users discover tooltips without visual cues. Add a dotted underline or info icon (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
