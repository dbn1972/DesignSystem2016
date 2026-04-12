import { ApplicationStartService } from "../components/service/ApplicationStartService";

export default function ReferenceServiceStart() {
  return (
    <ApplicationStartService
      category="Government Service Access"
      title="Start New Application"
      serviceName="Government Service Platform"
      applicantName="Service User"
      startFormPath="/reference-service/demo"
      helpPath="/patterns/contact-support/service-support"
      codeDownloadPath="/resources/service-code-downloads#reusable-start"
    />
  );
}
