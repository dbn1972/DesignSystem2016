import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockApiService } from '../../mock-api/mock-api.service';
import { PaymentSummary, PaymentResponse, PaymentMethod } from '../../models/service.models';

@Component({
  selector: 'ux4g-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent implements OnInit {
  @Input() applicationId = '';
  @Output() paymentComplete = new EventEmitter<PaymentResponse>();

  form: FormGroup;
  summary: PaymentSummary | null = null;
  loading = false;
  loadingSummary = true;
  error: string | null = null;
  result: PaymentResponse | null = null;

  paymentMethods: { value: PaymentMethod; label: string; icon: string }[] = [
    { value: 'upi', label: 'UPI (GPay / PhonePe / BHIM)', icon: '📱' },
    { value: 'netbanking', label: 'Net Banking', icon: '🏦' },
    { value: 'card', label: 'Debit / Credit Card', icon: '💳' },
    { value: 'wallet', label: 'Digital Wallet', icon: '👛' },
  ];

  constructor(private fb: FormBuilder, private api: MockApiService) {
    this.form = this.fb.group({
      method: ['upi', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.api.getPaymentSummary(this.applicationId).subscribe({
      next: (s) => {
        this.summary = s;
        this.loadingSummary = false;
      },
      error: () => {
        this.loadingSummary = false;
      },
    });
  }

  onSubmit(): void {
    if (!this.summary || this.form.invalid) return;
    this.loading = true;
    this.error = null;
    this.result = null;

    this.api
      .processPayment({
        applicationId: this.applicationId,
        method: this.form.value.method,
        amount: this.summary.total,
      })
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.result = res;
          this.paymentComplete.emit(res);
        },
        error: (err) => {
          this.loading = false;
          this.error = err.message;
        },
      });
  }
}
