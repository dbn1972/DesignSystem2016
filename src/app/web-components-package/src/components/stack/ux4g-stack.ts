/**
 * UX4G Stack Web Component
 * 
 * @element ux4g-stack
 * 
 * @attr {string} direction - Stack direction: vertical, horizontal
 * @attr {string} spacing - Spacing between items: xs, sm, md, lg, xl
 * @attr {string} align - Align items: start, center, end, stretch
 * @attr {string} justify - Justify content: start, center, end, between, around
 * 
 * @slot - Default slot for stack items
 * 
 * @example
 * ```html
 * <ux4g-stack direction="vertical" spacing="md" align="stretch">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </ux4g-stack>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GStack extends UX4GElement {
  static get observedAttributes() {
    return ['direction', 'spacing', 'align', 'justify'];
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
    const direction = this.getAttributeOrDefault('direction', 'vertical');
    const spacing = this.getAttributeOrDefault('spacing', 'md');
    const align = this.getAttribute('align');
    const justify = this.getAttribute('justify');

    // Clear previous content
    this.root.innerHTML = '';

    // Create stack
    const stack = this.createElement('div', [
      'ux4g-stack',
      `ux4g-stack-${direction}`,
      `ux4g-stack-spacing-${spacing}`,
      align ? `ux4g-stack-align-${align}` : '',
      justify ? `ux4g-stack-justify-${justify}` : '',
    ].filter(Boolean));

    const slot = document.createElement('slot');
    stack.appendChild(slot);

    this.root.appendChild(stack);
  }

  /**
   * Set direction
   */
  set direction(value: string) {
    this.setAttribute('direction', value);
  }

  get direction(): string {
    return this.getAttributeOrDefault('direction', 'vertical');
  }
}

// Define the custom element
if (!customElements.get('ux4g-stack')) {
  customElements.define('ux4g-stack', UX4GStack);
}
