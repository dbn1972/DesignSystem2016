import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { MockApiService } from '../../mock-api/mock-api.service';
import { of, throwError } from 'rxjs';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let mockApi: jasmine.SpyObj<MockApiService>;

  beforeEach(async () => {
    mockApi = jasmine.createSpyObj('MockApiService', ['signIn']);

    await TestBed.configureTestingModule({
      imports: [SignInComponent, ReactiveFormsModule],
      providers: [{ provide: MockApiService, useValue: mockApi }],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when empty', () => {
    expect(component.form.valid).toBeFalse();
  });

  it('should validate email format', () => {
    component.f['email'].setValue('invalid');
    expect(component.f['email'].errors?.['email']).toBeTruthy();
  });

  it('should validate password min length', () => {
    component.f['password'].setValue('short');
    expect(component.f['password'].errors?.['minlength']).toBeTruthy();
  });

  it('should emit signedIn on successful submit', () => {
    const response = { success: true, message: 'OK', token: 'tok' };
    mockApi.signIn.and.returnValue(of(response as any));
    spyOn(component.signedIn, 'emit');

    component.form.setValue({ email: 'a@b.com', password: '12345678' });
    component.onSubmit();

    expect(mockApi.signIn).toHaveBeenCalled();
    expect(component.signedIn.emit).toHaveBeenCalledWith(response as any);
  });

  it('should show error on failed submit', () => {
    mockApi.signIn.and.returnValue(throwError(() => new Error('Bad creds')));

    component.form.setValue({ email: 'a@b.com', password: '12345678' });
    component.onSubmit();

    expect(component.error).toBe('Bad creds');
  });

  it('should not submit when form is invalid', () => {
    component.onSubmit();
    expect(mockApi.signIn).not.toHaveBeenCalled();
  });
});
