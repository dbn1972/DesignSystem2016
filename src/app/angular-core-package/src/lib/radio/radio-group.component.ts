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
 * UX4G Radio Group Component
 *
 * A container for radio buttons that integrates with Angular Forms.
 * Manages the selected value and coordinates state across radio buttons.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-radio-group
 *   label="Select an option"
 *   [(ngModel)]="selectedValue"
 * >
 *   <ux4g-radio value="option1" label="Option 1"></ux4g-radio>
 *   <ux4g-radio value="option2" label="Option 2"></ux4g-radio>
 *   <ux4g-radio value="option3" label="Option 3"></ux4g-radio>
 * </ux4g-radio-group>
 *
 * @example
 * <ux4g-radio-group
 *   [formControl]="genderControl"
 *   label="Gender"
 *   required="true"
 *   orientation="horizontal"
 * >
 *   <ux4g-radio value="male" label="Male"></ux4g-radio>
 *   <ux4g-radio value="female" label="Female"></ux4g-radio>
 *   <ux4g-radio value="other" label="Other"></ux4g-radio>
 * </ux4g-radio-group>
 */
@Component({
  selector: 'ux4g-radio-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="wrapperClasses"
      role="radiogroup"
      [attr.aria-labelledby]="labelId"
      [attr.aria-describedby]="getDescribedBy()"
      [attr.aria-required]="required"
      [attr.data-testid]="testId"
    >
      @if (label) {
        <label [id]="labelId" [class]="labelClasses">
          {{ label }}
          @if (required) {
            <span class="ux4g-radio-group__required" aria-label="required">*</span>
          }
        </label>
      }

      <div [class]="radioContainerClasses">
        <ng-content></ng-content>
      </div>

      @if (helperText && !error) {
        <div class="ux4g-radio-group__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }

      @if (errorText && error) {
        <div class="ux4g-radio-group__error-text" [id]="errorId" role="alert">
          {{ errorText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./radio-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
})
export class RadioGroupComponent implements ControlValueAccessor {
  /**
   * Group label
   */
  @Input() label?: string;

  /**
   * Helper text displayed below the radio group
   */
  @Input() helperText?: string;

  /**
   * Error text displayed when error is true
   */
  @Input() errorText?: string;

  /**
   * Group name - auto-generated if not provided
   */
  @Input() name?: string;

  /**
   * Radio group orientation
   * @default 'vertical'
   */
  @Input() orientation: 'horizontal' | 'vertical' = 'vertical';

  /**
   * Radio size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Whether the radio group is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the radio group is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the radio group has an error
   * @default false
   */
  @Input() error: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Value change event emitter
   */
  @Output() valueChange = new EventEmitter<any>();

  /**
   * Internal value
   */
  value: any = null;

  /**
   * Auto-generated unique name
   */
  private static nextId = 0;
  private generatedName = 'ux4g-radio-group-' + RadioGroupComponent.nextId++;

  /**
   * ControlValueAccessor callbacks
   */
  private onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  /**
   * Get group name
   */
  get groupName(): string {
    return this.name || this.generatedName;
  }

  /**
   * Get label ID
   */
  get labelId(): string {
    return this.groupName + '-label';
  }

  /**
   * Get helper text ID
   */
  get helperId(): string {
    return this.groupName + '-helper';
  }

  /**
   * Get error text ID
   */
  get errorId(): string {
    return this.groupName + '-error';
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
      'ux4g-radio-group',
      this.disabled && 'ux4g-radio-group--disabled',
      this.error && 'ux4g-radio-group--error',
      this.className
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-radio-group__label',
      this.disabled && 'ux4g-radio-group__label--disabled'
    );
  }

  /**
   * Computed radio container classes
   */
  get radioContainerClasses(): string {
    return classNames(
      'ux4g-radio-group__radios',
      'ux4g-radio-group__radios--' + this.orientation
    );
  }

  /**
   * Notify parent of value change
   */
  notifyChange(value: any): void {
    this.onChange(value);
    this.valueChange.emit(value);
  }

  /**
   * ControlValueAccessor: Write value
   */
  writeValue(value: any): void {
    this.value = value;
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
