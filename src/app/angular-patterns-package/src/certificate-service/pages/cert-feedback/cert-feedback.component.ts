import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-feedback-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="cf"><ux4g-service-header icon="💬" iconColor="#db2777" category="Service Feedback" title="Share Your Experience"></ux4g-service-header>
    <main class="cf-main">
      <div class="cf-congrats"><span class="cf-congrats__icon" aria-hidden="true">👍</span><h2>Congratulations on Receiving Your Certificate!</h2><p>We would love to hear about your experience.</p></div>
      <form class="cf-card" (ngSubmit)="onSubmit()" novalidate>
        <div class="cf-card__header">Help Us Improve</div>
        <div class="cf-card__body">
          <div class="cf-rating"><label>How would you rate your experience? <span class="req">*</span></label>
            <div class="cf-stars"><button *ngFor="let s of [1,2,3,4,5]" type="button" (click)="rating=s" (mouseenter)="hover=s" (mouseleave)="hover=0" class="cf-star" [class.cf-star--active]="s<=(hover||rating)" aria-label="Rate {{s}} stars">★</button></div>
            <div class="cf-rating-label">{{ ratingLabel }}</div>
          </div>
          <div class="cf-categories"><label>What aspect?</label>
            <div class="cf-cat-grid"><label *ngFor="let c of categories" class="cf-cat" [class.cf-cat--active]="category===c"><input type="radio" name="cat" [value]="c" [(ngModel)]="category" hidden />{{ c }}</label></div>
          </div>
          <div class="cf-field"><label>Your Feedback</label><textarea [(ngModel)]="feedback" name="feedback" rows="5" placeholder="Share your experience…"></textarea></div>
          <button type="submit" class="cf-submit" [disabled]="rating===0">📤 Submit Feedback</button>
          <div class="cf-skip"><a href="/reference-service/certificate/my-applications">Skip for now</a></div>
        </div>
      </form>
    </main>
    <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Service Feedback"></ux4g-service-footer></div>
  `,
  styles: [`
    .cf { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .cf-main { max-width: 640px; margin: 0 auto; padding: 2rem 1.5rem; }
    .cf-congrats { text-align: center; background: #f0fdf4; border: 2px solid #16a34a; border-radius: 0.5rem; padding: 2rem; margin-bottom: 1.5rem; &__icon { font-size: 3rem; display: block; margin-bottom: 0.5rem; } h2 { font-size: 1.25rem; font-weight: 700; margin: 0 0 0.25rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0; } }
    .cf-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden;
      &__header { padding: 1rem 1.5rem; font-weight: 700; background: var(--cert-bg-muted, #f8fafc); border-bottom: 2px solid var(--cert-border, #e2e8f0); }
      &__body { padding: 1.5rem; }
    }
    .cf-rating { text-align: center; margin-bottom: 1.5rem; label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem; } }
    .cf-stars { display: flex; justify-content: center; gap: 0.25rem; }
    .cf-star { background: none; border: none; font-size: 2.5rem; color: #d1d5db; cursor: pointer; transition: transform 0.1s; &--active { color: #facc15; } &:hover { transform: scale(1.1); } }
    .cf-rating-label { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin-top: 0.5rem; }
    .cf-categories { margin-bottom: 1.5rem; label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem; } }
    .cf-cat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
    .cf-cat { display: block; padding: 0.625rem; border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.375rem; text-align: center; font-size: 0.8125rem; font-weight: 700; color: var(--cert-fg-muted, #64748b); cursor: pointer; &--active { border-color: var(--cert-primary, #000080); background: #eff6ff; color: var(--cert-primary, #000080); } }
    .cf-field { margin-bottom: 1.5rem; label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; } textarea { width: 100%; padding: 0.625rem; border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; resize: vertical; box-sizing: border-box; &:focus { border-color: var(--cert-primary, #000080); outline: none; } } }
    .cf-submit { width: 100%; padding: 0.875rem; background: #16a34a; color: #fff; font-weight: 700; font-size: 0.875rem; border: none; border-radius: 0.375rem; cursor: pointer; &:disabled { background: #9ca3af; cursor: not-allowed; } }
    .cf-skip { text-align: center; margin-top: 1rem; a { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); text-decoration: none; &:hover { color: var(--cert-fg, #0f172a); } } }
    .req { color: #dc2626; }
  `],
})
export class CertFeedbackComponent {
  rating = 0; hover = 0; feedback = ''; category = '';
  categories = ['Application Process', 'Website Usability', 'Processing Time', 'Officer Support', 'Document Requirements', 'Overall Service'];
  get ratingLabel() { return ['Click to rate', 'Very Poor', 'Poor', 'Average', 'Good', 'Excellent'][this.rating]; }
  onSubmit() { if (this.rating > 0) window.location.href = '/reference-service/certificate/my-applications'; }
}
