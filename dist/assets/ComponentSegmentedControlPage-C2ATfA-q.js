import{r as o,j as e,f as z,o as k}from"./index-wYwTiNL-.js";import{C as W}from"./ComponentDocumentation-DKnXH-Pi.js";import{L as j}from"./list-8N-0hnNk.js";import{C as g}from"./calendar-DaYsoLdY.js";import{F as f}from"./funnel-DxFiODjL.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const n=({options:l,value:v,onChange:u,size:s="md",variant:c="default",fullWidth:p=!1,orientation:m="horizontal",disabled:d=!1,iconOnly:i=!1,...h})=>{const[a,b]=o.useState(l.findIndex(t=>t.value===v)),y=t=>{d||(b(t),u&&u(l[t].value))},R=["relative inline-flex rounded-lg p-1 transition-all",c==="primary"?"bg-[#005196]/10 border border-[#005196]/20":"bg-gray-100 border border-gray-200",p?"w-full":"",m==="vertical"?"flex-col":"flex-row",d?"opacity-50 cursor-not-allowed":""].filter(Boolean).join(" "),A="relative z-10 font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]",I=t=>[A,s==="sm"?i?"h-7 w-7":"h-7 px-3 text-sm":s==="lg"?i?"h-11 w-11":"h-11 px-5 text-lg":i?"h-9 w-9":"h-9 px-4 text-base",t===a?c==="primary"?"text-white":"text-[#005196]":c==="primary"?"text-[#005196] hover:text-[#004178]":"text-gray-600 hover:text-gray-900","rounded-md",p?"flex-1":"",i?"flex items-center justify-center":"inline-flex items-center justify-center gap-2",d?"cursor-not-allowed":"cursor-pointer"].filter(Boolean).join(" "),V="absolute z-0 rounded-md shadow-sm transition-all duration-200 ease-out",O=c==="primary"?"bg-[#005196]":"bg-white",G=()=>{if(m==="vertical"){const t=s==="sm"?28:s==="lg"?44:36;return{top:a*(t+0)+4+"px",left:"4px",right:"4px",height:t+"px"}}else{const t=document.getElementById("seg-btn-"+a);if(t){const C=t.parentElement;if(C){const M=C.getBoundingClientRect(),w=t.getBoundingClientRect();return{left:w.left-M.left+"px",width:w.width+"px",top:"4px",bottom:"4px"}}}const x=100/l.length;return{left:a*x+"%",width:x+"%",top:"4px",bottom:"4px"}}};return e.jsxs("div",{className:R,role:"radiogroup",...h,children:[e.jsx("div",{className:O+" "+V,style:G()}),l.map((t,r)=>e.jsxs("button",{id:"seg-btn-"+r,type:"button",role:"radio","aria-checked":r===a,className:I(r),onClick:()=>y(r),disabled:d,children:[t.icon&&e.jsx("span",{className:"inline-flex shrink-0","aria-hidden":"true",children:t.icon}),!i&&e.jsx("span",{children:t.label})]},t.value))]})};function q(){const[l,v]=o.useState("tab1"),[u,s]=o.useState("list"),[c,p]=o.useState("week"),[m,d]=o.useState("all"),[i,h]=o.useState("en"),[a,b]=o.useState("individual"),[y,S]=o.useState("grid");return e.jsx(W,{name:"Segmented Control",description:"Modern alternative to radio buttons for mutually exclusive options. Button group pattern that provides clear visual feedback and smooth transitions between options, commonly used in government services for filters, view modes, and toggles.",category:"Form Elements",maturity:"beta",tier:"core",since:"v1.2.0",updated:"v2.1.0",props:[{name:"options",type:"Array<{value: string; label: string; icon?: ReactNode}>",required:!0,description:"Array of options to display. Each option must have a value and label. Icons are optional."},{name:"value",type:"string",required:!0,description:"Currently selected value. Should match one of the option values."},{name:"onChange",type:"(value: string) => void",required:!0,description:"Callback fired when selection changes. Receives the new value."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the segmented control. Small (28px), Medium (36px), Large (44px)."},{name:"variant",type:"'default' | 'primary'",default:"'default'",required:!1,description:"Visual variant. Default uses neutral gray, primary uses brand colors."},{name:"fullWidth",type:"boolean",default:"false",required:!1,description:"Whether the control should take full width with evenly distributed options."},{name:"orientation",type:"'horizontal' | 'vertical'",default:"'horizontal'",required:!1,description:"Layout orientation. Horizontal for inline, vertical for stacked options."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the control is disabled. Prevents interaction and applies disabled styling."},{name:"iconOnly",type:"boolean",default:"false",required:!1,description:"Display only icons without labels. Requires all options to have icons."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to the container."},{name:"aria-label",type:"string",required:!1,description:"Accessible label for the radiogroup. Required when no visible label exists."}],examples:[{title:"Basic Segmented Control",description:"Simple segmented control with three options for tab navigation.",code:`import { SegmentedControl } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState('tab1');

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      options={[
        { value: 'tab1', label: 'Overview' },
        { value: 'tab2', label: 'Details' },
        { value: 'tab3', label: 'History' },
      ]}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{value:l,onChange:v,options:[{value:"tab1",label:"Overview"},{value:"tab2",label:"Details"},{value:"tab3",label:"History"}]})})},{title:"With Icons",description:"Segmented control with icons alongside labels for better visual recognition.",code:`import { SegmentedControl } from '@ux4g/react-core';
import { List, Grid } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [viewMode, setViewMode] = useState('list');

  return (
    <SegmentedControl
      value={viewMode}
      onChange={setViewMode}
      options={[
        { value: 'list', label: 'List View', icon: <List size={16} /> },
        { value: 'grid', label: 'Grid View', icon: <Grid size={16} /> },
      ]}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{value:u,onChange:s,options:[{value:"list",label:"List View",icon:e.jsx(j,{size:16})},{value:"grid",label:"Grid View",icon:e.jsx(z,{size:16})}]})})},{title:"Icon Only",description:"Compact view mode switcher showing only icons for space efficiency.",code:`import { SegmentedControl } from '@ux4g/react-core';
import { List, Grid } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <SegmentedControl
      value={viewMode}
      onChange={setViewMode}
      iconOnly
      aria-label="View mode"
      options={[
        { value: 'list', label: 'List', icon: <List size={16} /> },
        { value: 'grid', label: 'Grid', icon: <Grid size={16} /> },
      ]}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{value:y,onChange:S,iconOnly:!0,"aria-label":"View mode",options:[{value:"list",label:"List",icon:e.jsx(j,{size:16})},{value:"grid",label:"Grid",icon:e.jsx(z,{size:16})}]})})},{title:"Time Period Selector",description:"Data filtering control for selecting time ranges in analytics dashboards.",code:`import { SegmentedControl } from '@ux4g/react-core';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [period, setPeriod] = useState('week');

  return (
    <SegmentedControl
      value={period}
      onChange={setPeriod}
      variant="primary"
      options={[
        { value: 'day', label: 'Day', icon: <Calendar size={14} /> },
        { value: 'week', label: 'Week', icon: <Calendar size={14} /> },
        { value: 'month', label: 'Month', icon: <Calendar size={14} /> },
        { value: 'year', label: 'Year', icon: <Calendar size={14} /> },
      ]}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{value:c,onChange:p,variant:"primary",options:[{value:"day",label:"Day",icon:e.jsx(g,{size:14})},{value:"week",label:"Week",icon:e.jsx(g,{size:14})},{value:"month",label:"Month",icon:e.jsx(g,{size:14})},{value:"year",label:"Year",icon:e.jsx(g,{size:14})}]})})},{title:"Filter Tabs",description:"Application status filter with full width layout for form sections.",code:`import { SegmentedControl } from '@ux4g/react-core';
import { Filter } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="max-w-xl">
      <SegmentedControl
        value={filter}
        onChange={setFilter}
        fullWidth
        options={[
          { value: 'all', label: 'All', icon: <Filter size={14} /> },
          { value: 'pending', label: 'Pending', icon: <Filter size={14} /> },
          { value: 'approved', label: 'Approved', icon: <Filter size={14} /> },
          { value: 'rejected', label: 'Rejected', icon: <Filter size={14} /> },
        ]}
      />
    </div>
  );
}`,preview:e.jsx("div",{className:"w-full max-w-xl",children:e.jsx(n,{value:m,onChange:d,fullWidth:!0,options:[{value:"all",label:"All",icon:e.jsx(f,{size:14})},{value:"pending",label:"Pending",icon:e.jsx(f,{size:14})},{value:"approved",label:"Approved",icon:e.jsx(f,{size:14})},{value:"rejected",label:"Rejected",icon:e.jsx(f,{size:14})}]})})},{title:"Language Toggle",description:"Bilingual language selector for government services supporting multiple languages.",code:`import { SegmentedControl } from '@ux4g/react-core';
import { Globe } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [lang, setLang] = useState('en');

  return (
    <SegmentedControl
      value={lang}
      onChange={setLang}
      size="sm"
      options={[
        { value: 'en', label: 'English', icon: <Globe size={12} /> },
        { value: 'fr', label: 'Français', icon: <Globe size={12} /> },
      ]}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{value:i,onChange:h,size:"sm",options:[{value:"en",label:"English",icon:e.jsx(k,{size:12})},{value:"fr",label:"Français",icon:e.jsx(k,{size:12})}]})})},{title:"Form Type Selector",description:"Application form type selection with large size for prominent placement.",code:`import { SegmentedControl } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [formType, setFormType] = useState('individual');

  return (
    <div className="max-w-md">
      <SegmentedControl
        value={formType}
        onChange={setFormType}
        size="lg"
        fullWidth
        variant="primary"
        options={[
          { value: 'individual', label: 'Individual' },
          { value: 'business', label: 'Business' },
        ]}
      />
    </div>
  );
}`,preview:e.jsx("div",{className:"w-full max-w-md",children:e.jsx(n,{value:a,onChange:b,size:"lg",fullWidth:!0,variant:"primary",options:[{value:"individual",label:"Individual"},{value:"business",label:"Business"}]})})},{title:"Sizes",description:"Three size variants: small (28px), medium (36px), and large (44px).",code:`import { SegmentedControl } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [sm, setSm] = useState('opt1');
  const [md, setMd] = useState('opt1');
  const [lg, setLg] = useState('opt1');

  const options = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
  ];

  return (
    <div className="flex flex-col gap-4">
      <SegmentedControl value={sm} onChange={setSm} size="sm" options={options} />
      <SegmentedControl value={md} onChange={setMd} size="md" options={options} />
      <SegmentedControl value={lg} onChange={setLg} size="lg" options={options} />
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(n,{value:"opt1",onChange:()=>{},size:"sm",options:[{value:"opt1",label:"Small"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"}]}),e.jsx(n,{value:"opt1",onChange:()=>{},size:"md",options:[{value:"opt1",label:"Medium"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"}]}),e.jsx(n,{value:"opt1",onChange:()=>{},size:"lg",options:[{value:"opt1",label:"Large"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"}]})]})},{title:"Vertical Orientation",description:"Stacked layout for sidebar navigation or narrow containers.",code:`import { SegmentedControl } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState('settings');

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      orientation="vertical"
      options={[
        { value: 'profile', label: 'Profile' },
        { value: 'settings', label: 'Settings' },
        { value: 'notifications', label: 'Notifications' },
        { value: 'security', label: 'Security' },
      ]}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{value:"settings",onChange:()=>{},orientation:"vertical",options:[{value:"profile",label:"Profile"},{value:"settings",label:"Settings"},{value:"notifications",label:"Notifications"},{value:"security",label:"Security"}]})})}],reactCode:{component:`import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { segmentedControlVariants } from './segmented-control.variants';
import { SegmentedControlProps } from './SegmentedControl.types';

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      options,
      value,
      onChange,
      size = 'md',
      variant = 'default',
      fullWidth = false,
      orientation = 'horizontal',
      disabled = false,
      iconOnly = false,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
    const selectedIndex = options.findIndex((opt) => opt.value === value);

    useEffect(() => {
      updateIndicatorPosition();
    }, [selectedIndex, orientation, size]);

    const updateIndicatorPosition = () => {
      if (!containerRef.current) return;

      const buttons = containerRef.current.querySelectorAll('button');
      const selectedButton = buttons[selectedIndex];

      if (!selectedButton) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = selectedButton.getBoundingClientRect();

      if (orientation === 'vertical') {
        setIndicatorStyle({
          top: buttonRect.top - containerRect.top + 'px',
          height: buttonRect.height + 'px',
          left: '4px',
          right: '4px',
        });
      } else {
        setIndicatorStyle({
          left: buttonRect.left - containerRect.left + 'px',
          width: buttonRect.width + 'px',
          top: '4px',
          bottom: '4px',
        });
      }
    };

    const handleChange = (optionValue: string) => {
      if (disabled) return;
      onChange(optionValue);
    };

    return (
      <div
        ref={containerRef}
        role="radiogroup"
        aria-label={ariaLabel}
        className={cn(
          segmentedControlVariants({ variant, orientation, fullWidth, disabled }),
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'absolute z-0 rounded-md shadow-sm transition-all duration-200 ease-out',
            variant === 'primary' ? 'bg-[#005196]' : 'bg-white'
          )}
          style={indicatorStyle}
          aria-hidden="true"
        />
        {options.map((option) => {
          const isSelected = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={disabled}
              className={cn(
                'relative z-10 font-medium transition-all',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]',
                'rounded-md',
                size === 'sm' ? (iconOnly ? 'h-7 w-7' : 'h-7 px-3 text-sm') :
                size === 'lg' ? (iconOnly ? 'h-11 w-11' : 'h-11 px-5 text-lg') :
                (iconOnly ? 'h-9 w-9' : 'h-9 px-4 text-base'),
                iconOnly ? 'flex items-center justify-center' : 'inline-flex items-center justify-center gap-2',
                isSelected
                  ? (variant === 'primary' ? 'text-white' : 'text-[#005196]')
                  : (variant === 'primary' ? 'text-[#005196] hover:text-[#004178]' : 'text-gray-600 hover:text-gray-900'),
                fullWidth && 'flex-1',
                disabled ? 'cursor-not-allowed' : 'cursor-pointer'
              )}
              onClick={() => handleChange(option.value)}
            >
              {option.icon && (
                <span className="inline-flex shrink-0" aria-hidden="true">
                  {option.icon}
                </span>
              )}
              {!iconOnly && <span>{option.label}</span>}
            </button>
          );
        })}
      </div>
    );
  }
);

SegmentedControl.displayName = 'SegmentedControl';`,types:`export interface SegmentedControlOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
          SegmentedControlVariantProps {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  iconOnly?: boolean;
  disabled?: boolean;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const segmentedControlVariants = cva(
  [
    'relative inline-flex rounded-lg p-1',
    'transition-all',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-gray-100 border border-gray-200',
        ],
        primary: [
          'bg-[#005196]/10 border border-[#005196]/20',
        ],
      },
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'horizontal',
      fullWidth: false,
      disabled: false,
    },
  }
);

export type SegmentedControlVariantProps = VariantProps<typeof segmentedControlVariants>;`},angularCode:{component:`import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

interface SegmentedControlOption {
  value: string;
  label: string;
  icon?: string;
}

type SegmentedControlVariant = 'default' | 'primary';
type SegmentedControlSize = 'sm' | 'md' | 'lg';
type SegmentedControlOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'ux4g-segmented-control',
  template: \`
    <div
      #container
      role="radiogroup"
      [attr.aria-label]="ariaLabel"
      [class]="getContainerClasses()"
    >
      <div
        class="indicator"
        [ngStyle]="indicatorStyle"
        [class.primary]="variant === 'primary'"
        aria-hidden="true"
      ></div>
      <button
        *ngFor="let option of options; let i = index"
        type="button"
        role="radio"
        [attr.aria-checked]="option.value === value"
        [disabled]="disabled"
        [class]="getButtonClasses(option)"
        (click)="handleChange(option.value)"
      >
        <span *ngIf="option.icon" class="icon" aria-hidden="true">
          <i [class]="option.icon"></i>
        </span>
        <span *ngIf="!iconOnly">{{ option.label }}</span>
      </button>
    </div>
  \`,
  styleUrls: ['./segmented-control.component.css']
})
export class SegmentedControlComponent implements AfterViewInit {
  @Input() options: SegmentedControlOption[] = [];
  @Input() value = '';
  @Input() variant: SegmentedControlVariant = 'default';
  @Input() size: SegmentedControlSize = 'md';
  @Input() orientation: SegmentedControlOrientation = 'horizontal';
  @Input() fullWidth = false;
  @Input() iconOnly = false;
  @Input() disabled = false;
  @Input() ariaLabel?: string;
  
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('container') containerRef!: ElementRef;

  indicatorStyle: any = {};

  ngAfterViewInit(): void {
    setTimeout(() => this.updateIndicatorPosition(), 0);
  }

  getContainerClasses(): string {
    const classes = ['ux4g-segmented-control'];
    classes.push('variant-' + this.variant + '');
    classes.push('orientation-' + this.orientation + '');
    if (this.fullWidth) classes.push('full-width');
    if (this.disabled) classes.push('disabled');
    return classes.join(' ');
  }

  getButtonClasses(option: SegmentedControlOption): string {
    const classes = ['ux4g-seg-button'];
    classes.push('size-' + this.size + '');
    if (option.value === this.value) classes.push('selected');
    if (this.iconOnly) classes.push('icon-only');
    if (this.fullWidth) classes.push('flex-1');
    return classes.join(' ');
  }

  handleChange(value: string): void {
    if (!this.disabled) {
      this.value = value;
      this.valueChange.emit(value);
      setTimeout(() => this.updateIndicatorPosition(), 0);
    }
  }

  updateIndicatorPosition(): void {
    const container = this.containerRef.nativeElement;
    const buttons = container.querySelectorAll('button');
    const selectedIndex = this.options.findIndex(opt => opt.value === this.value);
    const selectedButton = buttons[selectedIndex];

    if (!selectedButton) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = selectedButton.getBoundingClientRect();

    if (this.orientation === 'vertical') {
      this.indicatorStyle = {
        top: (buttonRect.top - containerRect.top) + 'px',
        height: buttonRect.height + 'px',
        left: '4px',
        right: '4px',
      };
    } else {
      this.indicatorStyle = {
        left: (buttonRect.left - containerRect.left) + 'px',
        width: buttonRect.width + 'px',
        top: '4px',
        bottom: '4px',
      };
    }
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentedControlComponent } from './segmented-control.component';

@NgModule({
  declarations: [SegmentedControlComponent],
  imports: [CommonModule],
  exports: [SegmentedControlComponent]
})
export class SegmentedControlModule { }`,types:`export interface SegmentedControlOption {
  value: string;
  label: string;
  icon?: string;
}

export type SegmentedControlVariant = 'default' | 'primary';
export type SegmentedControlSize = 'sm' | 'md' | 'lg';
export type SegmentedControlOrientation = 'horizontal' | 'vertical';`},comparisons:[{system:"Material UI (Google)",component:"ToggleButtonGroup",variants:"default, exclusive, multiple",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-toggle-button/"},{system:"Ant Design (Alibaba)",component:"Segmented",variants:"default, block, disabled",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/segmented"},{system:"Chakra UI",component:"RadioGroup (styled as SegmentedControl)",variants:"custom variants",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/radio"},{system:"Radix UI",component:"RadioGroup (unstyled primitive)",variants:"Custom (unstyled)",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://www.radix-ui.com/primitives/docs/components/radio-group"},{system:"iOS Human Interface",component:"Segmented Control",variants:"default, bordered",accessibility:"Platform standards",documentation:"Comprehensive",link:"https://developer.apple.com/design/human-interface-guidelines/segmented-controls"},{system:"Carbon Design (IBM)",component:"ContentSwitcher",variants:"default, icon",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://carbondesignsystem.com/components/content-switcher/usage/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['Uses role="radiogroup" for semantic structure (WCAG 4.1.2)','Each option uses role="radio" with aria-checked state (WCAG 4.1.2)',"Keyboard navigation with Arrow keys for sequential selection (WCAG 2.1.1)","Tab key moves focus to and from the control group (WCAG 2.1.1)","Minimum 44px touch target size for mobile accessibility (WCAG 2.5.5)","2px focus ring with offset for keyboard navigation visibility (WCAG 2.4.7)","Color contrast ratios meet 4.5:1 for text and 3:1 for UI components (WCAG 1.4.3, 1.4.11)","Icons properly hidden from screen readers with aria-hidden (WCAG 4.1.2)","Required aria-label when no visible label exists (WCAG 4.1.2)","Disabled state prevents interaction and is announced to assistive technologies"],keyboardSupport:[{key:"Tab",action:"Move focus to the control group or away from it"},{key:"Right Arrow",action:"Select next option (horizontal orientation)"},{key:"Left Arrow",action:"Select previous option (horizontal orientation)"},{key:"Down Arrow",action:"Select next option (vertical orientation)"},{key:"Up Arrow",action:"Select previous option (vertical orientation)"},{key:"Space",action:"Select the focused option"},{key:"Enter",action:"Select the focused option"}],screenReader:["Announces radiogroup role with accessible label","Announces each option as radio button with checked state","Announces disabled state when applicable",'Icons are hidden from screen reader (aria-hidden="true")','Announces position in set (e.g., "1 of 3")']},tokens:{file:"/tokens/components/segmented-control.json",mappings:[{property:"Height (Medium)",token:"base.height.md",value:"36px"},{property:"Padding Horizontal (Medium)",token:"base.padding.horizontal.md",value:"16px"},{property:"Container Padding",token:"base.padding.container",value:"4px"},{property:"Border Radius",token:"base.borderRadius",value:"8px"},{property:"Button Border Radius",token:"base.borderRadius.button",value:"6px"},{property:"Font Size (Medium)",token:"base.fontSize.md",value:"16px"},{property:"Default Background",token:"variant.default.background.container",value:"#f5f5f5 (Gray 100)"},{property:"Default Indicator",token:"variant.default.background.indicator",value:"#ffffff (White)"},{property:"Primary Background",token:"variant.primary.background.container",value:"rgba(0, 81, 150, 0.1)"},{property:"Primary Indicator",token:"variant.primary.background.indicator",value:"#005196 (Navy 500)"},{property:"Transition Duration",token:"animation.duration.normal",value:"200ms"},{property:"Transition Easing",token:"animation.easing.easeOut",value:"ease-out"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"}]},useCases:[{title:"View Mode Switcher",description:"Toggle between list and grid views in document libraries or search results.",example:"Applications list displaying between table view and card view for easier scanning."},{title:"Time Period Filter",description:"Select date ranges for analytics dashboards and reporting interfaces.",example:"Government service analytics showing data by day, week, month, quarter, or year."},{title:"Application Status Filter",description:"Filter applications by status (all, pending, approved, rejected) in admin dashboards.",example:"Case management system showing different application states for processing officers."},{title:"Language Selector",description:"Switch between supported languages in bilingual or multilingual government services.",example:"Federal service portal offering English and French language options prominently."},{title:"Document Type Selector",description:"Choose document category when uploading or searching government documents.",example:"Upload interface selecting between passport, driver license, birth certificate, or other ID."},{title:"Service Category Navigation",description:"Navigate between service categories on government portals.",example:"Main service portal switching between benefits, taxes, healthcare, and immigration sections."},{title:"Payment Method Selection",description:"Choose payment method for government fees and services.",example:"Payment page selecting between credit card, debit card, or bank transfer options."},{title:"Form Type Toggle",description:"Switch between individual and business application forms.",example:"Tax filing portal toggling between personal and corporate tax return forms."}]})}export{q as default};
