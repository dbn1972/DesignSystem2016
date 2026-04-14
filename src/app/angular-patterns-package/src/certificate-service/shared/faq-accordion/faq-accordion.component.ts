import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqItem } from '../../models/certificate.models';

@Component({
  selector: 'cert-faq-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cert-faq" role="region" aria-label="Frequently Asked Questions">
      <div
        *ngFor="let item of items; let i = index"
        class="cert-faq__item"
        [class.cert-faq__item--open]="item.open"
      >
        <button
          class="cert-faq__trigger"
          type="button"
          [attr.aria-expanded]="item.open"
          [attr.aria-controls]="'faq-panel-' + i"
          [attr.id]="'faq-trigger-' + i"
          (click)="toggle(i)"
        >
          <span class="cert-faq__question">{{ item.question }}</span>
          <span class="cert-faq__chevron" aria-hidden="true">{{ item.open ? '−' : '+' }}</span>
        </button>
        <div
          *ngIf="item.open"
          class="cert-faq__panel"
          [attr.id]="'faq-panel-' + i"
          [attr.aria-labelledby]="'faq-trigger-' + i"
          role="region"
        >
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cert-faq__item {
      border: 1px solid var(--cert-border, #e2e8f0);
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      overflow: hidden;
    }
    .cert-faq__item--open {
      border-color: var(--cert-primary, #000080);
    }
    .cert-faq__trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 1rem 1.25rem;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      font-size: 0.9375rem;
      font-weight: 600;
      color: var(--cert-fg, #0f172a);
      gap: 1rem;
    }
    .cert-faq__trigger:hover {
      background: var(--cert-bg-muted, #f8fafc);
    }
    .cert-faq__chevron {
      font-size: 1.25rem;
      flex-shrink: 0;
      color: var(--cert-fg-muted, #64748b);
    }
    .cert-faq__panel {
      padding: 0 1.25rem 1rem;
      font-size: 0.875rem;
      color: var(--cert-fg-muted, #64748b);
      line-height: 1.6;
    }
    .cert-faq__panel p { margin: 0; }
  `],
})
export class FaqAccordionComponent {
  @Input() items: FaqItem[] = [];

  toggle(index: number): void {
    this.items = this.items.map((item, i) => ({
      ...item,
      open: i === index ? !item.open : false,
    }));
  }
}
