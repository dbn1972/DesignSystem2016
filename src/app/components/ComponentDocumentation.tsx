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

import React, { useState } from 'react';
import { Download, Check, Copy, ExternalLink, Info } from 'lucide-react';
import { Link } from 'react-router';

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
  comparisons,
  accessibility,
  tokens,
  useCases,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'props' | 'examples' | 'code' | 'comparison' | 'tokens'>('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

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
    { id: 'overview', label: 'Overview' },
    { id: 'props', label: 'Props API' },
    { id: 'examples', label: 'Examples' },
    { id: 'code', label: 'Code Downloads' },
    { id: 'comparison', label: 'Design System Comparison' },
    ...(tokens ? [{ id: 'tokens', label: 'Token Mappings' }] : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-[#005196]">Home</Link>
            <span>/</span>
            <Link to="/components" className="hover:text-[#005196]">Components</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{name}</span>
          </nav>

          {/* Title and badges */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{name}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
            </div>
          </div>

          {/* Metadata badges */}
          <div className="flex flex-wrap gap-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${currentMaturity.color}`}>
              <span>{currentMaturity.icon}</span>
              {currentMaturity.label}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-muted text-foreground">
              Tier: {tier.charAt(0).toUpperCase() + tier.slice(1)}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-muted text-foreground">
              Category: {category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-muted text-foreground">
              Since: {since}
            </span>
            {updated && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-muted text-foreground">
                Updated: {updated}
              </span>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#005196] text-[#005196]'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Installation */}
            <section className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Installation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">React</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm relative">
                    <code>npm install @ux4g/react-core</code>
                    <button
                      onClick={() => copyToClipboard('npm install @ux4g/react-core', 'install-react')}
                      className="absolute top-2 right-2 p-2 hover:bg-gray-800 rounded"
                    >
                      {copiedCode === 'install-react' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Angular</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm relative">
                    <code>npm install @ux4g/angular-core</code>
                    <button
                      onClick={() => copyToClipboard('npm install @ux4g/angular-core', 'install-angular')}
                      className="absolute top-2 right-2 p-2 hover:bg-gray-800 rounded"
                    >
                      {copiedCode === 'install-angular' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section className="bg-card rounded-lg border border-border p-6">
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
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-background">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Key</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
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
              <section className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Government Service Use Cases</h2>
                <div className="grid gap-6">
                  {useCases.map((useCase, idx) => (
                    <div key={idx} className="border border-border rounded-lg p-5 hover:border-[#005196] transition-colors">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-3">{useCase.description}</p>
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
        )}

        {/* Props API Tab */}
        {activeTab === 'props' && (
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-background">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Prop</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Default</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Required</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
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
              <div key={idx} className="bg-card rounded-lg border border-border overflow-hidden">
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
            {/* React Code */}
            <section className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">React Implementation</h2>
                <button
                  onClick={() => downloadCode(reactCode.component, `${name}.tsx`)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#005196] text-white rounded-lg hover:bg-[#004178] transition-colors"
                >
                  <Download size={16} />
                  Download React Code
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Component ({name}.tsx)</h3>
                  <div className="relative">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto max-h-96">
                      <pre className="text-sm font-mono">
                        <code>{reactCode.component}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(reactCode.component, 'react-component')}
                      className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
                    >
                      {copiedCode === 'react-component' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                {reactCode.variants && (
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">Variants ({name.toLowerCase()}.variants.ts)</h3>
                    <div className="relative">
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto max-h-96">
                        <pre className="text-sm font-mono">
                          <code>{reactCode.variants}</code>
                        </pre>
                      </div>
                      <button
                        onClick={() => copyToClipboard(reactCode.variants, 'react-variants')}
                        className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
                      >
                        {copiedCode === 'react-variants' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Types ({name}.types.ts)</h3>
                  <div className="relative">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto max-h-96">
                      <pre className="text-sm font-mono">
                        <code>{reactCode.types}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(reactCode.types, 'react-types')}
                      className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
                    >
                      {copiedCode === 'react-types' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Angular Code */}
            <section className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Angular Implementation</h2>
                <button
                  onClick={() => downloadCode(angularCode.component, `${name.toLowerCase()}.component.ts`)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#005196] text-white rounded-lg hover:bg-[#004178] transition-colors"
                >
                  <Download size={16} />
                  Download Angular Code
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Component ({name.toLowerCase()}.component.ts)</h3>
                  <div className="relative">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto max-h-96">
                      <pre className="text-sm font-mono">
                        <code>{angularCode.component}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(angularCode.component, 'angular-component')}
                      className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
                    >
                      {copiedCode === 'angular-component' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Module ({name.toLowerCase()}.module.ts)</h3>
                  <div className="relative">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto max-h-96">
                      <pre className="text-sm font-mono">
                        <code>{angularCode.module}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(angularCode.module, 'angular-module')}
                      className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
                    >
                      {copiedCode === 'angular-module' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Design System Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground mb-2">Design System Comparison</h2>
              <p className="text-muted-foreground">
                Compare {name} implementation across popular design systems
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
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
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-[#005196] bg-opacity-5">
                    <td className="px-6 py-4 text-sm font-semibold text-foreground">UX4G (Current)</td>
                    <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{props.find(p => p.name === 'variant')?.type || 'N/A'}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{accessibility.wcagLevel}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        Comprehensive
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="text-gray-400">Current Page</span>
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
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Token Mappings</h2>
              <p className="text-muted-foreground mb-6">
                This component uses design tokens from: <code className="px-2 py-1 bg-muted rounded text-sm font-mono">{tokens.file}</code>
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-background">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Property</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Token Path</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
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

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex gap-3">
                <Info className="text-[#005196] shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Token-Driven Component</h3>
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
