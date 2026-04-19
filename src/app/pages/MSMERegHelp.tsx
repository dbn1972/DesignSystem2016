import { Link } from "react-router";
import { HelpCircle, Phone, Mail, FileText, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "What are the classification criteria for MSME?", answer: "MSMEs are classified based on investment in plant & machinery/equipment AND annual turnover. Micro: investment up to ₹1 Cr, turnover up to ₹5 Cr. Small: investment up to ₹10 Cr, turnover up to ₹50 Cr. Medium: investment up to ₹50 Cr, turnover up to ₹250 Cr. Both criteria must be met." },
  { question: "What are the benefits of Udyam Registration?", answer: "Benefits include: priority sector lending from banks, collateral-free loans under CGTMSE, subsidy on patent/trademark registration, protection against delayed payments, preference in government procurement, lower interest rates, and eligibility for various MSME schemes." },
  { question: "What happens during re-classification?", answer: "If your enterprise's investment or turnover changes and crosses the threshold for its current classification, it will be re-classified. Upward re-classification takes effect from the next financial year. Downward re-classification requires the enterprise to remain below the threshold for one year." },
  { question: "What is the difference between Udyam and UAM?", answer: "Udyam Registration replaced the earlier Udyog Aadhaar Memorandum (UAM) from July 1, 2020. Udyam is Aadhaar-based, permanent (no renewal needed), and linked to government databases for automatic verification. All existing UAM holders must migrate to Udyam." },
  { question: "Is Udyam Registration permanent?", answer: "Yes, Udyam Registration is permanent and does not require renewal. However, you must update your registration details if there are changes in investment, turnover, or other enterprise details." },
  { question: "Can a company register as MSME?", answer: "Yes, any enterprise — proprietorship, partnership, LLP, private limited company, cooperative society, or trust — can register under Udyam if it meets the investment and turnover criteria for Micro, Small, or Medium classification." },
  { question: "Is GSTIN mandatory for Udyam Registration?", answer: "GSTIN is not mandatory for Udyam Registration if the enterprise is exempt from GST. However, if the enterprise is registered under GST, the GSTIN must be provided during registration." },
  { question: "How is investment calculated for classification?", answer: "Investment is calculated based on the written down value of plant and machinery (for manufacturing) or equipment (for services) as per the Income Tax Act. Land, building, and furniture are excluded from the calculation." },
  { question: "Can I have multiple Udyam registrations?", answer: "No, an enterprise can have only one Udyam Registration. However, if a person owns multiple enterprises, each enterprise can be registered separately with its own Udyam Number." },
  { question: "What is the process for updating Udyam details?", answer: "You can update your Udyam Registration details online using your Udyam Number and Aadhaar OTP verification. Updates to investment, turnover, NIC code, address, and other details can be made at any time free of charge." },
];

export default function MSMERegHelp() {
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
              <div className="text-sm text-muted-foreground">MSME/Udyam Registration Service</div>
              <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ContactCard icon={<Phone size={24} className="text-blue-700" />} bg="bg-blue-100" title="MSME Helpline" detail="1800-111-7777" sub="Monday to Friday, 9:30 AM - 5:30 PM" />
          <ContactCard icon={<Mail size={24} className="text-green-700 dark:text-green-400" />} bg="bg-green-100" title="Email Support" detail="champion@gov.in" sub="Response within 24 hours" />
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
            <QuickLink to="/services/msme-registration/eligibility" text="Check Eligibility" />
            <QuickLink to="/services/msme-registration" text="Service Information" />
            <QuickLink to="/services/msme-registration/status-tracker" text="View Registration Status" />
            <QuickLink to="/services/msme-registration/start" text="Start New Registration" />
          </div>
        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>MSME/Udyam Registration Service • Ministry of MSME</div>
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
