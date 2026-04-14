import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cert-info-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cert-info-card" [style.--accent]="accentColor">
      <div class="cert-info-card__icon" [style.background]="accentColor" aria-hidden="true">
        {{ icon }}
      </div>
      <div class="cert-info-card__body">
        <div class="cert-info-card__label">{{ label }}</div>
        <div class="cert-info-card__value">{{ value }}</div>
      </div>
    </div>
  `,
  styles: [`
    .cert-info-card {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .cert-info-card__icon {
      width: 3rem;
      height: 3rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      flex-shrink: 0;
      color: #fff;
    }
    .cert-info-card__label {
      font-size: 0.75rem;
      color: var(--cert-fg-muted, #64748b);
    }
    .cert-info-card__value {
      font-weight: 700;
      color: var(--cert-fg, #0f172a);
      font-size: 0.9375rem;
    }
  `],
})
export class InfoCardComponent {
  @Input() icon = '';
  @Input() label = '';
  @Input() value = '';
  @Input() accentColor = '#2563eb';
}
