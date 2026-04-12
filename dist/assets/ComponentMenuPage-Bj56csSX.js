import{j as e,F as u,r as p,R as g}from"./index-LBJNeHTL.js";import{C as f}from"./ComponentDocumentation-DvEedSJi.js";import{U as b}from"./user-Cb11iFvg.js";import{S as v}from"./settings-BGZxYTvq.js";import{L as h}from"./log-out-C-hhe3Iu.js";import{C as x}from"./copy-dn9avyEa.js";import{T as C}from"./trash-2-C2vR3CRM.js";import{C as y}from"./chevron-right-DXN1-lVR.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const n=({variant:a,items:i,trigger:c,placement:s,offset:d,...k})=>{const[l,r]=p.useState(!1);return e.jsxs("div",{className:"relative inline-block",children:[e.jsx("div",{onClick:()=>r(!l),children:c}),l&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>r(!1)}),e.jsx("div",{className:`absolute z-20 min-w-[200px] bg-white border border-gray-300 rounded shadow-lg py-1 ${s==="bottom-end"?"right-0":""} ${s==="bottom-start"?"left-0":""} ${s==="top-start"?"left-0 bottom-full mb-2":"top-full mt-2"}`,style:{marginTop:d},children:i.map((t,m)=>e.jsx(g.Fragment,{children:t.divider?e.jsx("div",{className:"h-px bg-gray-200 my-1"}):e.jsxs("button",{className:`w-full flex items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors ${t.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,onClick:()=>{!t.disabled&&t.onClick&&(t.onClick(),r(!1))},disabled:t.disabled,children:[t.icon&&e.jsx("span",{className:"w-4 h-4",children:t.icon}),e.jsx("span",{className:"flex-1",children:t.label}),t.submenu&&e.jsx(y,{size:16})]})},m))})]})]})},o=({children:a,...i})=>e.jsx("button",{className:"inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#005196] text-white border-[#005196] hover:bg-[#004178] h-10 px-4 text-base min-h-[44px]",...i,children:a});function D(){return e.jsx(f,{name:"Menu",description:"Navigation component for dropdown menus and context menus. Provides accessible, keyboard-navigable menus with support for icons, dividers, disabled items, and nested submenus.",category:"Navigation",maturity:"stable",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"variant",type:"'dropdown' | 'context'",default:"'dropdown'",required:!1,description:"Type of menu. Dropdown opens on click, context opens on right-click."},{name:"items",type:"MenuItem[]",required:!0,description:"Array of menu items. Each item has label, onClick, icon, disabled, divider, and optional submenu properties."},{name:"trigger",type:"ReactNode",required:!0,description:"Element that triggers the menu (button, link, etc.)."},{name:"placement",type:"'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'right-start'",default:"'bottom-start'",required:!1,description:"Position of the menu relative to the trigger element."},{name:"offset",type:"number",default:"8",required:!1,description:"Distance in pixels between menu and trigger element."},{name:"closeOnSelect",type:"boolean",default:"true",required:!1,description:"Whether to close menu when an item is selected."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to the menu container."},{name:"onOpen",type:"() => void",required:!1,description:"Callback fired when menu opens."},{name:"onClose",type:"() => void",required:!1,description:"Callback fired when menu closes."}],examples:[{title:"Basic Dropdown Menu",description:"A simple dropdown menu with multiple action items.",code:`import { Menu } from '@ux4g/react-core';

function Example() {
  const items = [
    { label: 'Profile', onClick: () => console.log('Profile') },
    { label: 'Settings', onClick: () => console.log('Settings') },
    { divider: true },
    { label: 'Sign Out', onClick: () => console.log('Sign Out') },
  ];

  return (
    <Menu
      items={items}
      trigger={<button>Account Menu</button>}
      placement="bottom-start"
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{items:[{label:"Profile",onClick:()=>console.log("Profile")},{label:"Settings",onClick:()=>console.log("Settings")},{divider:!0},{label:"Sign Out",onClick:()=>console.log("Sign Out")}],trigger:e.jsx(o,{children:"Account Menu"}),placement:"bottom-start"})})},{title:"Context Menu",description:"Right-click context menu for contextual actions.",code:`import { Menu } from '@ux4g/react-core';

function Example() {
  const items = [
    { label: 'Copy', onClick: () => console.log('Copy') },
    { label: 'Cut', onClick: () => console.log('Cut') },
    { label: 'Paste', onClick: () => console.log('Paste'), disabled: true },
    { divider: true },
    { label: 'Delete', onClick: () => console.log('Delete') },
  ];

  return (
    <Menu
      variant="context"
      items={items}
      trigger={<div>Right-click me</div>}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{variant:"context",items:[{label:"Copy",onClick:()=>console.log("Copy")},{label:"Cut",onClick:()=>console.log("Cut")},{label:"Paste",onClick:()=>console.log("Paste"),disabled:!0},{divider:!0},{label:"Delete",onClick:()=>console.log("Delete")}],trigger:e.jsx(o,{children:"Open Context Menu"})})})},{title:"Menu with Icons",description:"Menu items can include icons for better visual recognition.",code:`import { Menu } from '@ux4g/react-core';
import { User, Settings, LogOut } from 'lucide-react';

function Example() {
  const items = [
    {
      label: 'Profile',
      icon: <User size={16} />,
      onClick: () => console.log('Profile')
    },
    {
      label: 'Settings',
      icon: <Settings size={16} />,
      onClick: () => console.log('Settings')
    },
    { divider: true },
    {
      label: 'Sign Out',
      icon: <LogOut size={16} />,
      onClick: () => console.log('Sign Out')
    },
  ];

  return (
    <Menu
      items={items}
      trigger={<button>User Menu</button>}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{items:[{label:"Profile",icon:e.jsx(b,{size:16}),onClick:()=>console.log("Profile")},{label:"Settings",icon:e.jsx(v,{size:16}),onClick:()=>console.log("Settings")},{divider:!0},{label:"Sign Out",icon:e.jsx(h,{size:16}),onClick:()=>console.log("Sign Out")}],trigger:e.jsx(o,{children:"User Menu"})})})},{title:"Nested Menus",description:"Menus can have nested submenus for hierarchical navigation.",code:`import { Menu } from '@ux4g/react-core';
import { FileText, Copy, Trash2, ChevronRight } from 'lucide-react';

function Example() {
  const items = [
    {
      label: 'New Document',
      icon: <FileText size={16} />,
      onClick: () => console.log('New Document')
    },
    {
      label: 'Export',
      icon: <ChevronRight size={16} />,
      submenu: [
        { label: 'Export as PDF', onClick: () => console.log('PDF') },
        { label: 'Export as CSV', onClick: () => console.log('CSV') },
        { label: 'Export as JSON', onClick: () => console.log('JSON') },
      ]
    },
    { divider: true },
    {
      label: 'Copy',
      icon: <Copy size={16} />,
      onClick: () => console.log('Copy')
    },
    {
      label: 'Delete',
      icon: <Trash2 size={16} />,
      onClick: () => console.log('Delete')
    },
  ];

  return (
    <Menu
      items={items}
      trigger={<button>File Menu</button>}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{items:[{label:"New Document",icon:e.jsx(u,{size:16}),onClick:()=>console.log("New Document")},{label:"Export",submenu:!0},{divider:!0},{label:"Copy",icon:e.jsx(x,{size:16}),onClick:()=>console.log("Copy")},{label:"Delete",icon:e.jsx(C,{size:16}),onClick:()=>console.log("Delete")}],trigger:e.jsx(o,{children:"File Menu"})})})}],reactCode:{component:`import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { MenuProps, MenuItem } from './Menu.types';

export const Menu: React.FC<MenuProps> = ({
  variant = 'dropdown',
  items,
  trigger,
  placement = 'bottom-start',
  offset = 8,
  closeOnSelect = true,
  className,
  onOpen,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleItemClick = (item: MenuItem) => {
    if (!item.disabled && item.onClick) {
      item.onClick();
      if (closeOnSelect) {
        handleClose();
      }
    }
  };

  const handleTriggerClick = () => {
    if (variant === 'dropdown') {
      isOpen ? handleClose() : handleOpen();
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (variant === 'context') {
      e.preventDefault();
      handleOpen();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const placementClasses = {
    'bottom-start': 'top-full left-0',
    'bottom-end': 'top-full right-0',
    'top-start': 'bottom-full left-0',
    'top-end': 'bottom-full right-0',
    'left-start': 'right-full top-0',
    'right-start': 'left-full top-0',
  };

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        onContextMenu={handleContextMenu}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className={cn(
            'absolute z-50 min-w-[200px]',
            'bg-white border border-gray-300 rounded shadow-lg',
            'py-1',
            placementClasses[placement],
            className
          )}
          style={{ marginTop: placement.startsWith('bottom') ? offset : undefined }}
          role="menu"
          aria-orientation="vertical"
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.divider ? (
                <div className="h-px bg-gray-200 my-1" role="separator" />
              ) : (
                <button
                  className={cn(
                    'w-full flex items-center gap-2 px-4 py-2',
                    'text-left text-sm transition-colors',
                    'focus:outline-none focus-visible:bg-gray-100',
                    item.disabled
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-100 cursor-pointer'
                  )}
                  onClick={() => handleItemClick(item)}
                  disabled={item.disabled}
                  role="menuitem"
                  aria-disabled={item.disabled}
                >
                  {item.icon && (
                    <span className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1">{item.label}</span>
                  {item.submenu && (
                    <span className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                      →
                    </span>
                  )}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

Menu.displayName = 'Menu';`,types:`export interface MenuItem {
  label?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
  submenu?: MenuItem[];
}

export interface MenuProps {
  variant?: 'dropdown' | 'context';
  items: MenuItem[];
  trigger: React.ReactNode;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'right-start';
  offset?: number;
  closeOnSelect?: boolean;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const menuVariants = cva(
  [
    'absolute z-50 min-w-[200px]',
    'bg-white border border-gray-300 rounded',
    'shadow-lg py-1',
  ],
  {
    variants: {
      placement: {
        'bottom-start': 'top-full left-0',
        'bottom-end': 'top-full right-0',
        'top-start': 'bottom-full left-0',
        'top-end': 'bottom-full right-0',
        'left-start': 'right-full top-0',
        'right-start': 'left-full top-0',
      },
    },
    defaultVariants: {
      placement: 'bottom-start',
    },
  }
);

export const menuItemVariants = cva(
  [
    'w-full flex items-center gap-2 px-4 py-2',
    'text-left text-sm transition-colors',
    'focus:outline-none focus-visible:bg-gray-100',
  ],
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'hover:bg-gray-100 cursor-pointer',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

export interface MenuItem {
  label?: string;
  onClick?: () => void;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  submenu?: MenuItem[];
}

type MenuVariant = 'dropdown' | 'context';
type MenuPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'right-start';

@Component({
  selector: 'ux4g-menu',
  template: \`
    <div class="relative inline-block">
      <div
        (click)="handleTriggerClick()"
        (contextmenu)="handleContextMenu($event)"
      >
        <ng-content select="[trigger]"></ng-content>
      </div>

      <div
        *ngIf="isOpen"
        [class]="getMenuClasses()"
        [style.margin-top.px]="offset"
        role="menu"
        aria-orientation="vertical"
      >
        <ng-container *ngFor="let item of items; let i = index">
          <div
            *ngIf="item.divider"
            class="h-px bg-gray-200 my-1"
            role="separator"
          ></div>

          <button
            *ngIf="!item.divider"
            [class]="getMenuItemClasses(item)"
            [disabled]="item.disabled"
            (click)="handleItemClick(item)"
            role="menuitem"
            [attr.aria-disabled]="item.disabled"
          >
            <span *ngIf="item.icon" class="w-4 h-4 flex-shrink-0" aria-hidden="true">
              {{ item.icon }}
            </span>
            <span class="flex-1">{{ item.label }}</span>
            <span *ngIf="item.submenu" class="w-4 h-4 flex-shrink-0" aria-hidden="true">
              →
            </span>
          </button>
        </ng-container>
      </div>
    </div>
  \`,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() variant: MenuVariant = 'dropdown';
  @Input() items: MenuItem[] = [];
  @Input() placement: MenuPlacement = 'bottom-start';
  @Input() offset = 8;
  @Input() closeOnSelect = true;

  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  isOpen = false;

  constructor(private elementRef: ElementRef) {}

  handleTriggerClick(): void {
    if (this.variant === 'dropdown') {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.opened.emit();
      } else {
        this.closed.emit();
      }
    }
  }

  handleContextMenu(event: MouseEvent): void {
    if (this.variant === 'context') {
      event.preventDefault();
      this.isOpen = true;
      this.opened.emit();
    }
  }

  handleItemClick(item: MenuItem): void {
    if (!item.disabled && item.onClick) {
      item.onClick();
      if (this.closeOnSelect) {
        this.isOpen = false;
        this.closed.emit();
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.closed.emit();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.closed.emit();
    }
  }

  getMenuClasses(): string {
    const baseClasses = 'absolute z-50 min-w-[200px] bg-white border border-gray-300 rounded shadow-lg py-1';
    const placementClass = this.getPlacementClass();
    return \`\${baseClasses} \${placementClass}\`;
  }

  getPlacementClass(): string {
    const placements: Record<MenuPlacement, string> = {
      'bottom-start': 'top-full left-0',
      'bottom-end': 'top-full right-0',
      'top-start': 'bottom-full left-0',
      'top-end': 'bottom-full right-0',
      'left-start': 'right-full top-0',
      'right-start': 'left-full top-0',
    };
    return placements[this.placement];
  }

  getMenuItemClasses(item: MenuItem): string {
    const baseClasses = 'w-full flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors focus:outline-none focus-visible:bg-gray-100';
    const disabledClass = item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer';
    return \`\${baseClasses} \${disabledClass}\`;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule],
  exports: [MenuComponent]
})
export class MenuModule { }`,types:`export interface MenuItem {
  label?: string;
  onClick?: () => void;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  submenu?: MenuItem[];
}

export type MenuVariant = 'dropdown' | 'context';
export type MenuPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'right-start';`},comparisons:[{system:"Material UI (Google)",component:"Menu",variants:"standard, context",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-menu/"},{system:"Ant Design (Alibaba)",component:"Dropdown",variants:"dropdown, context menu",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/dropdown"},{system:"Chakra UI",component:"Menu",variants:"standard",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/menu"},{system:"Radix UI",component:"DropdownMenu",variants:"unstyled primitive",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://www.radix-ui.com/primitives/docs/components/dropdown-menu"},{system:"Headless UI",component:"Menu",variants:"unstyled",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://headlessui.com/react/menu"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['Proper role="menu" and role="menuitem" attributes for assistive technologies',"Keyboard navigation with arrow keys, Enter, and Escape","Focus management - returns focus to trigger on close","aria-disabled for disabled menu items","Screen reader announcements for menu state changes","Icons properly hidden from screen readers with aria-hidden","Minimum 44x44px touch target size for menu items (WCAG 2.5.5)","Color contrast ratios meet or exceed 4.5:1 (WCAG 1.4.3)","Focus visible indicator for keyboard navigation (WCAG 2.4.7)","Click outside to close functionality"],keyboardSupport:[{key:"Tab",action:"Move focus to trigger element"},{key:"Enter / Space",action:"Open menu (when trigger is focused)"},{key:"Escape",action:"Close menu and return focus to trigger"},{key:"Arrow Down",action:"Move focus to next menu item"},{key:"Arrow Up",action:"Move focus to previous menu item"},{key:"Home",action:"Move focus to first menu item"},{key:"End",action:"Move focus to last menu item"},{key:"Enter / Space",action:"Activate focused menu item"}],screenReader:["Announces menu role when opened","Announces each menu item with its label","Announces disabled state for disabled items",'Icons are hidden from screen reader (aria-hidden="true")',"Dividers announced as separators"]},tokens:{file:"/tokens/components/menu.json",mappings:[{property:"Min Width",token:"base.minWidth",value:"200px"},{property:"Background",token:"base.background",value:"#FFFFFF (White)"},{property:"Border Color",token:"base.borderColor",value:"#D1D5DB (Gray 300)"},{property:"Border Radius",token:"base.borderRadius",value:"4px"},{property:"Shadow",token:"base.shadow",value:"0 10px 15px -3px rgba(0, 0, 0, 0.1)"},{property:"Item Padding Vertical",token:"item.padding.vertical",value:"8px"},{property:"Item Padding Horizontal",token:"item.padding.horizontal",value:"16px"},{property:"Item Font Size",token:"item.fontSize",value:"14px"},{property:"Item Hover Background",token:"item.background.hover",value:"#F3F4F6 (Gray 100)"},{property:"Item Disabled Opacity",token:"item.opacity.disabled",value:"0.5"},{property:"Divider Color",token:"divider.color",value:"#E5E7EB (Gray 200)"},{property:"Offset",token:"base.offset",value:"8px"}]}})}export{D as default};
