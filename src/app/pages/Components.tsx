import React from 'react';
import { AlertCircle, Bell, Calendar, CheckCircle, ChevronDown, Download, Info, Package, Search, Upload, X } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function Components() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage === 'hi' ? 'hi' : 'en';
  const copy = COMPONENTS_COPY[language];
  const [showAlert, setShowAlert] = React.useState(true);
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('option1');
  const [switchState, setSwitchState] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');

  const componentCategories = [
    {
      name: copy.categories.formElements.name,
      description: copy.categories.formElements.description,
      components: ['Button', 'Input', 'Field', 'Label', 'Hint Text', 'Error Text', 'Checkbox', 'Radio', 'Switch', 'Select', 'Textarea', 'Autocomplete', 'Segmented Control', 'Date Picker', 'File Upload', 'OTP Input', 'Aadhaar Input', 'PAN Card Input', 'Address Autocomplete India', 'CAPTCHA']
    },
    {
      name: copy.categories.navigation.name,
      description: copy.categories.navigation.description,
      components: ['Header', 'Footer', 'Breadcrumb', 'Tabs', 'Pagination', 'Menu', 'Dropdown', 'Drawer', 'Back to Top', 'Stepper']
    },
    {
      name: copy.categories.feedback.name,
      description: copy.categories.feedback.description,
      components: ['Alert', 'Toast', 'Badge', 'Progress', 'Spinner', 'Modal', 'Dialog', 'Skeleton', 'Popover', 'Feedback Rating Widget']
    },
    {
      name: copy.categories.dataDisplay.name,
      description: copy.categories.dataDisplay.description,
      components: ['Table', 'Card', 'List', 'Accordion', 'Tooltip', 'Avatar', 'Tag', 'Timeline', 'Statistic', 'Description List', 'Empty State', 'Code Block', 'Tree View', 'Application Tracker', 'Data Grid', 'Document Viewer', 'Chart Library', 'Calendar Scheduler', 'QR Code']
    },
    {
      name: copy.categories.layout.name,
      description: copy.categories.layout.description,
      components: ['Container', 'Grid', 'Stack', 'Divider', 'Spacer', 'Flex', 'Center', 'Aspect Ratio', 'Show Hide', 'Section']
    },
    {
      name: copy.categories.advanced.name,
      description: copy.categories.advanced.description,
      components: ['Digital Signature', 'Map Location Picker', 'Language Selector', 'Payment Gateway', 'Chatbot', 'Rich Text Editor', 'Form Builder', 'Video Player']
    }
  ];

  const frameworkCards = [
    {
      name: 'React',
      summary: copy.frameworkCards.react.summary,
      details: '73/73 components available',
      accent: 'bg-[#005196]'
    },
    {
      name: 'Angular',
      summary: copy.frameworkCards.angular.summary,
      details: '73/73 components available',
      accent: 'bg-[#138808]'
    },
    {
      name: 'Web Components',
      summary: copy.frameworkCards.webComponents.summary,
      details: '73/73 components available',
      accent: 'bg-[#FF9933]'
    }
  ];

  const componentStats = [
    { label: copy.stats.componentFamilies, value: '6' },
    { label: copy.stats.frameworks, value: '3' },
    { label: copy.stats.docsPages, value: '73+' },
    { label: copy.stats.accessibleByDefault, value: 'AA' }
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
              {copy.hero.eyebrow}
            </div>
            <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {copy.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {copy.hero.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                to="/components/button"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                {copy.hero.exploreButton}
                <Download className="h-4 w-4" />
              </Link>
              <Link
                to="/framework-status"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted/60"
              >
                {copy.hero.frameworkSupport}
              </Link>
              <Link
                to="/resources/getting-started"
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                {copy.hero.gettingStarted}
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-border/70 bg-card/90 p-4.5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Component map</p>
                <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-foreground">{copy.hero.mapTitle}</h2>
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
                {copy.hero.includesDescription}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  {copy.hero.includes.docs}
                </span>
                <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  {copy.hero.includes.examples}
                </span>
                <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  {copy.hero.includes.accessibility}
                </span>
                <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  {copy.hero.includes.download}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2.5 text-sm text-muted-foreground">
            <span className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 font-medium text-foreground">React</span>
            <span className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 font-medium text-foreground">Angular</span>
            <span className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 font-medium text-foreground">Web Components</span>
            <span className="ml-0 rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 font-medium text-foreground">{copy.frameworkPills.documentedPages}</span>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{copy.frameworkSection.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{copy.frameworkSection.title}</h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
                {copy.frameworkSection.description}
              </p>
            </div>
            <Link to="/framework-status" className="hidden rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/60 lg:inline-flex">
              {copy.frameworkSection.openStatus}
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
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{copy.frameworkSection.ready}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{card.summary}</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{card.details}</p>
                  <Link
                    to={card.name === 'Web Components' ? '/web-components' : '/components'}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-2.5"
                  >
                    {copy.frameworkSection.view}
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{copy.categorySection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{copy.categorySection.title}</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {copy.categorySection.description}
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{copy.showcaseSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{copy.showcaseSection.title}</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {copy.showcaseSection.description}
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{copy.showcaseSection.buttons.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.showcaseSection.buttons.description}</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{copy.showcaseSection.buttons.interactive}</span>
                </div>

              <div className="space-y-8">
                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{copy.showcaseSection.buttons.primary}</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95">
                      {copy.showcaseSection.buttons.primaryButton}
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95">
                      <Download className="h-4 w-4" />
                      {copy.showcaseSection.buttons.withIcon}
                    </button>
                    <button className="rounded-full bg-muted px-5 py-3 text-sm font-semibold text-muted-foreground" disabled>
                      {copy.showcaseSection.buttons.disabled}
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{copy.showcaseSection.buttons.secondary}</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                      {copy.showcaseSection.buttons.secondaryButton}
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                      <Upload className="h-4 w-4" />
                      {copy.showcaseSection.buttons.withIcon}
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{copy.showcaseSection.buttons.contextual}</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
                      {copy.showcaseSection.buttons.success}
                    </button>
                    <button className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
                      {copy.showcaseSection.buttons.danger}
                    </button>
                    <button className="rounded-full bg-amber-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-900">
                      {copy.showcaseSection.buttons.warning}
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{copy.showcaseSection.buttons.sizes}</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <button className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm">{copy.showcaseSection.buttons.small}</button>
                    <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm">{copy.showcaseSection.buttons.medium}</button>
                    <button className="rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-sm">{copy.showcaseSection.buttons.large}</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between gap-3">
                    <div>
                    <h3 className="text-2xl font-semibold text-foreground">{copy.showcaseSection.forms.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.showcaseSection.forms.description}</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{copy.showcaseSection.forms.accessible}</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">{copy.showcaseSection.forms.textInput}</label>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={copy.showcaseSection.forms.enterText}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    <p className="mt-2 text-sm text-muted-foreground">{copy.showcaseSection.forms.helperText}</p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">{copy.showcaseSection.forms.searchInput}</label>
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input
                        type="search"
                        placeholder={copy.showcaseSection.forms.searchPlaceholder}
                        className="w-full rounded-2xl border border-border bg-background py-3 pl-10 pr-4 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="demo-select" className="mb-2 block text-sm font-semibold text-foreground">{copy.showcaseSection.forms.selectDropdown}</label>
                    <div className="relative">
                      <select
                        id="demo-select"
                        value={selectValue}
                        onChange={(e) => setSelectValue(e.target.value)}
                        className="w-full appearance-none rounded-2xl border border-border bg-background px-4 py-3 pr-10 text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">{copy.showcaseSection.forms.selectOption}</option>
                        <option value="option1">{copy.showcaseSection.forms.option1}</option>
                        <option value="option2">{copy.showcaseSection.forms.option2}</option>
                        <option value="option3">{copy.showcaseSection.forms.option3}</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={checkboxState}
                      onChange={(e) => setCheckboxState(e.target.checked)}
                      aria-label={copy.showcaseSection.forms.checkboxLabel}
                      className="h-5 w-5 rounded border-border text-primary focus:ring-primary/20"
                    />
                    <span className="text-sm font-medium text-foreground">{copy.showcaseSection.forms.checkboxLabel}</span>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-foreground">{copy.showcaseSection.forms.radioGroup}</label>
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
                        <span className="text-sm font-medium text-foreground">{copy.showcaseSection.forms.option1}</span>
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
                        <span className="text-sm font-medium text-foreground">{copy.showcaseSection.forms.option2}</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      aria-label={switchState ? copy.showcaseSection.forms.toggleOff : copy.showcaseSection.forms.toggleOn}
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
                    <span className="text-sm font-medium text-foreground">{copy.showcaseSection.forms.toggleSwitch}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{copy.showcaseSection.badges.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.showcaseSection.badges.description}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">{copy.showcaseSection.badges.primary}</span>
                  <span className="rounded-full bg-emerald-700 px-3 py-1 text-sm font-semibold text-white">{copy.showcaseSection.badges.success}</span>
                  <span className="rounded-full bg-amber-700 px-3 py-1 text-sm font-semibold text-white">{copy.showcaseSection.badges.warning}</span>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">{copy.showcaseSection.badges.error}</span>
                  <span className="rounded-full bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">{copy.showcaseSection.badges.neutral}</span>
                  <span className="rounded-full bg-[#7c4a00] px-3 py-1 text-sm font-semibold text-white">{copy.showcaseSection.badges.saffron}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{copy.feedbackSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{copy.feedbackSection.title}</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {copy.feedbackSection.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-[1.5rem] border border-emerald-200 dark:border-emerald-800/70 bg-emerald-50 dark:bg-emerald-950/30 p-5 shadow-sm">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground">Success</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy.feedbackSection.successMessage}</p>
              </div>
              <button className="text-muted-foreground transition hover:text-foreground" aria-label={copy.feedbackSection.dismissSuccess}>
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-4 rounded-[1.5rem] border border-blue-200 dark:border-blue-800/70 bg-blue-50 dark:bg-blue-950/30 p-5 shadow-sm">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground">{copy.feedbackSection.information}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy.feedbackSection.informationMessage}</p>
              </div>
              <button className="text-muted-foreground transition hover:text-foreground" aria-label={copy.feedbackSection.dismissInformation}>
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-4 rounded-[1.5rem] border border-amber-200 dark:border-amber-800/70 bg-amber-50 dark:bg-amber-950/30 p-5 shadow-sm">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground">{copy.feedbackSection.warning}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy.feedbackSection.warningMessage}</p>
              </div>
              <button className="text-muted-foreground transition hover:text-foreground" aria-label={copy.feedbackSection.dismissWarning}>
                <X size={18} />
              </button>
            </div>

            {showAlert && (
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-red-200 dark:border-red-800/70 bg-red-50 dark:bg-red-950/30 p-5 shadow-sm">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground">{copy.feedbackSection.error}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy.feedbackSection.errorMessage}</p>
                </div>
                <button
                  onClick={() => setShowAlert(false)}
                  className="text-muted-foreground transition hover:text-foreground"
                  aria-label={copy.feedbackSection.dismissError}
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{copy.surfaceSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{copy.surfaceSection.title}</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {copy.surfaceSection.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-xl font-semibold text-foreground">{copy.surfaceSection.cardTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {copy.surfaceSection.cardDescription}
              </p>
              <button className="mt-5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95">
                {copy.surfaceSection.learnMore}
              </button>
            </div>

            <div className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9933]/15 text-[#C96A00]">
                <Calendar size={22} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{copy.surfaceSection.withIcon}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {copy.surfaceSection.withIconDescription}
              </p>
              <button className="mt-5 text-sm font-semibold text-primary transition hover:text-primary/80">
                {copy.surfaceSection.viewDetails}
              </button>
            </div>

            <div className="rounded-[1.75rem] border border-border/70 bg-gradient-to-br from-primary via-primary/95 to-slate-950 p-6 text-primary-foreground shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <Bell size={24} />
                <span className="rounded-full bg-card/15 px-3 py-1 text-xs font-semibold">{copy.surfaceSection.active}</span>
              </div>
              <div className="text-3xl font-semibold tracking-tight">1,234</div>
              <p className="mt-2 text-sm text-primary-foreground/80">{copy.surfaceSection.totalServices}</p>
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
                <h3 className="text-xl font-semibold text-foreground">{copy.complianceSection.title}</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
                  {copy.complianceSection.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const COMPONENTS_COPY = {
  en: {
    hero: {
      eyebrow: 'Component library for government service delivery',
      title: 'Components',
      description:
        'Production-ready building blocks for UX4G applications across React, Angular, and Web Components. The same patterns, states, and accessibility guidance carry through every implementation.',
      exploreButton: 'Explore button',
      frameworkSupport: 'Framework support',
      gettingStarted: 'Getting started',
      mapTitle: 'What the hub covers',
      includesDescription:
        'Component pages, live examples, accessibility notes, and implementation guidance for teams shipping government services.',
      includes: {
        docs: 'Docs',
        examples: 'Examples',
        accessibility: 'Accessibility',
        download: 'Download',
      },
    },
    stats: {
      componentFamilies: 'Component families',
      frameworks: 'Frameworks',
      docsPages: 'Docs pages',
      accessibleByDefault: 'Accessible by default',
    },
    frameworkPills: {
      documentedPages: '73+ documented pages',
    },
    frameworkSection: {
      eyebrow: 'Framework support',
      title: 'Multi-framework delivery',
      description:
        'UX4G components are aligned across the three delivery paths so teams can adopt the same service language without rethinking the design system.',
      openStatus: 'Open status',
      ready: 'Ready',
      view: 'View',
    },
    frameworkCards: {
      react: {
        summary: 'Production-ready component APIs with current documentation and reference flows.',
      },
      angular: {
        summary: 'Framework-matched components for enterprise implementations and service teams.',
      },
      webComponents: {
        summary: 'Framework-agnostic HTML-first delivery for cross-stack portability.',
      },
    },
    categorySection: {
      eyebrow: 'Component families',
      title: 'Browse by category',
      description:
        'Each card groups the working set of pages and keeps the documentation paths visible for quick scanning.',
    },
    categories: {
      formElements: {
        name: 'Form Elements',
        description: 'High-frequency controls for service journeys and authenticated workflows.',
      },
      navigation: {
        name: 'Navigation',
        description: 'Structure for movement, discovery, and page-to-page orientation.',
      },
      feedback: {
        name: 'Feedback',
        description: 'Messages, states, and system responses that keep users informed.',
      },
      dataDisplay: {
        name: 'Data Display',
        description: 'Readable presentation surfaces for records, metrics, and evidence.',
      },
      layout: {
        name: 'Layout',
        description: 'Structural primitives that keep the interface balanced and responsive.',
      },
      advanced: {
        name: 'Advanced Components',
        description: 'Specialized patterns for complex government service scenarios.',
      },
    },
    showcaseSection: {
      eyebrow: 'Core showcase',
      title: 'Buttons, forms, and states',
      description:
        'The sections below remain as live examples, but they now sit inside calmer, more premium surfaces.',
      buttons: {
        title: 'Buttons',
        description: 'Primary action elements with multiple variants and states.',
        interactive: 'Interactive',
        primary: 'Primary',
        primaryButton: 'Primary Button',
        withIcon: 'With Icon',
        disabled: 'Disabled',
        secondary: 'Secondary',
        secondaryButton: 'Secondary Button',
        contextual: 'Contextual',
        success: 'Success',
        danger: 'Danger',
        warning: 'Warning',
        sizes: 'Sizes',
        small: 'Small',
        medium: 'Medium',
        large: 'Large',
      },
      forms: {
        title: 'Form elements',
        description: 'Accessible controls with compact premium form states.',
        accessible: 'Accessible',
        textInput: 'Text input',
        enterText: 'Enter text here...',
        helperText: 'Helper text goes here.',
        searchInput: 'Search input',
        searchPlaceholder: 'Search...',
        selectDropdown: 'Select dropdown',
        selectOption: 'Select an option...',
        checkboxLabel: 'Checkbox label',
        radioGroup: 'Radio group',
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
        toggleSwitch: 'Toggle switch',
        toggleOn: 'Toggle switch on',
        toggleOff: 'Toggle switch off',
      },
      badges: {
        title: 'Badges',
        description: 'Compact indicators that work in both themes.',
        primary: 'Primary',
        success: 'Success',
        warning: 'Warning',
        error: 'Error',
        neutral: 'Neutral',
        saffron: 'Saffron',
      },
    },
    feedbackSection: {
      eyebrow: 'Feedback surfaces',
      title: 'Alerts and notifications',
      description:
        'Feedback components are now styled as calm, premium status surfaces instead of heavy utility blocks.',
      successMessage: 'Your action was completed successfully.',
      dismissSuccess: 'Dismiss success alert',
      information: 'Information',
      informationMessage: 'Here is some important information for you.',
      dismissInformation: 'Dismiss information alert',
      warning: 'Warning',
      warningMessage: 'Please review this information carefully.',
      dismissWarning: 'Dismiss warning alert',
      error: 'Error',
      errorMessage: 'There was a problem processing your request.',
      dismissError: 'Dismiss error alert',
    },
    surfaceSection: {
      eyebrow: 'Containers',
      title: 'Cards and content surfaces',
      description: 'Card examples are now calmer and more aligned with the updated landing-page rhythm.',
      cardTitle: 'Card title',
      cardDescription: 'This is a basic card component with a title, description, and action button.',
      learnMore: 'Learn more',
      withIcon: 'With icon',
      withIconDescription: 'Card component featuring an icon for visual enhancement.',
      viewDetails: 'View details →',
      active: 'Active',
      totalServices: 'Total services',
    },
    complianceSection: {
      title: 'Accessibility compliance',
      description:
        'All components in the UX4G Design System are built with WCAG 2.1 AA compliance in mind. This includes proper color contrast, keyboard navigation support, screen reader compatibility, and focus management. Each component includes detailed accessibility documentation and testing guidelines.',
    },
  },
  hi: {
    hero: {
      eyebrow: 'सरकारी सेवा वितरण के लिए component library',
      title: 'घटक',
      description:
        'React, Angular और Web Components में UX4G applications के लिए production-ready building blocks. वही patterns, states और accessibility guidance हर implementation में सुसंगत रहती है।',
      exploreButton: 'Button देखें',
      frameworkSupport: 'Framework support',
      gettingStarted: 'शुरू करें',
      mapTitle: 'यह hub क्या कवर करता है',
      includesDescription:
        'सरकारी सेवाएं बनाने वाली टीमों के लिए component pages, live examples, accessibility notes और implementation guidance.',
      includes: {
        docs: 'Docs',
        examples: 'Examples',
        accessibility: 'Accessibility',
        download: 'Download',
      },
    },
    stats: {
      componentFamilies: 'Component families',
      frameworks: 'Frameworks',
      docsPages: 'Docs pages',
      accessibleByDefault: 'डिफ़ॉल्ट रूप से accessible',
    },
    frameworkPills: {
      documentedPages: '73+ documented pages',
    },
    frameworkSection: {
      eyebrow: 'Framework support',
      title: 'Multi-framework delivery',
      description:
        'UX4G components तीनों delivery paths में aligned हैं, ताकि टीमें design system को फिर से सोचे बिना वही service language अपना सकें।',
      openStatus: 'Status खोलें',
      ready: 'तैयार',
      view: 'देखें',
    },
    frameworkCards: {
      react: {
        summary: 'वर्तमान documentation और reference flows के साथ production-ready component APIs.',
      },
      angular: {
        summary: 'Enterprise implementations और service teams के लिए framework-matched components.',
      },
      webComponents: {
        summary: 'Cross-stack portability के लिए framework-agnostic HTML-first delivery.',
      },
    },
    categorySection: {
      eyebrow: 'Component families',
      title: 'Category के अनुसार देखें',
      description:
        'हर card संबंधित pages के working set को एक साथ रखता है और documentation paths को तेज़ी से scan करने के लिए दिखाता है।',
    },
    categories: {
      formElements: {
        name: 'Form Elements',
        description: 'Service journeys और authenticated workflows के लिए high-frequency controls.',
      },
      navigation: {
        name: 'Navigation',
        description: 'Movement, discovery और page-to-page orientation के लिए संरचना।',
      },
      feedback: {
        name: 'Feedback',
        description: 'Messages, states और system responses जो users को सूचित रखते हैं।',
      },
      dataDisplay: {
        name: 'Data Display',
        description: 'Records, metrics और evidence के लिए पठनीय presentation surfaces.',
      },
      layout: {
        name: 'Layout',
        description: 'Structural primitives जो interface को संतुलित और responsive बनाए रखते हैं।',
      },
      advanced: {
        name: 'Advanced Components',
        description: 'जटिल सरकारी सेवा परिदृश्यों के लिए specialized patterns.',
      },
    },
    showcaseSection: {
      eyebrow: 'Core showcase',
      title: 'Buttons, forms और states',
      description:
        'नीचे दिए गए sections live examples बने रहते हैं, लेकिन अब वे अधिक शांत और premium surfaces में प्रस्तुत हैं।',
      buttons: {
        title: 'Buttons',
        description: 'कई variants और states वाले primary action elements.',
        interactive: 'Interactive',
        primary: 'Primary',
        primaryButton: 'Primary Button',
        withIcon: 'Icon के साथ',
        disabled: 'Disabled',
        secondary: 'Secondary',
        secondaryButton: 'Secondary Button',
        contextual: 'Contextual',
        success: 'Success',
        danger: 'Danger',
        warning: 'Warning',
        sizes: 'Sizes',
        small: 'Small',
        medium: 'Medium',
        large: 'Large',
      },
      forms: {
        title: 'Form elements',
        description: 'Compact premium form states के साथ accessible controls.',
        accessible: 'Accessible',
        textInput: 'Text input',
        enterText: 'यहाँ टेक्स्ट दर्ज करें...',
        helperText: 'Helper text यहाँ दिखेगा।',
        searchInput: 'Search input',
        searchPlaceholder: 'खोजें...',
        selectDropdown: 'Select dropdown',
        selectOption: 'एक विकल्प चुनें...',
        checkboxLabel: 'Checkbox label',
        radioGroup: 'Radio group',
        option1: 'विकल्प 1',
        option2: 'विकल्प 2',
        option3: 'विकल्प 3',
        toggleSwitch: 'Toggle switch',
        toggleOn: 'Toggle switch on',
        toggleOff: 'Toggle switch off',
      },
      badges: {
        title: 'Badges',
        description: 'Compact indicators जो दोनों themes में काम करते हैं।',
        primary: 'Primary',
        success: 'Success',
        warning: 'Warning',
        error: 'Error',
        neutral: 'Neutral',
        saffron: 'Saffron',
      },
    },
    feedbackSection: {
      eyebrow: 'Feedback surfaces',
      title: 'Alerts और notifications',
      description:
        'Feedback components अब भारी utility blocks की जगह शांत, premium status surfaces के रूप में स्टाइल किए गए हैं।',
      successMessage: 'आपकी कार्रवाई सफलतापूर्वक पूरी हो गई।',
      dismissSuccess: 'Success alert बंद करें',
      information: 'जानकारी',
      informationMessage: 'आपके लिए यहाँ एक महत्वपूर्ण सूचना है।',
      dismissInformation: 'Information alert बंद करें',
      warning: 'चेतावनी',
      warningMessage: 'कृपया इस जानकारी की सावधानीपूर्वक समीक्षा करें।',
      dismissWarning: 'Warning alert बंद करें',
      error: 'त्रुटि',
      errorMessage: 'आपके अनुरोध को प्रोसेस करने में समस्या हुई।',
      dismissError: 'Error alert बंद करें',
    },
    surfaceSection: {
      eyebrow: 'Containers',
      title: 'Cards और content surfaces',
      description: 'Card examples अब अधिक शांत हैं और अपडेटेड landing-page rhythm के साथ बेहतर मेल खाते हैं।',
      cardTitle: 'Card title',
      cardDescription: 'यह एक basic card component है जिसमें title, description और action button शामिल है।',
      learnMore: 'और जानें',
      withIcon: 'Icon के साथ',
      withIconDescription: 'Visual enhancement के लिए icon वाला card component.',
      viewDetails: 'विवरण देखें →',
      active: 'सक्रिय',
      totalServices: 'कुल सेवाएं',
    },
    complianceSection: {
      title: 'Accessibility compliance',
      description:
        'UX4G Design System के सभी components को WCAG 2.1 AA compliance को ध्यान में रखकर बनाया गया है। इसमें उचित color contrast, keyboard navigation support, screen reader compatibility और focus management शामिल हैं। हर component के साथ विस्तृत accessibility documentation और testing guidelines भी शामिल हैं।',
    },
  },
} as const;
