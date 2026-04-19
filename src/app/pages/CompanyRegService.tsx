import { Link } from "react-router";
import { Building2, CheckCircle, Info, ArrowRight, Shield, Clock, Users, Award, HelpCircle, ChevronRight, AlertCircle } from "lucide-react";

export default function CompanyRegService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
                    <div className="text-sm text-muted-foreground mb-1">Ministry of Corporate Affairs</div>
                    <h1 className="text-3xl font-bold text-foreground">Company Registration Service</h1>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Register your company online with the Registrar of Companies (ROC). Incorporate Private Limited,
                  Public Limited, OPC, LLP, or Section 8 companies through a fully digital process.
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

      {/* Quick Info Banner */}
      <section className="bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickInfo icon={<Clock size={24} className="text-white" />} bg="bg-blue-600" label="Processing Time" value="15-20 Days" />
            <QuickInfo icon={<Building2 size={24} className="text-white" />} bg="bg-[var(--ux4g-color-feedback-success)]" label="Application Mode" value="100% Online" />
            <QuickInfo icon={<Users size={24} className="text-white" />} bg="bg-purple-600" label="Eligibility" value="Indian Residents 18+" />
            <QuickInfo icon={<Award size={24} className="text-white" />} bg="bg-orange-600" label="Output" value="CIN + Certificate" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">

        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">About This Service</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Company Registration Service enables entrepreneurs and businesses to incorporate a company
              under the Companies Act, 2013 through the Ministry of Corporate Affairs (MCA) portal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Upon successful registration, you will receive a Corporate Identity Number (CIN) and a
              Certificate of Incorporation, which serves as conclusive evidence that the company has been
              incorporated.
            </p>
          </div>
        </section>

        {/* Entity Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Supported Entity Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EntityCard title="Private Limited Company" desc="Most popular for startups. Min 2 directors, 2 shareholders." />
            <EntityCard title="Public Limited Company" desc="For large-scale businesses. Min 3 directors, 7 shareholders." />
            <EntityCard title="One Person Company (OPC)" desc="Single promoter company. Only 1 director and 1 member required." />
            <EntityCard title="Limited Liability Partnership" desc="Combines benefits of partnership and limited liability." />
            <EntityCard title="Section 8 Company" desc="For non-profit objectives — charitable, social, or scientific." />
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-3">
              <EligibilityItem text="Must be 18 years of age or above" />
              <EligibilityItem text="Must have a valid Director Identification Number (DIN)" />
              <EligibilityItem text="Must possess a valid PAN card" />
              <EligibilityItem text="Must have a registered office address in India" />
              <EligibilityItem text="Must have Digital Signature Certificate (DSC) for all directors" />
            </div>
            <div className="mt-6 pt-6 border-t-2 border-border">
              <Link
                to="/services/company-registration/eligibility"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90"
              >
                Check Your Eligibility <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Required Documents</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-foreground mb-3">Mandatory Documents</h3>
                <div className="space-y-2">
                  <DocItem text="Memorandum of Association (MoA)" />
                  <DocItem text="Articles of Association (AoA)" />
                  <DocItem text="Director ID Proof (PAN + Aadhaar)" />
                  <DocItem text="Address Proof of Registered Office" />
                  <DocItem text="Digital Signature Certificate (DSC)" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Additional Documents</h3>
                <div className="space-y-2">
                  <DocItem text="NOC from property owner (if rented)" optional />
                  <DocItem text="Utility bill for registered office" optional />
                  <DocItem text="Board resolution (for existing companies)" optional />
                  <DocItem text="Foreign director documents (if applicable)" optional />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Fee Structure</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-3 text-sm">
              <FeeRow label="Authorized Capital up to ₹1,00,000" fee="₹500" />
              <FeeRow label="Authorized Capital up to ₹5,00,000" fee="₹2,000" />
              <FeeRow label="Authorized Capital up to ₹10,00,000" fee="₹5,000" />
              <FeeRow label="Authorized Capital above ₹10,00,000" fee="₹7,000+" />
            </div>
            <div className="mt-4 pt-4 border-t-2 border-border">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
                <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Additional stamp duty and professional fees may apply based on state and entity type.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1 rounded-lg">
          <div className="bg-card rounded p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Register Your Company?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your company registration now. The entire process takes approximately 20-30 minutes to complete online.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/services/company-registration/start" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90 flex items-center gap-2">
                <Shield size={18} /> Start Registration
              </Link>
              <Link to="/services/company-registration/help" className="px-8 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center gap-2">
                <HelpCircle size={18} /> Need Help?
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Company Registration Service • Ministry of Corporate Affairs</div>
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
