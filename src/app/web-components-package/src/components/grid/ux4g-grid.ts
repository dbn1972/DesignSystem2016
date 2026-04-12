/**
 * UX4G Grid Web Component
 * 
 * @element ux4g-grid
 * 
 * @attr {number} columns - Number of columns (1-12)
 * @attr {string} gap - Gap size: xs, sm, md, lg, xl
 * @attr {boolean} responsive - Enable responsive behavior
 * 
 * @slot - Default slot for grid items
 * 
 * @example
 * ```html
 * <ux4g-grid columns="3" gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </ux4g-grid>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GGrid extends UX4GElement {
  static get observedAttributes() {
    return ['columns', 'gap', 'responsive'];
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
    const columns = parseInt(this.getAttribute('columns') || '12');
    const gap = this.getAttributeOrDefault('gap', 'md');
    const responsive = this.getBooleanAttribute('responsive');

    // Clear previous content
    this.root.innerHTML = '';

    // Create grid
    const grid = this.createElement('div', [
      'ux4g-grid',
      `ux4g-grid-cols-${columns}`,
      `ux4g-grid-gap-${gap}`,
      responsive ? 'ux4g-grid-responsive' : '',
    ].filter(Boolean));

    const slot = document.createElement('slot');
    grid.appendChild(slot);

    this.root.appendChild(grid);
  }

  /**
   * Set columns
   */
  set columns(value: number) {
    this.setAttribute('columns', String(value));
  }

  get columns(): number {
    return parseInt(this.getAttribute('columns') || '12');
  }
}

// Define the custom element
if (!customElements.get('ux4g-grid')) {
  customElements.define('ux4g-grid', UX4GGrid);
}
