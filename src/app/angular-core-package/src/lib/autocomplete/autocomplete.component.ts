import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  forwardRef,
  HostListener,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * Autocomplete option interface
 */
export interface AutocompleteOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * UX4G Autocomplete Component
 *
 * An autocomplete input with filtered dropdown suggestions.
 * Supports keyboard navigation and async data loading.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-autocomplete
 *   label="Select State"
 *   [(ngModel)]="selectedState"
 *   [options]="stateOptions"
 *   placeholder="Start typing..."
 * ></ux4g-autocomplete>
 *
 * @example
 * <ux4g-autocomplete
 *   label="Search Agency"
 *   [formControl]="agencyControl"
 *   [options]="agencies"
 *   (searchChange)="loadAgencies($event)"
 *   helperText="Type to search government agencies"
 * ></ux4g-autocomplete>
 */
@Component({
  selector: 'ux4g-autocomplete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div [class]="wrapperClasses">
      @if (label) {
        <label [for]="inputId" [class]="labelClasses">
          {{ label }}
          @if (required) {
            <span class="ux4g-autocomplete__required" aria-label="required">*</span>
          }
        </label>
      }

      <div class="ux4g-autocomplete__input-wrapper">
        <input
          type="text"
          [id]="inputId"
          [name]="name"
          [value]="displayValue"
          [disabled]="disabled"
          [required]="required"
          [readonly]="readonly"
          [placeholder]="placeholder"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="getAriaDescribedBy()"
          [attr.aria-invalid]="error"
          [attr.aria-expanded]="isOpen"
          [attr.aria-autocomplete]="'list'"
          [attr.aria-controls]="listboxId"
          [attr.aria-activedescendant]="getActiveDescendant()"
          [attr.data-testid]="testId"
          [class]="inputClasses"
          (input)="onInputChange($event)"
          (focus)="onFocus()"
          (blur)="onBlur()"
          (keydown)="onKeyDown($event)"
        />

        @if (isOpen && filteredOptions.length > 0) {
          <ul
            [id]="listboxId"
            class="ux4g-autocomplete__listbox"
            role="listbox"
            [attr.aria-label]="label || 'Suggestions'"
          >
            @for (option of filteredOptions; track option.value) {
              <li
                [id]="getOptionId(option.value)"
                [class]="getOptionClasses(option)"
                role="option"
                [attr.aria-selected]="isOptionSelected(option)"
                [attr.aria-disabled]="option.disabled"
                (mousedown)="onOptionClick(option)"
                (mouseenter)="onOptionHover(option)"
              >
                {{ option.label }}
              </li>
            }
          </ul>
        }
      </div>

      @if (helperText && !error) {
        <div class="ux4g-autocomplete__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }

      @if (errorText && error) {
        <div class="ux4g-autocomplete__error-text" [id]="errorId" role="alert">
          {{ errorText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./autocomplete.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    },
  ],
})
export class AutocompleteComponent implements ControlValueAccessor {
  /**
   * Autocomplete size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Autocomplete label
   */
  @Input() label?: string;

  /**
   * Available options
   */
  @Input() options: AutocompleteOption[] = [];

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
   * Placeholder text
   */
  @Input() placeholder?: string;

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
   * Search change event (for async loading)
   */
  @Output() searchChange = new EventEmitter<string>();

  /**
   * Option selected event
   */
  @Output() optionSelected = new EventEmitter<AutocompleteOption>();

  /**
   * Internal value
   */
  value: string = '';

  /**
   * Display value (label of selected option or search text)
   */
  displayValue: string = '';

  /**
   * Whether the dropdown is open
   */
  isOpen: boolean = false;

  /**
   * Filtered options based on search
   */
  filteredOptions: AutocompleteOption[] = [];

  /**
   * Highlighted option index
   */
  highlightedIndex: number = -1;

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-autocomplete-' + AutocompleteComponent.nextId++;

  /**
   * ControlValueAccessor callbacks
   */
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private elementRef: ElementRef) {}

  /**
   * Get input ID
   */
  get inputId(): string {
    return this.id || this.generatedId;
  }

  /**
   * Get listbox ID
   */
  get listboxId(): string {
    return this.inputId + '-listbox';
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
   * Get option ID
   */
  getOptionId(value: string): string {
    return this.inputId + '-option-' + value;
  }

  /**
   * Get active descendant ID for ARIA
   */
  getActiveDescendant(): string {
    if (this.highlightedIndex >= 0 && this.highlightedIndex < this.filteredOptions.length) {
      return this.getOptionId(this.filteredOptions[this.highlightedIndex].value);
    }
    return '';
  }

  /**
   * Get aria-describedby value
   */
  getAriaDescribedBy(): string {
    const ids: string[] = [];

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
      'ux4g-autocomplete-wrapper',
      this.disabled && 'ux4g-autocomplete-wrapper--disabled',
      this.error && 'ux4g-autocomplete-wrapper--error',
      this.className
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-autocomplete__label',
      `ux4g-autocomplete__label--${this.size}`,
      this.disabled && 'ux4g-autocomplete__label--disabled'
    );
  }

  /**
   * Computed input classes
   */
  get inputClasses(): string {
    return classNames(
      'ux4g-autocomplete',
      `ux4g-autocomplete--${this.size}`,
      this.error && 'ux4g-autocomplete--error',
      this.disabled && 'ux4g-autocomplete--disabled',
      this.readonly && 'ux4g-autocomplete--readonly'
    );
  }

  /**
   * Get option classes
   */
  getOptionClasses(option: AutocompleteOption): string {
    const index = this.filteredOptions.indexOf(option);
    return classNames(
      'ux4g-autocomplete__option',
      this.highlightedIndex === index && 'ux4g-autocomplete__option--highlighted',
      this.isOptionSelected(option) && 'ux4g-autocomplete__option--selected',
      option.disabled && 'ux4g-autocomplete__option--disabled'
    );
  }

  /**
   * Check if option is selected
   */
  isOptionSelected(option: AutocompleteOption): boolean {
    return option.value === this.value;
  }

  /**
   * Handle input change
   */
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.displayValue = input.value;
    this.filterOptions(this.displayValue);
    this.searchChange.emit(this.displayValue);
    this.isOpen = true;
    this.highlightedIndex = 0;
  }

  /**
   * Filter options based on search text
   */
  private filterOptions(searchText: string): void {
    if (!searchText) {
      this.filteredOptions = [...this.options];
    } else {
      const search = searchText.toLowerCase();
      this.filteredOptions = this.options.filter(option =>
        option.label.toLowerCase().includes(search)
      );
    }
  }

  /**
   * Handle focus
   */
  onFocus(): void {
    if (!this.readonly && !this.disabled) {
      this.filterOptions(this.displayValue);
      this.isOpen = true;
    }
  }

  /**
   * Handle blur
   */
  onBlur(): void {
    // Delay to allow option click to register
    setTimeout(() => {
      this.isOpen = false;
      this.onTouched();
    }, 200);
  }

  /**
   * Handle keyboard navigation
   */
  onKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        this.onFocus();
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.highlightedIndex = Math.min(
          this.highlightedIndex + 1,
          this.filteredOptions.length - 1
        );
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
        break;

      case 'Enter':
        event.preventDefault();
        if (this.highlightedIndex >= 0 && this.highlightedIndex < this.filteredOptions.length) {
          const option = this.filteredOptions[this.highlightedIndex];
          if (!option.disabled) {
            this.selectOption(option);
          }
        }
        break;

      case 'Escape':
        event.preventDefault();
        this.isOpen = false;
        break;
    }
  }

  /**
   * Handle option click
   */
  onOptionClick(option: AutocompleteOption): void {
    if (!option.disabled) {
      this.selectOption(option);
    }
  }

  /**
   * Handle option hover
   */
  onOptionHover(option: AutocompleteOption): void {
    this.highlightedIndex = this.filteredOptions.indexOf(option);
  }

  /**
   * Select an option
   */
  private selectOption(option: AutocompleteOption): void {
    this.value = option.value;
    this.displayValue = option.label;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.optionSelected.emit(option);
    this.isOpen = false;
  }

  /**
   * ControlValueAccessor: Write value
   */
  writeValue(value: string): void {
    this.value = value || '';
    // Find the label for the value
    const option = this.options.find(opt => opt.value === this.value);
    this.displayValue = option ? option.label : this.value;
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

  /**
   * Close dropdown on outside click
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
