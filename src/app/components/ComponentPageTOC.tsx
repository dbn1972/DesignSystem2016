/**
 * Right-side sticky TOC for component documentation pages.
 * Auto-detects h2 headings and section[id] elements with scroll-spy.
 */

import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

interface TOCItem {
  id: string;
  label: string;
}

export default function ComponentPageTOC() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { pathname } = useLocation();

  // Scan for sections after page renders
  useEffect(() => {
    setItems([]);
    setActiveId('');

    const timer = setTimeout(() => {
      const found: TOCItem[] = [];
      const seen = new Set<string>();

      // 1. section[id] elements
      document.querySelectorAll<HTMLElement>('main section[id]').forEach((sec) => {
        const h2 = sec.querySelector('h2');
        const text = h2?.textContent?.trim() || sec.id.replace('section-', '').replace(/-/g, ' ');
        if (text && text.length < 60 && !seen.has(sec.id)) {
          found.push({ id: sec.id, label: text });
          seen.add(sec.id);
        }
      });

      // 2. h2 elements with or without id
      document.querySelectorAll<HTMLHeadingElement>('main h2').forEach((h) => {
        const text = h.textContent?.trim();
        if (!text || text.length > 60 || seen.has(text)) return;
        if (!h.id) {
          h.id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        }
        if (!seen.has(h.id)) {
          found.push({ id: h.id, label: text });
          seen.add(h.id);
        }
      });

      setItems(found);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Scroll-spy
  useEffect(() => {
    if (items.length < 2) return;
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

  if (items.length < 2) return null;

  return (
    <nav className="hidden xl:block w-[160px] shrink-0 pt-6 pr-6" aria-label="On this page">
      <div className="sticky top-24">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3 pl-3">
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
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
