import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * UX4G Container Component
 *
 * Layout component that constrains content width and centers it.
 * Provides consistent max-width breakpoints and optional padding.
 *
 * @example
 * <ux4g-container>
 *   <h1>Page Content</h1>
 * </ux4g-container>
 *
 * @example
 * <ux4g-container size="lg" [padding]="true">
 *   Content here
 * </ux4g-container>
 */
@Component({
  selector: 'ux4g-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses" [attr.data-testid]="testId">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ContainerComponent {
  /**
   * Container max-width size
   * @default 'lg'
   */
  @Input() size: ContainerSize = 'lg';

  /**
   * Whether to add horizontal padding
   * @default true
   */
  @Input() padding: boolean = true;

  /**
   * Whether to center the container
   * @default true
   */
  @Input() center: boolean = true;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed container classes
   */
  get containerClasses(): string {
    return classNames(
      'ux4g-container',
      'ux4g-container--' + this.size,
      this.padding && 'ux4g-container--padding',
      this.center && 'ux4g-container--center',
      this.className
    );
  }
}
