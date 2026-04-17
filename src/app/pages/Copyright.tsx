import { Copyright as CopyrightIcon, FileText, Scale, AlertCircle, CheckCircle, Users, Globe, Code, Download, Share2, BookOpen, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import LegalPageLayout, { LegalSection } from "../components/LegalPageLayout";

export default function Copyright() {
  const { i18n } = useTranslation();
  const c = i18n.resolvedLanguage === 'hi' ? COPYRIGHT_HI : COPYRIGHT_EN;

  const toc = [
    { id: 'copyright-notice', label: 'Copyright Notice' },
    { id: 'license-terms', label: 'License Terms' },
    { id: 'usage-rights', label: 'Usage Rights' },
    { id: 'attribution', label: 'Attribution Requirements' },
    { id: 'third-party', label: 'Third-Party Licenses' },
    { id: 'government-branding', label: 'Government Branding' },
    { id: 'commercial-use', label: 'Commercial Use' },
    { id: 'contributor-rights', label: 'Contributor Rights' },
    { id: 'trademark', label: 'Trademark Policy' },
    { id: 'contact', label: 'Questions & Permissions' },
  ];

  return (
    <LegalPageLayout
      badge={c.badge}
      badgeIcon={<CopyrightIcon size={14} className="text-primary" />}
      heroIcon={<CopyrightIcon size={30} />}
      title={c.title}
      description={c.description}
      date="April 12, 2026"
      dateLabel={c.dateLabel}
      sidebarEyebrow={c.sidebarEyebrow}
      sidebarTitle={c.sidebarTitle}
      sidebarPill={c.sidebarPill}
      metrics={[
        { value: 'MIT', label: c.metricSections },
        { value: 'Open Source', label: c.metricOpen },
        { value: 'Free', label: c.metricFree },
        { value: 'Attribution', label: c.metricAttribution },
      ]}
      note={{ title: c.noteTitle, text: c.noteText }}
      breadcrumbTitle={c.title}
      breadcrumbHome={c.breadcrumbHome}
      breadcrumbGovernance={c.breadcrumbGovernance}
      toc={toc}
      footerQuestion={c.footerQuestion}
      footerDesc={c.footerDesc}
    >
        <CopyrightNoticeSection />
        <LicenseTermsSection />
        <UsageRightsSection />
        <AttributionRequirementsSection />
        <ThirdPartyLicensesSection />
        <GovernmentBrandingSection />
        <CommercialUseSection />
        <ContributorRightsSection />
        <TrademarkPolicySection />
        <ContactSection />
    </LegalPageLayout>
  );
}

function CopyrightNoticeSection() {
  return (
    <section id="copyright-notice">
      <SectionHeader
        title="Copyright Notice"
        description="Official copyright statement for the UX4G Design System"
        icon={<CopyrightIcon size={28} />}
      />

      <div className="mt-8 space-y-6">
        {/* Primary Copyright */}
        <div className="border-2 border-border rounded-lg p-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
              <CopyrightIcon className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                © 2024-2026 Government of India
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                UX4G Design System is copyright © 2024-2026 Government of India. All rights reserved
                except as explicitly granted under the terms of the MIT License.
              </p>
              <div className="bg-card border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 font-mono text-sm text-foreground">
                Copyright © 2024-2026 Government of India<br />
                UX4G Design System<br />
                Licensed under the MIT License
              </div>
            </div>
          </div>
        </div>

        {/* Scope of Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CopyrightScopeCard
            title="Covered Materials"
            items={[
              'Source code and component libraries',
              'Design specifications and guidelines',
              'Documentation and examples',
              'Visual design assets and icons',
              'Figma design files and templates',
              'Typography and design tokens'
            ]}
            icon={<CheckCircle className="text-green-600" size={20} />}
          />

          <CopyrightScopeCard
            title="Not Covered"
            items={[
              'Government of India official emblems',
              'State Emblem (Ashoka Pillar)',
              'National Flag of India',
              'Individual department logos',
              'Third-party dependencies',
              'User-created implementations'
            ]}
            icon={<AlertCircle className="text-orange-600" size={20} />}
          />
        </div>
      </div>
    </section>
  );
}

function CopyrightScopeCard({ title, items, icon }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background border-b-2 border-border p-4 flex items-center gap-2">
        {icon}
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-muted-foreground mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LicenseTermsSection() {
  return (
    <section id="license-terms">
      <SectionHeader
        title="License Terms"
        description="MIT License - Open source and permissive"
        icon={<Scale size={28} />}
      />

      <div className="mt-8 space-y-6">
        {/* MIT License Full Text */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b-2 border-border p-6">
            <h3 className="font-bold text-foreground text-xl mb-2">MIT License (Full Text)</h3>
            <p className="text-sm text-muted-foreground">
              The UX4G Design System is licensed under the MIT License, one of the most permissive
              and widely-used open source licenses.
            </p>
          </div>

          <div className="p-8 bg-background">
            <div className="bg-card border-2 border-border rounded-lg p-6 font-mono text-sm text-foreground leading-relaxed">
              <p className="mb-4">MIT License</p>

              <p className="mb-4">Copyright (c) 2024-2026 Government of India</p>

              <p className="mb-4">
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>

              <p className="mb-4">
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
              </p>

              <p className="mb-4">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
              </p>
            </div>
          </div>
        </div>

        {/* What This Means */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LicensePermission
            title="You Can"
            color="green"
            items={[
              'Use commercially',
              'Modify and adapt',
              'Distribute freely',
              'Use privately',
              'Sublicense'
            ]}
          />

          <LicensePermission
            title="You Must"
            color="blue"
            items={[
              'Include copyright notice',
              'Include license text',
              'State significant changes',
              'Provide attribution'
            ]}
          />

          <LicensePermission
            title="You Cannot"
            color="red"
            items={[
              'Hold liable',
              'Claim warranty',
              'Use trademark without permission',
              'Remove license notices'
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function LicensePermission({ title, color, items }: any) {
  const colorClasses = {
    green: 'border-green-200 dark:border-green-800 bg-green-50',
    blue: 'border-blue-200 dark:border-blue-800 bg-blue-50',
    red: 'border-red-200 dark:border-red-800 bg-red-50'
  };

  const iconColor = {
    green: 'text-green-600',
    blue: 'text-blue-600',
    red: 'text-red-600'
  };

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg p-6`}>
      <h3 className={`font-bold ${iconColor[color as keyof typeof iconColor]} mb-4 text-lg`}>{title}</h3>
      <ul className="space-y-2">
        {items.map((item: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle className={`flex-shrink-0 mt-0.5 ${iconColor[color as keyof typeof iconColor]}`} size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UsageRightsSection() {
  return (
    <section id="usage-rights">
      <SectionHeader
        title="Usage Rights"
        description="How you can use the UX4G Design System"
        icon={<Users size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UsageRightCard
            title="Government Use"
            description="Free and unrestricted use for all government departments and agencies"
            rights={[
              'No license fees or royalties',
              'Use across all government services',
              'Modify to meet department needs',
              'Deploy on government infrastructure',
              'Share across departments'
            ]}
            badge="Fully Authorized"
            badgeColor="green"
          />

          <UsageRightCard
            title="Public Sector Use"
            description="Permitted for public sector organizations and government contractors"
            rights={[
              'Free use for government projects',
              'Permitted for contracted work',
              'Must maintain government branding',
              'Attribution required',
              'Cannot sublicense for profit'
            ]}
            badge="Authorized"
            badgeColor="blue"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UsageRightCard
            title="Non-Commercial Use"
            description="Free for educational, research, and non-profit organizations"
            rights={[
              'Educational institutions',
              'Research organizations',
              'Non-profit initiatives',
              'Personal projects',
              'Attribution appreciated'
            ]}
            badge="Permitted"
            badgeColor="purple"
          />

          <UsageRightCard
            title="Commercial Use"
            description="Allowed with proper attribution and compliance"
            rights={[
              'Include copyright notice',
              'Provide attribution',
              'Comply with MIT license',
              'Cannot claim endorsement',
              'Follow trademark policy'
            ]}
            badge="Conditional"
            badgeColor="yellow"
          />
        </div>
      </div>
    </section>
  );
}

function UsageRightCard({ title, description, rights, badge, badgeColor }: any) {
  const badgeColors = {
    green: 'bg-green-100 text-green-700 border-green-300',
    blue: 'bg-blue-100 text-blue-700 border-blue-300',
    purple: 'bg-purple-100 text-purple-700 border-purple-300',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300'
  };

  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background border-b-2 border-border p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-foreground text-lg">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${badgeColors[badgeColor as keyof typeof badgeColors]}`}>
            {badge}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="p-6">
        <ul className="space-y-2">
          {rights.map((right: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-muted-foreground" size={14} />
              <span>{right}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AttributionRequirementsSection() {
  return (
    <section id="attribution">
      <SectionHeader
        title="Attribution Requirements"
        description="How to properly credit the UX4G Design System"
        icon={<FileText size={28} />}
      />

      <div className="mt-8 space-y-6">
        {/* Attribution Templates */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background border-b-2 border-border p-6">
            <h3 className="font-bold text-foreground mb-2">Attribution Templates</h3>
            <p className="text-sm text-muted-foreground">Copy and paste these attribution notices</p>
          </div>

          <div className="p-8 space-y-6">
            <AttributionTemplate
              title="Code Attribution (Comment in Source Files)"
              template={`/*
 * UX4G Design System
 * Copyright © 2024-2026 Government of India
 * Licensed under the MIT License
 * https://ux4g.gov.in
 */`}
            />

            <AttributionTemplate
              title="Documentation Attribution"
              template="This project uses the UX4G Design System, developed by the Government of India and licensed under the MIT License. For more information, visit https://ux4g.gov.in"
            />

            <AttributionTemplate
              title="Website Footer Attribution"
              template="Built with UX4G Design System | © 2024-2026 Government of India"
            />

            <AttributionTemplate
              title="Package.json Attribution"
              template={`{
  "name": "your-project",
  "dependencies": {
    "@ux4g/react": "^1.0.0"
  },
  "acknowledgments": "UX4G Design System by Government of India"
}`}
            />
          </div>
        </div>

        {/* Attribution Placement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Required Placement</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                <span>Source code files (as comments)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                <span>LICENSE or LICENSE.txt file in project root</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                <span>README or documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                <span>About page or credits section</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Optional (Appreciated)</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Share2 className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
                <span>Website footer</span>
              </li>
              <li className="flex items-start gap-2">
                <Share2 className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
                <span>Package metadata</span>
              </li>
              <li className="flex items-start gap-2">
                <Share2 className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
                <span>Blog posts or articles</span>
              </li>
              <li className="flex items-start gap-2">
                <Share2 className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
                <span>Conference presentations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AttributionTemplate({ title, template }: any) {
  return (
    <div>
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
        <pre className="whitespace-pre-wrap">{template}</pre>
      </div>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors flex items-center gap-2">
        <Download size={12} />
        Copy to Clipboard
      </button>
    </div>
  );
}

function ThirdPartyLicensesSection() {
  return (
    <section id="third-party">
      <SectionHeader
        title="Third-Party Licenses"
        description="Open source dependencies and their licenses"
        icon={<Code size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Acknowledgment of Dependencies</h3>
          <p className="text-sm text-muted-foreground mb-4">
            UX4G Design System is built on top of several excellent open source projects.
            We acknowledge and thank the maintainers of these projects.
          </p>
        </div>

        {/* Major Dependencies */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background border-b-2 border-border p-4">
            <h3 className="font-bold text-foreground">Major Dependencies</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-background border-b-2 border-border">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground">Package</th>
                  <th className="text-left p-4 font-semibold text-foreground">License</th>
                  <th className="text-left p-4 font-semibold text-foreground">Copyright</th>
                  <th className="text-left p-4 font-semibold text-foreground">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <DependencyRow
                  package="React"
                  license="MIT"
                  copyright="Meta Platforms, Inc."
                  link="https://react.dev"
                />
                <DependencyRow
                  package="Tailwind CSS"
                  license="MIT"
                  copyright="Tailwind Labs, Inc."
                  link="https://tailwindcss.com"
                />
                <DependencyRow
                  package="Lucide Icons"
                  license="ISC"
                  copyright="Lucide Contributors"
                  link="https://lucide.dev"
                />
                <DependencyRow
                  package="TypeScript"
                  license="Apache 2.0"
                  copyright="Microsoft Corporation"
                  link="https://www.typescriptlang.org"
                />
                <DependencyRow
                  package="Vite"
                  license="MIT"
                  copyright="Evan You & Vite Contributors"
                  link="https://vitejs.dev"
                />
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-background border-t-2 border-border">
            <p className="text-xs text-muted-foreground">
              For a complete list of dependencies and their licenses, see the package.json file in the repository.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DependencyRow({ package: pkg, license, copyright, link }: any) {
  return (
    <tr className="hover:bg-background">
      <td className="p-4 font-semibold text-foreground">{pkg}</td>
      <td className="p-4">
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
          {license}
        </span>
      </td>
      <td className="p-4 text-muted-foreground">{copyright}</td>
      <td className="p-4">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
          {link}
        </a>
      </td>
    </tr>
  );
}

function GovernmentBrandingSection() {
  return (
    <section id="government-branding">
      <SectionHeader
        title="Government Branding"
        description="Special restrictions on official government symbols"
        icon={<Globe size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-foreground mb-2">Important Restrictions</h3>
              <p className="text-sm text-muted-foreground">
                While the UX4G Design System is open source, certain government symbols and emblems are
                <strong className="text-foreground"> NOT covered by the MIT License</strong> and have separate usage restrictions
                under Indian law.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="text-red-600" size={20} />
              Restricted Symbols
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">⊗</span>
                <div>
                  <strong>State Emblem of India</strong> - Protected under State Emblem of India (Prohibition of Improper Use) Act, 2005
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">⊗</span>
                <div>
                  <strong>National Flag</strong> - Governed by Flag Code of India, 2002
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">⊗</span>
                <div>
                  <strong>Government Seals</strong> - Unauthorized use prohibited
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">⊗</span>
                <div>
                  <strong>Department Logos</strong> - Require specific authorization
                </div>
              </li>
            </ul>
          </div>

          <div className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20} />
              Permitted Use
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                <div>
                  <strong>UX4G Logo & Branding</strong> - Included under MIT License for design system projects
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                <div>
                  <strong>Color Palette</strong> - Tricolor-inspired colors can be used freely
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                <div>
                  <strong>Design Patterns</strong> - All UI patterns and components are open source
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                <div>
                  <strong>Icons & Illustrations</strong> - Design system assets are freely usable
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommercialUseSection() {
  return (
    <section id="commercial-use">
      <SectionHeader
        title="Commercial Use"
        description="Guidelines for commercial and for-profit use"
        icon={<Scale size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Commercial Use Policy</h3>
          <p className="text-muted-foreground mb-6">
            The MIT License permits commercial use of the UX4G Design System. However, commercial users
            must comply with certain requirements and restrictions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">✓ Permitted Activities</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Building commercial products using UX4G</li>
                <li>• Selling services that use UX4G components</li>
                <li>• Creating derivative works for clients</li>
                <li>• White-labeling with proper attribution</li>
                <li>• Integrating into SaaS products</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">✗ Prohibited Activities</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Claiming official government endorsement</li>
                <li>• Selling UX4G itself as a product</li>
                <li>• Removing copyright notices</li>
                <li>• Misrepresenting origin</li>
                <li>• Using government symbols without authorization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Attribution for Commercial Use</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Commercial users <strong>must include attribution</strong> in their products. This can be as simple
            as a line in your documentation or a credits section in your application.
          </p>
          <div className="bg-card border border-yellow-300 rounded p-4 text-sm text-foreground">
            "This product uses components from the UX4G Design System, developed by the Government of India."
          </div>
        </div>
      </div>
    </section>
  );
}

function ContributorRightsSection() {
  return (
    <section id="contributor-rights">
      <SectionHeader
        title="Contributor Rights"
        description="Rights and responsibilities of contributors"
        icon={<Users size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background border-b-2 border-border p-6">
            <h3 className="font-bold text-foreground mb-2">Contributor License Agreement (CLA)</h3>
            <p className="text-sm text-muted-foreground">
              By contributing to UX4G, you agree to the following terms
            </p>
          </div>

          <div className="p-6 space-y-4">
            <CLAPoint
              title="Copyright Assignment"
              description="Contributors retain copyright to their contributions but grant the Government of India a perpetual, worldwide, non-exclusive license to use, modify, and distribute the contribution under the MIT License."
            />

            <CLAPoint
              title="Original Work"
              description="Contributors certify that their contributions are original work or properly licensed, and that they have the right to submit the contribution under the MIT License."
            />

            <CLAPoint
              title="Patent Rights"
              description="Contributors grant a patent license for any patents that are necessarily infringed by their contribution, allowing the project to use and distribute the contribution without patent concerns."
            />

            <CLAPoint
              title="No Warranty"
              description="Contributions are provided 'as-is' without warranty. Contributors are not liable for issues arising from their contributions once accepted into the project."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Attribution for Contributors</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Contributors are acknowledged in:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={16} />
                CONTRIBUTORS.md file
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={16} />
                Git commit history
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={16} />
                Release notes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={16} />
                Project documentation
              </li>
            </ul>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Removal of Contributions</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Contributors cannot unilaterally remove accepted contributions, but may request removal if:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <AlertCircle className="text-orange-600" size={16} />
                Legal issues arise
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="text-orange-600" size={16} />
                Third-party IP claims
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="text-orange-600" size={16} />
                Security vulnerabilities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CLAPoint({ title, description }: any) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 py-2">
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function TrademarkPolicySection() {
  return (
    <section id="trademark">
      <SectionHeader
        title="Trademark Policy"
        description="Usage of UX4G name and branding"
        icon={<Shield size={28} className="text-primary" />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">UX4G Trademark</h3>
          <p className="text-sm text-muted-foreground">
            "UX4G" and "UX4G Design System" are trademarks of the Government of India. While the source code
            is licensed under MIT, the UX4G name and logo have separate usage guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Acceptable Use</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                <span>"Built with UX4G Design System"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                <span>"Uses UX4G components"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                <span>"Compatible with UX4G"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                <span>Attribution in documentation</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Unacceptable Use</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                <span>Implying official endorsement</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                <span>Using logo as your own</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                <span>Modifying the UX4G logo</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                <span>Creating confusingly similar names</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <SectionHeader
        title="Questions & Permissions"
        description="Contact us for licensing questions"
        icon={<BookOpen size={28} />}
      />

      <div className="mt-8">
        <div className="border-2 border-border rounded-lg p-8 bg-gradient-to-br from-blue-50 to-white">
          <h3 className="font-bold text-foreground mb-4 text-xl">Need Help with Licensing?</h3>
          <p className="text-muted-foreground mb-6">
            If you have questions about licensing, attribution, commercial use, or need special permissions,
            please contact our legal team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="font-semibold text-foreground mb-2">General Licensing Questions</div>
              <a href="mailto:license@ux4g.gov.in" className="text-blue-600 hover:underline">
                license@ux4g.gov.in
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="font-semibold text-foreground mb-2">Commercial Use Inquiries</div>
              <a href="mailto:commercial@ux4g.gov.in" className="text-blue-600 hover:underline">
                commercial@ux4g.gov.in
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="font-semibold text-foreground mb-2">Trademark Permissions</div>
              <a href="mailto:legal@ux4g.gov.in" className="text-blue-600 hover:underline">
                legal@ux4g.gov.in
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="font-semibold text-foreground mb-2">Copyright Claims</div>
              <a href="mailto:copyright@ux4g.gov.in" className="text-blue-600 hover:underline">
                copyright@ux4g.gov.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Components

function SectionHeader({ title, description, icon }: any) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary shrink-0">{icon}</div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

// ── Bilingual copy ──────────────────────────────────────────────────
const COPYRIGHT_EN = {
  badge: 'Copyright & Licensing',
  title: 'Copyright & License',
  description: 'UX4G Design System is an open-source project developed by the Government of India. This page outlines the copyright, licensing terms, and usage rights for the design system, its components, documentation, and associated assets.',
  dateLabel: 'Last Updated',
  sidebarEyebrow: 'License overview',
  sidebarTitle: 'What this page covers',
  sidebarPill: '10 sections',
  metricSections: 'License',
  metricOpen: 'Distribution',
  metricFree: 'Usage',
  metricAttribution: 'Requirement',
  noteTitle: 'Open source',
  noteText: 'Licensed under the MIT License — free for government and commercial use with attribution.',
  breadcrumbHome: 'Home',
  breadcrumbGovernance: 'Governance',
  footerQuestion: 'Questions about licensing?',
  footerDesc: 'Contact the UX4G legal team for licensing questions or special permissions.',
};

const COPYRIGHT_HI = {
  badge: 'कॉपीराइट एवं लाइसेंसिंग',
  title: 'कॉपीराइट और लाइसेंस',
  description: 'UX4G डिज़ाइन सिस्टम भारत सरकार द्वारा विकसित एक ओपन-सोर्स परियोजना है। यह पृष्ठ डिज़ाइन सिस्टम, इसके घटकों, प्रलेखन और संबंधित संपत्तियों के लिए कॉपीराइट, लाइसेंसिंग शर्तों और उपयोग अधिकारों की रूपरेखा प्रस्तुत करता है।',
  dateLabel: 'अंतिम अपडेट',
  sidebarEyebrow: 'लाइसेंस अवलोकन',
  sidebarTitle: 'इस पृष्ठ में क्या शामिल है',
  sidebarPill: '10 अनुभाग',
  metricSections: 'लाइसेंस',
  metricOpen: 'वितरण',
  metricFree: 'उपयोग',
  metricAttribution: 'आवश्यकता',
  noteTitle: 'ओपन सोर्स',
  noteText: 'MIT लाइसेंस के तहत — एट्रिब्यूशन के साथ सरकारी और वाणिज्यिक उपयोग के लिए मुफ्त।',
  breadcrumbHome: 'मुखपृष्ठ',
  breadcrumbGovernance: 'शासन',
  footerQuestion: 'लाइसेंसिंग के बारे में प्रश्न?',
  footerDesc: 'लाइसेंसिंग प्रश्नों या विशेष अनुमतियों के लिए UX4G कानूनी टीम से संपर्क करें।',
};
