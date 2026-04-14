import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';
import { MockApiService } from '../../mock-api/mock-api.service';
import { of, throwError } from 'rxjs';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;
  let mockApi: jasmine.SpyObj<MockApiService>;

  beforeEach(async () => {
    mockApi = jasmine.createSpyObj('MockApiService', ['getPaymentSummary', 'processPayment']);
    mockApi.getPaymentSummary.and.returnValue(
      of({ applicationFee: 500, processingFee: 50, gst: 99, total: 649, currency: 'INR' })
    );

    await TestBed.configureTestingModule({
      imports: [PaymentComponent, ReactiveFormsModule],
      providers: [{ provide: MockApiService, useValue: mockApi }],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    component.applicationId = 'APP-001';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load payment summary on init', () => {
    expect(mockApi.getPaymentSummary).toHaveBeenCalledWith('APP-001');
    expect(component.summary?.total).toBe(649);
  });

  it('should emit paymentComplete on success', () => {
    const res = { success: true, transactionId: 'TXN-1', message: 'OK', status: 'success' as const };
    mockApi.processPayment.and.returnValue(of(res));
    spyOn(component.paymentComplete, 'emit');

    component.onSubmit();

    expect(component.paymentComplete.emit).toHaveBeenCalledWith(res);
  });

  it('should show error on payment failure', () => {
    mockApi.processPayment.and.returnValue(throwError(() => new Error('Insufficient balance')));

    component.onSubmit();

    expect(component.error).toBe('Insufficient balance');
  });
});
