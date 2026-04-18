/**
 * AutoTOC — Automatic sticky table of contents for long pages.
 *
 * Scans the page for h2 headings with IDs, builds a TOC sidebar,
 * and highlights the currently visible section using IntersectionObserver.
 * Only renders when there are 3+ headings (short pages don't need it).
 * Hidden on mobile — shows on lg+ screens.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router';

interface TOCItem {
  id: string;
  text: string;
}

export default function AutoTOC() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { pathname } = useLocation();

  // Scan for h2 headings whenever the route changes
  useEffect(() => {
    // Small delay to let lazy-loaded page content render
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll<HTMLHeadingElement>(
        'main h2, main h3'
      );
      const found: TOCItem[] = [];
      headings.forEach((h) => {
        const text = h.textContent?.trim();
        if (!text) return;
        // Auto-generate ID if missing
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
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Observe headings for active state
  useEffect(() => {
    if (items.length < 3) return;

    // Disconnect previous observer
    observerRef.current?.disconnect();

    const callback: IntersectionObserverCallback = (entries) => {
      // Find the first visible entry
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          break;
        }
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0,
    });

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  // Don't render if fewer than 3 headings
  if (items.length < 3) return null;

  return (
    <aside
      className="hidden lg:block fixed right-4 xl:right-8 top-24 w-52 max-h-[calc(100vh-8rem)] overflow-y-auto"
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
                className={`block text-[13px] leading-snug py-1.5 pl-3 border-l-2 transition-colors rounded-r-sm ${
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
