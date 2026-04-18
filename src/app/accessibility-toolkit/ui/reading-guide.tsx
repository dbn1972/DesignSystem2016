/**
 * @ux4g/a11y-react — Reading Guide
 *
 * Uses a ref + direct DOM manipulation instead of setState
 * to avoid re-rendering the entire component tree on every
 * mouse move (which was blocking click events).
 */

import { useEffect, useRef } from 'react';

export function ReadingGuide({ active }: { active: boolean }) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      if (elRef.current) {
        elRef.current.style.top = `${clientY - 2}px`;
      }
    };
    window.addEventListener('mousemove', handler, { passive: true });
    window.addEventListener('touchmove', handler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handler);
      window.removeEventListener('touchmove', handler);
    };
  }, [active]);

  if (!active) return null;
  return (
    <div
      ref={elRef}
      className="ux4g-a11y-reading-guide"
      style={{ top: -100, pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}
