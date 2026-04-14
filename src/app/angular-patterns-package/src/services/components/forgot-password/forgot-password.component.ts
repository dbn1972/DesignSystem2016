import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';
import { MockApiService } from '../../mock-api/mock-api.service';

@Component({
  selector: 'ux4g-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent {
  @Output() resetSent = new EventEmitter<string>();

  form: FormGroup;
  loading = false;
  error: string | null = null;
  success: string | null = null;

  constructor(private fb: FormBuilder, private api: MockApiService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.error = null;
    this.success = null;

    this.api.forgotPassword(this.form.value).subscribe({
      next: (res) => {
        this.loading = false;
        this.success = res.message;
        this.resetSent.emit(this.f['email'].value);
      },
      error: (err) => { this.loading = false; this.error = err.message; },
    });
  }
}
