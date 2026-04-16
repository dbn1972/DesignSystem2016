import { useState } from "react";
import { Link } from "react-router";
import { XCircle, AlertCircle, RefreshCw, HelpCircle, ArrowLeft, Clock, CheckCircle, Phone, Mail, FileText, CreditCard, Building2, Smartphone, Wallet, Shield, Info, ChevronRight, ArrowRight } from "lucide-react";

type FlowState = 
  | "payment-failed"
  | "retry-confirmation"
  | "processing-retry"
  | "success-after-retry"
  | "payment-pending"
  | "choose-alternate-method"
  | "support";

type FailureReason = 
  | "technical-error"
  | "bank-declined"
  | "timeout"
  | "insufficient-funds"
  | "user-cancelled"
  | "pending-unknown";

type PaymentMethod = 
  | "netbanking"
  | "card"
  | "upi"
  | "wallet"
  | "government-gateway"
  | null;

type TransactionDetails = {
  serviceName: string;
  applicationId: string;
  applicantName: string;
  amount: number;
  originalTransactionId: string;
  attemptNumber: number;
  timestamp: string;
};

const mockTransactionDetails: TransactionDetails = {
  serviceName: "Passport Application (Fresh)",
  applicationId: "PSP-2026-04-MH-987654",
  applicantName: "Priya Sharma",
  amount: 1800,
  originalTransactionId: "TXN20260410123456ABC",
  attemptNumber: 1,
  timestamp: "April 10, 2026, 2:45 PM"
};

export default function PaymentFailureRetryDemo() {
  const [flowState, setFlowState] = useState<FlowState>("payment-failed");
  const [failureReason, setFailureReason] = useState<FailureReason>("technical-error");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>("netbanking");
  const [retryTransactionId, setRetryTransactionId] = useState("");
  const [attemptNumber, setAttemptNumber] = useState(1);

  const resetDemo = () => {
    setFlowState("payment-failed");
    setFailureReason("technical-error");
    setSelectedPaymentMethod("netbanking");
    setRetryTransactionId("");
    setAttemptNumber(1);
  };

  const handleRetryPayment = () => {
    setFlowState("retry-confirmation");
  };

  const handleConfirmRetry = () => {
    setFlowState("processing-retry");
    // Simulate processing
    setTimeout(() => {
      const newTxnId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      setRetryTransactionId(newTxnId);
      setAttemptNumber(prev => prev + 1);
      setFlowState("success-after-retry");
    }, 2500);
  };

  const handleChooseFailureReason = (reason: FailureReason) => {
    setFailureReason(reason);
    setFlowState("payment-failed");
  };

  const handleSelectAlternateMethod = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
    setFlowState("processing-retry");
    setTimeout(() => {
      const newTxnId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      setRetryTransactionId(newTxnId);
      setAttemptNumber(prev => prev + 1);
      setFlowState("success-after-retry");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-red-100 border-2 border-red-300 rounded flex items-center justify-center">
                  <XCircle size={32} className="text-red-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Interactive Pattern Demo</div>
                  <h1 className="text-3xl font-bold text-foreground">Payment Failure and Retry Flow</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstration of payment failure recovery pattern. Shows complete recovery journey 
                from failure notification to successful retry with calm messaging, clear next steps, alternate 
                payment paths, pending transaction handling, and support escalation suitable for public service 
                fee collection.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  to="/pattern-library"
                  className="text-sm text-primary font-bold hover:underline flex items-center gap-1"
                >
                  <ArrowLeft size={16} />
                  Back to Pattern Library
                </Link>
                <button 
                  onClick={resetDemo}
                  className="text-sm text-muted-foreground font-bold hover:text-foreground flex items-center gap-1"
                >
                  Reset Demo
                </button>
              </div>
            </div>

            {/* State Indicator */}
            <StateIndicator currentState={flowState} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Interactive Flow - 8 columns */}
          <div className="col-span-8">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              
              {flowState === "payment-failed" && (
                <PaymentFailedScreen 
                  transactionDetails={mockTransactionDetails}
                  failureReason={failureReason}
                  paymentMethod={selectedPaymentMethod}
                  onRetry={handleRetryPayment}
                  onChooseAnotherMethod={() => setFlowState("choose-alternate-method")}
                  onViewPending={() => setFlowState("payment-pending")}
                  onHelp={() => setFlowState("support")}
                />
              )}

              {flowState === "retry-confirmation" && (
                <RetryConfirmationScreen
                  transactionDetails={mockTransactionDetails}
                  paymentMethod={selectedPaymentMethod}
                  onConfirm={handleConfirmRetry}
                  onCancel={() => setFlowState("payment-failed")}
                />
              )}

              {flowState === "processing-retry" && (
                <ProcessingRetryScreen attemptNumber={attemptNumber} />
              )}

              {flowState === "success-after-retry" && (
                <SuccessAfterRetryScreen
                  transactionDetails={mockTransactionDetails}
                  transactionId={retryTransactionId}
                  attemptNumber={attemptNumber}
                  onReturnToService={() => {/* Return */}}
                  onDownloadReceipt={() => {/* Download */}}
                />
              )}

              {flowState === "payment-pending" && (
                <PaymentPendingScreen
                  transactionDetails={mockTransactionDetails}
                  onCheckStatus={() => {/* Check */}}
                  onContactSupport={() => setFlowState("support")}
                  onBack={() => setFlowState("payment-failed")}
                />
              )}

              {flowState === "choose-alternate-method" && (
                <ChooseAlternateMethodScreen
                  transactionDetails={mockTransactionDetails}
                  currentMethod={selectedPaymentMethod}
                  onSelectMethod={handleSelectAlternateMethod}
                  onBack={() => setFlowState("payment-failed")}
                />
              )}

              {flowState === "support" && (
                <SupportScreen 
                  transactionDetails={mockTransactionDetails}
                  onBack={() => setFlowState("payment-failed")}
                />
              )}

            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            <FailureReasonSelector 
              currentReason={failureReason}
              onSelectReason={handleChooseFailureReason}
            />
            <StateExplainer currentState={flowState} />
            <RecoveryGuidance />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Payment Failure & Retry Interactive Demo</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== STATE INDICATOR ====================

function StateIndicator({ currentState }: { currentState: FlowState }) {
  const stateConfig = {
    "payment-failed": { label: "Payment Failed", color: "bg-red-100 text-red-700" },
    "retry-confirmation": { label: "Retry Confirm", color: "bg-orange-100 text-orange-700" },
    "processing-retry": { label: "Processing", color: "bg-yellow-100 text-yellow-700" },
    "success-after-retry": { label: "Success", color: "bg-green-100 text-green-700" },
    "payment-pending": { label: "Pending", color: "bg-blue-100 text-blue-700" },
    "choose-alternate-method": { label: "Alternate Method", color: "bg-purple-100 text-purple-700" },
    "support": { label: "Support", color: "bg-muted text-muted-foreground" }
  };

  const config = stateConfig[currentState];

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs font-bold text-muted-foreground text-right">CURRENT STATE</div>
      <div className={`px-4 py-3 ${config.color} border-2 border-border rounded font-bold text-sm text-center min-w-[180px]`}>
        {config.label}
      </div>
    </div>
  );
}

// ==================== PAYMENT FAILED SCREEN ====================

function PaymentFailedScreen({ 
  transactionDetails,
  failureReason,
  paymentMethod,
  onRetry,
  onChooseAnotherMethod,
  onViewPending,
  onHelp
}: { 
  transactionDetails: TransactionDetails;
  failureReason: FailureReason;
  paymentMethod: PaymentMethod;
  onRetry: () => void;
  onChooseAnotherMethod: () => void;
  onViewPending: () => void;
  onHelp: () => void;
}) {
  const getFailureDetails = () => {
    switch(failureReason) {
      case "technical-error":
        return {
          title: "Payment Could Not Be Processed",
          message: "We encountered a technical issue while processing your payment. This happens occasionally and is not related to your payment method or bank account.",
          reason: "Technical error during transaction processing",
          action: "Please try again. The issue is usually temporary.",
          canRetry: true,
          showPending: false
        };
      case "bank-declined":
        return {
          title: "Payment Declined by Bank",
          message: "Your bank or payment provider declined this transaction. This could be due to various reasons including daily transaction limits or security checks.",
          reason: "Transaction declined by issuing bank",
          action: "Please check with your bank or try a different payment method.",
          canRetry: false,
          showPending: false
        };
      case "timeout":
        return {
          title: "Payment Session Expired",
          message: "The payment session timed out before the transaction could be completed. This happens when the payment gateway doesn't receive a response within the expected time.",
          reason: "Payment gateway timeout",
          action: "Please retry the payment. Your account was not charged.",
          canRetry: true,
          showPending: false
        };
      case "insufficient-funds":
        return {
          title: "Insufficient Balance",
          message: "The payment could not be completed because there are insufficient funds in your account or wallet to complete this transaction.",
          reason: "Insufficient funds in payment account",
          action: "Please add funds to your account or use a different payment method.",
          canRetry: false,
          showPending: false
        };
      case "user-cancelled":
        return {
          title: "Payment Cancelled",
          message: "You cancelled the payment on the payment gateway. No amount has been charged from your account.",
          reason: "User cancelled the transaction",
          action: "You can retry the payment when ready.",
          canRetry: true,
          showPending: false
        };
      case "pending-unknown":
        return {
          title: "Payment Status Unknown",
          message: "We could not confirm the payment status. The transaction may be pending at your bank or payment provider. Please do not retry immediately.",
          reason: "Transaction status uncertain - may be pending",
          action: "Wait for 30 minutes, then check transaction status or contact support.",
          canRetry: false,
          showPending: true
        };
      default:
        return {
          title: "Payment Failed",
          message: "The payment could not be processed.",
          reason: "Unknown error",
          action: "Please try again.",
          canRetry: true,
          showPending: false
        };
    }
  };

  const failureDetails = getFailureDetails();

  return (
    <>
      <div className="bg-red-100 border-b-2 border-red-300 px-8 py-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
            <XCircle size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">{failureDetails.title}</h2>
            <p className="text-sm text-muted-foreground">
              {failureDetails.message}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Failure Information */}
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <AlertCircle size={20} className="text-orange-600" />
            What Happened
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <span className="font-bold text-foreground">Reason: </span>
              {failureDetails.reason}
            </div>
            <div>
              <span className="font-bold text-foreground">Next Step: </span>
              {failureDetails.action}
            </div>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Transaction Details</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <DetailItem label="Service" value={transactionDetails.serviceName} />
              <DetailItem label="Application ID" value={transactionDetails.applicationId} />
              <DetailItem label="Applicant Name" value={transactionDetails.applicantName} />
              <DetailItem label="Amount" value={`₹${transactionDetails.amount.toLocaleString('en-IN')}`} />
              <DetailItem label="Transaction ID" value={transactionDetails.originalTransactionId} />
              <DetailItem label="Attempt Time" value={transactionDetails.timestamp} />
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <h4 className="font-bold text-foreground mb-3 text-sm flex items-center gap-2">
            <Info size={18} className="text-primary" />
            Important
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <InfoPoint text="Your account was not charged for this failed transaction" />
            <InfoPoint text="You can safely retry the payment" />
            <InfoPoint text="If you see a debit, it will be automatically reversed within 5-7 working days" />
            <InfoPoint text="Keep this transaction ID for reference if contacting support" />
          </div>
        </div>

        {/* Recovery Actions */}
        <div className="space-y-3 pt-4">
          
          {failureDetails.canRetry && (
            <button
              onClick={onRetry}
              className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw size={18} />
              Retry Payment
            </button>
          )}

          <button
            onClick={onChooseAnotherMethod}
            className="w-full px-6 py-4 border-2 border-primary bg-card text-primary font-bold rounded text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
          >
            <CreditCard size={18} />
            Try Another Payment Method
          </button>

          {failureDetails.showPending && (
            <button
              onClick={onViewPending}
              className="w-full px-6 py-4 border-2 border-blue-300 bg-blue-50 text-blue-900 font-bold rounded text-sm hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
            >
              <Clock size={18} />
              Check Pending Status
            </button>
          )}

          <button
            onClick={onHelp}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center justify-center gap-2"
          >
            <HelpCircle size={18} />
            Contact Support
          </button>

        </div>

      </div>
    </>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground mb-1">{label}</div>
      <div className="text-sm font-bold text-foreground">{value}</div>
    </div>
  );
}

function InfoPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== RETRY CONFIRMATION SCREEN ====================

function RetryConfirmationScreen({
  transactionDetails,
  paymentMethod,
  onConfirm,
  onCancel
}: {
  transactionDetails: TransactionDetails;
  paymentMethod: PaymentMethod;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const getPaymentMethodDetails = () => {
    switch(paymentMethod) {
      case "netbanking":
        return { name: "Net Banking", icon: <Building2 size={24} className="text-blue-600" /> };
      case "card":
        return { name: "Debit / Credit Card", icon: <CreditCard size={24} className="text-green-600" /> };
      case "upi":
        return { name: "UPI", icon: <Smartphone size={24} className="text-purple-600" /> };
      case "wallet":
        return { name: "Digital Wallet", icon: <Wallet size={24} className="text-orange-600" /> };
      case "government-gateway":
        return { name: "Government Payment Gateway", icon: <Shield size={24} className="text-indigo-600" /> };
      default:
        return { name: "Unknown", icon: null };
    }
  };

  const methodDetails = getPaymentMethodDetails();

  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onCancel}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-orange-700 rounded flex items-center justify-center flex-shrink-0">
            <RefreshCw size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Confirm Retry Payment</h2>
            <p className="text-sm text-muted-foreground">
              You are about to retry the payment using the same payment method
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Retry Notice */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Before You Retry
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <InfoPoint text="This is a new transaction attempt - you will not be charged twice" />
            <InfoPoint text="Make sure the previous issue has been resolved before retrying" />
            <InfoPoint text="You can try a different payment method instead if preferred" />
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Payment Summary</h3>
          </div>
          <div className="p-6 space-y-4">
            
            {/* Service */}
            <div>
              <div className="text-xs text-muted-foreground mb-2">Service</div>
              <div className="font-bold text-foreground">{transactionDetails.serviceName}</div>
            </div>

            {/* Application ID */}
            <div>
              <div className="text-xs text-muted-foreground mb-2">Application ID</div>
              <div className="font-bold text-foreground font-mono">{transactionDetails.applicationId}</div>
            </div>

            {/* Amount */}
            <div>
              <div className="text-xs text-muted-foreground mb-2">Amount to Pay</div>
              <div className="font-bold text-foreground text-2xl">₹{transactionDetails.amount.toLocaleString('en-IN')}</div>
            </div>

            {/* Payment Method */}
            <div>
              <div className="text-xs text-muted-foreground mb-2">Payment Method</div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                  {methodDetails.icon}
                </div>
                <span className="font-bold text-foreground">{methodDetails.name}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-4">
          <button
            onClick={onConfirm}
            className="w-full px-6 py-4 bg-green-700 text-white font-bold rounded text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={18} />
            Confirm and Retry Payment
          </button>
          <button
            onClick={onCancel}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Cancel
          </button>
        </div>

      </div>
    </>
  );
}

// ==================== PROCESSING RETRY SCREEN ====================

function ProcessingRetryScreen({ attemptNumber }: { attemptNumber: number }) {
  return (
    <div className="p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <RefreshCw size={48} className="text-yellow-600 animate-spin" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Retrying Payment</h2>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          Please wait while we process your payment retry. Do not close this window or press the back button.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Attempt #{attemptNumber}
        </p>

        {/* Processing Animation */}
        <div className="bg-card border-2 border-border rounded-lg p-8 mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <ProcessingStep text="Connecting to payment gateway..." />
            <ProcessingStep text="Verifying transaction details..." />
            <ProcessingStep text="Processing payment retry..." />
            <ProcessingStep text="Confirming transaction..." />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground text-left">
              <p className="font-bold text-foreground mb-2">Please wait...</p>
              <p>This process typically takes 10-30 seconds. You will be automatically redirected once the payment is confirmed.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ProcessingStep({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// ==================== SUCCESS AFTER RETRY SCREEN ====================

function SuccessAfterRetryScreen({
  transactionDetails,
  transactionId,
  attemptNumber,
  onReturnToService,
  onDownloadReceipt
}: {
  transactionDetails: TransactionDetails;
  transactionId: string;
  attemptNumber: number;
  onReturnToService: () => void;
  onDownloadReceipt: () => void;
}) {
  const timestamp = new Date().toLocaleString('en-IN', { 
    dateStyle: 'long', 
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata'
  });

  return (
    <div className="p-12">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Payment Successful!</h2>
        <p className="text-muted-foreground mb-2 leading-relaxed text-center">
          Your payment has been successfully processed after retry. Thank you for your patience.
        </p>
        <p className="text-sm text-muted-foreground mb-8 text-center">
          Successful on attempt #{attemptNumber}
        </p>

        {/* Success Notice */}
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-5 mb-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 justify-center">
            <CheckCircle size={20} className="text-green-600" />
            Transaction Confirmed
          </h3>
          <p className="text-sm text-muted-foreground text-center">
            A confirmation receipt has been sent to your registered email and mobile number.
          </p>
        </div>

        {/* Transaction Details */}
        <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
          <h3 className="font-bold text-foreground mb-4 text-center">Transaction Details</h3>
          <div className="space-y-4">
            
            {/* Transaction ID */}
            <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded p-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">Transaction ID</div>
              <div className="text-lg font-bold text-foreground font-mono">{transactionId}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Save this for future reference
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border-2 border-border rounded p-4">
                <div className="text-xs text-muted-foreground mb-1">Amount Paid</div>
                <div className="font-bold text-foreground text-xl">₹{transactionDetails.amount.toLocaleString('en-IN')}</div>
              </div>
              <div className="bg-background border-2 border-border rounded p-4">
                <div className="text-xs text-muted-foreground mb-1">Payment Date & Time</div>
                <div className="font-bold text-foreground text-sm">{timestamp}</div>
              </div>
            </div>

            <div className="bg-background border-2 border-border rounded p-4">
              <div className="text-xs text-muted-foreground mb-1">Service</div>
              <div className="font-bold text-foreground">{transactionDetails.serviceName}</div>
            </div>

            <div className="bg-background border-2 border-border rounded p-4">
              <div className="text-xs text-muted-foreground mb-1">Application ID</div>
              <div className="font-bold text-foreground font-mono">{transactionDetails.applicationId}</div>
            </div>

          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5 mb-8">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What Happens Next
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
              <p>Your application will now proceed to the next stage</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
              <p>You will receive updates via SMS and email</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
              <p>Track your application status using your Application ID</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onDownloadReceipt}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            Download Payment Receipt
          </button>
          <button
            onClick={onReturnToService}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center justify-center gap-2"
          >
            <ArrowRight size={18} />
            Continue to Application Status
          </button>
        </div>

      </div>
    </div>
  );
}

// ==================== PAYMENT PENDING SCREEN ====================

function PaymentPendingScreen({
  transactionDetails,
  onCheckStatus,
  onContactSupport,
  onBack
}: {
  transactionDetails: TransactionDetails;
  onCheckStatus: () => void;
  onContactSupport: () => void;
  onBack: () => void;
}) {
  return (
    <>
      <div className="bg-blue-100 border-b-2 border-blue-300 px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
            <Clock size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Payment Status Pending</h2>
            <p className="text-sm text-muted-foreground">
              We are unable to confirm if your payment was successful or failed
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Pending Explanation */}
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <AlertCircle size={20} className="text-orange-600" />
            What This Means
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              Your payment may still be processing at your bank or payment provider. In some cases, 
              the status update can be delayed due to technical reasons.
            </p>
            <p className="font-bold text-foreground">
              Important: Do not retry the payment immediately to avoid duplicate charges.
            </p>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Transaction Details</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <DetailItem label="Service" value={transactionDetails.serviceName} />
              <DetailItem label="Application ID" value={transactionDetails.applicationId} />
              <DetailItem label="Amount" value={`₹${transactionDetails.amount.toLocaleString('en-IN')}`} />
              <DetailItem label="Transaction ID" value={transactionDetails.originalTransactionId} />
              <DetailItem label="Initiated At" value={transactionDetails.timestamp} />
              <DetailItem label="Status" value="Pending / Unknown" />
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <h4 className="font-bold text-foreground mb-3 text-sm flex items-center gap-2">
            <Info size={18} className="text-primary" />
            What You Should Do
          </h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <RecommendedStep 
              step="1" 
              text="Wait for at least 30 minutes before taking any action"
            />
            <RecommendedStep 
              step="2" 
              text="Check your email and SMS for payment confirmation"
            />
            <RecommendedStep 
              step="3" 
              text="Check your bank account or payment app for any debit"
            />
            <RecommendedStep 
              step="4" 
              text="Use 'Check Status' button below after 30 minutes"
            />
            <RecommendedStep 
              step="5" 
              text="If status is still unclear after 2 hours, contact support"
            />
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-5">
          <h4 className="font-bold text-red-900 mb-3 text-sm flex items-center gap-2">
            <AlertCircle size={18} className="text-red-600" />
            Do Not Retry Immediately
          </h4>
          <p className="text-sm text-muted-foreground">
            If you retry the payment while the previous transaction is still pending, you may be charged twice. 
            Wait for confirmation or contact support before attempting another payment.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-4">
          <button
            onClick={onCheckStatus}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={18} />
            Check Transaction Status
          </button>
          <button
            onClick={onContactSupport}
            className="w-full px-6 py-4 border-2 border-primary bg-card text-primary font-bold rounded text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
          >
            <HelpCircle size={18} />
            Contact Support
          </button>
          <button
            onClick={onBack}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Go Back
          </button>
        </div>

      </div>
    </>
  );
}

function RecommendedStep({ step, text }: { step: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
        {step}
      </div>
      <p className="text-muted-foreground flex-1">{text}</p>
    </div>
  );
}

// ==================== CHOOSE ALTERNATE METHOD SCREEN ====================

function ChooseAlternateMethodScreen({
  transactionDetails,
  currentMethod,
  onSelectMethod,
  onBack
}: {
  transactionDetails: TransactionDetails;
  currentMethod: PaymentMethod;
  onSelectMethod: (method: PaymentMethod) => void;
  onBack: () => void;
}) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back to Failed Payment
        </button>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-purple-700 rounded flex items-center justify-center flex-shrink-0">
            <CreditCard size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Try Another Payment Method</h2>
            <p className="text-sm text-muted-foreground">
              Choose a different payment method to complete your transaction
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Amount Display */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5 text-center">
          <div className="text-sm text-muted-foreground mb-1">Amount to Pay</div>
          <div className="text-4xl font-bold text-foreground">₹{transactionDetails.amount.toLocaleString('en-IN')}</div>
          <div className="text-xs text-muted-foreground mt-2">{transactionDetails.serviceName}</div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4">
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-bold text-foreground">Previous method: </span>
            {currentMethod === "netbanking" && "Net Banking"}
            {currentMethod === "card" && "Debit / Credit Card"}
            {currentMethod === "upi" && "UPI"}
            {currentMethod === "wallet" && "Digital Wallet"}
            {currentMethod === "government-gateway" && "Government Payment Gateway"}
          </p>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <h3 className="font-bold text-foreground mb-3">Select Alternative Payment Method</h3>

          {currentMethod !== "netbanking" && (
            <AlternatePaymentMethodCard
              icon={<Building2 size={24} className="text-blue-600" />}
              title="Net Banking"
              description="Pay securely using your bank's internet banking"
              onClick={() => onSelectMethod("netbanking")}
            />
          )}

          {currentMethod !== "card" && (
            <AlternatePaymentMethodCard
              icon={<CreditCard size={24} className="text-green-600" />}
              title="Debit / Credit Card"
              description="Pay using Visa, Mastercard, RuPay cards"
              onClick={() => onSelectMethod("card")}
            />
          )}

          {currentMethod !== "upi" && (
            <AlternatePaymentMethodCard
              icon={<Smartphone size={24} className="text-purple-600" />}
              title="UPI"
              description="Pay using any UPI app on your mobile"
              onClick={() => onSelectMethod("upi")}
            />
          )}

          {currentMethod !== "wallet" && (
            <AlternatePaymentMethodCard
              icon={<Wallet size={24} className="text-orange-600" />}
              title="Digital Wallet"
              description="Pay using your digital wallet balance"
              onClick={() => onSelectMethod("wallet")}
            />
          )}

          {currentMethod !== "government-gateway" && (
            <AlternatePaymentMethodCard
              icon={<Shield size={24} className="text-indigo-600" />}
              title="Government Payment Gateway"
              description="Official government payment channel"
              recommended
              onClick={() => onSelectMethod("government-gateway")}
            />
          )}
        </div>

      </div>
    </>
  );
}

function AlternatePaymentMethodCard({
  icon,
  title,
  description,
  recommended,
  onClick
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  recommended?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-card border-2 rounded-lg p-5 hover:border-primary hover:shadow-lg transition-all text-left group ${
        recommended ? 'border-green-300 bg-green-50' : 'border-border'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
          recommended ? 'bg-green-100' : 'bg-muted'
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{title}</h4>
            {recommended && (
              <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">
                RECOMMENDED
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <ChevronRight size={20} className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
}

// ==================== SUPPORT SCREEN ====================

function SupportScreen({
  transactionDetails,
  onBack
}: {
  transactionDetails: TransactionDetails;
  onBack: () => void;
}) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-blue-700 rounded flex items-center justify-center flex-shrink-0">
            <HelpCircle size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Payment Support</h2>
            <p className="text-sm text-muted-foreground">
              Get help with your failed or pending payment
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Transaction Reference */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Your Transaction Reference
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Transaction ID: </span>
              <span className="font-bold text-foreground font-mono">{transactionDetails.originalTransactionId}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Application ID: </span>
              <span className="font-bold text-foreground font-mono">{transactionDetails.applicationId}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Amount: </span>
              <span className="font-bold text-foreground">₹{transactionDetails.amount.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Keep these details ready when contacting support
          </p>
        </div>

        {/* Contact Methods */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Contact Support</h3>
          </div>
          <div className="p-6 space-y-4">
            
            {/* Helpline */}
            <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-foreground mb-1">Helpline</h4>
                <p className="text-sm text-muted-foreground mb-2">24x7 payment support helpline</p>
                <a href="tel:1800-111-1111" className="font-bold text-green-700 text-lg hover:underline">
                  1800-111-1111
                </a>
                <p className="text-xs text-muted-foreground mt-1">Toll-free from all networks</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-foreground mb-1">Email Support</h4>
                <p className="text-sm text-muted-foreground mb-2">Response within 24 hours</p>
                <a href="mailto:payment.support@passportindia.gov.in" className="font-bold text-blue-700 hover:underline">
                  payment.support@passportindia.gov.in
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Common Issues */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Common Issues & Solutions</h3>
          </div>
          <div className="p-6 space-y-4">
            
            <SupportFAQ
              question="Money was deducted but payment shows as failed"
              answer="If the payment failed, any deducted amount will be automatically reversed to your account within 5-7 working days. You can retry the payment safely."
            />

            <SupportFAQ
              question="Payment is stuck in pending status"
              answer="Wait for 30 minutes before taking any action. If still pending after 2 hours, contact our helpline with your transaction ID."
            />

            <SupportFAQ
              question="Will I be charged twice if I retry?"
              answer="No. Each retry is a new transaction. Failed transactions are not charged, and any temporary holds are automatically released."
            />

            <SupportFAQ
              question="How long does refund take for failed payment?"
              answer="Refunds for failed transactions are processed automatically within 5-7 working days. The exact time depends on your bank's processing time."
            />

          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-4">
          <a
            href="tel:1800-111-1111"
            className="w-full px-6 py-4 bg-green-700 text-white font-bold rounded text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Call Helpline Now
          </a>
          <button
            onClick={onBack}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Go Back
          </button>
        </div>

      </div>
    </>
  );
}

function SupportFAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-l-4 border-primary pl-4">
      <h4 className="font-bold text-foreground mb-2 text-sm">{question}</h4>
      <p className="text-sm text-muted-foreground">{answer}</p>
    </div>
  );
}

// ==================== FAILURE REASON SELECTOR ====================

function FailureReasonSelector({
  currentReason,
  onSelectReason
}: {
  currentReason: FailureReason;
  onSelectReason: (reason: FailureReason) => void;
}) {
  const reasons = [
    { value: "technical-error", label: "Technical Error" },
    { value: "bank-declined", label: "Bank Declined" },
    { value: "timeout", label: "Timeout" },
    { value: "insufficient-funds", label: "Insufficient Funds" },
    { value: "user-cancelled", label: "User Cancelled" },
    { value: "pending-unknown", label: "Pending / Unknown" }
  ];

  return (
    <div className="bg-background border-2 border-border rounded-lg p-5">
      <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
        <AlertCircle size={20} className="text-orange-600" />
        Simulate Failure Reason
      </h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p className="mb-2">Select a failure reason to simulate different scenarios:</p>
        <div className="space-y-1">
          {reasons.map(reason => (
            <button
              key={reason.value}
              onClick={() => onSelectReason(reason.value as FailureReason)}
              className={`w-full px-4 py-2 rounded ${
                currentReason === reason.value ? 'bg-primary text-white' : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              {reason.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== STATE EXPLAINER ====================

function StateExplainer({ currentState }: { currentState: FlowState }) {
  const stateDescriptions = {
    "payment-failed": "The payment attempt failed due to a specific reason. The user is informed about the failure and provided options to retry, choose an alternate payment method, or seek support.",
    "retry-confirmation": "The user is asked to confirm the retry of the payment. This step ensures the user is aware of the retry attempt and the payment method being used.",
    "processing-retry": "The payment retry is being processed. The user is shown a loading animation and a list of steps being performed to complete the retry.",
    "success-after-retry": "The payment retry was successful. The user is shown a success message along with transaction details and options to download the receipt or continue to the application status.",
    "payment-pending": "The payment status is pending and cannot be confirmed. The user is informed about the pending status and provided options to check the status, contact support, or go back.",
    "choose-alternate-method": "The user is asked to choose an alternate payment method to complete the transaction. This step is shown when the initial payment method failed.",
    "support": "The user is provided with support options to resolve the payment issue. This includes contact details for helpline and email support, as well as common issues and solutions."
  };

  const description = stateDescriptions[currentState];

  return (
    <div className="bg-background border-2 border-border rounded-lg p-5">
      <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
        <Info size={20} className="text-primary" />
        Current State Explanation
      </h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>{description}</p>
      </div>
    </div>
  );
}

// ==================== RECOVERY GUIDANCE ====================

function RecoveryGuidance() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-5">
      <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
        <Info size={20} className="text-primary" />
        Recovery Guidance
      </h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p className="mb-2">Follow these steps to recover from payment failure:</p>
        <div className="space-y-1">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
            <p>Check the failure reason and take appropriate action.</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
            <p>Retry the payment if possible.</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
            <p>Choose an alternate payment method if the initial method failed.</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
            <p>Contact support if the issue persists or if the payment status is pending.</p>
          </div>
        </div>
      </div>
    </div>
  );
}