/**
 * Component Documentation Template
 * Comprehensive documentation page template for all UX4G components
 * 
 * Features:
 * - Props API reference
 * - Live examples
 * - React & Angular code downloads
 * - Design system comparisons
 * - Accessibility documentation
 */

import React, { useState, useEffect, useRef } from 'react';
import { Download, Check, Copy, ExternalLink, Info, Eye, List, Code2, GitCompare, Palette, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import SEOHead from './SEOHead';

interface PropDefinition {
  name: string;
  type: string | string[];
  default?: string | string[];
  required?: boolean;
  description: string;
  [key: string]: unknown;
}

interface CodeExample {
  title: string;
  description: string;
  code: string;
  preview?: React.ReactNode;
  [key: string]: unknown;
}

interface DesignSystemComparison {
  system: string;
  component: string;
  variants: string | string[];
  accessibility: string;
  documentation: string;
  link: string;
  [key: string]: unknown;
}

interface UseCase {
  title: string;
  description: string;
  scenario?: string;
  implementation?: string;
  [key: string]: unknown;
}

interface CodeBlockEntry {
  title: string;
  code: string;
  copyId: string;
}

interface ComponentDocumentationProps {
  name: string;
  description: string;
  category: string;
  maturity: 'draft' | 'beta' | 'stable' | 'deprecated';
  tier: 'foundation' | 'core' | 'composite' | 'pattern';
  since: string;
  updated?: string;
  
  // Props documentation
  props: PropDefinition[];
  
  // Code examples
  examples: CodeExample[];
  
  // React code
  reactCode: {
    component: string;
    types: string;
    variants?: string;
  };
  
  // Angular code
  angularCode: {
    component: string;
    module: string;
    types: string;
  };

  // Web Components / HTML code
  webComponentsCode?: {
    component: string;
    html: string;
    package?: string;
  };
  
  // Design system comparisons
  comparisons: DesignSystemComparison[];
  
  // Accessibility
  accessibility: {
    wcagLevel: string;
    features: string[];
    keyboardSupport: { key: string; action: string }[];
    screenReader: string[];
  };
  
  // Token mappings (for CVA components)
  tokens?: {
    file: string;
    mappings: { property: string; token: string; value: string }[];
  };

  // Government service use cases
  useCases?: UseCase[];

  // Additional content to render after the main documentation
  additionalContent?: React.ReactNode;

  // Live preview hero shown at the top of Overview tab
  preview?: React.ReactNode;

  // Government-specific context (India-specific usage notes)
  governmentContext?: {
    relevance?: string;
    indianContext?: string;
    wcagNotes?: string;
    [key: string]: string | undefined;
  };
}

export const ComponentDocumentation: React.FC<ComponentDocumentationProps> = ({
  name,
  description,
  category,
  maturity,
  tier,
  since,
  updated,
  props,
  examples,
  reactCode,
  angularCode,
  webComponentsCode,
  comparisons,
  accessibility,
  tokens,
  useCases,
  additionalContent,
  preview,
  governmentContext,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'props' | 'examples' | 'code' | 'comparison' | 'tokens'>('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [mobileCodeFramework, setMobileCodeFramework] = useState(0);

  const maturityConfig = {
    draft: { label: 'Draft', color: 'bg-blue-100 text-blue-800', icon: '🔵' },
    beta: { label: 'Beta', color: 'bg-yellow-100 text-yellow-800', icon: '🟡' },
    stable: { label: 'Stable', color: 'bg-green-100 text-green-800', icon: '🟢' },
    deprecated: { label: 'Deprecated', color: 'bg-red-100 text-red-800', icon: '🔴' },
  };

  const currentMaturity = maturityConfig[maturity];

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const downloadCode = (code: string, filename: string) => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'props', label: 'Props API', icon: List, badge: props.length },
    { id: 'examples', label: 'Examples', icon: BookOpen },
    { id: 'code', label: 'Code Downloads', icon: Code2 },
    { id: 'comparison', label: 'Comparison', icon: GitCompare },
    ...(tokens ? [{ id: 'tokens', label: 'Tokens', icon: Palette }] : []),
  ];

  const codeSections: Array<{
    key: string;
    eyebrow: string;
    title: string;
    description: string;
    downloadLabel: string;
    downloadFilename: string;
    accent: string;
    accentSoft: string;
    accentText: string;
    blocks: CodeBlockEntry[];
  }> = [
    {
      key: 'react',
      eyebrow: 'Framework lane',
      title: 'React implementation',
      description: '@ux4g/react-core with typed variants and token-driven styles.',
      downloadLabel: 'Download React code',
      downloadFilename: `${name}.tsx`,
      accent: 'bg-blue-500',
      accentSoft: 'bg-blue-500/10',
      accentText: 'text-blue-600',
      blocks: [
        { title: `Component (${name}.tsx)`, code: reactCode.component, copyId: 'react-component' },
        ...(reactCode.variants
          ? [{ title: `Variants (${name.toLowerCase()}.variants.ts)`, code: reactCode.variants, copyId: 'react-variants' }]
          : []),
        { title: `Types (${name}.types.ts)`, code: reactCode.types, copyId: 'react-types' },
      ],
    },
    {
      key: 'angular',
      eyebrow: 'Framework lane',
      title: 'Angular implementation',
      description: '@ux4g/angular-core with the same component contract and states.',
      downloadLabel: 'Download Angular code',
      downloadFilename: `${name.toLowerCase()}.component.ts`,
      accent: 'bg-emerald-500',
      accentSoft: 'bg-emerald-500/10',
      accentText: 'text-emerald-600',
      blocks: [
        { title: `Component (${name.toLowerCase()}.component.ts)`, code: angularCode.component, copyId: 'angular-component' },
        { title: `Module (${name.toLowerCase()}.module.ts)`, code: angularCode.module, copyId: 'angular-module' },
      ],
    },
  ];

  if (webComponentsCode) {
    codeSections.push({
      key: 'web',
      eyebrow: 'Framework-neutral lane',
      title: 'Web Components / HTML',
      description: '@ux4g/web-components with plain HTML starter markup.',
      downloadLabel: 'Download Web code',
      downloadFilename: `${name.toLowerCase()}.web.ts`,
      accent: 'bg-amber-500',
      accentSoft: 'bg-amber-500/10',
      accentText: 'text-amber-600',
      blocks: [
        { title: 'Package source', code: webComponentsCode.component, copyId: 'web-component' },
        { title: 'HTML starter', code: webComponentsCode.html, copyId: 'web-html' },
      ],
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={name}
        description={`${name} component — ${description}`}
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-card via-card to-[#005196]/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#005196] transition-colors">Home</Link>
            <span className="text-border">/</span>
            <Link to="/components" className="hover:text-[#005196] transition-colors">Components</Link>
            <span className="text-border">/</span>
            <span className="text-foreground font-medium">{name}</span>
          </nav>

          {/* Title and badges */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-3">{name}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Metadata badges */}
          <div className="flex flex-wrap gap-2.5">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${currentMaturity.color} shadow-sm`}>
              <span>{currentMaturity.icon}</span>
              {currentMaturity.label}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-foreground shadow-sm">
              {tier.charAt(0).toUpperCase() + tier.slice(1)}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-foreground shadow-sm">
              {category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground shadow-sm">
              Since {since}
            </span>
            {updated && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground shadow-sm">
                Updated {updated}
              </span>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 border-b border-border overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#005196] text-[#005196]'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                  }`}
                >
                  {TabIcon && <TabIcon size={15} />}
                  {tab.label}
                  {'badge' in tab && tab.badge != null && (
                    <span className="ml-1 inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 rounded-full text-[11px] font-bold bg-[#005196]/10 text-[#005196]">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="flex gap-8">
            {/* Main content */}
            <div className="flex-1 min-w-0 space-y-8">

            {/* Live Preview Hero */}
            {preview && (
              <section id="section-preview" className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="px-6 py-4 border-b border-border bg-gradient-to-r from-muted/30 to-transparent">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Live Preview</h2>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wider">Interactive</span>
                  </div>
                </div>
                <div className="p-8 flex items-center justify-center min-h-[160px] bg-[radial-gradient(circle_at_center,_rgba(0,81,150,0.03),_transparent_70%)]">
                  {preview}
                </div>
              </section>
            )}

            {/* Premium content: When to use, Related, Changelog, Research — shown first for decision-making */}
            {additionalContent && (
              <div id="section-guidance" className="space-y-0">
                {additionalContent}
              </div>
            )}

            {/* Installation */}
            <section id="section-installation" className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-4">Installation</h2>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  <InstallCard
                    title="React"
                    body="@ux4g/react-core"
                    code="npm install @ux4g/react-core @ux4g/tokens @ux4g/styles react react-dom"
                    copyId="install-react"
                    copiedCode={copiedCode}
                    onCopy={copyToClipboard}
                  />
                  <InstallCard
                    title="Angular"
                    body="@ux4g/angular-core"
                    code="npm install @ux4g/angular-core @ux4g/tokens @ux4g/styles"
                    copyId="install-angular"
                    copiedCode={copiedCode}
                    onCopy={copyToClipboard}
                  />
                  {webComponentsCode && (
                    <InstallCard
                      title="Web Components"
                      body="@ux4g/web-components"
                      code={webComponentsCode.package || "npm install @ux4g/web-components @ux4g/styles"}
                      copyId="install-web"
                      copiedCode={copiedCode}
                      onCopy={copyToClipboard}
                    />
                  )}
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section id="section-accessibility" className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">WCAG Compliance</h3>
                  <p className="text-muted-foreground">{accessibility.wcagLevel}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Features</h3>
                  <ul className="space-y-2">
                    {accessibility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Check size={16} className="text-[#138808] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Keyboard Support</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-border">
                      <thead className="bg-background">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Key</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {accessibility.keyboardSupport.map((item, idx) => (
                          <tr key={idx}>
                            <td className="px-4 py-3 text-sm font-mono bg-background">{item.key}</td>
                            <td className="px-4 py-3 text-sm text-muted-foreground">{item.action}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Screen Reader Support</h3>
                  <ul className="space-y-2">
                    {accessibility.screenReader.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Info size={16} className="text-[#005196] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            {useCases && useCases.length > 0 && (
              <section id="section-usecases" className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-foreground mb-4">Government Service Use Cases</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {useCases.map((useCase, idx) => (
                    <div key={idx} className="group border border-border rounded-xl p-5 hover:border-[#005196] hover:shadow-md transition-all bg-gradient-to-br from-transparent to-[#005196]/[0.02]">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#005196]/10 text-[#005196] text-sm font-bold shrink-0">{idx + 1}</span>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-[#005196] transition-colors">{useCase.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{useCase.description}</p>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <span className="text-sm font-semibold text-muted-foreground min-w-[120px]">Scenario:</span>
                          <span className="text-sm text-muted-foreground">{useCase.scenario}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-sm font-semibold text-muted-foreground min-w-[120px]">Implementation:</span>
                          <code className="text-sm text-[#005196] bg-background px-2 py-1 rounded">{useCase.implementation}</code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            </div>

            {/* Sticky sidebar TOC — desktop only */}
            <aside className="hidden xl:block w-56 shrink-0">
              <nav className="sticky top-24 space-y-1" aria-label="On this page">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">On this page</p>
                {[
                  ...(preview ? [{ id: 'section-preview', label: 'Preview' }] : []),
                  ...(additionalContent ? [{ id: 'section-guidance', label: 'When to Use' }] : []),
                  { id: 'section-installation', label: 'Installation' },
                  { id: 'section-accessibility', label: 'Accessibility' },
                  ...(useCases && useCases.length > 0 ? [{ id: 'section-usecases', label: 'Use Cases' }] : []),
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-muted-foreground hover:text-[#005196] py-1.5 pl-3 border-l-2 border-transparent hover:border-[#005196] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>
          </div>
        )}

        {/* Props API Tab */}
        {activeTab === 'props' && (
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-background">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Prop</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Default</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Required</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {props.map((prop, idx) => (
                    <tr key={idx} className="hover:bg-background">
                      <td className="px-6 py-4 text-sm font-mono font-semibold text-foreground">{prop.name}</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{prop.type}</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{prop.default || '-'}</td>
                      <td className="px-6 py-4 text-sm">
                        {prop.required ? (
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">
                            Required
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-muted text-muted-foreground">
                            Optional
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === 'examples' && (
          <div className="space-y-8">
            {examples.map((example, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                {example.preview && (
                  <div className="p-6 border-b border-border bg-background">
                    <div className="flex items-center justify-center min-h-[120px]">
                      {example.preview}
                    </div>
                  </div>
                )}
                <div className="relative">
                  <div className="bg-gray-900 text-gray-100 p-6 overflow-x-auto">
                    <pre className="text-sm font-mono">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(example.code, `example-${idx}`)}
                    className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
                  >
                    {copiedCode === `example-${idx}` ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Code Downloads Tab */}
        {activeTab === 'code' && (
          <div className="space-y-6">
            <section className="rounded-3xl border border-border bg-card px-6 py-5 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Implementation matrix
                  </p>
                  <h2 className="text-2xl font-bold text-foreground">Download the same component across React, Angular, and Web Components</h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                  Each lane uses the same contract and is packaged with its own starter code so teams can copy,
                  review, and ship the implementation that fits their stack.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:max-w-2xl">
                  {codeSections.map((section) => (
                    <div key={section.key} className="rounded-2xl border border-border bg-background p-4 text-left shadow-sm transition-shadow hover:shadow-md">
                      <div className={`h-1 rounded-full ${section.accent}`} />
                      <div className="mt-3 flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-foreground">{section.title.split(' ')[0]}</div>
                          <div className="mt-1 text-xs text-muted-foreground">{section.blocks.length} snippet{section.blocks.length > 1 ? 's' : ''}</div>
                        </div>
                        <div className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${section.accentSoft} ${section.accentText}`}>
                          <Code2 size={14} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Mobile: Framework selector tabs */}
            <div className="lg:hidden">
              <div className="flex rounded-xl border border-border bg-muted/30 p-1 mb-4">
                {codeSections.map((section, idx) => (
                  <button
                    key={section.key}
                    onClick={() => setMobileCodeFramework(idx)}
                    className={`flex-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      mobileCodeFramework === idx
                        ? 'bg-card text-[#005196] shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {section.title.split(' ')[0]}
                  </button>
                ))}
              </div>
              {codeSections[mobileCodeFramework] && (
                <section className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                  <div className={`h-1 ${codeSections[mobileCodeFramework].accent}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {codeSections[mobileCodeFramework].eyebrow}
                        </span>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">{codeSections[mobileCodeFramework].title}</h2>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{codeSections[mobileCodeFramework].description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadCode(codeSections[mobileCodeFramework].blocks[0]?.code || '', codeSections[mobileCodeFramework].downloadFilename)}
                        aria-label={codeSections[mobileCodeFramework].downloadLabel}
                        title={codeSections[mobileCodeFramework].downloadLabel}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] transition-colors hover:border-[#005196] hover:bg-[#005196] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                    <div className="flex-1 space-y-4">
                      {codeSections[mobileCodeFramework].blocks.map((block) => (
                        <div key={block.copyId} className="space-y-2">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-sm font-semibold text-muted-foreground">{block.title}</h3>
                            <button
                              onClick={() => copyToClipboard(block.code, block.copyId)}
                              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                              {copiedCode === block.copyId ? <Check size={14} /> : <Copy size={14} />}
                              Copy
                            </button>
                          </div>
                          <div className="rounded-2xl border border-border bg-slate-950 p-4 text-sm text-slate-100 shadow-inner">
                            <pre className="overflow-x-auto font-mono leading-6">
                              <code>{block.code}</code>
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Desktop: 3-column grid */}
            <div className="hidden lg:grid gap-6 lg:grid-cols-3">
              {codeSections.map((section, sectionIdx) => (
                <section
                  key={section.key}
                  className={`flex min-w-0 h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md ${sectionIdx === 0 ? 'lg:col-span-1' : ''}`}
                >
                  <div className={`h-1 ${section.accent}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {section.eyebrow}
                        </span>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{section.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadCode(section.blocks[0]?.code || '', section.downloadFilename)}
                        aria-label={section.downloadLabel}
                        title={section.downloadLabel}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] transition-colors hover:border-[#005196] hover:bg-[#005196] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
                      >
                        <Download size={16} />
                      </button>
                    </div>

                    <div className="flex-1 space-y-4">
                      {section.blocks.map((block) => (
                        <div key={block.copyId} className="space-y-2">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-sm font-semibold text-muted-foreground">{block.title}</h3>
                            <button
                              onClick={() => copyToClipboard(block.code, block.copyId)}
                              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                              {copiedCode === block.copyId ? <Check size={14} /> : <Copy size={14} />}
                              Copy
                            </button>
                          </div>
                          <div className="rounded-2xl border border-border bg-slate-950 p-4 text-sm text-slate-100 shadow-inner">
                            <pre className="overflow-x-auto font-mono leading-6">
                              <code>{block.code}</code>
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}

        {/* Design System Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground mb-2">Design System Comparison</h2>
              <p className="text-muted-foreground">
                Compare {name} implementation across popular design systems
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-background">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Design System</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Component Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Variants</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Accessibility</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Documentation</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-primary/5 ring-1 ring-primary/15 ring-inset">
                    <td className="px-6 py-4 text-sm font-bold text-foreground">
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                        UX4G
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary uppercase tracking-wider">Current</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono font-medium text-foreground">{name}</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{props.find(p => p.name === 'variant')?.type || 'N/A'}</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{accessibility.wcagLevel}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        Comprehensive
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="font-medium text-primary">Current page</span>
                    </td>
                  </tr>
                  {comparisons.map((comp, idx) => (
                    <tr key={idx} className="hover:bg-background">
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">{comp.system}</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{comp.component}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{comp.variants}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{comp.accessibility}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          comp.documentation === 'Comprehensive' ? 'bg-green-100 text-green-800' :
                          comp.documentation === 'Good' ? 'bg-blue-100 text-blue-800' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {comp.documentation}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href={comp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#005196] hover:text-[#004178]"
                        >
                          View
                          <ExternalLink size={14} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Token Mappings Tab */}
        {activeTab === 'tokens' && tokens && (
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Token Mappings</h2>
              <p className="text-muted-foreground mb-6">
                This component uses design tokens from: <code className="px-2 py-1 bg-muted rounded text-sm font-mono">{tokens.file}</code>
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-background">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Property</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Token Path</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {tokens.mappings.map((mapping, idx) => (
                      <tr key={idx} className="hover:bg-background">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground">{mapping.property}</td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{mapping.token}</td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{mapping.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-[#005196]/5 dark:from-blue-950/30 dark:to-[#005196]/10 border border-blue-200 dark:border-blue-800 rounded-xl p-6 shadow-sm">
              <div className="flex gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#005196]/10 shrink-0">
                  <Info className="text-[#005196]" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Token-Driven Component</h3>
                  <p className="text-sm text-muted-foreground">
                    This component is part of our Phase 2 token integration. All visual styles are derived from design tokens,
                    ensuring consistency across the design system and making global updates easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function InstallCard({
  title,
  body,
  code,
  copyId,
  copiedCode,
  onCopy,
}: {
  title: string;
  body: string;
  code: string;
  copyId: string;
  copiedCode: string | null;
  onCopy: (code: string, id: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/20 to-transparent p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-foreground">{title}</p>
          <p className="mt-1 text-sm text-muted-foreground font-mono">{body}</p>
        </div>
        <button
          onClick={() => onCopy(code, copyId)}
          aria-label={`Copy ${title} install command`}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-[#005196] hover:text-[#005196]"
        >
          {copiedCode === copyId ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
          Copy
        </button>
      </div>
      <div className="mt-4 rounded-xl bg-slate-950 p-4 text-sm font-mono text-slate-100 overflow-x-auto shadow-inner">
        <code>{code}</code>
      </div>
    </div>
  );
}
