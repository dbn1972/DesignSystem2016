/**
 * UX4G Table Web Component
 * 
 * @element ux4g-table
 * 
 * @attr {string} variant - Table variant: default, bordered, striped
 * @attr {boolean} hoverable - Add hover effect on rows
 * @attr {boolean} responsive - Make table responsive with scroll
 * @attr {string} size - Table size: sm, md, lg
 * 
 * @slot - Default slot for table content (thead, tbody, tfoot)
 * 
 * @example
 * ```html
 * <ux4g-table variant="striped" hoverable responsive>
 *   <thead>
 *     <tr>
 *       <th>Name</th>
 *       <th>Email</th>
 *       <th>Status</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>John Doe</td>
 *       <td>john@example.com</td>
 *       <td>Active</td>
 *     </tr>
 *   </tbody>
 * </ux4g-table>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GTable extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'hoverable', 'responsive', 'size'];
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
    const responsive = this.getBooleanAttribute('responsive');
    const size = this.getAttributeOrDefault('size', 'md');

    // Clear previous content
    this.root.innerHTML = '';

    // Create wrapper if responsive
    const container = responsive 
      ? this.createElement('div', ['ux4g-table-responsive'])
      : this.createElement('div', []);

    // Create table
    const table = this.createElement('table', [
      'ux4g-table',
      `ux4g-table-${variant}`,
      `ux4g-table-${size}`,
      hoverable ? 'ux4g-table-hoverable' : '',
    ].filter(Boolean));

    const slot = document.createElement('slot');
    table.appendChild(slot);

    container.appendChild(table);
    this.root.appendChild(container);
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
if (!customElements.get('ux4g-table')) {
  customElements.define('ux4g-table', UX4GTable);
}
