import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockApiService } from '../../mock-api/mock-api.service';
import { EligibilityResponse } from '../../models/service.models';
import { INDIAN_STATES } from '../../mock-api/mock-data';

@Component({
  selector: 'ux4g-eligibility',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EligibilityComponent {
  @Output() eligible = new EventEmitter<EligibilityResponse>();

  form: FormGroup;
  loading = false;
  result: EligibilityResponse | null = null;
  states = INDIAN_STATES;

  constructor(private fb: FormBuilder, private api: MockApiService) {
    this.form = this.fb.group({
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      nationality: ['Indian', [Validators.required]],
      state: ['', [Validators.required]],
      purpose: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.result = null;

    this.api.checkEligibility(this.form.value).subscribe({
      next: (res) => {
        this.loading = false;
        this.result = res;
        if (res.eligible) this.eligible.emit(res);
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
