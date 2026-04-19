import React, { useState, useMemo } from 'react';
import PageContainer from '@/app/components/PageContainer';
import { useTheme } from '@/app/contexts/theme';
import {
  SearchFilter,
  TableOfContents,
  CategoryPanel,
  TokenCard,
  ColorSwatch,
  SpacingBar,
  TypographySample,
  ShadowPreview,
  RadiusPreview,
  MotionPreview,
  OpacityPreview,
  SemanticMappingIndicator,
} from './components';
import {
  TOKEN_DATA,
  CATEGORY_CONFIGS,
  SCRIPT_SAMPLES,
  filterTokens,
  toPixels,
} from './utils/tokenUtils';
import type { TokenEntry, TokenCategory } from './utils/tokenUtils';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Group tokens by their `group` field */
function groupBy(tokens: TokenEntry[]): Record<string, TokenEntry[]> {
  const map: Record<string, TokenEntry[]> = {};
  for (const t of tokens) {
    const key = t.group ?? 'other';
    (map[key] ??= []).push(t);
  }
  return map;
}

/** Capitalize first letter */
function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ─── Section renderers ────────────────────────────────────────────────────────

function renderColors(tokens: TokenEntry[]) {
  const groups = groupBy(tokens);
  return (
    <div className="space-y-8">
      {Object.entries(groups).map(([group, items]) => (
        <div key={group}>
          <h3 className="mb-3 text-lg font-semibold capitalize">{capitalize(group)}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((token) => (
              <TokenCard key={token.cssVariable} token={token}>
                <ColorSwatch token={token} />
              </TokenCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderSpacing(tokens: TokenEntry[]) {
  const groups = groupBy(tokens);
  const sectionOrder = ['spacing', 'inset', 'stack', 'inline'];
  const sortedKeys = Object.keys(groups).sort(
    (a, b) => (sectionOrder.indexOf(a) === -1 ? 99 : sectionOrder.indexOf(a)) -
              (sectionOrder.indexOf(b) === -1 ? 99 : sectionOrder.indexOf(b))
  );

  return (
    <div className="space-y-8">
      {sortedKeys.map((group) => (
        <div key={group}>
          <h3 className="mb-3 text-lg font-semibold capitalize">{capitalize(group)}</h3>
          <div className="space-y-3">
            {groups[group].map((token) => (
              <TokenCard key={token.cssVariable} token={token}>
                <SpacingBar token={token} />
              </TokenCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderTypography(tokens: TokenEntry[]) {
  const groups = groupBy(tokens);
  const sectionOrder = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'];
  const sectionLabels: Record<string, string> = {
    fontFamily: 'Font Families',
    fontSize: 'Font Sizes',
    fontWeight: 'Font Weights',
    lineHeight: 'Line Heights',
    letterSpacing: 'Letter Spacing',
  };
  const sortedKeys = Object.keys(groups).sort(
    (a, b) => (sectionOrder.indexOf(a) === -1 ? 99 : sectionOrder.indexOf(a)) -
              (sectionOrder.indexOf(b) === -1 ? 99 : sectionOrder.indexOf(b))
  );

  return (
    <div className="space-y-8">
      {sortedKeys.map((group) => (
        <div key={group}>
          <h3 className="mb-3 text-lg font-semibold">
            {sectionLabels[group] ?? capitalize(group)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups[group].map((token) => {
              const sampleText =
                group === 'fontFamily'
                  ? SCRIPT_SAMPLES[token.name] ?? SCRIPT_SAMPLES['sans']
                  : undefined;
              return (
                <TokenCard key={token.cssVariable} token={token}>
                  <TypographySample token={token} sampleText={sampleText} />
                </TokenCard>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderShadows(tokens: TokenEntry[]) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tokens.map((token) => (
        <TokenCard key={token.cssVariable} token={token}>
          <ShadowPreview token={token} />
        </TokenCard>
      ))}
    </div>
  );
}

function renderRadius(tokens: TokenEntry[]) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tokens.map((token) => (
        <TokenCard key={token.cssVariable} token={token}>
          <RadiusPreview token={token} />
        </TokenCard>
      ))}
    </div>
  );
}

function renderMotion(tokens: TokenEntry[]) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tokens.map((token) => (
        <TokenCard key={token.cssVariable} token={token}>
          <MotionPreview token={token} />
        </TokenCard>
      ))}
    </div>
  );
}

function renderOpacity(tokens: TokenEntry[]) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tokens.map((token) => (
        <TokenCard key={token.cssVariable} token={token}>
          <OpacityPreview token={token} />
        </TokenCard>
      ))}
    </div>
  );
}

function renderSizing(tokens: TokenEntry[]) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tokens.map((token) => {
        const px = toPixels(token.value);
        return (
          <TokenCard key={token.cssVariable} token={token}>
            {px && px !== token.value && (
              <span className="text-xs text-muted-foreground font-mono">{px}</span>
            )}
          </TokenCard>
        );
      })}
    </div>
  );
}

function renderZIndex(tokens: TokenEntry[]) {
  const sorted = [...tokens].sort(
    (a, b) => (parseFloat(a.value) || 0) - (parseFloat(b.value) || 0)
  );
  return (
    <div className="space-y-2">
      {sorted.map((token) => (
        <TokenCard key={token.cssVariable} token={token} />
      ))}
    </div>
  );
}

function renderSemantic(tokens: TokenEntry[]) {
  const groups = groupBy(tokens);
  return (
    <div className="space-y-8">
      {Object.entries(groups).map(([group, items]) => (
        <div key={group}>
          <h3 className="mb-3 text-lg font-semibold capitalize">{capitalize(group)}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((token) => (
              <TokenCard key={token.cssVariable} token={token}>
                {token.reference && (
                  <SemanticMappingIndicator reference={token.reference} />
                )}
              </TokenCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Map category id to its render function */
const CATEGORY_RENDERERS: Record<TokenCategory, (tokens: TokenEntry[]) => React.ReactNode> = {
  colors: renderColors,
  spacing: renderSpacing,
  typography: renderTypography,
  shadows: renderShadows,
  radius: renderRadius,
  motion: renderMotion,
  opacity: renderOpacity,
  sizing: renderSizing,
  'z-index': renderZIndex,
  semantic: renderSemantic,
};

// ─── Main page component ──────────────────────────────────────────────────────

function DesignTokens() {
  const { colorScheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  /** Filtered tokens per category, memoized on query change */
  const filteredData = useMemo(() => {
    const result: Record<TokenCategory, TokenEntry[]> = {} as Record<TokenCategory, TokenEntry[]>;
    for (const config of CATEGORY_CONFIGS) {
      result[config.id] = filterTokens(TOKEN_DATA[config.id], searchQuery);
    }
    return result;
  }, [searchQuery]);

  /** Total matching tokens across all categories */
  const totalFiltered = useMemo(
    () => Object.values(filteredData).reduce((sum, arr) => sum + arr.length, 0),
    [filteredData]
  );

  /** Total token count (unfiltered) */
  const totalCount = useMemo(
    () => Object.values(TOKEN_DATA).reduce((sum, arr) => sum + arr.length, 0),
    []
  );

  return (
    <PageContainer>
      <div className="space-y-12 py-8">
        {/* Hero */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">Design Tokens</h1>
            <span className="rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {colorScheme}
            </span>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Browse, search, and copy all UX4G design tokens. Each token shows its
            name, resolved value, and CSS custom property — with live previews that
            update when you switch themes.
          </p>
        </header>

        {/* Search */}
        <SearchFilter
          value={searchQuery}
          onChange={setSearchQuery}
          resultCount={totalFiltered}
          totalCount={totalCount}
        />

        {/* Table of Contents */}
        <TableOfContents categories={CATEGORY_CONFIGS} />

        {/* Category panels */}
        {CATEGORY_CONFIGS.map((config) => {
          const tokens = filteredData[config.id];
          const renderer = CATEGORY_RENDERERS[config.id];
          return (
            <CategoryPanel
              key={config.id}
              config={config}
              visible={tokens.length > 0}
            >
              {renderer(tokens)}
            </CategoryPanel>
          );
        })}
      </div>
    </PageContainer>
  );
}

export default DesignTokens;
