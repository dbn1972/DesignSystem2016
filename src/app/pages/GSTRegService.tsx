import { Link } from "react-router";
import { Building2, CheckCircle, Info, ArrowRight, Shield, Clock, Users, Award, HelpCircle, ChevronRight, AlertCircle } from "lucide-react";

export default function GSTRegService() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-[#FF9933] to-[#138808] p-1">
        <div className="bg-card">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
            <div className="flex items-start justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF9933] to-[#138808] rounded flex items-center justify-center">
                    <Building2 size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Central Board of Indirect Taxes and Customs (CBIC)</div>
                    <h1 className="text-3xl font-bold text-foreground">GST Registration Service</h1>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Register for Goods and Services Tax (GST) online through the CBIC portal. Obtain your GSTIN
                  for Regular, Composition, Casual, Non-Resident, ISD, or TDS/TCS dealer categories.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
                  SERVICE ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickInfo icon={<Clock size={24} className="text-white" />} bg="bg-blue-600" label="Processing Time" value="7-10 Days" />
            <QuickInfo icon={<Building2 size={24} className="text-white" />} bg="bg-[var(--ux4g-color-feedback-success)]" label="Registration Fee" value="Free" />
            <QuickInfo icon={<Users size={24} className="text-white" />} bg="bg-purple-600" label="Eligibility" value="Turnover ₹40L+" />
            <QuickInfo icon={<Award size={24} className="text-white" />} bg="bg-orange-600" label="Output" value="GSTIN + Certificate" />
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">About This Service</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The GST Registration Service enables businesses to register under the Goods and Services Tax
              regime through the Central Board of Indirect Taxes and Customs (CBIC) portal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Upon successful registration, you will receive a GST Identification Number (GSTIN) and a
              Registration Certificate, enabling you to collect and remit GST, claim input tax credits,
              and file periodic returns.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Registration Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EntityCard title="Regular Taxpayer" desc="Standard registration for businesses exceeding threshold turnover limits." />
            <EntityCard title="Composition Scheme" desc="Simplified scheme for small taxpayers with turnover up to ₹1.5 Cr." />
            <EntityCard title="Casual Taxable Person" desc="For occasional supply of goods/services in a state where no fixed place of business exists." />
            <EntityCard title="Non-Resident Taxable Person" desc="For non-resident persons making taxable supplies in India." />
            <EntityCard title="Input Service Distributor (ISD)" desc="For distributing input tax credit across multiple branches." />
            <EntityCard title="TDS/TCS Deductor/Collector" desc="For entities required to deduct or collect tax at source under GST." />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-3">
              <EligibilityItem text="Annual turnover exceeds ₹40 lakh (₹20 lakh for service providers)" />
              <EligibilityItem text="Must possess a valid PAN card" />
              <EligibilityItem text="Must have a valid business address proof" />
              <EligibilityItem text="Must have an active bank account in the name of the business" />
              <EligibilityItem text="Valid Aadhaar for identity verification" />
            </div>
            <div className="mt-6 pt-6 border-t-2 border-border">
              <Link to="/services/gst-registration/eligibility" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90">
                Check Your Eligibility <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Required Documents</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-foreground mb-3">Mandatory Documents</h3>
                <div className="space-y-2">
                  <DocItem text="PAN Card of the business / proprietor" />
                  <DocItem text="Aadhaar Card for identity verification" />
                  <DocItem text="Proof of business address (rent agreement / ownership deed)" />
                  <DocItem text="Bank account statement or cancelled cheque" />
                  <DocItem text="Photograph of the proprietor / partners / directors" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Additional Documents</h3>
                <div className="space-y-2">
                  <DocItem text="Authorization letter for authorized signatory" optional />
                  <DocItem text="Board resolution for companies" optional />
                  <DocItem text="Partnership deed (for partnership firms)" optional />
                  <DocItem text="Certificate of incorporation (for companies)" optional />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Fee Structure</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-3 text-sm">
              <FeeRow label="GST Registration" fee="Free" />
              <FeeRow label="Amendment of Registration" fee="Free" />
              <FeeRow label="Cancellation of Registration" fee="Free" />
              <FeeRow label="Revocation of Cancellation" fee="Free" />
            </div>
            <div className="mt-4 pt-4 border-t-2 border-border">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
                <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  GST registration is completely free of charge. No government fees are applicable for any registration-related services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1 rounded-lg">
          <div className="bg-card rounded p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Register for GST?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your GST registration now. The entire process takes approximately 15-20 minutes to complete online.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/services/gst-registration/start" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90 flex items-center gap-2">
                <Shield size={18} /> Start Registration
              </Link>
              <Link to="/services/gst-registration/help" className="px-8 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center gap-2">
                <HelpCircle size={18} /> Need Help?
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>GST Registration Service • Central Board of Indirect Taxes and Customs</div>
            <div>Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuickInfo({ icon, bg, label, value }: { icon: React.ReactNode; bg: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center flex-shrink-0`}>{icon}</div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-bold text-foreground">{value}</div>
      </div>
    </div>
  );
}

function EntityCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-5">
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function EligibilityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function DocItem({ text, optional }: { text: string; optional?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <ChevronRight size={16} className={`${optional ? "text-muted-foreground" : "text-primary"} flex-shrink-0 mt-0.5`} />
      <span className="text-sm text-muted-foreground">
        {text}
        {optional && <span className="text-muted-foreground ml-2">(If applicable)</span>}
      </span>
    </div>
  );
}

function FeeRow({ label, fee }: { label: string; fee: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{fee}</span>
    </div>
  );
}
