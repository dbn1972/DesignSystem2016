/**
 * UX4G Certificate Service — Data Models
 */

export interface QuickInfoItem {
  icon: string;
  label: string;
  value: string;
  color: string;
}

export interface EligibilityCriterion {
  text: string;
}

export interface DocumentRequirement {
  text: string;
  optional: boolean;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ImportantInfo {
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

export interface CertificatePageData {
  title: string;
  subtitle: string;
  description: string[];
  quickInfo: QuickInfoItem[];
  eligibility: EligibilityCriterion[];
  mandatoryDocs: DocumentRequirement[];
  additionalDocs: DocumentRequirement[];
  processSteps: ProcessStep[];
  beforeApply: ImportantInfo[];
  afterSubmission: ImportantInfo[];
  faqs: FaqItem[];
}
