import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentUploadComponent } from './document-upload.component';
import { MockApiService } from '../../mock-api/mock-api.service';
import { of } from 'rxjs';
import { MOCK_DOCUMENT_REQUIREMENTS } from '../../mock-api/mock-data';

describe('DocumentUploadComponent', () => {
  let component: DocumentUploadComponent;
  let fixture: ComponentFixture<DocumentUploadComponent>;
  let mockApi: jasmine.SpyObj<MockApiService>;

  beforeEach(async () => {
    mockApi = jasmine.createSpyObj('MockApiService', ['getDocumentRequirements', 'uploadDocument']);
    mockApi.getDocumentRequirements.and.returnValue(of(MOCK_DOCUMENT_REQUIREMENTS));

    await TestBed.configureTestingModule({
      imports: [DocumentUploadComponent],
      providers: [{ provide: MockApiService, useValue: mockApi }],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load document requirements on init', () => {
    expect(component.requirements.length).toBe(4);
  });

  it('should format file sizes correctly', () => {
    expect(component.formatSize(500)).toBe('500 B');
    expect(component.formatSize(2048)).toBe('2.0 KB');
    expect(component.formatSize(5 * 1024 * 1024)).toBe('5.0 MB');
  });

  it('should track uploads in map', () => {
    const mockDoc = {
      id: 'DOC-1',
      name: 'test.pdf',
      type: 'application/pdf',
      size: 1024,
      status: 'uploaded' as const,
      progress: 100,
    };
    component.uploads.set('doc-aadhaar', mockDoc);
    expect(component.getUpload('doc-aadhaar')).toBeTruthy();
  });

  it('should remove uploads', () => {
    component.uploads.set('doc-aadhaar', {} as any);
    component.removeUpload('doc-aadhaar');
    expect(component.getUpload('doc-aadhaar')).toBeUndefined();
  });
});
