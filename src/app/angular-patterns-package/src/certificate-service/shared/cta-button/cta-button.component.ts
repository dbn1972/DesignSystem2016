import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cert-cta-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      *ngIf="href; else buttonTpl"
      [href]="href"
      class="cert-cta"
      [class.cert-cta--primary]="variant === 'primary'"
      [class.cert-cta--secondary]="variant === 'secondary'"
      [attr.aria-label]="ariaLabel"
    >
      <span *ngIf="iconBefore" class="cert-cta__icon" aria-hidden="true">{{ iconBefore }}</span>
      <ng-content></ng-content>
      <span *ngIf="iconAfter" class="cert-cta__icon" aria-hidden="true">{{ iconAfter }}</span>
    </a>
    <ng-template #buttonTpl>
      <button
        type="button"
        class="cert-cta"
        [class.cert-cta--primary]="variant === 'primary'"
        [class.cert-cta--secondary]="variant === 'secondary'"
        [disabled]="disabled"
        [attr.aria-label]="ariaLabel"
        (click)="clicked.emit($event)"
      >
        <span *ngIf="iconBefore" class="cert-cta__icon" aria-hidden="true">{{ iconBefore }}</span>
        <ng-content></ng-content>
        <span *ngIf="iconAfter" class="cert-cta__icon" aria-hidden="true">{{ iconAfter }}</span>
      </button>
    </ng-template>
  `,
  styles: [`
    .cert-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      font-size: 0.875rem;
      font-weight: 700;
      border-radius: 0.375rem;
      border: 2px solid transparent;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.15s, opacity 0.15s, border-color 0.15s;
      line-height: 1.5;
    }
    .cert-cta:disabled { opacity: 0.6; cursor: not-allowed; }
    .cert-cta--primary {
      background: var(--cert-primary, #000080);
      color: #fff;
    }
    .cert-cta--primary:hover:not(:disabled) { opacity: 0.9; }
    .cert-cta--secondary {
      background: var(--cert-bg, #fff);
      color: var(--cert-fg-muted, #64748b);
      border-color: var(--cert-border, #e2e8f0);
    }
    .cert-cta--secondary:hover:not(:disabled) {
      background: var(--cert-bg-muted, #f8fafc);
    }
    .cert-cta__icon { font-size: 1.125rem; line-height: 1; }
  `],
})
export class CtaButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() href?: string;
  @Input() iconBefore?: string;
  @Input() iconAfter?: string;
  @Input() disabled = false;
  @Input() ariaLabel?: string;
  @Output() clicked = new EventEmitter<MouseEvent>();
}
