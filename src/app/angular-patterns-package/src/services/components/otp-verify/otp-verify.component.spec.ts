import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpVerifyComponent } from './otp-verify.component';
import { MockApiService } from '../../mock-api/mock-api.service';
import { of } from 'rxjs';

describe('OtpVerifyComponent', () => {
  let component: OtpVerifyComponent;
  let fixture: ComponentFixture<OtpVerifyComponent>;
  let mockApi: jasmine.SpyObj<MockApiService>;

  beforeEach(async () => {
    mockApi = jasmine.createSpyObj('MockApiService', ['verifyOtp']);

    await TestBed.configureTestingModule({
      imports: [OtpVerifyComponent, ReactiveFormsModule],
      providers: [{ provide: MockApiService, useValue: mockApi }],
    }).compileComponents();

    fixture = TestBed.createComponent(OtpVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate 6-digit OTP', () => {
    component.f['otp'].setValue('123');
    expect(component.f['otp'].errors?.['pattern']).toBeTruthy();

    component.f['otp'].setValue('123456');
    expect(component.f['otp'].valid).toBeTrue();
  });

  it('should emit verified on success', () => {
    const res = { success: true, message: 'OK' };
    mockApi.verifyOtp.and.returnValue(of(res as any));
    spyOn(component.verified, 'emit');

    component.f['otp'].setValue('123456');
    component.onSubmit();

    expect(component.verified.emit).toHaveBeenCalledWith(res as any);
  });

  it('should start countdown on init', () => {
    expect(component.countdown).toBeLessThanOrEqual(30);
    expect(component.canResend).toBeFalse();
  });

  it('should enable resend after countdown', fakeAsync(() => {
    component.ngOnInit();
    tick(31000);
    expect(component.canResend).toBeTrue();
  }));
});
