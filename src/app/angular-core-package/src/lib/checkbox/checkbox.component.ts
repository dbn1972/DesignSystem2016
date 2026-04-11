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
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Checkbox Component
 *
 * A checkbox input component that integrates with Angular Forms.
 * Supports both template-driven and reactive forms.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-checkbox
 *   label="I agree to terms and conditions"
 *   [(ngModel)]="agreed"
 * ></ux4g-checkbox>
 *
 * @example
 * <ux4g-checkbox
 *   [formControl]="consentControl"
 *   label="I consent to data processing"
 *   helperText="Read our privacy policy for more information"
 * ></ux4g-checkbox>
 */
@Component({
  selector: 'ux4g-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      <div class="ux4g-checkbox__control">
        <input
          type="checkbox"
          [id]="inputId"
          [name]="name"
          [checked]="checked"
          [disabled]="disabled"
          [required]="required"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="ariaDescribedBy"
          [attr.aria-invalid]="error"
          [attr.data-testid]="testId"
          [class]="checkboxClasses"
          (change)="onCheckboxChange($event)"
          (blur)="onTouched()"
          (focus)="onFocus($event)"
        />

        @if (label) {
          <label [for]="inputId" [class]="labelClasses">
            {{ label }}
            @if (required) {
              <span class="ux4g-checkbox__required" aria-label="required">*</span>
            }
          </label>
        }
      </div>

      @if (helperText && !error) {
        <div class="ux4g-checkbox__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }

      @if (errorText && error) {
        <div class="ux4g-checkbox__error-text" [id]="errorId" role="alert">
          {{ errorText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./checkbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  /**
   * Checkbox size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Checkbox label
   */
  @Input() label?: string;

  /**
   * Helper text displayed below the checkbox
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
   * Whether the checkbox is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the checkbox is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the checkbox has an error
   * @default false
   */
  @Input() error: boolean = false;

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
  @Output() valueChange = new EventEmitter<boolean>();

  /**
   * Focus event emitter
   */
  @Output() focused = new EventEmitter<FocusEvent>();

  /**
   * Blur event emitter
   */
  @Output() blurred = new EventEmitter<FocusEvent>();

  /**
   * Internal checked state
   */
  checked: boolean = false;

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-checkbox-' + CheckboxComponent.nextId++;

  /**
   * ControlValueAccessor callbacks
   */
  private onChange: (value: boolean) => void = () => {};
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
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-checkbox-wrapper',
      this.disabled && 'ux4g-checkbox-wrapper--disabled',
      this.error && 'ux4g-checkbox-wrapper--error',
      this.className
    );
  }

  /**
   * Computed checkbox classes
   */
  get checkboxClasses(): string {
    return classNames(
      'ux4g-checkbox',
      'ux4g-checkbox--' + this.size,
      this.error && 'ux4g-checkbox--error',
      this.disabled && 'ux4g-checkbox--disabled'
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-checkbox__label',
      'ux4g-checkbox__label--' + this.size,
      this.disabled && 'ux4g-checkbox__label--disabled'
    );
  }

  /**
   * Handle checkbox change event
   */
  onCheckboxChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.onChange(this.checked);
    this.valueChange.emit(this.checked);
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
  writeValue(value: boolean): void {
    this.checked = !!value;
  }

  /**
   * ControlValueAccessor: Register onChange callback
   */
  registerOnChange(fn: (value: boolean) => void): void {
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
