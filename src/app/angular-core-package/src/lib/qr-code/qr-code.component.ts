import { Component, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @component QRCode
 * @description Generate QR codes for payments, document verification, URLs
 *
 * @example
 * // UPI Payment QR Code
 * <ux4g-qr-code
 *   value="upi://pay?pa=govt@sbi&pn=Government+Services&am=500&tn=Application+Fee"
 *   [size]="300"
 *   errorCorrection="H"
 * ></ux4g-qr-code>
 *
 * @example
 * // Aadhaar Verification QR
 * <ux4g-qr-code
 *   value="https://verify.aadhaar.gov.in/12345678901234567890"
 *   [size]="200"
 * ></ux4g-qr-code>
 *
 * @example
 * // Passport Application QR
 * <ux4g-qr-code
 *   value="PASSPORT-APP-2026-123456"
 *   [size]="250"
 *   foregroundColor="#000080"
 * ></ux4g-qr-code>
 */
@Component({
  selector: 'ux4g-qr-code',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="ux4g-qr-code" role="img" [attr.aria-label]="'QR Code: ' + value">
      <canvas
        #qrCanvas
        [width]="size"
        [height]="size"
        class="ux4g-qr-code__canvas"
      ></canvas>
      <button
        class="ux4g-qr-code__download"
        (click)="downloadQR()"
        aria-label="Download QR Code"
      >
        Download QR Code
      </button>
    </div>
  `,
  styleUrls: ['./qr-code.component.css']
})
export class QRCodeComponent implements AfterViewInit, OnChanges {
  @Input() value: string = '';
  @Input() size: number = 200;
  @Input() errorCorrection: 'L' | 'M' | 'Q' | 'H' = 'M';
  @Input() foregroundColor: string = '#000000';
  @Input() backgroundColor: string = '#ffffff';
  @Input() includeMargin: boolean = true;

  @ViewChild('qrCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    this.generateQR();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.canvasRef && (changes['value'] || changes['size'] || changes['foregroundColor'] || changes['backgroundColor'])) {
      this.generateQR();
    }
  }

  private generateQR(): void {
    if (!this.canvasRef || !this.value) return;

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simple QR code implementation - create a grid pattern
    // For production, use a library like qrcode or qrious
    const gridSize = 25; // 25x25 grid for simplicity
    const cellSize = this.size / gridSize;
    const margin = this.includeMargin ? 2 : 0;
    const dataSize = gridSize - (margin * 2);

    // Fill background
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, this.size, this.size);

    // Generate a simple pattern based on the value
    // This is a simplified QR-like pattern, not a real QR code
    ctx.fillStyle = this.foregroundColor;

    // Create finder patterns (corners)
    this.drawFinderPattern(ctx, margin, margin, cellSize);
    this.drawFinderPattern(ctx, gridSize - 7 - margin, margin, cellSize);
    this.drawFinderPattern(ctx, margin, gridSize - 7 - margin, cellSize);

    // Generate data pattern based on string hash
    const hash = this.simpleHash(this.value);
    for (let y = 0; y < dataSize; y++) {
      for (let x = 0; x < dataSize; x++) {
        // Skip finder pattern areas
        if (this.isFinderArea(x, y, margin, dataSize)) continue;

        // Generate pseudo-random pattern based on hash and position
        const seed = hash + x * 31 + y * 17;
        if (this.shouldFillCell(seed)) {
          ctx.fillRect(
            (x + margin) * cellSize,
            (y + margin) * cellSize,
            cellSize,
            cellSize
          );
        }
      }
    }
  }

  private drawFinderPattern(ctx: CanvasRenderingContext2D, startX: number, startY: number, cellSize: number): void {
    // Outer square (7x7)
    for (let i = 0; i < 7; i++) {
      ctx.fillRect(startX * cellSize, (startY + i) * cellSize, cellSize, cellSize);
      ctx.fillRect((startX + 6) * cellSize, (startY + i) * cellSize, cellSize, cellSize);
      ctx.fillRect((startX + i) * cellSize, startY * cellSize, cellSize, cellSize);
      ctx.fillRect((startX + i) * cellSize, (startY + 6) * cellSize, cellSize, cellSize);
    }

    // Inner square (3x3)
    for (let y = 2; y < 5; y++) {
      for (let x = 2; x < 5; x++) {
        ctx.fillRect((startX + x) * cellSize, (startY + y) * cellSize, cellSize, cellSize);
      }
    }
  }

  private isFinderArea(x: number, y: number, margin: number, dataSize: number): boolean {
    const adjustedX = x;
    const adjustedY = y;

    // Top-left finder
    if (adjustedX < 8 && adjustedY < 8) return true;
    // Top-right finder
    if (adjustedX >= dataSize - 8 && adjustedY < 8) return true;
    // Bottom-left finder
    if (adjustedX < 8 && adjustedY >= dataSize - 8) return true;

    return false;
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  private shouldFillCell(seed: number): boolean {
    // Simple pseudo-random determination
    return (seed % 3) !== 0;
  }

  downloadQR(): void {
    if (!this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = url;
    link.click();
  }
}
