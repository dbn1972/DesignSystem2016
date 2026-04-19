import { Link } from "react-router";
import { HelpCircle, Phone, Mail, FileText, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "What are the different trade license categories?", answer: "Trade licenses are categorized based on business type: Food & Beverage, Retail, Manufacturing, Services, Healthcare, and Education. Each category has specific compliance requirements and fee structures based on the nature and scale of operations." },
  { question: "How do I renew my trade license?", answer: "Trade licenses must be renewed annually before the expiry date. You can apply for renewal online through the same portal. Submit updated documents, pay the renewal fee, and your license will be renewed after verification. Late renewal attracts a penalty of 2% per month." },
  { question: "What is the penalty for operating without a trade license?", answer: "Operating a business without a valid trade license is a punishable offence. Penalties include fines ranging from ₹2,000 to ₹25,000, sealing of business premises, and potential criminal prosecution for repeat offenders." },
  { question: "Can I transfer my trade license to another person?", answer: "Yes, trade licenses can be transferred to a new owner upon sale or transfer of business. You need to submit a transfer application along with the sale deed, NOC from the previous licensee, and pay the transfer fee." },
  { question: "Is a site inspection mandatory?", answer: "Yes, a site inspection by the Municipal Inspector is mandatory for all new trade license applications. The inspector verifies fire safety compliance, health standards, building safety, and adherence to zoning regulations." },
  { question: "How long does it take to get a trade license?", answer: "The typical processing time is 15-30 working days from the date of application, including the site inspection. Processing may take longer if additional documents or compliance measures are required." },
  { question: "Do I need separate licenses for multiple locations?", answer: "Yes, a separate trade license is required for each business premises. If you operate the same business from multiple locations within the same municipal area, you need individual licenses for each location." },
  { question: "What happens if my application is rejected?", answer: "If your application is rejected, you will receive a detailed reason for rejection. You can address the issues and reapply. Common reasons include non-compliance with fire safety, health standards, or zoning regulations." },
  { question: "Can I apply for a trade license for a home-based business?", answer: "Yes, home-based businesses also require a trade license. However, the fee is typically lower, and the compliance requirements may be simplified depending on the nature of the business and local municipal regulations." },
  { question: "What documents are needed for renewal?", answer: "For renewal, you need: previous trade license copy, updated fire NOC, health certificate (if applicable), property tax receipt, and the renewal fee. No site inspection is typically required for renewals unless there are changes to the premises." },
];

export default function TradeLicenseHelp() {
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
              <div className="text-sm text-muted-foreground">Trade License Service</div>
              <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ContactCard icon={<Phone size={24} className="text-blue-700" />} bg="bg-blue-100" title="Municipal Helpline" detail="1800-222-3456" sub="Monday to Saturday, 9 AM - 5 PM" />
          <ContactCard icon={<Mail size={24} className="text-green-700 dark:text-green-400" />} bg="bg-green-100" title="Email Support" detail="tradelicense@muncipal.gov.in" sub="Response within 48 hours" />
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
            <QuickLink to="/services/trade-license/eligibility" text="Check Eligibility" />
            <QuickLink to="/services/trade-license" text="Service Information" />
            <QuickLink to="/services/trade-license/status-tracker" text="Track Application Status" />
            <QuickLink to="/services/trade-license/start" text="Start New Application" />
          </div>
        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Trade License Service • Municipal Corporation / Local Body</div>
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
