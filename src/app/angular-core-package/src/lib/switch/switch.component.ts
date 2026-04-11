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
 * UX4G Switch Component
 *
 * A toggle switch component that integrates with Angular Forms.
 * Supports both template-driven and reactive forms.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-switch
 *   label="Enable notifications"
 *   [(ngModel)]="notificationsEnabled"
 * ></ux4g-switch>
 *
 * @example
 * <ux4g-switch
 *   [formControl]="darkModeControl"
 *   label="Dark mode"
 *   helperText="Toggle between light and dark themes"
 * ></ux4g-switch>
 */
@Component({
  selector: 'ux4g-switch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      <div class="ux4g-switch__control">
        <button
          type="button"
          role="switch"
          [id]="inputId"
          [attr.aria-checked]="checked"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="getDescribedBy()"
          [attr.data-testid]="testId"
          [disabled]="disabled"
          [class]="switchClasses"
          (click)="handleToggle()"
          (focus)="onFocus($event)"
          (blur)="onTouched()"
        >
          <span [class]="thumbClasses" aria-hidden="true"></span>
          @if (showLabels) {
            <span class="ux4g-switch__label-on" aria-hidden="true">{{ onLabel }}</span>
            <span class="ux4g-switch__label-off" aria-hidden="true">{{ offLabel }}</span>
          }
        </button>

        @if (label) {
          <label [for]="inputId" [class]="labelClasses">
            {{ label }}
            @if (required) {
              <span class="ux4g-switch__required" aria-label="required">*</span>
            }
          </label>
        }
      </div>

      @if (helperText && !error) {
        <div class="ux4g-switch__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }

      @if (errorText && error) {
        <div class="ux4g-switch__error-text" [id]="errorId" role="alert">
          {{ errorText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./switch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  /**
   * Switch label
   */
  @Input() label?: string;

  /**
   * Helper text displayed below the switch
   */
  @Input() helperText?: string;

  /**
   * Error text displayed when error is true
   */
  @Input() errorText?: string;

  /**
   * Switch size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Whether to show on/off labels inside switch
   * @default false
   */
  @Input() showLabels: boolean = false;

  /**
   * Label for "on" state
   * @default 'ON'
   */
  @Input() onLabel: string = 'ON';

  /**
   * Label for "off" state
   * @default 'OFF'
   */
  @Input() offLabel: string = 'OFF';

  /**
   * Input ID - auto-generated if not provided
   */
  @Input() id?: string;

  /**
   * Input name attribute
   */
  @Input() name?: string;

  /**
   * Whether the switch is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the switch is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the switch has an error
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
  private generatedId = 'ux4g-switch-' + SwitchComponent.nextId++;

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
      'ux4g-switch-wrapper',
      this.disabled && 'ux4g-switch-wrapper--disabled',
      this.error && 'ux4g-switch-wrapper--error',
      this.className
    );
  }

  /**
   * Computed switch classes
   */
  get switchClasses(): string {
    return classNames(
      'ux4g-switch',
      'ux4g-switch--' + this.size,
      this.checked && 'ux4g-switch--checked',
      this.disabled && 'ux4g-switch--disabled',
      this.error && 'ux4g-switch--error',
      this.showLabels && 'ux4g-switch--with-labels'
    );
  }

  /**
   * Computed thumb classes
   */
  get thumbClasses(): string {
    return classNames('ux4g-switch__thumb');
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-switch__label',
      this.disabled && 'ux4g-switch__label--disabled'
    );
  }

  /**
   * Handle toggle
   */
  handleToggle(): void {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;
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
