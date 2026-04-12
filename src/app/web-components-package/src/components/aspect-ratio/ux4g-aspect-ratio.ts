/**
 * UX4G Aspect Ratio Web Component
 * 
 * @element ux4g-aspect-ratio
 * 
 * @attr {string} ratio - Aspect ratio (e.g., "16/9", "4/3", "1/1")
 * 
 * @slot - Default slot for content
 * 
 * @example
 * ```html
 * <ux4g-aspect-ratio ratio="16/9">
 *   <img src="image.jpg" alt="Image" />
 * </ux4g-aspect-ratio>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GAspectRatio extends UX4GElement {
  static get observedAttributes() {
    return ['ratio'];
  }

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const ratio = this.getAttribute('ratio') || '16/9';
    const [width, height] = ratio.split('/').map(Number);
    const paddingBottom = ((height / width) * 100).toFixed(2);

    // Clear previous content
    this.root.innerHTML = '';

    // Create aspect ratio container
    const container = this.createElement('div', ['ux4g-aspect-ratio']);
    container.style.paddingBottom = `${paddingBottom}%`;

    const content = this.createElement('div', ['ux4g-aspect-ratio-content']);
    const slot = document.createElement('slot');
    content.appendChild(slot);

    container.appendChild(content);
    this.root.appendChild(container);
  }

  /**
   * Set ratio
   */
  set ratio(value: string) {
    this.setAttribute('ratio', value);
  }

  get ratio(): string {
    return this.getAttribute('ratio') || '16/9';
  }
}

// Define the custom element
if (!customElements.get('ux4g-aspect-ratio')) {
  customElements.define('ux4g-aspect-ratio', UX4GAspectRatio);
}
