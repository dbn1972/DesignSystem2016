import { Link } from "react-router";
import { Building2, CheckCircle, Info, ArrowRight, Shield, Clock, Users, Award, HelpCircle, ChevronRight } from "lucide-react";

export default function TradeLicenseService() {
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
                    <div className="text-sm text-muted-foreground mb-1">Municipal Corporation / Local Body</div>
                    <h1 className="text-3xl font-bold text-foreground">Trade License Service</h1>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Apply for or renew your Trade License online through your Municipal Corporation portal.
                  Obtain authorization to operate your business in Food & Beverage, Retail, Manufacturing,
                  Services, Healthcare, or Education categories.
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
            <QuickInfo icon={<Clock size={24} className="text-white" />} bg="bg-blue-600" label="Processing Time" value="15-30 Days" />
            <QuickInfo icon={<Building2 size={24} className="text-white" />} bg="bg-[var(--ux4g-color-feedback-success)]" label="Application Mode" value="100% Online" />
            <QuickInfo icon={<Users size={24} className="text-white" />} bg="bg-purple-600" label="Fee Range" value="₹500 - ₹25,000" />
            <QuickInfo icon={<Award size={24} className="text-white" />} bg="bg-orange-600" label="Output" value="Trade License Certificate" />
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">About This Service</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Trade License Service enables businesses to obtain authorization from the Municipal
              Corporation or Local Body to operate a trade, business, or profession within the municipal limits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Upon successful application and inspection, you will receive a Trade License Certificate
              that authorizes you to conduct business activities at the specified premises. The license
              must be renewed annually.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Business Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EntityCard title="Food & Beverage" desc="Restaurants, cafes, bakeries, food processing, catering services." />
            <EntityCard title="Retail" desc="Shops, showrooms, supermarkets, wholesale and retail trade." />
            <EntityCard title="Manufacturing" desc="Factories, workshops, production units, assembly plants." />
            <EntityCard title="Services" desc="IT services, consulting, salons, repair shops, professional services." />
            <EntityCard title="Healthcare" desc="Clinics, pharmacies, diagnostic centres, nursing homes." />
            <EntityCard title="Education" desc="Coaching centres, training institutes, private schools, daycare." />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-3">
              <EligibilityItem text="Must have valid business premises within municipal limits" />
              <EligibilityItem text="Fire safety compliance certificate from the Fire Department" />
              <EligibilityItem text="Health clearance certificate (for food and healthcare businesses)" />
              <EligibilityItem text="Valid identity proof of the business owner / proprietor" />
              <EligibilityItem text="No pending violations or municipal dues on the premises" />
            </div>
            <div className="mt-6 pt-6 border-t-2 border-border">
              <Link to="/services/trade-license/eligibility" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90">
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
                  <DocItem text="Property ownership deed or rental agreement" />
                  <DocItem text="Identity proof (Aadhaar / PAN / Voter ID)" />
                  <DocItem text="Business plan or nature of business declaration" />
                  <DocItem text="Fire NOC from Fire Department" />
                  <DocItem text="Health certificate (for applicable categories)" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Additional Documents</h3>
                <div className="space-y-2">
                  <DocItem text="Building plan approval (for manufacturing)" optional />
                  <DocItem text="Pollution control board NOC (if applicable)" optional />
                  <DocItem text="Previous trade license (for renewal)" optional />
                  <DocItem text="Partnership deed / incorporation certificate" optional />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Fee Structure</h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-3 text-sm">
              <FeeRow label="Small Retail / Services (up to 500 sq ft)" fee="₹500 - ₹2,000" />
              <FeeRow label="Medium Business (500 - 2000 sq ft)" fee="₹2,000 - ₹5,000" />
              <FeeRow label="Large Business / Manufacturing" fee="₹5,000 - ₹15,000" />
              <FeeRow label="Healthcare / Food Processing" fee="₹10,000 - ₹25,000" />
            </div>
            <div className="mt-4 pt-4 border-t-2 border-border">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 rounded-lg p-4 flex items-start gap-3">
                <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Fees vary based on business type, area of premises, and municipal zone. Late renewal attracts a penalty of 2% per month.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1 rounded-lg">
          <div className="bg-card rounded p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Apply for Trade License?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your trade license application now. The online process takes approximately 15-20 minutes to complete.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/services/trade-license/start" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded text-sm hover:opacity-90 flex items-center gap-2">
                <Shield size={18} /> Start Application
              </Link>
              <Link to="/services/trade-license/help" className="px-8 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-sm hover:bg-background flex items-center gap-2">
                <HelpCircle size={18} /> Need Help?
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Trade License Service • Municipal Corporation / Local Body</div>
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
