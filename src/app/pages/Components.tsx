import React from 'react';
import { AlertCircle, Bell, Calendar, CheckCircle, ChevronDown, Download, Info, Package, Search, Upload, X } from 'lucide-react';
import { Link } from 'react-router';

export default function Components() {
  const [showAlert, setShowAlert] = React.useState(true);
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('option1');
  const [switchState, setSwitchState] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');

  const componentCategories = [
    {
      name: 'Form Elements',
      description: 'High-frequency controls for service journeys and authenticated workflows.',
      components: ['Button', 'Input', 'Field', 'Label', 'Hint Text', 'Error Text', 'Checkbox', 'Radio', 'Switch', 'Select', 'Textarea', 'Autocomplete', 'Segmented Control', 'Date Picker', 'File Upload', 'OTP Input', 'Aadhaar Input', 'PAN Card Input', 'Address Autocomplete India', 'CAPTCHA']
    },
    {
      name: 'Navigation',
      description: 'Structure for movement, discovery, and page-to-page orientation.',
      components: ['Header', 'Footer', 'Breadcrumb', 'Tabs', 'Pagination', 'Menu', 'Dropdown', 'Drawer', 'Back to Top', 'Stepper']
    },
    {
      name: 'Feedback',
      description: 'Messages, states, and system responses that keep users informed.',
      components: ['Alert', 'Toast', 'Badge', 'Progress', 'Spinner', 'Modal', 'Dialog', 'Skeleton', 'Popover', 'Feedback Rating Widget']
    },
    {
      name: 'Data Display',
      description: 'Readable presentation surfaces for records, metrics, and evidence.',
      components: ['Table', 'Card', 'List', 'Accordion', 'Tooltip', 'Avatar', 'Tag', 'Timeline', 'Statistic', 'Description List', 'Empty State', 'Code Block', 'Tree View', 'Application Tracker', 'Data Grid', 'Document Viewer', 'Chart Library', 'Calendar Scheduler', 'QR Code']
    },
    {
      name: 'Layout',
      description: 'Structural primitives that keep the interface balanced and responsive.',
      components: ['Container', 'Grid', 'Stack', 'Divider', 'Spacer', 'Flex', 'Center', 'Aspect Ratio', 'Show Hide', 'Section']
    },
    {
      name: 'Advanced Components',
      description: 'Specialized patterns for complex government service scenarios.',
      components: ['Digital Signature', 'Map Location Picker', 'Language Selector', 'Payment Gateway', 'Chatbot', 'Rich Text Editor', 'Form Builder', 'Video Player']
    }
  ];

  const frameworkCards = [
    {
      name: 'React',
      summary: 'Production-ready component APIs with current documentation and reference flows.',
      details: '73/73 components available',
      accent: 'bg-[#005196]'
    },
    {
      name: 'Angular',
      summary: 'Framework-matched components for enterprise implementations and service teams.',
      details: '73/73 components available',
      accent: 'bg-[#138808]'
    },
    {
      name: 'Web Components',
      summary: 'Framework-agnostic HTML-first delivery for cross-stack portability.',
      details: '73/73 components available',
      accent: 'bg-[#FF9933]'
    }
  ];

  const componentStats = [
    { label: 'Component families', value: '6' },
    { label: 'Frameworks', value: '3' },
    { label: 'Docs pages', value: '73+' },
    { label: 'Accessible by default', value: 'AA' }
  ];

  const docPageSlugs = new Set([
    'button', 'input', 'field', 'label', 'hint-text', 'error-text',
    'checkbox', 'radio', 'switch', 'select', 'textarea',
    'autocomplete', 'segmented-control', 'date-picker', 'file-upload',
    'otp-input', 'aadhaar-input', 'pan-card-input', 'address-autocomplete-india',
    'captcha',
    'header', 'footer', 'breadcrumb', 'tabs', 'pagination', 'menu',
    'dropdown', 'drawer', 'back-to-top', 'stepper',
    'alert', 'toast', 'badge', 'progress', 'spinner', 'modal',
    'dialog', 'skeleton', 'popover', 'feedback-rating-widget',
    'table', 'card', 'list', 'accordion', 'tooltip', 'avatar',
    'tag', 'timeline', 'statistic', 'description-list', 'empty-state',
    'code-block', 'tree-view', 'application-tracker', 'data-grid',
    'document-viewer', 'chart-library', 'calendar-scheduler', 'qr-code',
    'container', 'grid', 'stack', 'divider', 'spacer',
    'flex', 'center', 'aspect-ratio', 'show-hide', 'section',
    'digital-signature', 'map-location-picker', 'language-selector',
    'payment-gateway', 'chatbot', 'rich-text-editor', 'form-builder',
    'video-player'
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(5,81,150,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(19,136,8,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,153,51,0.08),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:px-8 lg:py-10">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
              <Package className="h-4 w-4 text-primary" />
              Component library for government service delivery
            </div>
            <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Components
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Production-ready building blocks for UX4G applications across React, Angular, and Web Components.
              The same patterns, states, and accessibility guidance carry through every implementation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                to="/components/button"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Explore button
                <Download className="h-4 w-4" />
              </Link>
              <Link
                to="/framework-status"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted/60"
              >
                Framework support
              </Link>
              <Link
                to="/resources/getting-started"
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                Getting started
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-border/70 bg-card/90 p-4.5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Component map</p>
                <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-foreground">What the hub covers</h2>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Premium</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {componentStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/70 bg-background/70 p-3">
                  <div className="text-lg font-semibold tracking-tight text-foreground">{stat.value}</div>
                  <div className="mt-1 text-[11px] leading-4 text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-border/70 bg-muted/40 p-3.5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Includes</p>
              <p className="mt-1.5 text-sm leading-6 text-foreground">
                Component pages, live examples, accessibility notes, and implementation guidance for teams shipping
                government services.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  Docs
                </span>
                <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  Examples
                </span>
                <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  Accessibility
                </span>
                <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  Download
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2.5 text-sm text-muted-foreground">
            <span className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 font-medium text-foreground">React</span>
            <span className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 font-medium text-foreground">Angular</span>
            <span className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 font-medium text-foreground">Web Components</span>
            <span className="ml-0 rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 font-medium text-foreground">73+ documented pages</span>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Framework support</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Multi-framework delivery</h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
                UX4G components are aligned across the three delivery paths so teams can adopt the same service
                language without rethinking the design system.
              </p>
            </div>
            <Link to="/framework-status" className="hidden rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/60 lg:inline-flex">
              Open status
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {frameworkCards.map((card) => (
              <div key={card.name} className="group rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="h-1.5 rounded-full bg-gradient-to-r from-primary via-primary/70 to-transparent" />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${card.accent}`} />
                    <h3 className="text-lg font-semibold text-foreground">{card.name}</h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Ready</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{card.summary}</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{card.details}</p>
                  <Link
                    to={card.name === 'Web Components' ? '/web-components' : '/components'}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-2.5"
                  >
                    View
                    <ChevronDown className="-rotate-90 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Component families</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Browse by category</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Each card groups the working set of pages and keeps the documentation paths visible for quick scanning.
            </p>
          </div>

          <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
            {componentCategories.map((category, index) => (
              <div key={index} className="rounded-[1.75rem] border border-border/70 bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{category.description}</p>
                  </div>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                    {category.components.length}
                  </span>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {category.components.map((component) => {
                    const componentSlug = component.toLowerCase().replace(/\s+/g, '-');
                    const hasDocPage = docPageSlugs.has(componentSlug);

                    return hasDocPage ? (
                      <Link
                        key={component}
                        to={`/components/${componentSlug}`}
                        className="inline-flex items-center rounded-full border border-border/70 bg-background px-2 py-0.5 text-[11px] font-medium text-foreground transition hover:border-primary hover:text-primary"
                      >
                        {component}
                      </Link>
                    ) : (
                      <span
                        key={component}
                        className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {component}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Core showcase</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Buttons, forms, and states</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              The sections below remain as live examples, but they now sit inside calmer, more premium surfaces.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Buttons</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Primary action elements with multiple variants and states.</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Interactive</span>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Primary</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95">
                      Primary Button
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95">
                      <Download className="h-4 w-4" />
                      With Icon
                    </button>
                    <button className="rounded-full bg-muted px-5 py-3 text-sm font-semibold text-muted-foreground" disabled>
                      Disabled
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Secondary</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                      Secondary Button
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                      <Upload className="h-4 w-4" />
                      With Icon
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contextual</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
                      Success
                    </button>
                    <button className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
                      Danger
                    </button>
                    <button className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600">
                      Warning
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Sizes</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <button className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm">Small</button>
                    <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm">Medium</button>
                    <button className="rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-sm">Large</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">Form elements</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Accessible controls with compact premium form states.</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Accessible</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Text input</label>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter text here..."
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    <p className="mt-2 text-sm text-muted-foreground">Helper text goes here.</p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Search input</label>
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-2xl border border-border bg-background py-3 pl-10 pr-4 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Select dropdown</label>
                    <div className="relative">
                      <select
                        value={selectValue}
                        onChange={(e) => setSelectValue(e.target.value)}
                        className="w-full appearance-none rounded-2xl border border-border bg-background px-4 py-3 pr-10 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select an option...</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={checkboxState}
                      onChange={(e) => setCheckboxState(e.target.checked)}
                      className="h-5 w-5 rounded border-border text-primary focus:ring-primary/20"
                    />
                    <span className="text-sm font-medium text-foreground">Checkbox label</span>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-foreground">Radio group</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="radio-group"
                          value="option1"
                          checked={radioValue === 'option1'}
                          onChange={(e) => setRadioValue(e.target.value)}
                          className="h-5 w-5 border-border text-primary focus:ring-primary/20"
                        />
                        <span className="text-sm font-medium text-foreground">Option 1</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="radio-group"
                          value="option2"
                          checked={radioValue === 'option2'}
                          onChange={(e) => setRadioValue(e.target.value)}
                          className="h-5 w-5 border-border text-primary focus:ring-primary/20"
                        />
                        <span className="text-sm font-medium text-foreground">Option 2</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSwitchState(!switchState)}
                      className={`relative h-6 w-12 rounded-full transition-colors ${
                        switchState ? 'bg-emerald-700' : 'bg-muted'
                      }`}
                    >
                      <span
                        className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-background shadow-sm transition-transform ${
                          switchState ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                    <span className="text-sm font-medium text-foreground">Toggle switch</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">Badges</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Compact indicators that work in both themes.</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">Primary</span>
                  <span className="rounded-full bg-emerald-700 px-3 py-1 text-sm font-semibold text-white">Success</span>
                  <span className="rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white">Warning</span>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">Error</span>
                  <span className="rounded-full bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">Neutral</span>
                  <span className="rounded-full bg-[#FF9933] px-3 py-1 text-sm font-semibold text-white">Saffron</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Feedback surfaces</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Alerts and notifications</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Feedback components are now styled as calm, premium status surfaces instead of heavy utility blocks.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-[1.5rem] border border-emerald-200 dark:border-emerald-800/70 bg-emerald-50 dark:bg-emerald-950/30 p-5 shadow-sm">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground">Success</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Your action was completed successfully.</p>
              </div>
              <button className="text-muted-foreground transition hover:text-foreground" aria-label="Dismiss success alert">
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-4 rounded-[1.5rem] border border-blue-200 dark:border-blue-800/70 bg-blue-50 dark:bg-blue-950/30 p-5 shadow-sm">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground">Information</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Here is some important information for you.</p>
              </div>
              <button className="text-muted-foreground transition hover:text-foreground" aria-label="Dismiss information alert">
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-4 rounded-[1.5rem] border border-amber-200 dark:border-amber-800/70 bg-amber-50 dark:bg-amber-950/30 p-5 shadow-sm">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground">Warning</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Please review this information carefully.</p>
              </div>
              <button className="text-muted-foreground transition hover:text-foreground" aria-label="Dismiss warning alert">
                <X size={18} />
              </button>
            </div>

            {showAlert && (
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-red-200 dark:border-red-800/70 bg-red-50 dark:bg-red-950/30 p-5 shadow-sm">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground">Error</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">There was a problem processing your request.</p>
                </div>
                <button
                  onClick={() => setShowAlert(false)}
                  className="text-muted-foreground transition hover:text-foreground"
                  aria-label="Dismiss error alert"
                >
                  <X size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Containers</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cards and content surfaces</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Card examples are now calmer and more aligned with the updated landing-page rhythm.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-xl font-semibold text-foreground">Card title</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                This is a basic card component with a title, description, and action button.
              </p>
              <button className="mt-5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95">
                Learn more
              </button>
            </div>

            <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9933]/15 text-[#C96A00]">
                <Calendar size={22} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">With icon</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Card component featuring an icon for visual enhancement.
              </p>
              <button className="mt-5 text-sm font-semibold text-primary transition hover:text-primary/80">
                View details →
              </button>
            </div>

            <div className="rounded-[1.75rem] border border-border/70 bg-gradient-to-br from-primary via-primary/95 to-slate-950 p-6 text-primary-foreground shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <Bell size={24} />
                <span className="rounded-full bg-card/15 px-3 py-1 text-xs font-semibold">Active</span>
              </div>
              <div className="text-3xl font-semibold tracking-tight">1,234</div>
              <p className="mt-2 text-sm text-primary-foreground/80">Total services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Info size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Accessibility compliance</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
                  All components in the UX4G Design System are built with WCAG 2.1 AA compliance in mind. This includes
                  proper color contrast, keyboard navigation support, screen reader compatibility, and focus management.
                  Each component includes detailed accessibility documentation and testing guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
