import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';

@Component({
  selector: 'ux4g-form-additional',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="svc-page">
      <ux4g-service-header icon="📋" iconColor="#ea580c" category="Government Service Access" title="Step 3 of 3: Additional Information"></ux4g-service-header>
      <main class="svc-form-main">
        <form [formGroup]="form" (ngSubmit)="onContinue()" novalidate class="svc-card">
          <div class="ux4g-field">
            <label class="ux4g-label" for="ad-purpose">Purpose of Application <span class="req">*</span></label>
            <select id="ad-purpose" class="ux4g-select" formControlName="purpose">
              <option value="" disabled>Select purpose</option>
              <option value="birth">Birth Certificate</option>
              <option value="death">Death Certificate</option>
              <option value="income">Income Certificate</option>
              <option value="caste">Caste Certificate</option>
              <option value="domicile">Domicile Certificate</option>
            </select>
          </div>
          <div class="ux4g-field">
            <label class="ux4g-label">Processing Type <span class="req">*</span></label>
            <div class="ux4g-radio-group">
              <label class="ux4g-radio"><input type="radio" formControlName="urgency" value="normal" /><span>Normal (7–10 days)</span></label>
              <label class="ux4g-radio"><input type="radio" formControlName="urgency" value="tatkal" /><span>Tatkal / Urgent (2–3 days, extra fee)</span></label>
            </div>
          </div>
          <div class="ux4g-field">
            <label class="ux4g-label" for="ad-remarks">Additional Remarks</label>
            <textarea id="ad-remarks" class="ux4g-textarea" formControlName="remarks" rows="3" placeholder="Any additional information…"></textarea>
          </div>
          <div class="svc-form-actions"><a [href]="backPath" class="svc-btn svc-btn--outline">← Back</a><button type="submit" class="svc-btn svc-btn--primary">Save and Continue →</button></div>
        </form>
      </main>
      <ux4g-service-footer [leftText]="serviceName + ' • Government of India'" rightText="Additional Information"></ux4g-service-footer>
    </div>
  `,
  styleUrls: ['../form-personal/form-personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAdditionalComponent {
  @Input() backPath = '/reference-service/form/address';
  @Input() nextPath = '/reference-service/form/review';
  @Input() serviceName = 'Government Service Platform';
  @Output() saved = new EventEmitter<any>();
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ purpose: ['', Validators.required], urgency: ['normal', Validators.required], remarks: [''] });
  }
  get f() { return this.form.controls; }
  onContinue(): void { if (this.form.invalid) { this.form.markAllAsTouched(); return; } this.saved.emit(this.form.value); window.location.href = this.nextPath; }
}
