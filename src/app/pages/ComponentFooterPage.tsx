/**
 * Footer Component Documentation Page
 * Complete documentation for the Footer component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

// Import the actual Footer component for live preview
const FooterPreview = ({ variant, showSocial, columns }: any) => (
  <footer className={`w-full ${
    variant === 'government' ? 'bg-primary text-white' :
    variant === 'light' ? 'bg-muted text-foreground' :
    'bg-gray-900 text-white'
  }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About Us</h3>
          <p className="text-sm opacity-80 mb-4">
            Government of India's unified digital platform for citizen services and information.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:opacity-80 transition-opacity">Services</a></li>
            <li><a href="#" className="hover:opacity-80 transition-opacity">About</a></li>
            <li><a href="#" className="hover:opacity-80 transition-opacity">Contact</a></li>
            <li><a href="#" className="hover:opacity-80 transition-opacity">Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>support@gov.in</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>1800-XXX-XXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>New Delhi, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        {showSocial && (
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 hover:bg-card/10 rounded" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-card/10 rounded" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-card/10 rounded" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-card/10 rounded" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="opacity-80">© 2026 Government of India. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Terms of Service</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);

const FOOTER_CONTROLS: PlaygroundControl[] = [
  {
    name: 'showSocial',
    label: 'Show Social',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'showHelpline',
    label: 'Show Helpline',
    type: 'boolean',
    defaultValue: false,
  },
];

function FooterPlayground() {
  return (
    <ComponentPlayground
      name="Footer"
      controls={FOOTER_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg">
          <FooterPreview {...v} />
        </div>
      )}
      codeTemplate={(v) => {
        const props: string[] = [];
        FOOTER_CONTROLS.forEach((c) => {
          const val = v[c.name];
          if (c.type === 'boolean' && val) props.push(c.name);
          else if (c.type !== 'boolean' && val !== c.defaultValue) {
            props.push(`${c.name}="${val}"`);
          }
        });
        return `<Footer${props.length ? ' ' + props.join(' ') : ''} />`;
      }}
    />
  );
}

export default function ComponentFooterPage() {
  return (
    <ComponentDocumentation
      name="Footer"
      description="Consistent footer component for government portals providing links to important information, contact details, social media, and legal notices."
      category="Navigation"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <FooterPreview variant="default" showSocial />
        </div>
      }

      props={[
        {
          name: 'sections',
          type: 'FooterSection[]',
          required: false,
          description: 'Footer link sections ({ title, links: FooterLink[] }).',
        },
        {
          name: 'copyright',
          type: 'string',
          required: false,
          description: 'Copyright text.',
        },
        {
          name: 'logo',
          type: 'ReactNode',
          required: false,
          description: 'Footer logo element.',
        },
        {
          name: 'socialLinks',
          type: 'ReactNode',
          required: false,
          description: 'Social media links element.',
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
          description: 'Default footer with government branding.',
          code: `import { Footer } from '@ux4g/react-core';

function Example() {
  return (
    <Footer />
  );
}`,
          preview: <FooterPreview variant="government" showSocial />,
        },
        {
          title: 'With Custom Columns',
          description: 'Footer with custom link sections.',
          code: `import { Footer } from '@ux4g/react-core';

function Example() {
  return (
    <Footer
      variant="government"
      columns={[
        {
          title: 'Services',
          links: [
            { label: 'Apply Online', href: '/services/apply' },
            { label: 'Track Application', href: '/services/track' },
            { label: 'Download Certificate', href: '/services/download' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Documentation', href: '/docs' },
            { label: 'FAQs', href: '/faqs' },
            { label: 'Support', href: '/support' },
          ],
        },
      ]}
    />
  );
}`,
          preview: <FooterPreview variant="government" showSocial columns={2} />,
        },
        {
          title: 'Light Variant',
          description: 'Light footer variant for internal applications.',
          code: `import { Footer } from '@ux4g/react-core';

function Example() {
  return (
    <Footer
      variant="light"
      description="Internal admin portal"
      showSocial={false}
    />
  );
}`,
          preview: <FooterPreview variant="light" showSocial={false} />,
        },
      ]}

      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { FooterProps } from './Footer.types';

export const Footer: React.FC<FooterProps> = ({
  variant = 'government',
  columns = [],
  showSocial = true,
  socialLinks = {},
  contactInfo = {},
  copyright,
  legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
  logo,
  description,
  className,
  ...props
}) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright || \`© \${currentYear} Government of India. All rights reserved.\`;

  const baseClasses = cn(
    'w-full',
    variant === 'government' && 'bg-[#005196] text-white',
    variant === 'light' && 'bg-muted text-foreground',
    variant === 'dark' && 'bg-gray-900 text-white',
    className
  );

  return (
    <footer className={baseClasses} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            {logo}
            {description && (
              <p className="text-sm opacity-80 mt-4">{description}</p>
            )}
          </div>

          {/* Custom Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2 text-sm">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:opacity-80 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          {(contactInfo.email || contactInfo.phone || contactInfo.address) && (
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                {contactInfo.email && (
                  <li className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href={\`mailto:\${contactInfo.email}\`}>{contactInfo.email}</a>
                  </li>
                )}
                {contactInfo.phone && (
                  <li className="flex items-center gap-2">
                    <Phone size={16} />
                    <a href={\`tel:\${contactInfo.phone}\`}>{contactInfo.phone}</a>
                  </li>
                )}
                {contactInfo.address && (
                  <li className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{contactInfo.address}</span>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Social Media */}
          {showSocial && (
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    className="p-2 hover:bg-card/10 rounded"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    className="p-2 hover:bg-card/10 rounded"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    className="p-2 hover:bg-card/10 rounded"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {socialLinks.youtube && (
                  <a
                    href={socialLinks.youtube}
                    className="p-2 hover:bg-card/10 rounded"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-current/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="opacity-80">{copyrightText}</p>
          {legalLinks.length > 0 && (
            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};`,
        types: `export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'government' | 'light' | 'dark';
  columns?: FooterColumn[];
  showSocial?: boolean;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  copyright?: string;
  legalLinks?: Array<{ label: string; href: string }>;
  logo?: React.ReactNode;
  description?: string;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const footerVariants = cva(
  ['w-full'],
  {
    variants: {
      variant: {
        government: 'bg-[#005196] text-white',
        light: 'bg-muted text-foreground',
        dark: 'bg-gray-900 text-white',
      },
    },
    defaultVariants: {
      variant: 'government',
    },
  }
);`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

@Component({
  selector: 'ux4g-footer',
  template: \`
    <footer [class]="getFooterClasses()">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- About -->
          <div>
            <ng-content select="[slot=logo]"></ng-content>
            <p *ngIf="description" class="text-sm opacity-80 mt-4">
              {{ description }}
            </p>
          </div>

          <!-- Columns -->
          <div *ngFor="let column of columns">
            <h3 class="font-semibold text-lg mb-4">{{ column.title }}</h3>
            <ul class="space-y-2 text-sm">
              <li *ngFor="let link of column.links">
                <a [href]="link.href" class="hover:opacity-80 transition-opacity">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Social Media -->
          <div *ngIf="showSocial">
            <h3 class="font-semibold text-lg mb-4">Follow Us</h3>
            <div class="flex gap-3">
              <a
                *ngIf="socialLinks.facebook"
                [href]="socialLinks.facebook"
                class="p-2 hover:bg-card/10 rounded"
                aria-label="Facebook"
              >
                <ux4g-icon name="facebook" size="20"></ux4g-icon>
              </a>
              <a
                *ngIf="socialLinks.twitter"
                [href]="socialLinks.twitter"
                class="p-2 hover:bg-card/10 rounded"
                aria-label="Twitter"
              >
                <ux4g-icon name="twitter" size="20"></ux4g-icon>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-current/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p class="opacity-80">{{ getCopyrightText() }}</p>
          <div class="flex gap-6">
            <a
              *ngFor="let link of legalLinks"
              [href]="link.href"
              class="hover:opacity-80 transition-opacity"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  \`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() variant: 'government' | 'light' | 'dark' = 'government';
  @Input() columns: FooterColumn[] = [];
  @Input() showSocial = true;
  @Input() socialLinks: any = {};
  @Input() description?: string;
  @Input() copyright?: string;
  @Input() legalLinks: Array<{ label: string; href: string }> = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  getFooterClasses(): string {
    const classes = ['w-full'];
    if (this.variant === 'government') {
      classes.push('bg-[#005196]', 'text-white');
    } else if (this.variant === 'light') {
      classes.push('bg-muted', 'text-foreground');
    } else {
      classes.push('bg-gray-900', 'text-white');
    }
    return classes.join(' ');
  }

  getCopyrightText(): string {
    return this.copyright || \`© \${new Date().getFullYear()} Government of India. All rights reserved.\`;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent]
})
export class FooterModule { }`,
        types: `export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export type FooterVariant = 'government' | 'light' | 'dark';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-footer> custom element",
        html: "<ux4g-footer variant=\"primary\" size=\"md\"><!-- Footer --></ux4g-footer>",
      }}
      comparisons={[
        {
          system: 'GOV.UK Design System',
          component: 'Footer',
          variants: 'default, with meta links, with navigation',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/footer/',
        },
        {
          system: 'U.S. Web Design System',
          component: 'Footer',
          variants: 'big, medium, slim',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://designsystem.digital.gov/components/footer/',
        },
        {
          system: 'Material UI',
          component: 'Footer (Custom)',
          variants: 'custom layouts',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Moderate',
          link: 'https://mui.com/material-ui/getting-started/',
        },
        {
          system: 'Bootstrap',
          component: 'Footer (Custom)',
          variants: 'utility-based layouts',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://getbootstrap.com/docs/5.3/examples/footers/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic HTML5 footer element',
          'Proper heading hierarchy for footer sections',
          'ARIA labels on social media icon links',
          'Keyboard accessible navigation links',
          'Touch-friendly click targets (44x44px minimum)',
          'Sufficient color contrast for all text',
          'Descriptive link text (no "click here" or "read more")',
          'Email and phone links with proper href formatting',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate through footer links' },
          { key: 'Shift + Tab', action: 'Navigate backwards through links' },
          { key: 'Enter', action: 'Activate focused link' },
        ],
        screenReader: [
          'Announces footer as contentinfo landmark',
          'Announces section headings properly',
          'Reads social media links with proper labels',
          'Announces link purposes clearly',
        ],
      }}

      tokens={{
        file: '/tokens/components/footer.json',
        mappings: [
          { property: 'Padding Vertical', token: 'footer.padding.vertical', value: '48px (3rem)' },
          { property: 'Padding Horizontal', token: 'footer.padding.horizontal', value: '16px (1rem)' },
          { property: 'Background (Government)', token: 'footer.background.government', value: '#005196 (Navy 500)' },
          { property: 'Background (Light)', token: 'footer.background.light', value: '#F3F4F6 (Gray 100)' },
          { property: 'Column Gap', token: 'footer.column.gap', value: '32px (2rem)' },
          { property: 'Section Title Size', token: 'footer.title.fontSize', value: '18px (1.125rem)' },
          { property: 'Link Size', token: 'footer.link.fontSize', value: '14px (0.875rem)' },
        ],
      }}

      useCases={[
        { title: 'Government Portal Footer', description: 'Standard footer with ministry links, helpline, and NIC branding.', scenario: 'All pages show footer with ministry contact and accessibility links.', implementation: '<Footer links={govLinks} copyright="Government of India" helpline="1800-XXX-XXXX" />' },
        { title: 'Service Portal Footer', description: 'Footer with social media links and app download badges.', scenario: 'Citizen portal footer shows mobile app links and social handles.', implementation: '<Footer socialLinks={social} appLinks={appStores} />' },
        { title: 'Multilingual Footer', description: 'Footer with language selector and regional office links.', scenario: 'State portal footer shows regional language options and district offices.', implementation: '<Footer languageSelector showRegionalOffices />' },
        { title: 'Compliance Footer', description: 'Footer with privacy policy, terms, and GIGW compliance badge.', scenario: 'All government sites show GIGW compliance and accessibility statement.', implementation: '<Footer compliance={["GIGW","WCAG-AA"]} privacyPolicy termsOfUse />' },
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
                  Do use Footer when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Page-level footer with navigation links</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Copyright and legal information</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Contact and helpline details</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Social media and external links</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Footer when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Section footers — use a div with styling</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Card footers — use Card footer slot</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Modal footers — use Modal footer slot</li>
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
                  <p className="text-sm text-muted-foreground">Include key navigation links in the footer — users who reach it are 3x more likely to use them.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t duplicate the entire header navigation in the footer.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/header" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Header</h3>
                <p className="text-sm text-muted-foreground">For page header</p>
              </a>
              <a href="/components/section" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Section</h3>
                <p className="text-sm text-muted-foreground">For page sections</p>
              </a>
              <a href="/components/divider" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Divider</h3>
                <p className="text-sm text-muted-foreground">For visual separation</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added multi-column layout</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added social media links</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic footer</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Footer as safety net</h3>
                <p className="text-sm text-muted-foreground">Users who reach the footer are 3x more likely to use footer navigation than scroll back up (NNG). Include key links.</p>
              </div>
            </div>
          </section>
        
          {/* Interactive Playground */}
          <div className="mb-8">
            <FooterPlayground />
          </div>

          </>
      }
    />
  );
}