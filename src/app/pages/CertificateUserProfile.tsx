import { UserProfileService } from "../components/service/UserProfileService";

export default function CertificateUserProfile() {
  return (
    <UserProfileService
      category="Certificate Application Service"
      title="Account Settings"
      serviceName="Certificate Application Service"
      myApplicationsPath="/reference-service/certificate/my-applications"
      forgotPasswordPath="/reference-service/certificate/forgot-password"
      codeDownloadPath="/resources/service-code-downloads#certificate-user-profile"
    />
  );
}
