/**
 * @ux4g/a11y-react — Reading Mask
 *
 * Uses refs + direct DOM manipulation instead of setState
 * to avoid re-rendering on every mouse move.
 */

import { useEffect, useRef } from 'react';

const BAND = 120;

export function ReadingMask({ active }: { active: boolean }) {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const topH = Math.max(0, clientY - BAND / 2);
      if (topRef.current) {
        topRef.current.style.height = `${topH}px`;
      }
      if (bottomRef.current) {
        bottomRef.current.style.top = `${clientY + BAND / 2}px`;
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
    <div className="ux4g-a11y-reading-mask" style={{ pointerEvents: 'none' }} aria-hidden="true">
      <div ref={topRef} className="ux4g-a11y-reading-mask-overlay" style={{ top: 0, height: 0, pointerEvents: 'none' }} />
      <div ref={bottomRef} className="ux4g-a11y-reading-mask-overlay" style={{ top: '100vh', bottom: 0, pointerEvents: 'none' }} />
    </div>
  );
}
