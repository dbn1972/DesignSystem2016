import { Link } from "react-router";
import { HelpCircle, Phone, Mail, FileText, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "What is a CIN and when will I receive it?", answer: "CIN (Corporate Identity Number) is a unique 21-digit alphanumeric code assigned by the ROC upon incorporation. You will receive it within 15-20 working days after successful verification of all documents." },
  { question: "What is the difference between Private Limited and LLP?", answer: "A Private Limited Company has shareholders and directors with limited liability. An LLP (Limited Liability Partnership) combines partnership flexibility with limited liability protection. LLPs have lower compliance requirements but cannot raise equity funding." },
  { question: "Do I need a DIN before applying?", answer: "Yes, all proposed directors must have a valid Director Identification Number (DIN). You can apply for DIN through the MCA portal using SPICe+ form simultaneously with company incorporation." },
  { question: "What is a Digital Signature Certificate (DSC)?", answer: "DSC is the electronic equivalent of a physical signature. All directors must have a valid Class 2 or Class 3 DSC to digitally sign incorporation documents filed with MCA." },
  { question: "Can I change the company name after registration?", answer: "Yes, you can change the company name after incorporation by passing a special resolution and filing Form INC-24 with the ROC. A fresh Certificate of Incorporation will be issued." },
  { question: "What is the minimum capital required?", answer: "There is no minimum capital requirement for Private Limited or Public Limited companies. However, the authorized capital determines the registration fee payable to MCA." },
  { question: "How many directors are required?", answer: "Private Limited: minimum 2 directors. Public Limited: minimum 3 directors. OPC: minimum 1 director. LLP: minimum 2 designated partners." },
  { question: "What documents are needed for registered office?", answer: "You need proof of registered office address — rental agreement or ownership deed, NOC from the owner, and a utility bill (electricity/water/gas) not older than 2 months." },
  { question: "Can NRIs or foreign nationals be directors?", answer: "Yes, NRIs and foreign nationals can be directors. However, at least one director must be a resident of India (stayed in India for at least 182 days in the previous calendar year)." },
  { question: "What happens after incorporation?", answer: "After incorporation, you must: (1) Open a bank account in the company name, (2) Apply for GST registration if applicable, (3) Maintain statutory registers, (4) File annual returns and financial statements with ROC." },
];

export default function CompanyRegHelp() {
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
              <div className="text-sm text-muted-foreground">Company Registration Service</div>
              <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ContactCard icon={<Phone size={24} className="text-blue-700" />} bg="bg-blue-100" title="MCA Helpline" detail="1800-111-2222" sub="Monday to Saturday, 9 AM - 6 PM" />
          <ContactCard icon={<Mail size={24} className="text-green-700 dark:text-green-400" />} bg="bg-green-100" title="Email Support" detail="support@mca.gov.in" sub="Response within 24-48 hours" />
          <ContactCard icon={<FileText size={24} className="text-purple-700" />} bg="bg-purple-100" title="User Guide" detail="Download PDF Guide" sub="Step-by-step instructions" />
        </div>

        {/* FAQ */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-8 py-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
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

        {/* Quick Links */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 sm:p-6 lg:p-8">
          <h3 className="font-bold text-foreground mb-6">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuickLink to="/services/company-registration/eligibility" text="Check Eligibility" />
            <QuickLink to="/services/company-registration" text="Service Information" />
            <QuickLink to="/services/company-registration/status-tracker" text="Track Application Status" />
            <QuickLink to="/services/company-registration/start" text="Start New Registration" />
          </div>
        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Company Registration Service • Ministry of Corporate Affairs</div>
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
