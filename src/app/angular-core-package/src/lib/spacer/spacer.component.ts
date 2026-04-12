import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Size type for spacer
 */
export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

/**
 * Spacer Component
 *
 * Spacing utility component for consistent vertical and horizontal spacing.
 * Uses design tokens for standardized spacing across the application.
 *
 * @example
 * <ux4g-spacer size="md"></ux4g-spacer>
 *
 * @example Horizontal spacer
 * <div style="display: flex;">
 *   <button>First</button>
 *   <ux4g-spacer size="sm" orientation="horizontal"></ux4g-spacer>
 *   <button>Second</button>
 * </div>
 *
 * @example Custom pixel value
 * <ux4g-spacer [size]="32"></ux4g-spacer>
 *
 * @example Government Portal Use Case - Form Spacing
 * <form>
 *   <ux4g-field label="Full Name">
 *     <input type="text" />
 *   </ux4g-field>
 *
 *   <ux4g-spacer size="md"></ux4g-spacer>
 *
 *   <ux4g-field label="Email">
 *     <input type="email" />
 *   </ux4g-field>
 *
 *   <ux4g-spacer size="lg"></ux4g-spacer>
 *
 *   <button type="submit">Submit Application</button>
 * </form>
 *
 * @example Responsive spacing
 * <ux4g-spacer size="xl" [responsive]="true"></ux4g-spacer>
 */
@Component({
  selector: 'ux4g-spacer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="ux4g-spacer"
      [class.ux4g-spacer--horizontal]="orientation === 'horizontal'"
      [class.ux4g-spacer--vertical]="orientation === 'vertical'"
      [class.ux4g-spacer--responsive]="responsive"
      [style.height]="orientation === 'vertical' ? spacingValue : '1px'"
      [style.width]="orientation === 'horizontal' ? spacingValue : '1px'"
      [style.min-height]="orientation === 'vertical' ? spacingValue : '1px'"
      [style.min-width]="orientation === 'horizontal' ? spacingValue : '1px'"
      role="separator"
      [attr.aria-orientation]="orientation"
      [attr.aria-hidden]="true">
    </div>
  `,
  styleUrls: ['./spacer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SpacerComponent implements OnInit, OnChanges {
  /**
   * Spacing size - predefined token or custom pixel value
   * @default 'md'
   */
  @Input() size: SpacerSize = 'md';

  /**
   * Spacing orientation
   * @default 'vertical'
   */
  @Input() orientation: 'horizontal' | 'vertical' = 'vertical';

  /**
   * Enable responsive sizing (reduces on mobile)
   * @default false
   */
  @Input() responsive: boolean = false;

  /**
   * Computed spacing value
   */
  spacingValue: string = '1rem';

  /**
   * Size mapping for design tokens
   */
  private readonly SIZE_MAP: Record<string, string> = {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem'       // 32px
  };

  ngOnInit(): void {
    this.updateSpacingValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['size']) {
      this.updateSpacingValue();
    }
  }

  /**
   * Calculate spacing value based on size input
   */
  private updateSpacingValue(): void {
    if (typeof this.size === 'number') {
      this.spacingValue = `${this.size}px`;
    } else {
      this.spacingValue = this.SIZE_MAP[this.size] || this.SIZE_MAP.md;
    }
  }

  /**
   * Get responsive spacing value
   */
  getResponsiveValue(): string {
    if (!this.responsive) {
      return this.spacingValue;
    }

    // Apply responsive scaling
    const value = parseFloat(this.spacingValue);
    const unit = this.spacingValue.replace(/[0-9.]/g, '');
    const scaledValue = value * 0.75; // 75% on mobile

    return `${scaledValue}${unit}`;
  }
}
