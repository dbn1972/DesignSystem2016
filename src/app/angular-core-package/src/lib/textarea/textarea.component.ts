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
 * UX4G Textarea Component
 *
 * A multiline text input component that integrates with Angular Forms.
 * Supports both template-driven and reactive forms.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-textarea
 *   label="Comments"
 *   placeholder="Enter your comments..."
 *   [(ngModel)]="comments"
 *   [rows]="4"
 * ></ux4g-textarea>
 *
 * @example
 * <ux4g-textarea
 *   [formControl]="descriptionControl"
 *   label="Description"
 *   [maxLength]="500"
 *   [showCharCount]="true"
 * ></ux4g-textarea>
 */
@Component({
  selector: 'ux4g-textarea',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      @if (label) {
        <label [for]="inputId" [class]="labelClasses">
          {{ label }}
          @if (required) {
            <span class="ux4g-textarea__required" aria-label="required">*</span>
          }
        </label>
      }

      <textarea
        [id]="inputId"
        [name]="name"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [readonly]="readonly"
        [required]="required"
        [rows]="rows"
        [maxlength]="maxLength"
        [attr.aria-label]="ariaLabel"
        [attr.aria-describedby]="getDescribedBy()"
        [attr.aria-invalid]="error"
        [attr.data-testid]="testId"
        [value]="value"
        [class]="textareaClasses"
        (input)="onInput($event)"
        (blur)="onTouched()"
        (focus)="onFocus($event)"
      ></textarea>

      @if (showCharCount && maxLength) {
        <div class="ux4g-textarea__char-count">
          {{ charCount }} / {{ maxLength }}
        </div>
      }

      @if (helperText && !error) {
        <div class="ux4g-textarea__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }

      @if (errorText && error) {
        <div class="ux4g-textarea__error-text" [id]="errorId" role="alert">
          {{ errorText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./textarea.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  /**
   * Textarea label
   */
  @Input() label?: string;

  /**
   * Placeholder text
   */
  @Input() placeholder?: string;

  /**
   * Helper text displayed below the textarea
   */
  @Input() helperText?: string;

  /**
   * Error text displayed when error is true
   */
  @Input() errorText?: string;

  /**
   * Textarea size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Number of visible text rows
   * @default 3
   */
  @Input() rows: number = 3;

  /**
   * Maximum character length
   */
  @Input() maxLength?: number;

  /**
   * Show character count
   * @default false
   */
  @Input() showCharCount: boolean = false;

  /**
   * Input ID - auto-generated if not provided
   */
  @Input() id?: string;

  /**
   * Input name attribute
   */
  @Input() name?: string;

  /**
   * Whether the textarea is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the textarea is read-only
   * @default false
   */
  @Input() readonly: boolean = false;

  /**
   * Whether the textarea is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the textarea has an error
   * @default false
   */
  @Input() error: boolean = false;

  /**
   * Whether the textarea should take full width
   * @default true
   */
  @Input() fullWidth: boolean = true;

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
   * Internal value
   */
  value: string = '';

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-textarea-' + TextareaComponent.nextId++;

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
   * Get character count
   */
  get charCount(): number {
    return this.value ? this.value.length : 0;
  }

  /**
   * Get aria-describedby value
   */
  getDescribedBy(): string | null {
    const parts = [];
    if (this.helperText && !this.error) {
      parts.push(this.helperId);
    }
    if (this.errorText && this.error) {
      parts.push(this.errorId);
    }
    return parts.length > 0 ? parts.join(' ') : null;
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-textarea-wrapper',
      this.fullWidth && 'ux4g-textarea-wrapper--full-width',
      this.error && 'ux4g-textarea-wrapper--error',
      this.disabled && 'ux4g-textarea-wrapper--disabled',
      this.className
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-textarea__label',
      this.disabled && 'ux4g-textarea__label--disabled'
    );
  }

  /**
   * Computed textarea classes
   */
  get textareaClasses(): string {
    return classNames(
      'ux4g-textarea',
      'ux4g-textarea--' + this.size,
      this.error && 'ux4g-textarea--error',
      this.disabled && 'ux4g-textarea--disabled',
      this.readonly && 'ux4g-textarea--readonly'
    );
  }

  /**
   * Handle input event
   */
  onInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.value = textarea.value;
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
