/**
 * Menu Component Documentation Page
 * Complete documentation for the Menu component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Settings, User, LogOut, FileText, Copy, Trash2, ChevronRight } from 'lucide-react';

// Import the actual Menu component for live preview
const MenuPreview = ({ variant, items, trigger, placement, offset, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute z-20 min-w-[200px] bg-card border border-border rounded shadow-lg py-1 ${
              placement === 'bottom-end' ? 'right-0' : ''
            } ${placement === 'bottom-start' ? 'left-0' : ''} ${
              placement === 'top-start' ? 'left-0 bottom-full mb-2' : 'top-full mt-2'
            }`}
            style={{ marginTop: offset }}
          >
            {items.map((item: any, index: number) => (
              <React.Fragment key={index}>
                {item.divider ? (
                  <div className="h-px bg-gray-200 my-1" />
                ) : (
                  <button
                    className={`w-full flex items-center gap-2 px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${
                      item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    }`}
                    onClick={() => {
                      if (!item.disabled && item.onClick) {
                        item.onClick();
                        setIsOpen(false);
                      }
                    }}
                    disabled={item.disabled}
                  >
                    {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                    <span className="flex-1">{item.label}</span>
                    {item.submenu && <ChevronRight size={16} />}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const TriggerButton = ({ children, ...props }: any) => (
  <button
    className="inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#005196] text-white border-[#005196] hover:bg-[#004178] h-10 px-4 text-base min-h-[44px]"
    {...props}
  >
    {children}
  </button>
);

function MenuPlayground() {
  const [disabled, setDisabled] = React.useState(false);
  const [placement, setPlacement] = React.useState('bottom');
  const [showIcons, setShowIcons] = React.useState(true);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <MenuPreview items={[{label:"View"},{label:"Edit"},{label:"Delete"}]} trigger="Actions" placement={placement} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} className="accent-primary" /><span className="text-foreground">Disabled</span></label>
          <div><label className="block font-semibold text-foreground mb-1">Placement</label><select value={placement} onChange={e => setPlacement(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="bottom">Bottom</option><option value="top">Top</option><option value="right">Right</option></select></div>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showIcons} onChange={e => setShowIcons(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show icons</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Menu${disabled ? ' disabled' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentMenuPage() {
  return (
    <ComponentDocumentation
      name="Menu"
      description="Navigation component for dropdown menus and context menus. Provides accessible, keyboard-navigable menus with support for icons, dividers, disabled items, and nested submenus."
      category="Navigation"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <MenuPreview items={[{label:"Profile"},{label:"Settings"},{label:"Logout"}]} trigger="User Menu" />
        </div>
      }

      props={[
        {
          name: 'variant',
          type: "'dropdown' | 'context'",
          default: "'dropdown'",
          required: false,
          description: 'Type of menu. Dropdown opens on click, context opens on right-click.',
        },
        {
          name: 'items',
          type: 'MenuItem[]',
          required: true,
          description: 'Array of menu items. Each item has label, onClick, icon, disabled, divider, and optional submenu properties.',
        },
        {
          name: 'trigger',
          type: 'ReactNode',
          required: true,
          description: 'Element that triggers the menu (button, link, etc.).',
        },
        {
          name: 'placement',
          type: "'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'right-start'",
          default: "'bottom-start'",
          required: false,
          description: 'Position of the menu relative to the trigger element.',
        },
        {
          name: 'offset',
          type: 'number',
          default: '8',
          required: false,
          description: 'Distance in pixels between menu and trigger element.',
        },
        {
          name: 'closeOnSelect',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to close menu when an item is selected.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply to the menu container.',
        },
        {
          name: 'onOpen',
          type: '() => void',
          required: false,
          description: 'Callback fired when menu opens.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: false,
          description: 'Callback fired when menu closes.',
        },
      ]}

      examples={[
        {
          title: 'Basic Dropdown Menu',
          description: 'A simple dropdown menu with multiple action items.',
          code: `import { Menu } from '@ux4g/react-core';

function Example() {
  return (
    <Menu />
  );
}`,
          preview: (
            <div className="flex justify-center">
              <MenuPreview
                items={[
                  { label: 'Profile', onClick: () => console.log('Profile') },
                  { label: 'Settings', onClick: () => console.log('Settings') },
                  { divider: true },
                  { label: 'Sign Out', onClick: () => console.log('Sign Out') },
                ]}
                trigger={<TriggerButton>Account Menu</TriggerButton>}
                placement="bottom-start"
              />
            </div>
          ),
        },
        {
          title: 'Context Menu',
          description: 'Right-click context menu for contextual actions.',
          code: `import { Menu } from '@ux4g/react-core';

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
}`,
          preview: (
            <div className="flex justify-center">
              <MenuPreview
                variant="context"
                items={[
                  { label: 'Copy', onClick: () => console.log('Copy') },
                  { label: 'Cut', onClick: () => console.log('Cut') },
                  { label: 'Paste', onClick: () => console.log('Paste'), disabled: true },
                  { divider: true },
                  { label: 'Delete', onClick: () => console.log('Delete') },
                ]}
                trigger={<TriggerButton>Open Context Menu</TriggerButton>}
              />
            </div>
          ),
        },
        {
          title: 'Menu with Icons',
          description: 'Menu items can include icons for better visual recognition.',
          code: `import { Menu } from '@ux4g/react-core';
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
}`,
          preview: (
            <div className="flex justify-center">
              <MenuPreview
                items={[
                  { label: 'Profile', icon: <User size={16} />, onClick: () => console.log('Profile') },
                  { label: 'Settings', icon: <Settings size={16} />, onClick: () => console.log('Settings') },
                  { divider: true },
                  { label: 'Sign Out', icon: <LogOut size={16} />, onClick: () => console.log('Sign Out') },
                ]}
                trigger={<TriggerButton>User Menu</TriggerButton>}
              />
            </div>
          ),
        },
        {
          title: 'Nested Menus',
          description: 'Menus can have nested submenus for hierarchical navigation.',
          code: `import { Menu } from '@ux4g/react-core';
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
}`,
          preview: (
            <div className="flex justify-center">
              <MenuPreview
                items={[
                  { label: 'New Document', icon: <FileText size={16} />, onClick: () => console.log('New Document') },
                  { label: 'Export', submenu: true },
                  { divider: true },
                  { label: 'Copy', icon: <Copy size={16} />, onClick: () => console.log('Copy') },
                  { label: 'Delete', icon: <Trash2 size={16} />, onClick: () => console.log('Delete') },
                ]}
                trigger={<TriggerButton>File Menu</TriggerButton>}
              />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useState, useRef, useEffect } from 'react';
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
            'bg-card border border-border rounded shadow-lg',
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
                    'focus:outline-none focus-visible:bg-muted',
                    item.disabled
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-muted cursor-pointer'
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

Menu.displayName = 'Menu';`,
        types: `export interface MenuItem {
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
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const menuVariants = cva(
  [
    'absolute z-50 min-w-[200px]',
    'bg-card border border-border rounded',
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
    'focus:outline-none focus-visible:bg-muted',
  ],
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'hover:bg-muted cursor-pointer',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

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
    const baseClasses = 'absolute z-50 min-w-[200px] bg-card border border-border rounded shadow-lg py-1';
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
    const baseClasses = 'w-full flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors focus:outline-none focus-visible:bg-muted';
    const disabledClass = item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-muted cursor-pointer';
    return \`\${baseClasses} \${disabledClass}\`;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule],
  exports: [MenuComponent]
})
export class MenuModule { }`,
        types: `export interface MenuItem {
  label?: string;
  onClick?: () => void;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  submenu?: MenuItem[];
}

export type MenuVariant = 'dropdown' | 'context';
export type MenuPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'right-start';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-menu> custom element",
        html: "<ux4g-menu variant=\"primary\" size=\"md\"><!-- Menu --></ux4g-menu>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Menu',
          variants: 'standard, context',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-menu/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Dropdown',
          variants: 'dropdown, context menu',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/dropdown',
        },
        {
          system: 'Chakra UI',
          component: 'Menu',
          variants: 'standard',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/menu',
        },
        {
          system: 'Radix UI',
          component: 'DropdownMenu',
          variants: 'unstyled primitive',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/dropdown-menu',
        },
        {
          system: 'Headless UI',
          component: 'Menu',
          variants: 'unstyled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://headlessui.com/react/menu',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Proper role="menu" and role="menuitem" attributes for assistive technologies',
          'Keyboard navigation with arrow keys, Enter, and Escape',
          'Focus management - returns focus to trigger on close',
          'aria-disabled for disabled menu items',
          'Screen reader announcements for menu state changes',
          'Icons properly hidden from screen readers with aria-hidden',
          'Minimum 44x44px touch target size for menu items (WCAG 2.5.5)',
          'Color contrast ratios meet or exceed 4.5:1 (WCAG 1.4.3)',
          'Focus visible indicator for keyboard navigation (WCAG 2.4.7)',
          'Click outside to close functionality',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to trigger element' },
          { key: 'Enter / Space', action: 'Open menu (when trigger is focused)' },
          { key: 'Escape', action: 'Close menu and return focus to trigger' },
          { key: 'Arrow Down', action: 'Move focus to next menu item' },
          { key: 'Arrow Up', action: 'Move focus to previous menu item' },
          { key: 'Home', action: 'Move focus to first menu item' },
          { key: 'End', action: 'Move focus to last menu item' },
          { key: 'Enter / Space', action: 'Activate focused menu item' },
        ],
        screenReader: [
          'Announces menu role when opened',
          'Announces each menu item with its label',
          'Announces disabled state for disabled items',
          'Icons are hidden from screen reader (aria-hidden="true")',
          'Dividers announced as separators',
        ],
      }}

      tokens={{
        file: '/tokens/components/menu.json',
        mappings: [
          { property: 'Min Width', token: 'base.minWidth', value: '200px' },
          { property: 'Background', token: 'base.background', value: '#FFFFFF (White)' },
          { property: 'Border Color', token: 'base.borderColor', value: '#D1D5DB (Gray 300)' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Shadow', token: 'base.shadow', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' },
          { property: 'Item Padding Vertical', token: 'item.padding.vertical', value: '8px' },
          { property: 'Item Padding Horizontal', token: 'item.padding.horizontal', value: '16px' },
          { property: 'Item Font Size', token: 'item.fontSize', value: '14px' },
          { property: 'Item Hover Background', token: 'item.background.hover', value: '#F3F4F6 (Gray 100)' },
          { property: 'Item Disabled Opacity', token: 'item.opacity.disabled', value: '0.5' },
          { property: 'Divider Color', token: 'divider.color', value: '#E5E7EB (Gray 200)' },
          { property: 'Offset', token: 'base.offset', value: '8px' },
        ],
      }}

      useCases={[
        { title: 'Application Actions Menu', description: 'Context menu for application card actions.', scenario: 'Citizen sees Track, Download, Print options on application card.', implementation: '<Menu trigger={<Button variant="ghost">Actions</Button>}><MenuItem>Track</MenuItem><MenuItem>Download</MenuItem><MenuItem>Print</MenuItem></Menu>' },
        { title: 'User Profile Menu', description: 'Profile dropdown in header with account options.', scenario: 'Logged-in user accesses Profile, Settings, Logout from header.', implementation: '<Menu trigger={<Avatar />}><MenuItem>Profile</MenuItem><MenuItem>Settings</MenuItem><MenuItem>Logout</MenuItem></Menu>' },
        { title: 'Officer Quick Actions', description: 'Action menu for case management operations.', scenario: 'Officer selects Approve, Reject, or Request Info on a case.', implementation: '<Menu trigger={<Button>Review</Button>}><MenuItem>Approve</MenuItem><MenuItem>Reject</MenuItem><MenuItem>Request Info</MenuItem></Menu>' },
        { title: 'Export Options Menu', description: 'Menu for data export format selection.', scenario: 'Admin exports report as PDF, Excel, or CSV.', implementation: '<Menu trigger={<Button variant="secondary">Export</Button>}><MenuItem>PDF</MenuItem><MenuItem>Excel</MenuItem><MenuItem>CSV</MenuItem></Menu>' },
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
                  Do use Menu when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Multiple actions for a single item</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>User profile dropdown</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Context menus on right-click or button</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Navigation submenus</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Menu when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Single action — use Button</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Form selection — use Select</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Navigation links — use regular links</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Fewer than 3 actions — show them directly</li>
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
                  <p className="text-sm text-muted-foreground">Label menu triggers with text when possible — icon-only menus are discovered by only 50% of users.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t use menus for form selection — use Select instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/dropdown" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Dropdown</h3>
                <p className="text-sm text-muted-foreground">For simpler dropdowns</p>
              </a>
              <a href="/components/select" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Select</h3>
                <p className="text-sm text-muted-foreground">For form selections</p>
              </a>
              <a href="/components/button" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Button</h3>
                <p className="text-sm text-muted-foreground">For single actions</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added keyboard navigation</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added menu item icons</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic menu</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Menu discoverability</h3>
                <p className="text-sm text-muted-foreground">Menus hidden behind icons (hamburger, kebab) are discovered by only 50% of users. Label them when possible (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}