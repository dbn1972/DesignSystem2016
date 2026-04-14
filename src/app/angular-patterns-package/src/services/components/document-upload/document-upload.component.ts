import { Component, EventEmitter, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockApiService } from '../../mock-api/mock-api.service';
import { DocumentRequirement, UploadedDocument } from '../../models/service.models';

@Component({
  selector: 'ux4g-document-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentUploadComponent implements OnInit {
  @Output() allUploaded = new EventEmitter<UploadedDocument[]>();

  requirements: DocumentRequirement[] = [];
  uploads: Map<string, UploadedDocument> = new Map();
  loading = true;
  uploading: string | null = null;
  error: string | null = null;

  constructor(private api: MockApiService) {}

  ngOnInit(): void {
    this.api.getDocumentRequirements().subscribe({
      next: (reqs) => {
        this.requirements = reqs;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  getUpload(reqId: string): UploadedDocument | undefined {
    return this.uploads.get(reqId);
  }

  onFileSelected(event: Event, reqId: string): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const req = this.requirements.find((r) => r.id === reqId);
    if (!req) return;

    // Validate size
    if (file.size > req.maxSizeMB * 1024 * 1024) {
      this.error = `${file.name} exceeds ${req.maxSizeMB}MB limit`;
      return;
    }

    this.error = null;
    this.uploading = reqId;

    this.api.uploadDocument(file, reqId).subscribe({
      next: (doc) => {
        this.uploads.set(reqId, doc);
        this.uploading = null;
        this.checkAllUploaded();
      },
      error: (err) => {
        this.uploading = null;
        this.error = err.message;
      },
    });
  }

  removeUpload(reqId: string): void {
    this.uploads.delete(reqId);
  }

  formatSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  private checkAllUploaded(): void {
    const requiredIds = this.requirements.filter((r) => r.required).map((r) => r.id);
    const allDone = requiredIds.every((id) => this.uploads.has(id));
    if (allDone) {
      this.allUploaded.emit(Array.from(this.uploads.values()));
    }
  }
}
