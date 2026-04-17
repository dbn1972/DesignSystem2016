/**
 * QRCode Component
 * Displays a QR code placeholder with the encoded value.
 * For production, integrate with a QR library like `qrcode.react`.
 * This implementation provides the component API and accessibility structure.
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { QRCodeProps } from './QRCode.types';

export const QRCode = forwardRef<HTMLDivElement, QRCodeProps>(
  ({ value, size = 128, fgColor = '#000000', bgColor = '#ffffff', label, className, ...props }, ref) => (
    <div
      ref={ref}
      role="img"
      aria-label={label || `QR code for: ${value}`}
      className={cn('ux4g-qrcode inline-flex flex-col items-center', className)}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 128 128"
        className="border border-border rounded"
        aria-hidden="true"
      >
        <rect width="128" height="128" fill={bgColor} />
        {/* Finder patterns (top-left, top-right, bottom-left) */}
        <rect x="8" y="8" width="28" height="28" fill={fgColor} />
        <rect x="12" y="12" width="20" height="20" fill={bgColor} />
        <rect x="16" y="16" width="12" height="12" fill={fgColor} />
        <rect x="92" y="8" width="28" height="28" fill={fgColor} />
        <rect x="96" y="12" width="20" height="20" fill={bgColor} />
        <rect x="100" y="16" width="12" height="12" fill={fgColor} />
        <rect x="8" y="92" width="28" height="28" fill={fgColor} />
        <rect x="12" y="96" width="20" height="20" fill={bgColor} />
        <rect x="16" y="100" width="12" height="12" fill={fgColor} />
        {/* Data area placeholder */}
        <text x="64" y="68" textAnchor="middle" fontSize="8" fill={fgColor} fontFamily="monospace">
          {value.slice(0, 16)}
        </text>
      </svg>
      <span className="text-xs text-muted-foreground mt-1 max-w-full truncate" style={{ maxWidth: size }}>
        {value}
      </span>
    </div>
  )
);

QRCode.displayName = 'QRCode';
