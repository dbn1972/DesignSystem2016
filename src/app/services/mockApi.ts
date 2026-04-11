// ============================================================================
// UX4G MOCK API LAYER
// ============================================================================
// Mock API services for government digital services
// Replace with actual API endpoints in production
//
// Last Updated: April 2026
// Version: 1.0.0
// ============================================================================

// ==================== TYPES ====================

export interface User {
  id: string;
  mobileNumber: string;
  email?: string;
  fullName: string;
  createdAt: string;
  verified: boolean;
}

export interface Application {
  id: string;
  applicationNumber: string;
  type: string;
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'rejected' | 'issued';
  submittedDate?: string;
  lastUpdated: string;
  formData?: any;
  documents?: Document[];
  payment?: Payment;
}

export interface Document {
  id: string;
  type: string;
  fileName: string;
  fileSize: number;
  uploadedDate: string;
  status: 'pending' | 'verified' | 'rejected';
}

export interface Payment {
  id: string;
  transactionId: string;
  amount: number;
  status: 'pending' | 'success' | 'failed';
  method: string;
  date: string;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  type: string;
  issuedDate: string;
  applicantName: string;
  downloadUrl: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ==================== MOCK DATA STORAGE ====================

let mockUsers: User[] = [];
let mockApplications: Application[] = [];
let mockCertificates: Certificate[] = [];
let currentUser: User | null = null;

// Initialize with sample data
const initializeMockData = () => {
  // Sample user
  mockUsers = [
    {
      id: "user-001",
      mobileNumber: "9876543210",
      email: "priya.sharma@example.com",
      fullName: "Priya Sharma",
      createdAt: "2026-01-15T10:30:00Z",
      verified: true
    }
  ];

  // Sample applications
  mockApplications = [
    {
      id: "app-001",
      applicationNumber: "CERT2026001234",
      type: "Residence Certificate",
      status: "approved",
      submittedDate: "2026-03-01T14:20:00Z",
      lastUpdated: "2026-03-05T09:15:00Z",
      payment: {
        id: "pay-001",
        transactionId: "TXN2026030112345",
        amount: 500,
        status: "success",
        method: "UPI",
        date: "2026-03-01T14:25:00Z"
      }
    },
    {
      id: "app-002",
      applicationNumber: "CERT2026001567",
      type: "Income Certificate",
      status: "under-review",
      submittedDate: "2026-04-05T11:00:00Z",
      lastUpdated: "2026-04-08T16:30:00Z",
      payment: {
        id: "pay-002",
        transactionId: "TXN2026040512346",
        amount: 500,
        status: "success",
        method: "Net Banking",
        date: "2026-04-05T11:05:00Z"
      }
    }
  ];

  // Sample certificate
  mockCertificates = [
    {
      id: "cert-001",
      certificateNumber: "RC/2026/001234",
      type: "Residence Certificate",
      issuedDate: "2026-03-10T10:00:00Z",
      applicantName: "Priya Sharma",
      downloadUrl: "/certificates/RC-2026-001234.pdf"
    }
  ];
};

// Initialize on import
initializeMockData();

// ==================== UTILITY FUNCTIONS ====================

const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

const generateId = (prefix: string) => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const generateApplicationNumber = () => {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
  return `CERT${year}${random}`;
};

const generateTransactionId = () => {
  const year = new Date().getFullYear();
  const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
  const day = new Date().getDate().toString().padStart(2, '0');
  const random = Math.floor(Math.random() * 99999).toString().padStart(5, '0');
  return `TXN${year}${month}${day}${random}`;
};

// ==================== AUTHENTICATION APIs ====================

export const authApi = {
  /**
   * Sign up a new user
   */
  signUp: async (data: {
    mobileNumber: string;
    email?: string;
    password: string;
    fullName: string;
  }): Promise<ApiResponse<{ userId: string; otpSent: boolean }>> => {
    await delay(800);

    // Check if user already exists
    const existingUser = mockUsers.find(u => u.mobileNumber === data.mobileNumber);
    if (existingUser) {
      return {
        success: false,
        error: "Mobile number is already registered"
      };
    }

    const newUser: User = {
      id: generateId('user'),
      mobileNumber: data.mobileNumber,
      email: data.email,
      fullName: data.fullName,
      createdAt: new Date().toISOString(),
      verified: false
    };

    mockUsers.push(newUser);

    return {
      success: true,
      data: {
        userId: newUser.id,
        otpSent: true
      },
      message: "OTP sent to your mobile number"
    };
  },

  /**
   * Verify OTP
   */
  verifyOTP: async (data: {
    mobileNumber: string;
    otp: string;
  }): Promise<ApiResponse<{ verified: boolean; token: string }>> => {
    await delay(600);

    // Mock OTP verification - accept "123456" as valid
    if (data.otp === "123456") {
      const user = mockUsers.find(u => u.mobileNumber === data.mobileNumber);
      if (user) {
        user.verified = true;
        currentUser = user;
      }

      return {
        success: true,
        data: {
          verified: true,
          token: `mock-token-${Date.now()}`
        },
        message: "OTP verified successfully"
      };
    }

    return {
      success: false,
      error: "Invalid OTP. Please try again."
    };
  },

  /**
   * Sign in
   */
  signIn: async (data: {
    mobileNumber: string;
    password: string;
  }): Promise<ApiResponse<{ user: User; token: string }>> => {
    await delay(700);

    const user = mockUsers.find(u => u.mobileNumber === data.mobileNumber);
    
    if (!user) {
      return {
        success: false,
        error: "The mobile number you entered is not registered"
      };
    }

    // Mock password check - accept any password for demo
    currentUser = user;

    return {
      success: true,
      data: {
        user,
        token: `mock-token-${Date.now()}`
      },
      message: "Signed in successfully"
    };
  },

  /**
   * Request password reset
   */
  requestPasswordReset: async (mobileNumber: string): Promise<ApiResponse<{ otpSent: boolean }>> => {
    await delay(600);

    const user = mockUsers.find(u => u.mobileNumber === mobileNumber);
    
    if (!user) {
      return {
        success: false,
        error: "Mobile number not found"
      };
    }

    return {
      success: true,
      data: { otpSent: true },
      message: "OTP sent to your registered mobile number"
    };
  },

  /**
   * Reset password
   */
  resetPassword: async (data: {
    mobileNumber: string;
    otp: string;
    newPassword: string;
  }): Promise<ApiResponse<{ success: boolean }>> => {
    await delay(700);

    if (data.otp !== "123456") {
      return {
        success: false,
        error: "Invalid OTP"
      };
    }

    return {
      success: true,
      data: { success: true },
      message: "Password reset successfully"
    };
  },

  /**
   * Get current user
   */
  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    await delay(300);

    if (!currentUser) {
      return {
        success: false,
        error: "Not authenticated"
      };
    }

    return {
      success: true,
      data: currentUser
    };
  },

  /**
   * Sign out
   */
  signOut: async (): Promise<ApiResponse<{ success: boolean }>> => {
    await delay(200);
    currentUser = null;
    return {
      success: true,
      data: { success: true }
    };
  }
};

// ==================== APPLICATION APIs ====================

export const applicationApi = {
  /**
   * Create new application
   */
  create: async (data: {
    type: string;
    formData?: any;
  }): Promise<ApiResponse<Application>> => {
    await delay(800);

    const newApplication: Application = {
      id: generateId('app'),
      applicationNumber: generateApplicationNumber(),
      type: data.type,
      status: 'draft',
      lastUpdated: new Date().toISOString(),
      formData: data.formData || {}
    };

    mockApplications.push(newApplication);

    return {
      success: true,
      data: newApplication,
      message: "Application created successfully"
    };
  },

  /**
   * Update application
   */
  update: async (id: string, data: {
    formData?: any;
    documents?: Document[];
  }): Promise<ApiResponse<Application>> => {
    await delay(600);

    const application = mockApplications.find(a => a.id === id);
    
    if (!application) {
      return {
        success: false,
        error: "Application not found"
      };
    }

    if (data.formData) {
      application.formData = { ...application.formData, ...data.formData };
    }
    
    if (data.documents) {
      application.documents = data.documents;
    }

    application.lastUpdated = new Date().toISOString();

    return {
      success: true,
      data: application,
      message: "Application updated successfully"
    };
  },

  /**
   * Submit application
   */
  submit: async (id: string): Promise<ApiResponse<Application>> => {
    await delay(1000);

    const application = mockApplications.find(a => a.id === id);
    
    if (!application) {
      return {
        success: false,
        error: "Application not found"
      };
    }

    application.status = 'submitted';
    application.submittedDate = new Date().toISOString();
    application.lastUpdated = new Date().toISOString();

    return {
      success: true,
      data: application,
      message: "Application submitted successfully"
    };
  },

  /**
   * Get application by ID
   */
  getById: async (id: string): Promise<ApiResponse<Application>> => {
    await delay(400);

    const application = mockApplications.find(a => a.id === id);
    
    if (!application) {
      return {
        success: false,
        error: "Application not found"
      };
    }

    return {
      success: true,
      data: application
    };
  },

  /**
   * Get user's applications
   */
  getUserApplications: async (): Promise<ApiResponse<Application[]>> => {
    await delay(500);

    return {
      success: true,
      data: mockApplications
    };
  },

  /**
   * Track application status
   */
  trackStatus: async (applicationNumber: string): Promise<ApiResponse<Application>> => {
    await delay(600);

    const application = mockApplications.find(
      a => a.applicationNumber === applicationNumber
    );
    
    if (!application) {
      return {
        success: false,
        error: "Application not found"
      };
    }

    return {
      success: true,
      data: application
    };
  }
};

// ==================== DOCUMENT APIs ====================

export const documentApi = {
  /**
   * Upload document
   */
  upload: async (file: File, documentType: string): Promise<ApiResponse<Document>> => {
    await delay(1200);

    // Simulate file upload
    const newDocument: Document = {
      id: generateId('doc'),
      type: documentType,
      fileName: file.name,
      fileSize: file.size,
      uploadedDate: new Date().toISOString(),
      status: 'pending'
    };

    return {
      success: true,
      data: newDocument,
      message: "Document uploaded successfully"
    };
  },

  /**
   * Delete document
   */
  delete: async (documentId: string): Promise<ApiResponse<{ success: boolean }>> => {
    await delay(400);

    return {
      success: true,
      data: { success: true },
      message: "Document deleted successfully"
    };
  }
};

// ==================== PAYMENT APIs ====================

export const paymentApi = {
  /**
   * Initiate payment
   */
  initiate: async (data: {
    applicationId: string;
    amount: number;
    method: string;
  }): Promise<ApiResponse<{ paymentUrl: string; paymentId: string }>> => {
    await delay(800);

    return {
      success: true,
      data: {
        paymentUrl: `/payment/${generateId('pay')}`,
        paymentId: generateId('pay')
      },
      message: "Payment initiated"
    };
  },

  /**
   * Process payment
   */
  process: async (data: {
    paymentId: string;
    applicationId: string;
    amount: number;
    method: string;
  }): Promise<ApiResponse<Payment>> => {
    await delay(1500);

    const payment: Payment = {
      id: data.paymentId,
      transactionId: generateTransactionId(),
      amount: data.amount,
      status: 'success',
      method: data.method,
      date: new Date().toISOString()
    };

    // Update application with payment
    const application = mockApplications.find(a => a.id === data.applicationId);
    if (application) {
      application.payment = payment;
    }

    return {
      success: true,
      data: payment,
      message: "Payment successful"
    };
  },

  /**
   * Verify payment
   */
  verify: async (transactionId: string): Promise<ApiResponse<Payment>> => {
    await delay(600);

    // Find payment by transaction ID
    const application = mockApplications.find(
      a => a.payment?.transactionId === transactionId
    );

    if (!application?.payment) {
      return {
        success: false,
        error: "Payment not found"
      };
    }

    return {
      success: true,
      data: application.payment
    };
  }
};

// ==================== CERTIFICATE APIs ====================

export const certificateApi = {
  /**
   * Get issued certificates
   */
  getCertificates: async (): Promise<ApiResponse<Certificate[]>> => {
    await delay(500);

    return {
      success: true,
      data: mockCertificates
    };
  },

  /**
   * Verify certificate
   */
  verify: async (certificateNumber: string): Promise<ApiResponse<Certificate>> => {
    await delay(700);

    const certificate = mockCertificates.find(
      c => c.certificateNumber === certificateNumber
    );

    if (!certificate) {
      return {
        success: false,
        error: "Certificate not found or invalid"
      };
    }

    return {
      success: true,
      data: certificate,
      message: "Certificate is valid"
    };
  },

  /**
   * Download certificate
   */
  download: async (certificateId: string): Promise<ApiResponse<{ url: string }>> => {
    await delay(600);

    const certificate = mockCertificates.find(c => c.id === certificateId);

    if (!certificate) {
      return {
        success: false,
        error: "Certificate not found"
      };
    }

    return {
      success: true,
      data: {
        url: certificate.downloadUrl
      },
      message: "Certificate downloaded"
    };
  }
};

// ==================== UTILITY APIs ====================

export const utilityApi = {
  /**
   * Check eligibility
   */
  checkEligibility: async (data: {
    certificateType: string;
    age?: number;
    residenceYears?: number;
  }): Promise<ApiResponse<{ eligible: boolean; reasons?: string[] }>> => {
    await delay(800);

    // Mock eligibility logic
    const eligible = true;
    const reasons: string[] = [];

    return {
      success: true,
      data: {
        eligible,
        reasons: eligible ? undefined : reasons
      }
    };
  },

  /**
   * Get states and districts
   */
  getStatesAndDistricts: async (): Promise<ApiResponse<{
    states: Array<{ code: string; name: string }>;
  }>> => {
    await delay(300);

    return {
      success: true,
      data: {
        states: [
          { code: "DL", name: "Delhi" },
          { code: "MH", name: "Maharashtra" },
          { code: "KA", name: "Karnataka" },
          { code: "TN", name: "Tamil Nadu" },
          { code: "UP", name: "Uttar Pradesh" },
          { code: "GJ", name: "Gujarat" },
          { code: "RJ", name: "Rajasthan" },
          { code: "WB", name: "West Bengal" }
        ]
      }
    };
  },

  /**
   * Send OTP
   */
  sendOTP: async (mobileNumber: string): Promise<ApiResponse<{ otpSent: boolean }>> => {
    await delay(600);

    return {
      success: true,
      data: { otpSent: true },
      message: `OTP sent to ${mobileNumber}`
    };
  }
};

// ==================== EXPORTS ====================

export const mockApi = {
  auth: authApi,
  application: applicationApi,
  document: documentApi,
  payment: paymentApi,
  certificate: certificateApi,
  utility: utilityApi
};

export default mockApi;
