/**
 * UX4G Calendar Web Component
 * 
 * @element ux4g-calendar
 * 
 * @attr {string} value - Selected date (YYYY-MM-DD)
 * @attr {string} min - Minimum selectable date
 * @attr {string} max - Maximum selectable date
 * @attr {boolean} disabled - Disabled state
 * 
 * @fires ux4g-calendar-select - Fired when date is selected
 * @fires ux4g-calendar-month-change - Fired when month changes
 * 
 * @example
 * ```html
 * <ux4g-calendar value="2024-04-12"></ux4g-calendar>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GCalendar extends UX4GElement {
  static get observedAttributes() {
    return ['value', 'min', 'max', 'disabled'];
  }

  private _currentMonth: Date = new Date();

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const disabled = this.getBooleanAttribute('disabled');

    // Clear previous content
    this.root.innerHTML = '';

    // Create calendar container
    const container = this.createElement('div', [
      'ux4g-calendar',
      disabled ? 'ux4g-calendar-disabled' : '',
    ].filter(Boolean));

    // Header
    const header = this.createElement('div', ['ux4g-calendar-header']);
    
    const prevButton = this.createElement('button', ['ux4g-calendar-nav']);
    prevButton.setAttribute('type', 'button');
    prevButton.innerHTML = '‹';
    prevButton.addEventListener('click', () => this.previousMonth());
    header.appendChild(prevButton);

    const monthYear = this.createElement('div', ['ux4g-calendar-month-year']);
    monthYear.textContent = this._currentMonth.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
    header.appendChild(monthYear);

    const nextButton = this.createElement('button', ['ux4g-calendar-nav']);
    nextButton.setAttribute('type', 'button');
    nextButton.innerHTML = '›';
    nextButton.addEventListener('click', () => this.nextMonth());
    header.appendChild(nextButton);

    container.appendChild(header);

    // Weekday headers
    const weekdays = this.createElement('div', ['ux4g-calendar-weekdays']);
    const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdayNames.forEach(day => {
      const weekday = this.createElement('div', ['ux4g-calendar-weekday']);
      weekday.textContent = day;
      weekdays.appendChild(weekday);
    });
    container.appendChild(weekdays);

    // Days grid
    const days = this.createElement('div', ['ux4g-calendar-days']);
    this.renderDays(days);
    container.appendChild(days);

    this.root.appendChild(container);
  }

  private renderDays(container: HTMLElement): void {
    const year = this._currentMonth.getFullYear();
    const month = this._currentMonth.getMonth();
    
    // First day of month
    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay();
    
    // Last day of month
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const selectedDate = this.getAttribute('value');

    // Empty cells for days before month starts
    for (let i = 0; i < startDay; i++) {
      const emptyDay = this.createElement('div', ['ux4g-calendar-day', 'ux4g-calendar-day-empty']);
      container.appendChild(emptyDay);
    }

    // Days of month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = selectedDate === dateStr;
      const isToday = this.isToday(new Date(year, month, day));

      const dayElement = this.createElement('button', [
        'ux4g-calendar-day',
        isSelected ? 'ux4g-calendar-day-selected' : '',
        isToday ? 'ux4g-calendar-day-today' : '',
      ].filter(Boolean));

      dayElement.setAttribute('type', 'button');
      dayElement.textContent = String(day);

      dayElement.addEventListener('click', () => {
        this.selectDate(dateStr);
      });

      container.appendChild(dayElement);
    }
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  private selectDate(dateStr: string): void {
    this.setAttribute('value', dateStr);
    this.dispatchCustomEvent('ux4g-calendar-select', { date: dateStr });
    this.render();
  }

  private previousMonth(): void {
    this._currentMonth.setMonth(this._currentMonth.getMonth() - 1);
    this.dispatchCustomEvent('ux4g-calendar-month-change', { 
      month: this._currentMonth.getMonth() + 1,
      year: this._currentMonth.getFullYear()
    });
    this.render();
  }

  private nextMonth(): void {
    this._currentMonth.setMonth(this._currentMonth.getMonth() + 1);
    this.dispatchCustomEvent('ux4g-calendar-month-change', { 
      month: this._currentMonth.getMonth() + 1,
      year: this._currentMonth.getFullYear()
    });
    this.render();
  }

  /**
   * Set value
   */
  set value(dateStr: string) {
    this.setAttribute('value', dateStr);
  }

  get value(): string {
    return this.getAttribute('value') || '';
  }
}

// Define the custom element
if (!customElements.get('ux4g-calendar')) {
  customElements.define('ux4g-calendar', UX4GCalendar);
}
