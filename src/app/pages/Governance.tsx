import { Users, GitBranch, CheckCircle, AlertCircle, Clock, XCircle, ChevronRight, Shield, FileText, Zap, TrendingUp, Archive, ArrowRight, CheckSquare, Circle } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageContainer from "@/app/components/PageContainer";

export default function Governance() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === 'hi' ? 'hi' : 'en';
  const c = GOVERNANCE_COPY[lang];
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),_transparent_30%),linear-gradient(to_bottom,theme(colors.background),theme(colors.background))]">
        <PageContainer className="grid gap-12 py-16 sm:py-20 lg:py-24 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
              <Shield size={14} className="text-primary" />
              Design system governance
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{c.hero.title}</h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                {c.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#ownership" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                Review ownership
              </a>
              <a href="#approval" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary">
                {c.hero.qualityGates}
              </a>
              <a href="#lifecycle" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary">
                {c.hero.lifecycleStates}
              </a>
            </div>
          </div>

          {/* Status Panel */}
          <div className="rounded-[28px] border border-border bg-card/95 backdrop-blur p-6 shadow-xl shadow-black/5">
            {/* System status */}
            <div className="flex items-center justify-between gap-3 pb-5 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-50 dark:bg-green-900/200" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">All systems operational</p>
                  <p className="text-xs text-muted-foreground">Design system platform</p>
                </div>
              </div>
              <span className="rounded-full bg-green-50 dark:bg-green-900/200/10 border border-green-500/20 px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-400">Live</span>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-5 border-b border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">v2.4</div>
                <div className="text-xs text-muted-foreground mt-0.5">Current release</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">77</div>
                <div className="text-xs text-muted-foreground mt-0.5">Components</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">AA</div>
                <div className="text-xs text-muted-foreground mt-0.5">WCAG target</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground mt-0.5">A11y score</div>
              </div>
            </div>

            {/* Compliance badges */}
            <div className="py-5 border-b border-border">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground mb-3">Compliance</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 dark:bg-green-900/200/10 border border-green-500/20 px-3 py-1.5 text-xs font-semibold text-green-700 dark:text-green-400">
                  <CheckCircle size={12} /> WCAG 2.1 AA
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs font-semibold text-primary">
                  <Shield size={12} /> IT Act 2000
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs font-semibold text-primary">
                  <FileText size={12} /> DPDP Act
                </span>
              </div>
            </div>

            {/* Last audit */}
            <div className="pt-5 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Last audit</span>
                <span className="font-semibold text-foreground">April 2026</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Next review</span>
                <span className="font-semibold text-foreground">July 2026</span>
              </div>
              <a href="#conformance" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary/5 border border-primary/15 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors">
                View conformance dashboard <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </PageContainer>
      </header>

      <PageContainer className="space-y-20 py-12">
        <OwnershipModelSection />
        <ReviewLanesSection />
        <ApprovalGatesSection />
        <ContributionPathwaySection />
        <ReleaseGovernanceSection />
        <LifecycleStatusesSection />
        <PromotionRulesSection />
        <DeprecationProcessSection />
        <ExceptionProcessSection />
        <ConformanceExpectationsSection />
      </PageContainer>
    </div>
  );
}

// ── Bilingual copy ──────────────────────────────────────────────────
const GOVERNANCE_COPY = {
  en: {
    hero: { title: 'Governance & lifecycle for a production design system', description: 'UX4G is governed as a product platform, not just a component library. This framework keeps quality, consistency, and scalability visible while supporting contribution from departments and vendors.', qualityGates: 'Quality gates', lifecycleStates: 'Lifecycle states' },
    snapshot: { eyebrow: 'Governance snapshot', title: 'What this page communicates', sections: '10 sections' },
  },
  hi: {
    hero: { title: 'प्रोडक्शन डिज़ाइन सिस्टम के लिए शासन और जीवनचक्र', description: 'UX4G को एक उत्पाद प्लेटफ़ॉर्म के रूप में शासित किया जाता है, केवल एक कंपोनेंट लाइब्रेरी के रूप में नहीं। यह ढाँचा गुणवत्ता, एकरूपता और स्केलेबिलिटी को दृश्यमान रखता है और विभागों व वेंडर्स से योगदान का समर्थन करता है।', qualityGates: 'गुणवत्ता द्वार', lifecycleStates: 'जीवनचक्र अवस्थाएँ' },
    snapshot: { eyebrow: 'शासन स्नैपशॉट', title: 'यह पृष्ठ क्या बताता है', sections: '10 अनुभाग' },
  },
} as const;

function GovernanceMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 p-4">
      <div className="text-2xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function GovernanceNote({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function OwnershipModelSection() {
  return (
    <section id="ownership">
      <SectionHeader
        title="Ownership Model"
        description="Roles and responsibilities for design system stewardship"
        icon={<Users size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Governance Structure Diagram */}
        <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm">
          <div className="border-b border-border bg-muted/35 p-6">
            <h3 className="font-bold text-foreground">Governance Structure</h3>
          </div>

          <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0.65),rgba(255,255,255,0.92))] p-8 dark:bg-[linear-gradient(to_bottom,rgba(15,23,42,0.6),rgba(15,23,42,0.9))] sm:p-10">
            {/* Core Team */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex flex-col items-center rounded-[28px] border border-border bg-primary px-8 py-6 text-primary-foreground shadow-xl shadow-primary/15">
                  <div className="text-xl font-bold">UX4G Core Team</div>
                  <div className="text-sm text-primary-foreground/80">Strategic direction & final authority</div>
                </div>
              </div>

              {/* Three Pillars */}
              <div className="grid gap-6 lg:grid-cols-3">
                <OwnershipPillar
                  title="Design Lead"
                  responsibilities={[
                    'Visual design standards',
                    'Component specifications',
                    'Accessibility compliance',
                    'Figma library management'
                  ]}
                  color="blue"
                />
                <OwnershipPillar
                  title="Engineering Lead"
                  responsibilities={[
                    'Technical implementation',
                    'Code quality standards',
                    'Framework integration',
                    'Performance optimization'
                  ]}
                  color="purple"
                />
                <OwnershipPillar
                  title="Product Lead"
                  responsibilities={[
                    'Roadmap planning',
                    'Stakeholder coordination',
                    'Release management',
                    'Adoption metrics'
                  ]}
                  color="green"
                />
              </div>

              {/* Supporting Roles */}
              <div className="mt-8 border-t border-border pt-8">
                <h4 className="mb-4 text-center font-bold text-foreground">Supporting roles</h4>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <SupportRole
                    title="Documentation"
                    description="Maintains guides and examples"
                  />
                  <SupportRole
                    title="QA/Testing"
                    description="Validates quality and accessibility"
                  />
                  <SupportRole
                    title="DevOps"
                    description="Manages build and deployment"
                  />
                  <SupportRole
                    title="Community"
                    description="Supports contributors and users"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsibility Matrix */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100 dark:text-gray-200">Responsibility Matrix (RACI)</h3>
          </div>

          <div className="overflow-x-auto -mx-6 px-6 sm:-mx-0 sm:px-0">
            <table className="w-full text-sm">
              <thead className="bg-background dark:bg-gray-800 border-b-2 border-border dark:border-gray-700">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground dark:text-gray-100 dark:text-gray-200">Activity</th>
                  <th className="text-center p-4 font-semibold text-foreground dark:text-gray-100 dark:text-gray-200">Design Lead</th>
                  <th className="text-center p-4 font-semibold text-foreground dark:text-gray-100 dark:text-gray-200">Eng Lead</th>
                  <th className="text-center p-4 font-semibold text-foreground dark:text-gray-100 dark:text-gray-200">Product Lead</th>
                  <th className="text-center p-4 font-semibold text-foreground dark:text-gray-100 dark:text-gray-200">Contributors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border dark:divide-gray-700">
                <RACIRow
                  activity="Component Design"
                  roles={['R', 'C', 'I', 'C']}
                />
                <RACIRow
                  activity="Code Implementation"
                  roles={['C', 'R', 'I', 'C']}
                />
                <RACIRow
                  activity="Release Decision"
                  roles={['C', 'C', 'A', 'I']}
                />
                <RACIRow
                  activity="Contribution Review"
                  roles={['A', 'A', 'I', 'R']}
                />
                <RACIRow
                  activity="Documentation"
                  roles={['C', 'C', 'A', 'C']}
                />
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-background dark:bg-gray-800 border-t-2 border-border dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div>
                <strong className="text-foreground dark:text-gray-100 dark:text-gray-200">R - Responsible:</strong>
                <span className="text-muted-foreground dark:text-muted-foreground ml-1">Does the work</span>
              </div>
              <div>
                <strong className="text-foreground dark:text-gray-100 dark:text-gray-200">A - Accountable:</strong>
                <span className="text-muted-foreground dark:text-muted-foreground ml-1">Final approval</span>
              </div>
              <div>
                <strong className="text-foreground dark:text-gray-100 dark:text-gray-200">C - Consulted:</strong>
                <span className="text-muted-foreground dark:text-muted-foreground ml-1">Provides input</span>
              </div>
              <div>
                <strong className="text-foreground dark:text-gray-100 dark:text-gray-200">I - Informed:</strong>
                <span className="text-muted-foreground dark:text-muted-foreground ml-1">Kept updated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OwnershipPillar({ title, responsibilities, color }: any) {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
    purple: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800',
    green: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
  };

  return (
    <div className={`rounded-[24px] border p-6 shadow-sm ${colorClasses[color as keyof typeof colorClasses]}`}>
      <h3 className="mb-4 text-lg font-bold text-foreground">{title}</h3>
      <ul className="space-y-2">
        {responsibilities.map((resp: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle className="mt-0.5 flex-shrink-0 text-muted-foreground dark:text-muted-foreground" size={16} />
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SupportRole({ title, description }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm">
      <div className="mb-1 text-sm font-semibold text-foreground">{title}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
}

function RACIRow({ activity, roles }: any) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'R': return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-800';
      case 'A': return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/20 dark:text-green-400 dark:border-green-800';
      case 'C': return 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/20 dark:text-yellow-400 dark:border-yellow-800';
      case 'I': return 'bg-muted text-muted-foreground border-border';
      default: return '';
    }
  };

  return (
    <tr className="hover:bg-muted/30">
      <td className="p-4 font-semibold text-foreground">{activity}</td>
      {roles.map((role: string, index: number) => (
        <td key={index} className="p-4 text-center">
          <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${getRoleColor(role)}`}>
            {role}
          </span>
        </td>
      ))}
    </tr>
  );
}

function ReviewLanesSection() {
  return (
    <section id="review">
      <SectionHeader
        title="Review Lanes"
        description="Specialized review tracks for different contribution types"
        icon={<GitBranch size={28} />}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <ReviewLane
          title="Design Review"
          owner="Design Lead"
          focuses={[
            'Visual consistency',
            'Brand alignment',
            'Accessibility standards',
            'User experience patterns'
          ]}
          timeline="2-3 business days"
          color="blue"
        />

        <ReviewLane
          title="Engineering Review"
          owner="Engineering Lead"
          focuses={[
            'Code quality',
            'Performance',
            'Framework compatibility',
            'API design'
          ]}
          timeline="2-3 business days"
          color="purple"
        />

        <ReviewLane
          title="Documentation Review"
          owner="Documentation Team"
          focuses={[
            'Usage examples',
            'API documentation',
            'Accessibility guidance',
            'Content clarity'
          ]}
          timeline="1-2 business days"
          color="green"
        />
      </div>

      <div className="mt-8 rounded-[24px] border border-blue-200 bg-blue-50 p-6 shadow-sm dark:border-blue-800 dark:bg-blue-950/20">
        <h3 className="mb-3 font-bold text-foreground">Parallel review process</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          All three review lanes run in parallel to minimize total review time. A contribution must pass
          all applicable reviews before advancing to approval gates.
        </p>

        <div className="rounded-2xl border border-blue-200 bg-card p-4 shadow-sm dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/20 dark:text-blue-400">
                Design ✓
              </div>
              <div className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-semibold text-purple-700 dark:border-purple-800 dark:bg-purple-950/20 dark:text-purple-400">
                Engineering ✓
              </div>
              <div className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-semibold text-green-700 dark:border-green-800 dark:bg-green-950/20 dark:text-green-400">
                Documentation ✓
              </div>
            </div>
            <ArrowRight className="text-muted-foreground" size={24} />
            <div className="rounded-full bg-green-700 px-4 py-2 font-bold text-white">
              Ready for Approval
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewLane({ title, owner, focuses, timeline, color }: any) {
  const colorClasses = {
    blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20',
    purple: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20',
    green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20'
  };

  return (
    <div className={`overflow-hidden rounded-[24px] border shadow-sm ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="border-b border-border bg-card p-4">
        <h3 className="mb-1 text-lg font-bold text-foreground">{title}</h3>
        <div className="text-sm text-muted-foreground">Owner: {owner}</div>
      </div>

      <div className="p-4">
        <h4 className="mb-3 text-sm font-semibold text-foreground">Review focus:</h4>
        <ul className="space-y-2 mb-4">
          {focuses.map((focus: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="mt-0.5 flex-shrink-0 text-muted-foreground dark:text-muted-foreground" size={14} />
              <span>{focus}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 border-t border-border pt-4 text-sm">
          <Clock size={14} className="text-muted-foreground" />
          <span className="text-muted-foreground">Timeline: {timeline}</span>
        </div>
      </div>
    </div>
  );
}

function ApprovalGatesSection() {
  return (
    <section id="approval">
      <SectionHeader
        title="Approval Gates"
        description="Quality checkpoints before promotion to next lifecycle stage"
        icon={<CheckSquare size={28} />}
      />

      <div className="mt-8 space-y-6">
        {/* Approval Flow Diagram */}
        <div className="rounded-[28px] border border-border bg-gradient-to-b from-card to-muted/20 p-8 shadow-sm">
          <h3 className="mb-6 text-center font-bold text-foreground">Approval flow</h3>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-4 xl:grid-cols-7 xl:items-center">
              <ApprovalGate
                title="Submission"
                status="start"
                requirements={[
                  'Complete contribution',
                  'Documentation included',
                  'Tests passing'
                ]}
              />
              
              <ArrowRight className="hidden justify-self-center text-muted-foreground xl:block" size={32} />
              
              <ApprovalGate
                title="Technical Review"
                status="review"
                requirements={[
                  'Code quality ✓',
                  'Performance ✓',
                  'Accessibility ✓'
                ]}
              />
              
              <ArrowRight className="hidden justify-self-center text-muted-foreground xl:block" size={32} />
              
              <ApprovalGate
                title="Governance Approval"
                status="approval"
                requirements={[
                  'Core team review',
                  'Strategic alignment',
                  'Resource availability'
                ]}
              />
              
              <ArrowRight className="hidden justify-self-center text-muted-foreground xl:block" size={32} />
              
              <ApprovalGate
                title="Release"
                status="complete"
                requirements={[
                  'Version tagged',
                  'Published to NPM',
                  'Documentation live'
                ]}
              />
            </div>
          </div>
        </div>

        {/* Gate Details */}
        <div className="grid gap-6 xl:grid-cols-2">
          <GateDetails
            title="Alpha → Beta Gate"
            criteria={[
              'All review lanes passed',
              'Core team design approval',
              'Engineering feasibility confirmed',
              'Documentation draft complete',
              'At least one production use case identified'
            ]}
            approver="Design Lead + Engineering Lead"
          />

          <GateDetails
            title="Beta → Production Gate"
            criteria={[
              'Beta tested by at least 2 departments',
              'No critical bugs in beta period (minimum 2 weeks)',
              'Accessibility audit passed (WCAG AA)',
              'Complete documentation and examples',
              'Migration guide prepared (if breaking changes)'
            ]}
            approver="Product Lead (final authority)"
          />
        </div>
      </div>
    </section>
  );
}

function ApprovalGate({ title, status, requirements }: any) {
  const statusColors = {
    start: 'bg-muted/30 border-border',
    review: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
    approval: 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800',
    complete: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
  };

  return (
    <div className={`min-w-0 sm:min-w-[200px] rounded-2xl border p-4 shadow-sm ${statusColors[status as keyof typeof statusColors]}`}>
      <h4 className="mb-3 text-center font-bold text-foreground">{title}</h4>
      <ul className="space-y-1">
        {requirements.map((req: string, index: number) => (
          <li key={index} className="text-xs text-muted-foreground">• {req}</li>
        ))}
      </ul>
    </div>
  );
}

function GateDetails({ title, criteria, approver }: any) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-muted/35 p-4">
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>

      <div className="p-6">
        <h4 className="mb-3 text-sm font-semibold text-foreground">Approval criteria:</h4>
        <ul className="space-y-2 mb-6">
          {criteria.map((criterion: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" size={16} />
              <span>{criterion}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-border pt-4">
          <div className="mb-1 text-xs text-muted-foreground">Final approver:</div>
          <div className="font-semibold text-foreground">{approver}</div>
        </div>
      </div>
    </div>
  );
}

function ContributionPathwaySection() {
  return (
    <section id="contribution">
      <SectionHeader
        title="Contribution Pathway"
        description="How teams and individuals can contribute to UX4G"
        icon={<Users size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Contribution Flow */}
        <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm">
          <div className="border-b border-border bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:from-blue-950/20 dark:to-purple-950/20">
            <h3 className="mb-2 font-bold text-foreground">Contribution workflow</h3>
            <p className="text-sm text-muted-foreground">End-to-end process for contributing components, patterns, or improvements</p>
          </div>
          
          <div className="p-8">
            <div className="space-y-4">
              <ContributionStep
                number="1"
                title="Proposal"
                description="Submit component proposal via GitHub issue template"
                duration="1 day"
                actions={['Describe use case', 'Provide examples', 'Justify need']}
              />
              
              <div className="ml-6 h-8 border-l-2 border-border"></div>
              
              <ContributionStep
                number="2"
                title="Review & Discussion"
                description="Core team reviews proposal and provides feedback"
                duration="3-5 days"
                actions={['Team discussion', 'Feasibility assessment', 'Priority determination']}
              />
              
              <div className="ml-6 h-8 border-l-2 border-border"></div>
              
              <ContributionStep
                number="3"
                title="Design & Development"
                description="Approved proposal moves to implementation phase"
                duration="1-4 weeks"
                actions={['Design in Figma', 'Code implementation', 'Write documentation']}
              />
              
              <div className="ml-6 h-8 border-l-2 border-border"></div>
              
              <ContributionStep
                number="4"
                title="Review Lanes"
                description="Parallel review by design, engineering, and documentation teams"
                duration="2-3 days"
                actions={['Design review', 'Code review', 'Documentation review']}
              />
              
              <div className="ml-6 h-8 border-l-2 border-border"></div>
              
              <ContributionStep
                number="5"
                title="Approval & Integration"
                description="Final approval and merge into design system"
                duration="1-2 days"
                actions={['Final approval', 'Merge to main', 'Schedule for release']}
              />
            </div>
          </div>
        </div>

        {/* Contribution Types */}
        <div className="grid gap-6 xl:grid-cols-3">
          <ContributionType
            title="New Component"
            description="Propose entirely new component not in the system"
            effort="High"
            approval="Core Team Required"
            color="blue"
          />
          
          <ContributionType
            title="Component Variant"
            description="Add variant to existing component (e.g., new button size)"
            effort="Medium"
            approval="Design + Engineering Lead"
            color="purple"
          />
          
          <ContributionType
            title="Bug Fix"
            description="Fix defect in existing component"
            effort="Low"
            approval="Fast-tracked Review"
            color="green"
          />
        </div>
      </div>
    </section>
  );
}

function ContributionStep({ number, title, description, duration, actions }: any) {
  return (
    <div className="flex gap-6 rounded-[24px] border border-border bg-card p-5 shadow-sm">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-xl text-primary-foreground">
          {number}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="text-lg font-bold text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="ml-4 flex flex-shrink-0 items-center gap-1 text-xs text-muted-foreground">
            <Clock size={12} />
            {duration}
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          {actions.map((action: string, index: number) => (
            <span key={index} className="rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 dark:border-blue-800 dark:bg-blue-950/20 dark:text-blue-400">
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContributionType({ title, description, effort, approval, color }: any) {
  const colorClasses = {
    blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20',
    purple: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20',
    green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20'
  };

  return (
    <div className={`rounded-[24px] border p-6 shadow-sm ${colorClasses[color as keyof typeof colorClasses]}`}>
      <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Effort level:</span>
          <span className="font-semibold text-foreground">{effort}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Approval:</span>
          <span className="text-right font-semibold text-foreground">{approval}</span>
        </div>
      </div>
    </div>
  );
}

function ReleaseGovernanceSection() {
  return (
    <section id="release">
      <SectionHeader
        title="Release Governance"
        description="How releases are planned, versioned, and communicated"
        icon={<GitBranch size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Release Cadence */}
        <div className="grid gap-6 xl:grid-cols-3">
          <ReleaseType
            title="Major Releases"
            version="v2.0.0"
            frequency="Annually"
            description="Breaking changes, architectural updates, new features"
            planning="6 months advance notice"
            color="red"
          />
          
          <ReleaseType
            title="Minor Releases"
            version="v1.1.0"
            frequency="Quarterly"
            description="New components, features, backward compatible"
            planning="1 month advance notice"
            color="yellow"
          />
          
          <ReleaseType
            title="Patch Releases"
            version="v1.0.1"
            frequency="As needed"
            description="Bug fixes, documentation updates, no breaking changes"
            planning="1 week notice (or immediate for critical bugs)"
            color="green"
          />
        </div>

        {/* Release Process */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100 dark:text-gray-200">Release Process</h3>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              <ReleasePhase
                phase="Planning"
                duration="Week 1-2"
                activities={[
                  'Review backlog and contributions',
                  'Prioritize features and fixes',
                  'Assign to release milestone',
                  'Communicate release goals'
                ]}
              />
              
              <ReleasePhase
                phase="Development"
                duration="Week 3-6"
                activities={[
                  'Implement features and fixes',
                  'Review and merge contributions',
                  'Update documentation',
                  'Conduct internal testing'
                ]}
              />
              
              <ReleasePhase
                phase="Testing & QA"
                duration="Week 7-8"
                activities={[
                  'Comprehensive testing across browsers',
                  'Accessibility audit',
                  'Performance benchmarking',
                  'Beta release to select departments'
                ]}
              />
              
              <ReleasePhase
                phase="Release"
                duration="Week 9"
                activities={[
                  'Final approval from Product Lead',
                  'Version tagging and NPM publish',
                  'Update documentation site',
                  'Announce to all departments'
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReleaseType({ title, version, frequency, description, planning, color }: any) {
  const colorClasses = {
    red: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20',
    yellow: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20',
    green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20'
  };

  return (
    <div className={`rounded-[24px] border p-6 shadow-sm ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <code className="rounded-full bg-foreground px-2 py-1 font-mono text-xs text-background">{version}</code>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <div className="mb-1 text-xs text-muted-foreground">Frequency:</div>
          <div className="font-semibold text-foreground">{frequency}</div>
        </div>
        <div>
          <div className="mb-1 text-xs text-muted-foreground">Includes:</div>
          <div className="text-muted-foreground">{description}</div>
        </div>
        <div>
          <div className="mb-1 text-xs text-muted-foreground">Planning:</div>
          <div className="text-muted-foreground">{planning}</div>
        </div>
      </div>
    </div>
  );
}

function ReleasePhase({ phase, duration, activities }: any) {
  return (
    <div className="flex gap-6 rounded-[24px] border border-border bg-card p-5 shadow-sm">
      <div className="flex-shrink-0 text-right" style={{ width: '120px' }}>
        <div className="font-bold text-foreground">{phase}</div>
        <div className="text-sm text-muted-foreground">{duration}</div>
      </div>

      <div className="flex-1 border-l-4 border-primary pl-6">
        <ul className="space-y-2">
          {activities.map((activity: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Circle className="mt-1 flex-shrink-0 fill-current text-primary" size={8} />
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LifecycleStatusesSection() {
  return (
    <section id="lifecycle">
      <SectionHeader
        title="Lifecycle Statuses"
        description="Component maturity levels and what they mean"
        icon={<TrendingUp size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Status Overview */}
        <div className="grid gap-4 xl:grid-cols-4">
          <StatusBadgeCard
            status="Alpha"
            color="yellow"
            description="Early testing, breaking changes expected"
          />
          <StatusBadgeCard
            status="Beta"
            color="blue"
            description="Feature complete, testing with departments"
          />
          <StatusBadgeCard
            status="Production"
            color="green"
            description="Stable, ready for all government services"
          />
          <StatusBadgeCard
            status="Deprecated"
            color="red"
            description="Scheduled for removal, use alternative"
          />
        </div>

        {/* Detailed Status Information */}
        <div className="space-y-6">
          <StatusDetail
            status="Alpha"
            badge={{ bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' }}
            characteristics={[
              'Experimental component for early feedback',
              'Breaking changes may occur without notice',
              'Limited documentation',
              'Not recommended for production use',
              'Available for testing purposes only'
            ]}
            usage="Use only in non-production environments for evaluation and feedback"
            support="Limited support; expect rapid iteration"
          />

          <StatusDetail
            status="Beta"
            badge={{ bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' }}
            characteristics={[
              'Feature-complete and functionally stable',
              'Being tested by select departments',
              'API may have minor adjustments',
              'Full documentation available',
              'Accessibility compliance verified'
            ]}
            usage="Can be used in production with caution; monitor for updates"
            support="Active support; feedback encouraged"
          />

          <StatusDetail
            status="Production"
            badge={{ bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' }}
            characteristics={[
              'Fully tested and proven in production',
              'API is stable; breaking changes only in major versions',
              'Complete documentation and examples',
              'Full accessibility and browser support',
              'Long-term support guaranteed'
            ]}
            usage="Recommended for all government digital services"
            support="Full production support with SLA"
          />

          <StatusDetail
            status="Deprecated"
            badge={{ bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' }}
            characteristics={[
              'Scheduled for removal in future major version',
              'Replacement component available',
              'Migration guide provided',
              'Security updates only',
              'Removal date announced in advance'
            ]}
            usage="Begin migration to replacement component immediately"
            support="Minimal support; focus on migration assistance"
          />
        </div>
      </div>
    </section>
  );
}

function StatusBadgeCard({ status, color, description }: any) {
  const colorClasses = {
    yellow: 'bg-yellow-50 dark:bg-yellow-950/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    blue: 'bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
    red: 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
  };

  return (
    <div className={`rounded-2xl border p-4 text-center shadow-sm ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="mb-2 text-lg font-bold">{status}</div>
      <div className="text-xs">{description}</div>
    </div>
  );
}

function StatusDetail({ status, badge, characteristics, usage, support }: any) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-sm">
      <div className="flex items-center gap-3 border-b border-border bg-muted/35 p-4">
        <span className={`rounded-full border px-4 py-2 text-sm font-bold uppercase ${badge.bg} ${badge.text} ${badge.border}`}>
          {status}
        </span>
        <h3 className="font-bold text-foreground">Status details</h3>
      </div>

      <div className="grid gap-6 p-6 xl:grid-cols-2">
        <div>
          <h4 className="mb-3 font-semibold text-foreground">Characteristics:</h4>
          <ul className="space-y-2">
            {characteristics.map((char: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="mt-0.5 flex-shrink-0 text-muted-foreground dark:text-muted-foreground" size={14} />
                <span>{char}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold text-foreground">Usage guidance:</h4>
            <p className="text-sm text-muted-foreground">{usage}</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground">Support level:</h4>
            <p className="text-sm text-muted-foreground">{support}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromotionRulesSection() {
  return (
    <section id="promotion">
      <SectionHeader
        title="Promotion Rules"
        description="Criteria for advancing components through lifecycle stages"
        icon={<TrendingUp size={28} />}
      />

      <div className="mt-8 space-y-6">
        {/* Promotion Flow */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg p-8 bg-gradient-to-r from-yellow-50 via-blue-50 via-green-50 to-white dark:from-yellow-900/20 dark:via-blue-900/20 dark:via-green-900/20 dark:to-gray-900">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="text-center">
              <div className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-2 border-yellow-300 dark:border-yellow-700 rounded-full font-bold mb-2">
                ALPHA
              </div>
              <div className="text-xs text-muted-foreground dark:text-muted-foreground">Initial development</div>
            </div>

            <div className="flex flex-col items-center">
              <ChevronRight className="text-muted-foreground dark:text-muted-foreground" size={32} />
              <div className="text-xs text-muted-foreground">Promote</div>
            </div>

            <div className="text-center">
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-2 border-blue-300 dark:border-blue-700 rounded-full font-bold mb-2">
                BETA
              </div>
              <div className="text-xs text-muted-foreground dark:text-muted-foreground">Testing period</div>
            </div>

            <div className="flex flex-col items-center">
              <ChevronRight className="text-muted-foreground dark:text-muted-foreground" size={32} />
              <div className="text-xs text-muted-foreground">Promote</div>
            </div>

            <div className="text-center">
              <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-2 border-green-300 dark:border-green-700 rounded-full font-bold mb-2">
                PRODUCTION
              </div>
              <div className="text-xs text-muted-foreground dark:text-muted-foreground">Full release</div>
            </div>
          </div>
        </div>

        {/* Promotion Criteria */}
        <div className="grid gap-6 xl:grid-cols-2">
          <PromotionCriteria
            from="Alpha"
            to="Beta"
            requirements={[
              'Component design finalized and approved',
              'Core functionality implemented',
              'Basic documentation written',
              'Passes automated accessibility tests',
              'No critical bugs',
              'Engineering Lead approval'
            ]}
            timeline="Minimum 2 weeks in Alpha"
          />

          <PromotionCriteria
            from="Beta"
            to="Production"
            requirements={[
              'Tested by minimum 2 departments',
              'Beta period minimum 2 weeks (4 weeks for complex components)',
              'Zero critical or high-severity bugs',
              'Full WCAG 2.1 AA accessibility audit passed',
              'Complete documentation with examples',
              'Migration guide if replacing existing component',
              'Product Lead final approval'
            ]}
            timeline="Minimum 2 weeks in Beta"
          />
        </div>

        {/* Fast-Track Exception */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Zap className="text-orange-600 dark:text-orange-500 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-foreground dark:text-gray-100 dark:text-gray-200 mb-2">Fast-Track Promotion</h3>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-3">
                Critical bug fixes and minor variants can be fast-tracked through lifecycle stages with
                approval from both Design and Engineering Leads.
              </p>
              <div className="text-xs text-muted-foreground dark:text-muted-foreground">
                Fast-track requires: clear justification, minimal risk assessment, and full regression testing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PromotionCriteria({ from, to, requirements, timeline }: any) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-gradient-to-r from-muted/30 to-background p-4">
        <h3 className="flex items-center gap-2 font-bold text-foreground">
          {from} <ChevronRight size={20} className="text-muted-foreground dark:text-muted-foreground" /> {to}
        </h3>
        <div className="mt-1 text-xs text-muted-foreground">{timeline}</div>
      </div>

      <div className="p-6">
        <h4 className="mb-3 text-sm font-semibold text-foreground">Requirements:</h4>
        <ul className="space-y-2">
          {requirements.map((req: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" size={16} />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DeprecationProcessSection() {
  return (
    <section id="deprecation">
      <SectionHeader
        title="Deprecation Process"
        description="How components are phased out responsibly"
        icon={<Archive size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Deprecation Timeline */}
        <div className="rounded-[28px] border border-border bg-gradient-to-b from-card to-muted/20 p-8 shadow-sm">
          <h3 className="mb-6 text-center font-bold text-foreground">Deprecation timeline (minimum 6 months)</h3>
          
          <div className="max-w-5xl mx-auto space-y-4">
            <DeprecationPhase
              month="Month 1"
              phase="Announcement"
              actions={[
                'Deprecation notice published',
                'Replacement component identified',
                'Migration guide released',
                'All departments notified via email'
              ]}
              status="red"
            />
            
            <DeprecationPhase
              month="Month 2-4"
              phase="Migration Period"
              actions={[
                'Documentation updated with deprecation warnings',
                'Console warnings added to component',
                'Support for migration questions',
                'Track adoption of replacement component'
              ]}
              status="orange"
            />
            
            <DeprecationPhase
              month="Month 5-6"
              phase="Final Warning"
              actions={[
                'Second notification sent to all departments',
                'Confirmed removal date announced',
                'List of still-using departments compiled',
                'Direct outreach to non-migrated teams'
              ]}
              status="yellow"
            />
            
            <DeprecationPhase
              month="Month 7+"
              phase="Removal"
              actions={[
                'Component removed in next major version',
                'Final migration guide archived',
                'Legacy support ends',
                'Breaking change documented in release notes'
              ]}
              status="gray"
            />
          </div>
        </div>

        {/* Deprecation Criteria */}
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-4 font-bold text-foreground">Valid reasons for deprecation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" size={16} />
                <span>Better alternative component available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" size={16} />
                <span>Security vulnerability that cannot be patched</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" size={16} />
                <span>Component no longer meets accessibility standards</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" size={16} />
                <span>Technology platform no longer supported</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" size={16} />
                <span>Low usage and high maintenance cost</span>
              </li>
            </ul>
          </div>

          <div className="rounded-[24px] border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-950/20">
            <h3 className="mb-4 font-bold text-foreground">Deprecation safeguards</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" size={16} />
                <span>Minimum 6-month notice period</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" size={16} />
                <span>Clear migration path required</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" size={16} />
                <span>No deprecation in minor/patch releases</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" size={16} />
                <span>Direct support during migration</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" size={16} />
                <span>Product Lead must approve all deprecations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeprecationPhase({ month, phase, actions, status }: any) {
  const statusColors = {
    red: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20',
    orange: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20',
    yellow: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20',
    gray: 'border-border bg-card'
  };

  return (
    <div className="flex gap-6 rounded-[24px] border border-border bg-card p-4 shadow-sm">
      <div className="flex-shrink-0 text-right" style={{ width: '100px' }}>
        <div className="font-bold text-foreground">{month}</div>
        <div className="text-sm text-muted-foreground">{phase}</div>
      </div>

      <div className={`flex-1 border-l-4 ${statusColors[status as keyof typeof statusColors]} pl-6 py-3`}>
        <ul className="space-y-1">
          {actions.map((action: string, index: number) => (
            <li key={index} className="text-sm text-muted-foreground">• {action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExceptionProcessSection() {
  return (
    <section id="exceptions">
      <SectionHeader
        title="Exception Process"
        description="How to request exceptions to governance rules"
        icon={<AlertCircle size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* When to Request Exception */}
        <div className="rounded-[24px] border border-orange-200 bg-orange-50 p-6 shadow-sm dark:border-orange-800 dark:bg-orange-950/20">
          <h3 className="mb-4 font-bold text-foreground">When exceptions may be granted</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Valid exception scenarios:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Critical security vulnerability requiring immediate patch</li>
                <li>• Urgent government directive or policy change</li>
                <li>• Time-sensitive citizen-facing emergency</li>
                <li>• Technical constraint preventing standard compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Invalid exception requests:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Missed project deadlines</li>
                <li>• Preference for non-standard design</li>
                <li>• Lack of planning or resources</li>
                <li>• Convenience or speed of development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exception Request Process */}
        <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-sm">
          <div className="border-b border-border bg-muted/35 p-6">
            <h3 className="font-bold text-foreground">Exception request workflow</h3>
          </div>
          
          <div className="p-8 space-y-6">
            <ExceptionStep
              step="1"
              title="Submit Exception Request"
              description="Complete exception request form with detailed justification"
              required={[
                'What rule/standard requires exception?',
                'Why is exception necessary?',
                'What is the impact if denied?',
                'What alternatives were considered?',
                'Proposed mitigation for risks'
              ]}
            />

            <ExceptionStep
              step="2"
              title="Core Team Review"
              description="Design, Engineering, and Product Leads review request"
              required={[
                'Technical feasibility assessment',
                'Risk analysis',
                'Impact on design system consistency',
                'Precedent consideration'
              ]}
            />

            <ExceptionStep
              step="3"
              title="Decision & Communication"
              description="Decision made within 3 business days"
              required={[
                'Approved: Conditions and expiration date set',
                'Denied: Alternative solutions provided',
                'All decisions documented with rationale'
              ]}
            />
          </div>
        </div>

        {/* Exception Types */}
        <div className="grid gap-6 xl:grid-cols-3">
          <ExceptionType
            title="Temporary Exception"
            duration="3-6 months"
            description="Short-term deviation with plan to return to compliance"
            examples={['Emergency feature', 'Pilot program']}
          />
          
          <ExceptionType
            title="Conditional Exception"
            duration="Until condition met"
            description="Exception granted pending specific milestone or update"
            examples={['Awaiting library update', 'Browser support pending']}
          />
          
          <ExceptionType
            title="Permanent Exception"
            duration="Indefinite"
            description="Rare cases where standard doesn't apply"
            examples={['Legacy system integration', 'Unique security requirement']}
          />
        </div>
      </div>
    </section>
  );
}

function ExceptionStep({ step, title, description, required }: any) {
  return (
    <div className="flex gap-6 rounded-[24px] border border-border bg-card p-5 shadow-sm">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
        {step}
      </div>

      <div className="flex-1">
        <h4 className="mb-1 font-bold text-foreground">{title}</h4>
        <p className="mb-3 text-sm text-muted-foreground">{description}</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {required.map((item: string, index: number) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExceptionType({ title, duration, description, examples }: any) {
  return (
    <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
      <h3 className="mb-2 font-bold text-foreground">{title}</h3>
      <div className="mb-3 text-sm font-semibold text-orange-700 dark:text-orange-300">{duration}</div>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <div className="text-xs text-muted-foreground">
        <strong>Examples:</strong> {examples.join(', ')}
      </div>
    </div>
  );
}

function ConformanceExpectationsSection() {
  return (
    <section id="conformance">
      <SectionHeader
        title="Conformance Expectations"
        description="Standards for adopting and using UX4G correctly"
        icon={<Shield size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Conformance Levels */}
        <div className="grid gap-6 xl:grid-cols-3">
          <ConformanceLevel
            level="Full Conformance"
            badge="gold"
            requirements={[
              'All UI uses UX4G components',
              'No custom CSS overrides',
              'Design tokens used throughout',
              'Accessibility verified',
              'Regular updates maintained'
            ]}
            benefits="Full support + priority feature requests"
          />

          <ConformanceLevel
            level="Substantial Conformance"
            badge="silver"
            requirements={[
              '80%+ of UI uses UX4G',
              'Minimal custom styling',
              'Core flows accessible',
              'Update lag ≤ 1 minor version'
            ]}
            benefits="Standard support + community priority"
          />

          <ConformanceLevel
            level="Partial Conformance"
            badge="bronze"
            requirements={[
              '50%+ of UI uses UX4G',
              'Key components from system',
              'Working toward full adoption'
            ]}
            benefits="Community support + migration assistance"
          />
        </div>

        {/* Verification Process */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100 dark:text-gray-200">Conformance Verification</h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">How conformance is measured and verified</p>
          </div>
          
          <div className="p-6 space-y-6">
            <VerificationMethod
              method="Automated Scanning"
              frequency="Weekly"
              description="Automated tools scan deployed applications for UX4G component usage, version compliance, and accessibility violations"
              tools={['Component usage analyzer', 'Version checker', 'Accessibility scanner']}
            />

            <VerificationMethod
              method="Quarterly Review"
              frequency="Quarterly"
              description="Design system team conducts manual review of department applications"
              tools={['Visual inspection', 'Code review', 'Analytics review']}
            />

            <VerificationMethod
              method="Self-Assessment"
              frequency="Annually"
              description="Departments complete self-assessment checklist and submit to governance team"
              tools={['Conformance checklist', 'Usage metrics', 'Roadmap alignment']}
            />
          </div>
        </div>

        {/* Non-Conformance */}
        <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 dark:text-gray-200 mb-4 flex items-center gap-2">
            <XCircle className="text-red-600 dark:text-red-500" size={20} />
            Non-Conformance Consequences
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 dark:text-gray-200 mb-3">For Government Departments:</h4>
              <ul className="space-y-2 text-muted-foreground dark:text-muted-foreground">
                <li>• Reduced support priority</li>
                <li>• Excluded from beta testing programs</li>
                <li>• May not influence design system roadmap</li>
                <li>• Required justification in project reviews</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 dark:text-gray-200 mb-3">For Vendor Partners:</h4>
              <ul className="space-y-2 text-muted-foreground dark:text-muted-foreground">
                <li>• Application may be rejected in acceptance testing</li>
                <li>• Remediation work required before go-live</li>
                <li>• Future contract consideration affected</li>
                <li>• No exceptions without formal approval process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConformanceLevel({ level, badge, requirements, benefits }: any) {
  const badgeColors = {
    gold: 'bg-yellow-50 dark:bg-yellow-950/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    silver: 'bg-muted/40 text-muted-foreground border-border',
    bronze: 'bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800'
  };

  return (
    <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-sm">
      <div className={`border-b border-border p-4 ${badgeColors[badge as keyof typeof badgeColors]}`}>
        <h3 className="text-center text-lg font-bold">{level}</h3>
      </div>

      <div className="p-6">
        <h4 className="mb-3 text-sm font-semibold text-foreground">Requirements:</h4>
        <ul className="space-y-2 mb-6">
          {requirements.map((req: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="mt-0.5 flex-shrink-0 text-muted-foreground dark:text-muted-foreground" size={14} />
              <span>{req}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-border pt-4">
          <div className="mb-1 text-xs text-muted-foreground">Benefits:</div>
          <div className="text-sm font-semibold text-foreground">{benefits}</div>
        </div>
      </div>
    </div>
  );
}

function VerificationMethod({ method, frequency, description, tools }: any) {
  return (
    <div className="flex gap-6 rounded-[24px] border border-border bg-card p-5 shadow-sm">
      <div className="flex-shrink-0 w-32">
        <div className="font-bold text-foreground">{method}</div>
        <div className="text-sm text-muted-foreground">{frequency}</div>
      </div>

      <div className="flex-1">
        <p className="mb-3 text-sm text-muted-foreground">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tools.map((tool: string, index: number) => (
            <span key={index} className="rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 dark:border-blue-800 dark:bg-blue-950/20 dark:text-blue-400">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Components

function SectionHeader({ title, description, icon }: any) {
  return (
    <div className="max-w-3xl space-y-3">
      <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
        <div className="text-primary">{icon}</div>
        <span className="text-sm font-semibold text-muted-foreground">Governance section</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      <p className="text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}
