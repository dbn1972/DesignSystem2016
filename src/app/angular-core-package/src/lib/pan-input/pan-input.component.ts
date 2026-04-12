import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  forwardRef,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * UX4G PAN Input
 *
 * Specialized input component for PAN (Permanent Account Number) with automatic
 * formatting, validation, and uppercase conversion. Format: ABCDE1234F
 *
 * @example
 * // Basic PAN input
 * <ux4g-pan-input
 *   [(ngModel)]="panNumber"
 *   label="PAN Number"
 *   required="true"
 * ></ux4g-pan-input>
 *
 * @example
 * // PAN input with helper text
 * <ux4g-pan-input
 *   [(ngModel)]="panNumber"
 *   label="Permanent Account Number"
 *   helperText="Enter your 10-character PAN number"
 *   placeholder="ABCDE1234F"
 * ></ux4g-pan-input>
 */
@Component({
  selector: 'ux4g-pan-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="ux4g-pan-input">
      <label
        *ngIf="label"
        class="ux4g-pan-input__label"
        [class.ux4g-pan-input__label--required]="required"
      >
        {{ label }}
        <span *ngIf="required" class="ux4g-pan-input__required" aria-label="required">*</span>
      </label>

      <div class="ux4g-pan-input__wrapper">
        <input
          type="text"
          class="ux4g-pan-input__input"
          [class.ux4g-pan-input__input--error]="error || (internalError && touched)"
          [class.ux4g-pan-input__input--disabled]="disabled"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [value]="displayValue"
          [attr.aria-label]="label"
          [attr.aria-invalid]="error || (internalError && touched)"
          [attr.aria-describedby]="helperText || errorText ? 'pan-helper' : null"
          [attr.aria-required]="required"
          maxlength="10"
          (input)="onInput($event)"
          (blur)="onBlur()"
          (paste)="onPaste($event)"
        />

        <div class="ux4g-pan-input__format-guide" *ngIf="showFormatGuide && !value">
          <span class="ux4g-pan-input__format-segment ux4g-pan-input__format-segment--letter">AAAAA</span>
          <span class="ux4g-pan-input__format-segment ux4g-pan-input__format-segment--number">9999</span>
          <span class="ux4g-pan-input__format-segment ux4g-pan-input__format-segment--letter">A</span>
        </div>
      </div>

      <div
        *ngIf="helperText || (errorText && (error || (internalError && touched)))"
        id="pan-helper"
        class="ux4g-pan-input__helper"
        [class.ux4g-pan-input__helper--error]="error || (internalError && touched)"
      >
        <span *ngIf="error || (internalError && touched)">
          {{ errorText || 'Please enter a valid PAN number (e.g., ABCDE1234F)' }}
        </span>
        <span *ngIf="!(error || (internalError && touched)) && helperText">
          {{ helperText }}
        </span>
      </div>
    </div>
  `,
  styleUrls: ['./pan-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PanInputComponent),
    multi: true
  }]
})
export class PanInputComponent implements ControlValueAccessor {
  @Input() label: string = 'PAN Number';
  @Input() placeholder: string = 'ABCDE1234F';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;
  @Input() errorText: string = '';
  @Input() helperText: string = '';
  @Input() autoCapitalize: boolean = true;
  @Input() showFormatGuide: boolean = true;

  @Output() valueChange = new EventEmitter<string>();

  value: string = '';
  displayValue: string = '';
  touched: boolean = false;
  internalError: boolean = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  writeValue(value: string): void {
    this.value = value || '';
    this.updateDisplayValue();
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let rawValue = input.value;

    // Auto-capitalize if enabled
    if (this.autoCapitalize) {
      rawValue = rawValue.toUpperCase();
    }

    // Format PAN: remove invalid characters
    const formatted = this.formatPAN(rawValue);

    // Store the value
    this.value = formatted;

    // Update display
    this.updateDisplayValue();
    this.validate();

    // Emit changes
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.cdr.markForCheck();
  }

  onBlur(): void {
    this.touched = true;
    this.validate();
    this.onTouched();
    this.cdr.markForCheck();
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pastedText = event.clipboardData?.getData('text') || '';

    // Format the pasted text
    const formatted = this.formatPAN(pastedText);

    this.value = formatted;
    this.updateDisplayValue();
    this.validate();

    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.cdr.markForCheck();
  }

  private updateDisplayValue(): void {
    this.displayValue = this.value;
  }

  private formatPAN(value: string): string {
    // Convert to uppercase
    let formatted = value.toUpperCase();

    // Remove all invalid characters
    formatted = formatted.replace(/[^A-Z0-9]/g, '');

    // Apply PAN format validation as we type
    if (formatted.length > 10) {
      formatted = formatted.slice(0, 10);
    }

    // Enforce format: AAAAA9999A
    let result = '';
    for (let i = 0; i < formatted.length; i++) {
      const char = formatted[i];

      if (i < 5) {
        // First 5 characters must be letters
        if (/[A-Z]/.test(char)) {
          result += char;
        }
      } else if (i < 9) {
        // Next 4 characters must be digits
        if (/[0-9]/.test(char)) {
          result += char;
        }
      } else {
        // Last character must be a letter
        if (/[A-Z]/.test(char)) {
          result += char;
        }
      }
    }

    return result;
  }

  private validate(): void {
    if (this.required && this.value.length === 0) {
      this.internalError = true;
      return;
    }

    if (this.value.length > 0 && !this.validatePAN(this.value)) {
      this.internalError = true;
      return;
    }

    this.internalError = false;
  }

  private validatePAN(value: string): boolean {
    // PAN format: 5 letters + 4 digits + 1 letter
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(value.toUpperCase());
  }
}
