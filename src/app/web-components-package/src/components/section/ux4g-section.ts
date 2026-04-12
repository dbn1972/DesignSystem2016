/**
 * UX4G Section Web Component
 * 
 * @element ux4g-section
 * 
 * @attr {string} variant - Section variant: default, light, dark, primary
 * @attr {string} padding - Padding size: none, sm, md, lg, xl
 * @attr {string} title - Section title
 * @attr {string} subtitle - Section subtitle
 * 
 * @slot - Default slot for section content
 * @slot header - Custom header content
 * 
 * @example
 * ```html
 * <ux4g-section 
 *   variant="primary" 
 *   padding="lg"
 *   title="Section Title" 
 *   subtitle="Section description">
 *   <p>Section content goes here</p>
 * </ux4g-section>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GSection extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'padding', 'title', 'subtitle'];
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
    const padding = this.getAttributeOrDefault('padding', 'md');
    const title = this.getAttribute('title');
    const subtitle = this.getAttribute('subtitle');

    // Clear previous content
    this.root.innerHTML = '';

    // Create section
    const section = this.createElement('section', [
      'ux4g-section',
      `ux4g-section-${variant}`,
      `ux4g-section-padding-${padding}`,
    ]);

    // Header (if title or subtitle)
    if (title || subtitle) {
      const header = this.createElement('div', ['ux4g-section-header']);
      
      if (title) {
        const titleElement = this.createElement('h2', ['ux4g-section-title']);
        titleElement.textContent = title;
        header.appendChild(titleElement);
      }

      if (subtitle) {
        const subtitleElement = this.createElement('p', ['ux4g-section-subtitle']);
        subtitleElement.textContent = subtitle;
        header.appendChild(subtitleElement);
      }

      section.appendChild(header);
    }

    // Custom header slot
    const headerSlot = document.createElement('slot');
    headerSlot.name = 'header';
    section.appendChild(headerSlot);

    // Content
    const content = this.createElement('div', ['ux4g-section-content']);
    const slot = document.createElement('slot');
    content.appendChild(slot);
    section.appendChild(content);

    this.root.appendChild(section);
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
if (!customElements.get('ux4g-section')) {
  customElements.define('ux4g-section', UX4GSection);
}
