import{r as p,j as e,i as r,D as g,F as c}from"./index-LBJNeHTL.js";import{C as S}from"./ComponentDocumentation-DvEedSJi.js";import{U as b}from"./user-Cb11iFvg.js";import{S as I}from"./settings-BGZxYTvq.js";import{L as E}from"./log-out-C-hhe3Iu.js";import{S as O}from"./square-pen-0FINjG1a.js";import{S as A}from"./share-2-BP_sZNF7.js";import{T as h}from"./trash-2-C2vR3CRM.js";import{E as z}from"./ellipsis-vertical-BxgBLasq.js";import{S as j}from"./star-a6Pmhtkc.js";import{A as F}from"./archive-C2qLIVPt.js";import{B as M}from"./bell-BiWsRXPx.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const i=({trigger:f,items:t,size:o="md",placement:s="bottom-end",disabled:x=!1,className:v=""})=>{const[d,m]=p.useState(!1),u=p.useRef(null);p.useEffect(()=>{const n=l=>{u.current&&!u.current.contains(l.target)&&m(!1)},a=l=>{l.key==="Escape"&&m(!1)};return d&&(document.addEventListener("mousedown",n),document.addEventListener("keydown",a)),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("keydown",a)}},[d]);const w=o==="sm"?"text-sm":o==="lg"?"text-base":"text-sm",y=o==="sm"?"min-w-[160px]":o==="lg"?"min-w-[240px]":"min-w-[200px]",C=s==="bottom-start"?"left-0":s==="bottom-end"?"right-0":s==="top-start"?"left-0 bottom-full mb-1":s==="top-end"?"right-0 bottom-full mb-1":"right-0";return e.jsxs("div",{className:"relative inline-block "+v,ref:u,children:[e.jsx("button",{onClick:()=>!x&&m(!d),disabled:x,className:"inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] bg-white text-[#005196] border-[#005196] hover:bg-[#f5f5f5] disabled:opacity-60 disabled:cursor-not-allowed "+(o==="sm"?"h-8 px-3 text-sm":o==="lg"?"h-12 px-6 text-base":"h-10 px-4 text-sm"),"aria-haspopup":"true","aria-expanded":d,children:f}),d&&e.jsx("div",{className:"absolute z-50 mt-1 rounded-md border border-gray-200 bg-white shadow-lg "+y+" "+C,role:"menu",children:e.jsx("div",{className:"py-1 "+w,children:t.map((n,a)=>{if(n.type==="divider")return e.jsx("div",{className:"my-1 h-px bg-gray-200",role:"separator"},a);if(n.type==="header")return e.jsx("div",{className:"px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:n.label},a);const l=n.variant==="danger",k=l?"text-red-700":"text-gray-700",D=l?"hover:bg-red-50 hover:text-red-900":"hover:bg-gray-100 hover:text-gray-900";return e.jsxs("button",{className:"w-full text-left px-3 py-2 transition-colors flex items-center gap-2 "+k+" "+D+" focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",role:"menuitem",disabled:n.disabled,onClick:()=>{!n.disabled&&n.onClick&&n.onClick(),n.closeOnSelect!==!1&&m(!1)},children:[n.icon&&e.jsx("span",{className:"inline-flex shrink-0",children:n.icon}),e.jsx("span",{className:"flex-1",children:n.label}),n.badge&&e.jsx("span",{className:"ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full",children:n.badge})]},a)})})})]})};function Y(){const[f,t]=p.useState(""),[o,s]=p.useState(3);return e.jsx(S,{name:"Dropdown",description:"Standalone dropdown menu for actions, user profiles, and context menus. Provides flexible positioning, keyboard navigation, and accessible menu patterns for government services.",category:"Overlay",maturity:"beta",tier:"core",since:"v1.2.0",updated:"v2.1.0",props:[{name:"trigger",type:"ReactNode",required:!0,description:"Element that triggers the dropdown menu. Can be text, icon, or custom component."},{name:"items",type:"DropdownItem[]",required:!0,description:"Array of menu items. Each item can be a standard item, divider, or header. Items support icons, badges, disabled state, and custom click handlers."},{name:"placement",type:"'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'",default:"'bottom-end'",required:!1,description:"Position of the dropdown menu relative to trigger. Bottom-end aligns menu to right edge, bottom-start to left edge."},{name:"onSelect",type:"(item: DropdownItem) => void",required:!1,description:"Callback fired when menu item is selected. Receives the selected item as argument."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the dropdown trigger is disabled. Prevents opening the menu."},{name:"closeOnSelect",type:"boolean",default:"true",required:!1,description:"Whether to close the menu after selecting an item. Can be overridden per item."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the dropdown menu. Affects text size and menu width."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to the dropdown container."}],examples:[{title:"Basic Dropdown",description:"Simple dropdown menu with text items for common actions.",code:`import { Dropdown } from '@ux4g/react-core';
import { ChevronDown } from 'lucide-react';

function Example() {
  return (
    <Dropdown
      trigger={
        <>
          Actions
          <ChevronDown size={16} />
        </>
      }
      items={[
        { label: 'Edit', onClick: () => console.log('Edit') },
        { label: 'Duplicate', onClick: () => console.log('Duplicate') },
        { label: 'Archive', onClick: () => console.log('Archive') },
        { type: 'divider' },
        { label: 'Delete', variant: 'danger', onClick: () => console.log('Delete') },
      ]}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(i,{trigger:e.jsxs(e.Fragment,{children:["Actions",e.jsx(r,{size:16})]}),items:[{label:"Edit",onClick:()=>t("Edit")},{label:"Duplicate",onClick:()=>t("Duplicate")},{label:"Archive",onClick:()=>t("Archive")},{type:"divider"},{label:"Delete",variant:"danger",onClick:()=>t("Delete")}]})})},{title:"User Profile Menu",description:"User menu with profile information, settings, and logout action.",code:`import { Dropdown } from '@ux4g/react-core';
import { User, Settings, LogOut } from 'lucide-react';

function Example() {
  return (
    <Dropdown
      trigger={
        <>
          <User size={16} />
          John Smith
          <ChevronDown size={16} />
        </>
      }
      items={[
        { type: 'header', label: 'Account' },
        { label: 'Profile', icon: <User size={16} />, onClick: () => console.log('Profile') },
        { label: 'Settings', icon: <Settings size={16} />, onClick: () => console.log('Settings') },
        { type: 'divider' },
        { label: 'Sign Out', icon: <LogOut size={16} />, onClick: () => console.log('Sign Out') },
      ]}
      placement="bottom-end"
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(i,{trigger:e.jsxs(e.Fragment,{children:[e.jsx(b,{size:16}),"John Smith",e.jsx(r,{size:16})]}),items:[{type:"header",label:"Account"},{label:"Profile",icon:e.jsx(b,{size:16}),onClick:()=>t("Profile")},{label:"Settings",icon:e.jsx(I,{size:16}),onClick:()=>t("Settings")},{type:"divider"},{label:"Sign Out",icon:e.jsx(E,{size:16}),onClick:()=>t("Sign Out")}],placement:"bottom-end"})})},{title:"Actions Menu with Icons",description:"Context menu with icons for document actions.",code:`import { Dropdown } from '@ux4g/react-core';
import { MoreVertical, Edit, Share2, Download, Trash2 } from 'lucide-react';

function Example() {
  return (
    <Dropdown
      trigger={<MoreVertical size={20} />}
      items={[
        { label: 'Edit', icon: <Edit size={16} />, onClick: () => console.log('Edit') },
        { label: 'Share', icon: <Share2 size={16} />, onClick: () => console.log('Share') },
        { label: 'Download', icon: <Download size={16} />, onClick: () => console.log('Download') },
        { type: 'divider' },
        { label: 'Delete', icon: <Trash2 size={16} />, variant: 'danger', onClick: () => console.log('Delete') },
      ]}
      placement="bottom-end"
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(i,{trigger:e.jsx(z,{size:20}),items:[{label:"Edit",icon:e.jsx(O,{size:16}),onClick:()=>t("Edit")},{label:"Share",icon:e.jsx(A,{size:16}),onClick:()=>t("Share")},{label:"Download",icon:e.jsx(g,{size:16}),onClick:()=>t("Download")},{type:"divider"},{label:"Delete",icon:e.jsx(h,{size:16}),variant:"danger",onClick:()=>t("Delete")}],placement:"bottom-end"})})},{title:"With Dividers and Sections",description:"Organized menu with section headers and dividers for grouping related actions.",code:`import { Dropdown } from '@ux4g/react-core';
import { FileText, Download, Star, Archive, Trash2 } from 'lucide-react';

function Example() {
  return (
    <Dropdown
      trigger={
        <>
          Manage Document
          <ChevronDown size={16} />
        </>
      }
      items={[
        { type: 'header', label: 'Document Actions' },
        { label: 'View Details', icon: <FileText size={16} />, onClick: () => console.log('View') },
        { label: 'Download PDF', icon: <Download size={16} />, onClick: () => console.log('Download') },
        { type: 'divider' },
        { type: 'header', label: 'Organization' },
        { label: 'Add to Favorites', icon: <Star size={16} />, onClick: () => console.log('Favorite') },
        { label: 'Archive', icon: <Archive size={16} />, onClick: () => console.log('Archive') },
        { type: 'divider' },
        { label: 'Delete', icon: <Trash2 size={16} />, variant: 'danger', onClick: () => console.log('Delete') },
      ]}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(i,{trigger:e.jsxs(e.Fragment,{children:["Manage Document",e.jsx(r,{size:16})]}),items:[{type:"header",label:"Document Actions"},{label:"View Details",icon:e.jsx(c,{size:16}),onClick:()=>t("View Details")},{label:"Download PDF",icon:e.jsx(g,{size:16}),onClick:()=>t("Download PDF")},{type:"divider"},{type:"header",label:"Organization"},{label:"Add to Favorites",icon:e.jsx(j,{size:16}),onClick:()=>t("Add to Favorites")},{label:"Archive",icon:e.jsx(F,{size:16}),onClick:()=>t("Archive")},{type:"divider"},{label:"Delete",icon:e.jsx(h,{size:16}),variant:"danger",onClick:()=>t("Delete")}]})})},{title:"Notification Dropdown",description:"Dropdown menu for displaying notifications with badge count.",code:`import { Dropdown } from '@ux4g/react-core';
import { Bell } from 'lucide-react';

function Example() {
  const [count, setCount] = React.useState(3);

  return (
    <Dropdown
      trigger={
        <div className="relative">
          <Bell size={20} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {count}
            </span>
          )}
        </div>
      }
      items={[
        { type: 'header', label: 'Notifications' },
        { label: 'Application approved', badge: 'New', onClick: () => setCount(count - 1) },
        { label: 'Document uploaded', badge: 'New', onClick: () => setCount(count - 1) },
        { label: 'Profile updated', onClick: () => console.log('View') },
        { type: 'divider' },
        { label: 'View All Notifications', onClick: () => console.log('View All') },
      ]}
      size="lg"
      closeOnSelect={false}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(i,{trigger:e.jsxs("div",{className:"relative",children:[e.jsx(M,{size:20}),o>0&&e.jsx("span",{className:"absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:o})]}),items:[{type:"header",label:"Notifications"},{label:"Application approved",badge:"New",onClick:()=>s(Math.max(0,o-1)),closeOnSelect:!1},{label:"Document uploaded",badge:"New",onClick:()=>s(Math.max(0,o-1)),closeOnSelect:!1},{label:"Profile updated",onClick:()=>t("Profile updated"),closeOnSelect:!1},{type:"divider"},{label:"View All Notifications",onClick:()=>t("View All")}],size:"lg"})})},{title:"Different Sizes",description:"Dropdown menus in small, medium, and large sizes.",code:`import { Dropdown } from '@ux4g/react-core';
import { ChevronDown } from 'lucide-react';

function Example() {
  const items = [
    { label: 'Option 1', onClick: () => console.log('Option 1') },
    { label: 'Option 2', onClick: () => console.log('Option 2') },
    { label: 'Option 3', onClick: () => console.log('Option 3') },
  ];

  return (
    <div className="flex items-center gap-4">
      <Dropdown size="sm" trigger={<>Small <ChevronDown size={14} /></>} items={items} />
      <Dropdown size="md" trigger={<>Medium <ChevronDown size={16} /></>} items={items} />
      <Dropdown size="lg" trigger={<>Large <ChevronDown size={18} /></>} items={items} />
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[e.jsx(i,{size:"sm",trigger:e.jsxs(e.Fragment,{children:["Small",e.jsx(r,{size:14})]}),items:[{label:"Option 1",onClick:()=>t("Small - Option 1")},{label:"Option 2",onClick:()=>t("Small - Option 2")},{label:"Option 3",onClick:()=>t("Small - Option 3")}]}),e.jsx(i,{size:"md",trigger:e.jsxs(e.Fragment,{children:["Medium",e.jsx(r,{size:16})]}),items:[{label:"Option 1",onClick:()=>t("Medium - Option 1")},{label:"Option 2",onClick:()=>t("Medium - Option 2")},{label:"Option 3",onClick:()=>t("Medium - Option 3")}]}),e.jsx(i,{size:"lg",trigger:e.jsxs(e.Fragment,{children:["Large",e.jsx(r,{size:18})]}),items:[{label:"Option 1",onClick:()=>t("Large - Option 1")},{label:"Option 2",onClick:()=>t("Large - Option 2")},{label:"Option 3",onClick:()=>t("Large - Option 3")}]})]})},{title:"Export Options Menu",description:"Common pattern for government services offering multiple export formats.",code:`import { Dropdown } from '@ux4g/react-core';
import { Download, FileText } from 'lucide-react';

function Example() {
  return (
    <Dropdown
      trigger={
        <>
          <Download size={16} />
          Export
          <ChevronDown size={16} />
        </>
      }
      items={[
        { type: 'header', label: 'Export Format' },
        { label: 'Export as PDF', icon: <FileText size={16} />, onClick: () => console.log('PDF') },
        { label: 'Export as CSV', icon: <FileText size={16} />, onClick: () => console.log('CSV') },
        { label: 'Export as Excel', icon: <FileText size={16} />, onClick: () => console.log('Excel') },
        { label: 'Export as JSON', icon: <FileText size={16} />, onClick: () => console.log('JSON') },
      ]}
    />
  );
}`,preview:e.jsx("div",{className:"flex justify-center",children:e.jsx(i,{trigger:e.jsxs(e.Fragment,{children:[e.jsx(g,{size:16}),"Export",e.jsx(r,{size:16})]}),items:[{type:"header",label:"Export Format"},{label:"Export as PDF",icon:e.jsx(c,{size:16}),onClick:()=>t("Export PDF")},{label:"Export as CSV",icon:e.jsx(c,{size:16}),onClick:()=>t("Export CSV")},{label:"Export as Excel",icon:e.jsx(c,{size:16}),onClick:()=>t("Export Excel")},{label:"Export as JSON",icon:e.jsx(c,{size:16}),onClick:()=>t("Export JSON")}]})})}],reactCode:{component:`import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { dropdownVariants } from './dropdown.variants';
import { DropdownProps, DropdownItem } from './Dropdown.types';

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      trigger,
      items,
      placement = 'bottom-end',
      onSelect,
      disabled = false,
      closeOnSelect = true,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const selectableItems = items.filter(
      (item) => item.type !== 'divider' && item.type !== 'header' && !item.disabled
    );

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        if (!isOpen) return;

        switch (event.key) {
          case 'Escape':
            event.preventDefault();
            setIsOpen(false);
            setFocusedIndex(-1);
            break;

          case 'ArrowDown':
            event.preventDefault();
            setFocusedIndex((prev) => 
              prev < selectableItems.length - 1 ? prev + 1 : 0
            );
            break;

          case 'ArrowUp':
            event.preventDefault();
            setFocusedIndex((prev) => 
              prev > 0 ? prev - 1 : selectableItems.length - 1
            );
            break;

          case 'Enter':
          case ' ':
            event.preventDefault();
            if (focusedIndex >= 0 && focusedIndex < selectableItems.length) {
              const item = selectableItems[focusedIndex];
              handleItemClick(item);
            }
            break;

          case 'Home':
            event.preventDefault();
            setFocusedIndex(0);
            break;

          case 'End':
            event.preventDefault();
            setFocusedIndex(selectableItems.length - 1);
            break;
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [isOpen, focusedIndex, selectableItems.length]);

    const handleItemClick = (item: DropdownItem) => {
      if (item.onClick) {
        item.onClick();
      }
      if (onSelect) {
        onSelect(item);
      }
      const shouldClose = item.closeOnSelect !== undefined ? item.closeOnSelect : closeOnSelect;
      if (shouldClose) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    return (
      <div 
        ref={dropdownRef} 
        className={cn('relative inline-block', className)}
        {...props}
      >
        <button
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(dropdownVariants({ size, disabled }))}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {trigger}
        </button>
        
        {isOpen && (
          <div 
            ref={menuRef}
            className={cn(
              'absolute z-50 mt-1 rounded-md border border-gray-200 bg-white shadow-lg',
              placement === 'bottom-start' && 'left-0',
              placement === 'bottom-end' && 'right-0',
              placement === 'top-start' && 'left-0 bottom-full mb-1',
              placement === 'top-end' && 'right-0 bottom-full mb-1',
              size === 'sm' && 'min-w-[160px]',
              size === 'md' && 'min-w-[200px]',
              size === 'lg' && 'min-w-[240px]'
            )}
            role="menu"
          >
            <div className={cn('py-1', size === 'sm' && 'text-sm')}>
              {items.map((item, index) => {
                if (item.type === 'divider') {
                  return (
                    <div 
                      key={index} 
                      className="my-1 h-px bg-gray-200" 
                      role="separator" 
                    />
                  );
                }
                
                if (item.type === 'header') {
                  return (
                    <div 
                      key={index} 
                      className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      {item.label}
                    </div>
                  );
                }

                const selectableIndex = selectableItems.indexOf(item);
                const isFocused = selectableIndex === focusedIndex;
                const isDanger = item.variant === 'danger';
                
                return (
                  <button
                    key={index}
                    className={cn(
                      'w-full text-left px-3 py-2 transition-colors flex items-center gap-2',
                      'focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
                      isDanger ? 'text-red-700 hover:bg-red-50 hover:text-red-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                      isFocused && 'bg-gray-100'
                    )}
                    role="menuitem"
                    disabled={item.disabled}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.icon && (
                      <span className="inline-flex shrink-0" aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';`,types:`export interface DropdownItem {
  label?: string;
  icon?: React.ReactNode;
  badge?: string;
  type?: 'item' | 'divider' | 'header';
  variant?: 'default' | 'danger';
  disabled?: boolean;
  closeOnSelect?: boolean;
  onClick?: () => void;
}

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
export type DropdownSize = 'sm' | 'md' | 'lg';

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  items: DropdownItem[];
  placement?: DropdownPlacement;
  onSelect?: (item: DropdownItem) => void;
  disabled?: boolean;
  closeOnSelect?: boolean;
  size?: DropdownSize;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const dropdownVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium leading-normal text-center whitespace-nowrap',
    'rounded border cursor-pointer select-none touch-manipulation',
    'transition-all duration-150 ease-in-out',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'min-h-[44px]',
    'bg-white text-[#005196] border-[#005196]',
    'hover:bg-[#f5f5f5] hover:border-[#004178]',
    'active:bg-[#e5e5e5]',
    'focus-visible:ring-[#005196]',
  ],
  {
    variants: {
      size: {
        sm: ['h-8 px-3 py-1.5 text-sm'],
        md: ['h-10 px-4 py-2.5 text-sm'],
        lg: ['h-12 px-6 py-3 text-base'],
      },
      disabled: {
        true: ['opacity-60 cursor-not-allowed'],
        false: [],
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface DropdownItem {
  label?: string;
  icon?: string;
  badge?: string;
  type?: 'item' | 'divider' | 'header';
  variant?: 'default' | 'danger';
  disabled?: boolean;
  closeOnSelect?: boolean;
  onClick?: () => void;
}

type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
type DropdownSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ux4g-dropdown',
  template: \`
    <div class="ux4g-dropdown-container" #container>
      <button
        [disabled]="disabled"
        [attr.aria-haspopup]="true"
        [attr.aria-expanded]="isOpen"
        [class]="getTriggerClasses()"
        (click)="toggleDropdown()"
      >
        <ng-content></ng-content>
      </button>

      <div
        *ngIf="isOpen"
        [class]="getMenuClasses()"
        role="menu"
        [@dropdownAnimation]
      >
        <div [class]="getMenuContentClasses()">
          <ng-container *ngFor="let item of items; let i = index">
            <div
              *ngIf="item.type === 'divider'"
              class="ux4g-dropdown-divider"
              role="separator"
            ></div>

            <div
              *ngIf="item.type === 'header'"
              class="ux4g-dropdown-header"
            >
              {{ item.label }}
            </div>

            <button
              *ngIf="!item.type || item.type === 'item'"
              [disabled]="item.disabled"
              [class]="getItemClasses(item)"
              role="menuitem"
              (click)="handleItemClick(item, i)"
            >
              <span *ngIf="item.icon" class="ux4g-dropdown-icon" [innerHTML]="item.icon"></span>
              <span class="ux4g-dropdown-label">{{ item.label }}</span>
              <span *ngIf="item.badge" class="ux4g-dropdown-badge">{{ item.badge }}</span>
            </button>
          </ng-container>
        </div>
      </div>
    </div>
  \`,
  styleUrls: ['./dropdown.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-8px)' }),
        animate('150ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ opacity: 0, transform: 'translateY(-8px)' }))
      ])
    ])
  ]
})
export class DropdownComponent {
  @Input() items: DropdownItem[] = [];
  @Input() placement: DropdownPlacement = 'bottom-end';
  @Input() disabled = false;
  @Input() closeOnSelect = true;
  @Input() size: DropdownSize = 'md';

  @Output() itemSelected = new EventEmitter<DropdownItem>();

  isOpen = false;
  focusedIndex = -1;

  constructor(private elementRef: ElementRef) {}

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (!this.isOpen) {
        this.focusedIndex = -1;
      }
    }
  }

  handleItemClick(item: DropdownItem, index: number): void {
    if (!item.disabled) {
      if (item.onClick) {
        item.onClick();
      }
      this.itemSelected.emit(item);
      
      const shouldClose = item.closeOnSelect !== undefined ? item.closeOnSelect : this.closeOnSelect;
      if (shouldClose) {
        this.isOpen = false;
        this.focusedIndex = -1;
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.focusedIndex = -1;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen) return;

    const selectableItems = this.items.filter(
      item => (!item.type || item.type === 'item') && !item.disabled
    );

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.isOpen = false;
        this.focusedIndex = -1;
        break;

      case 'ArrowDown':
        event.preventDefault();
        this.focusedIndex = this.focusedIndex < selectableItems.length - 1 
          ? this.focusedIndex + 1 
          : 0;
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.focusedIndex = this.focusedIndex > 0 
          ? this.focusedIndex - 1 
          : selectableItems.length - 1;
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.focusedIndex >= 0 && this.focusedIndex < selectableItems.length) {
          this.handleItemClick(selectableItems[this.focusedIndex], this.focusedIndex);
        }
        break;
    }
  }

  getTriggerClasses(): string {
    const classes = ['ux4g-dropdown-trigger', \`ux4g-dropdown-trigger-\${this.size}\`];
    if (this.disabled) classes.push('ux4g-dropdown-trigger-disabled');
    return classes.join(' ');
  }

  getMenuClasses(): string {
    const classes = ['ux4g-dropdown-menu', \`ux4g-dropdown-menu-\${this.size}\`];
    classes.push(\`ux4g-dropdown-menu-\${this.placement}\`);
    return classes.join(' ');
  }

  getMenuContentClasses(): string {
    return \`ux4g-dropdown-content ux4g-dropdown-content-\${this.size}\`;
  }

  getItemClasses(item: DropdownItem): string {
    const classes = ['ux4g-dropdown-item'];
    if (item.variant === 'danger') classes.push('ux4g-dropdown-item-danger');
    if (item.disabled) classes.push('ux4g-dropdown-item-disabled');
    return classes.join(' ');
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, OverlayModule, A11yModule],
  exports: [DropdownComponent]
})
export class DropdownModule { }`,types:`export interface DropdownItem {
  label?: string;
  icon?: string;
  badge?: string;
  type?: 'item' | 'divider' | 'header';
  variant?: 'default' | 'danger';
  disabled?: boolean;
  closeOnSelect?: boolean;
  onClick?: () => void;
}

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
export type DropdownSize = 'sm' | 'md' | 'lg';`},comparisons:[{system:"Material UI (Google)",component:"Menu",variants:"Default with custom positioning",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-menu/"},{system:"Ant Design (Alibaba)",component:"Dropdown",variants:"Multiple trigger modes, overlay positioning",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/dropdown"},{system:"GOV.UK Design System",component:"Navigation (custom patterns)",variants:"Limited dropdown patterns",accessibility:"WCAG 2.1 AAA",documentation:"Basic",link:"https://design-system.service.gov.uk/"},{system:"Chakra UI",component:"Menu",variants:"Flexible positioning, nested menus",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/menu"},{system:"Radix UI",component:"Dropdown Menu",variants:"Unstyled primitives with full control",accessibility:"WCAG 2.1 AAA",documentation:"Excellent",link:"https://www.radix-ui.com/primitives/docs/components/dropdown-menu"},{system:"Headless UI",component:"Menu",variants:"Unstyled with full keyboard navigation",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://headlessui.com/react/menu"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 44x44px touch target size for trigger button (WCAG 2.5.5)",'role="menu" on dropdown container for proper menu semantics','role="menuitem" on individual menu items for assistive technology','role="separator" on divider elements','aria-haspopup="true" indicates trigger opens a menu',"aria-expanded state communicates menu visibility","Click-outside handling closes menu automatically","Escape key closes menu and returns focus to trigger","Arrow key navigation (Up/Down) through menu items (WCAG 2.1.1)","Home/End keys for first/last item navigation","Enter and Space keys activate focused menu item","Focus visible styles for keyboard navigation (WCAG 2.4.7)","Icons properly hidden from screen readers with aria-hidden","Disabled items announced to assistive technology"],keyboardSupport:[{key:"Tab",action:"Move focus to/from dropdown trigger"},{key:"Enter / Space",action:"Open dropdown menu or activate focused item"},{key:"Escape",action:"Close dropdown menu and return focus to trigger"},{key:"Arrow Down",action:"Move focus to next menu item (wraps to first)"},{key:"Arrow Up",action:"Move focus to previous menu item (wraps to last)"},{key:"Home",action:"Move focus to first menu item"},{key:"End",action:"Move focus to last menu item"}],screenReader:["Announces trigger button with current state",'Announces "menu" role when dropdown opens','Announces each menu item as "menu item"',"Announces disabled state for disabled items","Announces dividers as separators","Icons and badges properly labeled or hidden","Focus changes announced during keyboard navigation"]},tokens:{file:"/tokens/components/dropdown.json",mappings:[{property:"Trigger Height (Medium)",token:"base.height.md",value:"40px"},{property:"Trigger Padding",token:"base.padding.horizontal.md",value:"16px"},{property:"Menu Border Radius",token:"base.borderRadius",value:"6px"},{property:"Menu Item Padding",token:"menu.item.padding",value:"8px 12px"},{property:"Menu Min Width (Medium)",token:"menu.minWidth.md",value:"200px"},{property:"Menu Background",token:"menu.background",value:"#FFFFFF"},{property:"Menu Border Color",token:"menu.borderColor",value:"#E5E7EB (Gray 200)"},{property:"Menu Shadow",token:"menu.shadow",value:"0 10px 15px rgba(0,0,0,0.1)"},{property:"Item Hover Background",token:"menu.item.hover.background",value:"#F3F4F6 (Gray 100)"},{property:"Item Text Color",token:"menu.item.textColor",value:"#374151 (Gray 700)"},{property:"Danger Item Color",token:"menu.item.danger.textColor",value:"#B91C1C (Red 700)"},{property:"Danger Hover Background",token:"menu.item.danger.hover.background",value:"#FEF2F2 (Red 50)"},{property:"Divider Color",token:"menu.divider.color",value:"#E5E7EB (Gray 200)"},{property:"Header Text Color",token:"menu.header.textColor",value:"#6B7280 (Gray 500)"},{property:"Z-Index",token:"menu.zIndex",value:"50"}]},useCases:[{title:"User Profile Menu",description:"Navigation menu for authenticated users to access account settings, profile information, and sign out functionality.",example:"Header component with user avatar and dropdown containing Profile, Settings, Help Center, and Sign Out options."},{title:"Application Actions Menu",description:"Context menu for performing actions on application items like permits, licenses, or submissions.",example:"Application list with action dropdowns offering View Details, Download PDF, Edit Application, Withdraw, and Delete options."},{title:"Language Selector",description:"Dropdown menu for selecting interface language in multilingual government services.",example:"Header language selector with options for English, French, Spanish, and other supported languages with flag icons."},{title:"Notification Center",description:"Dropdown displaying recent notifications and alerts with badge count indicator.",example:'Bell icon with notification count badge opening dropdown with recent alerts, messages, and "View All" link.'},{title:"Export Options",description:"Menu for exporting data and reports in multiple formats (PDF, CSV, Excel, JSON).",example:"Export button in data table toolbar with dropdown offering different export format options."},{title:"Bulk Actions",description:"Action menu for performing operations on multiple selected items in tables or lists.",example:'Table toolbar with "Bulk Actions" dropdown containing Approve Selected, Reject Selected, Export Selected, and Delete Selected.'},{title:"Document Management",description:"Context menu for managing uploaded documents with view, download, share, and delete actions.",example:"Document list with three-dot menu icons offering View, Download, Share Link, Move to Folder, and Delete operations."},{title:"Status Filter",description:"Filter dropdown for selecting application or request status in dashboard views.",example:"Dashboard filter bar with status dropdown containing All, Pending, Approved, Rejected, and In Review options with checkmarks."}]})}export{Y as default};
