import type { ElementType } from "react";
import { ArrowRight, BookOpen, CheckCircle, Package, Shield, Workflow } from "lucide-react";
import { Link } from "react-router";

const patternAreas = [
  {
    title: "Authentication",
    description: "Sign in, sign up, OTP verification, account recovery, and password reset flows.",
    href: "/patterns/identity",
  },
  {
    title: "Forms",
    description: "Multi-step forms, save-and-resume, review and confirm, validation, and uploads.",
    href: "/patterns/forms",
  },
  {
    title: "Submission",
    description: "Confirmation, notifications, and post-submit service handoff states.",
    href: "/patterns/service",
  },
  {
    title: "Tracking",
    description: "Status lifecycle, timelines, and progress communication for applications.",
    href: "/patterns/status-lifecycle",
  },
  {
    title: "Payment",
    description: "Payment summary, receipt, retry, and failure handling flows.",
    href: "/patterns/payment",
  },
  {
    title: "Support",
    description: "Contact support, escalation, and citizen-help pathways.",
    href: "/patterns/contact-support",
  },
];

export default function AngularPatternsDocs() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-[#000080] via-[#000060] to-[#000080] text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Workflow size={40} className="text-[#FF9933]" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200">@ux4g/angular-patterns</p>
                <h1 className="text-4xl lg:text-5xl font-bold">Angular Pattern Docs</h1>
              </div>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">
              The Angular patterns package assembles complete government-service flows from the core
              UX4G component set. It is the right place for reusable service patterns, not business
              logic.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={Package}
              title="What it is"
              body="A composition layer for full flows such as sign-in, OTP, recovery, upload, submission, and payment."
            />
            <InfoCard
              icon={Shield}
              title="What it is not"
              body="It does not replace the core component library. Instead, it builds on top of it with reusable flow structure."
            />
            <InfoCard
              icon={BookOpen}
              title="How to use it"
              body="Import the relevant pattern, feed it data and callbacks, and keep the interaction contract consistent."
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {patternAreas.map((area) => (
              <Link
                key={area.title}
                to={area.href}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-2xl font-bold text-foreground">Angular pattern package scope</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <ScopeCard title="Authentication" items={["Sign In", "Sign Up", "OTP Verification", "Forgot Password", "Account Recovery"]} />
              <ScopeCard title="Forms" items={["Save and Resume Later", "Multi-Document Upload", "Review and Confirm"]} />
              <ScopeCard title="Submission" items={["Submission Confirmation", "Notification Blocks"]} />
              <ScopeCard title="Tracking + Payment" items={["Status Tracking", "Fee Summary", "Payment Summary"]} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={24} />
      </div>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function ScopeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border p-4">
      <h3 className="font-bold text-foreground">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 text-green-600" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
