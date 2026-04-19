import { useState } from 'react';
import { CheckCircle, Copy, Download, ExternalLink, XCircle } from 'lucide-react';
import { LOGO_CATEGORIES, type LogoEntry } from '../content/logo-data';
import { LOGO_DOWNLOADS } from '../content/logo-downloads';
import { LOGO_LOCAL_DOWNLOADS } from '../content/logo-local-downloads';

export type DownloadFilter = 'all' | 'with-downloads' | 'png' | 'svg' | 'archive-only' | 'partial-mirror';
export type PreviewMode = 'light' | 'dark' | 'tint';

export const PREFERRED_DOWNLOAD_FORMATS = ['png', 'svg', 'pdf', 'jpg', 'jpeg', 'eps', 'gif', 'zip'] as const;

export function getPrimaryDownload(logo: LogoEntry) {
  if (!logo.downloads?.length) {
    return undefined;
  }

  return (
    PREFERRED_DOWNLOAD_FORMATS.flatMap((format) =>
      logo.downloads?.find((asset) => asset.format === format) ?? [],
    )[0] ?? logo.downloads[0]
  );
}

export function getSecondaryDownloads(logo: LogoEntry) {
  const primary = getPrimaryDownload(logo);
  if (!primary) {
    return [];
  }

  return logo.downloads?.filter((asset) => asset.url !== primary.url).slice(0, 3) ?? [];
}

export function getDownloadLabel(logo: LogoEntry) {
  const primary = getPrimaryDownload(logo);
  if (!primary) {
    return undefined;
  }

  return `Download ${primary.label}`;
}

export function hasFormat(logo: LogoEntry, format: string) {
  return logo.downloads?.some((asset) => asset.format === format) ?? false;
}

export function isArchiveOnly(logo: LogoEntry) {
  if (!logo.downloads?.length) {
    return false;
  }

  return !hasFormat(logo, 'png') && !hasFormat(logo, 'svg');
}

export function getFormatBadges(logo: LogoEntry) {
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

export function isLocalAsset(url: string) {
  return url.startsWith('/assets/logo-downloads/');
}

export function getMirrorStatus(logo: LogoEntry) {
  const officialCount = LOGO_DOWNLOADS[logo.id]?.length ?? 0;
  const localCount = LOGO_LOCAL_DOWNLOADS[logo.id]?.length ?? 0;

  if (localCount > 0 && officialCount > 0 && localCount < officialCount) {
    return { label: 'Partial mirror', tone: 'warning' as const };
  }
  if (localCount > 0) {
    return { label: 'Mirrored locally', tone: 'success' as const };
  }
  if (officialCount > 0) {
    return { label: 'Official source only', tone: 'default' as const };
  }

  return { label: 'Source page only', tone: 'default' as const };
}

export function getRecommendedFormats(logo: LogoEntry) {
  const items = [];
  if (hasFormat(logo, 'svg')) {
    items.push({ label: 'SVG', note: 'Best for web UI, scaling, and crisp interface use.' });
  }
  if (hasFormat(logo, 'png')) {
    items.push({ label: 'PNG', note: 'Best for slides, docs, and quick implementation handoff.' });
  }
  if (hasFormat(logo, 'pdf') || hasFormat(logo, 'eps')) {
    items.push({ label: 'Print files', note: 'Best for print vendors and brand production workflows.' });
  }
  if (isArchiveOnly(logo)) {
    items.push({ label: 'Archive package', note: 'Download and inspect the packaged asset set before use.' });
  }

  return items;
}

export function isPartialMirror(logo: LogoEntry) {
  return getMirrorStatus(logo).label === 'Partial mirror';
}

export function getStatusClasses(tone: 'success' | 'warning' | 'default') {
  if (tone === 'success') {
    return 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300';
  }
  if (tone === 'warning') {
    return 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300';
  }

  return 'border-border bg-muted text-muted-foreground';
}

export async function copyToClipboard(value: string) {
  await navigator.clipboard.writeText(value);
}

export function downloadAsset(url: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = '';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function downloadAllAssets(logo: LogoEntry) {
  if (!logo.downloads?.length) {
    return;
  }

  logo.downloads.forEach((asset, index) => {
    window.setTimeout(() => {
      downloadAsset(asset.url);
    }, index * 180);
  });
}

export function LogoDetailView({ logo }: { logo: LogoEntry }) {
  const [downloadedAll, setDownloadedAll] = useState(false);
  const [previewMode, setPreviewMode] = useState<PreviewMode>('light');

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-muted/40 overflow-hidden">
          {logo.thumbnailUrl ? (
            <img src={logo.thumbnailUrl} alt={`${logo.name} logo`} className="h-full w-full object-contain p-2" loading="lazy" />
          ) : (
            <span className="text-2xl font-bold text-primary/20">{logo.name.charAt(0)}</span>
          )}
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Logo details</p>
            <h3 className="text-2xl font-semibold text-foreground">{logo.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {LOGO_CATEGORIES.find((c) => c.key === logo.category)?.label ?? logo.category}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClasses(getMirrorStatus(logo).tone)}`}>
              {getMirrorStatus(logo).label}
            </span>
            {getFormatBadges(logo).map((badge) => (
              <span key={badge} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-background p-4">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-sm font-semibold text-foreground">Preview surface</h4>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ['light', 'Light'],
                    ['dark', 'Dark'],
                    ['tint', 'Tinted'],
                  ] as const
                ).map(([mode, label]) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setPreviewMode(mode)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      previewMode === mode
                        ? 'border-primary bg-primary text-white'
                        : 'border-border bg-background text-muted-foreground'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div
              className={`mt-4 flex min-h-[220px] items-center justify-center rounded-[28px] border ${
                previewMode === 'dark'
                  ? 'border-slate-700 bg-slate-950'
                  : previewMode === 'tint'
                    ? 'border-primary/10 bg-[linear-gradient(135deg,rgba(0,81,150,0.08),rgba(255,153,51,0.12))]'
                    : 'border-border bg-white'
              }`}
            >
              {logo.thumbnailUrl ? (
                <img
                  src={logo.thumbnailUrl}
                  alt={`${logo.name} preview`}
                  className="max-h-32 max-w-[260px] object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-4xl font-bold text-primary/20">{logo.name.charAt(0)}</span>
              )}
            </div>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              Validate the mark on light, dark, and service-tinted surfaces before using it in headers, dashboards, or scheme pages.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-4">
            <h4 className="text-sm font-semibold text-foreground">Use and avoid</h4>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  <CheckCircle size={14} />
                  Recommended surfaces
                </div>
                <div className="grid gap-3">
                  <div className="flex min-h-[112px] items-center justify-center rounded-2xl border border-border bg-card">
                    {logo.thumbnailUrl ? (
                      <img
                        src={logo.thumbnailUrl}
                        alt={`${logo.name} on light background`}
                        className="max-h-16 max-w-[190px] object-contain"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                  <div className="flex min-h-[112px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-950">
                    {logo.thumbnailUrl ? (
                      <img
                        src={logo.thumbnailUrl}
                        alt={`${logo.name} on dark background`}
                        className="max-h-16 max-w-[190px] object-contain"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-emerald-800 dark:text-emerald-200">
                  Use the official mark on clean, high-contrast surfaces with sufficient breathing room.
                </p>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/20">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-300">
                  <XCircle size={14} />
                  Avoid these treatments
                </div>
                <div className="grid gap-3">
                  <div className="relative flex min-h-[112px] items-center justify-center overflow-hidden rounded-2xl border border-red-200 bg-[linear-gradient(135deg,rgba(0,81,150,0.18),rgba(255,153,51,0.26),rgba(19,136,8,0.18))] dark:border-red-800">
                    <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_30%),radial-gradient(circle_at_80%_35%,rgba(255,255,255,0.35),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.4),transparent_28%)]" />
                    {logo.thumbnailUrl ? (
                      <img
                        src={logo.thumbnailUrl}
                        alt={`${logo.name} on busy background`}
                        className="relative max-h-16 max-w-[190px] object-contain opacity-85"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                  <div className="flex min-h-[112px] items-center justify-center rounded-2xl border border-red-200 bg-[#d9e4ee] dark:border-red-800">
                    {logo.thumbnailUrl ? (
                      <img
                        src={logo.thumbnailUrl}
                        alt={`${logo.name} on low contrast background`}
                        className="max-h-16 max-w-[190px] object-contain opacity-80"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-red-800 dark:text-red-200">
                  Avoid busy gradients, weak contrast, decorative effects, or any surface that reduces clarity.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-4">
            <h4 className="text-sm font-semibold text-foreground">Recommended usage</h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {getRecommendedFormats(logo).map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-card px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-4">
            <h4 className="text-sm font-semibold text-foreground">Available downloads</h4>
            {logo.downloads && logo.downloads.length > 1 ? (
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => {
                    downloadAllAssets(logo);
                    setDownloadedAll(true);
                    window.setTimeout(() => setDownloadedAll(false), 1800);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  <Download size={12} />
                  {downloadedAll ? 'Downloads started' : 'Download all available files'}
                </button>
              </div>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-2">
              {logo.downloads?.map((asset) => (
                <a
                  key={asset.url}
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Download size={12} />
                  {asset.label}
                  {isLocalAsset(asset.url) ? <span className="text-[0.65rem] text-muted-foreground">Local</span> : null}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-border bg-background p-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Asset health</h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Mirror status</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{getMirrorStatus(logo).label}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {getMirrorStatus(logo).label === 'Mirrored locally'
                    ? 'Local files are ready for implementation teams.'
                    : getMirrorStatus(logo).label === 'Partial mirror'
                      ? 'Some official files are still missing from the local mirror.'
                      : 'Use the official page to verify the remaining source files.'}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Formats</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{logo.downloads?.length ?? 0} available</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Prioritize SVG for UI, PNG for documents, and print formats for production workflows.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Implementation notes</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Use `SVG` in web and app interfaces when available.</li>
              <li>Use `PNG` for documents, slides, and quick internal sharing.</li>
              <li>Use print-oriented files for vendor handoff or production workflows.</li>
              <li>Keep the official aspect ratio and preserve minimum clear space.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Tags</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {logo.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Source provenance</p>
            <p className="mt-2 text-sm font-semibold text-foreground">ux4g.gov.in logo library</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              This page mirrors and documents the official UX4G source while preserving a local implementation-ready copy where available.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={logo.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <ExternalLink size={14} />
              Open official source page
            </a>
            {getPrimaryDownload(logo) ? (
              <button
                type="button"
                onClick={async () => {
                  await copyToClipboard(getPrimaryDownload(logo)!.url);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Copy size={14} />
                Copy primary URL
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
