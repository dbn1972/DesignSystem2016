import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { MockApiService } from '../../mock-api/mock-api.service';
import { of, throwError } from 'rxjs';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let mockApi: jasmine.SpyObj<MockApiService>;

  beforeEach(async () => {
    mockApi = jasmine.createSpyObj('MockApiService', ['signUp']);

    await TestBed.configureTestingModule({
      imports: [SignUpComponent, ReactiveFormsModule],
      providers: [{ provide: MockApiService, useValue: mockApi }],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require all fields', () => {
    expect(component.form.valid).toBeFalse();
  });

  it('should validate mobile pattern', () => {
    component.f['mobile'].setValue('12345');
    expect(component.f['mobile'].errors?.['pattern']).toBeTruthy();
  });

  it('should detect password mismatch', () => {
    component.f['password'].setValue('password1');
    component.f['confirmPassword'].setValue('password2');
    expect(component.form.errors?.['passwordMismatch']).toBeTruthy();
  });

  it('should emit accountCreated on success', () => {
    const res = { success: true, message: 'OK', referenceId: 'REF-1' };
    mockApi.signUp.and.returnValue(of(res as any));
    spyOn(component.accountCreated, 'emit');

    component.form.patchValue({
      fullName: 'Test User',
      email: 'a@b.com',
      mobile: '9876543210',
      password: '12345678',
      confirmPassword: '12345678',
      acceptTerms: true,
    });
    component.onSubmit();

    expect(component.accountCreated.emit).toHaveBeenCalledWith(res as any);
  });
});
