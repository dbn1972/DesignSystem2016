import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Label Component
 *
 * A form label component for associating text with form controls.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-label for="email-input" [required]="true">
 *   Email Address
 * </ux4g-label>
 * <input id="email-input" type="email" />
 *
 * @example
 * <ux4g-label for="name-input" size="lg">
 *   Full Name
 * </ux4g-label>
 */
@Component({
  selector: 'ux4g-label',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label
      [for]="htmlFor"
      [id]="id"
      [attr.data-testid]="testId"
      [class]="labelClasses"
    >
      <ng-content></ng-content>
      @if (required) {
        <span class="ux4g-label__required" aria-label="required">*</span>
      }
      @if (optional) {
        <span class="ux4g-label__optional">(optional)</span>
      }
    </label>
  `,
  styleUrls: ['./label.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LabelComponent {
  /**
   * The ID of the form control this label is for
   */
  @Input() htmlFor?: string;

  /**
   * The ID of this label element
   */
  @Input() id?: string;

  /**
   * Label size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Whether the associated field is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the associated field is optional
   * Shows "(optional)" text
   * @default false
   */
  @Input() optional: boolean = false;

  /**
   * Whether the label is disabled
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
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-label',
      'ux4g-label--' + this.size,
      this.disabled && 'ux4g-label--disabled',
      this.className
    );
  }
}
