import { useState } from "react";
import { Link } from "react-router";
import { CreditCard, CheckCircle, AlertCircle, Info, ChevronRight, HelpCircle, ArrowLeft, Shield, Clock, FileText, Download, Home, Smartphone, Wallet, Building2, QrCode, Lock, Eye, ArrowRight } from "lucide-react";

type FlowState = 
  | "fee-summary" 
  | "payment-method-selection"
  | "confirm-payment"
  | "processing"
  | "payment-success"
  | "receipt-view"
  | "help";

type PaymentMethod = 
  | "netbanking"
  | "card"
  | "upi"
  | "wallet"
  | "government-gateway"
  | null;

type FeeDetails = {
  serviceName: string;
  applicationId: string;
  applicantName: string;
  baseFee: number;
  serviceTax: number;
  processingFee: number;
  totalAmount: number;
  currency: string;
};

const mockFeeDetails: FeeDetails = {
  serviceName: "Passport Application (Fresh)",
  applicationId: "PSP-2026-04-MH-987654",
  applicantName: "Priya Sharma",
  baseFee: 1500,
  serviceTax: 270,
  processingFee: 30,
  totalAmount: 1800,
  currency: "INR"
};

export default function FeePaymentDemo() {
  const [flowState, setFlowState] = useState<FlowState>("fee-summary");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>(null);
  const [transactionId, setTransactionId] = useState("");
  const [paymentTimestamp, setPaymentTimestamp] = useState("");

  const resetDemo = () => {
    setFlowState("fee-summary");
    setSelectedPaymentMethod(null);
    setTransactionId("");
    setPaymentTimestamp("");
  };

  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
    setFlowState("confirm-payment");
  };

  const handleConfirmPayment = () => {
    setFlowState("processing");
    // Simulate processing delay
    setTimeout(() => {
      const txnId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      const timestamp = new Date().toLocaleString('en-IN', { 
        dateStyle: 'long', 
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata'
      });
      setTransactionId(txnId);
      setPaymentTimestamp(timestamp);
      setFlowState("payment-success");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <CreditCard size={32} className="text-blue-700" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Interactive Pattern Demo</div>
                  <h1 className="text-3xl font-bold text-foreground">Fee Payment Flow</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstration of government service fee payment pattern. Shows complete payment journey 
                from fee introduction to receipt generation with multiple payment methods, confirmation steps, and 
                secure transaction processing suitable for public service fee collection.
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Interactive Flow - 8 columns */}
          <div className="col-span-8">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              
              {flowState === "fee-summary" && (
                <FeeSummaryScreen 
                  feeDetails={mockFeeDetails}
                  onProceedToPayment={() => setFlowState("payment-method-selection")}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "payment-method-selection" && (
                <PaymentMethodSelectionScreen
                  feeDetails={mockFeeDetails}
                  onSelectMethod={handlePaymentMethodSelect}
                  onBack={() => setFlowState("fee-summary")}
                  onHelp={() => setFlowState("help")}
                />
              )}

              {flowState === "confirm-payment" && (
                <ConfirmPaymentScreen
                  feeDetails={mockFeeDetails}
                  paymentMethod={selectedPaymentMethod}
                  onConfirm={handleConfirmPayment}
                  onBack={() => setFlowState("payment-method-selection")}
                />
              )}

              {flowState === "processing" && (
                <ProcessingScreen />
              )}

              {flowState === "payment-success" && (
                <PaymentSuccessScreen
                  feeDetails={mockFeeDetails}
                  transactionId={transactionId}
                  paymentTimestamp={paymentTimestamp}
                  onViewReceipt={() => setFlowState("receipt-view")}
                  onReturnToService={() => {/* Return to service */}}
                />
              )}

              {flowState === "receipt-view" && (
                <ReceiptViewScreen
                  feeDetails={mockFeeDetails}
                  transactionId={transactionId}
                  paymentTimestamp={paymentTimestamp}
                  paymentMethod={selectedPaymentMethod}
                  onDownload={() => {/* Download */}}
                  onReturnToService={() => {/* Return */}}
                  onReset={resetDemo}
                />
              )}

              {flowState === "help" && (
                <HelpScreen 
                  onBack={() => setFlowState("fee-summary")}
                />
              )}

            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <div className="col-span-4 space-y-6">
            <PaymentInfo />
            <StateExplainer currentState={flowState} />
            <SecurityNotice />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Fee Payment Interactive Demo</div>
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
    "fee-summary": { label: "Fee Summary", color: "bg-blue-100 text-blue-700" },
    "payment-method-selection": { label: "Method Selection", color: "bg-purple-100 text-purple-700" },
    "confirm-payment": { label: "Confirm", color: "bg-orange-100 text-orange-700" },
    "processing": { label: "Processing", color: "bg-yellow-100 text-yellow-700" },
    "payment-success": { label: "Success", color: "bg-green-100 text-green-700" },
    "receipt-view": { label: "Receipt", color: "bg-green-100 text-green-700" },
    "help": { label: "Help", color: "bg-muted text-muted-foreground" }
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

// ==================== FEE SUMMARY SCREEN ====================

function FeeSummaryScreen({ 
  feeDetails,
  onProceedToPayment,
  onHelp
}: { 
  feeDetails: FeeDetails;
  onProceedToPayment: () => void;
  onHelp: () => void;
}) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
        <div className="bg-card px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-700 rounded flex items-center justify-center flex-shrink-0">
              <FileText size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">Application Fee Payment</h2>
              <p className="text-sm text-muted-foreground">
                Passport Seva • Ministry of External Affairs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Introduction */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Payment Required
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To complete your passport application, you need to pay the application processing fee. 
            This is a mandatory government fee for processing your application and issuing your passport.
          </p>
        </div>

        {/* Application Details */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Application Details</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <DetailItem label="Service" value={feeDetails.serviceName} />
              <DetailItem label="Application ID" value={feeDetails.applicationId} />
              <DetailItem label="Applicant Name" value={feeDetails.applicantName} />
              <DetailItem label="Application Date" value="April 9, 2026" />
            </div>
          </div>
        </div>

        {/* Fee Breakdown */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Fee Breakdown</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <FeeItem label="Passport Application Fee" amount={feeDetails.baseFee} />
              <FeeItem label="Service Tax (18%)" amount={feeDetails.serviceTax} />
              <FeeItem label="Payment Processing Fee" amount={feeDetails.processingFee} />
              <div className="border-t-2 border-border pt-3 mt-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground text-lg">Total Amount Payable</span>
                  <span className="font-bold text-foreground text-2xl">₹{feeDetails.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-5">
          <h4 className="font-bold text-orange-900 mb-3 text-sm flex items-center gap-2">
            <AlertCircle size={18} className="text-orange-600" />
            Important Information
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <InfoPoint text="Payment is non-refundable once the application is processed" />
            <InfoPoint text="Keep your transaction receipt for future reference" />
            <InfoPoint text="Payment must be completed within 24 hours of application submission" />
            <InfoPoint text="Use only official payment methods listed on next screen" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onHelp}
            className="px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Payment Help
          </button>
          <button
            onClick={onProceedToPayment}
            className="flex-1 px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            Proceed to Payment
            <ArrowRight size={18} />
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

function FeeItem({ label, amount }: { label: string; amount: number }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">₹{amount.toLocaleString('en-IN')}</span>
    </div>
  );
}

function InfoPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <ChevronRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

// ==================== PAYMENT METHOD SELECTION SCREEN ====================

function PaymentMethodSelectionScreen({
  feeDetails,
  onSelectMethod,
  onBack,
  onHelp
}: {
  feeDetails: FeeDetails;
  onSelectMethod: (method: PaymentMethod) => void;
  onBack: () => void;
  onHelp: () => void;
}) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back to Fee Summary
        </button>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-purple-700 rounded flex items-center justify-center flex-shrink-0">
            <CreditCard size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Select Payment Method</h2>
            <p className="text-sm text-muted-foreground">
              Choose your preferred payment method to complete the transaction
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Amount Display */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5 text-center">
          <div className="text-sm text-muted-foreground mb-1">Amount to Pay</div>
          <div className="text-4xl font-bold text-foreground">₹{feeDetails.totalAmount.toLocaleString('en-IN')}</div>
          <div className="text-xs text-muted-foreground mt-2">{feeDetails.serviceName}</div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <h3 className="font-bold text-foreground mb-3">Select Payment Method</h3>

          {/* Net Banking */}
          <PaymentMethodCard
            icon={<Building2 size={24} className="text-blue-600" />}
            title="Net Banking"
            description="Pay securely using your bank's internet banking"
            features={["All major banks supported", "Instant confirmation"]}
            onClick={() => onSelectMethod("netbanking")}
          />

          {/* Debit/Credit Card */}
          <PaymentMethodCard
            icon={<CreditCard size={24} className="text-green-600" />}
            title="Debit / Credit Card"
            description="Pay using Visa, Mastercard, RuPay cards"
            features={["Secure 3D authentication", "Instant payment"]}
            onClick={() => onSelectMethod("card")}
          />

          {/* UPI */}
          <PaymentMethodCard
            icon={<Smartphone size={24} className="text-purple-600" />}
            title="UPI"
            description="Pay using any UPI app on your mobile"
            features={["QR code or UPI ID", "No additional charges"]}
            onClick={() => onSelectMethod("upi")}
          />

          {/* Wallet */}
          <PaymentMethodCard
            icon={<Wallet size={24} className="text-orange-600" />}
            title="Digital Wallet"
            description="Pay using your digital wallet balance"
            features={["Quick payment", "Wallet balance required"]}
            onClick={() => onSelectMethod("wallet")}
          />

          {/* Government Gateway */}
          <PaymentMethodCard
            icon={<Shield size={24} className="text-indigo-600" />}
            title="Government Payment Gateway"
            description="Official government payment channel"
            features={["Secure government portal", "All payment modes"]}
            recommended
            onClick={() => onSelectMethod("government-gateway")}
          />
        </div>

        {/* Help Link */}
        <div className="text-center pt-4">
          <button
            onClick={onHelp}
            className="text-sm text-primary font-bold hover:underline inline-flex items-center gap-1"
          >
            <HelpCircle size={16} />
            Need help choosing a payment method?
          </button>
        </div>

      </div>
    </>
  );
}

function PaymentMethodCard({
  icon,
  title,
  description,
  features,
  recommended,
  onClick
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  recommended?: boolean;
  onClick?: () => void;
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
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <CheckCircle size={12} className="text-green-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <ChevronRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
}

// ==================== CONFIRM PAYMENT SCREEN ====================

function ConfirmPaymentScreen({
  feeDetails,
  paymentMethod,
  onConfirm,
  onBack
}: {
  feeDetails: FeeDetails;
  paymentMethod: PaymentMethod;
  onConfirm: () => void;
  onBack: () => void;
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
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Change Payment Method
        </button>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-orange-700 rounded flex items-center justify-center flex-shrink-0">
            <Eye size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Confirm Payment</h2>
            <p className="text-sm text-muted-foreground">
              Please review payment details before confirming
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Review Notice */}
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-5">
          <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
            <AlertCircle size={20} className="text-orange-600" />
            Review Before Payment
          </h3>
          <p className="text-sm text-muted-foreground">
            Please verify all details below before proceeding. Once payment is initiated, it cannot be cancelled.
          </p>
        </div>

        {/* Payment Summary */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Payment Summary</h3>
          </div>
          <div className="p-6 space-y-4">
            
            {/* Service Details */}
            <div>
              <div className="text-xs text-muted-foreground mb-2">Service</div>
              <div className="font-bold text-foreground">{feeDetails.serviceName}</div>
            </div>

            {/* Application ID */}
            <div>
              <div className="text-xs text-muted-foreground mb-2">Application ID</div>
              <div className="font-bold text-foreground font-mono">{feeDetails.applicationId}</div>
            </div>

            {/* Applicant */}
            <div>
              <div className="text-xs text-muted-foreground mb-2">Applicant Name</div>
              <div className="font-bold text-foreground">{feeDetails.applicantName}</div>
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

        {/* Amount Breakdown */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Amount Breakdown</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <FeeItem label="Passport Application Fee" amount={feeDetails.baseFee} />
              <FeeItem label="Service Tax (18%)" amount={feeDetails.serviceTax} />
              <FeeItem label="Payment Processing Fee" amount={feeDetails.processingFee} />
              <div className="border-t-2 border-border pt-3 mt-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground text-lg">Total Amount</span>
                  <span className="font-bold text-foreground text-2xl">₹{feeDetails.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-5">
          <h4 className="font-bold text-foreground mb-3 text-sm flex items-center gap-2">
            <Lock size={18} className="text-green-600" />
            Secure Payment
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>Your payment information is encrypted and secure</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>You will receive a confirmation receipt after successful payment</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>Transaction reference will be sent to your registered email and mobile</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onBack}
            className="px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Change Method
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-4 bg-green-700 text-white font-bold rounded text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <Lock size={18} />
            Proceed to Secure Payment
          </button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          By clicking "Proceed to Secure Payment", you will be redirected to the payment gateway
        </p>

      </div>
    </>
  );
}

// ==================== PROCESSING SCREEN ====================

function ProcessingScreen() {
  return (
    <div className="p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Clock size={48} className="text-yellow-600 animate-pulse" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3">Processing Payment</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Please wait while we process your payment. Do not close this window or press the back button.
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
            <ProcessingStep text="Processing payment..." />
            <ProcessingStep text="Generating receipt..." />
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

// ==================== PAYMENT SUCCESS SCREEN ====================

function PaymentSuccessScreen({
  feeDetails,
  transactionId,
  paymentTimestamp,
  onViewReceipt,
  onReturnToService
}: {
  feeDetails: FeeDetails;
  transactionId: string;
  paymentTimestamp: string;
  onViewReceipt: () => void;
  onReturnToService: () => void;
}) {
  return (
    <div className="p-12">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Payment Successful</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed text-center">
          Your payment has been successfully processed. A confirmation receipt has been sent to your 
          registered email and mobile number.
        </p>

        {/* Transaction Details */}
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-foreground mb-4 text-center">Transaction Details</h3>
          <div className="space-y-4">
            
            {/* Transaction ID */}
            <div className="bg-card border-2 border-green-300 rounded p-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">Transaction ID</div>
              <div className="text-lg font-bold text-foreground font-mono">{transactionId}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Save this for future reference
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border-2 border-border rounded p-4">
                <div className="text-xs text-muted-foreground mb-1">Amount Paid</div>
                <div className="font-bold text-foreground text-xl">₹{feeDetails.totalAmount.toLocaleString('en-IN')}</div>
              </div>
              <div className="bg-card border-2 border-border rounded p-4">
                <div className="text-xs text-muted-foreground mb-1">Payment Date & Time</div>
                <div className="font-bold text-foreground text-sm">{paymentTimestamp}</div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded p-4">
              <div className="text-xs text-muted-foreground mb-1">Service</div>
              <div className="font-bold text-foreground">{feeDetails.serviceName}</div>
            </div>

            <div className="bg-card border-2 border-border rounded p-4">
              <div className="text-xs text-muted-foreground mb-1">Application ID</div>
              <div className="font-bold text-foreground font-mono">{feeDetails.applicationId}</div>
            </div>

          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            What Happens Next
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <NextStepItem
              step="1"
              text="Your application will now proceed to document verification stage"
            />
            <NextStepItem
              step="2"
              text="You will receive updates via SMS and email on your application status"
            />
            <NextStepItem
              step="3"
              text="You can track your application status using your Application ID"
            />
            <NextStepItem
              step="4"
              text="Your passport will be issued upon successful verification and approval"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onViewReceipt}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            View Payment Receipt
          </button>
          <button
            onClick={onReturnToService}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Return to Passport Seva
          </button>
        </div>

      </div>
    </div>
  );
}

function NextStepItem({ step, text }: { step: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
        {step}
      </div>
      <p className="text-muted-foreground flex-1">{text}</p>
    </div>
  );
}

// ==================== RECEIPT VIEW SCREEN ====================

function ReceiptViewScreen({
  feeDetails,
  transactionId,
  paymentTimestamp,
  paymentMethod,
  onDownload,
  onReturnToService,
  onReset
}: {
  feeDetails: FeeDetails;
  transactionId: string;
  paymentTimestamp: string;
  paymentMethod: PaymentMethod;
  onDownload: () => void;
  onReturnToService: () => void;
  onReset: () => void;
}) {
  const getPaymentMethodName = () => {
    switch(paymentMethod) {
      case "netbanking": return "Net Banking";
      case "card": return "Debit / Credit Card";
      case "upi": return "UPI";
      case "wallet": return "Digital Wallet";
      case "government-gateway": return "Government Payment Gateway";
      default: return "Unknown";
    }
  };

  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-green-700 rounded flex items-center justify-center flex-shrink-0">
            <FileText size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Payment Receipt</h2>
            <p className="text-sm text-muted-foreground">
              Official payment confirmation for government service fee
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        
        {/* Receipt */}
        <div className="bg-card border-2 border-border rounded-lg p-8 mb-6">
          
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b-2 border-border">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FF9933] to-[#138808] rounded-full mx-auto mb-4 flex items-center justify-center">
              <Shield size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Government of India</h3>
            <p className="text-sm text-muted-foreground">Ministry of External Affairs • Passport Seva</p>
            <div className="mt-4 inline-block px-4 py-2 bg-green-100 border-2 border-green-300 rounded">
              <span className="text-sm font-bold text-green-800">PAYMENT SUCCESSFUL</span>
            </div>
          </div>

          {/* Receipt Details */}
          <div className="space-y-6">
            
            <ReceiptRow label="Transaction ID" value={transactionId} highlight />
            <ReceiptRow label="Transaction Date & Time" value={paymentTimestamp} />
            <ReceiptRow label="Service" value={feeDetails.serviceName} />
            <ReceiptRow label="Application ID" value={feeDetails.applicationId} />
            <ReceiptRow label="Applicant Name" value={feeDetails.applicantName} />
            <ReceiptRow label="Payment Method" value={getPaymentMethodName()} />

            {/* Amount Breakdown */}
            <div className="border-t-2 border-border pt-4">
              <div className="font-bold text-foreground mb-3">Fee Breakdown</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Passport Application Fee</span>
                  <span className="font-bold text-foreground">₹{feeDetails.baseFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Tax (18%)</span>
                  <span className="font-bold text-foreground">₹{feeDetails.serviceTax.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Processing Fee</span>
                  <span className="font-bold text-foreground">₹{feeDetails.processingFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between pt-3 border-t-2 border-border">
                  <span className="font-bold text-foreground text-lg">Total Amount Paid</span>
                  <span className="font-bold text-foreground text-xl">₹{feeDetails.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="border-t-2 border-border pt-4 text-xs text-muted-foreground">
              <p className="mb-2">
                This is a computer-generated receipt and does not require a signature.
              </p>
              <p>
                For any queries, please contact Passport Seva helpline or visit the nearest Passport Seva Kendra.
              </p>
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onDownload}
            className="w-full px-6 py-4 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Receipt (PDF)
          </button>
          <button
            onClick={onReturnToService}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Return to Passport Seva
          </button>
          <button
            onClick={onReset}
            className="w-full px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background"
          >
            Reset Demo
          </button>
        </div>

      </div>
    </>
  );
}

function ReceiptRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`flex justify-between items-start py-2 ${highlight ? 'bg-blue-50 -mx-4 px-4 rounded' : ''}`}>
      <span className="text-sm text-muted-foreground">{label}:</span>
      <span className={`text-sm text-right ${highlight ? 'font-bold text-foreground font-mono' : 'font-bold text-foreground'}`}>
        {value}
      </span>
    </div>
  );
}

// ==================== HELP SCREEN ====================

function HelpScreen({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className="bg-muted border-b-2 border-border px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft size={16} />
          Back to Fee Summary
        </button>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
            <HelpCircle size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">Payment Help</h2>
            <p className="text-sm text-muted-foreground">
              Get assistance with the payment process
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        
        {/* Introduction */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Payment Help
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you encounter any issues during the payment process, please refer to the following guidelines or contact our support team.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <h3 className="font-bold text-foreground mb-3">Payment Methods</h3>

          {/* Net Banking */}
          <PaymentMethodCard
            icon={<Building2 size={24} className="text-blue-600" />}
            title="Net Banking"
            description="Pay securely using your bank's internet banking"
            features={["All major banks supported", "Instant confirmation"]}
          />

          {/* Debit/Credit Card */}
          <PaymentMethodCard
            icon={<CreditCard size={24} className="text-green-600" />}
            title="Debit / Credit Card"
            description="Pay using Visa, Mastercard, RuPay cards"
            features={["Secure 3D authentication", "Instant payment"]}
          />

          {/* UPI */}
          <PaymentMethodCard
            icon={<Smartphone size={24} className="text-purple-600" />}
            title="UPI"
            description="Pay using any UPI app on your mobile"
            features={["QR code or UPI ID", "No additional charges"]}
          />

          {/* Wallet */}
          <PaymentMethodCard
            icon={<Wallet size={24} className="text-orange-600" />}
            title="Digital Wallet"
            description="Pay using your digital wallet balance"
            features={["Quick payment", "Wallet balance required"]}
          />

          {/* Government Gateway */}
          <PaymentMethodCard
            icon={<Shield size={24} className="text-indigo-600" />}
            title="Government Payment Gateway"
            description="Official government payment channel"
            features={["Secure government portal", "All payment modes"]}
            recommended
          />
        </div>

        {/* Troubleshooting */}
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-5">
          <h4 className="font-bold text-orange-900 mb-3 text-sm flex items-center gap-2">
            <AlertCircle size={18} className="text-orange-600" />
            Troubleshooting
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <InfoPoint text="If you face any issues, try refreshing the page" />
            <InfoPoint text="Check your internet connection and try again" />
            <InfoPoint text="Contact your bank or payment service provider for assistance" />
            <InfoPoint text="Ensure your browser is up to date and cookies are enabled" />
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground text-left">
              <p className="font-bold text-foreground mb-2">Need Further Assistance?</p>
              <p>Contact Passport Seva helpline or visit the nearest Passport Seva Kendra for more help.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

// ==================== PAYMENT INFO ====================

function PaymentInfo() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-5">
      <h3 className="font-bold text-foreground mb-3">Payment Information</h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <InfoPoint text="Payment is non-refundable once the application is processed" />
        <InfoPoint text="Keep your transaction receipt for future reference" />
        <InfoPoint text="Payment must be completed within 24 hours of application submission" />
        <InfoPoint text="Use only official payment methods listed on next screen" />
      </div>
    </div>
  );
}

// ==================== STATE EXPLAINER ====================

function StateExplainer({ currentState }: { currentState: FlowState }) {
  const stateConfig = {
    "fee-summary": { label: "Fee Summary", description: "Review the fee details and proceed to payment method selection." },
    "payment-method-selection": { label: "Method Selection", description: "Choose your preferred payment method to complete the transaction." },
    "confirm-payment": { label: "Confirm", description: "Review payment details before confirming the transaction." },
    "processing": { label: "Processing", description: "Your payment is being processed. Please wait." },
    "payment-success": { label: "Success", description: "Payment has been successfully processed. View the receipt." },
    "receipt-view": { label: "Receipt", description: "View and download the payment receipt." },
    "help": { label: "Help", description: "Get assistance with the payment process." }
  };

  const config = stateConfig[currentState];

  return (
    <div className="bg-background border-2 border-border rounded-lg p-5">
      <h3 className="font-bold text-foreground mb-3">Current State: {config.label}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {config.description}
      </p>
    </div>
  );
}

// ==================== SECURITY NOTICE ====================

function SecurityNotice() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-5">
      <h3 className="font-bold text-foreground mb-3">Security Notice</h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <InfoPoint text="Your payment information is encrypted and secure" />
        <InfoPoint text="You will receive a confirmation receipt after successful payment" />
        <InfoPoint text="Transaction reference will be sent to your registered email and mobile" />
      </div>
    </div>
  );
}