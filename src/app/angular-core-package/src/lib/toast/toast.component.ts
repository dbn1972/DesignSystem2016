import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastService, Toast } from './toast.service';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Toast Container Component
 *
 * Container component that displays toast notifications.
 * Should be placed once in your app, typically in the root component.
 *
 * @example
 * // In your app component template
 * <ux4g-toast-container></ux4g-toast-container>
 *
 * // In your component
 * constructor(private toastService: ToastService) {}
 *
 * showToast() {
 *   this.toastService.success('Operation successful!');
 * }
 */
@Component({
  selector: 'ux4g-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ux4g-toast-container">
      @for (toast of toasts; track toast.id) {
        <div
          role="alert"
          [attr.aria-live]="toast.variant === 'error' ? 'assertive' : 'polite'"
          [class]="getToastClasses(toast)"
          [@slideIn]
        >
          <div class="ux4g-toast__icon" aria-hidden="true">
            <span [innerHTML]="getIcon(toast.variant)"></span>
          </div>

          <div class="ux4g-toast__content">
            @if (toast.title) {
              <div class="ux4g-toast__title">{{ toast.title }}</div>
            }
            <div class="ux4g-toast__message">{{ toast.message }}</div>
          </div>

          @if (toast.dismissible) {
            <button
              type="button"
              class="ux4g-toast__close"
              aria-label="Dismiss notification"
              (click)="dismiss(toast.id)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          }
        </div>
      }
    </div>
  `,
  styleUrls: ['./toast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToastContainerComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private subscription?: Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.subscription = this.toastService.toasts$.subscribe((toasts) => {
      this.toasts = toasts;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  /**
   * Get toast classes
   */
  getToastClasses(toast: Toast): string {
    return classNames(
      'ux4g-toast',
      'ux4g-toast--' + toast.variant
    );
  }

  /**
   * Get icon for toast variant
   */
  getIcon(variant: string): string {
    const icons = {
      info: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"/></svg>',
      success: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm4.293 7.707l-5 5a.999.999 0 01-1.414 0l-2.5-2.5a.999.999 0 111.414-1.414L9 10.586l4.293-4.293a.999.999 0 111.414 1.414z"/></svg>',
      warning: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0L0 18h20L10 0zm1 15H9v-2h2v2zm0-3H9V7h2v5z"/></svg>',
      error: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm5 13.59L13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59 13.59 5 15 6.41 11.41 10 15 13.59z"/></svg>',
    };
    return icons[variant as keyof typeof icons] || icons.info;
  }

  /**
   * Dismiss a toast
   */
  dismiss(id: string): void {
    this.toastService.dismiss(id);
  }
}
