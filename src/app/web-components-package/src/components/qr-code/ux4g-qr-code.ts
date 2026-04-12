/**
 * UX4G QR Code Web Component
 * 
 * @element ux4g-qr-code
 * 
 * @attr {string} value - Data to encode in QR code
 * @attr {number} size - QR code size in pixels (default: 200)
 * @attr {string} fg-color - Foreground color (default: #000000)
 * @attr {string} bg-color - Background color (default: #ffffff)
 * @attr {number} error-level - Error correction level 0-3 (default: 1)
 * 
 * @example
 * ```html
 * <ux4g-qr-code 
 *   value="https://india.gov.in" 
 *   size="200"
 *   fg-color="#000080">
 * </ux4g-qr-code>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GQRCode extends UX4GElement {
  static get observedAttributes() {
    return ['value', 'size', 'fg-color', 'bg-color', 'error-level'];
  }

  private _canvas: HTMLCanvasElement | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    this.generateQRCode();
  }

  protected render(): void {
    const size = parseInt(this.getAttribute('size') || '200');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', ['ux4g-qr-code']);

    // Canvas for QR code
    this._canvas = this.createElement('canvas', ['ux4g-qr-code-canvas']);
    this._canvas.width = size;
    this._canvas.height = size;
    container.appendChild(this._canvas);

    this.root.appendChild(container);
  }

  private generateQRCode(): void {
    if (!this._canvas) return;

    const value = this.getAttribute('value') || '';
    const size = parseInt(this.getAttribute('size') || '200');
    const fgColor = this.getAttribute('fg-color') || '#000000';
    const bgColor = this.getAttribute('bg-color') || '#ffffff';

    const ctx = this._canvas.getContext('2d');
    if (!ctx) return;

    // Simple QR code generation (placeholder - simplified version)
    // In production, use a library like qrcode or generate server-side
    
    // Clear canvas
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);

    // Generate simple pattern (this is a simplified representation)
    // Real QR code would use proper encoding algorithm
    const moduleCount = 25; // Typical QR code has 25-177 modules
    const moduleSize = size / moduleCount;

    // Create a simple pattern based on the value
    const hash = this.simpleHash(value);
    
    ctx.fillStyle = fgColor;
    
    for (let row = 0; row < moduleCount; row++) {
      for (let col = 0; col < moduleCount; col++) {
        // Create deterministic pattern from hash
        const index = row * moduleCount + col;
        if ((hash >> (index % 32)) & 1) {
          ctx.fillRect(
            col * moduleSize,
            row * moduleSize,
            moduleSize,
            moduleSize
          );
        }
      }
    }

    // Draw position markers (corners)
    this.drawPositionMarker(ctx, 0, 0, moduleSize, fgColor, bgColor);
    this.drawPositionMarker(ctx, (moduleCount - 7) * moduleSize, 0, moduleSize, fgColor, bgColor);
    this.drawPositionMarker(ctx, 0, (moduleCount - 7) * moduleSize, moduleSize, fgColor, bgColor);
  }

  private drawPositionMarker(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    moduleSize: number,
    fgColor: string,
    bgColor: string
  ): void {
    // Outer square
    ctx.fillStyle = fgColor;
    ctx.fillRect(x, y, moduleSize * 7, moduleSize * 7);
    
    // Inner white square
    ctx.fillStyle = bgColor;
    ctx.fillRect(x + moduleSize, y + moduleSize, moduleSize * 5, moduleSize * 5);
    
    // Center black square
    ctx.fillStyle = fgColor;
    ctx.fillRect(x + moduleSize * 2, y + moduleSize * 2, moduleSize * 3, moduleSize * 3);
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  /**
   * Download QR code as image
   */
  download(filename = 'qrcode.png'): void {
    if (!this._canvas) return;

    this._canvas.toBlob((blob) => {
      if (!blob) return;
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  /**
   * Get QR code as data URL
   */
  toDataURL(): string {
    return this._canvas?.toDataURL() || '';
  }

  /**
   * Set value
   */
  set value(val: string) {
    this.setAttribute('value', val);
    this.generateQRCode();
  }

  get value(): string {
    return this.getAttribute('value') || '';
  }
}

// Define the custom element
if (!customElements.get('ux4g-qr-code')) {
  customElements.define('ux4g-qr-code', UX4GQRCode);
}
