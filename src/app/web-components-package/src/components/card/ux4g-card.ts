/**
 * UX4G Card Web Component
 * 
 * @element ux4g-card
 * 
 * @attr {string} variant - Card variant: default, bordered, elevated
 * @attr {boolean} hoverable - Add hover effect
 * @attr {boolean} clickable - Make card clickable
 * 
 * @slot - Default slot for card content
 * @slot header - Header content
 * @slot footer - Footer content
 * 
 * @fires ux4g-card-click - Fired when clickable card is clicked
 * 
 * @example
 * ```html
 * <ux4g-card variant="elevated" hoverable>
 *   <div slot="header">Card Title</div>
 *   <p>Card content goes here</p>
 *   <div slot="footer">Footer content</div>
 * </ux4g-card>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GCard extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'hoverable', 'clickable'];
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
    const variant = this.getAttributeOrDefault('variant', 'default');
    const hoverable = this.getBooleanAttribute('hoverable');
    const clickable = this.getBooleanAttribute('clickable');

    // Clear previous content
    this.root.innerHTML = '';

    // Create card container
    const card = this.createElement('div', [
      'ux4g-card',
      `ux4g-card-${variant}`,
      hoverable ? 'ux4g-card-hoverable' : '',
      clickable ? 'ux4g-card-clickable' : '',
    ].filter(Boolean));

    if (clickable) {
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.addEventListener('click', () => {
        this.dispatchCustomEvent('ux4g-card-click');
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.dispatchCustomEvent('ux4g-card-click');
        }
      });
    }

    // Header slot
    const headerSlot = document.createElement('slot');
    headerSlot.name = 'header';
    const header = this.createElement('div', ['ux4g-card-header']);
    header.appendChild(headerSlot);

    // Body slot (default)
    const bodySlot = document.createElement('slot');
    const body = this.createElement('div', ['ux4g-card-body']);
    body.appendChild(bodySlot);

    // Footer slot
    const footerSlot = document.createElement('slot');
    footerSlot.name = 'footer';
    const footer = this.createElement('div', ['ux4g-card-footer']);
    footer.appendChild(footerSlot);

    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(footer);

    this.root.appendChild(card);
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'default');
  }
}

// Define the custom element
if (!customElements.get('ux4g-card')) {
  customElements.define('ux4g-card', UX4GCard);
}
