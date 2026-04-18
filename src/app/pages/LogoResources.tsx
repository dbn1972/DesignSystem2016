/**
 * Logo Resources Page — redesigned to match the Icons page structure.
 */

import { useMemo, useState } from 'react';
import {
  Search, ExternalLink, Grid3X3, List, Shield, CheckCircle, XCircle,
  Layers, Maximize2, Palette, Building2, Download, Copy,
} from 'lucide-react';
import { LOGO_REGISTRY, LOGO_CATEGORIES, type LogoEntry, type LogoCategory } from '../content/logo-data';

type DownloadFilter = 'all' | 'with-downloads' | 'png' | 'svg' | 'archive-only';

// ── Featured logos for the hero showcase ──
const FEATURED_SLUGS = [
  'national-emblem', 'digital-india', 'aadhaar', 'swachh-bharat',
  'my-gov', 'startup-india', 'bhim', 'digilocker', 'skill-india', 'khelo-india',
];

const RULES = [
  'Always use official source files from ux4g.gov.in — never recreate or redraw government logos.',
  'Maintain the original aspect ratio. Never stretch, compress, or skew a logo.',
  'Ensure sufficient clear space around logos — at least 50% of the logo height on all sides.',
  'Use approved color variants only. Do not recolor, add gradients, or apply effects to official logos.',
];

const DOS = [
  'Use official source files downloaded from the UX4G logo library.',
  'Maintain the original aspect ratio at all times.',
  'Place logos on backgrounds with sufficient contrast.',
  'Follow minimum size guidelines — never render below 24px height.',
  'Use the correct language variant (Hindi/English) where both exist.',
];

const DONTS = [
  'Stretch, compress, rotate, or skew any government logo.',
  'Add drop shadows, glows, gradients, or other effects.',
  'Place logos on busy or low-contrast backgrounds.',
  'Recreate, redraw, or approximate official logos.',
  'Use outdated or unofficial versions of any logo.',
];

const PREFERRED_DOWNLOAD_FORMATS = ['png', 'svg', 'pdf', 'jpg', 'jpeg', 'eps', 'gif', 'zip'] as const;

function getPrimaryDownload(logo: LogoEntry) {
  if (!logo.downloads?.length) {
    return undefined;
  }

  return (
    PREFERRED_DOWNLOAD_FORMATS.flatMap((format) =>
      logo.downloads?.find((asset) => asset.format === format) ?? [],
    )[0] ?? logo.downloads[0]
  );
}

function getSecondaryDownloads(logo: LogoEntry) {
  const primary = getPrimaryDownload(logo);
  if (!primary) {
    return [];
  }

  return logo.downloads?.filter((asset) => asset.url !== primary.url).slice(0, 3) ?? [];
}

function getDownloadLabel(logo: LogoEntry) {
  const primary = getPrimaryDownload(logo);
  if (!primary) {
    return undefined;
  }

  return `Download ${primary.label}`;
}

function hasFormat(logo: LogoEntry, format: string) {
  return logo.downloads?.some((asset) => asset.format === format) ?? false;
}

function isArchiveOnly(logo: LogoEntry) {
  if (!logo.downloads?.length) {
    return false;
  }

  return !hasFormat(logo, 'png') && !hasFormat(logo, 'svg');
}

function getFormatBadges(logo: LogoEntry) {
  const badges = [];

  if (hasFormat(logo, 'png')) {
    badges.push('PNG');
  }
  if (hasFormat(logo, 'svg')) {
    badges.push('SVG');
  }
  if (isArchiveOnly(logo)) {
    badges.push('Archive only');
  }
  if (!badges.length && logo.downloads?.length) {
    badges.push('Direct download');
  }

  return badges.slice(0, 2);
}

async function copyToClipboard(value: string) {
  await navigator.clipboard.writeText(value);
}

export default function LogoResources() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<LogoCategory | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [downloadFilter, setDownloadFilter] = useState<DownloadFilter>('all');

  const filtered = useMemo(() => {
    let results = LOGO_REGISTRY;
    if (selectedCategory !== 'all') {
      results = results.filter((l) => l.category === selectedCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        (l) => l.name.toLowerCase().includes(q) || l.tags.some((t) => t.includes(q)) || l.id.includes(q),
      );
    }
    if (downloadFilter === 'with-downloads') {
      results = results.filter((l) => (l.downloads?.length ?? 0) > 0);
    } else if (downloadFilter === 'png') {
      results = results.filter((l) => hasFormat(l, 'png'));
    } else if (downloadFilter === 'svg') {
      results = results.filter((l) => hasFormat(l, 'svg'));
    } else if (downloadFilter === 'archive-only') {
      results = results.filter((l) => isArchiveOnly(l));
    }
    return results;
  }, [downloadFilter, query, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: LOGO_REGISTRY.length };
    for (const cat of LOGO_CATEGORIES) counts[cat.key] = LOGO_REGISTRY.filter((l) => l.category === cat.key).length;
    return counts;
  }, []);

  const downloadCounts = useMemo(
    () => ({
      all: LOGO_REGISTRY.length,
      'with-downloads': LOGO_REGISTRY.filter((logo) => (logo.downloads?.length ?? 0) > 0).length,
      png: LOGO_REGISTRY.filter((logo) => hasFormat(logo, 'png')).length,
      svg: LOGO_REGISTRY.filter((logo) => hasFormat(logo, 'svg')).length,
      'archive-only': LOGO_REGISTRY.filter((logo) => isArchiveOnly(logo)).length,
    }),
    [],
  );

  const featured = useMemo(() => FEATURED_SLUGS.map((id) => LOGO_REGISTRY.find((l) => l.id === id)).filter(Boolean) as LogoEntry[], []);

  return (
    <div className="min-h-screen bg-background">

      {/* ═══════════════════════════════════════════════════════════
          HERO — Split layout matching Icons page
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-border bg-card relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,81,150,0.12),_transparent_42%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(0,81,150,0.25),_transparent_42%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                <Building2 size={14} />
                Government logo library
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Official logos for government digital services
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  {LOGO_REGISTRY.length} catalogued government logos from the UX4G Design System.
                  Browse by category, search by name, and download official source files directly.
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

            {/* Featured logos showcase */}
            <div className="grid gap-4 rounded-[28px] border border-border bg-card/80 p-5 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] backdrop-blur">
              <div className="grid grid-cols-3 gap-3">
                {featured.slice(0, 9).map((logo) => (
                  <a
                    key={logo.id}
                    href={logo.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-border bg-background p-4 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-muted/40 overflow-hidden">
                      {logo.thumbnailUrl ? (
                        <img src={logo.thumbnailUrl} alt={`${logo.name} logo`} className="w-full h-full object-contain p-1" loading="lazy" />
                      ) : (
                        <span className="text-lg font-bold text-primary/20">{logo.name.charAt(0)}</span>
                      )}
                    </div>
                    <div className="text-xs font-medium text-foreground line-clamp-1">{logo.name}</div>
                  </a>
                ))}
              </div>
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm text-foreground">
                <div className="mb-2 flex items-center gap-2 font-semibold">
                  <Shield size={16} className="text-primary" />
                  Official government assets
                </div>
                <p className="text-muted-foreground text-xs">
                  All logos point to official UX4G sources with direct download formats where available. {LOGO_REGISTRY.length} logos across {LOGO_CATEGORIES.length} categories,
                  sourced from ux4g.gov.in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          USAGE GUIDANCE — 3 cards
          ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
              <Layers size={20} className="text-primary" /> Logo placement
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Place the National Emblem in the top-left of government headers.</li>
              <li>Department logos go to the right of the National Emblem.</li>
              <li>Scheme/campaign logos appear in content areas, not headers.</li>
              <li>Footer logos should be smaller than header logos.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
              <Maximize2 size={20} className="text-primary" /> Size and spacing
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Minimum height:</strong> 24px for digital, 10mm for print.</li>
              <li><strong className="text-foreground">Clear space:</strong> 50% of logo height on all sides.</li>
              <li><strong className="text-foreground">Header size:</strong> 32–48px height recommended.</li>
              <li><strong className="text-foreground">Favicon:</strong> Use simplified mark at 16px and 32px.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
              <Palette size={20} className="text-primary" /> Color and background
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Use the full-color variant on white or light backgrounds.</li>
              <li>Use the white/inverse variant on dark or colored backgrounds.</li>
              <li>Never recolor logos — use only official color variants.</li>
              <li>Ensure 3:1 minimum contrast between logo and background.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DO / DON'T
          ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 p-6">
          <h2 className="mb-4 text-lg font-semibold text-emerald-950 dark:text-emerald-200">Do</h2>
          <ul className="space-y-3 text-sm text-emerald-900 dark:text-emerald-300">
            {DOS.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle className="mt-0.5 text-emerald-700 dark:text-emerald-400 flex-shrink-0" size={16} />
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
                <XCircle className="mt-0.5 text-red-700 dark:text-red-400 flex-shrink-0" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CORE LOGO LIBRARY — Search + Filter + Grid
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Core logo library</h2>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                {LOGO_REGISTRY.length} official government logos across {LOGO_CATEGORIES.length} categories.
                Each card includes direct official download links and the original UX4G source page.
              </p>
            </div>
          </div>

          {/* Search + View Toggle */}
          <div className="mb-8 grid gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search logos by name, tag, or abbreviation"
                className="w-full rounded-2xl border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground"
                aria-label="Search logos"
              />
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`rounded-full border px-3 py-2 text-xs font-medium ${selectedCategory === 'all' ? 'border-primary bg-primary text-white' : 'border-border bg-background text-muted-foreground'}`}
              >
                All ({categoryCounts.all})
              </button>
              {LOGO_CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`rounded-full border px-3 py-2 text-xs font-medium ${selectedCategory === cat.key ? 'border-primary bg-primary text-white' : 'border-border bg-background text-muted-foreground'}`}
                >
                  {cat.label} ({categoryCounts[cat.key] ?? 0})
                </button>
              ))}
              <div className="h-6 w-px bg-border mx-1" />
              {(
                [
                  ['all', 'All formats'],
                  ['with-downloads', 'Has downloads'],
                  ['png', 'PNG'],
                  ['svg', 'SVG'],
                  ['archive-only', 'Archive only'],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setDownloadFilter(key)}
                  className={`rounded-full border px-3 py-2 text-xs font-medium ${
                    downloadFilter === key
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-background text-muted-foreground'
                  }`}
                >
                  {label} ({downloadCounts[key]})
                </button>
              ))}
              <div className="ml-auto flex items-center gap-1">
                <button onClick={() => setViewMode('grid')} aria-label="Grid view" aria-pressed={viewMode === 'grid'} className={`p-2 rounded-lg border transition-colors ${viewMode === 'grid' ? 'bg-primary text-white border-primary' : 'border-border text-muted-foreground hover:bg-muted'}`}>
                  <Grid3X3 size={16} />
                </button>
                <button onClick={() => setViewMode('list')} aria-label="List view" aria-pressed={viewMode === 'list'} className={`p-2 rounded-lg border transition-colors ${viewMode === 'list' ? 'bg-primary text-white border-primary' : 'border-border text-muted-foreground hover:bg-muted'}`}>
                  <List size={16} />
                </button>
              </div>
            </div>
            <div className="text-xs text-muted-foreground lg:col-span-2">
              Showing {filtered.length} logos{query ? ` for "${query}"` : ''}{selectedCategory !== 'all' ? ` in ${LOGO_CATEGORIES.find((c) => c.key === selectedCategory)?.label}` : ''}{downloadFilter !== 'all' ? ` with ${downloadFilter === 'with-downloads' ? 'direct download assets' : downloadFilter === 'archive-only' ? 'archive-only assets' : `${downloadFilter.toUpperCase()} files`}` : ''}.
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Search size={48} className="mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">No logos found</p>
              <p className="text-sm text-muted-foreground">Try a different search term or category.</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((logo) => <LogoCard key={logo.id} logo={logo} />)}
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map((logo) => <LogoRow key={logo.id} logo={logo} />)}
            </div>
          )}
        </div>
      </section>

      {/* Source attribution */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          Logo assets sourced from{' '}
          <a href="https://www.ux4g.gov.in/logo.php" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            ux4g.gov.in/logo.php
          </a>
          . All logos are property of their respective organizations. Last synced: April 2026.
        </p>
      </div>
    </div>
  );
}

// ── Logo Card (Grid View) ──
function LogoCard({ logo }: { logo: LogoEntry }) {
  const [copied, setCopied] = useState(false);
  const catLabel = LOGO_CATEGORIES.find((c) => c.key === logo.category)?.label ?? logo.category;
  const primaryDownload = getPrimaryDownload(logo);
  const secondaryDownloads = getSecondaryDownloads(logo);
  const hasThumb = Boolean(logo.thumbnailUrl);
  const formatBadges = getFormatBadges(logo);
  return (
    <article className="group rounded-2xl border border-border bg-card px-4 py-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/40 overflow-hidden">
        {hasThumb ? (
          <img src={logo.thumbnailUrl} alt={`${logo.name} logo`} className="w-full h-full object-contain p-1" loading="lazy" />
        ) : (
          <span className="text-xl font-bold text-primary/20">{logo.name.charAt(0)}</span>
        )}
      </div>
      <p className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary">{logo.name}</p>
      <p className="mt-1 text-xs text-muted-foreground">{catLabel}</p>
      {formatBadges.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {formatBadges.map((badge) => (
            <span key={badge} className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[0.65rem] font-semibold text-primary">
              {badge}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {primaryDownload ? (
          <>
            <a
              href={primaryDownload.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-2 text-[0.7rem] font-semibold text-white transition-colors hover:bg-primary/90"
              aria-label={`${logo.name} — ${getDownloadLabel(logo)}`}
            >
              <Download size={12} />
              {getDownloadLabel(logo)}
            </a>
            <button
              type="button"
              onClick={async () => {
                await copyToClipboard(primaryDownload.url);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1600);
              }}
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-[0.7rem] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              aria-label={`${logo.name} — copy primary download URL`}
            >
              <Copy size={12} />
              {copied ? 'Copied' : 'Copy URL'}
            </button>
          </>
        ) : null}
        <a
          href={logo.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-[0.7rem] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          aria-label={`${logo.name} — official source page`}
        >
          <ExternalLink size={12} />
          Official page
        </a>
      </div>
      {secondaryDownloads.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {secondaryDownloads.map((asset) => (
            <a
              key={asset.url}
              href={asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-2.5 py-1 text-[0.65rem] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              aria-label={`${logo.name} — download ${asset.label}`}
            >
              {asset.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

// ── Logo Row (List View) ──
function LogoRow({ logo }: { logo: LogoEntry }) {
  const [copied, setCopied] = useState(false);
  const catLabel = LOGO_CATEGORIES.find((c) => c.key === logo.category)?.label ?? logo.category;
  const primaryDownload = getPrimaryDownload(logo);
  const secondaryDownloads = getSecondaryDownloads(logo);
  const hasThumb = Boolean(logo.thumbnailUrl);
  const formatBadges = getFormatBadges(logo);
  return (
    <article className="group flex items-center gap-4 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/30 hover:bg-primary/5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/40 overflow-hidden flex-shrink-0">
        {hasThumb ? (
          <img src={logo.thumbnailUrl} alt={`${logo.name} logo`} className="w-full h-full object-contain p-0.5" loading="lazy" />
        ) : (
          <span className="text-sm font-bold text-primary/20">{logo.name.charAt(0)}</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate group-hover:text-primary">{logo.name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[0.625rem] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{catLabel}</span>
          {formatBadges.map((badge) => (
            <span key={badge} className="text-[0.625rem] font-semibold text-primary bg-primary/5 px-2 py-0.5 rounded-full border border-primary/15">
              {badge}
            </span>
          ))}
          {logo.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[0.625rem] text-muted-foreground">{t}</span>
          ))}
          </div>
        </div>
      <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
        {primaryDownload ? (
          <>
            <a
              href={primaryDownload.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-2 text-[0.7rem] font-semibold text-white transition-colors hover:bg-primary/90"
              aria-label={`${logo.name} — ${getDownloadLabel(logo)}`}
            >
              <Download size={12} />
              {primaryDownload.label}
            </a>
            <button
              type="button"
              onClick={async () => {
                await copyToClipboard(primaryDownload.url);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1600);
              }}
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-[0.7rem] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              aria-label={`${logo.name} — copy primary download URL`}
            >
              <Copy size={12} />
              {copied ? 'Copied' : 'Copy URL'}
            </button>
          </>
        ) : null}
        {secondaryDownloads.map((asset) => (
          <a
            key={asset.url}
            href={asset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-2.5 py-1 text-[0.65rem] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
            aria-label={`${logo.name} — download ${asset.label}`}
          >
            {asset.label}
          </a>
        ))}
        <a
          href={logo.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-[0.7rem] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          aria-label={`${logo.name} — official source page`}
        >
          <ExternalLink size={12} />
          Official page
        </a>
      </div>
    </article>
  );
}
