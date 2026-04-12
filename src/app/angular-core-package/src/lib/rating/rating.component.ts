import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Rating Component
 *
 * A star rating component that integrates with Angular Forms.
 * Supports read-only and interactive modes, with optional half-star support.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-rating [(ngModel)]="serviceRating" [max]="5"></ux4g-rating>
 *
 * @example
 * <ux4g-rating
 *   [value]="4.5"
 *   [readonly]="true"
 *   [allowHalf]="true"
 *   label="Service Quality Rating"
 * ></ux4g-rating>
 */
@Component({
  selector: 'ux4g-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="ratingClasses" [attr.data-testid]="testId">
      @if (label) {
        <label [id]="labelId" class="ux4g-rating__label">
          {{ label }}
          @if (required) {
            <span class="ux4g-rating__required" aria-label="required">*</span>
          }
        </label>
      }

      <div
        class="ux4g-rating__stars"
        role="slider"
        [attr.aria-label]="ariaLabel || label || 'Rating'"
        [attr.aria-valuemin]="0"
        [attr.aria-valuemax]="max"
        [attr.aria-valuenow]="value"
        [attr.aria-valuetext]="value + ' out of ' + max + ' stars'"
        [attr.aria-labelledby]="label ? labelId : null"
        [attr.aria-readonly]="readonly"
        [attr.aria-disabled]="disabled"
        [tabindex]="readonly || disabled ? -1 : 0"
        (keydown)="onKeyDown($event)"
      >
        @for (star of stars; track $index) {
          <button
            type="button"
            [class]="getStarClasses($index)"
            [disabled]="readonly || disabled"
            [attr.aria-label]="'Rate ' + ($index + 1) + ' stars'"
            (click)="onStarClick($index)"
            (mouseenter)="onStarHover($index)"
            (mouseleave)="onStarLeave()"
            (focus)="onStarFocus($index)"
          >
            <span class="ux4g-rating__star-icon" aria-hidden="true">
              {{ getStarIcon($index) }}
            </span>
          </button>
        }
      </div>

      @if (showValue) {
        <span class="ux4g-rating__value">
          {{ value }} / {{ max }}
        </span>
      }
    </div>
  `,
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
})
export class RatingComponent implements ControlValueAccessor {
  /**
   * Maximum rating value
   * @default 5
   */
  @Input() max: number = 5;

  /**
   * Current rating value
   * @default 0
   */
  @Input() value: number = 0;

  /**
   * Whether half stars are allowed
   * @default false
   */
  @Input() allowHalf: boolean = false;

  /**
   * Whether the rating is read-only
   * @default false
   */
  @Input() readonly: boolean = false;

  /**
   * Whether the rating is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the rating is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether to show the numeric value
   * @default false
   */
  @Input() showValue: boolean = false;

  /**
   * Label for the rating
   */
  @Input() label?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Value change event emitter
   */
  @Output() valueChange = new EventEmitter<number>();

  /**
   * Hover value for preview
   */
  hoverValue: number | null = null;

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-rating-' + RatingComponent.nextId++;

  /**
   * ControlValueAccessor callbacks
   */
  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  /**
   * Get label ID
   */
  get labelId(): string {
    return this.generatedId + '-label';
  }

  /**
   * Get array of stars
   */
  get stars(): number[] {
    return Array(this.max).fill(0);
  }

  /**
   * Computed rating classes
   */
  get ratingClasses(): string {
    return classNames(
      'ux4g-rating',
      this.readonly && 'ux4g-rating--readonly',
      this.disabled && 'ux4g-rating--disabled',
      this.className
    );
  }

  /**
   * Get star classes for specific index
   */
  getStarClasses(index: number): string {
    const displayValue = this.hoverValue !== null ? this.hoverValue : this.value;
    const isFilled = index < Math.floor(displayValue);
    const isHalf = this.allowHalf && index < displayValue && index >= Math.floor(displayValue);

    return classNames(
      'ux4g-rating__star',
      isFilled && 'ux4g-rating__star--filled',
      isHalf && 'ux4g-rating__star--half',
      !this.readonly && !this.disabled && 'ux4g-rating__star--interactive'
    );
  }

  /**
   * Get star icon (filled, half, or empty)
   */
  getStarIcon(index: number): string {
    const displayValue = this.hoverValue !== null ? this.hoverValue : this.value;

    if (index < Math.floor(displayValue)) {
      return '★'; // Filled star
    } else if (this.allowHalf && index < displayValue && index >= Math.floor(displayValue)) {
      return '⯨'; // Half star
    } else {
      return '☆'; // Empty star
    }
  }

  /**
   * Handle star click
   */
  onStarClick(index: number): void {
    if (this.readonly || this.disabled) return;

    const newValue = index + 1;
    this.setValue(newValue);
  }

  /**
   * Handle star hover
   */
  onStarHover(index: number): void {
    if (this.readonly || this.disabled) return;
    this.hoverValue = index + 1;
  }

  /**
   * Handle star leave
   */
  onStarLeave(): void {
    this.hoverValue = null;
  }

  /**
   * Handle star focus
   */
  onStarFocus(index: number): void {
    if (this.readonly || this.disabled) return;
    this.hoverValue = index + 1;
  }

  /**
   * Handle keyboard navigation
   */
  onKeyDown(event: KeyboardEvent): void {
    if (this.readonly || this.disabled) return;

    let newValue = this.value;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        newValue = Math.min(this.value + 1, this.max);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        newValue = Math.max(this.value - 1, 0);
        break;
      case 'Home':
        event.preventDefault();
        newValue = 0;
        break;
      case 'End':
        event.preventDefault();
        newValue = this.max;
        break;
      default:
        // Check for number keys (1-5, etc.)
        const num = parseInt(event.key, 10);
        if (!isNaN(num) && num >= 0 && num <= this.max) {
          event.preventDefault();
          newValue = num;
        }
        break;
    }

    if (newValue !== this.value) {
      this.setValue(newValue);
    }
  }

  /**
   * Set rating value
   */
  private setValue(newValue: number): void {
    this.value = newValue;
    this.onChange(this.value);
    this.onTouched();
    this.valueChange.emit(this.value);
  }

  /**
   * ControlValueAccessor: Write value
   */
  writeValue(value: number): void {
    this.value = value || 0;
  }

  /**
   * ControlValueAccessor: Register onChange callback
   */
  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  /**
   * ControlValueAccessor: Register onTouched callback
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * ControlValueAccessor: Set disabled state
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
