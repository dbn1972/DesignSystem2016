/**
 * UX4G Angular Services — Mock Data
 */
import {
  UserProfile,
  DocumentRequirement,
  ApplicationTracker,
  PaymentSummary,
} from '../models/service.models';

export const MOCK_USER: UserProfile = {
  id: 'USR-2026-001',
  fullName: 'Rajesh Kumar',
  email: 'rajesh.kumar@example.com',
  mobile: '+91 98765 43210',
  aadhaar: 'XXXX-XXXX-1234',
  role: 'citizen',
};

export const MOCK_DOCUMENT_REQUIREMENTS: DocumentRequirement[] = [
  {
    id: 'doc-aadhaar',
    label: 'Aadhaar Card',
    description: 'Self-attested copy of Aadhaar card (front and back)',
    required: true,
    acceptedFormats: ['pdf', 'jpg', 'png'],
    maxSizeMB: 5,
  },
  {
    id: 'doc-photo',
    label: 'Passport Photo',
    description: 'Recent passport-size photograph (white background)',
    required: true,
    acceptedFormats: ['jpg', 'png'],
    maxSizeMB: 2,
  },
  {
    id: 'doc-address',
    label: 'Address Proof',
    description: 'Utility bill, bank statement, or voter ID',
    required: true,
    acceptedFormats: ['pdf', 'jpg', 'png'],
    maxSizeMB: 5,
  },
  {
    id: 'doc-supporting',
    label: 'Supporting Document',
    description: 'Any additional supporting document',
    required: false,
    acceptedFormats: ['pdf', 'jpg', 'png'],
    maxSizeMB: 10,
  },
];

export const MOCK_PAYMENT_SUMMARY: PaymentSummary = {
  applicationFee: 500,
  processingFee: 50,
  gst: 99,
  total: 649,
  currency: 'INR',
};

export const MOCK_APPLICATION_TRACKER: ApplicationTracker = {
  applicationId: 'APP-2026-00142',
  applicantName: 'Rajesh Kumar',
  serviceType: 'Birth Certificate',
  currentStatus: 'under-review',
  submittedDate: '2026-04-10T10:30:00Z',
  lastUpdated: '2026-04-12T14:15:00Z',
  estimatedCompletion: '2026-04-20',
  timeline: [
    {
      status: 'draft',
      timestamp: '2026-04-09T09:00:00Z',
      description: 'Application started',
    },
    {
      status: 'submitted',
      timestamp: '2026-04-10T10:30:00Z',
      description: 'Application submitted successfully',
    },
    {
      status: 'payment-pending',
      timestamp: '2026-04-10T10:31:00Z',
      description: 'Payment of ₹649 received via UPI',
    },
    {
      status: 'under-review',
      timestamp: '2026-04-12T14:15:00Z',
      description: 'Application assigned to reviewing officer',
      officer: 'Smt. Priya Sharma',
    },
  ],
};

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
];
