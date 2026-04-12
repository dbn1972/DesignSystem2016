import{j as e}from"./index-BYMLq1ET.js";import{C as g}from"./ComponentDocumentation-CxrYZXwp.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const t=({variant:a,spacing:r,background:i,containerized:o,children:n,id:s,ariaLabel:c,className:l,...d})=>{const m=()=>{switch(i){case"white":return"bg-white";case"gray":return"bg-gray-50";case"primary":return"bg-[#005196]";case"transparent":return"bg-transparent";default:return"bg-white"}},p=()=>{switch(r){case"sm":return"py-4";case"md":return"py-8";case"lg":return"py-12";case"xl":return"py-16";default:return"py-8"}},u=()=>{switch(a){case"hero":return"banner";case"footer":return"contentinfo";case"content":case"default":default:return"region"}};return e.jsx("section",{id:s,role:u(),"aria-label":c,className:`${m()} ${p()} ${l||""}`,...d,children:o?e.jsx("div",{className:"container mx-auto px-4 max-w-7xl",children:n}):n})};function y(){return e.jsx(g,{name:"Section",description:"Semantic page section component for structuring content blocks, hero banners, service areas, and footer regions. Provides consistent spacing, backgrounds, and containerization with proper accessibility landmarks.",category:"Layout",maturity:"stable",tier:"foundations",since:"v1.0.0",updated:"v2.3.0",props:[{name:"variant",type:"'default' | 'hero' | 'content' | 'footer'",default:"'default'",required:!1,description:'Semantic variant of the section. Default for general sections, hero for banner areas (role="banner"), content for main content regions, footer for page footers (role="contentinfo").'},{name:"spacing",type:"'sm' | 'md' | 'lg' | 'xl'",default:"'md'",required:!1,description:"Vertical padding size. Small (16px), Medium (32px), Large (48px), Extra Large (64px)."},{name:"background",type:"'white' | 'gray' | 'primary' | 'transparent'",default:"'white'",required:!1,description:"Background color of the section. White for default, gray for alternating sections, primary for emphasis, transparent for overlays."},{name:"containerized",type:"boolean",default:"true",required:!1,description:"Whether to wrap content in a centered container with max-width. Set to false for full-bleed layouts."},{name:"children",type:"ReactNode",required:!0,description:"Section content (text, components, or elements)."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with section classes."},{name:"id",type:"string",required:!1,description:"HTML id attribute for anchor links and navigation."},{name:"ariaLabel",type:"string",required:!1,description:"Accessible label for the section. Required for proper landmark navigation."}],examples:[{title:"Hero Section",description:"Large hero banner with primary background and extra spacing.",code:`import { Section } from '@ux4g/react-core';

function Example() {
  return (
    <Section
      variant="hero"
      background="primary"
      spacing="xl"
      ariaLabel="Main hero banner"
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Government Services
        </h1>
        <p className="text-xl mb-8">
          Access essential services and information
        </p>
        <button className="bg-white text-[#005196] px-6 py-3 rounded">
          Get Started
        </button>
      </div>
    </Section>
  );
}`,preview:e.jsx(t,{variant:"hero",background:"primary",spacing:"xl",ariaLabel:"Main hero banner",children:e.jsxs("div",{className:"text-center text-white",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Welcome to Government Services"}),e.jsx("p",{className:"text-xl mb-8",children:"Access essential services and information"}),e.jsx("button",{className:"bg-white text-[#005196] px-6 py-3 rounded",children:"Get Started"})]})})},{title:"Content Section",description:"Standard content section with default white background.",code:`import { Section } from '@ux4g/react-core';

function Example() {
  return (
    <Section
      variant="content"
      spacing="md"
      ariaLabel="Main content"
    >
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <p className="text-gray-700 mb-4">
        We provide a wide range of government services to help
        citizens access the information and support they need.
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>License and permit applications</li>
        <li>Tax filing and payment</li>
        <li>Healthcare enrollment</li>
        <li>Business registration</li>
      </ul>
    </Section>
  );
}`,preview:e.jsxs(t,{variant:"content",spacing:"md",ariaLabel:"Main content",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Our Services"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"We provide a wide range of government services to help citizens access the information and support they need."}),e.jsxs("ul",{className:"list-disc pl-6 text-gray-700",children:[e.jsx("li",{children:"License and permit applications"}),e.jsx("li",{children:"Tax filing and payment"}),e.jsx("li",{children:"Healthcare enrollment"}),e.jsx("li",{children:"Business registration"})]})]})},{title:"Alternate Background",description:"Gray background for visual separation between sections.",code:`import { Section } from '@ux4g/react-core';

function Example() {
  return (
    <Section
      variant="content"
      background="gray"
      spacing="lg"
      ariaLabel="Statistics section"
    >
      <div className="grid grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-[#005196] mb-2">1.2M</div>
          <div className="text-gray-600">Active Users</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#005196] mb-2">50K</div>
          <div className="text-gray-600">Services Provided</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#005196] mb-2">98%</div>
          <div className="text-gray-600">Satisfaction Rate</div>
        </div>
      </div>
    </Section>
  );
}`,preview:e.jsx(t,{variant:"content",background:"gray",spacing:"lg",ariaLabel:"Statistics section",children:e.jsxs("div",{className:"grid grid-cols-3 gap-8 text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-4xl font-bold text-[#005196] mb-2",children:"1.2M"}),e.jsx("div",{className:"text-gray-600",children:"Active Users"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-4xl font-bold text-[#005196] mb-2",children:"50K"}),e.jsx("div",{className:"text-gray-600",children:"Services Provided"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-4xl font-bold text-[#005196] mb-2",children:"98%"}),e.jsx("div",{className:"text-gray-600",children:"Satisfaction Rate"})]})]})})},{title:"Compact Spacing",description:"Smaller vertical spacing for dense layouts.",code:`import { Section } from '@ux4g/react-core';

function Example() {
  return (
    <Section
      variant="content"
      spacing="sm"
      ariaLabel="Quick links"
    >
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <nav className="flex gap-4">
        <a href="#" className="text-[#005196] hover:underline">Home</a>
        <a href="#" className="text-[#005196] hover:underline">Services</a>
        <a href="#" className="text-[#005196] hover:underline">About</a>
        <a href="#" className="text-[#005196] hover:underline">Contact</a>
      </nav>
    </Section>
  );
}`,preview:e.jsxs(t,{variant:"content",spacing:"sm",ariaLabel:"Quick links",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Quick Links"}),e.jsxs("nav",{className:"flex gap-4",children:[e.jsx("a",{href:"#",className:"text-[#005196] hover:underline",children:"Home"}),e.jsx("a",{href:"#",className:"text-[#005196] hover:underline",children:"Services"}),e.jsx("a",{href:"#",className:"text-[#005196] hover:underline",children:"About"}),e.jsx("a",{href:"#",className:"text-[#005196] hover:underline",children:"Contact"})]})]})},{title:"Full Width",description:"Non-containerized section for full-width layouts.",code:`import { Section } from '@ux4g/react-core';

function Example() {
  return (
    <Section
      variant="content"
      background="primary"
      spacing="lg"
      containerized={false}
      ariaLabel="Full width banner"
    >
      <div className="text-center text-white px-4">
        <h2 className="text-3xl font-bold mb-2">
          Important Announcement
        </h2>
        <p className="text-lg">
          New services are now available across all regions
        </p>
      </div>
    </Section>
  );
}`,preview:e.jsx(t,{variant:"content",background:"primary",spacing:"lg",containerized:!1,ariaLabel:"Full width banner",children:e.jsxs("div",{className:"text-center text-white px-4",children:[e.jsx("h2",{className:"text-3xl font-bold mb-2",children:"Important Announcement"}),e.jsx("p",{className:"text-lg",children:"New services are now available across all regions"})]})})},{title:"Government Service Section",description:"Real-world example of a government service section with proper structure.",code:`import { Section } from '@ux4g/react-core';
import { FileText, Users, Calendar } from 'lucide-react';

function Example() {
  return (
    <Section
      variant="content"
      spacing="lg"
      id="services"
      ariaLabel="Available government services"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Available Services
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <FileText className="w-12 h-12 text-[#005196] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Document Services</h3>
          <p className="text-gray-600 mb-4">
            Apply for permits, licenses, and official documents online.
          </p>
          <a href="#" className="text-[#005196] hover:underline">
            Learn more →
          </a>
        </div>
        <div className="border rounded-lg p-6">
          <Users className="w-12 h-12 text-[#005196] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Citizen Portal</h3>
          <p className="text-gray-600 mb-4">
            Access your personal information and service history.
          </p>
          <a href="#" className="text-[#005196] hover:underline">
            Learn more →
          </a>
        </div>
        <div className="border rounded-lg p-6">
          <Calendar className="w-12 h-12 text-[#005196] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Appointments</h3>
          <p className="text-gray-600 mb-4">
            Schedule appointments with government offices.
          </p>
          <a href="#" className="text-[#005196] hover:underline">
            Learn more →
          </a>
        </div>
      </div>
    </Section>
  );
}`,preview:e.jsxs(t,{variant:"content",spacing:"lg",id:"services",ariaLabel:"Available government services",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Available Services"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"border rounded-lg p-6",children:[e.jsx("div",{className:"w-12 h-12 bg-[#005196] rounded mb-4"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Document Services"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Apply for permits, licenses, and official documents online."}),e.jsx("a",{href:"#",className:"text-[#005196] hover:underline",children:"Learn more →"})]}),e.jsxs("div",{className:"border rounded-lg p-6",children:[e.jsx("div",{className:"w-12 h-12 bg-[#005196] rounded mb-4"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Citizen Portal"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Access your personal information and service history."}),e.jsx("a",{href:"#",className:"text-[#005196] hover:underline",children:"Learn more →"})]}),e.jsxs("div",{className:"border rounded-lg p-6",children:[e.jsx("div",{className:"w-12 h-12 bg-[#005196] rounded mb-4"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Appointments"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Schedule appointments with government offices."}),e.jsx("a",{href:"#",className:"text-[#005196] hover:underline",children:"Learn more →"})]})]})]})}],reactCode:{component:`import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { sectionVariants } from './section.variants';
import { SectionProps } from './Section.types';

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      className,
      variant = 'default',
      spacing = 'md',
      background = 'white',
      containerized = true,
      id,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const getRole = () => {
      switch (variant) {
        case 'hero':
          return 'banner';
        case 'footer':
          return 'contentinfo';
        case 'content':
        case 'default':
        default:
          return 'region';
      }
    };

    const content = containerized ? (
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        id={id}
        role={getRole()}
        aria-label={ariaLabel}
        className={cn(
          sectionVariants({ spacing, background }),
          className
        )}
        {...props}
      >
        {content}
      </section>
    );
  }
);

Section.displayName = 'Section';`,types:`export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
          SectionVariantProps {
  children: React.ReactNode;
  variant?: 'default' | 'hero' | 'content' | 'footer';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'primary' | 'transparent';
  containerized?: boolean;
  id?: string;
  ariaLabel?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const sectionVariants = cva(
  [
    'w-full',
  ],
  {
    variants: {
      spacing: {
        sm: ['py-4'],
        md: ['py-8'],
        lg: ['py-12'],
        xl: ['py-16'],
      },
      background: {
        white: ['bg-white'],
        gray: ['bg-gray-50'],
        primary: ['bg-[#005196]', 'text-white'],
        transparent: ['bg-transparent'],
      },
    },
    defaultVariants: {
      spacing: 'md',
      background: 'white',
    },
  }
);

export type SectionVariantProps = VariantProps<typeof sectionVariants>;`},angularCode:{component:`import { Component, Input } from '@angular/core';

type SectionVariant = 'default' | 'hero' | 'content' | 'footer';
type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl';
type SectionBackground = 'white' | 'gray' | 'primary' | 'transparent';

@Component({
  selector: 'ux4g-section',
  template: \`
    <section
      [id]="id"
      [attr.role]="getRole()"
      [attr.aria-label]="ariaLabel"
      [class]="getSectionClasses()"
    >
      <div *ngIf="containerized" class="container mx-auto px-4 max-w-7xl">
        <ng-content></ng-content>
      </div>
      <ng-content *ngIf="!containerized"></ng-content>
    </section>
  \`,
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() variant: SectionVariant = 'default';
  @Input() spacing: SectionSpacing = 'md';
  @Input() background: SectionBackground = 'white';
  @Input() containerized = true;
  @Input() id?: string;
  @Input() ariaLabel?: string;

  getRole(): string {
    switch (this.variant) {
      case 'hero':
        return 'banner';
      case 'footer':
        return 'contentinfo';
      case 'content':
      case 'default':
      default:
        return 'region';
    }
  }

  getSectionClasses(): string {
    const baseClasses = 'ux4g-section w-full';
    const spacingClass = \`ux4g-section-spacing-\${this.spacing}\`;
    const backgroundClass = \`ux4g-section-bg-\${this.background}\`;

    return [baseClasses, spacingClass, backgroundClass]
      .filter(Boolean)
      .join(' ');
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule],
  exports: [SectionComponent]
})
export class SectionModule { }`,types:`export type SectionVariant = 'default' | 'hero' | 'content' | 'footer';
export type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl';
export type SectionBackground = 'white' | 'gray' | 'primary' | 'transparent';`},comparisons:[{system:"Chakra UI",component:"Box / Container",variants:"Custom via props",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/container"},{system:"Material UI (Google)",component:"Container",variants:"maxWidth: xs, sm, md, lg, xl",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-container/"},{system:"GOV.UK Design System",component:"Section / Width Container",variants:"Default, full-width",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/styles/layout/"},{system:"Ant Design (Alibaba)",component:"Layout.Content",variants:"Custom via className",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/layout"},{system:"Bootstrap",component:"Container / Section",variants:"container, container-fluid",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://getbootstrap.com/docs/5.3/layout/containers/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Semantic HTML section element for proper document structure","Appropriate ARIA roles based on variant (banner, contentinfo, region)","aria-label support for landmark navigation","Proper heading hierarchy for screen reader navigation","Sufficient color contrast for all background variants (WCAG 1.4.3)","Responsive spacing that adapts to viewport size","Keyboard navigation support through native HTML semantics","Skip link targets via id attribute"],keyboardSupport:[{key:"Tab",action:"Navigate through interactive elements within section"},{key:"Shift + Tab",action:"Navigate backwards through interactive elements"}],screenReader:["Announces section as a landmark region","Reads aria-label to identify section purpose","Announces role (banner, contentinfo, or region)","Provides navigation shortcuts to major page sections","Supports landmark navigation (NVDA: D key, JAWS: R key)"]},tokens:{file:"/tokens/components/section.json",mappings:[{property:"Spacing Small",token:"section.spacing.sm",value:"16px"},{property:"Spacing Medium",token:"section.spacing.md",value:"32px"},{property:"Spacing Large",token:"section.spacing.lg",value:"48px"},{property:"Spacing XL",token:"section.spacing.xl",value:"64px"},{property:"Container Max Width",token:"section.container.maxWidth",value:"1280px (7xl)"},{property:"Container Padding",token:"section.container.padding",value:"16px"},{property:"Background White",token:"section.background.white",value:"#FFFFFF"},{property:"Background Gray",token:"section.background.gray",value:"#F9FAFB (Gray 50)"},{property:"Background Primary",token:"section.background.primary",value:"#005196 (Navy 500)"}]}})}export{y as default};
