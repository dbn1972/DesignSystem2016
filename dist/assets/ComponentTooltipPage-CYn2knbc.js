import{j as e,r as d}from"./index-wYwTiNL-.js";import{C as u}from"./ComponentDocumentation-DKnXH-Pi.js";import{I as s}from"./info-DKzCpq0n.js";import{C as m}from"./circle-help-C_P2WclE.js";import{S as f}from"./settings-CJDqkAwh.js";import"./copy-DRmj_ACu.js";import"./external-link-CusCIMwZ.js";const t=({content:n,placement:i="top",arrow:r=!1,delay:h=0,children:l})=>{const[a,o]=d.useState(!1),p={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"},c={top:"top-full left-1/2 -translate-x-1/2 -mt-1 border-t-[#1f2937] border-x-transparent border-b-transparent",bottom:"bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-[#1f2937] border-x-transparent border-t-transparent",left:"left-full top-1/2 -translate-y-1/2 -ml-1 border-l-[#1f2937] border-y-transparent border-r-transparent",right:"right-full top-1/2 -translate-y-1/2 -mr-1 border-r-[#1f2937] border-y-transparent border-l-transparent"};return e.jsxs("div",{className:"relative inline-block",children:[e.jsx("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onFocus:()=>o(!0),onBlur:()=>o(!1),tabIndex:0,children:l}),a&&e.jsxs("div",{role:"tooltip",className:`absolute z-50 px-3 py-2 text-sm text-white bg-[#1f2937] rounded shadow-lg whitespace-nowrap ${p[i]}`,children:[n,r&&e.jsx("div",{className:`absolute w-0 h-0 border-4 ${c[i]}`})]})]})};function C(){return e.jsx(u,{name:"Tooltip",description:"Displays contextual information on hover or focus. Provides supplementary details about UI elements without cluttering the interface. Designed for government services with full accessibility compliance.",category:"Data Display",maturity:"stable",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"content",type:"string | ReactNode",required:!0,description:"The content to display inside the tooltip. Can be a string or React elements for rich content."},{name:"placement",type:"'top' | 'right' | 'bottom' | 'left'",default:"'top'",required:!1,description:"Position of the tooltip relative to the trigger element."},{name:"delay",type:"number",default:"0",required:!1,description:"Delay in milliseconds before showing the tooltip on hover."},{name:"arrow",type:"boolean",default:"false",required:!1,description:"Whether to show an arrow pointing to the trigger element."},{name:"children",type:"ReactNode",required:!0,description:"The trigger element that activates the tooltip on hover/focus."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the tooltip is disabled and will not show."},{name:"className",type:"string",required:!1,description:"Additional CSS classes for the tooltip container."},{name:"onOpen",type:"() => void",required:!1,description:"Callback fired when tooltip opens."},{name:"onClose",type:"() => void",required:!1,description:"Callback fired when tooltip closes."}],examples:[{title:"Basic Tooltip",description:"Simple tooltip with text content on hover.",code:`import { Tooltip } from '@ux4g/react-core';
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
}`,preview:e.jsx(t,{content:"This is helpful information",children:e.jsxs("button",{className:"inline-flex items-center gap-2 px-4 py-2 text-[#005196] border border-[#005196] rounded hover:bg-[#f5f5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:[e.jsx(s,{size:16}),"Hover me"]})})},{title:"Different Placements",description:"Tooltips can be positioned on all four sides of the trigger element.",code:`import { Tooltip } from '@ux4g/react-core';

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
}`,preview:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{content:"Top tooltip",placement:"top",children:e.jsx("button",{className:"px-4 py-2 text-white bg-[#005196] rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:"Top"})}),e.jsx(t,{content:"Right tooltip",placement:"right",children:e.jsx("button",{className:"px-4 py-2 text-white bg-[#005196] rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:"Right"})}),e.jsx(t,{content:"Bottom tooltip",placement:"bottom",children:e.jsx("button",{className:"px-4 py-2 text-white bg-[#005196] rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:"Bottom"})}),e.jsx(t,{content:"Left tooltip",placement:"left",children:e.jsx("button",{className:"px-4 py-2 text-white bg-[#005196] rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:"Left"})})]})},{title:"With Arrow",description:"Tooltips can display an arrow pointing to the trigger element for better visual connection.",code:`import { Tooltip } from '@ux4g/react-core';
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
}`,preview:e.jsxs("div",{className:"flex gap-8",children:[e.jsx(t,{content:"Arrow pointing down",placement:"top",arrow:!0,children:e.jsxs("button",{className:"inline-flex items-center gap-2 px-4 py-2 text-[#005196] border border-[#005196] rounded hover:bg-[#f5f5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:[e.jsx(m,{size:16}),"Help"]})}),e.jsx(t,{content:"Arrow pointing left",placement:"right",arrow:!0,children:e.jsxs("button",{className:"inline-flex items-center gap-2 px-4 py-2 text-[#005196] border border-[#005196] rounded hover:bg-[#f5f5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:[e.jsx(f,{size:16}),"Settings"]})})]})},{title:"Rich Content Tooltip",description:"Tooltips can contain formatted text, icons, and other React elements.",code:`import { Tooltip } from '@ux4g/react-core';
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
}`,preview:e.jsx(t,{content:e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"font-semibold",children:"System Status"}),e.jsx("div",{className:"text-xs text-gray-300",children:"All services operational"})]}),placement:"right",arrow:!0,children:e.jsxs("button",{className:"inline-flex items-center gap-2 px-4 py-2 text-[#005196] border border-[#005196] rounded hover:bg-[#f5f5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:[e.jsx(s,{size:16}),"Status"]})})},{title:"Disabled State",description:"Tooltips can be disabled to prevent them from showing.",code:`import { Tooltip } from '@ux4g/react-core';

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
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-sm text-gray-600",children:"(Tooltip always enabled in preview)"}),e.jsx(t,{content:"This tooltip can be toggled",children:e.jsx("button",{className:"px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",children:"Hover me"})})]})}],reactCode:{component:`import React, { useState, useRef, useEffect } from 'react';
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
};`,types:`export interface TooltipProps {
  content: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  arrow?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

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
);`,hooks:`import { RefObject, useEffect, useState } from 'react';

export function useHover<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
): boolean {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);

  return isHovered;
}`},angularCode:{component:`import {
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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [TooltipComponent, TooltipDirective],
  imports: [CommonModule],
  exports: [TooltipComponent, TooltipDirective]
})
export class TooltipModule { }`,types:`export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipConfig {
  content: string;
  placement?: TooltipPlacement;
  delay?: number;
  arrow?: boolean;
  disabled?: boolean;
}`,directive:`import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[ux4gTooltip]'
})
export class TooltipDirective implements OnDestroy {
  @Input('ux4gTooltip') tooltipContent: string = '';
  @Input() tooltipPlacement: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() tooltipDelay: number = 0;

  private tooltipElement?: HTMLElement;
  private showTimeout?: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.tooltipDelay > 0) {
      this.showTimeout = setTimeout(() => {
        this.show();
      }, this.tooltipDelay);
    } else {
      this.show();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
    this.hide();
  }

  @HostListener('focusin')
  onFocus(): void {
    this.show();
  }

  @HostListener('focusout')
  onBlur(): void {
    this.hide();
  }

  private show(): void {
    if (!this.tooltipContent) return;

    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'ux4g-tooltip');
    this.renderer.addClass(this.tooltipElement, \`ux4g-tooltip-\${this.tooltipPlacement}\`);
    this.renderer.setAttribute(this.tooltipElement, 'role', 'tooltip');

    const text = this.renderer.createText(this.tooltipContent);
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(document.body, this.tooltipElement);

    this.positionTooltip();
  }

  private hide(): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = undefined;
    }
  }

  private positionTooltip(): void {
    if (!this.tooltipElement) return;

    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (this.tooltipPlacement) {
      case 'top':
        top = hostPos.top - tooltipPos.height - 8;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      case 'bottom':
        top = hostPos.bottom + 8;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      case 'left':
        top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.left - tooltipPos.width - 8;
        break;
      case 'right':
        top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.right + 8;
        break;
    }

    this.renderer.setStyle(this.tooltipElement, 'top', \`\${top}px\`);
    this.renderer.setStyle(this.tooltipElement, 'left', \`\${left}px\`);
  }

  ngOnDestroy(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
    this.hide();
  }
}`},comparisons:[{system:"Radix UI",component:"Tooltip",variants:"Custom (unstyled primitive)",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://www.radix-ui.com/primitives/docs/components/tooltip"},{system:"Chakra UI",component:"Tooltip",variants:"Placement-based positioning",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/tooltip"},{system:"Material UI (Google)",component:"Tooltip",variants:"Standard, Arrow variants",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-tooltip/"},{system:"Ant Design (Alibaba)",component:"Tooltip",variants:"Multiple placements, colors",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/tooltip"},{system:"GOV.UK Design System",component:"Details (disclosure)",variants:"Progressive disclosure pattern",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/details/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['role="tooltip" for proper semantic identification',"aria-describedby linking trigger to tooltip content","Keyboard accessible - shows on focus, hides on blur","Mouse accessible - shows on hover, hides on mouse leave","Sufficient color contrast (white text on dark background)","Dismissible with Escape key","Does not obscure critical interface elements","Content remains accessible when tooltip is hidden","No time limits for reading tooltip content","Touch device support with tap to show/hide"],keyboardSupport:[{key:"Tab",action:"Focus trigger element and show tooltip"},{key:"Shift + Tab",action:"Move focus away and hide tooltip"},{key:"Escape",action:"Hide tooltip while maintaining focus on trigger"}],screenReader:["Tooltip content announced when trigger receives focus","aria-describedby associates tooltip with trigger element",'role="tooltip" indicates supplementary information',"Tooltip does not trap focus or interrupt navigation","Content is readable when tooltip is not visible"]},tokens:{file:"/tokens/components/tooltip.json",mappings:[{property:"Background Color",token:"tooltip.background",value:"#1f2937 (Gray 800)"},{property:"Text Color",token:"tooltip.text",value:"#ffffff (White)"},{property:"Font Size",token:"tooltip.fontSize",value:"14px"},{property:"Padding Horizontal",token:"tooltip.padding.horizontal",value:"12px"},{property:"Padding Vertical",token:"tooltip.padding.vertical",value:"8px"},{property:"Border Radius",token:"tooltip.borderRadius",value:"4px"},{property:"Box Shadow",token:"tooltip.shadow",value:"0 4px 6px rgba(0, 0, 0, 0.1)"},{property:"Z-Index",token:"tooltip.zIndex",value:"50"},{property:"Arrow Size",token:"tooltip.arrow.size",value:"4px"},{property:"Default Delay",token:"tooltip.delay.default",value:"0ms"},{property:"Offset Distance",token:"tooltip.offset",value:"8px"}]}})}export{C as default};
