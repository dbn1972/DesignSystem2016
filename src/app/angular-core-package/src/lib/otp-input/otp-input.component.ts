import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef,
  forwardRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { classNames } from '../../utils/class-names';

/**
 * UX4G OTP Input Component
 *
 * One-time password input with individual character boxes.
 * Supports auto-focus, paste handling, and keyboard navigation.
 *
 * @example
 * <ux4g-otp-input
 *   [(ngModel)]="otpCode"
 *   [length]="6"
 * ></ux4g-otp-input>
 *
 * @example
 * <ux4g-otp-input
 *   [formControl]="otpControl"
 *   [length]="4"
 *   type="number"
 *   (complete)="handleComplete($event)"
 * ></ux4g-otp-input>
 */
@Component({
  selector: 'ux4g-otp-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="otpWrapperClasses" [attr.data-testid]="testId">
      @for (item of slots; track $index) {
        <input
          #inputElement
          type="text"
          [class]="inputClasses"
          [value]="getValue($index)"
          [disabled]="disabled"
          [attr.maxlength]="1"
          [attr.inputmode]="type === 'number' ? 'numeric' : 'text'"
          [attr.pattern]="type === 'number' ? '[0-9]' : null"
          [attr.aria-label]="'Digit ' + ($index + 1)"
          (input)="handleInput($event, $index)"
          (keydown)="handleKeyDown($event, $index)"
          (paste)="handlePaste($event, $index)"
          (focus)="handleFocus($index)"
        />
      }
    </div>
  `,
  styleUrls: ['./otp-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OtpInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OtpInputComponent implements ControlValueAccessor {
  @ViewChildren('inputElement') inputElements!: QueryList<ElementRef<HTMLInputElement>>;

  /**
   * Number of OTP digits
   * @default 6
   */
  @Input() length: number = 6;

  /**
   * Input type
   * @default 'number'
   */
  @Input() type: 'number' | 'text' = 'number';

  /**
   * Whether component is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Emitted when all digits are filled
   */
  @Output() complete = new EventEmitter<string>();

  /**
   * Current OTP value
   */
  value: string[] = [];

  /**
   * Change callback
   */
  onChange: any = () => {};

  /**
   * Touch callback
   */
  onTouched: any = () => {};

  /**
   * Get array of slots
   */
  get slots(): number[] {
    return Array(this.length).fill(0);
  }

  /**
   * Computed OTP wrapper classes
   */
  get otpWrapperClasses(): string {
    return classNames('ux4g-otp-input', this.className);
  }

  /**
   * Computed input classes
   */
  get inputClasses(): string {
    return classNames('ux4g-otp-input__digit');
  }

  /**
   * Get value at index
   */
  getValue(index: number): string {
    return this.value[index] || '';
  }

  /**
   * Handle input
   */
  handleInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    let inputValue = input.value;

    if (this.type === 'number') {
      inputValue = inputValue.replace(/[^0-9]/g, '');
    }

    if (inputValue.length > 0) {
      this.value[index] = inputValue[0];
      this.updateValue();
      this.focusNext(index);
    }
  }

  /**
   * Handle keydown
   */
  handleKeyDown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace') {
      event.preventDefault();
      if (this.value[index]) {
        this.value[index] = '';
        this.updateValue();
      } else if (index > 0) {
        this.focusPrevious(index);
        this.value[index - 1] = '';
        this.updateValue();
      }
    } else if (event.key === 'ArrowLeft' && index > 0) {
      this.focusPrevious(index);
    } else if (event.key === 'ArrowRight' && index < this.length - 1) {
      this.focusNext(index);
    } else if (event.key === 'Delete') {
      this.value[index] = '';
      this.updateValue();
    }
  }

  /**
   * Handle paste
   */
  handlePaste(event: ClipboardEvent, index: number): void {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text') || '';
    let cleanedData = pastedData;

    if (this.type === 'number') {
      cleanedData = pastedData.replace(/[^0-9]/g, '');
    }

    const chars = cleanedData.split('').slice(0, this.length - index);
    chars.forEach((char, i) => {
      this.value[index + i] = char;
    });

    this.updateValue();
    const lastFilledIndex = Math.min(index + chars.length - 1, this.length - 1);
    this.focusInput(lastFilledIndex + 1);
  }

  /**
   * Handle focus
   */
  handleFocus(index: number): void {
    const input = this.inputElements.toArray()[index]?.nativeElement;
    if (input) {
      input.select();
    }
    this.onTouched();
  }

  /**
   * Focus next input
   */
  focusNext(index: number): void {
    if (index < this.length - 1) {
      this.focusInput(index + 1);
    }
  }

  /**
   * Focus previous input
   */
  focusPrevious(index: number): void {
    if (index > 0) {
      this.focusInput(index - 1);
    }
  }

  /**
   * Focus input at index
   */
  focusInput(index: number): void {
    const input = this.inputElements.toArray()[index]?.nativeElement;
    if (input) {
      input.focus();
    }
  }

  /**
   * Update value
   */
  updateValue(): void {
    const otpValue = this.value.join('');
    this.onChange(otpValue);

    if (otpValue.length === this.length) {
      this.complete.emit(otpValue);
    }
  }

  /**
   * Write value (ControlValueAccessor)
   */
  writeValue(value: string): void {
    if (value) {
      this.value = value.split('').slice(0, this.length);
    } else {
      this.value = [];
    }
  }

  /**
   * Register change callback (ControlValueAccessor)
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Register touch callback (ControlValueAccessor)
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Set disabled state (ControlValueAccessor)
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
