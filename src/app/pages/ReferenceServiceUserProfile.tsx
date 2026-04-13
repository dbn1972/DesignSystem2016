import { UserProfileService } from "../components/service/UserProfileService";

export default function ReferenceServiceUserProfile() {
  return (
    <UserProfileService
      category="Government Service Access"
      title="Account Settings"
      serviceName="Government Service Platform"
      myApplicationsPath="/reference-service/overview"
      forgotPasswordPath="/reference-service/forgot-password"
      codeDownloadPath="/resources/service-code-downloads#reusable-user-profile"
    />
  );
}
