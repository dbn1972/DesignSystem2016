import { Link } from "react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileText,
  Flag,
  HelpCircle,
  Home,
  Icon,
  LogIn,
  MapPin,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
  User,
  UserCheck,
  Users,
  Clock3,
  Eye,
  FileSearch,
} from "lucide-react";
import type { ReactNode } from "react";

type JourneyPage = {
  name: string;
  pattern: string;
  route: string;
};

type JourneyPhase = {
  number: number;
  title: string;
  icon: ReactNode;
  iconBg: string;
  userGoal: string;
  systemAction: string;
  pages: JourneyPage[];
  patterns: string[];
  keyStates: string[];
};

type JourneyGroup = {
  id: string;
  title: string;
  description: string;
  phases: JourneyPhase[];
};

const journeyGroups: JourneyGroup[] = [
  {
    id: "access-onboarding",
    title: "Access and onboarding",
    description: "The entry layer for discovery, identity, and the first meaningful service action.",
    phases: [
      {
        number: 1,
        title: "Service discovery",
        icon: <MapPin size={22} className="text-white" />,
        iconBg: "bg-blue-600",
        userGoal: "Find the service, understand the requirement, and confirm eligibility.",
        systemAction: "Explain the service, show eligibility criteria, and surface support paths.",
        pages: [
          { name: "Service landing", pattern: "Service landing", route: "/reference-service/demo" },
          { name: "Eligibility checker", pattern: "Eligibility screening", route: "/reference-service/certificate/eligibility" },
          { name: "Help and FAQ", pattern: "Support and help", route: "/reference-service/certificate/help" },
        ],
        patterns: ["Landing", "Eligibility", "Support"],
        keyStates: ["Service available", "Eligibility met", "Eligibility not met", "Maintenance mode"],
      },
      {
        number: 2,
        title: "Identity and access",
        icon: <LogIn size={22} className="text-white" />,
        iconBg: "bg-emerald-600",
        userGoal: "Sign in securely or create an account when needed.",
        systemAction: "Authenticate the user, establish a session, and route to the correct recovery path.",
        pages: [
          { name: "Sign in", pattern: "Identity", route: "/reference-service/certificate/sign-in" },
          { name: "Sign up", pattern: "Identity", route: "/reference-service/certificate/sign-up" },
          { name: "OTP verification", pattern: "Identity", route: "/reference-service/certificate/verify-otp" },
          { name: "Forgot password", pattern: "Recovery", route: "/reference-service/certificate/forgot-password" },
          { name: "Session timeout", pattern: "Recovery", route: "/reference-service/certificate/session-timeout" },
        ],
        patterns: ["Sign in", "Sign up", "OTP", "Recovery", "Session management"],
        keyStates: ["Authenticated", "OTP sent", "OTP verified", "Session expired", "Account locked"],
      },
      {
        number: 3,
        title: "Application start",
        icon: <Sparkles size={22} className="text-white" />,
        iconBg: "bg-violet-600",
        userGoal: "Start the application and understand the work ahead.",
        systemAction: "Create a draft, capture the service context, and prepare the application workspace.",
        pages: [
          { name: "Start application", pattern: "Start flow", route: "/reference-service/certificate/start" },
          { name: "Application history", pattern: "My applications", route: "/reference-service/certificate/my-applications" },
          { name: "User profile", pattern: "Profile", route: "/reference-service/certificate/user-profile" },
        ],
        patterns: ["Application start", "Drafts", "Profile"],
        keyStates: ["Draft created", "Draft saved", "Context loaded", "Resume available"],
      },
    ],
  },
  {
    id: "application-build",
    title: "Application build",
    description: "The structured form and document layer where the core application is completed.",
    phases: [
      {
        number: 4,
        title: "Form completion",
        icon: <ClipboardList size={22} className="text-white" />,
        iconBg: "bg-indigo-600",
        userGoal: "Enter accurate personal, address, and supporting information.",
        systemAction: "Collect data, validate inputs, and persist progress through every step.",
        pages: [
          { name: "Personal details", pattern: "Multi-step form", route: "/reference-service/certificate/form/personal" },
          { name: "Address details", pattern: "Multi-step form", route: "/reference-service/certificate/form/address" },
          { name: "Additional information", pattern: "Conditional form", route: "/reference-service/certificate/form/additional" },
          { name: "Form review", pattern: "Final review", route: "/reference-service/certificate/form/review" },
        ],
        patterns: ["Multi-step form", "Validation", "Conditional logic", "Save progress"],
        keyStates: ["In progress", "Section complete", "Validation error", "Form complete", "Draft saved"],
      },
      {
        number: 5,
        title: "Document submission",
        icon: <Upload size={22} className="text-white" />,
        iconBg: "bg-orange-600",
        userGoal: "Upload the required documents and resolve file issues quickly.",
        systemAction: "Validate file type and size, preserve secure uploads, and surface recovery actions.",
        pages: [
          { name: "Document guidelines", pattern: "Checklist", route: "/reference-service/certificate/document-guidelines" },
          { name: "Document upload", pattern: "Upload", route: "/reference-service/certificate/document-upload" },
          { name: "Verification", pattern: "Document validation", route: "/reference-service/certificate/verification" },
        ],
        patterns: ["Upload", "File validation", "Error handling", "Document management"],
        keyStates: ["Upload pending", "Upload success", "Upload failed", "File invalid", "Scan failed"],
      },
      {
        number: 6,
        title: "Review and declaration",
        icon: <Eye size={22} className="text-white" />,
        iconBg: "bg-teal-600",
        userGoal: "Review the application, accept the declaration, and confirm consent.",
        systemAction: "Summarize the application, capture the declaration, and record privacy acknowledgement.",
        pages: [
          { name: "Review summary", pattern: "Summary", route: "/reference-service/certificate/review-summary" },
          { name: "Declaration", pattern: "Declaration", route: "/reference-service/certificate/declaration" },
          { name: "Privacy policy", pattern: "Privacy", route: "/reference-service/certificate/privacy-policy" },
        ],
        patterns: ["Review summary", "Declaration", "Consent capture", "Privacy acknowledgement"],
        keyStates: ["Review complete", "Declaration made", "Consent given", "Privacy acknowledged"],
      },
    ],
  },
  {
    id: "submission-tracking",
    title: "Submission and tracking",
    description: "Payment, submission, receipts, and status visibility after the application is sent.",
    phases: [
      {
        number: 7,
        title: "Payment",
        icon: <CreditCard size={22} className="text-white" />,
        iconBg: "bg-pink-600",
        userGoal: "Pay the fee securely and recover from failures without losing progress.",
        systemAction: "Process payment, record the transaction, and generate a receipt or retry path.",
        pages: [
          { name: "Payment summary", pattern: "Payment", route: "/reference-service/certificate/payment-summary" },
          { name: "Payment receipt", pattern: "Payment", route: "/reference-service/certificate/payment-receipt" },
        ],
        patterns: ["Fee payment", "Gateway", "Retry", "Receipt generation"],
        keyStates: ["Fee due", "Processing", "Success", "Failed", "Pending", "Receipt generated"],
      },
      {
        number: 8,
        title: "Submission confirmation",
        icon: <Send size={22} className="text-white" />,
        iconBg: "bg-green-700",
        userGoal: "Submit the application and receive a clear acknowledgement.",
        systemAction: "Validate completeness, generate a reference number, and confirm receipt.",
        pages: [
          { name: "Submission success", pattern: "Confirmation", route: "/reference-service/certificate/submission-success" },
          { name: "Service demo receipt", pattern: "Supporting demo", route: "/reference-service/demo" },
        ],
        patterns: ["Confirmation", "Success state", "Reference ID"],
        keyStates: ["Submitted", "Queued", "Receipt generated", "Confirmation sent"],
      },
      {
        number: 9,
        title: "Status and notifications",
        icon: <Clock3 size={22} className="text-white" />,
        iconBg: "bg-sky-700",
        userGoal: "Track progress and stay informed as the application moves forward.",
        systemAction: "Expose the application timeline and notify the applicant about changes.",
        pages: [
          { name: "Status tracker", pattern: "Tracking", route: "/reference-service/certificate/status-tracker" },
          { name: "Notifications", pattern: "Notifications", route: "/reference-service/certificate/notifications" },
          { name: "My applications", pattern: "Account history", route: "/reference-service/certificate/my-applications" },
        ],
        patterns: ["Status tracking", "Timeline", "Notification center"],
        keyStates: ["Under review", "Documents verified", "Pending clarification", "Approved", "Rejected"],
      },
    ],
  },
  {
    id: "operations-recovery",
    title: "Operations and recovery",
    description: "Officer-side operations plus the recovery, appeal, and support paths that close the loop.",
    phases: [
      {
        number: 10,
        title: "Officer review",
        icon: <UserCheck size={22} className="text-white" />,
        iconBg: "bg-purple-700",
        userGoal: "Give officers the queue, context, and tools they need to make a fair decision.",
        systemAction: "Show the case list, enable verification, and capture decision outcomes.",
        pages: [
          { name: "Officer cases", pattern: "Queue", route: "/reference-service/certificate/officer/cases" },
          { name: "Officer review", pattern: "Review", route: "/reference-service/certificate/officer/review" },
          { name: "Verification", pattern: "Verification", route: "/reference-service/certificate/verification" },
        ],
        patterns: ["Case management", "Verification", "Decision making", "Communication"],
        keyStates: ["Assigned", "Under review", "Verification complete", "Correction requested", "Approved"],
      },
      {
        number: 11,
        title: "Decision and issuance",
        icon: <Award size={22} className="text-white" />,
        iconBg: "bg-amber-600",
        userGoal: "Receive the outcome and download the certificate if approved.",
        systemAction: "Communicate the decision, issue the certificate, and make it downloadable.",
        pages: [
          { name: "Issued certificate", pattern: "Issuance", route: "/reference-service/certificate/issued" },
          { name: "Rejected status", pattern: "Decision", route: "/reference-service/certificate/rejected" },
        ],
        patterns: ["Decision notification", "Certificate generation", "Download", "Rejection handling"],
        keyStates: ["Approved", "Generated", "Downloaded", "Rejected", "Reason shown"],
      },
      {
        number: 12,
        title: "Recovery and support",
        icon: <RefreshCw size={22} className="text-white" />,
        iconBg: "bg-red-600",
        userGoal: "Correct, resubmit, appeal, or contact support without starting over.",
        systemAction: "Keep the recovery loop humane with correction, appeal, and help journeys.",
        pages: [
          { name: "Correction request", pattern: "Recovery", route: "/reference-service/certificate/correction-request" },
          { name: "Appeal", pattern: "Recovery", route: "/reference-service/certificate/appeal" },
          { name: "Help", pattern: "Support", route: "/reference-service/certificate/help" },
        ],
        patterns: ["Correction request", "Appeal", "Support"],
        keyStates: ["Correction requested", "Resubmitted", "Appeal filed", "Support contacted"],
      },
    ],
  },
];

const highlightTags = [
  "Citizen-facing and officer-facing views",
  "Accessible by default",
  "Reusable across departments",
  "Built to match the certificate service implementation",
];

const overviewStats = [
  { value: "12", label: "journey phases" },
  { value: "50+", label: "routed screens" },
  { value: "15+", label: "UX4G patterns" },
  { value: "1", label: "reference blueprint" },
];

export default function ReferenceServiceBlueprint() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_24%),linear-gradient(to_bottom,theme(colors.background),theme(colors.background))]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:px-4 sm:px-8 lg:px-12 lg:py-14">
          <div className="space-y-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
            >
              <Home size={16} />
              Back to Services
            </Link>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-primary text-primary-foreground shadow-lg shadow-primary/15">
                  <FileText size={26} />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Reference service overview</p>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Reference service overview
                  </h1>
                </div>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                This hub uses the certificate application as the reference service example, but the architecture is intentionally reusable.
                It brings together citizen journeys, officer review flows, recovery states, and the service logic that powers the UX4G
                reference implementation.
              </p>

              <div className="flex flex-wrap gap-3">
                {highlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm"
                  >
                    <CheckCircle2 size={14} className="text-primary" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/reference-service/demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Open service demo
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/resources/service-code-downloads"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                View code downloads
              </Link>
              <Link
                to="/patterns"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                View patterns
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-border bg-card p-6 shadow-xl shadow-black/5 lg:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">At a glance</p>
                    <h2 className="mt-2 text-2xl font-bold">What this overview covers</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Reference</div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {overviewStats.map((stat) => (
                <MetricCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>

            <div className="mt-6 space-y-3 rounded-2xl bg-muted/40 p-4">
              <InfoRow icon={<ShieldCheck size={16} />} title="Citizen and officer journeys" text="One cohesive service model with a citizen-facing flow and a back-office review flow." />
              <InfoRow icon={<Sparkles size={16} />} title="Reusable logic" text="Sign-in, forms, payments, tracking, and recovery are aligned to the shared service modules." />
              <InfoRow icon={<FileSearch size={16} />} title="Content review" text="The copy now reflects the service requirement instead of reading like a raw implementation dump." />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-4 sm:px-8 lg:px-12">
        <section className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Journey map</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A responsive overview of the full service lifecycle</h2>
            <p className="text-muted-foreground">
              The page is grouped into four practical journey stages so it scans like a modern enterprise hub, while still keeping every
              reference route visible.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <StagePill href="#access-onboarding" label="Access" />
            <StagePill href="#application-build" label="Application" />
            <StagePill href="#submission-tracking" label="Submission" />
            <StagePill href="#operations-recovery" label="Recovery" />
          </div>
        </section>

        {journeyGroups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-24 space-y-4 pb-10">
            <div className="flex flex-col gap-3 border-b border-border pb-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Journey stage</p>
                <h3 className="text-2xl font-bold tracking-tight sm:text-[2rem]">{group.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{group.description}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground shadow-sm">
                {group.phases.length} phase{group.phases.length === 1 ? "" : "s"}
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {group.phases.map((phase) => (
                <JourneyPhaseCard key={phase.number} phase={phase} />
              ))}
            </div>
          </section>
        ))}

        <section className="mt-6 grid gap-4 rounded-[28px] border border-border bg-muted/25 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-7">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Content review</p>
            <h2 className="text-2xl font-bold tracking-tight">Why this page now reads better</h2>
            <p className="text-muted-foreground leading-7">
              The earlier page was correct in content, but it was visually dense and skewed toward implementation detail. This version keeps
              the same reference-service scope while presenting it as a clearer enterprise landing page for service teams, product owners,
              and implementers.
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Flag size={16} className="text-primary" />
              What you can do next
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                Jump into the interactive certificate demo
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                Download the underlying service source and reusable modules
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                Move into patterns, foundations, or resources without losing the service context
              </li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-border bg-card">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-4 sm:px-8 lg:px-12">
          <div>UX4G Design System Platform • Reference Service Blueprint</div>
          <div>Government of India • Digital India Initiative</div>
        </div>
      </footer>
    </div>
  );
}

function JourneyPhaseCard({ phase }: { phase: JourneyPhase }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-muted/35 px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${phase.iconBg} shadow-md`}>
              {phase.icon}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Phase {phase.number}</p>
              <h4 className="mt-1 text-2xl font-bold tracking-tight text-foreground">{phase.title}</h4>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground">
            {phase.pages.length} screen{phase.pages.length === 1 ? "" : "s"}
          </div>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <DetailBlock icon={<User size={14} />} label="User goal" value={phase.userGoal} />
          <DetailBlock icon={<ShieldCheck size={14} />} label="System action" value={phase.systemAction} />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Primary screens</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {phase.pages.map((page) => (
              <Link
                key={`${phase.number}-${page.route}`}
                to={page.route}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <TagPanel title="Patterns" tags={phase.patterns} />
          <TagPanel title="Key states" tags={phase.keyStates} />
        </div>
      </div>
    </article>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 p-4">
      <div className="text-2xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function InfoRow({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div>
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}

function StagePill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
    >
      {label}
    </a>
  );
}

function DetailBlock({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-border bg-background p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {icon}
        {label}
      </div>
      <p className="mt-2 text-sm leading-6 text-foreground">{value}</p>
    </div>
  );
}

function TagPanel({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="rounded-[22px] border border-border bg-background p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="inline-flex rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
