/**
 * @ux4g/a11y-react — Icons
 *
 * Self-contained SVG icons. Zero external dependencies.
 */

import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

const b: P = {
  xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 20,
  viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const AccessibilityIcon = (p: P) => <svg {...b} {...p}><circle cx="12" cy="4.5" r="2.5" /><path d="M12 7v5m-4-3h8m-6 3l-2 6m4-6l2 6" /></svg>;
export const CloseIcon = (p: P) => <svg {...b} {...p}><path d="M18 6L6 18M6 6l12 12" /></svg>;
export const PlusIcon = (p: P) => <svg {...b} {...p}><path d="M12 5v14M5 12h14" /></svg>;
export const MinusIcon = (p: P) => <svg {...b} {...p}><path d="M5 12h14" /></svg>;
export const RotateCcwIcon = (p: P) => <svg {...b} {...p}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>;
export const TypeIcon = (p: P) => <svg {...b} {...p}><polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /></svg>;
export const ContrastIcon = (p: P) => <svg {...b} {...p}><circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" /></svg>;
export const EyeIcon = (p: P) => <svg {...b} {...p}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>;
export const NavigationIcon = (p: P) => <svg {...b} {...p}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>;
export const BookOpenIcon = (p: P) => <svg {...b} {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>;
