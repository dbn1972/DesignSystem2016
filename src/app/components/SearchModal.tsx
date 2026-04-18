/**
 * Global search modal — Cmd+K / Ctrl+K
 */

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Search, ArrowRight, FileText, Layers, Grid, Box, Settings, BookOpen, Shield, CornerDownLeft } from 'lucide-react';
import { search, type SearchResult } from '../services/search';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Foundations: <Layers size={14} />,
  Components: <Grid size={14} />,
  Patterns: <FileText size={14} />,
  Archetypes: <Box size={14} />,
  Systems: <Settings size={14} />,
  Services: <ArrowRight size={14} />,
  Resources: <BookOpen size={14} />,
  Governance: <Shield size={14} />,
  Legal: <FileText size={14} />,
};

const CATEGORY_COLORS: Record<string, string> = {
  Foundations: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Components: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Patterns: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Archetypes: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  Systems: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  Services: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  Resources: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Governance: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  Legal: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
};

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => search(query), [query]);

  // Focus input on open + global Escape listener
  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = 'hidden';

      const escHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      };
      window.addEventListener('keydown', escHandler);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', escHandler);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [open, onClose]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const goTo = useCallback((path: string) => {
    navigate(path);
    onClose();
  }, [navigate, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, results.length - 1)); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); return; }
    if (e.key === 'Enter' && results[activeIndex]) { e.preventDefault(); goTo(results[activeIndex].item.path); return; }
  }, [results, activeIndex, goTo, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[9998] bg-black/50" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the design system"
        className="fixed inset-x-4 top-[12vh] z-[9999] mx-auto max-w-2xl rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search size={20} className="text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIndex(0); }}
            placeholder="Search components, patterns, services..."
            className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground outline-none"
            aria-label="Search"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[60vh] overflow-y-auto overscroll-contain">
          {query.length < 2 ? (
            <div className="px-6 py-10 text-center text-sm text-muted-foreground">
              <Search size={32} className="mx-auto mb-3 text-muted-foreground/30" />
              Type to search across components, patterns, services...
            </div>
          ) : results.length === 0 ? (
            <div className="px-6 py-10 text-center text-sm text-muted-foreground">
              No results for "<span className="font-medium text-foreground">{query}</span>". Try a different term.
            </div>
          ) : (
            <div className="py-2">
              {/* Screen reader announcement */}
              <div className="sr-only" aria-live="polite">{results.length} results found</div>

              {results.map((r, i) => (
                <button
                  key={r.item.path}
                  data-index={i}
                  type="button"
                  onClick={() => goTo(r.item.path)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === activeIndex ? 'bg-primary/10' : 'hover:bg-muted'
                  }`}
                  aria-selected={i === activeIndex}
                >
                  <span className={`flex h-7 w-7 items-center justify-center rounded-lg flex-shrink-0 ${CATEGORY_COLORS[r.item.category] ?? 'bg-muted text-muted-foreground'}`}>
                    {CATEGORY_ICONS[r.item.category] ?? <FileText size={14} />}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{r.item.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{r.item.description}</div>
                  </div>
                  <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded flex-shrink-0">
                    {r.item.category}
                  </span>
                  {i === activeIndex && (
                    <CornerDownLeft size={14} className="text-primary flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><kbd className="rounded border border-border bg-muted px-1 py-0.5">↑↓</kbd> Navigate</span>
            <span className="flex items-center gap-1"><kbd className="rounded border border-border bg-muted px-1 py-0.5">↵</kbd> Open</span>
            <span className="flex items-center gap-1"><kbd className="rounded border border-border bg-muted px-1 py-0.5">Esc</kbd> Close</span>
          </div>
          <span>{results.length > 0 ? `${results.length} results` : ''}</span>
        </div>
      </div>
    </>
  );
}
