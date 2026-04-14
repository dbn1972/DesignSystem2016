import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';
import { INDIAN_STATES } from '../../mock-api/mock-data';

@Component({
  selector: 'ux4g-form-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="svc-page">
      <ux4g-service-header icon="🏠" iconColor="#2563eb" category="Government Service Access" title="Step 2 of 3: Address Details">
        <button type="button" class="svc-btn svc-btn--outline" (click)="saveDraft()">💾 Save Draft</button>
      </ux4g-service-header>
      <main class="svc-form-main">
        <form [formGroup]="form" (ngSubmit)="onContinue()" novalidate class="svc-card">
          <div class="ux4g-field"><label class="ux4g-label" for="af-line1">Address Line 1 <span class="req">*</span></label><input id="af-line1" class="ux4g-input" formControlName="addressLine1" /><div class="ux4g-error-text" *ngIf="f['addressLine1'].touched && f['addressLine1'].invalid" role="alert">Required</div></div>
          <div class="ux4g-field"><label class="ux4g-label" for="af-line2">Address Line 2</label><input id="af-line2" class="ux4g-input" formControlName="addressLine2" /></div>
          <div class="ux4g-field__row">
            <div class="ux4g-field"><label class="ux4g-label" for="af-city">City <span class="req">*</span></label><input id="af-city" class="ux4g-input" formControlName="city" /></div>
            <div class="ux4g-field"><label class="ux4g-label" for="af-district">District <span class="req">*</span></label><input id="af-district" class="ux4g-input" formControlName="district" /></div>
          </div>
          <div class="ux4g-field__row">
            <div class="ux4g-field"><label class="ux4g-label" for="af-state">State <span class="req">*</span></label><select id="af-state" class="ux4g-select" formControlName="state"><option value="" disabled>Select</option><option *ngFor="let s of states" [value]="s">{{s}}</option></select></div>
            <div class="ux4g-field"><label class="ux4g-label" for="af-pin">PIN Code <span class="req">*</span></label><input id="af-pin" class="ux4g-input" inputmode="numeric" maxlength="6" formControlName="pincode" /><div class="ux4g-error-text" *ngIf="f['pincode'].touched && f['pincode'].invalid" role="alert">Valid 6-digit PIN required</div></div>
          </div>
          <div class="svc-form-actions"><a [href]="backPath" class="svc-btn svc-btn--outline">← Back</a><button type="submit" class="svc-btn svc-btn--primary">Save and Continue →</button></div>
        </form>
      </main>
      <ux4g-service-footer [leftText]="serviceName + ' • Government of India'" rightText="Address Details"></ux4g-service-footer>
    </div>
  `,
  styleUrls: ['../form-personal/form-personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAddressComponent {
  @Input() backPath = '/reference-service/form/personal';
  @Input() nextPath = '/reference-service/form/additional';
  @Input() serviceName = 'Government Service Platform';
  @Output() saved = new EventEmitter<any>();
  states = INDIAN_STATES;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      addressLine1: ['', Validators.required], addressLine2: [''],
      city: ['', Validators.required], district: ['', Validators.required],
      state: ['', Validators.required], pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });
  }
  get f() { return this.form.controls; }
  saveDraft(): void { this.saved.emit(this.form.value); }
  onContinue(): void { if (this.form.invalid) { this.form.markAllAsTouched(); return; } this.saved.emit(this.form.value); window.location.href = this.nextPath; }
}
