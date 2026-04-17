import { Users, Heart, Shield, MessageCircle, AlertTriangle, CheckCircle, XCircle, FileText, Scale, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CodeOfConduct() {
  const { i18n } = useTranslation();
  const c = i18n.resolvedLanguage === 'hi' ? COC_HI : COC_EN;
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#000080] via-[#000070] to-[#000050] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 rounded-full text-sm mb-6">
              <Heart size={16} />
              <span>{c.badge}</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              {c.title}
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {c.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-card/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Inclusive</div>
                <div className="text-blue-200 text-sm">Everyone is welcome</div>
              </div>
              <div className="bg-card/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Respectful</div>
                <div className="text-blue-200 text-sm">Treat all with dignity</div>
              </div>
              <div className="bg-card/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Collaborative</div>
                <div className="text-blue-200 text-sm">Work together effectively</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-24">
        <OurPledgeSection />
        <StandardsSection />
        <ExpectedBehaviorSection />
        <UnacceptableBehaviorSection />
        <ResponsibilitiesSection />
        <ScopeSection />
        <EnforcementSection />
        <ReportingSection />
        <ConsequencesSection />
        <AttributionSection />
      </div>
    </div>
  );
}

function OurPledgeSection() {
  return (
    <section id="pledge">
      <SectionHeader
        title="Our Pledge"
        description="Our commitment to fostering an open and welcoming environment"
        icon={<Heart size={28} />}
      />

      <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            In the interest of fostering an open and welcoming environment, we as contributors, maintainers, and
            community members pledge to make participation in the UX4G Design System project and our community a
            harassment-free experience for everyone, regardless of:
          </p>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <PledgeItem text="Age, body size, disability" />
              <PledgeItem text="Ethnicity, gender identity and expression" />
              <PledgeItem text="Level of experience, education" />
              <PledgeItem text="Nationality, personal appearance" />
            </div>
            <div className="space-y-3">
              <PledgeItem text="Race, religion, caste" />
              <PledgeItem text="Sexual identity and orientation" />
              <PledgeItem text="Socio-economic status" />
              <PledgeItem text="Any other dimension of diversity" />
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive,
            and healthy community that serves the citizens of India through better government digital services.
          </p>
        </div>
      </div>
    </section>
  );
}

function PledgeItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle className="flex-shrink-0 mt-1 text-blue-600" size={18} />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function StandardsSection() {
  return (
    <section id="standards">
      <SectionHeader
        title="Our Standards"
        description="Examples of behavior that contributes to a positive environment"
        icon={<Scale size={28} />}
      />

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
            <CheckCircle className="text-green-600" size={20} />
            Positive Behaviors
          </h3>
          <ul className="space-y-3">
            <BehaviorItem
              text="Using welcoming and inclusive language"
              positive
            />
            <BehaviorItem
              text="Being respectful of differing viewpoints and experiences"
              positive
            />
            <BehaviorItem
              text="Gracefully accepting constructive criticism"
              positive
            />
            <BehaviorItem
              text="Focusing on what is best for the community and citizens"
              positive
            />
            <BehaviorItem
              text="Showing empathy towards other community members"
              positive
            />
            <BehaviorItem
              text="Giving and receiving feedback professionally"
              positive
            />
            <BehaviorItem
              text="Acknowledging contributions from all members"
              positive
            />
            <BehaviorItem
              text="Collaborating across departments and organizations"
              positive
            />
          </ul>
        </div>

        <div className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
            <XCircle className="text-red-600" size={20} />
            Unacceptable Behaviors
          </h3>
          <ul className="space-y-3">
            <BehaviorItem
              text="The use of sexualized language or imagery"
              positive={false}
            />
            <BehaviorItem
              text="Trolling, insulting/derogatory comments, and personal attacks"
              positive={false}
            />
            <BehaviorItem
              text="Public or private harassment of any kind"
              positive={false}
            />
            <BehaviorItem
              text="Publishing others' private information without permission"
              positive={false}
            />
            <BehaviorItem
              text="Unwelcome sexual attention or advances"
              positive={false}
            />
            <BehaviorItem
              text="Other conduct which could reasonably be considered inappropriate"
              positive={false}
            />
            <BehaviorItem
              text="Advocating for, or encouraging, any unacceptable behavior"
              positive={false}
            />
            <BehaviorItem
              text="Deliberate intimidation, stalking, or following"
              positive={false}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

function BehaviorItem({ text, positive }: { text: string; positive: boolean }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      {positive ? (
        <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
      ) : (
        <XCircle className="flex-shrink-0 mt-0.5 text-red-600" size={16} />
      )}
      <span>{text}</span>
    </li>
  );
}

function ExpectedBehaviorSection() {
  return (
    <section id="expected">
      <SectionHeader
        title="Expected Behavior"
        description="What we expect from all community members"
        icon={<Users size={28} />}
      />

      <div className="mt-8 grid grid-cols-3 gap-6">
        <ExpectedBehaviorCard
          title="Be Respectful"
          icon={<Heart size={24} />}
          behaviors={[
            'Value different opinions',
            'Use welcoming language',
            'Respect personal boundaries',
            'Practice empathy'
          ]}
        />

        <ExpectedBehaviorCard
          title="Be Collaborative"
          icon={<Users size={24} />}
          behaviors={[
            'Share knowledge openly',
            'Help others learn',
            'Accept feedback gracefully',
            'Work toward common goals'
          ]}
        />

        <ExpectedBehaviorCard
          title="Be Professional"
          icon={<Shield size={24} />}
          behaviors={[
            'Maintain professional standards',
            'Communicate clearly',
            'Honor commitments',
            'Represent the community well'
          ]}
        />
      </div>
    </section>
  );
}

function ExpectedBehaviorCard({ title, icon, behaviors }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="font-bold text-foreground text-lg">{title}</h3>
      </div>
      <ul className="space-y-2">
        {behaviors.map((behavior: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={14} />
            <span>{behavior}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UnacceptableBehaviorSection() {
  return (
    <section id="unacceptable">
      <SectionHeader
        title="Unacceptable Behavior"
        description="Behaviors that will not be tolerated in our community"
        icon={<AlertTriangle size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Zero Tolerance Behaviors</h3>
          <p className="text-sm text-muted-foreground mb-4">
            The following behaviors will result in immediate action, including potential ban from the community:
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <UnacceptableItem
                text="Violence, threats of violence, or violent language"
                severity="critical"
              />
              <UnacceptableItem
                text="Discriminatory jokes, language, or behavior"
                severity="critical"
              />
              <UnacceptableItem
                text="Posting or threatening to post people's personally identifying information"
                severity="critical"
              />
              <UnacceptableItem
                text="Sexual images or behavior in public or private spaces"
                severity="critical"
              />
            </div>
            <div className="space-y-2">
              <UnacceptableItem
                text="Intimidation, stalking, or following (online or in-person)"
                severity="critical"
              />
              <UnacceptableItem
                text="Harassing photography or recording"
                severity="critical"
              />
              <UnacceptableItem
                text="Sustained disruption of community events or discussions"
                severity="critical"
              />
              <UnacceptableItem
                text="Advocating for or encouraging any of the above behaviors"
                severity="critical"
              />
            </div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Unprofessional Behaviors</h3>
          <p className="text-sm text-muted-foreground mb-4">
            These behaviors may result in warnings, temporary suspension, or permanent ban depending on severity and repetition:
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <UnacceptableItem
              text="Trolling or deliberately inflammatory comments"
              severity="high"
            />
            <UnacceptableItem
              text="Insults or derogatory comments about individuals or groups"
              severity="high"
            />
            <UnacceptableItem
              text="Publishing private communication without consent"
              severity="high"
            />
            <UnacceptableItem
              text="Unwelcome comments regarding a person's lifestyle choices"
              severity="high"
            />
            <UnacceptableItem
              text="Deliberate misgendering or use of rejected names"
              severity="high"
            />
            <UnacceptableItem
              text="Pattern of inappropriate social contact"
              severity="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function UnacceptableItem({ text, severity }: { text: string; severity: string }) {
  const severityColors = {
    critical: 'text-red-700',
    high: 'text-orange-700'
  };

  return (
    <div className="flex items-start gap-2">
      <AlertTriangle className={`flex-shrink-0 mt-0.5 ${severityColors[severity as keyof typeof severityColors]}`} size={16} />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function ResponsibilitiesSection() {
  return (
    <section id="responsibilities">
      <SectionHeader
        title="Maintainer Responsibilities"
        description="How project maintainers uphold these standards"
        icon={<Shield size={28} />}
      />

      <div className="mt-8 border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-background p-6 border-b-2 border-border">
          <h3 className="font-bold text-foreground">Maintainer Duties</h3>
        </div>

        <div className="p-8 space-y-6">
          <ResponsibilityItem
            title="Clarify Standards"
            description="Clearly communicate and exemplify acceptable behavior standards"
            actions={[
              'Update Code of Conduct as needed',
              'Provide clear examples',
              'Answer questions about expectations'
            ]}
          />

          <ResponsibilityItem
            title="Take Action"
            description="Take appropriate and fair corrective action in response to unacceptable behavior"
            actions={[
              'Investigate reports promptly',
              'Apply consequences consistently',
              'Document all incidents'
            ]}
          />

          <ResponsibilityItem
            title="Remove Content"
            description="Remove, edit, or reject contributions that violate this Code of Conduct"
            actions={[
              'Moderate comments and discussions',
              'Remove inappropriate content',
              'Explain reasons for moderation'
            ]}
          />

          <ResponsibilityItem
            title="Temporary or Permanent Bans"
            description="Ban contributors temporarily or permanently for inappropriate, threatening, or harmful behaviors"
            actions={[
              'Apply progressive discipline',
              'Communicate bans clearly',
              'Provide appeal process'
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ResponsibilityItem({ title, description, actions }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
          <Shield size={24} />
        </div>
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-foreground text-lg mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {actions.map((action: string, index: number) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs">
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScopeSection() {
  return (
    <section id="scope">
      <SectionHeader
        title="Scope"
        description="Where this Code of Conduct applies"
        icon={<BookOpen size={28} />}
      />

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Project Spaces</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This Code of Conduct applies within all UX4G project spaces, including:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span>GitHub repositories and issue trackers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span>Communication channels (Slack, email, forums)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span>Documentation and wiki pages</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span>Social media accounts</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span>Virtual or in-person events and meetings</span>
            </li>
          </ul>
        </div>

        <div className="border-2 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Public Representation</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This Code of Conduct also applies when representing the project in public spaces:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-purple-600" size={16} />
              <span>Using an official project email address</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-purple-600" size={16} />
              <span>Posting via official social media accounts</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-purple-600" size={16} />
              <span>Speaking at conferences or events as a representative</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-purple-600" size={16} />
              <span>Acting as an appointed representative online or offline</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function EnforcementSection() {
  return (
    <section id="enforcement">
      <SectionHeader
        title="Enforcement"
        description="How violations are addressed and resolved"
        icon={<Scale size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border rounded-lg p-8 bg-gradient-to-b from-white to-gray-50">
          <h3 className="font-bold text-foreground mb-6 text-center">Enforcement Process</h3>

          <div className="max-w-5xl mx-auto space-y-6">
            <EnforcementStep
              step="1"
              title="Report Received"
              description="Violation report submitted to conduct@ux4g.gov.in"
              timeline="Immediate"
            />

            <EnforcementStep
              step="2"
              title="Acknowledgment"
              description="Report acknowledged and assigned to review team"
              timeline="Within 24 hours"
            />

            <EnforcementStep
              step="3"
              title="Investigation"
              description="Team investigates incident, interviews involved parties"
              timeline="3-5 business days"
            />

            <EnforcementStep
              step="4"
              title="Decision"
              description="Maintainers determine appropriate action based on severity"
              timeline="1-2 business days"
            />

            <EnforcementStep
              step="5"
              title="Action & Communication"
              description="Action taken and all parties notified of decision"
              timeline="Immediate upon decision"
            />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Enforcement Principles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div>
              <strong className="text-foreground block mb-2">Fair & Consistent</strong>
              <p className="text-muted-foreground">Similar violations receive similar consequences</p>
            </div>
            <div>
              <strong className="text-foreground block mb-2">Transparent</strong>
              <p className="text-muted-foreground">Clear communication about decisions and reasoning</p>
            </div>
            <div>
              <strong className="text-foreground block mb-2">Confidential</strong>
              <p className="text-muted-foreground">Privacy protected for reporters and involved parties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnforcementStep({ step, title, description, timeline }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
          {step}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-bold text-foreground text-lg">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1 flex-shrink-0 ml-4">
            <FileText size={12} />
            {timeline}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportingSection() {
  return (
    <section id="reporting">
      <SectionHeader
        title="Reporting Violations"
        description="How to report Code of Conduct violations"
        icon={<MessageCircle size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-8">
          <h3 className="font-bold text-foreground mb-4 text-lg">How to Report</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Primary Contact</h4>
              <div className="bg-card border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-orange-600" size={24} />
                  <div>
                    <div className="font-bold text-foreground">Email: conduct@ux4g.gov.in</div>
                    <div className="text-sm text-muted-foreground">Monitored 24/7 • Response within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">What to Include in Your Report</h4>
              <div className="grid grid-cols-2 gap-4">
                <ReportItem text="Your contact information (optional for anonymous reports)" />
                <ReportItem text="Names/usernames of people involved" />
                <ReportItem text="Description of the incident" />
                <ReportItem text="Date, time, and location (if applicable)" />
                <ReportItem text="Context and surrounding circumstances" />
                <ReportItem text="Links or screenshots (if available)" />
                <ReportItem text="Names of witnesses (if any)" />
                <ReportItem text="Any other relevant information" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Anonymous Reporting</h3>
            <p className="text-sm text-muted-foreground mb-3">
              You can report violations anonymously. While this may limit our ability to follow up, we will
              still investigate all reports.
            </p>
            <p className="text-sm text-muted-foreground">
              Anonymous reports can be sent to the same email address, or through a designated anonymous form.
            </p>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Confidentiality</h3>
            <p className="text-sm text-muted-foreground mb-3">
              All reports will be kept confidential. We will not share your identity without your explicit
              consent, except where legally required.
            </p>
            <p className="text-sm text-muted-foreground">
              Information will only be shared with those who need to know to investigate and resolve the issue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-muted-foreground">
      <CheckCircle className="flex-shrink-0 mt-0.5 text-orange-600" size={14} />
      <span>{text}</span>
    </div>
  );
}

function ConsequencesSection() {
  return (
    <section id="consequences">
      <SectionHeader
        title="Consequences"
        description="Progressive discipline for Code of Conduct violations"
        icon={<AlertTriangle size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ConsequenceLevel
            level="1"
            title="Correction"
            color="yellow"
            description="Private written warning, clarification of violation, and apology request"
          />

          <ConsequenceLevel
            level="2"
            title="Warning"
            color="orange"
            description="Formal warning with consequences for continued behavior, temporary interaction restrictions"
          />

          <ConsequenceLevel
            level="3"
            title="Temporary Ban"
            color="red"
            description="Temporary ban from community interaction for specified period (1 week to 6 months)"
          />

          <ConsequenceLevel
            level="4"
            title="Permanent Ban"
            color="black"
            description="Permanent ban from all community interaction, no opportunity for reinstatement"
          />
        </div>

        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Consequence Guidelines</h3>
          </div>

          <div className="p-6">
            <table className="w-full text-sm">
              <thead className="bg-background">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground w-1/3">Violation Type</th>
                  <th className="text-left p-3 font-semibold text-foreground w-1/3">First Offense</th>
                  <th className="text-left p-3 font-semibold text-foreground w-1/3">Repeat Offense</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <ConsequenceRow
                  violation="Minor unprofessional behavior"
                  first="Correction"
                  repeat="Warning"
                />
                <ConsequenceRow
                  violation="Harassment or discriminatory language"
                  first="Warning or Temporary Ban (1 week)"
                  repeat="Temporary Ban (1-6 months) or Permanent Ban"
                />
                <ConsequenceRow
                  violation="Threats, doxxing, or severe harassment"
                  first="Temporary Ban (1-6 months) or Permanent Ban"
                  repeat="Permanent Ban"
                />
                <ConsequenceRow
                  violation="Violence or illegal activity"
                  first="Permanent Ban + Legal Action"
                  repeat="N/A"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsequenceLevel({ level, title, color, description }: any) {
  const colorClasses = {
    yellow: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-300',
    orange: 'bg-orange-50 dark:bg-orange-950/30 border-orange-300',
    red: 'bg-red-50 dark:bg-red-950/30 border-red-300',
    black: 'bg-muted border-gray-400'
  };

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg p-4 text-center`}>
      <div className="text-2xl font-bold text-foreground mb-2">Level {level}</div>
      <div className="font-bold text-foreground mb-2">{title}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
}

function ConsequenceRow({ violation, first, repeat }: any) {
  return (
    <tr className="hover:bg-background">
      <td className="p-3 text-muted-foreground">{violation}</td>
      <td className="p-3 text-muted-foreground">{first}</td>
      <td className="p-3 text-muted-foreground">{repeat}</td>
    </tr>
  );
}

function AttributionSection() {
  return (
    <section id="attribution">
      <SectionHeader
        title="Attribution"
        description="Sources and inspiration for this Code of Conduct"
        icon={<FileText size={28} />}
      />

      <div className="mt-8 bg-background border-2 border-border rounded-lg p-6">
        <p className="text-sm text-muted-foreground mb-4">
          This Code of Conduct is adapted from several widely-used community standards, including:
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Primary Sources:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Contributor Covenant, version 2.1</li>
              <li>• Mozilla Community Participation Guidelines</li>
              <li>• Citizen Code of Conduct</li>
              <li>• Government of India IT Conduct Guidelines</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Additional References:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Open Source Guide to Code of Conduct</li>
              <li>• Apache Software Foundation Code of Conduct</li>
              <li>• Google Open Source Community Guidelines</li>
              <li>• Digital India Code of Ethics</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <strong>Last Updated:</strong> April 12, 2026<br />
            <strong>Version:</strong> 1.0.0<br />
            <strong>Contact:</strong> conduct@ux4g.gov.in
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, description, icon }: any) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary">{icon}</div>
        <h2 className="text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

// ── Bilingual copy ──────────────────────────────────────────────────
const COC_EN = {
  badge: 'Community Standards',
  title: 'Code of Conduct',
  description:
    'The UX4G Design System community is committed to creating an inclusive, respectful, and collaborative environment for all contributors. This Code of Conduct outlines our shared values and expected behaviors.',
};

const COC_HI = {
  badge: 'सामुदायिक मानक',
  title: 'आचार संहिता',
  description:
    'UX4G डिज़ाइन सिस्टम समुदाय सभी योगदानकर्ताओं के लिए एक समावेशी, सम्मानजनक और सहयोगात्मक वातावरण बनाने के लिए प्रतिबद्ध है। यह आचार संहिता हमारे साझा मूल्यों और अपेक्षित व्यवहारों को रेखांकित करती है।',
};
