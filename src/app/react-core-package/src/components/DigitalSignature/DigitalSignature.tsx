/**
 * DigitalSignature Component
 * Signature capture pad using a canvas element for freehand drawing.
 *
 * @example
 * ```tsx
 * <DigitalSignature
 *   label="Sign here"
 *   onSign={(dataUrl) => console.log(dataUrl)}
 *   onClear={() => console.log('cleared')}
 * />
 * ```
 */

import { forwardRef, useRef, useCallback, useState } from 'react';
import { cn } from '../../utils/cn';
import { DigitalSignatureProps } from './DigitalSignature.types';

export const DigitalSignature = forwardRef<HTMLDivElement, DigitalSignatureProps>(
  (
    {
      onSign,
      onClear,
      width = 400,
      height = 200,
      label = 'Signature pad',
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [drawing, setDrawing] = useState(false);

    const getCtx = useCallback(() => {
      return canvasRef.current?.getContext('2d') ?? null;
    }, []);

    const startDraw = useCallback(
      (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (disabled) return;
        const ctx = getCtx();
        if (!ctx) return;
        setDrawing(true);
        const rect = canvasRef.current!.getBoundingClientRect();
        ctx.beginPath();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
      },
      [disabled, getCtx]
    );

    const draw = useCallback(
      (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!drawing || disabled) return;
        const ctx = getCtx();
        if (!ctx) return;
        const rect = canvasRef.current!.getBoundingClientRect();
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
      },
      [drawing, disabled, getCtx]
    );

    const stopDraw = useCallback(() => {
      setDrawing(false);
    }, []);

    const handleSign = useCallback(() => {
      if (!canvasRef.current) return;
      const dataUrl = canvasRef.current.toDataURL();
      onSign?.(dataUrl);
    }, [onSign]);

    const handleClear = useCallback(() => {
      const ctx = getCtx();
      if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
      onClear?.();
    }, [getCtx, onClear]);

    return (
      <div
        ref={ref}
        className={cn('ux4g-digital-signature', className)}
        role="group"
        aria-label={label}
        {...props}
      >
        {label && (
          <div className="ux4g-digital-signature-label text-sm font-medium mb-1">
            {label}
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          aria-label={label}
          className={cn(
            'ux4g-digital-signature-canvas border rounded cursor-crosshair',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onMouseLeave={stopDraw}
        />
        <div className="ux4g-digital-signature-actions flex gap-2 mt-2">
          <button
            type="button"
            onClick={handleSign}
            disabled={disabled}
            className="px-4 py-1 bg-primary text-primary-foreground rounded text-sm"
          >
            Sign
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={disabled}
            className="px-4 py-1 border rounded text-sm"
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
);

DigitalSignature.displayName = 'DigitalSignature';
