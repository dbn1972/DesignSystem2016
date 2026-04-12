/**
 * UX4G Statistic Web Component
 * 
 * @element ux4g-statistic
 * 
 * @attr {string} title - Statistic title
 * @attr {string} value - Statistic value
 * @attr {string} prefix - Prefix text/symbol
 * @attr {string} suffix - Suffix text/symbol
 * @attr {string} trend - Trend direction: up, down
 * @attr {string} trend-value - Trend percentage/value
 * 
 * @slot - Default slot for custom value content
 * 
 * @example
 * ```html
 * <ux4g-statistic 
 *   title="Total Users" 
 *   value="1,234" 
 *   trend="up" 
 *   trend-value="+12%">
 * </ux4g-statistic>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GStatistic extends UX4GElement {
  static get observedAttributes() {
    return ['title', 'value', 'prefix', 'suffix', 'trend', 'trend-value'];
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
    const title = this.getAttribute('title');
    const value = this.getAttribute('value');
    const prefix = this.getAttribute('prefix');
    const suffix = this.getAttribute('suffix');
    const trend = this.getAttribute('trend');
    const trendValue = this.getAttribute('trend-value');

    // Clear previous content
    this.root.innerHTML = '';

    // Create statistic container
    const container = this.createElement('div', ['ux4g-statistic']);

    // Title
    if (title) {
      const titleElement = this.createElement('div', ['ux4g-statistic-title']);
      titleElement.textContent = title;
      container.appendChild(titleElement);
    }

    // Value container
    const valueContainer = this.createElement('div', ['ux4g-statistic-value']);

    // Prefix
    if (prefix) {
      const prefixElement = this.createElement('span', ['ux4g-statistic-prefix']);
      prefixElement.textContent = prefix;
      valueContainer.appendChild(prefixElement);
    }

    // Value - check if slot has content, otherwise use attribute
    const hasSlotContent = this.textContent?.trim() || this.querySelector('[slot]');
    
    if (hasSlotContent) {
      const slot = document.createElement('slot');
      valueContainer.appendChild(slot);
    } else if (value) {
      const valueElement = this.createElement('span', ['ux4g-statistic-content']);
      valueElement.textContent = value;
      valueContainer.appendChild(valueElement);
    }

    // Suffix
    if (suffix) {
      const suffixElement = this.createElement('span', ['ux4g-statistic-suffix']);
      suffixElement.textContent = suffix;
      valueContainer.appendChild(suffixElement);
    }

    container.appendChild(valueContainer);

    // Trend indicator
    if (trend && trendValue) {
      const trendElement = this.createElement('div', [
        'ux4g-statistic-trend',
        `ux4g-statistic-trend-${trend}`,
      ]);

      const trendIcon = trend === 'up' ? '↑' : '↓';
      trendElement.innerHTML = `${trendIcon} ${trendValue}`;
      
      container.appendChild(trendElement);
    }

    this.root.appendChild(container);
  }

  /**
   * Set value
   */
  set value(val: string) {
    this.setAttribute('value', val);
  }

  get value(): string {
    return this.getAttribute('value') || '';
  }
}

// Define the custom element
if (!customElements.get('ux4g-statistic')) {
  customElements.define('ux4g-statistic', UX4GStatistic);
}
