import { Link } from "react-router";
import { HelpCircle, Phone, Mail, FileText, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "What is the validity of an IEC?", answer: "IEC is valid for a lifetime and does not require renewal. Once issued, it remains active unless surrendered by the holder or cancelled by DGFT. However, IEC holders must update their IEC details annually on the DGFT portal between April and June." },
  { question: "How can I modify my IEC details?", answer: "You can modify your IEC details online through the DGFT portal by filing an IEC modification application. Changes such as address, bank details, directors/partners, and other particulars can be updated free of charge." },
  { question: "How do I surrender my IEC?", answer: "To surrender your IEC, log in to the DGFT portal and file an IEC surrender application. Once surrendered, the IEC becomes inactive and you will not be able to conduct any import/export transactions. You can apply for reactivation later if needed." },
  { question: "Who is exempt from obtaining an IEC?", answer: "IEC is not required for: (1) Import/export by Central or State Government ministries/departments, (2) Import/export for personal use not connected with trade, (3) Import/export by persons notified by DGFT. Also, persons importing/exporting goods for personal use valued up to ₹25,000 are exempt." },
  { question: "Is IEC required for exporting services?", answer: "Yes, IEC is required for exporting services from India. However, service providers who receive payment in Indian Rupees or who are providing services to SEZ developers/units may have different requirements. It is advisable to obtain an IEC for all service export activities." },
  { question: "How do I use the DGFT online portal?", answer: "Visit the DGFT portal (dgft.gov.in) and register using your PAN and Aadhaar. After registration, you can apply for IEC, modify existing IEC, track application status, download certificates, and manage all foreign trade-related activities online." },
  { question: "What is the processing time for IEC?", answer: "IEC applications are typically processed within 3-5 working days from the date of submission, provided all documents are in order and no clarification is required from the applicant." },
  { question: "Can I have multiple IECs?", answer: "No, a business entity can hold only one IEC. If you have multiple branches, all branches operate under the same IEC number. The IEC is linked to the PAN of the entity." },
  { question: "What documents are needed for IEC?", answer: "You need: PAN of the entity, Aadhaar of the applicant, cancelled cheque or bank certificate, address proof of business premises, passport-size photograph, and a digital signature certificate (DSC)." },
  { question: "What is the fee for IEC registration?", answer: "The government fee for IEC registration is ₹500 (one-time). This is a non-refundable fee payable online at the time of application submission. IEC modification and surrender are free of charge." },
];

export default function IECRegHelp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const filtered = faqs.filter(
    (f) => !searchQuery || f.question.toLowerCase().includes(searchQuery.toLowerCase()) || f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-orange-600 rounded flex items-center justify-center">
              <HelpCircle size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">IEC Registration Service</div>
              <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ContactCard icon={<Phone size={24} className="text-blue-700" />} bg="bg-blue-100" title="DGFT Helpline" detail="1800-111-550" sub="Monday to Friday, 9:30 AM - 6 PM" />
          <ContactCard icon={<Mail size={24} className="text-green-700 dark:text-green-400" />} bg="bg-green-100" title="Email Support" detail="dgft-helpdesk@gov.in" sub="Response within 24-48 hours" />
          <ContactCard icon={<FileText size={24} className="text-purple-700" />} bg="bg-purple-100" title="User Guide" detail="Download PDF Guide" sub="Step-by-step instructions" />
        </div>

        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-8 py-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for answers..." className="w-full pl-12 pr-4 py-3 border-2 border-border rounded text-sm focus:outline-none focus:border-primary" />
            </div>
          </div>
          <div className="p-8 space-y-4">
            {filtered.map((faq, i) => (
              <div key={i} className="border-2 border-border rounded-lg overflow-hidden">
                <button onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-muted transition-colors">
                  <span className="font-bold text-foreground text-left">{faq.question}</span>
                  {expandedFAQ === i ? <ChevronDown size={20} className="text-muted-foreground flex-shrink-0 ml-4" /> : <ChevronRight size={20} className="text-muted-foreground flex-shrink-0 ml-4" />}
                </button>
                {expandedFAQ === i && (
                  <div className="px-6 py-4 bg-card border-t-2 border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                <p className="text-sm text-muted-foreground mt-2">Try different keywords or contact support</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 sm:p-6 lg:p-8">
          <h3 className="font-bold text-foreground mb-6">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuickLink to="/services/iec-registration/eligibility" text="Check Eligibility" />
            <QuickLink to="/services/iec-registration" text="Service Information" />
            <QuickLink to="/services/iec-registration/status-tracker" text="Track Application Status" />
            <QuickLink to="/services/iec-registration/start" text="Start New Application" />
          </div>
        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>IEC Registration Service • Directorate General of Foreign Trade</div>
            <div>Help & Support</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactCard({ icon, bg, title, detail, sub }: { icon: React.ReactNode; bg: string; title: string; detail: string; sub: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center mb-4`}>{icon}</div>
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm font-bold text-primary">{detail}</p>
      <p className="text-xs text-muted-foreground mt-2">{sub}</p>
    </div>
  );
}

function QuickLink({ to, text }: { to: string; text: string }) {
  return (
    <Link to={to} className="flex items-center gap-2 px-4 py-3 border-2 border-border bg-card rounded hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-all group">
      <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
      <span className="text-sm text-muted-foreground group-hover:text-foreground">{text}</span>
    </Link>
  );
}
