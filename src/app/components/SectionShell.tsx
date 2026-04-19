import type { ReactNode } from "react";
import { cn } from "@/app/react-core-package/src/utils/cn";

type SectionShellVariant = "default" | "tonal" | "elevated" | "bordered";

interface SectionShellProps {
  /** Unique section id for TOC scroll-spy linking */
  id: string;
  /** Section heading text */
  title?: string;
  /** Optional icon rendered beside the title */
  icon?: ReactNode;
  /** Optional badge rendered beside the title (e.g., count, WCAG level) */
  badge?: ReactNode;
  /** Visual variant */
  variant?: SectionShellVariant;
  /** Section content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const VARIANT_CLASSES: Record<SectionShellVariant, string> = {
  default: "",
  tonal: "bg-muted/30 rounded-2xl p-6 md:p-8",
  elevated: "bg-card rounded-2xl p-6 md:p-8 shadow-sm",
  bordered: "bg-card rounded-2xl p-6 md:p-8 border border-border",
};

export default function SectionShell({
  id,
  title,
  icon,
  badge,
  variant = "default",
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24", VARIANT_CLASSES[variant], className)}
    >
      {title && (
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          {icon}
          {title}
          {badge}
        </h2>
      )}
      {children}
    </section>
  );
}

SectionShell.displayName = "SectionShell";

export type { SectionShellProps, SectionShellVariant };
