"use client";

import SectionShell from "./SectionShell";
import { cn } from "@/app/react-core-package/src/utils/cn";

interface UseCase {
  title: string;
  description: string;
  scenario?: string;
  implementation?: string;
}

interface GovernmentUseCasesSectionProps {
  useCases: UseCase[];
}

export default function GovernmentUseCasesSection({
  useCases,
}: GovernmentUseCasesSectionProps) {
  return (
    <SectionShell
      id="government-use-cases"
      title="Government Service Use Cases"
      variant="default"
    >
      <div className="grid gap-4">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                {index + 1}
              </div>
              <div className="space-y-2 min-w-0">
                <h3 className="text-base font-semibold text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {useCase.description}
                </p>
                {useCase.scenario && (
                  <div className="text-sm">
                    <span className="font-medium text-foreground">Scenario: </span>
                    <span className="text-muted-foreground">{useCase.scenario}</span>
                  </div>
                )}
                {useCase.implementation && (
                  <div className="text-sm">
                    <span className="font-medium text-foreground">Implementation: </span>
                    <span className="text-muted-foreground">{useCase.implementation}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

GovernmentUseCasesSection.displayName = "GovernmentUseCasesSection";

export type { GovernmentUseCasesSectionProps, UseCase };
