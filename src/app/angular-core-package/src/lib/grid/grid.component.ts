import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * UX4G Grid Component
 *
 * CSS Grid layout component with responsive column configuration.
 * Provides consistent spacing and responsive breakpoint support.
 *
 * @example
 * <ux4g-grid cols="3" gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </ux4g-grid>
 *
 * @example
 * <ux4g-grid
 *   [cols]="4"
 *   [colsSm]="2"
 *   [colsMd]="3"
 *   gap="lg"
 * >
 *   <div>Responsive item</div>
 * </ux4g-grid>
 */
@Component({
  selector: 'ux4g-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="gridClasses"
      [style.grid-template-columns]="customCols"
      [attr.data-testid]="testId"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent {
  /**
   * Number of columns (default breakpoint)
   * @default 1
   */
  @Input() cols: GridCols = 1;

  /**
   * Number of columns on small screens (≥640px)
   */
  @Input() colsSm?: GridCols;

  /**
   * Number of columns on medium screens (≥768px)
   */
  @Input() colsMd?: GridCols;

  /**
   * Number of columns on large screens (≥1024px)
   */
  @Input() colsLg?: GridCols;

  /**
   * Number of columns on extra large screens (≥1280px)
   */
  @Input() colsXl?: GridCols;

  /**
   * Gap between grid items
   * @default 'md'
   */
  @Input() gap: GridGap = 'md';

  /**
   * Custom grid-template-columns CSS value
   */
  @Input() customCols?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed grid classes
   */
  get gridClasses(): string {
    return classNames(
      'ux4g-grid',
      'ux4g-grid--cols-' + this.cols,
      this.colsSm && 'ux4g-grid--cols-sm-' + this.colsSm,
      this.colsMd && 'ux4g-grid--cols-md-' + this.colsMd,
      this.colsLg && 'ux4g-grid--cols-lg-' + this.colsLg,
      this.colsXl && 'ux4g-grid--cols-xl-' + this.colsXl,
      'ux4g-grid--gap-' + this.gap,
      this.className
    );
  }
}
