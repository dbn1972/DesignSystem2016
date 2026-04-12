/**
 * UX4G Tabs Web Component
 * 
 * @element ux4g-tabs
 * 
 * @attr {string} active - ID of the active tab
 * @attr {string} variant - Tabs variant: default, bordered, pills
 * 
 * @fires ux4g-tab-change - Fired when active tab changes
 * 
 * @example
 * ```html
 * <ux4g-tabs active="tab1">
 *   <ux4g-tab-item id="tab1" label="Overview">
 *     <p>Overview content</p>
 *   </ux4g-tab-item>
 *   <ux4g-tab-item id="tab2" label="Details">
 *     <p>Details content</p>
 *   </ux4g-tab-item>
 * </ux4g-tabs>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GTabs extends UX4GElement {
  static get observedAttributes() {
    return ['active', 'variant'];
  }

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    this.initializeTabs();
  }

  protected render(): void {
    const variant = this.getAttributeOrDefault('variant', 'default');

    // Clear previous content
    this.root.innerHTML = '';

    // Create tabs container
    const container = this.createElement('div', ['ux4g-tabs-container']);

    // Create tab list
    const tabList = this.createElement('div', [
      'ux4g-tabs-list',
      `ux4g-tabs-${variant}`,
    ]);
    tabList.setAttribute('role', 'tablist');

    // Create tab panels container
    const panelsContainer = this.createElement('div', ['ux4g-tabs-panels']);

    container.appendChild(tabList);
    container.appendChild(panelsContainer);

    this.root.appendChild(container);
  }

  private initializeTabs(): void {
    const tabItems = Array.from(this.querySelectorAll('ux4g-tab-item'));
    const activeTab = this.getAttribute('active') || (tabItems[0]?.getAttribute('id') || '');

    const tabList = this.root.querySelector('.ux4g-tabs-list');
    const panelsContainer = this.root.querySelector('.ux4g-tabs-panels');

    if (!tabList || !panelsContainer) return;

    // Clear existing content
    tabList.innerHTML = '';
    panelsContainer.innerHTML = '';

    tabItems.forEach((item, index) => {
      const id = item.getAttribute('id') || `tab-${index}`;
      const label = item.getAttribute('label') || `Tab ${index + 1}`;
      const isActive = id === activeTab;

      // Create tab button
      const tabButton = this.createElement('button', [
        'ux4g-tab',
        isActive ? 'ux4g-tab-active' : '',
      ].filter(Boolean));
      
      tabButton.textContent = label;
      tabButton.setAttribute('role', 'tab');
      tabButton.setAttribute('aria-selected', String(isActive));
      tabButton.setAttribute('aria-controls', `panel-${id}`);
      tabButton.setAttribute('id', `tab-${id}`);

      tabButton.addEventListener('click', () => {
        this.setActiveTab(id);
      });

      tabList.appendChild(tabButton);

      // Create tab panel
      const panel = this.createElement('div', [
        'ux4g-tab-panel',
        isActive ? 'ux4g-tab-panel-active' : '',
      ].filter(Boolean));
      
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `tab-${id}`);
      panel.setAttribute('id', `panel-${id}`);
      panel.hidden = !isActive;

      // Use slot to display content
      const slot = document.createElement('slot');
      slot.name = id;
      panel.appendChild(slot);

      // Set slot attribute on the original item
      item.setAttribute('slot', id);

      panelsContainer.appendChild(panel);
    });
  }

  /**
   * Set active tab
   */
  setActiveTab(tabId: string): void {
    this.setAttribute('active', tabId);

    // Update tab buttons
    const tabButtons = this.root.querySelectorAll('.ux4g-tab');
    tabButtons.forEach((button) => {
      const isActive = button.getAttribute('id') === `tab-${tabId}`;
      button.classList.toggle('ux4g-tab-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });

    // Update tab panels
    const panels = this.root.querySelectorAll('.ux4g-tab-panel');
    panels.forEach((panel) => {
      const isActive = panel.getAttribute('id') === `panel-${tabId}`;
      panel.classList.toggle('ux4g-tab-panel-active', isActive);
      (panel as HTMLElement).hidden = !isActive;
    });

    this.dispatchCustomEvent('ux4g-tab-change', { activeTab: tabId });
  }

  /**
   * Get active tab
   */
  get active(): string {
    return this.getAttribute('active') || '';
  }

  set active(value: string) {
    this.setActiveTab(value);
  }
}

// Tab Item Component
export class UX4GTabItem extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'id'];
  }
}

// Define the custom elements
if (!customElements.get('ux4g-tabs')) {
  customElements.define('ux4g-tabs', UX4GTabs);
}

if (!customElements.get('ux4g-tab-item')) {
  customElements.define('ux4g-tab-item', UX4GTabItem);
}
