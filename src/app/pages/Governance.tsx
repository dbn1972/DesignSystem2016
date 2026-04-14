import { Users, GitBranch, CheckCircle, AlertCircle, Clock, XCircle, ChevronRight, Shield, FileText, Zap, TrendingUp, Archive, ArrowRight, CheckSquare, Circle } from "lucide-react";

export default function Governance() {
  return (
    <div className="min-h-screen bg-card dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#000080] via-[#000070] to-[#000050] dark:from-blue-900 dark:via-blue-950 dark:to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <Shield size={16} />
              <span>Design System Governance</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Governance & Lifecycle
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              UX4G is governed as a product platform, not just a component library. This framework ensures quality, 
              consistency, and scalability across all government digital services while enabling collaborative contribution 
              from departments and vendors.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 dark:bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Clear Ownership</div>
                <div className="text-blue-200 dark:text-blue-300 text-sm">Defined roles and responsibilities</div>
              </div>
              <div className="bg-white/10 dark:bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Quality Gates</div>
                <div className="text-blue-200 dark:text-blue-300 text-sm">Multi-stage review process</div>
              </div>
              <div className="bg-white/10 dark:bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Lifecycle Model</div>
                <div className="text-blue-200 dark:text-blue-300 text-sm">Alpha to production workflow</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-24">
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
      </div>
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
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Governance Structure</h3>
          </div>

          <div className="p-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            {/* Core Team */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block bg-primary text-white rounded-lg p-6 shadow-lg">
                  <div className="font-bold text-xl mb-1">UX4G Core Team</div>
                  <div className="text-sm text-blue-200">Strategic Direction & Final Authority</div>
                </div>
              </div>

              {/* Three Pillars */}
              <div className="grid grid-cols-3 gap-6">
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
              <div className="mt-8 pt-8 border-t-2 border-border dark:border-gray-700">
                <h4 className="font-bold text-foreground dark:text-gray-100 mb-4 text-center">Supporting Roles</h4>
                <div className="grid grid-cols-4 gap-4">
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
            <h3 className="font-bold text-foreground dark:text-gray-100">Responsibility Matrix (RACI)</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-background dark:bg-gray-800 border-b-2 border-border dark:border-gray-700">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground dark:text-gray-100">Activity</th>
                  <th className="text-center p-4 font-semibold text-foreground dark:text-gray-100">Design Lead</th>
                  <th className="text-center p-4 font-semibold text-foreground dark:text-gray-100">Eng Lead</th>
                  <th className="text-center p-4 font-semibold text-foreground dark:text-gray-100">Product Lead</th>
                  <th className="text-center p-4 font-semibold text-foreground dark:text-gray-100">Contributors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
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
            <div className="grid grid-cols-4 gap-6 text-xs">
              <div>
                <strong className="text-foreground dark:text-gray-100">R - Responsible:</strong>
                <span className="text-muted-foreground dark:text-gray-300 ml-1">Does the work</span>
              </div>
              <div>
                <strong className="text-foreground dark:text-gray-100">A - Accountable:</strong>
                <span className="text-muted-foreground dark:text-gray-300 ml-1">Final approval</span>
              </div>
              <div>
                <strong className="text-foreground dark:text-gray-100">C - Consulted:</strong>
                <span className="text-muted-foreground dark:text-gray-300 ml-1">Provides input</span>
              </div>
              <div>
                <strong className="text-foreground dark:text-gray-100">I - Informed:</strong>
                <span className="text-muted-foreground dark:text-gray-300 ml-1">Kept updated</span>
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
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-800',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-800'
  };

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg p-6`}>
      <h3 className="font-bold text-foreground dark:text-gray-100 mb-4 text-lg">{title}</h3>
      <ul className="space-y-2">
        {responsibilities.map((resp: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
            <CheckCircle className="flex-shrink-0 mt-0.5 text-gray-400" size={16} />
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SupportRole({ title, description }: any) {
  return (
    <div className="bg-muted dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg p-3 text-center">
      <div className="font-semibold text-foreground dark:text-gray-100 text-sm mb-1">{title}</div>
      <div className="text-xs text-muted-foreground dark:text-gray-400">{description}</div>
    </div>
  );
}

function RACIRow({ activity, roles }: any) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'R': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700';
      case 'A': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700';
      case 'C': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700';
      case 'I': return 'bg-muted dark:bg-gray-800 text-muted-foreground dark:text-gray-300 border-border dark:border-gray-700';
      default: return '';
    }
  };

  return (
    <tr className="hover:bg-background dark:hover:bg-gray-800">
      <td className="p-4 font-semibold text-foreground dark:text-gray-100">{activity}</td>
      {roles.map((role: string, index: number) => (
        <td key={index} className="p-4 text-center">
          <span className={`inline-block px-3 py-1 rounded-full font-bold text-xs border ${getRoleColor(role)}`}>
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

      <div className="mt-8 grid grid-cols-3 gap-6">
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

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Parallel Review Process</h3>
        <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
          All three review lanes run in parallel to minimize total review time. A contribution must pass
          all applicable reviews before advancing to approval gates.
        </p>

        <div className="bg-card dark:bg-gray-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded font-semibold text-sm">
                Design ✓
              </div>
              <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded font-semibold text-sm">
                Engineering ✓
              </div>
              <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-semibold text-sm">
                Documentation ✓
              </div>
            </div>
            <ArrowRight className="text-gray-400 dark:text-muted-foreground" size={24} />
            <div className="px-4 py-2 bg-green-700 dark:bg-green-700 text-white rounded-lg font-bold">
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
    blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
    purple: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
    green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
  };

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg overflow-hidden`}>
      <div className="bg-card dark:bg-gray-900 border-b-2 border-border dark:border-gray-700 p-4">
        <h3 className="font-bold text-foreground dark:text-gray-100 text-lg mb-1">{title}</h3>
        <div className="text-sm text-muted-foreground dark:text-gray-400">Owner: {owner}</div>
      </div>

      <div className="p-4">
        <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3 text-sm">Review Focus:</h4>
        <ul className="space-y-2 mb-4">
          {focuses.map((focus: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-gray-400" size={14} />
              <span>{focus}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-border dark:border-gray-700 flex items-center gap-2 text-sm">
          <Clock size={14} className="text-gray-500" />
          <span className="text-muted-foreground dark:text-gray-400">Timeline: {timeline}</span>
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
        <div className="border-2 border-border dark:border-gray-700 rounded-lg p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-6 text-center">Approval Flow</h3>
          
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <ApprovalGate
                title="Submission"
                status="start"
                requirements={[
                  'Complete contribution',
                  'Documentation included',
                  'Tests passing'
                ]}
              />
              
              <ArrowRight className="text-gray-300" size={32} />
              
              <ApprovalGate
                title="Technical Review"
                status="review"
                requirements={[
                  'Code quality ✓',
                  'Performance ✓',
                  'Accessibility ✓'
                ]}
              />
              
              <ArrowRight className="text-gray-300" size={32} />
              
              <ApprovalGate
                title="Governance Approval"
                status="approval"
                requirements={[
                  'Core team review',
                  'Strategic alignment',
                  'Resource availability'
                ]}
              />
              
              <ArrowRight className="text-gray-300" size={32} />
              
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
        <div className="grid grid-cols-2 gap-6">
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
    start: 'bg-muted dark:bg-gray-800 border-border dark:border-gray-700',
    review: 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-800',
    approval: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700',
    complete: 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-800'
  };

  return (
    <div className={`border-2 ${statusColors[status as keyof typeof statusColors]} rounded-lg p-4 min-w-[200px]`}>
      <h4 className="font-bold text-foreground dark:text-gray-100 mb-3 text-center">{title}</h4>
      <ul className="space-y-1">
        {requirements.map((req: string, index: number) => (
          <li key={index} className="text-xs text-muted-foreground dark:text-gray-300">• {req}</li>
        ))}
      </ul>
    </div>
  );
}

function GateDetails({ title, criteria, approver }: any) {
  return (
    <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-background dark:bg-gray-800 p-4 border-b-2 border-border dark:border-gray-700">
        <h3 className="font-bold text-foreground dark:text-gray-100">{title}</h3>
      </div>

      <div className="p-6">
        <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3 text-sm">Approval Criteria:</h4>
        <ul className="space-y-2 mb-6">
          {criteria.map((criterion: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808] dark:text-green-500" size={16} />
              <span>{criterion}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-border dark:border-gray-700">
          <div className="text-xs text-muted-foreground dark:text-gray-400 mb-1">Final Approver:</div>
          <div className="font-semibold text-foreground dark:text-gray-100">{approver}</div>
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
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100 mb-2">Contribution Workflow</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-300">End-to-end process for contributing components, patterns, or improvements</p>
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
              
              <div className="ml-6 border-l-2 border-border dark:border-gray-700 h-8"></div>
              
              <ContributionStep
                number="2"
                title="Review & Discussion"
                description="Core team reviews proposal and provides feedback"
                duration="3-5 days"
                actions={['Team discussion', 'Feasibility assessment', 'Priority determination']}
              />
              
              <div className="ml-6 border-l-2 border-border dark:border-gray-700 h-8"></div>
              
              <ContributionStep
                number="3"
                title="Design & Development"
                description="Approved proposal moves to implementation phase"
                duration="1-4 weeks"
                actions={['Design in Figma', 'Code implementation', 'Write documentation']}
              />
              
              <div className="ml-6 border-l-2 border-border dark:border-gray-700 h-8"></div>
              
              <ContributionStep
                number="4"
                title="Review Lanes"
                description="Parallel review by design, engineering, and documentation teams"
                duration="2-3 days"
                actions={['Design review', 'Code review', 'Documentation review']}
              />
              
              <div className="ml-6 border-l-2 border-border dark:border-gray-700 h-8"></div>
              
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
        <div className="grid grid-cols-3 gap-6">
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
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-primary dark:bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>

      <div className="flex-1 bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-bold text-foreground dark:text-gray-100 text-lg">{title}</h4>
            <p className="text-sm text-muted-foreground dark:text-gray-400">{description}</p>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1 flex-shrink-0 ml-4">
            <Clock size={12} />
            {duration}
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          {actions.map((action: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">
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
    blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
    purple: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
    green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
  };

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg p-6`}>
      <h3 className="font-bold text-foreground dark:text-gray-100 text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">{description}</p>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground dark:text-gray-400">Effort Level:</span>
          <span className="font-semibold text-foreground dark:text-gray-100">{effort}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground dark:text-gray-400">Approval:</span>
          <span className="font-semibold text-foreground dark:text-gray-100 text-right">{approval}</span>
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
        <div className="grid grid-cols-3 gap-6">
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
            <h3 className="font-bold text-foreground dark:text-gray-100">Release Process</h3>
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
    red: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20',
    yellow: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
    green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
  };

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg p-6`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-foreground dark:text-gray-100 text-lg">{title}</h3>
        <code className="px-2 py-1 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 rounded text-xs font-mono">{version}</code>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <div className="text-muted-foreground dark:text-gray-400 text-xs mb-1">Frequency:</div>
          <div className="font-semibold text-foreground dark:text-gray-100">{frequency}</div>
        </div>
        <div>
          <div className="text-muted-foreground dark:text-gray-400 text-xs mb-1">Includes:</div>
          <div className="text-muted-foreground dark:text-gray-300">{description}</div>
        </div>
        <div>
          <div className="text-muted-foreground dark:text-gray-400 text-xs mb-1">Planning:</div>
          <div className="text-muted-foreground dark:text-gray-300">{planning}</div>
        </div>
      </div>
    </div>
  );
}

function ReleasePhase({ phase, duration, activities }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 text-right" style={{ width: '120px' }}>
        <div className="font-bold text-foreground dark:text-gray-100">{phase}</div>
        <div className="text-sm text-muted-foreground dark:text-gray-400">{duration}</div>
      </div>

      <div className="flex-1 border-l-4 border-primary dark:border-blue-700 pl-6">
        <ul className="space-y-2">
          {activities.map((activity: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
              <Circle className="flex-shrink-0 mt-1 fill-current text-primary dark:text-blue-700" size={8} />
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
        <div className="grid grid-cols-4 gap-4">
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
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700',
    red: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-300 dark:border-red-700'
  };

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg p-4 text-center`}>
      <div className="font-bold text-lg mb-2">{status}</div>
      <div className="text-xs">{description}</div>
    </div>
  );
}

function StatusDetail({ status, badge, characteristics, usage, support }: any) {
  return (
    <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-background dark:bg-gray-800 p-4 border-b-2 border-border dark:border-gray-700 flex items-center gap-3">
        <span className={`px-4 py-2 ${badge.bg} ${badge.text} border ${badge.border} rounded-full font-bold text-sm uppercase`}>
          {status}
        </span>
        <h3 className="font-bold text-foreground dark:text-gray-100">Status Details</h3>
      </div>

      <div className="p-6 grid grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3">Characteristics:</h4>
          <ul className="space-y-2">
            {characteristics.map((char: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-gray-400" size={14} />
                <span>{char}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground dark:text-gray-100 mb-2">Usage Guidance:</h4>
            <p className="text-sm text-muted-foreground dark:text-gray-300">{usage}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground dark:text-gray-100 mb-2">Support Level:</h4>
            <p className="text-sm text-muted-foreground dark:text-gray-300">{support}</p>
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
              <div className="text-xs text-muted-foreground dark:text-gray-400">Initial development</div>
            </div>

            <div className="flex flex-col items-center">
              <ChevronRight className="text-gray-400 dark:text-muted-foreground" size={32} />
              <div className="text-xs text-gray-500">Promote</div>
            </div>

            <div className="text-center">
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-2 border-blue-300 dark:border-blue-700 rounded-full font-bold mb-2">
                BETA
              </div>
              <div className="text-xs text-muted-foreground dark:text-gray-400">Testing period</div>
            </div>

            <div className="flex flex-col items-center">
              <ChevronRight className="text-gray-400 dark:text-muted-foreground" size={32} />
              <div className="text-xs text-gray-500">Promote</div>
            </div>

            <div className="text-center">
              <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-2 border-green-300 dark:border-green-700 rounded-full font-bold mb-2">
                PRODUCTION
              </div>
              <div className="text-xs text-muted-foreground dark:text-gray-400">Full release</div>
            </div>
          </div>
        </div>

        {/* Promotion Criteria */}
        <div className="grid grid-cols-2 gap-6">
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
              <h3 className="font-bold text-foreground dark:text-gray-100 mb-2">Fast-Track Promotion</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-300 mb-3">
                Critical bug fixes and minor variants can be fast-tracked through lifecycle stages with
                approval from both Design and Engineering Leads.
              </p>
              <div className="text-xs text-muted-foreground dark:text-gray-400">
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
    <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 border-b-2 border-border dark:border-gray-700">
        <h3 className="font-bold text-foreground dark:text-gray-100 flex items-center gap-2">
          {from} <ChevronRight size={20} className="text-gray-400 dark:text-muted-foreground" /> {to}
        </h3>
        <div className="text-xs text-muted-foreground dark:text-gray-400 mt-1">{timeline}</div>
      </div>

      <div className="p-6">
        <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3 text-sm">Requirements:</h4>
        <ul className="space-y-2">
          {requirements.map((req: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808] dark:text-green-500" size={16} />
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
        <div className="border-2 border-border dark:border-gray-700 rounded-lg p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-6 text-center">Deprecation Timeline (Minimum 6 Months)</h3>
          
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
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-bold text-foreground dark:text-gray-100 mb-4">Valid Reasons for Deprecation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808] dark:text-green-500" size={16} />
                <span>Better alternative component available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808] dark:text-green-500" size={16} />
                <span>Security vulnerability that cannot be patched</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808] dark:text-green-500" size={16} />
                <span>Component no longer meets accessibility standards</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808] dark:text-green-500" size={16} />
                <span>Technology platform no longer supported</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808] dark:text-green-500" size={16} />
                <span>Low usage and high maintenance cost</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
            <h3 className="font-bold text-foreground dark:text-gray-100 mb-4">Deprecation Safeguards</h3>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300">
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-red-600 dark:text-red-500" size={16} />
                <span>Minimum 6-month notice period</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-red-600 dark:text-red-500" size={16} />
                <span>Clear migration path required</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-red-600 dark:text-red-500" size={16} />
                <span>No deprecation in minor/patch releases</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-red-600 dark:text-red-500" size={16} />
                <span>Direct support during migration</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-red-600 dark:text-red-500" size={16} />
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
    red: 'border-red-400 dark:border-red-700 bg-red-50 dark:bg-red-900/20',
    orange: 'border-orange-400 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20',
    yellow: 'border-yellow-400 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20',
    gray: 'border-gray-400 dark:border-gray-700 bg-background dark:bg-gray-800'
  };

  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 text-right" style={{ width: '100px' }}>
        <div className="font-bold text-foreground dark:text-gray-100">{month}</div>
        <div className="text-sm text-muted-foreground dark:text-gray-400">{phase}</div>
      </div>

      <div className={`flex-1 border-l-4 ${statusColors[status as keyof typeof statusColors]} pl-6 py-3`}>
        <ul className="space-y-1">
          {actions.map((action: string, index: number) => (
            <li key={index} className="text-sm text-muted-foreground dark:text-gray-300">• {action}</li>
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
        <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-4">When Exceptions May Be Granted</h3>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 mb-2">Valid Exception Scenarios:</h4>
              <ul className="space-y-2 text-muted-foreground dark:text-gray-300">
                <li>• Critical security vulnerability requiring immediate patch</li>
                <li>• Urgent government directive or policy change</li>
                <li>• Time-sensitive citizen-facing emergency</li>
                <li>• Technical constraint preventing standard compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 mb-2">Invalid Exception Requests:</h4>
              <ul className="space-y-2 text-muted-foreground dark:text-gray-300">
                <li>• Missed project deadlines</li>
                <li>• Preference for non-standard design</li>
                <li>• Lack of planning or resources</li>
                <li>• Convenience or speed of development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exception Request Process */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Exception Request Workflow</h3>
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
        <div className="grid grid-cols-3 gap-6">
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
    <div className="flex gap-6">
      <div className="w-10 h-10 bg-orange-600 dark:bg-orange-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
        {step}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-foreground dark:text-gray-100 mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3">{description}</p>
        <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
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
    <div className="border-2 border-border dark:border-gray-700 rounded-lg p-6">
      <h3 className="font-bold text-foreground dark:text-gray-100 mb-2">{title}</h3>
      <div className="text-sm text-orange-600 dark:text-orange-500 font-semibold mb-3">{duration}</div>
      <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">{description}</p>
      <div className="text-xs text-muted-foreground dark:text-gray-400">
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
        <div className="grid grid-cols-3 gap-6">
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
            <h3 className="font-bold text-foreground dark:text-gray-100">Conformance Verification</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">How conformance is measured and verified</p>
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
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-4 flex items-center gap-2">
            <XCircle className="text-red-600 dark:text-red-500" size={20} />
            Non-Conformance Consequences
          </h3>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3">For Government Departments:</h4>
              <ul className="space-y-2 text-muted-foreground dark:text-gray-300">
                <li>• Reduced support priority</li>
                <li>• Excluded from beta testing programs</li>
                <li>• May not influence design system roadmap</li>
                <li>• Required justification in project reviews</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3">For Vendor Partners:</h4>
              <ul className="space-y-2 text-muted-foreground dark:text-gray-300">
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
    gold: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700',
    silver: 'bg-muted dark:bg-gray-800 text-muted-foreground dark:text-gray-300 border-border dark:border-gray-700',
    bronze: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-700'
  };

  return (
    <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className={`p-4 border-b-2 ${badgeColors[badge as keyof typeof badgeColors]} border-border dark:border-gray-700`}>
        <h3 className="font-bold text-center text-lg">{level}</h3>
      </div>

      <div className="p-6">
        <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3 text-sm">Requirements:</h4>
        <ul className="space-y-2 mb-6">
          {requirements.map((req: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-gray-400" size={14} />
              <span>{req}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-border dark:border-gray-700">
          <div className="text-xs text-muted-foreground dark:text-gray-400 mb-1">Benefits:</div>
          <div className="text-sm font-semibold text-foreground dark:text-gray-100">{benefits}</div>
        </div>
      </div>
    </div>
  );
}

function VerificationMethod({ method, frequency, description, tools }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-32">
        <div className="font-bold text-foreground dark:text-gray-100">{method}</div>
        <div className="text-sm text-muted-foreground dark:text-gray-400">{frequency}</div>
      </div>

      <div className="flex-1">
        <p className="text-sm text-muted-foreground dark:text-gray-300 mb-3">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tools.map((tool: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">
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
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary dark:text-blue-400">{icon}</div>
        <h2 className="text-4xl font-bold text-foreground dark:text-gray-100">{title}</h2>
      </div>
      <p className="text-lg text-muted-foreground dark:text-gray-400">{description}</p>
    </div>
  );
}
