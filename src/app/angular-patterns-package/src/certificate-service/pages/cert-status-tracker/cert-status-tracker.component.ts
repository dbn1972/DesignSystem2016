import { Component } from '@angular/core';
import { StatusTrackerComponent } from '../../../services/components/status-tracker/status-tracker.component';

@Component({
  selector: 'cert-status-tracker-page',
  standalone: true,
  imports: [StatusTrackerComponent],
  template: `<ux4g-status-tracker applicationId="CERT-2026-MH-876543"></ux4g-status-tracker>`,
})
export class CertStatusTrackerComponent {}
