/**
 * UX4G Flex Web Component
 * 
 * @element ux4g-flex
 * 
 * @attr {string} direction - Flex direction: row, column, row-reverse, column-reverse
 * @attr {string} wrap - Flex wrap: nowrap, wrap, wrap-reverse
 * @attr {string} align - Align items: start, center, end, stretch, baseline
 * @attr {string} justify - Justify content: start, center, end, between, around, evenly
 * @attr {string} gap - Gap size: xs, sm, md, lg, xl
 * 
 * @slot - Default slot for flex items
 * 
 * @example
 * ```html
 * <ux4g-flex direction="row" align="center" justify="between" gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </ux4g-flex>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GFlex extends UX4GElement {
  static get observedAttributes() {
    return ['direction', 'wrap', 'align', 'justify', 'gap'];
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
    const direction = this.getAttributeOrDefault('direction', 'row');
    const wrap = this.getAttributeOrDefault('wrap', 'nowrap');
    const align = this.getAttribute('align');
    const justify = this.getAttribute('justify');
    const gap = this.getAttribute('gap');

    // Clear previous content
    this.root.innerHTML = '';

    // Create flex container
    const flex = this.createElement('div', [
      'ux4g-flex',
      `ux4g-flex-${direction}`,
      `ux4g-flex-${wrap}`,
      align ? `ux4g-flex-align-${align}` : '',
      justify ? `ux4g-flex-justify-${justify}` : '',
      gap ? `ux4g-flex-gap-${gap}` : '',
    ].filter(Boolean));

    const slot = document.createElement('slot');
    flex.appendChild(slot);

    this.root.appendChild(flex);
  }

  /**
   * Set direction
   */
  set direction(value: string) {
    this.setAttribute('direction', value);
  }

  get direction(): string {
    return this.getAttributeOrDefault('direction', 'row');
  }
}

// Define the custom element
if (!customElements.get('ux4g-flex')) {
  customElements.define('ux4g-flex', UX4GFlex);
}
