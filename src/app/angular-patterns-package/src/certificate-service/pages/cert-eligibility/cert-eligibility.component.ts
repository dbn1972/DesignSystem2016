import { Component } from '@angular/core';
import { EligibilityComponent } from '../../../services/components/eligibility/eligibility.component';

@Component({
  selector: 'cert-eligibility-page',
  standalone: true,
  imports: [EligibilityComponent],
  template: `<ux4g-eligibility></ux4g-eligibility>`,
})
export class CertEligibilityComponent {}
