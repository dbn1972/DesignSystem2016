import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Error Text Component
 *
 * An error message component for forms that displays validation errors.
 * Includes role="alert" for screen reader announcements.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-error-text>Email address is required</ux4g-error-text>
 *
 * @example
 * <ux4g-error-text id="ssn-error">
 *   Social Security Number must be in format XXX-XX-XXXX
 * </ux4g-error-text>
 */
@Component({
  selector: 'ux4g-error-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [id]="id"
      [class]="errorTextClasses"
      role="alert"
      [attr.data-testid]="testId"
    >
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./error-text.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ErrorTextComponent {
  /**
   * Error text ID for aria-describedby references
   */
  @Input() id?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed error text classes
   */
  get errorTextClasses(): string {
    return classNames(
      'ux4g-error-message',
      this.className
    );
  }
}
