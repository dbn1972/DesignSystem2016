import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

export type AvatarShape = 'circle' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

/**
 * UX4G Avatar Component
 *
 * Displays user profile images with automatic fallback to initials.
 * Supports various sizes, shapes, and online status indicators.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-avatar
 *   src="/images/user.jpg"
 *   alt="John Doe"
 *   name="John Doe"
 * ></ux4g-avatar>
 *
 * @example
 * <ux4g-avatar
 *   name="Jane Smith"
 *   size="lg"
 *   shape="square"
 *   status="online"
 * ></ux4g-avatar>
 */
@Component({
  selector: 'ux4g-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="wrapperClasses"
      [attr.data-testid]="testId"
    >
      @if (src && !imageError) {
        <img
          [src]="src"
          [alt]="alt || name || 'Avatar'"
          [class]="imageClasses"
          (error)="handleImageError()"
          (click)="avatarClick.emit($event)"
        />
      } @else {
        <div
          [class]="fallbackClasses"
          [style.background-color]="backgroundColor"
          (click)="avatarClick.emit($event)"
        >
          <span [class]="initialsClasses">{{ initials }}</span>
        </div>
      }

      @if (status) {
        <span
          [class]="statusClasses"
          [attr.aria-label]="status + ' status'"
          role="status"
        ></span>
      }
    </div>
  `,
  styleUrls: ['./avatar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AvatarComponent {
  /**
   * Image source URL
   */
  @Input() src?: string;

  /**
   * Image alt text
   */
  @Input() alt?: string;

  /**
   * User name for generating initials
   */
  @Input() name?: string;

  /**
   * Avatar size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Avatar shape
   * @default 'circle'
   */
  @Input() shape: AvatarShape = 'circle';

  /**
   * Online status indicator
   */
  @Input() status?: AvatarStatus;

  /**
   * Custom background color for fallback
   */
  @Input() backgroundColor?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Emitted when avatar is clicked
   */
  @Output() avatarClick = new EventEmitter<MouseEvent>();

  /**
   * Image error state
   */
  imageError = false;

  /**
   * Get initials from name
   */
  get initials(): string {
    if (!this.name) return '';

    const words = this.name.trim().split(/\s+/);
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-avatar',
      'ux4g-avatar--' + this.size,
      'ux4g-avatar--' + this.shape,
      this.status && 'ux4g-avatar--with-status',
      this.className
    );
  }

  /**
   * Computed image classes
   */
  get imageClasses(): string {
    return classNames('ux4g-avatar__image');
  }

  /**
   * Computed fallback classes
   */
  get fallbackClasses(): string {
    return classNames('ux4g-avatar__fallback');
  }

  /**
   * Computed initials classes
   */
  get initialsClasses(): string {
    return classNames('ux4g-avatar__initials');
  }

  /**
   * Computed status classes
   */
  get statusClasses(): string {
    return classNames(
      'ux4g-avatar__status',
      this.status && 'ux4g-avatar__status--' + this.status
    );
  }

  /**
   * Handle image load error
   */
  handleImageError(): void {
    this.imageError = true;
  }
}
