import { Component } from '@angular/core';
import { UserProfileComponent } from '../../../services/components/user-profile/user-profile.component';

@Component({
  selector: 'cert-user-profile-page',
  standalone: true,
  imports: [UserProfileComponent],
  template: `<ux4g-user-profile myApplicationsPath="/reference-service/certificate/my-applications" forgotPasswordPath="/reference-service/certificate/forgot-password" serviceName="Certificate Application Service"></ux4g-user-profile>`,
})
export class CertUserProfileComponent {}
