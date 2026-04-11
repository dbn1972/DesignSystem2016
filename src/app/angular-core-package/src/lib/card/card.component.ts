import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Card Component
 *
 * A container component for grouping related content.
 * Can be used with CardHeader, CardContent, and CardFooter sub-components.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-card>
 *   <ux4g-card-header>
 *     <h3>Card Title</h3>
 *   </ux4g-card-header>
 *   <ux4g-card-content>
 *     Card content goes here
 *   </ux4g-card-content>
 *   <ux4g-card-footer>
 *     <button>Action</button>
 *   </ux4g-card-footer>
 * </ux4g-card>
 *
 * @example
 * <ux4g-card [elevated]="true" [hoverable]="true">
 *   <ux4g-card-content>
 *     Simple card with elevation and hover effect
 *   </ux4g-card-content>
 * </ux4g-card>
 */
@Component({
  selector: 'ux4g-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [attr.data-testid]="testId"
      [class]="cardClasses"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  /**
   * Whether the card has elevation/shadow
   * @default true
   */
  @Input() elevated: boolean = true;

  /**
   * Whether the card has a border
   * @default true
   */
  @Input() bordered: boolean = true;

  /**
   * Whether the card has hover effect
   * @default false
   */
  @Input() hoverable: boolean = false;

  /**
   * Whether the card is clickable
   * @default false
   */
  @Input() clickable: boolean = false;

  /**
   * Padding size
   * @default 'md'
   */
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed card classes
   */
  get cardClasses(): string {
    return classNames(
      'ux4g-card',
      this.elevated && 'ux4g-card--elevated',
      this.bordered && 'ux4g-card--bordered',
      this.hoverable && 'ux4g-card--hoverable',
      this.clickable && 'ux4g-card--clickable',
      'ux4g-card--padding-' + this.padding,
      this.className
    );
  }
}

/**
 * UX4G Card Header Component
 *
 * Header section for a card, typically containing title and actions.
 */
@Component({
  selector: 'ux4g-card-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="headerClasses">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardHeaderComponent {
  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Computed header classes
   */
  get headerClasses(): string {
    return classNames('ux4g-card__header', this.className);
  }
}

/**
 * UX4G Card Content Component
 *
 * Main content section for a card.
 */
@Component({
  selector: 'ux4g-card-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardContentComponent {
  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Computed content classes
   */
  get contentClasses(): string {
    return classNames('ux4g-card__content', this.className);
  }
}

/**
 * UX4G Card Footer Component
 *
 * Footer section for a card, typically containing actions or metadata.
 */
@Component({
  selector: 'ux4g-card-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="footerClasses">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardFooterComponent {
  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Computed footer classes
   */
  get footerClasses(): string {
    return classNames('ux4g-card__footer', this.className);
  }
}
