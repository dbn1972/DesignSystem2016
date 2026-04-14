import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EligibilityComponent } from './eligibility.component';
import { MockApiService } from '../../mock-api/mock-api.service';
import { of } from 'rxjs';

describe('EligibilityComponent', () => {
  let component: EligibilityComponent;
  let fixture: ComponentFixture<EligibilityComponent>;
  let mockApi: jasmine.SpyObj<MockApiService>;

  beforeEach(async () => {
    mockApi = jasmine.createSpyObj('MockApiService', ['checkEligibility']);

    await TestBed.configureTestingModule({
      imports: [EligibilityComponent, ReactiveFormsModule],
      providers: [{ provide: MockApiService, useValue: mockApi }],
    }).compileComponents();

    fixture = TestBed.createComponent(EligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require all fields', () => {
    expect(component.form.valid).toBeFalse();
  });

  it('should emit eligible on positive result', () => {
    const res = { eligible: true, reason: 'OK', requirements: ['Aadhaar'], fees: 649 };
    mockApi.checkEligibility.and.returnValue(of(res));
    spyOn(component.eligible, 'emit');

    component.form.patchValue({ age: 25, nationality: 'Indian', state: 'Delhi', purpose: 'birth' });
    component.onSubmit();

    expect(component.eligible.emit).toHaveBeenCalledWith(res);
  });

  it('should not emit eligible on negative result', () => {
    const res = { eligible: false, reason: 'Too young', requirements: [], fees: 0 };
    mockApi.checkEligibility.and.returnValue(of(res));
    spyOn(component.eligible, 'emit');

    component.form.patchValue({ age: 10, nationality: 'Other', state: 'Delhi', purpose: 'birth' });
    component.onSubmit();

    expect(component.eligible.emit).not.toHaveBeenCalled();
  });
});
