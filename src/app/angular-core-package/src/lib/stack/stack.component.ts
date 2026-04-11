import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export type StackDirection = 'horizontal' | 'vertical';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type StackSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * UX4G Stack Component
 *
 * Flexbox layout component for arranging children with consistent spacing.
 * Supports horizontal and vertical stacking with alignment options.
 *
 * @example
 * <ux4g-stack direction="vertical" spacing="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </ux4g-stack>
 *
 * @example
 * <ux4g-stack direction="horizontal" justify="between" align="center">
 *   <button>Cancel</button>
 *   <button>Submit</button>
 * </ux4g-stack>
 */
@Component({
  selector: 'ux4g-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="stackClasses" [attr.data-testid]="testId">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./stack.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StackComponent {
  /**
   * Stack direction
   * @default 'vertical'
   */
  @Input() direction: StackDirection = 'vertical';

  /**
   * Gap spacing between items
   * @default 'md'
   */
  @Input() spacing: StackSpacing = 'md';

  /**
   * Align items on cross axis
   * @default 'stretch'
   */
  @Input() align: StackAlign = 'stretch';

  /**
   * Justify items on main axis
   * @default 'start'
   */
  @Input() justify: StackJustify = 'start';

  /**
   * Whether items should wrap
   * @default false
   */
  @Input() wrap: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed stack classes
   */
  get stackClasses(): string {
    return classNames(
      'ux4g-stack',
      'ux4g-stack--' + this.direction,
      'ux4g-stack--spacing-' + this.spacing,
      'ux4g-stack--align-' + this.align,
      'ux4g-stack--justify-' + this.justify,
      this.wrap && 'ux4g-stack--wrap',
      this.className
    );
  }
}
