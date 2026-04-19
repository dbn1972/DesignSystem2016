/**
 * Component Documentation Template
 * Comprehensive documentation page template for all UX4G components
 *
 * Single-scroll editorial layout with distinct visual treatments per section type.
 * Replaces the previous tab-based navigation with vertically stacked sections.
 *
 * Features:
 * - ComponentHero with metadata chips and action buttons
 * - Props API reference
 * - Live examples with code blocks and previews
 * - React, Angular & Web Components code downloads
 * - Design system comparisons
 * - Accessibility documentation (via AccessibilitySection)
 * - Government use cases (via GovernmentUseCasesSection)
 * - Token mappings
 */

import React, { useState } from 'react';
import { Download, Check, Copy, ExternalLink, Info, Code2 } from 'lucide-react';
import { Link } from 'react-router';
import SEOHead from './SEOHead';
import ComponentHero from './ComponentHero';
import SectionShell from './SectionShell';
import AccessibilitySection from './AccessibilitySection';
import GovernmentUseCasesSection from './GovernmentUseCasesSection';

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
  sandboxHref?: string;
  sandboxLabel?: string;
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

  sandbox?: {
    href: string;
    label?: string;
    description?: string;
    exampleLabel?: string;
  };
}

/* ------------------------------------------------------------------ */
/*  Utility helpers                                                    */
/* ------------------------------------------------------------------ */

const copyToClipboard = (
  code: string,
  id: string,
  setCopiedCode: React.Dispatch<React.SetStateAction<string | null>>,
) => {
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

/* ------------------------------------------------------------------ */
/*  Missing-prop fallback                                              */
/* ------------------------------------------------------------------ */

const REQUIRED_PROPS = ['name', 'description', 'category', 'maturity', 'tier', 'since'] as const;

function getMissingRequiredProp(p: Record<string, unknown>): string | null {
  for (const key of REQUIRED_PROPS) {
    if (p[key] === undefined || p[key] === null || p[key] === '') return key;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export const ComponentDocumentation: React.FC<ComponentDocumentationProps> = (allProps) => {
  const {
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
    sandbox,
  } = allProps;

  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [mobileCodeFramework, setMobileCodeFramework] = useState(0);

  // ---- Missing required prop fallback ----
  const missingProp = getMissingRequiredProp(allProps as unknown as Record<string, unknown>);
  if (missingProp) {
    return (
      <div className="min-h-screen bg-background">
        <div className="p-8 text-center text-muted-foreground">
          <p className="text-lg font-semibold">Component documentation unavailable</p>
          <p className="text-sm mt-2">Missing required prop: {missingProp}</p>
        </div>
      </div>
    );
  }

  // ---- Build code sections for Code Downloads ----
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
      accent: 'bg-blue-50 dark:bg-blue-900/200',
      accentSoft: 'bg-blue-50 dark:bg-blue-900/200/10',
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

  const handleCopy = (code: string, id: string) => copyToClipboard(code, id, setCopiedCode);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={name}
        description={`${name} component — ${description}`}
      />

      {/* Single-scroll editorial layout */}
      <div className="space-y-12 py-8 pl-2">

        {/* 1. Component Hero */}
        <ComponentHero
          name={name}
          description={description}
          category={category}
          maturity={maturity}
          tier={tier}
          since={since}
          updated={updated}
          sandbox={sandbox ? { href: sandbox.href, label: sandbox.label } : undefined}
        />

        {/* 2. Additional Content slot (Playground, When to Use, Do/Don't, Related, etc.) */}
        {additionalContent && (
          <section id="additional-content" className="space-y-0">
            {additionalContent}
          </section>
        )}

        {/* 3. Examples section */}
        {examples.length > 0 && (
          <SectionShell id="examples" title="Examples" variant="bordered">
            <div className="space-y-8">
              {examples.map((example, idx) => (
                <div key={idx} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 border-b border-border">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{example.title}</h3>
                        <p className="text-sm text-muted-foreground">{example.description}</p>
                      </div>
                      {(example.sandboxHref || sandbox?.href) && (
                        <Link
                          to={example.sandboxHref || sandbox!.href}
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:text-primary"
                        >
                          <Code2 size={14} />
                          {example.sandboxLabel || sandbox?.exampleLabel || 'Open in Sandbox'}
                        </Link>
                      )}
                    </div>
                  </div>
                  {example.preview && (
                    <div className="p-6 border-b border-border bg-background">
                      <div className="flex items-center justify-center min-h-[120px]">
                        {example.preview}
                      </div>
                    </div>
                  )}
                  <div className="relative">
                    <div className="bg-gray-900 text-gray-100 dark:text-gray-200 p-6 overflow-x-auto">
                      <pre className="text-sm font-mono">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => handleCopy(example.code, `example-${idx}`)}
                      className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
                    >
                      {copiedCode === `example-${idx}` ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SectionShell>
        )}

        {/* 4. Props API section */}
        <SectionShell id="props-api" title="Props API" variant="bordered">
          {props.length > 0 ? (
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
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800 dark:text-red-300">
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
          ) : (
            <p className="text-sm text-muted-foreground">No props documented yet.</p>
          )}
        </SectionShell>

        {/* 5. Code Downloads section */}
        <SectionShell id="code-downloads" title="Code Downloads" variant="bordered">
          <div className="space-y-6">
            <section className="rounded-3xl border border-border bg-card px-6 py-5 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Implementation matrix
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">Download the same component across React, Angular, and Web Components</h3>
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
                <CodeSectionCard
                  section={codeSections[mobileCodeFramework]}
                  copiedCode={copiedCode}
                  onCopy={handleCopy}
                />
              )}
            </div>

            {/* Desktop: 3-column grid */}
            <div className="hidden lg:grid gap-6 lg:grid-cols-3">
              {codeSections.map((section) => (
                <CodeSectionCard
                  key={section.key}
                  section={section}
                  copiedCode={copiedCode}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          </div>
        </SectionShell>

        {/* 6. Accessibility section */}
        <AccessibilitySection
          wcagLevel={accessibility.wcagLevel}
          features={accessibility.features}
          keyboardSupport={accessibility.keyboardSupport}
          screenReader={accessibility.screenReader}
        />

        {/* 7. Government Service Use Cases */}
        {useCases && useCases.length > 0 && (
          <GovernmentUseCasesSection useCases={useCases} />
        )}

        {/* 8. Design System Comparison */}
        {comparisons.length > 0 && (
          <SectionShell id="comparison" title="Design System Comparison" variant="bordered">
            <p className="text-muted-foreground mb-4">
              Compare {name} implementation across popular design systems
            </p>
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
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800 dark:text-green-300">
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
                          comp.documentation === 'Comprehensive' ? 'bg-green-100 text-green-800 dark:text-green-300' :
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
          </SectionShell>
        )}

        {/* 9. Token Mappings */}
        {tokens && (
          <SectionShell id="token-mappings" title="Token Mappings" variant="bordered">
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

            <div className="mt-6 bg-gradient-to-r from-blue-50 to-[#005196]/5 dark:from-blue-950/30 dark:to-[#005196]/10 border border-blue-200 dark:border-blue-800 rounded-xl p-6 shadow-sm">
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
          </SectionShell>
        )}

        {/* 10. Installation */}
        <SectionShell id="installation" title="Installation" variant="default">
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <InstallCard title="React" body="@ux4g/react-core" code="npm install @ux4g/react-core @ux4g/tokens @ux4g/styles react react-dom" copyId="install-react" copiedCode={copiedCode} onCopy={handleCopy} />
              <InstallCard title="Angular" body="@ux4g/angular-core" code="npm install @ux4g/angular-core @ux4g/tokens @ux4g/styles" copyId="install-angular" copiedCode={copiedCode} onCopy={handleCopy} />
              {webComponentsCode && (
                <InstallCard title="Web Components" body="@ux4g/web-components" code={webComponentsCode.package || "npm install @ux4g/web-components @ux4g/styles"} copyId="install-web" copiedCode={copiedCode} onCopy={handleCopy} />
              )}
            </div>
          </div>
        </SectionShell>

      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  CodeSectionCard — reusable card for each framework lane            */
/* ------------------------------------------------------------------ */

function CodeSectionCard({
  section,
  copiedCode,
  onCopy,
}: {
  section: {
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
  };
  copiedCode: string | null;
  onCopy: (code: string, id: string) => void;
}) {
  return (
    <section className="flex min-w-0 h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className={`h-1 ${section.accent}`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {section.eyebrow}
            </span>
            <div>
              <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
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
                <h4 className="text-sm font-semibold text-muted-foreground">{block.title}</h4>
                <button
                  onClick={() => onCopy(block.code, block.copyId)}
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
  );
}

/* ------------------------------------------------------------------ */
/*  InstallCard — installation command card                            */
/* ------------------------------------------------------------------ */

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
