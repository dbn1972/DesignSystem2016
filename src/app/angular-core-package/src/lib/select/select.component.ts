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

export interface SelectOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface SelectOptGroup {
  label: string;
  options: SelectOption[];
}

/**
 * UX4G Select Component
 *
 * A select dropdown component that integrates with Angular Forms.
 * Supports both flat options and option groups.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-select
 *   label="Select a state"
 *   placeholder="Choose..."
 *   [options]="stateOptions"
 *   [(ngModel)]="selectedState"
 * ></ux4g-select>
 *
 * @example
 * <ux4g-select
 *   [formControl]="countryControl"
 *   label="Country"
 *   [optionGroups]="countryGroups"
 *   required="true"
 * ></ux4g-select>
 */
@Component({
  selector: 'ux4g-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      @if (label) {
        <label [for]="inputId" [class]="labelClasses">
          {{ label }}
          @if (required) {
            <span class="ux4g-select__required" aria-label="required">*</span>
          }
        </label>
      }

      <div class="ux4g-select__control">
        <select
          [id]="inputId"
          [name]="name"
          [disabled]="disabled"
          [required]="required"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="getDescribedBy()"
          [attr.aria-invalid]="error"
          [attr.data-testid]="testId"
          [class]="selectClasses"
          (change)="onSelectChange($event)"
          (blur)="onTouched()"
          (focus)="onFocus($event)"
        >
          @if (placeholder) {
            <option value="" disabled [selected]="!value">{{ placeholder }}</option>
          }

          @if (options && options.length > 0) {
            @for (option of options; track option.value) {
              <option
                [value]="option.value"
                [disabled]="option.disabled || false"
                [selected]="value === option.value"
              >
                {{ option.label }}
              </option>
            }
          }

          @if (optionGroups && optionGroups.length > 0) {
            @for (group of optionGroups; track group.label) {
              <optgroup [label]="group.label">
                @for (option of group.options; track option.value) {
                  <option
                    [value]="option.value"
                    [disabled]="option.disabled || false"
                    [selected]="value === option.value"
                  >
                    {{ option.label }}
                  </option>
                }
              </optgroup>
            }
          }
        </select>

        <span class="ux4g-select__icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.427 6.427a.6.6 0 01.849 0L8 9.151l2.724-2.724a.6.6 0 11.849.849l-3.149 3.148a.6.6 0 01-.848 0L4.427 7.276a.6.6 0 010-.849z"/>
          </svg>
        </span>
      </div>

      @if (helperText && !error) {
        <div class="ux4g-select__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }

      @if (errorText && error) {
        <div class="ux4g-select__error-text" [id]="errorId" role="alert">
          {{ errorText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  /**
   * Select label
   */
  @Input() label?: string;

  /**
   * Placeholder text
   */
  @Input() placeholder?: string;

  /**
   * Helper text displayed below the select
   */
  @Input() helperText?: string;

  /**
   * Error text displayed when error is true
   */
  @Input() errorText?: string;

  /**
   * Flat array of options
   */
  @Input() options?: SelectOption[];

  /**
   * Grouped options
   */
  @Input() optionGroups?: SelectOptGroup[];

  /**
   * Select size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Input ID - auto-generated if not provided
   */
  @Input() id?: string;

  /**
   * Input name attribute
   */
  @Input() name?: string;

  /**
   * Whether the select is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the select is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the select has an error
   * @default false
   */
  @Input() error: boolean = false;

  /**
   * Whether the select should take full width
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
  @Output() valueChange = new EventEmitter<any>();

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
  value: any = '';

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-select-' + SelectComponent.nextId++;

  /**
   * ControlValueAccessor callbacks
   */
  private onChange: (value: any) => void = () => {};
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
      'ux4g-select-wrapper',
      this.fullWidth && 'ux4g-select-wrapper--full-width',
      this.error && 'ux4g-select-wrapper--error',
      this.disabled && 'ux4g-select-wrapper--disabled',
      this.className
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-select__label',
      this.disabled && 'ux4g-select__label--disabled'
    );
  }

  /**
   * Computed select classes
   */
  get selectClasses(): string {
    return classNames(
      'ux4g-select',
      'ux4g-select--' + this.size,
      this.error && 'ux4g-select--error',
      this.disabled && 'ux4g-select--disabled'
    );
  }

  /**
   * Handle select change event
   */
  onSelectChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.value = select.value;
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
  writeValue(value: any): void {
    this.value = value || '';
  }

  /**
   * ControlValueAccessor: Register onChange callback
   */
  registerOnChange(fn: (value: any) => void): void {
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
