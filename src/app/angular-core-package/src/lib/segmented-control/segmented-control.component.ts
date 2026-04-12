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

export interface SegmentedOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * UX4G Segmented Control
 *
 * iOS-style segmented picker for exclusive selections. Commonly used in government
 * forms for binary or multiple choice selections.
 *
 * @example
 * // Gender selection
 * <ux4g-segmented-control
 *   [(ngModel)]="gender"
 *   [options]="[
 *     { value: 'male', label: 'Male' },
 *     { value: 'female', label: 'Female' },
 *     { value: 'other', label: 'Other' }
 *   ]"
 *   aria-label="Select gender"
 * ></ux4g-segmented-control>
 *
 * @example
 * // Document type selection
 * <ux4g-segmented-control
 *   [(ngModel)]="documentType"
 *   [options]="[
 *     { value: 'aadhaar', label: 'Aadhaar' },
 *     { value: 'pan', label: 'PAN Card' },
 *     { value: 'passport', label: 'Passport' }
 *   ]"
 *   size="lg"
 *   fullWidth="true"
 * ></ux4g-segmented-control>
 */
@Component({
  selector: 'ux4g-segmented-control',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="ux4g-segmented-control"
      [class.ux4g-segmented-control--sm]="size === 'sm'"
      [class.ux4g-segmented-control--md]="size === 'md'"
      [class.ux4g-segmented-control--lg]="size === 'lg'"
      [class.ux4g-segmented-control--full-width]="fullWidth"
      [class.ux4g-segmented-control--disabled]="disabled"
      role="radiogroup"
      [attr.aria-label]="ariaLabel"
    >
      <div class="ux4g-segmented-control__track">
        <div
          class="ux4g-segmented-control__indicator"
          [style.left]="getIndicatorStyle().left"
          [style.width]="getIndicatorStyle().width"
        ></div>

        <button
          *ngFor="let option of options; let i = index"
          type="button"
          class="ux4g-segmented-control__option"
          [class.ux4g-segmented-control__option--selected]="isSelected(option)"
          [class.ux4g-segmented-control__option--disabled]="option.disabled"
          [disabled]="disabled || option.disabled"
          [attr.aria-checked]="isSelected(option)"
          [attr.aria-label]="option.label"
          role="radio"
          [tabindex]="isSelected(option) ? 0 : -1"
          (click)="selectOption(option)"
          (keydown)="handleKeyDown($event, i)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./segmented-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SegmentedControlComponent),
    multi: true
  }]
})
export class SegmentedControlComponent implements ControlValueAccessor {
  @Input() options: SegmentedOption[] = [];
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Input() name: string = '';
  @Input({ alias: 'aria-label' }) ariaLabel: string = 'Segmented control';

  @Output() valueChange = new EventEmitter<string>();

  value: string = '';

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  writeValue(value: string): void {
    this.value = value;
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

  selectOption(option: SegmentedOption): void {
    if (this.disabled || option.disabled) {
      return;
    }

    this.value = option.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.onTouched();
    this.cdr.markForCheck();
  }

  isSelected(option: SegmentedOption): boolean {
    return this.value === option.value;
  }

  handleKeyDown(event: KeyboardEvent, currentIndex: number): void {
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = this.options.length - 1;
        }
        break;

      case 'ArrowRight':
        event.preventDefault();
        newIndex = currentIndex + 1;
        if (newIndex >= this.options.length) {
          newIndex = 0;
        }
        break;

      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;

      case 'End':
        event.preventDefault();
        newIndex = this.options.length - 1;
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        this.selectOption(this.options[currentIndex]);
        return;

      default:
        return;
    }

    // Find next non-disabled option
    const enabledOptions = this.options.filter(opt => !opt.disabled);
    if (enabledOptions.length === 0) {
      return;
    }

    let attempts = 0;
    while (this.options[newIndex].disabled && attempts < this.options.length) {
      if (event.key === 'ArrowLeft' || event.key === 'End') {
        newIndex--;
        if (newIndex < 0) {
          newIndex = this.options.length - 1;
        }
      } else {
        newIndex++;
        if (newIndex >= this.options.length) {
          newIndex = 0;
        }
      }
      attempts++;
    }

    // Focus the button
    const button = document.querySelectorAll('.ux4g-segmented-control__option')[newIndex] as HTMLElement;
    if (button) {
      button.focus();
    }
  }

  getSelectedIndex(): number {
    return this.options.findIndex(opt => opt.value === this.value);
  }

  getIndicatorStyle(): { [key: string]: string } {
    const selectedIndex = this.getSelectedIndex();
    if (selectedIndex === -1) {
      return { display: 'none' };
    }

    const width = 100 / this.options.length;
    return {
      left: `${selectedIndex * width}%`,
      width: `${width}%`
    };
  }
}
