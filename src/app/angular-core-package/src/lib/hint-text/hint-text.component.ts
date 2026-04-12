import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Hint Text Component
 *
 * A helper text component for forms that provides additional context or guidance.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-hint-text>Enter your official government email address</ux4g-hint-text>
 *
 * @example
 * <ux4g-hint-text id="password-hint">
 *   Password must be at least 12 characters and include uppercase, lowercase, and numbers
 * </ux4g-hint-text>
 */
@Component({
  selector: 'ux4g-hint-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [id]="id" [class]="hintTextClasses">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./hint-text.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HintTextComponent {
  /**
   * Hint text ID for aria-describedby references
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
   * Computed hint text classes
   */
  get hintTextClasses(): string {
    return classNames(
      'ux4g-helper-text',
      this.className
    );
  }
}
