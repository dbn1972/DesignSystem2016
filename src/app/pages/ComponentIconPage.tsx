import { ComponentProps, useMemo, useState } from "react";
import {
  AccessibilityIcon,
  ArrowLeftIcon,
  CaseIcon,
  CertificateIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckIcon,
  ContrastIcon,
  DeleteIcon,
  DocumentIcon,
  DownloadIcon,
  HomeIcon,
  Icon,
  LanguageIcon,
  LinkIcon,
  PlusIcon,
  PrintIcon,
  ReceiptIcon,
  SearchIcon,
  ShareIcon,
  ServiceIcon,
  SettingsIcon,
  ShieldIcon,
  UX4G_ICON_ALIASES,
  UX4G_ICON_METADATA,
  UX4G_ICONS,
  UX4G_ICON_SVGS,
  WarningIcon
} from "../react-core-package/src/icons";

const CATEGORY_ORDER = [
  "navigation",
  "actions",
  "status",
  "users",
  "security",
  "communication",
  "data",
  "files",
  "accessibility",
  "system",
  "government"
] as const;

const CATEGORY_LABELS: Record<(typeof CATEGORY_ORDER)[number], string> = {
  navigation: "Navigation",
  actions: "Actions",
  status: "Status and alerts",
  users: "Users and admin",
  security: "Security and privacy",
  communication: "Communication",
  data: "Data and scheduling",
  files: "Files and documents",
  accessibility: "Accessibility tooling",
  system: "System and layout",
  government: "Government workflows"
};

const RULES = [
  "Every icon is built on a 24px grid with a 1.75 stroke and soft geometric corners.",
  "Shapes stay legible at 16px and 20px before they are considered complete.",
  "Icons inherit currentColor so they work with semantic text tokens in light, dark, and high-contrast themes.",
  "Metaphors stay single-purpose and enterprise appropriate: no decorative illustration language, no mixed styles."
];

const DOS = [
  "Pair icon-only buttons with an accessible label on the control.",
  "Use semantic text color or status tokens on the parent element.",
  "Combine status icons with text in alerts, badges, tables, and workflows.",
  "Prefer the named components for common imports and the registry for dynamic usage."
];

const DONTS = [
  "Do not mix these icons with filled, playful, or duotone third-party sets in the same surface.",
  "Do not shrink the stroke below the system default to fit extra detail.",
  "Do not use icons as the only communication channel for errors, warnings, or success.",
  "Do not create near-duplicate metaphors when one system icon already covers the concept."
];

const ALIAS_ENTRIES = Object.entries(UX4G_ICON_ALIASES);
const SIZE_OPTIONS = [
  { label: "16px", value: 16 },
  { label: "20px", value: 20 },
  { label: "24px", value: 24 },
  { label: "32px", value: 32 }
] as const;
const THEME_OPTIONS = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "High contrast", value: "high-contrast" }
] as const;

function downloadTextFile(content: string, filename: string) {
  const blob = new Blob([content], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function buildImportSnippet(name: keyof typeof UX4G_ICONS) {
  const componentName = UX4G_ICON_METADATA[name].name;
  return `import { ${componentName} } from "@ux4g/react-core";`;
}

function buildNamedUsageSnippet(name: keyof typeof UX4G_ICONS) {
  const componentName = UX4G_ICON_METADATA[name].name;
  return `<${componentName} decorative />`;
}

function buildDynamicUsageSnippet(name: keyof typeof UX4G_ICONS) {
  return `<Icon name="${name}" decorative />`;
}

function buildAliases(name: keyof typeof UX4G_ICONS) {
  return ALIAS_ENTRIES.filter(([, canonical]) => canonical === name).map(([alias]) => alias);
}

function IconTile({
  name,
  previewSize,
  previewTheme
}: {
  name: keyof typeof UX4G_ICONS;
  previewSize: number;
  previewTheme: (typeof THEME_OPTIONS)[number]["value"];
}) {
  const metadata = UX4G_ICON_METADATA[name];
  const [copied, setCopied] = useState<null | "import" | "named" | "dynamic" | "name" | "svg">(null);
  const aliases = buildAliases(name);

  const previewClasses =
    previewTheme === "dark"
      ? "border-slate-700 bg-slate-950 text-slate-100"
      : previewTheme === "high-contrast"
        ? "border-black bg-white text-black"
        : "border-border bg-muted text-foreground";

  const copyValue = async (value: string, kind: "import" | "named" | "dynamic" | "name" | "svg") => {
    await navigator.clipboard.writeText(value);
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${previewClasses}`}>
          <Icon name={name} size={previewSize} decorative />
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          <button
            type="button"
            onClick={() => copyValue(buildImportSnippet(name), "import")}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/25 hover:text-primary"
          >
            {copied === "import" ? "Copied import" : "Copy import"}
          </button>
          <button
            type="button"
            onClick={() => copyValue(buildNamedUsageSnippet(name), "named")}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/25 hover:text-primary"
          >
            {copied === "named" ? "Copied JSX" : "Copy JSX"}
          </button>
          <button
            type="button"
            onClick={() => copyValue(buildDynamicUsageSnippet(name), "dynamic")}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/25 hover:text-primary"
          >
            {copied === "dynamic" ? "Copied dynamic" : "Copy dynamic"}
          </button>
          <button
            type="button"
            onClick={() => copyValue(name, "name")}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/25 hover:text-primary"
          >
            {copied === "name" ? "Copied name" : "Copy name"}
          </button>
          <button
            type="button"
            onClick={() => copyValue(UX4G_ICON_SVGS[name], "svg")}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/25 hover:text-primary"
          >
            {copied === "svg" ? "Copied SVG" : "Copy SVG"}
          </button>
          <button
            type="button"
            onClick={() => downloadTextFile(UX4G_ICON_SVGS[name], `${name}.svg`)}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/25 hover:text-primary"
          >
            Download SVG
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-foreground">{metadata.displayName}</p>
        <p className="font-mono text-xs text-muted-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{metadata.keywords.slice(0, 3).join(" · ")}</p>
        {aliases.length > 0 ? (
          <p className="text-xs text-muted-foreground">
            Aliases: <span className="font-mono">{aliases.join(", ")}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}

function UsageExample({
  title,
  children,
  code
}: {
  title: string;
  children: React.ReactNode;
  code: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="mb-4 rounded-2xl border border-dashed border-border bg-background p-6">
        {children}
      </div>
      <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function IconButton({
  icon: IconComponent,
  children,
  variant = "primary"
}: {
  icon: (props: ComponentProps<typeof SearchIcon>) => JSX.Element;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}) {
  const variantClasses =
    variant === "secondary"
      ? "border-primary/25 bg-card text-primary"
      : variant === "danger"
        ? "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400"
        : "border-primary bg-primary text-white";

  return (
    <button type="button" className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium ${variantClasses}`}>
      <IconComponent size="md" decorative />
      {children}
    </button>
  );
}

export default function ComponentIconPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | (typeof CATEGORY_ORDER)[number]>("all");
  const [previewSize, setPreviewSize] = useState<number>(24);
  const [previewTheme, setPreviewTheme] = useState<(typeof THEME_OPTIONS)[number]["value"]>("light");

  const filteredGroups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return CATEGORY_ORDER.map((category) => {
      const icons = Object.entries(UX4G_ICON_METADATA).filter(([name, metadata]) => {
        if (activeCategory !== "all" && metadata.category !== activeCategory) {
          return false;
        }

        if (metadata.category !== category) {
          return false;
        }

        if (!normalizedQuery) {
          return true;
        }

        return (
          name.includes(normalizedQuery) ||
          metadata.displayName.toLowerCase().includes(normalizedQuery) ||
          metadata.keywords.some((keyword) => keyword.toLowerCase().includes(normalizedQuery))
        );
      });

      return {
        category,
        label: CATEGORY_LABELS[category],
        icons
      };
    }).filter((group) => group.icons.length > 0);
  }, [activeCategory, query]);

  const filteredCount = filteredGroups.reduce((count, group) => count + group.icons.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-card relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,81,150,0.12),_transparent_42%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(0,81,150,0.25),_transparent_42%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                <ServiceIcon size="sm" decorative />
                Application icon system
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  A first-party icon language for government-grade products
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  UX4G icons are designed for forms, dashboards, search, accessibility tooling, and
                  public-service workflows. The system keeps stroke, geometry, and naming consistent
                  so teams can ship interfaces that feel trustworthy and modern.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {RULES.map((rule) => (
                  <div key={rule} className="rounded-2xl border border-border bg-card px-4 py-4 text-sm text-muted-foreground shadow-sm">
                    {rule}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 rounded-[28px] border border-border bg-card/80 p-5 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] backdrop-blur">
              <div className="grid grid-cols-3 gap-3">
                {[
                  "home",
                  "search",
                  "link",
                  "download",
                  "certificate",
                  "shield",
                  "language",
                  "accessibility",
                  "dashboard",
                  "settings"
                ].map((name) => (
                  <div key={name} className="rounded-2xl border border-border bg-background p-4">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon name={name as keyof typeof UX4G_ICONS} size="lg" decorative />
                    </div>
                    <div className="text-xs font-medium text-foreground">
                      {UX4G_ICON_METADATA[name as keyof typeof UX4G_ICONS].displayName}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                <div className="mb-2 flex items-center gap-2 font-semibold">
                  <ShieldIcon size="sm" decorative />
                  Enterprise-ready defaults
                </div>
                <p>
                  Raw SVG assets, typed React components, a registry for dynamic rendering, and
                  accessibility-safe defaults all come from one source of truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Grid and stroke rules</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>24px base canvas with 2px optical padding.</li>
              <li>1.75 stroke at 24px, preserved for 20px and 16px scaling.</li>
              <li>Simple geometry first, filled accents only for optical anchors.</li>
              <li>Round joins and caps to stay readable in dense admin surfaces.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Size guidance</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">16px</strong>: dense tables, metadata, compact actions.</li>
              <li><strong className="text-foreground">20px</strong>: buttons, inputs, and navigation items.</li>
              <li><strong className="text-foreground">24px</strong>: default application size and icon tiles.</li>
              <li><strong className="text-foreground">32px</strong>: hero, feature callouts, and onboarding.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Theming behavior</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Icons inherit <code>currentColor</code> by default.</li>
              <li>Use semantic text tokens for status and theme adaptation.</li>
              <li>In high-contrast modes, avoid reduced-opacity icon treatments.</li>
              <li>Do not encode meaning with color alone.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <LinkIcon size="md" decorative />
            Developer actions and aliases
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Every icon tile now supports direct copy/download actions for faster adoption in product code.</p>
              <ul className="space-y-2">
                <li>Copy React import statement</li>
                <li>Copy named JSX usage and dynamic registry usage</li>
                <li>Copy canonical icon name for dynamic registry usage</li>
                <li>Copy production SVG markup</li>
                <li>Download a single optimized SVG asset</li>
              </ul>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Common aliases resolve to canonical names so teams can use the terms they naturally search for without creating duplicate icons.</p>
              <div className="flex flex-wrap gap-2">
                {ALIAS_ENTRIES.slice(0, 8).map(([alias, canonical]) => (
                  <span key={alias} className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-foreground">
                    {alias} → {canonical}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <ContrastIcon size="md" decorative />
            Preview controls
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm text-muted-foreground">Evaluate icons at the sizes product teams use most often.</p>
              <div className="flex flex-wrap gap-2">
                {SIZE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setPreviewSize(option.value)}
                    className={`rounded-full border px-3 py-2 text-xs font-medium ${previewSize === option.value ? "border-primary bg-primary text-white" : "border-border bg-background text-muted-foreground"}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm text-muted-foreground">Check legibility across light, dark, and high-contrast surfaces.</p>
              <div className="flex flex-wrap gap-2">
                {THEME_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setPreviewTheme(option.value)}
                    className={`rounded-full border px-3 py-2 text-xs font-medium ${previewTheme === option.value ? "border-primary bg-primary text-white" : "border-border bg-background text-muted-foreground"}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-4">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Named component</div>
              <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs text-slate-100"><code>{`import { HomeIcon } from "@ux4g/react-core";

<HomeIcon size={${previewSize}} decorative />`}</code></pre>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Dynamic usage</div>
              <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs text-slate-100"><code>{`import { Icon } from "@ux4g/react-core";

<Icon name="home" size={${previewSize}} decorative />`}</code></pre>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Preview summary</div>
              <p className="text-sm text-muted-foreground">
                Current preview is set to <span className="font-medium text-foreground">{previewSize}px</span> on a{" "}
                <span className="font-medium text-foreground">{previewTheme === "high-contrast" ? "high-contrast" : previewTheme}</span> surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Usage examples</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              The library now includes navigation primitives, linking and sharing actions, and
              stronger public-service workflow coverage alongside the original core set.
            </p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <UsageExample
            title="Buttons and toolbars"
            code={`import { DownloadIcon, PrintIcon, SearchIcon } from "@ux4g/react-core";

<button aria-label="Search records">
  <SearchIcon decorative />
</button>

<button>
  <DownloadIcon decorative />
  Export report
</button>`}
          >
            <div className="flex flex-wrap gap-3">
              <IconButton icon={SearchIcon}>Search records</IconButton>
              <IconButton icon={DownloadIcon} variant="secondary">Export report</IconButton>
              <IconButton icon={PrintIcon} variant="secondary">Print summary</IconButton>
              <IconButton icon={DeleteIcon} variant="danger">Delete file</IconButton>
            </div>
          </UsageExample>

          <UsageExample
            title="Status and guidance"
            code={`import { CheckIcon, WarningIcon, ShieldIcon } from "@ux4g/react-core";

<Alert>
  <WarningIcon decorative />
  Review the uploaded file before submission.
</Alert>`}
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 p-4 text-sm text-emerald-950 dark:text-emerald-200">
                <CheckIcon className="mt-0.5 text-emerald-700 dark:text-emerald-400" decorative />
                Payment receipt is ready to download.
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4 text-sm text-amber-950 dark:text-amber-200">
                <WarningIcon className="mt-0.5 text-amber-700 dark:text-amber-400" decorative />
                Review the form before resubmitting.
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-4 text-sm text-blue-950 dark:text-blue-200">
                <ShieldIcon className="mt-0.5 text-blue-700 dark:text-blue-400" decorative />
                Session activity is protected by secure verification.
              </div>
            </div>
          </UsageExample>

          <UsageExample
            title="Forms and global navigation"
            code={`import { ArrowLeftIcon, ChevronDownIcon, SearchIcon, LanguageIcon, SettingsIcon } from "@ux4g/react-core";

<div className="relative">
  <SearchIcon decorative className="absolute left-3 top-1/2 -translate-y-1/2" />
  <input aria-label="Search services" />
</div>`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground">
                <button type="button" className="inline-flex items-center gap-2 font-medium text-primary">
                  <ArrowLeftIcon size="sm" decorative />
                  Back
                </button>
                <div className="ml-auto inline-flex items-center gap-2 text-muted-foreground">
                  Documents
                  <ChevronRightIcon size="sm" decorative />
                  Certificates
                </div>
              </div>
              <div className="relative">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size="md" decorative />
                <input
                  aria-label="Search services"
                  className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground"
                  defaultValue="Search services"
                />
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-3 text-sm text-foreground">
                <LanguageIcon size="md" decorative />
                Hindi
                <div className="ml-auto flex items-center gap-2 text-muted-foreground">
                  <ChevronDownIcon size="sm" decorative />
                  <SettingsIcon size="md" decorative />
                  Preferences
                </div>
              </div>
            </div>
          </UsageExample>

          <UsageExample
            title="Links and service workflows"
            code={`import { CertificateIcon, LinkIcon, ReceiptIcon, ShareIcon } from "@ux4g/react-core";

<a href="/services/certificate" className="inline-flex items-center gap-2">
  <CertificateIcon decorative />
  Certificate service
  <LinkIcon size="sm" decorative />
</a>`}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <a href="#0" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                  <CertificateIcon size="md" decorative />
                  Certificate service
                  <LinkIcon size="sm" decorative />
                </a>
                <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                  <ShareIcon size="md" decorative />
                  Share status
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card p-4 text-sm text-foreground">
                  <ReceiptIcon className="mb-3 text-primary" decorative />
                  Payment receipt
                </div>
                <div className="rounded-2xl border border-border bg-card p-4 text-sm text-foreground">
                  <CaseIcon className="mb-3 text-primary" decorative />
                  Case review
                </div>
                <div className="rounded-2xl border border-border bg-card p-4 text-sm text-foreground">
                  <PlusIcon className="mb-3 text-primary" decorative />
                  Add document
                </div>
              </div>
            </div>
          </UsageExample>
        </div>
      </section>

      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Core icon library</h2>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                The first release includes {Object.keys(UX4G_ICONS).length} icons covering navigation,
                actions, files, accessibility, security, and government workflows.
              </p>
            </div>
          </div>

          <div className="mb-8 grid gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <label className="relative block">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size="md" decorative />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search icons by name, label, or keyword"
                className="w-full rounded-2xl border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground"
                aria-label="Search icons"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`rounded-full border px-3 py-2 text-xs font-medium ${activeCategory === "all" ? "border-primary bg-primary text-white" : "border-border bg-background text-muted-foreground"}`}
              >
                All
              </button>
              {CATEGORY_ORDER.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-3 py-2 text-xs font-medium ${activeCategory === category ? "border-primary bg-primary text-white" : "border-border bg-background text-muted-foreground"}`}
                >
                  {CATEGORY_LABELS[category]}
                </button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground lg:col-span-2">
              Showing {filteredCount} icons{query ? ` for "${query}"` : ""}.
            </div>
          </div>

          <div className="space-y-10">
            {filteredGroups.map(({ category, label, icons }) => (
              <div key={category}>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">{label}</h3>
                  <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                    {icons.length} icons
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
                  {icons.map(([name]) => (
                    <IconTile
                      key={name}
                      name={name as keyof typeof UX4G_ICONS}
                      previewSize={previewSize}
                      previewTheme={previewTheme}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredCount === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-border bg-background px-6 py-10 text-center text-sm text-muted-foreground">
              No icons match the current search. Try a broader term like <span className="font-medium text-foreground">service</span>, <span className="font-medium text-foreground">status</span>, or <span className="font-medium text-foreground">document</span>.
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 p-6">
          <h2 className="mb-4 text-lg font-semibold text-emerald-950 dark:text-emerald-200">Do</h2>
          <ul className="space-y-3 text-sm text-emerald-900 dark:text-emerald-300">
            {DOS.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckIcon className="mt-0.5 text-emerald-700 dark:text-emerald-400" size="sm" decorative />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-6">
          <h2 className="mb-4 text-lg font-semibold text-red-950 dark:text-red-200">Do not</h2>
          <ul className="space-y-3 text-sm text-red-900 dark:text-red-300">
            {DONTS.map((item) => (
              <li key={item} className="flex gap-3">
                <DeleteIcon className="mt-0.5 text-red-700 dark:text-red-400" size="sm" decorative />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-border bg-card p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Engineering architecture</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                The icon system uses one definition file for metaphor metadata and vector geometry,
                then fans out to typed React components, a dynamic registry, and raw SVG assets.
                That keeps product usage fast while keeping the library scalable for future additions.
              </p>
              <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-xs text-slate-100">
                <code>{`src/app/react-core-package/src/icons/
  iconDefinitions.json
  createIcon.tsx
  icons.tsx
  registry.ts
  Icon.tsx
  svg/*.svg
scripts/generate-ux4g-icons.mjs`}</code>
              </pre>
            </div>
            <div className="rounded-3xl border border-border bg-background p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <DocumentIcon size="sm" decorative />
                Recommended next icons
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Print, Share, Link, and More horizontal for admin toolbars</li>
                <li>Receipt, Certificate, and Case workflow symbols for service journeys</li>
                <li>Sort ascending and descending split variants for data-heavy tables</li>
                <li>Image, Video, and QR scan actions for richer media workflows</li>
                <li>Focus, Font size, and High contrast variants for accessibility tooling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
