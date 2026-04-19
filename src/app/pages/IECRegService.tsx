import { Link } from "react-router";
import { Building2, CheckCircle, Info, ArrowRight, Shield, Clock, Users, Award, HelpCircle, ChevronRight } from "lucide-react";

export default function IECRegService() {
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
                    <div className="text-sm text-muted-foreground mb-1">Directorate General of Foreign Trade (DGFT)</div>
                    <h1 className="text-3xl font-bold text-foreground">Import Export Code (IEC) Registration Service</h1>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Apply for your Import Export Code (IEC) online through the DGFT portal. IEC is mandatory for
                  importing or exporting goods and services from India and serves as the primary identification
                  number for all foreign trade transactions.
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
            <QuickInfo icon={<Clock size={24} className="text-white" />} bg="bg-blue-600" label="Processing Time" value="3-5 Days" />
            <QuickInfo icon={<Building2 size={24} className="text-white" />} bg="bg-[var(--ux4g-color-feedback-success)]" label="Registration Fee" value="₹500 (One-time)" />
            <QuickInfo icon={<Users size={24} className="text-white" />} bg="bg-purple-600" label="Eligibility" value="All Business Entities" />
            <QuickInfo icon={<Award size={24} className="text-white" />} bg="bg-orange-600" label="Output" value="IEC Number + Certificate" />
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">About This Service</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Import Export Code (IEC) Registration Service enables businesses to obtain a unique 10-digit
              code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              IEC is mandatory for importing or exporting goods and services from India. Upon successful
              registration, you will receive a 10-digit IEC Number and an IEC Certificate, which is valid
              for a lifetime and does not require renewal.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Eligible Entity Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EntityCard title="Proprietorship Firm" desc="Individual business owners engaged in import/export activities." />
            <EntityCard title="Partnership Firm" desc="Partnership firms with valid PAN and registered deed." />
            <EntityCard title="Private / Public Limited Company" desc="Companies incorporated under the Companies Act." />
            <EntityCard title="Limited Liability Partnership (LLP)" desc="LLPs registered with the Ministry of Corporate Affairs." />
            <EntityCard title="Trust / Society" desc="Trusts and societies engaged in import/export of goods or services." />
            <EntityCard title="Hindu Undivided Family (HUF)" desc="HUFs with a valid PAN card engaged in foreign trade." />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-3">
              <EligibilityItem text="Must be a business entity (proprietorship, partnership, company, LLP, trust, or HUF)" />
              <EligibilityItem text="Must possess a valid PAN card of the entity" />
              <EligibilityItem text="Must have a valid Aadhaar card of the applicant" />
              <EligibilityItem text="Must have an active bank account in the name of the entity" />
              <EligibilityItem text="Must have a valid business address proof" />
              <EligibilityItem text="Must be engaged in or intending to engage in import/export of goods or services" />
            </div>
            <div className="mt-6 pt-6 border-t-2 border-border">
              <Link to="/services/iec-registration/eligibility" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90">
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
                  <DocItem text="PAN Card of the entity" />
                  <DocItem text="Aadhaar Card of the applicant" />
                  <DocItem text="Cancelled cheque or bank certificate" />
                  <DocItem text="Address proof of business premises" />
                  <DocItem text="Passport-size photograph of the applicant" />
                  <DocItem text="Digital Signature Certificate (DSC)" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Additional Documents</h3>
                <div className="space-y-2">
                  <DocItem text="Certificate of Incorporation (for companies/LLPs)" optional />
                  <DocItem text="Partnership deed (for partnership firms)" optional />
                  <DocItem text="Trust deed (for trusts)" optional />
                  <DocItem text="RCMC from Export Promotion Council" optional />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Fee Structure</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-3 text-sm">
              <FeeRow label="IEC Registration (New Application)" fee="₹500" />
              <FeeRow label="IEC Modification / Amendment" fee="Free" />
              <FeeRow label="IEC Surrender" fee="Free" />
              <FeeRow label="IEC Reactivation" fee="₹500" />
            </div>
            <div className="mt-4 pt-4 border-t-2 border-border">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
                <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  IEC is valid for a lifetime and does not require renewal. A one-time fee of ₹500 is payable at the time of application.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1 rounded-lg">
          <div className="bg-card rounded p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Apply for IEC?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your IEC registration now. The entire process takes approximately 10-15 minutes to complete online.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/services/iec-registration/start" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90 flex items-center gap-2">
                <Shield size={18} /> Start Registration
              </Link>
              <Link to="/services/iec-registration/help" className="px-8 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center gap-2">
                <HelpCircle size={18} /> Need Help?
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>IEC Registration Service • Directorate General of Foreign Trade</div>
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
