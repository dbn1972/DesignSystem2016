import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusTrackerComponent } from './status-tracker.component';
import { MockApiService } from '../../mock-api/mock-api.service';
import { of, throwError } from 'rxjs';
import { MOCK_APPLICATION_TRACKER } from '../../mock-api/mock-data';

describe('StatusTrackerComponent', () => {
  let component: StatusTrackerComponent;
  let fixture: ComponentFixture<StatusTrackerComponent>;
  let mockApi: jasmine.SpyObj<MockApiService>;

  beforeEach(async () => {
    mockApi = jasmine.createSpyObj('MockApiService', ['getApplicationStatus']);
    mockApi.getApplicationStatus.and.returnValue(of(MOCK_APPLICATION_TRACKER));

    await TestBed.configureTestingModule({
      imports: [StatusTrackerComponent],
      providers: [{ provide: MockApiService, useValue: mockApi }],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tracker data on init', () => {
    expect(component.tracker).toBeTruthy();
    expect(component.tracker?.applicationId).toBe('APP-2026-00142');
  });

  it('should show error on API failure', () => {
    mockApi.getApplicationStatus.and.returnValue(throwError(() => new Error('Network error')));
    component.ngOnInit();
    expect(component.error).toBe('Network error');
  });

  it('should return correct badge class', () => {
    expect(component.getStatusBadgeClass('approved')).toBe('ux4g-badge--success');
    expect(component.getStatusBadgeClass('rejected')).toBe('ux4g-badge--error');
    expect(component.getStatusBadgeClass('under-review')).toBe('ux4g-badge--warning');
  });
});
