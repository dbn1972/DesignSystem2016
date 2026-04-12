/**
 * UX4G Badge Web Component
 * 
 * @element ux4g-badge
 * 
 * @attr {string} variant - Badge variant: neutral, info, success, warning, error
 * @attr {string} size - Badge size: sm, md, lg
 * @attr {boolean} dot - Display as a dot badge
 * @attr {boolean} pill - Display as a pill shape
 * 
 * @example
 * ```html
 * <ux4g-badge variant="success">Active</ux4g-badge>
 * <ux4g-badge variant="error" dot>3</ux4g-badge>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';
import { normalizeStatusVariant } from '../../component-contract';

export class UX4GBadge extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'size', 'dot', 'pill'];
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
    const variant = normalizeStatusVariant(this.getAttribute('variant'));
    const size = this.getAttributeOrDefault('size', 'md');
    const dot = this.getBooleanAttribute('dot');
    const pill = this.getBooleanAttribute('pill');

    // Clear previous content
    this.root.innerHTML = '';

    // Create badge element
    const badge = this.createElement('span', [
      'ux4g-badge',
      `ux4g-badge-${variant}`,
      `ux4g-badge-${size}`,
      dot ? 'ux4g-badge-dot' : '',
      pill ? 'ux4g-badge-pill' : '',
    ].filter(Boolean));

    // Add slot for content
    const slot = document.createElement('slot');
    badge.appendChild(slot);

    this.root.appendChild(badge);
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return normalizeStatusVariant(this.getAttribute('variant'));
  }

  /**
   * Set size
   */
  set size(value: string) {
    this.setAttribute('size', value);
  }

  get size(): string {
    return this.getAttributeOrDefault('size', 'md');
  }
}

// Define the custom element
if (!customElements.get('ux4g-badge')) {
  customElements.define('ux4g-badge', UX4GBadge);
}
