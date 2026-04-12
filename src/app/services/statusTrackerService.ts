import {
  getLatestCertificateApplication,
  type CertificateApplication,
  type TimelineEvent,
} from "./certificateFlow";

export interface ServiceTrackingData {
  referenceNumber: string;
  statusLabel: string;
  certificateType: string;
  submittedDate: string;
  timeline: TimelineEvent[];
}

const fallbackTrackingData: ServiceTrackingData = {
  referenceNumber: "CERT-2026-04-456789",
  statusLabel: "Under Review",
  certificateType: "Income Certificate",
  submittedDate: "12 April 2026",
  timeline: [
    { label: "Application Submitted", date: "12 April 2026", completed: true },
    { label: "Payment Confirmed", date: "12 April 2026", completed: true },
    { label: "Assigned to Officer", date: "13 April 2026", completed: true },
    { label: "Under Review", date: "14 April 2026", completed: false, current: true },
    { label: "Approved & Certificate Issued", date: "Pending", completed: false },
  ],
};

const mapCertificateApp = (app: CertificateApplication): ServiceTrackingData => ({
  referenceNumber: app.referenceNumber,
  statusLabel: app.statusLabel,
  certificateType: app.certificateType,
  submittedDate: app.submittedDate,
  timeline: app.timeline,
});

export const loadServiceTrackingData = (): ServiceTrackingData | null => {
  const latest = getLatestCertificateApplication();
  if (!latest) return null;
  return mapCertificateApp(latest);
};

export const loadServiceTrackingDataOrFallback = (): ServiceTrackingData =>
  loadServiceTrackingData() || fallbackTrackingData;
