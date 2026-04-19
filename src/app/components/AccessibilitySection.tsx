"use client";

import { ShieldCheck, Check, Info } from "lucide-react";
import SectionShell from "./SectionShell";
import MetadataChip from "./MetadataChip";
import { cn } from "@/app/react-core-package/src/utils/cn";

interface AccessibilitySectionProps {
  wcagLevel: string;
  features: string[];
  keyboardSupport: { key: string; action: string }[];
  screenReader: string[];
}

export default function AccessibilitySection({
  wcagLevel,
  features,
  keyboardSupport,
  screenReader,
}: AccessibilitySectionProps) {
  return (
    <SectionShell
      id="accessibility"
      title="Accessibility"
      icon={<ShieldCheck className="w-6 h-6 text-primary" />}
      badge={
        <MetadataChip
          label={wcagLevel}
          colorClass="bg-green-100 text-green-800"
        />
      }
      variant="tonal"
    >
      <div className="space-y-6">
        {/* Features checklist */}
        {features.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Features
            </h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Keyboard support table */}
        {keyboardSupport.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Keyboard Support
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">
                      Key
                    </th>
                    <th className="text-left py-2 font-semibold text-foreground">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {keyboardSupport.map((item, index) => (
                    <tr
                      key={index}
                      className={cn(
                        "border-b border-border/50",
                        index === keyboardSupport.length - 1 && "border-b-0"
                      )}
                    >
                      <td className="py-2 pr-4">
                        <kbd className="px-2 py-0.5 rounded bg-muted text-xs font-mono font-semibold">
                          {item.key}
                        </kbd>
                      </td>
                      <td className="py-2 text-muted-foreground">
                        {item.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Screen reader notes */}
        {screenReader.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Screen Reader Notes
            </h3>
            <ul className="space-y-2">
              {screenReader.map((note, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </SectionShell>
  );
}

AccessibilitySection.displayName = "AccessibilitySection";

export type { AccessibilitySectionProps };
