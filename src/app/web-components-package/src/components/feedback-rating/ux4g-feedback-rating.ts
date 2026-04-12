/**
 * UX4G Feedback Rating Widget Web Component
 * 
 * @element ux4g-feedback-rating
 * 
 * @attr {string} type - Rating type: emoji, thumbs, numeric, stars
 * @attr {string} question - Question/prompt text
 * @attr {boolean} allow-comment - Show comment textarea
 * @attr {string} value - Current rating value
 * 
 * @fires ux4g-feedback-submit - Fired when feedback is submitted
 * 
 * @example
 * ```html
 * <ux4g-feedback-rating 
 *   type="emoji" 
 *   question="How was your experience?"
 *   allow-comment>
 * </ux4g-feedback-rating>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GFeedbackRating extends UX4GElement {
  static get observedAttributes() {
    return ['type', 'question', 'allow-comment', 'value'];
  }

  private _comment = '';

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const type = this.getAttributeOrDefault('type', 'emoji');
    const question = this.getAttribute('question') || 'How would you rate your experience?';
    const allowComment = this.getBooleanAttribute('allow-comment');

    // Clear previous content
    this.root.innerHTML = '';

    // Create feedback container
    const container = this.createElement('div', ['ux4g-feedback-rating']);

    // Question
    const questionElement = this.createElement('div', ['ux4g-feedback-question']);
    questionElement.textContent = question;
    container.appendChild(questionElement);

    // Rating options
    const options = this.createElement('div', ['ux4g-feedback-options']);
    this.renderOptions(options, type);
    container.appendChild(options);

    // Comment section
    if (allowComment) {
      const commentSection = this.createElement('div', ['ux4g-feedback-comment']);
      
      const textarea = this.createElement('textarea', ['ux4g-textarea', 'ux4g-feedback-textarea']);
      textarea.placeholder = 'Tell us more... (optional)';
      textarea.rows = 3;
      textarea.addEventListener('input', (e) => {
        this._comment = (e.target as HTMLTextAreaElement).value;
      });
      commentSection.appendChild(textarea);
      
      container.appendChild(commentSection);
    }

    // Submit button
    const submitBtn = this.createElement('button', ['ux4g-button', 'ux4g-button-primary', 'ux4g-feedback-submit']);
    submitBtn.textContent = 'Submit Feedback';
    submitBtn.setAttribute('type', 'button');
    submitBtn.addEventListener('click', () => this.submit());
    container.appendChild(submitBtn);

    this.root.appendChild(container);
  }

  private renderOptions(container: HTMLElement, type: string): void {
    let options: Array<{ value: string; label: string; icon?: string }> = [];

    switch (type) {
      case 'emoji':
        options = [
          { value: '1', label: 'Very Unsatisfied', icon: '😞' },
          { value: '2', label: 'Unsatisfied', icon: '🙁' },
          { value: '3', label: 'Neutral', icon: '😐' },
          { value: '4', label: 'Satisfied', icon: '🙂' },
          { value: '5', label: 'Very Satisfied', icon: '😄' },
        ];
        break;
      case 'thumbs':
        options = [
          { value: 'down', label: 'Thumbs Down', icon: '👎' },
          { value: 'up', label: 'Thumbs Up', icon: '👍' },
        ];
        break;
      case 'numeric':
        for (let i = 1; i <= 10; i++) {
          options.push({ value: String(i), label: String(i) });
        }
        break;
      case 'stars':
        for (let i = 1; i <= 5; i++) {
          options.push({ value: String(i), label: `${i} Star${i > 1 ? 's' : ''}`, icon: '⭐' });
        }
        break;
    }

    options.forEach(option => {
      const button = this.createElement('button', [
        'ux4g-feedback-option',
        this.getAttribute('value') === option.value ? 'ux4g-feedback-option-selected' : '',
      ].filter(Boolean));

      button.setAttribute('type', 'button');
      button.setAttribute('aria-label', option.label);
      button.setAttribute('data-value', option.value);

      if (option.icon) {
        const icon = this.createElement('span', ['ux4g-feedback-icon']);
        icon.textContent = option.icon;
        button.appendChild(icon);
      } else {
        button.textContent = option.label;
      }

      button.addEventListener('click', () => {
        this.selectRating(option.value);
      });

      container.appendChild(button);
    });
  }

  private selectRating(value: string): void {
    this.setAttribute('value', value);
    this.render();
  }

  private submit(): void {
    const value = this.getAttribute('value');
    
    if (!value) {
      alert('Please select a rating');
      return;
    }

    this.dispatchCustomEvent('ux4g-feedback-submit', {
      rating: value,
      comment: this._comment,
    });

    // Show thank you message
    this.showThankYou();
  }

  private showThankYou(): void {
    this.root.innerHTML = '';
    
    const thankYou = this.createElement('div', ['ux4g-feedback-thank-you']);
    thankYou.innerHTML = `
      <div class="ux4g-feedback-success-icon">✓</div>
      <h3>Thank you for your feedback!</h3>
      <p>Your response has been recorded.</p>
    `;
    
    this.root.appendChild(thankYou);
  }

  /**
   * Reset feedback form
   */
  reset(): void {
    this.setAttribute('value', '');
    this._comment = '';
    this.render();
  }
}

// Define the custom element
if (!customElements.get('ux4g-feedback-rating')) {
  customElements.define('ux4g-feedback-rating', UX4GFeedbackRating);
}
