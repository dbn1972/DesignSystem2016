/**
 * UX4G Rating Web Component
 * 
 * @element ux4g-rating
 * 
 * @attr {string} name - Form field name
 * @attr {number} value - Current rating value
 * @attr {number} max - Maximum rating (default: 5)
 * @attr {boolean} readonly - Read-only mode
 * @attr {boolean} disabled - Disabled state
 * @attr {string} size - Rating size: sm, md, lg
 * @attr {boolean} allow-half - Allow half-star ratings
 * 
 * @fires ux4g-rating-change - Fired when rating changes
 * 
 * @example
 * ```html
 * <ux4g-rating name="rating" value="3.5" max="5" allow-half></ux4g-rating>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GRating extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'max', 'readonly', 'disabled', 'size', 'allow-half'];
  }

  private _hoveredValue = 0;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const max = parseInt(this.getAttribute('max') || '5');
    const readonly = this.getBooleanAttribute('readonly');
    const disabled = this.getBooleanAttribute('disabled');
    const size = this.getAttributeOrDefault('size', 'md');
    const allowHalf = this.getBooleanAttribute('allow-half');
    const currentValue = parseFloat(this._value || '0');

    // Clear previous content
    this.root.innerHTML = '';

    // Create rating container
    const container = this.createElement('div', [
      'ux4g-rating',
      `ux4g-rating-${size}`,
      readonly ? 'ux4g-rating-readonly' : '',
      disabled ? 'ux4g-rating-disabled' : '',
    ].filter(Boolean));

    container.setAttribute('role', 'slider');
    container.setAttribute('aria-valuemin', '0');
    container.setAttribute('aria-valuemax', String(max));
    container.setAttribute('aria-valuenow', String(currentValue));

    for (let i = 1; i <= max; i++) {
      const star = this.createElement('span', ['ux4g-rating-star']);
      star.setAttribute('data-value', String(i));

      // Determine fill state
      const displayValue = this._hoveredValue || currentValue;
      let fillClass = '';
      
      if (displayValue >= i) {
        fillClass = 'ux4g-rating-star-full';
      } else if (allowHalf && displayValue >= i - 0.5) {
        fillClass = 'ux4g-rating-star-half';
      } else {
        fillClass = 'ux4g-rating-star-empty';
      }

      star.className = `ux4g-rating-star ${fillClass}`;

      // SVG star icon
      star.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      `;

      if (!readonly && !disabled) {
        star.addEventListener('click', () => {
          this.setRating(i);
        });

        star.addEventListener('mouseenter', () => {
          this._hoveredValue = i;
          this.render();
        });

        container.addEventListener('mouseleave', () => {
          this._hoveredValue = 0;
          this.render();
        });
      }

      container.appendChild(star);
    }

    // Display value
    const valueDisplay = this.createElement('span', ['ux4g-rating-value']);
    valueDisplay.textContent = currentValue > 0 ? String(currentValue) : '';
    container.appendChild(valueDisplay);

    this.root.appendChild(container);
  }

  private setRating(value: number): void {
    this._value = String(value);
    
    if (this._internals) {
      this._internals.setFormValue(this._value);
    }

    this.dispatchCustomEvent('ux4g-rating-change', { value: parseFloat(this._value) });
    this.render();
  }

  /**
   * Set rating value
   */
  set value(val: number) {
    this.setAttribute('value', String(val));
  }

  get value(): number {
    return parseFloat(this._value || '0');
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
if (!customElements.get('ux4g-rating')) {
  customElements.define('ux4g-rating', UX4GRating);
}
