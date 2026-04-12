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
 * UX4G Aadhaar Input
 *
 * Specialized input component for 12-digit Aadhaar numbers with automatic formatting
 * and validation. Supports masking for privacy and optional Verhoeff checksum validation.
 *
 * @example
 * // Basic Aadhaar input
 * <ux4g-aadhaar-input
 *   [(ngModel)]="aadhaarNumber"
 *   label="Aadhaar Number"
 *   required="true"
 * ></ux4g-aadhaar-input>
 *
 * @example
 * // Masked Aadhaar input (shows only last 4 digits)
 * <ux4g-aadhaar-input
 *   [(ngModel)]="aadhaarNumber"
 *   label="Aadhaar Number"
 *   [mask]="true"
 *   helperText="Enter your 12-digit Aadhaar number"
 * ></ux4g-aadhaar-input>
 */
@Component({
  selector: 'ux4g-aadhaar-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="ux4g-aadhaar-input">
      <label
        *ngIf="label"
        class="ux4g-aadhaar-input__label"
        [class.ux4g-aadhaar-input__label--required]="required"
      >
        {{ label }}
        <span *ngIf="required" class="ux4g-aadhaar-input__required" aria-label="required">*</span>
      </label>

      <div class="ux4g-aadhaar-input__wrapper">
        <input
          type="text"
          class="ux4g-aadhaar-input__input"
          [class.ux4g-aadhaar-input__input--error]="error || (internalError && touched)"
          [class.ux4g-aadhaar-input__input--disabled]="disabled"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [value]="displayValue"
          [attr.aria-label]="label"
          [attr.aria-invalid]="error || (internalError && touched)"
          [attr.aria-describedby]="helperText || errorText ? 'aadhaar-helper' : null"
          [attr.aria-required]="required"
          inputmode="numeric"
          maxlength="14"
          (input)="onInput($event)"
          (blur)="onBlur()"
          (paste)="onPaste($event)"
        />
      </div>

      <div
        *ngIf="helperText || (errorText && (error || (internalError && touched)))"
        id="aadhaar-helper"
        class="ux4g-aadhaar-input__helper"
        [class.ux4g-aadhaar-input__helper--error]="error || (internalError && touched)"
      >
        <span *ngIf="error || (internalError && touched)">
          {{ errorText || 'Please enter a valid 12-digit Aadhaar number' }}
        </span>
        <span *ngIf="!(error || (internalError && touched)) && helperText">
          {{ helperText }}
        </span>
      </div>
    </div>
  `,
  styleUrls: ['./aadhaar-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AadhaarInputComponent),
    multi: true
  }]
})
export class AadhaarInputComponent implements ControlValueAccessor {
  @Input() label: string = 'Aadhaar Number';
  @Input() placeholder: string = '#### #### ####';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;
  @Input() errorText: string = '';
  @Input() helperText: string = '';
  @Input() mask: boolean = false;

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
    const rawValue = input.value;

    // Remove all non-digits
    const cleaned = rawValue.replace(/\D/g, '');

    // Limit to 12 digits
    const limited = cleaned.slice(0, 12);

    // Store the raw value
    this.value = limited;

    // Update display and validate
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

    // Remove all non-digits from pasted text
    const cleaned = pastedText.replace(/\D/g, '');
    const limited = cleaned.slice(0, 12);

    this.value = limited;
    this.updateDisplayValue();
    this.validate();

    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.cdr.markForCheck();
  }

  private updateDisplayValue(): void {
    if (this.mask && this.value.length === 12) {
      // Show only last 4 digits
      this.displayValue = 'XXXX XXXX ' + this.value.slice(-4);
    } else {
      this.displayValue = this.formatAadhaar(this.value);
    }
  }

  private formatAadhaar(value: string): string {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/.{1,4}/g);
    return match ? match.join(' ') : cleaned;
  }

  private validate(): void {
    if (this.required && this.value.length === 0) {
      this.internalError = true;
      return;
    }

    if (this.value.length > 0 && this.value.length !== 12) {
      this.internalError = true;
      return;
    }

    this.internalError = false;
  }

  private validateAadhaar(value: string): boolean {
    const cleaned = value.replace(/\s/g, '');
    return /^\d{12}$/.test(cleaned);
  }

  /**
   * Optional Verhoeff checksum validation for Aadhaar numbers
   * This is a more advanced validation that can be enabled if needed
   */
  private verhoeffValidate(num: string): boolean {
    const d = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
      [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
      [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
      [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
      [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
      [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
      [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
      [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    ];

    const p = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
      [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
      [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
      [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
      [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
      [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
      [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
    ];

    let c = 0;
    const myArray = num.split('').reverse();

    for (let i = 0; i < myArray.length; i++) {
      c = d[c][p[(i % 8)][parseInt(myArray[i])]];
    }

    return c === 0;
  }
}
