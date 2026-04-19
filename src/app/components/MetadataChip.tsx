import type { ReactNode } from "react";
import { cn } from "@/app/react-core-package/src/utils/cn";

interface MetadataChipProps {
  /** Optional icon rendered before the label */
  icon?: ReactNode;
  /** Chip label text */
  label: string;
  /** Custom color classes (e.g., 'bg-green-100 text-green-800') */
  colorClass?: string;
}

export default function MetadataChip({
  icon,
  label,
  colorClass = "bg-muted text-foreground",
}: MetadataChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm",
        colorClass,
      )}
    >
      {icon}
      {label}
    </span>
  );
}

MetadataChip.displayName = "MetadataChip";

export type { MetadataChipProps };
