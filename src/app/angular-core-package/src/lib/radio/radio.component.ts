import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  forwardRef,
  Optional,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';
import { RadioGroupComponent } from './radio-group.component';

/**
 * UX4G Radio Component
 *
 * A radio input component that integrates with Angular Forms.
 * Should be used within a RadioGroupComponent for proper functionality.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-radio-group [(ngModel)]="selectedOption">
 *   <ux4g-radio value="option1" label="Option 1"></ux4g-radio>
 *   <ux4g-radio value="option2" label="Option 2"></ux4g-radio>
 * </ux4g-radio-group>
 *
 * @example
 * <ux4g-radio-group [formControl]="optionControl">
 *   <ux4g-radio value="yes" label="Yes"></ux4g-radio>
 *   <ux4g-radio value="no" label="No"></ux4g-radio>
 * </ux4g-radio-group>
 */
@Component({
  selector: 'ux4g-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      <input
        type="radio"
        [id]="inputId"
        [name]="radioName"
        [value]="value"
        [checked]="isChecked"
        [disabled]="isDisabled"
        [required]="radioRequired"
        [attr.aria-label]="ariaLabel"
        [attr.aria-describedby]="ariaDescribedBy"
        [attr.data-testid]="testId"
        [class]="radioClasses"
        (change)="onRadioChange()"
        (focus)="onFocus($event)"
        (blur)="onBlur($event)"
      />

      @if (label) {
        <label [for]="inputId" [class]="labelClasses">
          {{ label }}
          @if (radioRequired) {
            <span class="ux4g-radio__required" aria-label="required">*</span>
          }
        </label>
      }

      @if (helperText) {
        <div class="ux4g-radio__helper-text">
          {{ helperText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./radio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RadioComponent {
  /**
   * Radio value
   */
  @Input() value: any;

  /**
   * Radio label
   */
  @Input() label?: string;

  /**
   * Helper text displayed below the radio
   */
  @Input() helperText?: string;

  /**
   * Input ID - auto-generated if not provided
   */
  @Input() id?: string;

  /**
   * Whether the radio is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Radio size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

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
   * Change event emitter
   */
  @Output() changed = new EventEmitter<any>();

  /**
   * Focus event emitter
   */
  @Output() focused = new EventEmitter<FocusEvent>();

  /**
   * Blur event emitter
   */
  @Output() blurred = new EventEmitter<FocusEvent>();

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-radio-' + RadioComponent.nextId++;

  constructor(
    @Optional() @Inject(forwardRef(() => RadioGroupComponent)) private radioGroup: RadioGroupComponent
  ) {}

  /**
   * Get input ID
   */
  get inputId(): string {
    return this.id || this.generatedId;
  }

  /**
   * Get radio name from group or use default
   */
  get radioName(): string {
    return this.radioGroup ? this.radioGroup.name : this.generatedId;
  }

  /**
   * Get radio size from group or use own
   */
  get radioSize(): ComponentSize {
    return this.radioGroup?.size || this.size;
  }

  /**
   * Get disabled state from group or use own
   */
  get isDisabled(): boolean {
    return this.radioGroup?.disabled || this.disabled;
  }

  /**
   * Get required state from group
   */
  get radioRequired(): boolean {
    return this.radioGroup?.required || false;
  }

  /**
   * Check if this radio is selected
   */
  get isChecked(): boolean {
    return this.radioGroup ? this.radioGroup.value === this.value : false;
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-radio-wrapper',
      this.isDisabled && 'ux4g-radio-wrapper--disabled',
      this.className
    );
  }

  /**
   * Computed radio classes
   */
  get radioClasses(): string {
    return classNames(
      'ux4g-radio',
      'ux4g-radio--' + this.radioSize,
      this.isDisabled && 'ux4g-radio--disabled'
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-radio__label',
      'ux4g-radio__label--' + this.radioSize,
      this.isDisabled && 'ux4g-radio__label--disabled'
    );
  }

  /**
   * Handle radio change event
   */
  onRadioChange(): void {
    if (this.radioGroup) {
      this.radioGroup.writeValue(this.value);
      this.radioGroup.notifyChange(this.value);
    }
    this.changed.emit(this.value);
  }

  /**
   * Handle focus event
   */
  onFocus(event: FocusEvent): void {
    this.focused.emit(event);
  }

  /**
   * Handle blur event
   */
  onBlur(event: FocusEvent): void {
    if (this.radioGroup) {
      this.radioGroup.onTouched();
    }
    this.blurred.emit(event);
  }
}
