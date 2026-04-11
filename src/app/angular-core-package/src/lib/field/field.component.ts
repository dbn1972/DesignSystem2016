import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Field Component
 *
 * A wrapper component for form fields that provides consistent layout
 * for label, input, helper text, and error text.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-field
 *   label="Email Address"
 *   helperText="We'll never share your email"
 *   [required]="true"
 * >
 *   <ux4g-input type="email" formControlName="email"></ux4g-input>
 * </ux4g-field>
 *
 * @example
 * <ux4g-field
 *   label="Password"
 *   [error]="passwordControl.invalid && passwordControl.touched"
 *   errorText="Password must be at least 8 characters"
 * >
 *   <ux4g-input type="password" [formControl]="passwordControl"></ux4g-input>
 * </ux4g-field>
 */
@Component({
  selector: 'ux4g-field',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses" [attr.data-testid]="testId">
      @if (label) {
        <label [for]="htmlFor" [class]="labelClasses">
          {{ label }}
          @if (required) {
            <span class="ux4g-field__required" aria-label="required">*</span>
          }
          @if (optional) {
            <span class="ux4g-field__optional">(optional)</span>
          }
        </label>
      }

      <div class="ux4g-field__control">
        <ng-content></ng-content>
      </div>

      @if (helperText && !error) {
        <div class="ux4g-field__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }

      @if (errorText && error) {
        <div class="ux4g-field__error-text" [id]="errorId" role="alert">
          {{ errorText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FieldComponent {
  /**
   * Field label
   */
  @Input() label?: string;

  /**
   * The ID of the form control inside this field
   */
  @Input() htmlFor?: string;

  /**
   * Helper text displayed below the field
   */
  @Input() helperText?: string;

  /**
   * Error text displayed when error is true
   */
  @Input() errorText?: string;

  /**
   * Whether the field is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the field is optional
   * Shows "(optional)" text
   * @default false
   */
  @Input() optional: boolean = false;

  /**
   * Whether the field has an error
   * @default false
   */
  @Input() error: boolean = false;

  /**
   * Whether the field is disabled
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
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-field-' + FieldComponent.nextId++;

  /**
   * Get field ID
   */
  get fieldId(): string {
    return this.htmlFor || this.generatedId;
  }

  /**
   * Get helper text ID
   */
  get helperId(): string {
    return this.fieldId + '-helper';
  }

  /**
   * Get error text ID
   */
  get errorId(): string {
    return this.fieldId + '-error';
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-field',
      this.error && 'ux4g-field--error',
      this.disabled && 'ux4g-field--disabled',
      this.className
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-field__label',
      this.disabled && 'ux4g-field__label--disabled'
    );
  }
}
