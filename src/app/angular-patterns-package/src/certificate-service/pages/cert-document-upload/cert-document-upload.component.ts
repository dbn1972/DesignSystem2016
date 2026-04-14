import { Component } from '@angular/core';
import { DocumentUploadComponent } from '../../../services/components/document-upload/document-upload.component';

@Component({
  selector: 'cert-document-upload-page',
  standalone: true,
  imports: [DocumentUploadComponent],
  template: `<ux4g-document-upload></ux4g-document-upload>`,
})
export class CertDocumentUploadComponent {}
