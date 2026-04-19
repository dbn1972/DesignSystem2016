import type { ReactNode } from "react";
import { ExternalLink, Code2, Figma, Play } from "lucide-react";
import { cn } from "@/app/react-core-package/src/utils/cn";
import MetadataChip from "./MetadataChip";

interface ComponentHeroProps {
  name: string;
  description: string;
  category: string;
  maturity: "draft" | "beta" | "stable" | "deprecated";
  tier: "foundation" | "core" | "composite" | "pattern";
  since: string;
  updated?: string;
  sandbox?: { href: string; label?: string };
}

const MATURITY_CONFIG: Record<
  string,
  { label: string; color: string; icon: string }
> = {
  draft: { label: "Draft", color: "bg-blue-100 text-blue-800", icon: "🔵" },
  beta: {
    label: "Beta",
    color: "bg-yellow-100 text-yellow-800",
    icon: "🟡",
  },
  stable: {
    label: "Stable",
    color: "bg-green-100 text-green-800",
    icon: "🟢",
  },
  deprecated: {
    label: "Deprecated",
    color: "bg-red-100 text-red-800",
    icon: "🔴",
  },
};

const TIER_CONFIG: Record<string, { label: string; color: string }> = {
  foundation: { label: "Foundation", color: "bg-purple-100 text-purple-800" },
  core: { label: "Core", color: "bg-indigo-100 text-indigo-800" },
  composite: { label: "Composite", color: "bg-teal-100 text-teal-800" },
  pattern: { label: "Pattern", color: "bg-orange-100 text-orange-800" },
};

const NEUTRAL_FALLBACK = "bg-muted text-foreground";

export default function ComponentHero({
  name,
  description,
  category,
  maturity,
  tier,
  since,
  updated,
  sandbox,
}: ComponentHeroProps) {
  const maturityCfg = MATURITY_CONFIG[maturity];
  const tierCfg = TIER_CONFIG[tier];

  return (
    <section className="bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl p-6 md:p-10">
      {/* Category label */}
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
        {category}
      </p>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
        {name}
      </h1>

      {/* Description */}
      <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6">
        {description}
      </p>

      {/* Metadata row */}
      <div className="flex flex-col md:flex-row flex-wrap gap-2 mb-6">
        <MetadataChip
          icon={<span aria-hidden="true">{maturityCfg?.icon ?? ""}</span>}
          label={maturityCfg?.label ?? String(maturity)}
          colorClass={maturityCfg?.color ?? NEUTRAL_FALLBACK}
        />
        <MetadataChip
          label={tierCfg?.label ?? String(tier)}
          colorClass={tierCfg?.color ?? NEUTRAL_FALLBACK}
        />
        <MetadataChip label={category} />
        <MetadataChip label={`Since ${since}`} />
        {updated && <MetadataChip label={`Updated ${updated}`} />}
      </div>

      {/* Action row */}
      <div className="flex flex-col md:flex-row flex-wrap gap-2">
        <ActionButton icon={<Code2 className="h-4 w-4" />} label="View Source" />
        <ActionButton icon={<Figma className="h-4 w-4" />} label="Open in Figma" />
        {sandbox && (
          <ActionButton
            icon={<Play className="h-4 w-4" />}
            label={sandbox.label ?? "Open Sandbox"}
            href={sandbox.href}
          />
        )}
      </div>
    </section>
  );
}

ComponentHero.displayName = "ComponentHero";

/* ------------------------------------------------------------------ */

function ActionButton({
  icon,
  label,
  href,
}: {
  icon: ReactNode;
  label: string;
  href?: string;
}) {
  const classes = cn(
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
    "bg-muted/50 hover:bg-muted transition-colors",
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon}
        {label}
        <ExternalLink className="h-3 w-3 opacity-50" />
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {icon}
      {label}
    </button>
  );
}

export type { ComponentHeroProps };
