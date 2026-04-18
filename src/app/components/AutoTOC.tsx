/**
 * AutoTOC — Automatic sticky table of contents for long pages.
 *
 * Scans the page for h2 headings, builds a TOC sidebar, and highlights
 * the currently visible section via IntersectionObserver.
 * Rendered as a sticky sidebar inside the Layout grid — not overlapping content.
 */

import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

interface TOCItem {
  id: string;
  text: string;
}

/** Pages where AutoTOC should not render. */
function shouldSkip(pathname: string): boolean {
  if (pathname === '/') return true;
  if (pathname === '/components') return true;
  // Component doc pages have their own sidebar TOC
  if (pathname.startsWith('/components/')) return true;
  return false;
}

export function useAutoTOC() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { pathname } = useLocation();
  const skip = shouldSkip(pathname);

  useEffect(() => {
    if (skip) { setItems([]); return; }

    const timer = setTimeout(() => {
      const found: TOCItem[] = [];
      const seen = new Set<string>();

      // 1. section[id] containing an h2
      document.querySelectorAll<HTMLElement>('main section[id]').forEach((sec) => {
        const h2 = sec.querySelector('h2');
        if (!h2) return;
        const text = h2.textContent?.trim();
        if (!text || text.length > 80) return;
        found.push({ id: sec.id, text });
        seen.add(text);
      });

      // 2. h2[id] not already captured
      document.querySelectorAll<HTMLHeadingElement>('main h2[id]').forEach((h) => {
        const text = h.textContent?.trim();
        if (!text || text.length > 80 || seen.has(text)) return;
        found.push({ id: h.id, text });
        seen.add(text);
      });

      // 3. h2 without id — auto-generate
      document.querySelectorAll<HTMLHeadingElement>('main h2').forEach((h) => {
        const text = h.textContent?.trim();
        if (!text || text.length > 80 || seen.has(text)) return;
        h.id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        found.push({ id: h.id, text });
        seen.add(text);
      });

      setItems(found);
      setActiveId('');
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname, skip]);

  useEffect(() => {
    if (items.length < 3) return;
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) { setActiveId(entry.target.id); break; }
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

  return { items, activeId, visible: !skip && items.length >= 3 };
}

export default function AutoTOC({ items, activeId }: { items: TOCItem[]; activeId: string }) {
  if (items.length < 3) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-24 self-start">
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
  );
}
