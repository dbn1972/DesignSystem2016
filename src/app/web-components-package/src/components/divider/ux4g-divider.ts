/**
 * UX4G Divider Web Component
 * 
 * @element ux4g-divider
 * 
 * @attr {string} orientation - Divider orientation: horizontal, vertical
 * @attr {string} variant - Divider variant: solid, dashed, dotted
 * @attr {string} spacing - Spacing size: sm, md, lg
 * @attr {string} align - Text alignment for labels: left, center, right
 * 
 * @slot - Optional label text
 * 
 * @example
 * ```html
 * <ux4g-divider orientation="horizontal" variant="solid"></ux4g-divider>
 * <ux4g-divider spacing="lg">Section Title</ux4g-divider>
 * <ux4g-divider orientation="vertical" style="height: 50px;"></ux4g-divider>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GDivider extends UX4GElement {
  static get observedAttributes() {
    return ['orientation', 'variant', 'spacing', 'align'];
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
    const orientation = this.getAttributeOrDefault('orientation', 'horizontal');
    const variant = this.getAttributeOrDefault('variant', 'solid');
    const spacing = this.getAttributeOrDefault('spacing', 'md');
    const align = this.getAttributeOrDefault('align', 'center');

    // Clear previous content
    this.root.innerHTML = '';

    // Check if there's label content
    const hasLabel = this.textContent?.trim() || this.querySelector('[slot]');

    if (orientation === 'horizontal' && hasLabel) {
      // Horizontal divider with label
      const container = this.createElement('div', [
        'ux4g-divider-container',
        `ux4g-divider-${spacing}`,
        `ux4g-divider-align-${align}`,
      ]);

      const line1 = this.createElement('div', [
        'ux4g-divider',
        'ux4g-divider-horizontal',
        `ux4g-divider-${variant}`,
      ]);

      const label = this.createElement('span', ['ux4g-divider-label']);
      const slot = document.createElement('slot');
      label.appendChild(slot);

      const line2 = this.createElement('div', [
        'ux4g-divider',
        'ux4g-divider-horizontal',
        `ux4g-divider-${variant}`,
      ]);

      container.appendChild(line1);
      container.appendChild(label);
      container.appendChild(line2);

      this.root.appendChild(container);
    } else {
      // Simple divider without label
      const divider = this.createElement('div', [
        'ux4g-divider',
        `ux4g-divider-${orientation}`,
        `ux4g-divider-${variant}`,
        `ux4g-divider-${spacing}`,
      ]);

      divider.setAttribute('role', 'separator');
      
      if (orientation === 'vertical') {
        divider.setAttribute('aria-orientation', 'vertical');
      }

      this.root.appendChild(divider);
    }
  }

  /**
   * Set orientation
   */
  set orientation(value: string) {
    this.setAttribute('orientation', value);
  }

  get orientation(): string {
    return this.getAttributeOrDefault('orientation', 'horizontal');
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'solid');
  }
}

// Define the custom element
if (!customElements.get('ux4g-divider')) {
  customElements.define('ux4g-divider', UX4GDivider);
}
