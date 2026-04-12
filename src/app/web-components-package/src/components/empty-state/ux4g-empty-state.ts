/**
 * UX4G Empty State Web Component
 * 
 * @element ux4g-empty-state
 * 
 * @attr {string} title - Empty state title
 * @attr {string} description - Empty state description
 * @attr {string} icon - Icon type: search, folder, file, inbox
 * 
 * @slot - Default slot for custom content or actions
 * @slot actions - Slot for action buttons
 * 
 * @example
 * ```html
 * <ux4g-empty-state 
 *   title="No Results Found" 
 *   description="Try adjusting your search criteria"
 *   icon="search">
 *   <div slot="actions">
 *     <ux4g-button variant="primary">Clear Filters</ux4g-button>
 *   </div>
 * </ux4g-empty-state>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GEmptyState extends UX4GElement {
  static get observedAttributes() {
    return ['title', 'description', 'icon'];
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
    const title = this.getAttribute('title') || 'No Data';
    const description = this.getAttribute('description');
    const icon = this.getAttributeOrDefault('icon', 'inbox');

    // Clear previous content
    this.root.innerHTML = '';

    // Create empty state container
    const container = this.createElement('div', ['ux4g-empty-state']);

    // Icon
    const iconWrapper = this.createElement('div', ['ux4g-empty-state-icon']);
    iconWrapper.innerHTML = this.getIconSVG(icon);
    container.appendChild(iconWrapper);

    // Title
    const titleElement = this.createElement('h3', ['ux4g-empty-state-title']);
    titleElement.textContent = title;
    container.appendChild(titleElement);

    // Description
    if (description) {
      const descElement = this.createElement('p', ['ux4g-empty-state-description']);
      descElement.textContent = description;
      container.appendChild(descElement);
    }

    // Content slot
    const contentSlot = document.createElement('slot');
    const contentWrapper = this.createElement('div', ['ux4g-empty-state-content']);
    contentWrapper.appendChild(contentSlot);
    container.appendChild(contentWrapper);

    // Actions slot
    const actionsSlot = document.createElement('slot');
    actionsSlot.name = 'actions';
    const actionsWrapper = this.createElement('div', ['ux4g-empty-state-actions']);
    actionsWrapper.appendChild(actionsSlot);
    container.appendChild(actionsWrapper);

    this.root.appendChild(container);
  }

  private getIconSVG(icon: string): string {
    const icons: Record<string, string> = {
      search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
      folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
      file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>',
      inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
    };
    return icons[icon] || icons.inbox;
  }

  /**
   * Set title
   */
  set title(value: string) {
    this.setAttribute('title', value);
  }

  get title(): string {
    return this.getAttribute('title') || 'No Data';
  }
}

// Define the custom element
if (!customElements.get('ux4g-empty-state')) {
  customElements.define('ux4g-empty-state', UX4GEmptyState);
}
