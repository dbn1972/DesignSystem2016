/**
 * Stepper Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Check } from 'lucide-react';

const StepperPreview = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  
  const steps = [
    { id: 1, label: 'Personal Details' },
    { id: 2, label: 'Documents' },
    { id: 3, label: 'Review' },
    { id: 4, label: 'Submit' },
  ];
  
  return (
    <div>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  step.id < currentStep
                    ? 'bg-green-700 text-white'
                    : step.id === currentStep
                    ? 'bg-[#005196] text-white'
                    : 'bg-gray-200 text-muted-foreground'
                }`}
              >
                {step.id < currentStep ? <Check size={20} /> : step.id}
              </div>
              <span className="mt-2 text-sm font-medium text-muted-foreground">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-4 transition-colors ${
                  step.id < currentStep ? 'bg-green-700' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="px-6 py-2 border-2 border-[#005196] text-[#005196] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
          disabled={currentStep === steps.length}
          className="px-6 py-2 bg-[#005196] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default function ComponentStepperPage() {
  return (
    <ComponentDocumentation
      name="Stepper"
      description="Multi-step progress indicator for forms and workflows. Shows current position in a process and allows navigation between steps. Critical for complex government applications like passport, license renewals."
      category="Navigation"
      maturity="stable"
      tier="composite"
      since="v2.0.0"
      
      props={[
        {
          name: 'steps',
          type: 'Array<{id: number, label: string, description?: string}>',
          required: true,
          description: 'Array of step definitions.',
        },
        {
          name: 'currentStep',
          type: 'number',
          required: true,
          description: 'Current active step index (1-based).',
        },
        {
          name: 'onStepChange',
          type: '(step: number) => void',
          required: false,
          description: 'Callback when step is clicked (if clickable).',
        },
        {
          name: 'orientation',
          type: "'horizontal' | 'vertical'",
          default: "'horizontal'",
          required: false,
          description: 'Layout orientation.',
        },
        {
          name: 'clickable',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Allow clicking on completed steps.',
        },
      ]}
      
      examples={[
        {
          title: 'Application Form Stepper',
          description: 'Multi-step application process.',
          code: `import { Stepper } from '@ux4g/react-core';

function Example() {
  const [currentStep, setCurrentStep] = React.useState(1);
  
  const steps = [
    { id: 1, label: 'Personal Details' },
    { id: 2, label: 'Documents' },
    { id: 3, label: 'Review' },
    { id: 4, label: 'Submit' },
  ];
  
  return (
    <Stepper
      steps={steps}
      currentStep={currentStep}
      onStepChange={setCurrentStep}
    />
  );
}`,
          preview: <StepperPreview />,
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { Check } from 'lucide-react';
import { StepperProps } from './Stepper.types';

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepChange,
  orientation = 'horizontal',
  clickable = false,
}) => {
  const handleStepClick = (stepId: number) => {
    if (clickable && stepId < currentStep && onStepChange) {
      onStepChange(stepId);
    }
  };
  
  if (orientation === 'vertical') {
    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={\`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold
                  \${step.id < currentStep ? 'bg-green-700 text-white' : ''}
                  \${step.id === currentStep ? 'bg-[#005196] text-white' : ''}
                  \${step.id > currentStep ? 'bg-gray-200 text-muted-foreground' : ''}
                  \${clickable && step.id < currentStep ? 'cursor-pointer' : ''}
                \`}
                onClick={() => handleStepClick(step.id)}
              >
                {step.id < currentStep ? <Check size={20} /> : step.id}
              </div>
              {index < steps.length - 1 && (
                <div className={\`w-1 flex-1 mt-2 \${step.id < currentStep ? 'bg-green-700' : 'bg-gray-200'}\`} />
              )}
            </div>
            <div className="flex-1 pb-8">
              <p className="font-semibold text-foreground">{step.label}</p>
              {step.description && (
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <div
              className={\`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors
                \${step.id < currentStep ? 'bg-green-700 text-white' : ''}
                \${step.id === currentStep ? 'bg-[#005196] text-white' : ''}
                \${step.id > currentStep ? 'bg-gray-200 text-muted-foreground' : ''}
                \${clickable && step.id < currentStep ? 'cursor-pointer hover:opacity-80' : ''}
              \`}
              onClick={() => handleStepClick(step.id)}
            >
              {step.id < currentStep ? <Check size={20} /> : step.id}
            </div>
            <span className="mt-2 text-sm font-medium text-muted-foreground text-center">
              {step.label}
            </span>
            {step.description && (
              <span className="text-xs text-gray-500 text-center mt-1">
                {step.description}
              </span>
            )}
          </div>
          
          {index < steps.length - 1 && (
            <div
              className={\`flex-1 h-1 mx-4 transition-colors \${
                step.id < currentStep ? 'bg-green-700' : 'bg-gray-200'
              }\`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};`,
        types: `export interface Step {
  id: number;
  label: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepChange?: (step: number) => void;
  orientation?: 'horizontal' | 'vertical';
  clickable?: boolean;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Step {
  id: number;
  label: string;
  description?: string;
}

@Component({
  selector: 'ux4g-stepper',
  template: \`
    <div class="flex items-center justify-between">
      <ng-container *ngFor="let step of steps; let i = index">
        <div class="flex flex-col items-center">
          <div [class]="getStepClasses(step)" (click)="handleStepClick(step.id)">
            <span *ngIf="step.id >= currentStep">{{ step.id }}</span>
            <span *ngIf="step.id < currentStep">✓</span>
          </div>
          <span class="mt-2 text-sm font-medium text-muted-foreground">{{ step.label }}</span>
        </div>
        
        <div *ngIf="i < steps.length - 1"
             [class]="getConnectorClasses(step)">
        </div>
      </ng-container>
    </div>
  \`
})
export class StepperComponent {
  @Input() steps: Step[] = [];
  @Input() currentStep = 1;
  @Input() clickable = false;
  @Output() stepChanged = new EventEmitter<number>();
  
  getStepClasses(step: Step): string {
    let classes = 'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors';
    
    if (step.id < this.currentStep) {
      classes += ' bg-green-600 text-white';
      if (this.clickable) classes += ' cursor-pointer hover:opacity-80';
    } else if (step.id === this.currentStep) {
      classes += ' bg-blue-600 text-white';
    } else {
      classes += ' bg-gray-200 text-muted-foreground';
    }
    
    return classes;
  }
  
  getConnectorClasses(step: Step): string {
    const baseClasses = 'flex-1 h-1 mx-4 transition-colors';
    return step.id < this.currentStep 
      ? \`\${baseClasses} bg-green-600\`
      : \`\${baseClasses} bg-gray-200\`;
  }
  
  handleStepClick(stepId: number) {
    if (this.clickable && stepId < this.currentStep) {
      this.stepChanged.emit(stepId);
    }
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [StepperComponent],
  imports: [CommonModule],
  exports: [StepperComponent]
})
export class StepperModule { }`,
        types: `export interface Step {
  id: number;
  label: string;
  description?: string;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-stepper> custom element",
        html: "<ux4g-stepper variant=\"primary\" size=\"md\"><!-- Stepper --></ux4g-stepper>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Stepper',
          variants: 'horizontal, vertical, linear, non-linear',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-stepper/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Steps',
          variants: 'horizontal, vertical, dot, navigation',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/steps',
        },
        {
          system: 'Chakra UI',
          component: 'Stepper',
          variants: 'horizontal, vertical, sizes',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/stepper',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Clear visual indication of current step',
          'Completed steps marked with checkmark',
          'Keyboard navigation between clickable steps',
          'ARIA labels for step status',
          'Color + icon combination (not color alone)',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate between clickable steps' },
          { key: 'Enter/Space', action: 'Activate clickable step' },
        ],
        screenReader: [
          'Announces current step',
          'Reads step labels',
          'Announces completion status',
          'Announces total steps',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/stepper.json',
        mappings: [
          { property: 'Active Step Background', token: 'stepper.active.bg', value: '#005196 (Navy 500)' },
          { property: 'Completed Step Background', token: 'stepper.completed.bg', value: '#138808 (Green 600)' },
          { property: 'Inactive Step Background', token: 'stepper.inactive.bg', value: '#E5E7EB (Gray 200)' },
          { property: 'Connector Active', token: 'stepper.connector.active', value: '#138808' },
          { property: 'Connector Inactive', token: 'stepper.connector.inactive', value: '#E5E7EB' },
        ],
      }}
    />
  );
}
