"use client";

import { useState, type ReactNode } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/app/react-core-package/src/utils/cn";

interface DoDontExample {
  preview: ReactNode;
  code: string;
  caption: string;
}

interface DoDontPanelProps {
  doExamples: DoDontExample[];
  dontExamples: DoDontExample[];
}

type ViewMode = "preview" | "code";

function ExamplePanel({
  examples,
  variant,
}: {
  examples: DoDontExample[];
  variant: "do" | "dont";
}) {
  const [viewMode, setViewMode] = useState<ViewMode>("preview");

  const isDo = variant === "do";
  const panelClass = isDo
    ? "border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/20 rounded-xl p-5"
    : "border-l-4 border-red-500 bg-red-50/50 dark:bg-red-950/20 rounded-xl p-5";

  const Icon = isDo ? CheckCircle : XCircle;
  const label = isDo ? "Do" : "Don't";
  const iconColor = isDo ? "text-green-600" : "text-red-600";

  return (
    <div className={panelClass}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon className={cn("w-5 h-5", iconColor)} />
          <span className={cn("font-semibold text-sm", iconColor)}>
            {label}
          </span>
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setViewMode("preview")}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-md transition-colors",
              viewMode === "preview"
                ? "bg-foreground/10 text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setViewMode("code")}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-md transition-colors",
              viewMode === "code"
                ? "bg-foreground/10 text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Code
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {examples.map((example, index) => (
          <div key={index}>
            {viewMode === "preview" ? (
              <div className="rounded-lg bg-background/50 p-4">
                {example.preview}
              </div>
            ) : (
              <pre className="rounded-lg bg-background/50 p-4 text-xs font-mono overflow-x-auto">
                <code>{example.code}</code>
              </pre>
            )}
            <p className="mt-2 text-xs text-muted-foreground">
              {example.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DoDontPanel({
  doExamples,
  dontExamples,
}: DoDontPanelProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ExamplePanel examples={doExamples} variant="do" />
      <ExamplePanel examples={dontExamples} variant="dont" />
    </div>
  );
}

DoDontPanel.displayName = "DoDontPanel";

export type { DoDontPanelProps, DoDontExample };
