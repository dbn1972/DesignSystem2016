interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  steps: Array<{ label: string; path?: string }>;
}

export function FormProgress({ currentStep, totalSteps, steps }: FormProgressProps) {
  return (
    <div className="bg-muted border-b-2 border-border py-6">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === currentStep;
            const isCompleted = stepNumber < currentStep;
            
            return (
              <div key={index} className="flex items-center flex-1 last:flex-initial">
                <div className="text-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                      isCompleted
                        ? 'bg-green-600 text-primary-foreground'
                        : isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-gray-300 text-muted-foreground'
                    }`}
                  >
                    {isCompleted ? '✓' : stepNumber}
                  </div>
                  <div className="text-xs text-muted-foreground font-bold whitespace-nowrap">
                    {step.label}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      stepNumber < currentStep ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
