/**
 * Shared layout for all legal/governance pages.
 * Full-width hero with SVG illustration, breadcrumb, TOC, and footer.
 */
import { ReactNode } from "react";
import { Link } from "react-router";
import { Mail, Phone, Shield, Lock, FileText, CheckCircle } from "lucide-react";

export interface LegalSection {
  id: string;
  label: string;
}

export interface LegalMetric {
  value: string;
  label: string;
}

export interface LegalPageLayoutProps {
  badge: string;
  badgeIcon: ReactNode;
  heroIcon: ReactNode;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  sidebarEyebrow: string;
  sidebarTitle: string;
  sidebarPill: string;
  metrics: LegalMetric[];
  note: { title: string; text: string };
  breadcrumbTitle: string;
  breadcrumbHome?: string;
  breadcrumbGovernance?: string;
  toc: LegalSection[];
  children: ReactNode;
  footerQuestion?: string;
  footerDesc?: string;
  /** Optional custom illustration component */
  illustration?: ReactNode;
  /** Optional accent color for the default illustration */
  accentColor?: string;
}

export default function LegalPageLayout({
  badge, badgeIcon, heroIcon, title, description, date, dateLabel,
  sidebarEyebrow, sidebarTitle, sidebarPill, metrics, note,
  breadcrumbTitle, breadcrumbHome = "Home", breadcrumbGovernance = "Governance",
  toc, children, illustration, accentColor = '#005196',
  footerQuestion = "Questions about this policy?",
  footerDesc = "Contact the UX4G governance team for clarification or requests.",
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,153,51,0.06),_transparent_40%)]">
        <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="grid items-center gap-10 xl:grid-cols-[1fr_380px]">
            {/* Left: copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
                {badgeIcon}
                {badge}
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/15">
                    {heroIcon}
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">{title}</h1>
                </div>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
                  <span className="font-semibold text-foreground">{dateLabel}:</span> {date}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {metrics.slice(0, 4).map((m) => (
                  <div key={m.label} className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 border border-primary/15 px-3 py-1.5 text-xs font-semibold">
                    <span className="text-primary">{m.value}</span>
                    <span className="text-muted-foreground">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: SVG illustration */}
            <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
              {illustration || <LegalIllustration color={accentColor} />}
            </div>
          </div>
        </div>
      </header>

      {/* TOC + Content */}
      <div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-8 lg:px-12 lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
        {/* Sticky TOC */}
        <nav className="hidden lg:block sticky top-24 self-start" aria-label="Table of contents">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground mb-3">On this page</p>
          <ul className="space-y-1">
            {toc.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile TOC */}
        <div className="lg:hidden flex flex-wrap gap-2 mb-8">
          {toc.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              {s.label}
            </a>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {children}
        </div>
      </div>

      {/* Footer banner */}
      <div className="mx-auto max-w-[1440px] px-6 pb-12 sm:px-8 lg:px-12">
        <div className="rounded-[28px] border border-border bg-card p-8 shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-2">{footerQuestion}</h2>
          <p className="text-muted-foreground mb-6">{footerDesc}</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:ux4g-governance@gov.in" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
              <Mail size={16} /> ux4g-governance@gov.in
            </a>
            <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
              <Phone size={16} /> +91 123 456 7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Creative SVG illustration — shield with document/lock motif */
function LegalIllustration({ color }: { color: string }) {
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <circle cx="160" cy="140" r="120" fill={color} opacity="0.04" />
      <circle cx="160" cy="140" r="90" fill={color} opacity="0.06" />

      {/* Shield shape */}
      <path
        d="M160 30 L260 70 V160 C260 220 160 260 160 260 C160 260 60 220 60 160 V70 Z"
        fill={color}
        opacity="0.08"
        stroke={color}
        strokeWidth="2"
        strokeOpacity="0.2"
      />
      <path
        d="M160 50 L240 82 V155 C240 205 160 240 160 240 C160 240 80 205 80 155 V82 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.3"
        strokeDasharray="6 4"
      />

      {/* Lock icon in center */}
      <rect x="140" y="115" width="40" height="32" rx="4" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M148 115 V105 C148 98 153 93 160 93 C167 93 172 98 172 105 V115" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
      <circle cx="160" cy="131" r="4" fill={color} opacity="0.5" />
      <line x1="160" y1="135" x2="160" y2="140" stroke={color} strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />

      {/* Checkmark badge */}
      <circle cx="210" cy="80" r="18" fill={color} opacity="0.12" />
      <path d="M202 80 L208 86 L220 74" stroke={color} strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Document lines */}
      <rect x="95" y="170" width="50" height="4" rx="2" fill={color} opacity="0.12" />
      <rect x="95" y="180" width="38" height="4" rx="2" fill={color} opacity="0.08" />
      <rect x="95" y="190" width="44" height="4" rx="2" fill={color} opacity="0.06" />

      <rect x="175" y="170" width="50" height="4" rx="2" fill={color} opacity="0.12" />
      <rect x="175" y="180" width="42" height="4" rx="2" fill={color} opacity="0.08" />
      <rect x="175" y="190" width="36" height="4" rx="2" fill={color} opacity="0.06" />

      {/* Floating dots */}
      <circle cx="100" cy="70" r="3" fill={color} opacity="0.15" />
      <circle cx="230" cy="200" r="4" fill={color} opacity="0.1" />
      <circle cx="80" cy="140" r="2.5" fill={color} opacity="0.12" />
      <circle cx="250" cy="120" r="3" fill={color} opacity="0.1" />
    </svg>
  );
}

/** Reusable section wrapper for legal content */
export function LegalSection({ id, icon, title, children }: {
  id: string; icon: ReactNode; title: string; children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm space-y-4">
        {children}
      </div>
    </section>
  );
}
