import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StatusVariant } from '../../types/common.types';

export interface Toast {
  id: string;
  message: string;
  variant: StatusVariant;
  title?: string;
  duration?: number;
  dismissible?: boolean;
}

/**
 * UX4G Toast Service
 *
 * Service for programmatically displaying toast notifications.
 *
 * @example
 * constructor(private toastService: ToastService) {}
 *
 * showSuccess() {
 *   this.toastService.success('Operation completed successfully!');
 * }
 */
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$: Observable<Toast[]> = this.toastsSubject.asObservable();

  private idCounter = 0;

  /**
   * Show a toast notification
   */
  show(toast: Omit<Toast, 'id'>): string {
    const id = 'toast-' + this.idCounter++;
    const newToast: Toast = {
      id,
      ...toast,
      duration: toast.duration ?? 5000,
      dismissible: toast.dismissible ?? true,
    };

    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, newToast]);

    // Auto-dismiss if duration is set
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        this.dismiss(id);
      }, newToast.duration);
    }

    return id;
  }

  /**
   * Show an info toast
   */
  info(message: string, title?: string, duration?: number): string {
    return this.show({ message, title, variant: 'info', duration });
  }

  /**
   * Show a success toast
   */
  success(message: string, title?: string, duration?: number): string {
    return this.show({ message, title, variant: 'success', duration });
  }

  /**
   * Show a warning toast
   */
  warning(message: string, title?: string, duration?: number): string {
    return this.show({ message, title, variant: 'warning', duration });
  }

  /**
   * Show an error toast
   */
  error(message: string, title?: string, duration?: number): string {
    return this.show({ message, title, variant: 'error', duration });
  }

  /**
   * Dismiss a specific toast
   */
  dismiss(id: string): void {
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next(currentToasts.filter((toast) => toast.id !== id));
  }

  /**
   * Dismiss all toasts
   */
  dismissAll(): void {
    this.toastsSubject.next([]);
  }

  /**
   * Get current toasts
   */
  getToasts(): Toast[] {
    return this.toastsSubject.value;
  }
}
