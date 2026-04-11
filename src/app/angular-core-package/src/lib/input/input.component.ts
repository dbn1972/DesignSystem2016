import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  forwardRef,
  HostBinding,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentSize, InputType } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Input Component
 *
 * A form input component that integrates with Angular Forms.
 * Supports both template-driven and reactive forms.
 *
 * @example
 * <ux4g-input
 *   type="email"
 *   placeholder="Enter your email"
 *   [(ngModel)]="email"
 * ></ux4g-input>
 *
 * @example
 * <ux4g-input
 *   [formControl]="nameControl"
 *   [error]="nameControl.invalid && nameControl.touched"
 * ></ux4g-input>
 */
@Component({
  selector: 'ux4g-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      @if (iconBefore) {
        <span class="ux4g-input__icon ux4g-input__icon--before" aria-hidden="true">
          <ng-content select="[slot='icon-before']"></ng-content>
        </span>
      }

      <input
        [type]="type"
        [id]="id"
        [name]="name"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [readonly]="readonly"
        [required]="required"
        [attr.aria-label]="ariaLabel"
        [attr.aria-describedby]="ariaDescribedBy"
        [attr.aria-invalid]="error"
        [attr.data-testid]="testId"
        [value]="value"
        [class]="inputClasses"
        (input)="onInput($event)"
        (blur)="onTouched()"
        (focus)="onFocus($event)"
      />

      @if (iconAfter) {
        <span class="ux4g-input__icon ux4g-input__icon--after" aria-hidden="true">
          <ng-content select="[slot='icon-after']"></ng-content>
        </span>
      }
    </div>
  `,
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  /**
   * Input type
   * @default 'text'
   */
  @Input() type: InputType = 'text';

  /**
   * Input size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Input ID
   */
  @Input() id?: string;

  /**
   * Input name attribute
   */
  @Input() name?: string;

  /**
   * Placeholder text
   */
  @Input() placeholder?: string;

  /**
   * Whether the input is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the input is read-only
   * @default false
   */
  @Input() readonly: boolean = false;

  /**
   * Whether the input is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the input has an error
   * @default false
   */
  @Input() error: boolean = false;

  /**
   * Whether the input has an icon before
   * @default false
   */
  @Input() iconBefore: boolean = false;

  /**
   * Whether the input has an icon after
   * @default false
   */
  @Input() iconAfter: boolean = false;

  /**
   * Whether the input should take full width
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
   * Internal value
   */
  value: string = '';

  /**
   * ControlValueAccessor callbacks
   */
  private onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-input-wrapper',
      this.iconBefore && 'ux4g-input-wrapper--with-icon-before',
      this.iconAfter && 'ux4g-input-wrapper--with-icon-after',
      this.fullWidth && 'ux4g-input-wrapper--full-width'
    );
  }

  /**
   * Computed input classes
   */
  get inputClasses(): string {
    return classNames(
      'ux4g-input',
      `ux4g-input--${this.size}`,
      this.error && 'ux4g-input--error',
      this.disabled && 'ux4g-input--disabled',
      this.readonly && 'ux4g-input--readonly',
      this.className
    );
  }

  /**
   * Handle input event
   */
  onInput(event: Event): void {
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
