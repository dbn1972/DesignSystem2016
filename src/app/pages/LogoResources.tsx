/**
 * Logo Resources Page
 *
 * Browse, search, filter, and access all government logos
 * from the UX4G Design System.
 */

import { useMemo, useState } from 'react';
import { Search, ExternalLink, Filter, Grid3X3, List, Tag } from 'lucide-react';
import { LOGO_REGISTRY, LOGO_CATEGORIES, type LogoEntry, type LogoCategory } from '../content/logo-data';

export default function LogoResources() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<LogoCategory | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFallbackOnly, setShowFallbackOnly] = useState(false);

  const filtered = useMemo(() => {
    let results = LOGO_REGISTRY;
    if (selectedCategory !== 'all') {
      results = results.filter((l) => l.category === selectedCategory);
    }
    if (showFallbackOnly) {
      results = results.filter((l) => !l.thumbnailUrl);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.tags.some((t) => t.includes(q)) ||
          l.id.includes(q),
      );
    }
    return results;
  }, [query, selectedCategory, showFallbackOnly]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: LOGO_REGISTRY.length };
    for (const cat of LOGO_CATEGORIES) {
      counts[cat.key] = LOGO_REGISTRY.filter((l) => l.category === cat.key).length;
    }
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#005196] to-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-sm uppercase tracking-wide text-blue-200 mb-2">UX4G Resources</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Government Logo Library</h1>
          <p className="text-lg text-blue-100 max-w-3xl mb-6">
            {LOGO_REGISTRY.length} official government logos catalogued from the UX4G Design System.
            Browse, search, and access logo detail pages for downloads.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-blue-200">
            <span className="bg-white/10 px-3 py-1 rounded-full">{LOGO_REGISTRY.length} Logos</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">{LOGO_CATEGORIES.length} Categories</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Source: ux4g.gov.in</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search logos by name, tag, or abbreviation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#005196] text-sm"
              aria-label="Search logos"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowFallbackOnly((current) => !current)}
              aria-pressed={showFallbackOnly}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors ${
                showFallbackOnly
                  ? 'bg-amber-100 text-amber-800 border-amber-200'
                  : 'border-border text-muted-foreground hover:bg-muted'
              }`}
            >
              <Filter size={16} />
              Show fallback only
            </button>
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              aria-pressed={viewMode === 'grid'}
              className={`p-2 rounded-lg border transition-colors ${viewMode === 'grid' ? 'bg-[#005196] text-white border-[#005196]' : 'border-border text-muted-foreground hover:bg-muted'}`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="List view"
              aria-pressed={viewMode === 'list'}
              className={`p-2 rounded-lg border transition-colors ${viewMode === 'list' ? 'bg-[#005196] text-white border-[#005196]' : 'border-border text-muted-foreground hover:bg-muted'}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by category">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedCategory === 'all' ? 'bg-[#005196] text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            All ({categoryCounts.all})
          </button>
          {LOGO_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedCategory === cat.key ? 'bg-[#005196] text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
            >
              {cat.label} ({categoryCounts[cat.key] ?? 0})
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="text-sm text-muted-foreground mb-4">
          Showing {filtered.length} of {LOGO_REGISTRY.length} logos
          {query && <span> matching "{query}"</span>}
          {selectedCategory !== 'all' && (
            <span> in {LOGO_CATEGORIES.find((c) => c.key === selectedCategory)?.label}</span>
          )}
          {showFallbackOnly && <span> with missing official thumbnails</span>}
        </div>

        {/* Logo Grid/List */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <Search size={48} className="mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-lg font-medium text-foreground mb-2">No logos found</p>
            <p className="text-sm text-muted-foreground">Try a different search term or category.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((logo) => (
              <LogoRow key={logo.id} logo={logo} />
            ))}
          </div>
        )}

        {/* Source attribution */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Logo assets sourced from{' '}
            <a href="https://www.ux4g.gov.in/logo.php" target="_blank" rel="noopener noreferrer" className="text-[#005196] hover:underline">
              ux4g.gov.in/logo.php
            </a>
            . All logos are property of their respective organizations. Last synced: April 2026.
          </p>
        </div>
      </div>
    </div>
  );
}

function LogoCard({ logo }: { logo: LogoEntry }) {
  const catLabel = LOGO_CATEGORIES.find((c) => c.key === logo.category)?.label ?? logo.category;
  const isFallbackOnly = !logo.thumbnailUrl;
  return (
    <a
      href={logo.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center p-4 rounded-xl border border-border bg-card hover:border-[#005196]/40 hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
      aria-label={`${logo.name} — view and download`}
    >
      <LogoThumbnail logo={logo} className="w-full aspect-square mb-3" textClassName="text-2xl" />
      <h3 className="text-xs font-medium text-foreground text-center leading-tight mb-1 line-clamp-2 group-hover:text-[#005196]">
        {logo.name}
      </h3>
      <span className="text-[0.625rem] text-muted-foreground bg-muted px-2 py-0.5 rounded-full mt-1">
        {catLabel}
      </span>
      {isFallbackOnly && (
        <span className="text-[0.625rem] text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mt-2">
          Official asset unavailable
        </span>
      )}
      <ExternalLink size={12} className="mt-2 text-muted-foreground/40 group-hover:text-[#005196] transition-colors" />
    </a>
  );
}

function LogoRow({ logo }: { logo: LogoEntry }) {
  const catLabel = LOGO_CATEGORIES.find((c) => c.key === logo.category)?.label ?? logo.category;
  const isFallbackOnly = !logo.thumbnailUrl;
  return (
    <a
      href={logo.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-3 rounded-lg border border-border bg-card hover:border-[#005196]/40 hover:shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#005196]"
      aria-label={`${logo.name} — view and download`}
    >
      <LogoThumbnail logo={logo} className="w-10 h-10 flex-shrink-0" textClassName="text-sm" />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-foreground truncate">{logo.name}</h3>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[0.625rem] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{catLabel}</span>
          {isFallbackOnly && (
            <span className="text-[0.625rem] text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
              Asset pending
            </span>
          )}
          {logo.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[0.625rem] text-muted-foreground">{t}</span>
          ))}
        </div>
      </div>
      <ExternalLink size={14} className="text-muted-foreground/40 flex-shrink-0" />
    </a>
  );
}

function LogoThumbnail({
  logo,
  className,
  textClassName,
}: {
  logo: LogoEntry;
  className: string;
  textClassName: string;
}) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(logo.thumbnailUrl) && !hasError;
  const isFallbackOnly = !showImage;

  return (
    <div className={`${className} relative flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden p-2`}>
      {showImage ? (
        <img
          src={logo.thumbnailUrl}
          alt={`${logo.name} logo`}
          loading="lazy"
          className="w-full h-full object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className={`${textClassName} font-bold text-[#005196]/20 select-none`}>{logo.name.charAt(0)}</span>
      )}
      {isFallbackOnly && (
        <span className="absolute top-2 right-2 text-[0.55rem] font-medium text-amber-700 bg-white/95 border border-amber-200 rounded-full px-1.5 py-0.5">
          Fallback
        </span>
      )}
    </div>
  );
}
