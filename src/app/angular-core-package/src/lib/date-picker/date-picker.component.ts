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
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Date Picker Component
 *
 * A date selection input based on HTML5 date input.
 * Integrates with Angular Forms and supports validation.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-date-picker
 *   label="Birth Date"
 *   [(ngModel)]="birthDate"
 *   [required]="true"
 * ></ux4g-date-picker>
 *
 * @example
 * <ux4g-date-picker
 *   label="Appointment Date"
 *   [formControl]="appointmentControl"
 *   [min]="today"
 *   [max]="maxDate"
 *   helperText="Select a date within the next 30 days"
 * ></ux4g-date-picker>
 */
@Component({
  selector: 'ux4g-date-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div [class]="wrapperClasses">
      @if (label) {
        <label [for]="inputId" [class]="labelClasses">
          {{ label }}
          @if (required) {
            <span class="ux4g-date-picker__required" aria-label="required">*</span>
          }
        </label>
      }

      <div class="ux4g-date-picker__input-wrapper">
        <input
          type="date"
          [id]="inputId"
          [name]="name"
          [value]="value"
          [disabled]="disabled"
          [required]="required"
          [readonly]="readonly"
          [min]="min"
          [max]="max"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="getAriaDescribedBy()"
          [attr.aria-invalid]="error"
          [attr.data-testid]="testId"
          [class]="inputClasses"
          (input)="onInputChange($event)"
          (blur)="onTouched()"
          (focus)="onFocus($event)"
        />
      </div>

      @if (helperText && !error) {
        <div class="ux4g-date-picker__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }

      @if (errorText && error) {
        <div class="ux4g-date-picker__error-text" [id]="errorId" role="alert">
          {{ errorText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./date-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent implements ControlValueAccessor {
  /**
   * Date picker size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Date picker label
   */
  @Input() label?: string;

  /**
   * Helper text displayed below the input
   */
  @Input() helperText?: string;

  /**
   * Error text displayed when error is true
   */
  @Input() errorText?: string;

  /**
   * Input ID - auto-generated if not provided
   */
  @Input() id?: string;

  /**
   * Input name attribute
   */
  @Input() name?: string;

  /**
   * Minimum allowed date (ISO 8601 format: YYYY-MM-DD)
   */
  @Input() min?: string;

  /**
   * Maximum allowed date (ISO 8601 format: YYYY-MM-DD)
   */
  @Input() max?: string;

  /**
   * Whether the input is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the input is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the input is read-only
   * @default false
   */
  @Input() readonly: boolean = false;

  /**
   * Whether the input has an error
   * @default false
   */
  @Input() error: boolean = false;

  /**
   * Placeholder text
   */
  @Input() placeholder?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * ARIA described by reference
   */
  @Input() ariaDescribedBy?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Value change event emitter
   */
  @Output() valueChange = new EventEmitter<string>();

  /**
   * Focus event emitter
   */
  @Output() focused = new EventEmitter<FocusEvent>();

  /**
   * Blur event emitter
   */
  @Output() blurred = new EventEmitter<FocusEvent>();

  /**
   * Internal value (ISO 8601 format)
   */
  value: string = '';

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-date-picker-' + DatePickerComponent.nextId++;

  /**
   * ControlValueAccessor callbacks
   */
  private onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  /**
   * Get input ID
   */
  get inputId(): string {
    return this.id || this.generatedId;
  }

  /**
   * Get helper text ID
   */
  get helperId(): string {
    return this.inputId + '-helper';
  }

  /**
   * Get error text ID
   */
  get errorId(): string {
    return this.inputId + '-error';
  }

  /**
   * Get aria-describedby value
   */
  getAriaDescribedBy(): string {
    const ids: string[] = [];

    if (this.ariaDescribedBy) {
      ids.push(this.ariaDescribedBy);
    }

    if (this.helperText && !this.error) {
      ids.push(this.helperId);
    }

    if (this.errorText && this.error) {
      ids.push(this.errorId);
    }

    return ids.length > 0 ? ids.join(' ') : '';
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-date-picker-wrapper',
      this.disabled && 'ux4g-date-picker-wrapper--disabled',
      this.error && 'ux4g-date-picker-wrapper--error',
      this.className
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-date-picker__label',
      `ux4g-date-picker__label--${this.size}`,
      this.disabled && 'ux4g-date-picker__label--disabled',
      this.required && 'ux4g-date-picker__label--required'
    );
  }

  /**
   * Computed input classes
   */
  get inputClasses(): string {
    return classNames(
      'ux4g-date-picker',
      `ux4g-date-picker--${this.size}`,
      this.error && 'ux4g-date-picker--error',
      this.disabled && 'ux4g-date-picker--disabled',
      this.readonly && 'ux4g-date-picker--readonly'
    );
  }

  /**
   * Handle input change event
   */
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  /**
   * Handle focus event
   */
  onFocus(event: FocusEvent): void {
    this.focused.emit(event);
  }

  /**
   * ControlValueAccessor: Write value
   */
  writeValue(value: string): void {
    this.value = value || '';
  }

  /**
   * ControlValueAccessor: Register onChange callback
   */
  registerOnChange(fn: (value: string) => void): void {
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
