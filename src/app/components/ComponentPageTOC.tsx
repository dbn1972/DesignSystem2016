/**
 * Right-side sticky TOC for component documentation pages.
 * Shows section anchors with scroll-spy highlighting.
 * Visible on 2xl+ screens only (when there's room for 3 columns).
 */

import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

const SECTIONS = [
  { id: 'section-guidance', label: 'Playground' },
  { id: 'section-installation', label: 'Installation' },
  { id: 'section-accessibility', label: 'Accessibility' },
  { id: 'section-usecases', label: 'Use Cases' },
];

export default function ComponentPageTOC() {
  const [activeId, setActiveId] = useState('');
  const [visibleIds, setVisibleIds] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveId('');
    setVisibleIds([]);

    const timer = setTimeout(() => {
      observerRef.current?.disconnect();

      // Find which sections actually exist on this page
      const existing = SECTIONS.filter(s => document.getElementById(s.id));
      setVisibleIds(existing.map(s => s.id));

      if (existing.length === 0) return;

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

      existing.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observerRef.current!.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  if (visibleIds.length === 0) return null;

  return (
    <nav className="hidden 2xl:block w-[160px] shrink-0" aria-label="On this page">
      <div className="sticky top-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">
          On this page
        </p>
        <ul className="space-y-0.5">
          {SECTIONS.filter(s => visibleIds.includes(s.id)).map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block text-[12px] py-1 pl-3 border-l-2 transition-colors ${
                  activeId === section.id
                    ? 'border-primary text-primary font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
