/**
 * Stepper Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';
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

const STEPPER_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  {
    name: 'orientation',
    label: 'Orientation',
    type: 'select',
    defaultValue: 'horizontal',
    options: ['horizontal', 'vertical'],
  },
  {
    name: 'currentStep',
    label: 'Current Step',
    type: 'select',
    defaultValue: '1',
    options: ['1', '2', '3', '4'],
  },
];

function StepperPlayground() {
  return (
    <ComponentPlayground
      name="Stepper"
      controls={STEPPER_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="flex items-center gap-2 w-full">{[1,2,3,4].map(s => <React.Fragment key={s}><div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${s < Number(v.currentStep) ? "bg-green-100 text-green-700 dark:text-green-400" : s === Number(v.currentStep) ? "bg-[#005196] text-white" : "bg-muted text-muted-foreground"}`}>{s < Number(v.currentStep) ? "✓" : s}</div>{s < 4 && <div className={`flex-1 h-1 rounded ${s < Number(v.currentStep) ? "bg-green-50 dark:bg-green-900/200" : "bg-muted"}`} />}</React.Fragment>)}</div>
      )}
      codeTemplate={(v) =>
        `<Stepper ${v.orientation} />`
      }
    />
  );
}

export default function ComponentStepperPage() {
  return (
    <ComponentDocumentation
      name="Stepper"
      description="Multi-step progress indicator for forms and workflows. Shows current position in a process and allows navigation between steps. Critical for complex government applications like passport, license renewals."
      category="Navigation"
      maturity="stable"
      tier="composite"
      since="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <StepperPreview />
        </div>
      }
      
      props={[
        {
          name: 'steps',
          type: 'StepItem[]',
          required: true,
          description: 'Array of step items. Each has key, label, and optional description/icon/status.',
        },
        {
          name: 'current',
          type: 'number',
          required: true,
          description: 'Current step index (0-based).',
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
          description: 'Allow clicking on steps to navigate.',
        },
        {
          name: 'onStepClick',
          type: '(index: number) => void',
          required: false,
          description: 'Callback when a step is clicked.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}
      
      examples={[
        {
          title: 'Application Form Stepper',
          description: 'Multi-step application process.',
          code: `import { Stepper } from '@ux4g/react-core';

function Example() {
  return (
    <Stepper />
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
              <span className="text-xs text-muted-foreground text-center mt-1">
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

      useCases={[
        { title: 'Certificate Application Flow', description: 'Step indicator for multi-step certificate application.', scenario: 'Citizen sees progress: Personal > Address > Documents > Review.', implementation: '<Stepper steps={formSteps} currentStep={2} />' },
        { title: 'Payment Processing Flow', description: 'Steps through fee payment process.', scenario: 'Summary > Payment Method > Confirmation > Receipt.', implementation: '<Stepper steps={paymentSteps} currentStep={1} />' },
        { title: 'Account Recovery Flow', description: 'Multi-step identity verification for account recovery.', scenario: 'Citizen recovers locked account: Verify > OTP > Reset > Success.', implementation: '<Stepper steps={recoverySteps} currentStep={3} />' },
        { title: 'Document Verification Flow', description: 'Officer verification workflow with approval stages.', scenario: 'Officer processes: Receive > Verify > Approve > Issue.', implementation: '<Stepper steps={verificationSteps} currentStep={2} orientation="vertical" />' },
      ]}

      additionalContent={
        <>

          <div className="mb-8"><StepperPlayground /></div>

          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 dark:text-green-400 text-sm">✓</span>
                  Do use Stepper when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Multi-step forms or wizards</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Sequential processes with clear stages</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>When users need to see overall progress</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Flows where steps can be completed or skipped</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 dark:text-red-400 text-sm">✗</span>
                  Don&apos;t use Stepper when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Non-sequential content — use Tabs</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple progress — use Progress bar</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Page navigation — use Breadcrumb</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Single-step forms</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 text-sm font-bold text-green-800 dark:text-green-300">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Use 3-5 visible steps for best completion rates. Show current step clearly.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 dark:bg-red-900/20 px-4 py-2 text-sm font-bold text-red-800 dark:text-red-300">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t use more than 7 steps — it causes anxiety. Break into sub-flows.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/progress" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Progress</h3>
                <p className="text-sm text-muted-foreground">For simple progress bars</p>
              </a>
              <a href="/components/breadcrumb" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Breadcrumb</h3>
                <p className="text-sm text-muted-foreground">For page hierarchy</p>
              </a>
              <a href="/components/tabs" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Tabs</h3>
                <p className="text-sm text-muted-foreground">For parallel sections</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added vertical orientation</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added clickable completed steps</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with horizontal stepper</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Progress indicators reduce abandonment</h3>
                <p className="text-sm text-muted-foreground">Multi-step forms with visible progress indicators have 20% lower abandonment rates (Formisimo).</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Step count matters</h3>
                <p className="text-sm text-muted-foreground">Forms with 3-5 visible steps have the best completion rates. More than 7 steps cause anxiety (Baymard).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}