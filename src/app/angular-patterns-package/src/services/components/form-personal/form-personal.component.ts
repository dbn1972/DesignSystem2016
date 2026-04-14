import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';

@Component({
  selector: 'ux4g-form-personal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  templateUrl: './form-personal.component.html',
  styleUrls: ['./form-personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPersonalComponent {
  @Input() backPath = '/reference-service/start';
  @Input() nextPath = '/reference-service/form/address';
  @Input() serviceName = 'Government Service Platform';
  @Output() saved = new EventEmitter<any>();

  form: FormGroup;
  draftSaved = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.email]],
      aadhaarNumber: ['', [Validators.pattern(/^\d{12}$/)]],
    });
  }

  get f() { return this.form.controls; }

  saveDraft(): void {
    this.draftSaved = true;
    this.saved.emit(this.form.value);
    setTimeout(() => this.draftSaved = false, 2500);
  }

  onContinue(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saved.emit(this.form.value);
    window.location.href = this.nextPath;
  }
}
