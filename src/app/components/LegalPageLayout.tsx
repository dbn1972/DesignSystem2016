/**
 * Shared layout for all legal/governance pages.
 * Provides uniform hero, sidebar, breadcrumb, TOC, and footer.
 */
import { ReactNode } from "react";
import { Link } from "react-router";
import { Mail, Phone } from "lucide-react";

export interface LegalSection {
  id: string;
  label: string;
}

export interface LegalMetric {
  value: string;
  label: string;
}

export interface LegalPageLayoutProps {
  /** Eyebrow badge text */
  badge: string;
  /** Badge icon */
  badgeIcon: ReactNode;
  /** Hero icon */
  heroIcon: ReactNode;
  /** Page title */
  title: string;
  /** Page description */
  description: string;
  /** Effective/last-updated date */
  date: string;
  /** Date label (e.g. "Last Updated" / "अंतिम अपडेट") */
  dateLabel: string;
  /** Sidebar eyebrow */
  sidebarEyebrow: string;
  /** Sidebar heading */
  sidebarTitle: string;
  /** Sidebar pill label */
  sidebarPill: string;
  /** 2x2 metrics */
  metrics: LegalMetric[];
  /** Sidebar note */
  note: { title: string; text: string };
  /** Breadcrumb: page title */
  breadcrumbTitle: string;
  /** Breadcrumb labels */
  breadcrumbHome?: string;
  breadcrumbGovernance?: string;
  /** Table of contents sections */
  toc: LegalSection[];
  /** Main content */
  children: ReactNode;
  /** Footer question label */
  footerQuestion?: string;
  /** Footer description */
  footerDesc?: string;
}

export default function LegalPageLayout({
  badge, badgeIcon, heroIcon, title, description, date, dateLabel,
  sidebarEyebrow, sidebarTitle, sidebarPill, metrics, note,
  breadcrumbTitle, breadcrumbHome = "Home", breadcrumbGovernance = "Governance",
  toc, children,
  footerQuestion = "Questions about this policy?",
  footerDesc = "Contact the UX4G governance team for clarification or requests.",
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),_transparent_30%),linear-gradient(to_bottom,theme(colors.background),theme(colors.background))]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
              {badgeIcon}
              {badge}
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/15">
                  {heroIcon}
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
              <span className="font-semibold text-foreground">{dateLabel}:</span> {date}
            </div>
          </div>

          {/* Sidebar card */}
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-xl shadow-black/5">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{sidebarEyebrow}</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">{sidebarTitle}</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{sidebarPill}</div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-border bg-muted/40 p-4">
                  <div className="text-2xl font-bold tracking-tight text-foreground">{m.value}</div>
                  <div className="text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <p className="text-sm font-semibold text-foreground">{note.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{note.text}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-6 pt-6 sm:px-8 lg:px-12">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link to="/" className="text-primary hover:underline font-medium">{breadcrumbHome}</Link></li>
            <li className="text-muted-foreground">/</li>
            <li><Link to="/governance" className="text-primary hover:underline font-medium">{breadcrumbGovernance}</Link></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-muted-foreground" aria-current="page">{breadcrumbTitle}</li>
          </ol>
        </nav>
      </div>

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
