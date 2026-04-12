import{j as e,k as a,m as r}from"./index-wYwTiNL-.js";import{C as s}from"./ComponentDocumentation-DKnXH-Pi.js";import{M as n}from"./map-pin-V3RJ2AFx.js";import{F as l,T as c,L as m,Y as p}from"./youtube-BKE_4KlF.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const t=({variant:o,showSocial:i,columns:d})=>e.jsx("footer",{className:`w-full ${o==="government"?"bg-[#000080] text-white":o==="light"?"bg-gray-100 text-gray-900":"bg-gray-900 text-white"}`,children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg mb-4",children:"About Us"}),e.jsx("p",{className:"text-sm opacity-80 mb-4",children:"Government of India's unified digital platform for citizen services and information."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg mb-4",children:"Quick Links"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"Services"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"About"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"Help"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg mb-4",children:"Contact"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(a,{size:16}),e.jsx("span",{children:"support@gov.in"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(r,{size:16}),e.jsx("span",{children:"1800-XXX-XXXX"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(n,{size:16}),e.jsx("span",{children:"New Delhi, India"})]})]})]}),i&&e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg mb-4",children:"Follow Us"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("a",{href:"#",className:"p-2 hover:bg-white/10 rounded","aria-label":"Facebook",children:e.jsx(l,{size:20})}),e.jsx("a",{href:"#",className:"p-2 hover:bg-white/10 rounded","aria-label":"Twitter",children:e.jsx(c,{size:20})}),e.jsx("a",{href:"#",className:"p-2 hover:bg-white/10 rounded","aria-label":"LinkedIn",children:e.jsx(m,{size:20})}),e.jsx("a",{href:"#",className:"p-2 hover:bg-white/10 rounded","aria-label":"YouTube",children:e.jsx(p,{size:20})})]})]})]}),e.jsxs("div",{className:"border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm",children:[e.jsx("p",{className:"opacity-80",children:"© 2026 Government of India. All rights reserved."}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"Privacy Policy"}),e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"Terms of Service"}),e.jsx("a",{href:"#",className:"hover:opacity-80 transition-opacity",children:"Accessibility"})]})]})]})});function b(){return e.jsx(s,{name:"Footer",description:"Consistent footer component for government portals providing links to important information, contact details, social media, and legal notices.",category:"Navigation",maturity:"stable",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"variant",type:"'government' | 'light' | 'dark'",default:"'government'",required:!1,description:"Visual variant. Government uses navy blue, light uses gray-100, dark uses gray-900."},{name:"columns",type:"Array<{ title: string; links: Array<{ label: string; href: string }> }>",required:!1,description:"Footer columns with links."},{name:"showSocial",type:"boolean",default:"true",required:!1,description:"Show social media icons."},{name:"socialLinks",type:"{ facebook?: string; twitter?: string; linkedin?: string; youtube?: string; instagram?: string }",required:!1,description:"Social media profile URLs."},{name:"contactInfo",type:"{ email?: string; phone?: string; address?: string }",required:!1,description:"Contact information to display."},{name:"copyright",type:"string",required:!1,description:'Copyright text. Defaults to "© {year} Government of India".'},{name:"legalLinks",type:"Array<{ label: string; href: string }>",required:!1,description:"Legal/policy links (Privacy, Terms, etc.)."},{name:"logo",type:"ReactNode",required:!1,description:"Custom footer logo."},{name:"description",type:"string",required:!1,description:"Short description or tagline."}],examples:[{title:"Government Variant",description:"Default footer with government branding.",code:`import { Footer } from '@ux4g/react-core';

function Example() {
  return (
    <Footer
      variant="government"
      description="Government of India's unified digital platform"
      showSocial
    />
  );
}`,preview:e.jsx(t,{variant:"government",showSocial:!0})},{title:"With Custom Columns",description:"Footer with custom link sections.",code:`import { Footer } from '@ux4g/react-core';

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
}`,preview:e.jsx(t,{variant:"government",showSocial:!0,columns:2})},{title:"Light Variant",description:"Light footer variant for internal applications.",code:`import { Footer } from '@ux4g/react-core';

function Example() {
  return (
    <Footer
      variant="light"
      description="Internal admin portal"
      showSocial={false}
    />
  );
}`,preview:e.jsx(t,{variant:"light",showSocial:!1})}],reactCode:{component:`import React from 'react';
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
    variant === 'light' && 'bg-gray-100 text-gray-900',
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
                    className="p-2 hover:bg-white/10 rounded"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    className="p-2 hover:bg-white/10 rounded"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    className="p-2 hover:bg-white/10 rounded"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {socialLinks.youtube && (
                  <a
                    href={socialLinks.youtube}
                    className="p-2 hover:bg-white/10 rounded"
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
};`,types:`export interface FooterColumn {
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
}`,variants:`import { cva } from 'class-variance-authority';

export const footerVariants = cva(
  ['w-full'],
  {
    variants: {
      variant: {
        government: 'bg-[#005196] text-white',
        light: 'bg-gray-100 text-gray-900',
        dark: 'bg-gray-900 text-white',
      },
    },
    defaultVariants: {
      variant: 'government',
    },
  }
);`},angularCode:{component:`import { Component, Input } from '@angular/core';

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
                class="p-2 hover:bg-white/10 rounded"
                aria-label="Facebook"
              >
                <ux4g-icon name="facebook" size="20"></ux4g-icon>
              </a>
              <a
                *ngIf="socialLinks.twitter"
                [href]="socialLinks.twitter"
                class="p-2 hover:bg-white/10 rounded"
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
      classes.push('bg-gray-100', 'text-gray-900');
    } else {
      classes.push('bg-gray-900', 'text-white');
    }
    return classes.join(' ');
  }

  getCopyrightText(): string {
    return this.copyright || \`© \${new Date().getFullYear()} Government of India. All rights reserved.\`;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent]
})
export class FooterModule { }`,types:`export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export type FooterVariant = 'government' | 'light' | 'dark';`},comparisons:[{system:"GOV.UK Design System",component:"Footer",variants:"default, with meta links, with navigation",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/footer/"},{system:"U.S. Web Design System",component:"Footer",variants:"big, medium, slim",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://designsystem.digital.gov/components/footer/"},{system:"Material UI",component:"Footer (Custom)",variants:"custom layouts",accessibility:"WCAG 2.1 AA",documentation:"Moderate",link:"https://mui.com/material-ui/getting-started/"},{system:"Bootstrap",component:"Footer (Custom)",variants:"utility-based layouts",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://getbootstrap.com/docs/5.3/examples/footers/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Semantic HTML5 footer element","Proper heading hierarchy for footer sections","ARIA labels on social media icon links","Keyboard accessible navigation links","Touch-friendly click targets (44x44px minimum)","Sufficient color contrast for all text",'Descriptive link text (no "click here" or "read more")',"Email and phone links with proper href formatting"],keyboardSupport:[{key:"Tab",action:"Navigate through footer links"},{key:"Shift + Tab",action:"Navigate backwards through links"},{key:"Enter",action:"Activate focused link"}],screenReader:["Announces footer as contentinfo landmark","Announces section headings properly","Reads social media links with proper labels","Announces link purposes clearly"]},tokens:{file:"/tokens/components/footer.json",mappings:[{property:"Padding Vertical",token:"footer.padding.vertical",value:"48px (3rem)"},{property:"Padding Horizontal",token:"footer.padding.horizontal",value:"16px (1rem)"},{property:"Background (Government)",token:"footer.background.government",value:"#005196 (Navy 500)"},{property:"Background (Light)",token:"footer.background.light",value:"#F3F4F6 (Gray 100)"},{property:"Column Gap",token:"footer.column.gap",value:"32px (2rem)"},{property:"Section Title Size",token:"footer.title.fontSize",value:"18px (1.125rem)"},{property:"Link Size",token:"footer.link.fontSize",value:"14px (0.875rem)"}]}})}export{b as default};
