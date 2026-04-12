import{j as e,l as r,S as s,i as l}from"./index-BYMLq1ET.js";import{C as c}from"./ComponentDocumentation-CxrYZXwp.js";import{B as d}from"./bell-CuOfhb6O.js";import{U as m}from"./user-BaD1W0UJ.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const t=({variant:a,withSearch:n,showNotifications:i,showProfile:o})=>e.jsx("header",{className:`w-full ${a==="government"?"bg-[#000080] text-white":a==="light"?"bg-white text-gray-900 border-b border-gray-200":"bg-gray-900 text-white"}`,children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:"lg:hidden p-2 hover:bg-white/10 rounded",children:e.jsx(r,{size:24})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-[#FF9933] rounded flex items-center justify-center font-bold",children:"G"}),e.jsx("span",{className:"font-semibold text-lg hidden sm:block",children:"Government Portal"})]})]}),e.jsxs("nav",{className:"hidden lg:flex items-center gap-6",children:[e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"Home"}),e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"Services"}),e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"About"}),e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"Contact"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[n&&e.jsx("button",{className:"p-2 hover:bg-white/10 rounded",children:e.jsx(s,{size:20})}),i&&e.jsxs("button",{className:"p-2 hover:bg-white/10 rounded relative",children:[e.jsx(d,{size:20}),e.jsx("span",{className:"absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"})]}),o&&e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded",children:[e.jsx(m,{size:20}),e.jsx(l,{size:16})]})]})]})})});function x(){return e.jsx(c,{name:"Header",description:"Primary navigation component for government portals. Provides consistent branding, navigation, search, and user account access across all pages.",category:"Navigation",maturity:"stable",tier:"core",since:"v1.0.0",updated:"v2.1.0",props:[{name:"variant",type:"'government' | 'light' | 'dark'",default:"'government'",required:!1,description:"Visual variant. Government uses navy blue, light uses white background, dark uses gray-900."},{name:"logo",type:"ReactNode",required:!1,description:"Custom logo element. If not provided, uses default government emblem."},{name:"title",type:"string",required:!1,description:"Portal or application title displayed next to logo."},{name:"navLinks",type:"Array<{ label: string; href: string; active?: boolean }>",required:!1,description:"Navigation links to display in header."},{name:"withSearch",type:"boolean",default:"false",required:!1,description:"Show search button in header."},{name:"onSearchClick",type:"() => void",required:!1,description:"Search button click handler."},{name:"showNotifications",type:"boolean",default:"false",required:!1,description:"Show notifications icon with badge."},{name:"notificationCount",type:"number",required:!1,description:"Number of unread notifications to display in badge."},{name:"showProfile",type:"boolean",default:"false",required:!1,description:"Show user profile dropdown."},{name:"userName",type:"string",required:!1,description:"Logged-in user name to display."},{name:"sticky",type:"boolean",default:"false",required:!1,description:"Whether header should stick to top on scroll."}],examples:[{title:"Government Variant",description:"Default header with government branding and navy blue background.",code:`import { Header } from '@ux4g/react-core';

function Example() {
  return (
    <Header
      variant="government"
      title="Government Portal"
      navLinks={[
        { label: 'Home', href: '/', active: true },
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]}
    />
  );
}`,preview:e.jsx(t,{variant:"government"})},{title:"With Search and Notifications",description:"Header with search functionality and notification bell.",code:`import { Header } from '@ux4g/react-core';

function Example() {
  return (
    <Header
      variant="government"
      title="Citizen Portal"
      withSearch
      showNotifications
      notificationCount={3}
      onSearchClick={() => console.log('Search clicked')}
    />
  );
}`,preview:e.jsx(t,{variant:"government",withSearch:!0,showNotifications:!0})},{title:"With User Profile",description:"Authenticated header showing user profile dropdown.",code:`import { Header } from '@ux4g/react-core';

function Example() {
  return (
    <Header
      variant="government"
      title="My Dashboard"
      showProfile
      userName="Rajesh Kumar"
      withSearch
      showNotifications
      notificationCount={5}
    />
  );
}`,preview:e.jsx(t,{variant:"government",withSearch:!0,showNotifications:!0,showProfile:!0})},{title:"Light Variant",description:"Light header variant for internal applications.",code:`import { Header } from '@ux4g/react-core';

function Example() {
  return (
    <Header
      variant="light"
      title="Admin Portal"
      navLinks={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Users', href: '/users' },
        { label: 'Reports', href: '/reports' },
      ]}
      showProfile
    />
  );
}`,preview:e.jsx(t,{variant:"light",showProfile:!0})}],reactCode:{component:`import React from 'react';
import { cn } from '../../utils/cn';
import { Menu, Search, Bell, User, ChevronDown } from 'lucide-react';
import { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = ({
  variant = 'government',
  logo,
  title,
  navLinks = [],
  withSearch = false,
  onSearchClick,
  showNotifications = false,
  notificationCount = 0,
  showProfile = false,
  userName,
  sticky = false,
  className,
  ...props
}) => {
  const baseClasses = cn(
    'w-full',
    sticky && 'sticky top-0 z-50',
    variant === 'government' && 'bg-[#005196] text-white',
    variant === 'light' && 'bg-white text-gray-900 border-b border-gray-200',
    variant === 'dark' && 'bg-gray-900 text-white',
    className
  );

  return (
    <header className={baseClasses} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo and title */}
          <div className="flex items-center gap-3">
            {logo || (
              <div className="w-10 h-10 bg-[#FF9933] rounded flex items-center justify-center font-bold">
                G
              </div>
            )}
            {title && (
              <span className="font-semibold text-lg hidden sm:block">
                {title}
              </span>
            )}
          </div>

          {/* Navigation links */}
          {navLinks.length > 0 && (
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={cn(
                    'hover:opacity-80 transition-opacity',
                    link.active && 'font-semibold'
                  )}
                  aria-current={link.active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3">
            {withSearch && (
              <button
                className="p-2 hover:bg-white/10 rounded"
                onClick={onSearchClick}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            )}

            {showNotifications && (
              <button
                className="p-2 hover:bg-white/10 rounded relative"
                aria-label={\`\${notificationCount} unread notifications\`}
              >
                <Bell size={20} />
                {notificationCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </button>
            )}

            {showProfile && (
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded">
                <User size={20} />
                {userName && (
                  <span className="hidden md:inline">{userName}</span>
                )}
                <ChevronDown size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};`,types:`export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'government' | 'light' | 'dark';
  logo?: React.ReactNode;
  title?: string;
  navLinks?: NavLink[];
  withSearch?: boolean;
  onSearchClick?: () => void;
  showNotifications?: boolean;
  notificationCount?: number;
  showProfile?: boolean;
  userName?: string;
  sticky?: boolean;
}`,variants:`import { cva } from 'class-variance-authority';

export const headerVariants = cva(
  ['w-full transition-colors'],
  {
    variants: {
      variant: {
        government: 'bg-[#005196] text-white',
        light: 'bg-white text-gray-900 border-b border-gray-200',
        dark: 'bg-gray-900 text-white',
      },
      sticky: {
        true: 'sticky top-0 z-50',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'government',
      sticky: false,
    },
  }
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

@Component({
  selector: 'ux4g-header',
  template: \`
    <header [class]="getHeaderClasses()">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Mobile menu -->
          <button class="lg:hidden p-2 hover:bg-white/10 rounded">
            <ux4g-icon name="menu" size="24"></ux4g-icon>
          </button>

          <!-- Logo and title -->
          <div class="flex items-center gap-3">
            <ng-content select="[slot=logo]"></ng-content>
            <span *ngIf="title" class="font-semibold text-lg hidden sm:block">
              {{ title }}
            </span>
          </div>

          <!-- Navigation -->
          <nav *ngIf="navLinks.length > 0" class="hidden lg:flex items-center gap-6">
            <a
              *ngFor="let link of navLinks"
              [href]="link.href"
              [class.font-semibold]="link.active"
              class="hover:opacity-80 transition-opacity"
            >
              {{ link.label }}
            </a>
          </nav>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <button
              *ngIf="withSearch"
              class="p-2 hover:bg-white/10 rounded"
              (click)="searchClick.emit()"
            >
              <ux4g-icon name="search" size="20"></ux4g-icon>
            </button>

            <button
              *ngIf="showNotifications"
              class="p-2 hover:bg-white/10 rounded relative"
            >
              <ux4g-icon name="bell" size="20"></ux4g-icon>
              <span
                *ngIf="notificationCount > 0"
                class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
              ></span>
            </button>

            <button *ngIf="showProfile" class="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded">
              <ux4g-icon name="user" size="20"></ux4g-icon>
              <span *ngIf="userName" class="hidden md:inline">{{ userName }}</span>
              <ux4g-icon name="chevron-down" size="16"></ux4g-icon>
            </button>
          </div>
        </div>
      </div>
    </header>
  \`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() variant: 'government' | 'light' | 'dark' = 'government';
  @Input() title?: string;
  @Input() navLinks: NavLink[] = [];
  @Input() withSearch = false;
  @Input() showNotifications = false;
  @Input() notificationCount = 0;
  @Input() showProfile = false;
  @Input() userName?: string;
  @Input() sticky = false;

  @Output() searchClick = new EventEmitter<void>();

  getHeaderClasses(): string {
    const classes = ['w-full'];

    if (this.sticky) classes.push('sticky', 'top-0', 'z-50');

    if (this.variant === 'government') {
      classes.push('bg-[#005196]', 'text-white');
    } else if (this.variant === 'light') {
      classes.push('bg-white', 'text-gray-900', 'border-b', 'border-gray-200');
    } else {
      classes.push('bg-gray-900', 'text-white');
    }

    return classes.join(' ');
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }`,types:`export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export type HeaderVariant = 'government' | 'light' | 'dark';`},comparisons:[{system:"GOV.UK Design System",component:"Header",variants:"default, with navigation, with service name",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/header/"},{system:"U.S. Web Design System",component:"Header",variants:"basic, extended, mega menu",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://designsystem.digital.gov/components/header/"},{system:"Material UI",component:"AppBar",variants:"default, transparent, colored",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://mui.com/material-ui/react-app-bar/"},{system:"Ant Design",component:"Layout.Header",variants:"fixed, scrollable",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/layout"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Semantic HTML5 header element for proper document structure","ARIA labels on icon buttons for screen reader support",'aria-current="page" on active navigation links',"Keyboard accessible navigation with proper focus management","44x44px minimum touch target size for mobile buttons","Color contrast ratios exceed 4.5:1 for all text","Skip to main content link for keyboard users","Responsive design with mobile-first approach"],keyboardSupport:[{key:"Tab",action:"Navigate through header interactive elements"},{key:"Shift + Tab",action:"Navigate backwards through elements"},{key:"Enter",action:"Activate focused link or button"},{key:"Space",action:"Activate focused button"}],screenReader:["Announces header as landmark region","Announces navigation as navigation region","Announces active page in navigation","Announces notification count on bell icon","Announces menu state changes"]},tokens:{file:"/tokens/components/header.json",mappings:[{property:"Height",token:"header.height",value:"64px (4rem)"},{property:"Background (Government)",token:"header.background.government",value:"#005196 (Navy 500)"},{property:"Background (Light)",token:"header.background.light",value:"#FFFFFF"},{property:"Padding Horizontal",token:"header.padding.horizontal",value:"16px (1rem)"},{property:"Logo Size",token:"header.logo.size",value:"40px"},{property:"Nav Link Gap",token:"header.nav.gap",value:"24px (1.5rem)"},{property:"Z-Index (Sticky)",token:"header.zIndex",value:"50"}]}})}export{x as default};
