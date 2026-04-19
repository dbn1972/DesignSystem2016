import { Link } from "react-router";
import { HelpCircle, Phone, Mail, FileText, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "What is a GSTIN and what is its format?", answer: "GSTIN (GST Identification Number) is a unique 15-digit alphanumeric code assigned to every registered taxpayer. Format: 2 digits (state code) + 10 digits (PAN) + 1 digit (entity number) + 1 letter (Z by default) + 1 check digit." },
  { question: "What is the Composition Scheme?", answer: "The Composition Scheme is a simplified tax scheme for small taxpayers with turnover up to ₹1.5 crore (₹75 lakh for special category states). Under this scheme, you pay tax at a fixed rate on turnover and file quarterly returns instead of monthly." },
  { question: "What is Input Tax Credit (ITC)?", answer: "Input Tax Credit allows you to reduce the GST you have already paid on inputs (purchases) from the GST you are liable to pay on outputs (sales). ITC is available only to regular taxpayers, not composition dealers." },
  { question: "What are the return filing deadlines?", answer: "GSTR-1 (outward supplies): 11th of next month. GSTR-3B (summary return): 20th of next month. GSTR-9 (annual return): 31st December of next financial year. Composition dealers file CMP-08 quarterly." },
  { question: "How can I cancel my GST registration?", answer: "You can apply for cancellation through Form GST REG-16 on the GST portal. Cancellation may be initiated by the taxpayer, tax officer, or legal heir. Outstanding tax liabilities must be cleared before cancellation." },
  { question: "Is GST registration mandatory for e-commerce sellers?", answer: "Yes, GST registration is mandatory for all e-commerce operators and sellers making supplies through e-commerce platforms, regardless of turnover threshold." },
  { question: "Can I have multiple GST registrations?", answer: "Yes, you can obtain separate GST registrations for different business verticals within the same state, or for businesses operating in different states. Each registration will have a unique GSTIN." },
  { question: "What happens if I don't register for GST?", answer: "Operating without GST registration when required is an offence. Penalties include 100% of tax due or ₹10,000 (whichever is higher). You also cannot collect GST from customers or claim input tax credit." },
  { question: "How long does GST registration take?", answer: "GST registration typically takes 7-10 working days from the date of application submission, provided all documents are in order and no clarification is required from the applicant." },
  { question: "What is the threshold for GST registration?", answer: "For goods: ₹40 lakh annual turnover (₹20 lakh for special category states). For services: ₹20 lakh (₹10 lakh for special category states). Certain categories like e-commerce sellers must register regardless of turnover." },
];

export default function GSTRegHelp() {
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
              <div className="text-sm text-muted-foreground">GST Registration Service</div>
              <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ContactCard icon={<Phone size={24} className="text-blue-700" />} bg="bg-blue-100" title="GST Helpline" detail="1800-103-4786" sub="Monday to Saturday, 9 AM - 9 PM" />
          <ContactCard icon={<Mail size={24} className="text-green-700 dark:text-green-400" />} bg="bg-green-100" title="Email Support" detail="helpdesk@gst.gov.in" sub="Response within 24-48 hours" />
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
            <QuickLink to="/services/gst-registration/eligibility" text="Check Eligibility" />
            <QuickLink to="/services/gst-registration" text="Service Information" />
            <QuickLink to="/services/gst-registration/status-tracker" text="Track Application Status" />
            <QuickLink to="/services/gst-registration/start" text="Start New Registration" />
          </div>
        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>GST Registration Service • Central Board of Indirect Taxes and Customs</div>
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
