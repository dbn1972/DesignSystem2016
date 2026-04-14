import { CertificatePageData } from '../models/certificate.models';

export const CERTIFICATE_PAGE: CertificatePageData = {
  title: 'Certificate Application Service',
  subtitle: 'Government of India',
  description: [
    'This is a generic government certificate application service that can be used for various types of certificates including birth certificates, death certificates, income certificates, domicile certificates, and caste certificates.',
    'The service provides a complete digital experience from application submission to certificate download, with real-time status tracking and notifications at every step.',
  ],

  quickInfo: [
    { icon: '⏱', label: 'Processing Time', value: '7–10 Days', color: '#2563eb' },
    { icon: '📄', label: 'Application Mode', value: '100% Online', color: '#16a34a' },
    { icon: '👥', label: 'Eligibility', value: 'All Citizens', color: '#9333ea' },
    { icon: '🏅', label: 'Certificate Type', value: 'Digital + Print', color: '#ea580c' },
  ],

  eligibility: [
    { text: 'Must be an Indian citizen' },
    { text: 'Must be 18 years of age or above' },
    { text: 'Must have valid identity proof (Aadhaar, Voter ID, Passport)' },
    { text: 'Must have valid address proof' },
    { text: 'Must meet specific requirements for certificate type' },
  ],

  mandatoryDocs: [
    { text: 'Identity Proof (Aadhaar / Voter ID / Passport)', optional: false },
    { text: 'Address Proof (Utility Bill / Rent Agreement)', optional: false },
    { text: 'Recent Passport Size Photograph', optional: false },
    { text: 'Application Form (System Generated)', optional: false },
  ],

  additionalDocs: [
    { text: 'Income Proof (for income certificate)', optional: true },
    { text: 'Caste Certificate (for caste certificate renewal)', optional: true },
    { text: 'Birth/Death Registration (for related certificates)', optional: true },
    { text: 'Any other supporting documents', optional: true },
  ],

  processSteps: [
    { number: 1, title: 'Create Account or Sign In', description: 'Register or log in using your mobile number and OTP verification' },
    { number: 2, title: 'Fill Application Form', description: 'Complete the multi-step form with personal, address, and certificate-specific details' },
    { number: 3, title: 'Upload Documents', description: 'Upload all required documents as per the checklist provided' },
    { number: 4, title: 'Review and Declare', description: 'Review your application, provide consent, and make declaration of accuracy' },
    { number: 5, title: 'Make Payment (if applicable)', description: 'Pay the application fee using online payment methods' },
    { number: 6, title: 'Submit Application', description: 'Submit your application and receive a unique reference number' },
    { number: 7, title: 'Track Status', description: 'Track your application status online using the reference number' },
    { number: 8, title: 'Download Certificate', description: 'Once approved, download your digital certificate' },
  ],

  beforeApply: [
    { text: 'Keep all required documents ready in digital format' },
    { text: 'Ensure your mobile number is active for OTP verification' },
    { text: 'Have a valid email address for notifications' },
    { text: 'Application cannot be edited after submission' },
  ],

  afterSubmission: [
    { text: 'You will receive SMS and email confirmation' },
    { text: 'Track status using your reference number' },
    { text: 'Officer may request additional documents if needed' },
    { text: 'Certificate will be available for download upon approval' },
  ],

  faqs: [
    {
      question: 'How long does it take to process a certificate application?',
      answer: 'Standard processing takes 7–10 working days. Tatkal (urgent) processing is available for select certificate types and takes 2–3 working days with an additional fee.',
      open: false,
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept UPI (GPay, PhonePe, BHIM), Net Banking, Debit/Credit Cards, and select digital wallets. All transactions are secured with 256-bit encryption.',
      open: false,
    },
    {
      question: 'Can I edit my application after submission?',
      answer: 'No, applications cannot be edited after submission. If you need to make corrections, you can submit a correction request through the "My Applications" section after the application is processed.',
      open: false,
    },
    {
      question: 'How do I track my application status?',
      answer: 'You can track your application using the reference number provided at submission. Go to the Status Tracker page and enter your reference number. You will also receive SMS and email updates at each stage.',
      open: false,
    },
    {
      question: 'What if my application is rejected?',
      answer: 'If your application is rejected, you will receive a notification with the reason. You can file an appeal within 30 days of rejection or submit a fresh application after addressing the issues.',
      open: false,
    },
    {
      question: 'Is the digital certificate legally valid?',
      answer: 'Yes, digital certificates issued through this service are digitally signed and legally valid as per the Information Technology Act, 2000. They can be verified online using the QR code or certificate number.',
      open: false,
    },
  ],
};
