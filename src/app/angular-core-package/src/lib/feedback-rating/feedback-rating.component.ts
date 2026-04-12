import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @component FeedbackRating
 * @description User satisfaction rating widget
 *
 * @example
 * // Service Satisfaction Rating
 * <ux4g-feedback-rating
 *   type="stars"
 *   [maxRating]="5"
 *   [allowFeedback]="true"
 *   (ratingChange)="submitRating($event)"
 * ></ux4g-feedback-rating>
 *
 * @example
 * // Emoji-based Satisfaction
 * <ux4g-feedback-rating
 *   type="emoji"
 *   [showLabel]="true"
 *   (ratingChange)="submitSatisfaction($event)"
 * ></ux4g-feedback-rating>
 *
 * @example
 * // Government Portal Experience Rating
 * <ux4g-feedback-rating
 *   type="numeric"
 *   [maxRating]="10"
 *   [showLabel]="true"
 *   [allowFeedback]="true"
 *   (ratingSubmitted)="handleFeedback($event)"
 * ></ux4g-feedback-rating>
 */
@Component({
  selector: 'ux4g-feedback-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="ux4g-feedback-rating"
      [class.ux4g-feedback-rating--sm]="size === 'sm'"
      [class.ux4g-feedback-rating--md]="size === 'md'"
      [class.ux4g-feedback-rating--lg]="size === 'lg'"
      role="group"
      aria-label="Feedback rating"
    >
      @if (!submitted) {
        <div class="ux4g-feedback-rating__container">
          @if (showLabel) {
            <label class="ux4g-feedback-rating__label">
              {{ getLabelText() }}
            </label>
          }

          <div class="ux4g-feedback-rating__rating">
            @if (type === 'stars') {
              <div class="ux4g-feedback-rating__stars" role="radiogroup" aria-label="Star rating">
                @for (star of starArray; track $index; let i = $index) {
                  <button
                    class="ux4g-feedback-rating__star"
                    [class.ux4g-feedback-rating__star--active]="i < selectedRating"
                    [class.ux4g-feedback-rating__star--hover]="i < hoverRating"
                    (click)="selectRating(i + 1)"
                    (mouseenter)="hoverRating = i + 1"
                    (mouseleave)="hoverRating = 0"
                    [attr.aria-label]="(i + 1) + ' stars'"
                    role="radio"
                    [attr.aria-checked]="selectedRating === i + 1"
                  >
                    {{ i < (hoverRating || selectedRating) ? '★' : '☆' }}
                  </button>
                }
              </div>
            }

            @if (type === 'emoji') {
              <div class="ux4g-feedback-rating__emojis" role="radiogroup" aria-label="Emoji rating">
                @for (emoji of emojiArray; track $index; let i = $index) {
                  <button
                    class="ux4g-feedback-rating__emoji"
                    [class.ux4g-feedback-rating__emoji--active]="selectedRating === i + 1"
                    (click)="selectRating(i + 1)"
                    [attr.aria-label]="emoji.label"
                    role="radio"
                    [attr.aria-checked]="selectedRating === i + 1"
                  >
                    {{ emoji.icon }}
                  </button>
                }
              </div>
            }

            @if (type === 'numeric') {
              <div class="ux4g-feedback-rating__numeric" role="radiogroup" aria-label="Numeric rating">
                @for (num of numericArray; track $index; let i = $index) {
                  <button
                    class="ux4g-feedback-rating__number"
                    [class.ux4g-feedback-rating__number--active]="selectedRating === i + 1"
                    (click)="selectRating(i + 1)"
                    [attr.aria-label]="'Rating ' + (i + 1)"
                    role="radio"
                    [attr.aria-checked]="selectedRating === i + 1"
                  >
                    {{ i + 1 }}
                  </button>
                }
              </div>
            }
          </div>

          @if (allowFeedback && selectedRating > 0) {
            <div class="ux4g-feedback-rating__feedback">
              <textarea
                class="ux4g-feedback-rating__textarea"
                [(ngModel)]="feedbackText"
                placeholder="Share your feedback (optional)"
                rows="3"
                [attr.aria-label]="'Feedback text for ' + selectedRating + ' rating'"
              ></textarea>
              <button
                class="ux4g-feedback-rating__submit"
                (click)="submitFeedback()"
                [disabled]="selectedRating === 0"
              >
                Submit Feedback
              </button>
            </div>
          }

          @if (!allowFeedback && selectedRating > 0) {
            <button
              class="ux4g-feedback-rating__submit"
              (click)="submitFeedback()"
            >
              Submit Rating
            </button>
          }
        </div>
      }

      @if (submitted) {
        <div class="ux4g-feedback-rating__thank-you" role="status" aria-live="polite">
          <div class="ux4g-feedback-rating__thank-you-icon">✓</div>
          <h4>Thank you for your feedback!</h4>
          <p>Your rating helps us improve our services.</p>
        </div>
      }
    </div>
  `,
  styleUrls: ['./feedback-rating.component.css']
})
export class FeedbackRatingComponent {
  @Input() type: 'stars' | 'emoji' | 'numeric' = 'stars';
  @Input() maxRating: number = 5;
  @Input() value?: number;
  @Input() showLabel: boolean = true;
  @Input() allowFeedback: boolean = true;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() ratingChange = new EventEmitter<number>();
  @Output() ratingSubmitted = new EventEmitter<{ rating: number; feedback?: string }>();

  selectedRating: number = 0;
  hoverRating: number = 0;
  feedbackText: string = '';
  submitted: boolean = false;

  emojiArray = [
    { icon: '😞', label: 'Very dissatisfied' },
    { icon: '😐', label: 'Dissatisfied' },
    { icon: '😊', label: 'Neutral' },
    { icon: '😄', label: 'Satisfied' },
    { icon: '😍', label: 'Very satisfied' }
  ];

  get starArray(): number[] {
    return Array(this.maxRating).fill(0);
  }

  get numericArray(): number[] {
    return Array(this.maxRating).fill(0);
  }

  selectRating(rating: number): void {
    this.selectedRating = rating;
    this.ratingChange.emit(rating);
  }

  submitFeedback(): void {
    this.submitted = true;
    this.ratingSubmitted.emit({
      rating: this.selectedRating,
      feedback: this.feedbackText || undefined
    });
  }

  getLabelText(): string {
    if (this.type === 'stars') {
      return 'How would you rate your experience?';
    } else if (this.type === 'emoji') {
      return 'How satisfied are you with our service?';
    } else {
      return `Rate your experience (1-${this.maxRating})`;
    }
  }
}
