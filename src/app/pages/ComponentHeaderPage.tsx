/**
 * Header Component Documentation Page
 * Complete documentation for the Header component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Menu, Search, Bell, User, ChevronDown } from 'lucide-react';

// Import the actual Header component for live preview
const HeaderPreview = ({ variant, withSearch, showNotifications, showProfile }: any) => (
  <header className={`w-full ${
    variant === 'government' ? 'bg-primary text-white' :
    variant === 'light' ? 'bg-card text-foreground border-b border-border' :
    'bg-gray-900 text-white'
  }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 hover:bg-card/10 rounded">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF9933] rounded flex items-center justify-center font-bold">
              G
            </div>
            <span className="font-semibold text-lg hidden sm:block">Government Portal</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Services</a>
          <a href="#" className="hover:opacity-80 transition-opacity">About</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {withSearch && (
            <button className="p-2 hover:bg-card/10 rounded">
              <Search size={20} />
            </button>
          )}
          {showNotifications && (
            <button className="p-2 hover:bg-card/10 rounded relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          )}
          {showProfile && (
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-card/10 rounded">
              <User size={20} />
              <ChevronDown size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  </header>
);

function HeaderPlayground() {
  const [showSearch, setShowSearch] = React.useState(false);
  const [showLanguage, setShowLanguage] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full flex items-center justify-center">
          <HeaderPreview withSearch={showSearch} showProfile />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showSearch} onChange={e => setShowSearch(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show Search</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showLanguage} onChange={e => setShowLanguage(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show Language</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Header${showSearch ? ' showSearch' : ''}${showLanguage ? ' showLanguage' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentHeaderPage() {
  return (
    <ComponentDocumentation
      name="Header"
      description="Primary navigation component for government portals. Provides consistent branding, navigation, search, and user account access across all pages."
      category="Navigation"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl">
          <HeaderPreview variant="default" withSearch showProfile />
        </div>
      }

      props={[
        {
          name: 'title',
          type: 'string',
          required: true,
          description: 'Site or service title.',
        },
        {
          name: 'logo',
          type: 'ReactNode',
          required: false,
          description: 'Logo element.',
        },
        {
          name: 'navItems',
          type: 'NavItem[]',
          required: false,
          description: 'Navigation items ({ label, href, active? }).',
        },
        {
          name: 'actions',
          type: 'ReactNode',
          required: false,
          description: 'Right-side actions (e.g., language selector, login button).',
        },
        {
          name: 'sticky',
          type: 'boolean',
          required: false,
          description: 'Whether the header sticks to the top on scroll.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}

      examples={[
        {
          title: 'Government Variant',
          description: 'Default header with government branding and navy blue background.',
          code: `import { Header } from '@ux4g/react-core';

function Example() {
  return (
    <Header />
  );
}`,
          preview: <HeaderPreview variant="government" />,
        },
        {
          title: 'With Search and Notifications',
          description: 'Header with search functionality and notification bell.',
          code: `import { Header } from '@ux4g/react-core';

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
}`,
          preview: <HeaderPreview variant="government" withSearch showNotifications />,
        },
        {
          title: 'With User Profile',
          description: 'Authenticated header showing user profile dropdown.',
          code: `import { Header } from '@ux4g/react-core';

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
}`,
          preview: <HeaderPreview variant="government" withSearch showNotifications showProfile />,
        },
        {
          title: 'Light Variant',
          description: 'Light header variant for internal applications.',
          code: `import { Header } from '@ux4g/react-core';

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
}`,
          preview: <HeaderPreview variant="light" showProfile />,
        },
      ]}

      reactCode={{
        component: `import React from 'react';
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
    variant === 'light' && 'bg-card text-foreground border-b border-border',
    variant === 'dark' && 'bg-gray-900 text-white',
    className
  );

  return (
    <header className={baseClasses} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-card/10 rounded"
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
                className="p-2 hover:bg-card/10 rounded"
                onClick={onSearchClick}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            )}

            {showNotifications && (
              <button
                className="p-2 hover:bg-card/10 rounded relative"
                aria-label={\`\${notificationCount} unread notifications\`}
              >
                <Bell size={20} />
                {notificationCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </button>
            )}

            {showProfile && (
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-card/10 rounded">
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
};`,
        types: `export interface NavLink {
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
}`,
        variants: `import { cva } from 'class-variance-authority';

export const headerVariants = cva(
  ['w-full transition-colors'],
  {
    variants: {
      variant: {
        government: 'bg-[#005196] text-white',
        light: 'bg-card text-foreground border-b border-border',
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
);`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

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
          <button class="lg:hidden p-2 hover:bg-card/10 rounded">
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
              class="p-2 hover:bg-card/10 rounded"
              (click)="searchClick.emit()"
            >
              <ux4g-icon name="search" size="20"></ux4g-icon>
            </button>

            <button
              *ngIf="showNotifications"
              class="p-2 hover:bg-card/10 rounded relative"
            >
              <ux4g-icon name="bell" size="20"></ux4g-icon>
              <span
                *ngIf="notificationCount > 0"
                class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
              ></span>
            </button>

            <button *ngIf="showProfile" class="flex items-center gap-2 px-3 py-2 hover:bg-card/10 rounded">
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
      classes.push('bg-card', 'text-foreground', 'border-b', 'border-border');
    } else {
      classes.push('bg-gray-900', 'text-white');
    }

    return classes.join(' ');
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }`,
        types: `export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export type HeaderVariant = 'government' | 'light' | 'dark';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-header> custom element",
        html: "<ux4g-header variant=\"primary\" size=\"md\"><!-- Header --></ux4g-header>",
      }}
      comparisons={[
        {
          system: 'GOV.UK Design System',
          component: 'Header',
          variants: 'default, with navigation, with service name',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/header/',
        },
        {
          system: 'U.S. Web Design System',
          component: 'Header',
          variants: 'basic, extended, mega menu',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://designsystem.digital.gov/components/header/',
        },
        {
          system: 'Material UI',
          component: 'AppBar',
          variants: 'default, transparent, colored',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://mui.com/material-ui/react-app-bar/',
        },
        {
          system: 'Ant Design',
          component: 'Layout.Header',
          variants: 'fixed, scrollable',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/layout',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic HTML5 header element for proper document structure',
          'ARIA labels on icon buttons for screen reader support',
          'aria-current="page" on active navigation links',
          'Keyboard accessible navigation with proper focus management',
          '44x44px minimum touch target size for mobile buttons',
          'Color contrast ratios exceed 4.5:1 for all text',
          'Skip to main content link for keyboard users',
          'Responsive design with mobile-first approach',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate through header interactive elements' },
          { key: 'Shift + Tab', action: 'Navigate backwards through elements' },
          { key: 'Enter', action: 'Activate focused link or button' },
          { key: 'Space', action: 'Activate focused button' },
        ],
        screenReader: [
          'Announces header as landmark region',
          'Announces navigation as navigation region',
          'Announces active page in navigation',
          'Announces notification count on bell icon',
          'Announces menu state changes',
        ],
      }}

      tokens={{
        file: '/tokens/components/header.json',
        mappings: [
          { property: 'Height', token: 'header.height', value: '64px (4rem)' },
          { property: 'Background (Government)', token: 'header.background.government', value: '#005196 (Navy 500)' },
          { property: 'Background (Light)', token: 'header.background.light', value: '#FFFFFF' },
          { property: 'Padding Horizontal', token: 'header.padding.horizontal', value: '16px (1rem)' },
          { property: 'Logo Size', token: 'header.logo.size', value: '40px' },
          { property: 'Nav Link Gap', token: 'header.nav.gap', value: '24px (1.5rem)' },
          { property: 'Z-Index (Sticky)', token: 'header.zIndex', value: '50' },
        ],
      }}

      useCases={[
        { title: 'Government Portal Header', description: 'Standard header with emblem, ministry name, and navigation.', scenario: 'All pages show header with India emblem and ministry branding.', implementation: '<Header logo={<Emblem />} title="Ministry of Electronics & IT" navigation={navLinks} />' },
        { title: 'Citizen Service Header', description: 'Header with user profile, notifications, and language selector.', scenario: 'Logged-in citizen sees profile menu and notification bell.', implementation: '<Header user={currentUser} notifications={3} languageSelector />' },
        { title: 'Accessible Header', description: 'Header with skip-to-content link and high contrast toggle.', scenario: 'Screen reader user navigates directly to main content.', implementation: '<Header skipToContent accessibilityTools showFontSize />' },
        { title: 'Mobile Responsive Header', description: 'Header that collapses to hamburger menu on mobile.', scenario: 'Mobile user accesses full navigation via slide-out menu.', implementation: '<Header responsive mobileMenu="drawer" />' },
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
                  Do use Header when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Page-level header with branding</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Navigation bar with links</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>User account and settings access</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Language and accessibility controls</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Header when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Section headers — use heading elements</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Card headers — use Card header slot</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Modal headers — use Modal title</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Inline navigation — use links directly</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Include a skip-to-content link — government sites without it fail accessibility audits.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t hide the mobile menu behind an unlabeled icon — add a text label.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/footer" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Footer</h3>
                <p className="text-sm text-muted-foreground">For page footer</p>
              </a>
              <a href="/components/breadcrumb" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Breadcrumb</h3>
                <p className="text-sm text-muted-foreground">For page hierarchy</p>
              </a>
              <a href="/components/languageselector" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">LanguageSelector</h3>
                <p className="text-sm text-muted-foreground">For language switching</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added responsive mobile menu</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added skip-to-content link</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with logo and navigation</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Skip navigation links</h3>
                <p className="text-sm text-muted-foreground">WCAG 2.4.1 requires a skip-to-content link. Government sites without it fail accessibility audits 100% of the time.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}