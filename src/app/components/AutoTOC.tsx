/**
 * AutoTOC — Automatic sticky table of contents for long pages.
 *
 * Scans the page for h2 headings, builds a TOC sidebar, and highlights
 * the currently visible section via IntersectionObserver.
 * Only renders on pages that don't already have their own TOC.
 * Hidden on mobile and screens narrower than 1440px.
 */

import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

interface TOCItem {
  id: string;
  text: string;
}

/** Paths (prefixes) where the page already provides its own TOC. */
const SKIP_PREFIXES = [
  '/',            // home
  '/components/', // ComponentDocumentation has its own sidebar TOC
];

/** Exact paths to skip. */
const SKIP_EXACT = new Set([
  '/',
  '/components',
]);

function shouldSkip(pathname: string): boolean {
  if (SKIP_EXACT.has(pathname)) return true;
  // Component doc pages have their own TOC
  if (pathname.startsWith('/components/')) return true;
  return false;
}

export default function AutoTOC() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { pathname } = useLocation();

  // Scan for h2 headings whenever the route changes
  useEffect(() => {
    if (shouldSkip(pathname)) {
      setItems([]);
      return;
    }

    const timer = setTimeout(() => {
      // Only h2 — h3 creates too many entries
      const headings = document.querySelectorAll<HTMLHeadingElement>('main h2');
      const found: TOCItem[] = [];
      headings.forEach((h) => {
        const text = h.textContent?.trim();
        if (!text || text.length > 80) return; // skip very long headings
        if (!h.id) {
          h.id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
        }
        found.push({ id: h.id, text });
      });
      setItems(found);
      setActiveId('');
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Observe headings for active highlight
  useEffect(() => {
    if (items.length < 3) return;
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  // Don't render if fewer than 3 headings or on skipped pages
  if (items.length < 3) return null;

  return (
    <aside
      className="hidden 2xl:block fixed right-6 top-24 w-48 max-h-[calc(100vh-8rem)] overflow-y-auto"
      aria-label="Table of contents"
    >
      <nav>
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
          On this page
        </p>
        <ul className="space-y-0.5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-[12px] leading-snug py-1 pl-3 border-l-2 transition-colors ${
                  activeId === item.id
                    ? 'border-primary text-primary font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
