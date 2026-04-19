import { Link } from "react-router";
import { UtensilsCrossed, CheckCircle, Info, ArrowRight, Shield, Clock, Users, Award, HelpCircle, ChevronRight, AlertCircle } from "lucide-react";

export default function FSSAILicenseService() {
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
                    <UtensilsCrossed size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Food Safety and Standards Authority of India</div>
                    <h1 className="text-3xl font-bold text-foreground">FSSAI Food License Service</h1>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Apply for your FSSAI Food License online. Obtain Basic Registration, State License, or Central
                  License for food manufacturing, processing, storage, distribution, and sale businesses.
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
            <QuickInfo icon={<Clock size={24} className="text-white" />} bg="bg-blue-600" label="Processing Time" value="7-60 Days" />
            <QuickInfo icon={<UtensilsCrossed size={24} className="text-white" />} bg="bg-[var(--ux4g-color-feedback-success)]" label="Application Mode" value="100% Online" />
            <QuickInfo icon={<Users size={24} className="text-white" />} bg="bg-purple-600" label="Eligibility" value="All Food Businesses" />
            <QuickInfo icon={<Award size={24} className="text-white" />} bg="bg-orange-600" label="Output" value="14-Digit License No." />
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
              The FSSAI Food License Service enables food business operators to obtain the mandatory license
              or registration under the Food Safety and Standards Act, 2006 through the Food Safety and
              Standards Authority of India (FSSAI) portal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Upon successful processing, you will receive a 14-digit FSSAI License Number and a License
              Certificate, which must be displayed prominently at the place of business and printed on all
              food product labels.
            </p>
          </div>
        </section>

        {/* License Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">License Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <LicenseCard title="Basic Registration" desc="For petty food businesses with annual turnover up to ₹12 lakh. Includes small retailers, hawkers, and temporary stalls." fee="₹100/year" timeline="7 days" />
            <LicenseCard title="State License" desc="For medium food businesses with annual turnover between ₹12 lakh and ₹20 crore. Includes mid-size manufacturers and distributors." fee="₹2,000-5,000/year" timeline="30 days" />
            <LicenseCard title="Central License" desc="For large food businesses with annual turnover above ₹20 crore. Includes importers, exporters, and large manufacturers." fee="₹7,500/year" timeline="60 days" />
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-3">
              <EligibilityItem text="Any food business operator — manufacturing, processing, storage, distribution, or sale" />
              <EligibilityItem text="Must have a valid photo identity document (Aadhaar, PAN, Voter ID)" />
              <EligibilityItem text="Must have a designated premises for food business operations" />
              <EligibilityItem text="Must comply with food safety and hygiene standards as per FSSAI regulations" />
              <EligibilityItem text="FoSTaC trained food safety supervisor required for State and Central licenses" />
            </div>
            <div className="mt-6 pt-6 border-t-2 border-border">
              <Link
                to="/services/fssai-license/eligibility"
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
                  <DocItem text="Photo ID (Aadhaar / PAN / Voter ID)" />
                  <DocItem text="Proof of address of food business premises" />
                  <DocItem text="Food safety management plan (FSMS)" />
                  <DocItem text="List of food products to be handled" />
                  <DocItem text="Layout plan of the processing unit / premises" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Additional Documents</h3>
                <div className="space-y-2">
                  <DocItem text="Water test report from recognized laboratory" optional />
                  <DocItem text="NOC from municipality / local body" optional />
                  <DocItem text="FoSTaC training certificate" optional />
                  <DocItem text="Import-export code (for importers/exporters)" optional />
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
              <FeeRow label="Basic Registration (turnover up to ₹12 lakh)" fee="₹100/year" />
              <FeeRow label="State License (turnover ₹12 lakh - ₹20 crore)" fee="₹2,000-5,000/year" />
              <FeeRow label="Central License (turnover above ₹20 crore)" fee="₹7,500/year" />
            </div>
            <div className="mt-4 pt-4 border-t-2 border-border">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
                <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  License fees are payable annually. Licenses can be obtained for 1 to 5 years. Late renewal attracts a penalty of ₹100 per day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1 rounded-lg">
          <div className="bg-card rounded p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Apply for Your FSSAI License?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your FSSAI food license application now. The entire process takes approximately 15-20 minutes to complete online.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/services/fssai-license/start" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90 flex items-center gap-2">
                <Shield size={18} /> Start Application
              </Link>
              <Link to="/services/fssai-license/help" className="px-8 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center gap-2">
                <HelpCircle size={18} /> Need Help?
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>FSSAI Food License Service • Food Safety and Standards Authority of India</div>
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

function LicenseCard({ title, desc, fee, timeline }: { title: string; desc: string; fee: string; timeline: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-5">
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{desc}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-3">
        <span>Fee: <span className="font-bold text-foreground">{fee}</span></span>
        <span>Timeline: <span className="font-bold text-foreground">{timeline}</span></span>
      </div>
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
