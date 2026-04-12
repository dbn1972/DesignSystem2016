/**
 * UX4G CAPTCHA Web Component
 * 
 * @element ux4g-captcha
 * 
 * @attr {string} name - Form field name
 * @attr {boolean} disabled - Whether CAPTCHA is disabled
 * @attr {number} length - CAPTCHA code length (default: 6)
 * @attr {boolean} refresh - Show refresh button
 * 
 * @fires ux4g-captcha-verify - Fired when CAPTCHA is verified
 * @fires ux4g-captcha-refresh - Fired when CAPTCHA is refreshed
 * 
 * @example
 * ```html
 * <ux4g-captcha name="captcha" length="6" refresh></ux4g-captcha>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GCAPTCHA extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'disabled', 'length', 'refresh'];
  }

  private _input: HTMLInputElement | null = null;
  private _captchaCode = '';
  private _canvas: HTMLCanvasElement | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    this.generateCaptcha();
  }

  protected render(): void {
    const disabled = this.getBooleanAttribute('disabled');
    const refresh = this.getBooleanAttribute('refresh');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', [
      'ux4g-captcha',
      disabled ? 'ux4g-captcha-disabled' : '',
    ].filter(Boolean));

    // Canvas for CAPTCHA
    this._canvas = this.createElement('canvas', ['ux4g-captcha-canvas']);
    this._canvas.width = 200;
    this._canvas.height = 60;
    container.appendChild(this._canvas);

    // Refresh button
    if (refresh) {
      const refreshBtn = this.createElement('button', ['ux4g-captcha-refresh']);
      refreshBtn.setAttribute('type', 'button');
      refreshBtn.setAttribute('aria-label', 'Refresh CAPTCHA');
      refreshBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>';
      refreshBtn.addEventListener('click', () => {
        this.generateCaptcha();
        this.dispatchCustomEvent('ux4g-captcha-refresh');
      });
      container.appendChild(refreshBtn);
    }

    // Input field
    const inputWrapper = this.createElement('div', ['ux4g-captcha-input-wrapper']);
    
    this._input = this.createElement('input', [
      'ux4g-input',
      'ux4g-captcha-input',
    ]);
    this._input.type = 'text';
    this._input.placeholder = 'Enter CAPTCHA';
    this._input.disabled = disabled;
    this._input.maxLength = parseInt(this.getAttribute('length') || '6');

    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    this._input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      this._value = target.value.toUpperCase();
      target.value = this._value;
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      // Auto-verify when length matches
      if (this._value.length === this._captchaCode.length) {
        this.verify();
      }
    });

    inputWrapper.appendChild(this._input);
    
    const verifyBtn = this.createElement('button', ['ux4g-captcha-verify']);
    verifyBtn.textContent = 'Verify';
    verifyBtn.setAttribute('type', 'button');
    verifyBtn.addEventListener('click', () => this.verify());
    inputWrapper.appendChild(verifyBtn);

    container.appendChild(inputWrapper);

    // Status message
    const status = this.createElement('div', ['ux4g-captcha-status']);
    status.id = 'captcha-status';
    container.appendChild(status);

    this.root.appendChild(container);
  }

  private generateCaptcha(): void {
    const length = parseInt(this.getAttribute('length') || '6');
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Exclude ambiguous chars
    
    this._captchaCode = '';
    for (let i = 0; i < length; i++) {
      this._captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    this.drawCaptcha();
    
    // Clear input
    if (this._input) {
      this._input.value = '';
      this._value = '';
    }
    
    this.clearStatus();
  }

  private drawCaptcha(): void {
    if (!this._canvas) return;

    const ctx = this._canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

    // Background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

    // Add noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(0, 0, 0, ${Math.random() * 0.3})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * this._canvas.width, Math.random() * this._canvas.height);
      ctx.lineTo(Math.random() * this._canvas.width, Math.random() * this._canvas.height);
      ctx.stroke();
    }

    // Draw text
    const chars = this._captchaCode.split('');
    const spacing = this._canvas.width / (chars.length + 1);

    chars.forEach((char, index) => {
      ctx.font = `${24 + Math.random() * 8}px Arial`;
      ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 40%)`;
      ctx.save();
      
      const x = spacing * (index + 1);
      const y = 35 + (Math.random() - 0.5) * 10;
      const rotation = (Math.random() - 0.5) * 0.4;
      
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });

    // Add noise dots
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.3})`;
      ctx.fillRect(
        Math.random() * this._canvas.width,
        Math.random() * this._canvas.height,
        2,
        2
      );
    }
  }

  private verify(): void {
    const isValid = this._value.toUpperCase() === this._captchaCode;

    if (isValid) {
      this.showStatus('CAPTCHA verified successfully!', 'success');
      this.dispatchCustomEvent('ux4g-captcha-verify', { 
        success: true,
        value: this._value 
      });
    } else {
      this.showStatus('Incorrect CAPTCHA. Please try again.', 'error');
      this.generateCaptcha();
      this.dispatchCustomEvent('ux4g-captcha-verify', { 
        success: false,
        value: this._value 
      });
    }
  }

  private showStatus(message: string, type: 'success' | 'error'): void {
    const status = this.root.querySelector('#captcha-status');
    if (status) {
      status.textContent = message;
      status.className = `ux4g-captcha-status ux4g-captcha-status-${type}`;
    }
  }

  private clearStatus(): void {
    const status = this.root.querySelector('#captcha-status');
    if (status) {
      status.textContent = '';
      status.className = 'ux4g-captcha-status';
    }
  }

  /**
   * Refresh CAPTCHA
   */
  refresh(): void {
    this.generateCaptcha();
  }

  /**
   * Set disabled state
   */
  set disabled(value: boolean) {
    this.setBooleanAttribute('disabled', value);
  }

  get disabled(): boolean {
    return this.getBooleanAttribute('disabled');
  }
}

// Define the custom element
if (!customElements.get('ux4g-captcha')) {
  customElements.define('ux4g-captcha', UX4GCAPTCHA);
}
