import { ApplicationStartService } from "../components/service/ApplicationStartService";

export default function CertificateStart() {
  return (
    <ApplicationStartService
      category="Certificate Application Service"
      title="Start New Application"
      serviceName="Certificate Application Service"
      applicantName="Priya Sharma"
      startFormPath="/reference-service/certificate/form/personal"
      helpPath="/reference-service/certificate/help"
      codeDownloadPath="/resources/service-code-downloads#certificate-start"
    />
  );
}
