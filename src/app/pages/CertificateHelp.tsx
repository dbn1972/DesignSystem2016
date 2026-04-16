import { Link } from "react-router";
import { HelpCircle, Phone, Mail, FileText, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

export default function CertificateHelp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What documents are required for certificate application?",
      answer: "You need: (1) Identity Proof (Aadhaar/Voter ID/Passport), (2) Address Proof (Utility Bill/Rent Agreement), (3) Recent passport-size photograph, (4) Certificate-specific documents depending on the type of certificate you're applying for."
    },
    {
      question: "How long does it take to process my application?",
      answer: "Standard processing time is 7-10 working days from the date of submission. You will receive notifications at each stage of processing. Processing time may vary based on verification requirements and document completeness."
    },
    {
      question: "Can I track my application status?",
      answer: "Yes, you can track your application status using your unique reference number. Sign in to your account and visit the 'Track Application' section, or use the reference number on the status tracking page."
    },
    {
      question: "What if my application is rejected?",
      answer: "If your application is rejected, you will receive a notification with the reason for rejection. You can either correct the issues and resubmit, or file an appeal if you believe the rejection was incorrect."
    },
    {
      question: "Is the application fee refundable?",
      answer: "No, application fees are non-refundable once payment is successful. However, if payment was deducted but application was not created due to technical error, refund will be processed within 7-10 working days."
    },
    {
      question: "Can I edit my application after submission?",
      answer: "No, applications cannot be edited after final submission. However, if an officer requests corrections during review, you will be able to make specific changes. Please review your application carefully before submitting."
    },
    {
      question: "How do I download my certificate?",
      answer: "Once your certificate is approved and issued, you will receive an email and SMS notification. Sign in to your account, go to 'My Applications', and click 'Download Certificate' next to your approved application."
    },
    {
      question: "What if I forgot my password?",
      answer: "Click on 'Forgot Password' on the sign-in page. Enter your registered mobile number, verify the OTP sent to your mobile, and create a new password."
    },
    {
      question: "Can I apply on behalf of someone else?",
      answer: "Generally, applications must be submitted by the applicant themselves. However, for minors or persons with disabilities, a legal guardian or authorized representative can apply with proper documentation."
    },
    {
      question: "How do I verify the authenticity of my certificate?",
      answer: "Every certificate has a unique certificate number and QR code. You can verify authenticity by entering the certificate number on the verification page or by scanning the QR code."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-orange-600 rounded flex items-center justify-center">
              <HelpCircle size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Certificate Application Service</div>
              <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-card border-2 border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Phone size={24} className="text-blue-700" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Helpline</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Call our toll-free helpline for assistance
            </p>
            <a href="tel:1800-111-1111" className="text-lg font-bold text-primary hover:underline">
              1800-111-1111
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Monday to Saturday, 9 AM - 6 PM
            </p>
          </div>

          <div className="bg-card border-2 border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Mail size={24} className="text-green-700" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Send us your queries via email
            </p>
            <a href="mailto:support@certificate.gov.in" className="text-sm font-bold text-primary hover:underline break-all">
              support@certificate.gov.in
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Response within 24-48 hours
            </p>
          </div>

          <div className="bg-card border-2 border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FileText size={24} className="text-purple-700" />
            </div>
            <h3 className="font-bold text-foreground mb-2">User Guide</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Download detailed application guide
            </p>
            <button className="text-sm font-bold text-primary hover:underline">
              Download PDF Guide
            </button>
            <p className="text-xs text-muted-foreground mt-2">
              Step-by-step instructions
            </p>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          
          <div className="bg-muted border-b-2 border-border px-8 py-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            
            {/* Search */}
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-3 border-2 border-border rounded text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-4">
              {faqs
                .filter(faq => 
                  searchQuery === "" || 
                  faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isExpanded={expandedFAQ === index}
                    onToggle={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  />
                ))
              }
            </div>

            {searchQuery && faqs.filter(faq => 
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-500 mt-2">Try different keywords or contact support</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-8">
          <h3 className="font-bold text-foreground mb-6">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <QuickLink to="/reference-service/certificate/eligibility" text="Check Eligibility" />
            <QuickLink to="/reference-service/demo" text="Service Information" />
            <QuickLink to="/reference-service/certificate/status-tracker" text="Track Application Status" />
            <QuickLink to="/reference-service/demo" text="Download Forms" />
            <QuickLink to="/reference-service/demo" text="Fee Structure" />
            <QuickLink to="/reference-service/demo" text="Document Guidelines" />
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Certificate Application Service • Government of India</div>
            <div>
              <Link to="/reference-service/demo" className="text-primary font-bold hover:underline mr-6">
                Back to Service Home
              </Link>
              Help & Support
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function FAQItem({ 
  question, 
  answer, 
  isExpanded, 
  onToggle 
}: { 
  question: string; 
  answer: string; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-muted transition-colors"
      >
        <span className="font-bold text-foreground text-left">{question}</span>
        {isExpanded ? (
          <ChevronDown size={20} className="text-muted-foreground flex-shrink-0 ml-4" />
        ) : (
          <ChevronRight size={20} className="text-muted-foreground flex-shrink-0 ml-4" />
        )}
      </button>
      {isExpanded && (
        <div className="px-6 py-4 bg-card border-t-2 border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function QuickLink({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-4 py-3 border-2 border-border bg-card rounded hover:border-primary hover:bg-blue-50 transition-all group"
    >
      <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
      <span className="text-sm text-muted-foreground group-hover:text-foreground">{text}</span>
    </Link>
  );
}
