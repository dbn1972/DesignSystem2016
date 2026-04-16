/**
 * ApplicationTracker Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Check, Clock, FileText, UserCheck } from 'lucide-react';

const TrackerPreview = () => {
  const statuses = [
    { id: 1, label: 'Submitted', date: '10 Mar 2024', icon: FileText, completed: true },
    { id: 2, label: 'Under Review', date: '12 Mar 2024', icon: Clock, completed: true },
    { id: 3, label: 'Verification', date: 'In Progress', icon: UserCheck, completed: false, active: true },
    { id: 4, label: 'Approved', date: 'Pending', icon: Check, completed: false },
  ];
  
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Application Status</h3>
        <p className="text-sm text-muted-foreground">Application ID: APP2024001234</p>
      </div>
      
      <div className="space-y-4">
        {statuses.map((status, index) => {
          const Icon = status.icon;
          return (
            <div key={status.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    status.completed
                      ? 'bg-green-700 text-white'
                      : status.active
                      ? 'bg-[#005196] text-white'
                      : 'bg-gray-200 text-muted-foreground'
                  }`}
                >
                  <Icon size={20} />
                </div>
                {index < statuses.length - 1 && (
                  <div className={`w-0.5 h-12 mt-2 ${status.completed ? 'bg-green-700' : 'bg-gray-200'}`} />
                )}
              </div>
              
              <div className="flex-1 pb-4">
                <p className="font-semibold text-foreground">{status.label}</p>
                <p className="text-sm text-muted-foreground">{status.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function ApplicationTrackerPlayground() {
  const [showTimeline, setShowTimeline] = React.useState(false);
  const [showDates, setShowDates] = React.useState(true);
  const [compact, setCompact] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-md"><div className="flex items-center gap-3 mb-3"><div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-xs font-bold">✓</div><div className="flex-1 h-1 bg-green-500 rounded" /><div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-xs font-bold">✓</div><div className="flex-1 h-1 bg-yellow-400 rounded" /><div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold">⏳</div><div className="flex-1 h-1 bg-muted rounded" /><div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground text-xs">4</div></div><div className="flex justify-between text-xs text-muted-foreground"><span>Submitted</span><span>Verified</span><span>Processing</span><span>Complete</span></div></div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showTimeline} onChange={e => setShowTimeline(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show Timeline</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showDates} onChange={e => setShowDates(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show dates</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={compact} onChange={e => setCompact(e.target.checked)} className="accent-primary" /><span className="text-foreground">Compact mode</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<ApplicationTracker${showTimeline ? ' showTimeline' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentApplicationTrackerPage() {
  return (
    <ComponentDocumentation
      name="Application Tracker"
      description="Visual tracking component for government application status. Shows multi-stage progress for applications like passport, PAN card, driving license, certificates with real-time status updates."
      category="Government Specific"
      maturity="beta"
      tier="pattern"
      since="v2.0.0"

      preview={
        <div className="w-full max-w-md"><div className="flex items-center gap-4 mb-4"><div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</div><div className="flex-1 h-1 bg-green-500 rounded" /><div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</div><div className="flex-1 h-1 bg-yellow-400 rounded" /><div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold">⏳</div><div className="flex-1 h-1 bg-muted rounded" /><div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground text-sm font-bold">4</div></div><div className="flex justify-between text-xs text-muted-foreground"><span>Submitted</span><span>Verified</span><span>Processing</span><span>Complete</span></div></div>
      }
      
      props={[
        {
          name: 'applicationId',
          type: 'string',
          required: true,
          description: 'Unique application identifier.',
        },
        {
          name: 'stages',
          type: 'Array<{id: string, label: string, status: "completed" | "active" | "pending", date?: string, description?: string}>',
          required: true,
          description: 'Application stages with status.',
        },
        {
          name: 'currentStage',
          type: 'string',
          required: true,
          description: 'Current active stage ID.',
        },
        {
          name: 'onRefresh',
          type: '() => void',
          required: false,
          description: 'Callback to refresh status.',
        },
      ]}
      
      examples={[
        {
          title: 'Passport Application Tracker',
          description: 'Track passport application progress.',
          code: `import { ApplicationTracker } from '@ux4g/react-core';

function Example() {
  return (
    <ApplicationTracker />
  );
}`,
          preview: <TrackerPreview />,
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { Check, Clock, FileText, AlertCircle, Package } from 'lucide-react';
import { ApplicationTrackerProps } from './ApplicationTracker.types';

const statusIcons = {
  completed: Check,
  active: Clock,
  pending: Clock,
  rejected: AlertCircle,
};

export const ApplicationTracker: React.FC<ApplicationTrackerProps> = ({
  applicationId,
  stages,
  currentStage,
  onRefresh,
  className,
}) => {
  return (
    <div className={\`bg-card rounded-xl p-6 border border-border \${className}\`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Application Status</h3>
          <p className="text-sm text-muted-foreground">Application ID: {applicationId}</p>
        </div>
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="px-4 py-2 text-sm font-semibold text-[#005196] hover:bg-blue-50 dark:bg-blue-950/30 rounded-lg transition-colors"
          >
            Refresh Status
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {stages.map((stage, index) => {
          const Icon = statusIcons[stage.status];
          const isCompleted = stage.status === 'completed';
          const isActive = stage.status === 'active';
          const isRejected = stage.status === 'rejected';
          
          return (
            <div key={stage.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={\`
                    w-10 h-10 rounded-full flex items-center justify-center transition-colors
                    \${isCompleted ? 'bg-green-700 text-white' : ''}
                    \${isActive ? 'bg-[#005196] text-white' : ''}
                    \${isRejected ? 'bg-red-600 text-white' : ''}
                    \${!isCompleted && !isActive && !isRejected ? 'bg-gray-200 text-muted-foreground' : ''}
                  \`}
                >
                  <Icon size={20} />
                </div>
                
                {index < stages.length - 1 && (
                  <div
                    className={\`w-0.5 h-12 mt-2 transition-colors \${
                      isCompleted ? 'bg-green-700' : 'bg-gray-200'
                    }\`}
                  />
                )}
              </div>
              
              <div className="flex-1 pb-4">
                <p
                  className={\`font-semibold \${
                    isRejected ? 'text-red-600' : 'text-foreground'
                  }\`}
                >
                  {stage.label}
                </p>
                {stage.date && (
                  <p className="text-sm text-muted-foreground mt-1">{stage.date}</p>
                )}
                {stage.description && (
                  <p className="text-sm text-gray-500 mt-1">{stage.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Estimated Completion */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Estimated Completion:</span>
          <span className="font-semibold text-foreground">7-10 business days</span>
        </div>
      </div>
    </div>
  );
};`,
        types: `export type StageStatus = 'completed' | 'active' | 'pending' | 'rejected';

export interface ApplicationStage {
  id: string;
  label: string;
  status: StageStatus;
  date?: string;
  description?: string;
}

export interface ApplicationTrackerProps {
  applicationId: string;
  stages: ApplicationStage[];
  currentStage: string;
  onRefresh?: () => void;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ApplicationStage {
  id: string;
  label: string;
  status: 'completed' | 'active' | 'pending' | 'rejected';
  date?: string;
  description?: string;
}

@Component({
  selector: 'ux4g-application-tracker',
  template: \`
    <div class="bg-card rounded-xl p-6 border border-border">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h3 class="text-lg font-semibold text-foreground">Application Status</h3>
          <p class="text-sm text-muted-foreground">Application ID: {{ applicationId }}</p>
        </div>
        <button *ngIf="onRefresh.observers.length > 0"
                (click)="handleRefresh()"
                class="px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:bg-blue-950/30 rounded-lg">
          Refresh Status
        </button>
      </div>
      
      <div class="space-y-4">
        <div *ngFor="let stage of stages; let i = index" class="flex gap-4">
          <div class="flex flex-col items-center">
            <div [class]="getStageIconClasses(stage)">
              <span *ngIf="stage.status === 'completed'">✓</span>
              <span *ngIf="stage.status !== 'completed'">⏱</span>
            </div>
            <div *ngIf="i < stages.length - 1"
                 [class]="getConnectorClasses(stage)">
            </div>
          </div>
          
          <div class="flex-1 pb-4">
            <p [class]="stage.status === 'rejected' ? 'font-semibold text-red-600' : 'font-semibold text-foreground'">
              {{ stage.label }}
            </p>
            <p *ngIf="stage.date" class="text-sm text-muted-foreground mt-1">{{ stage.date }}</p>
            <p *ngIf="stage.description" class="text-sm text-gray-500 mt-1">{{ stage.description }}</p>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class ApplicationTrackerComponent {
  @Input() applicationId!: string;
  @Input() stages: ApplicationStage[] = [];
  @Input() currentStage!: string;
  @Output() onRefresh = new EventEmitter<void>();
  
  getStageIconClasses(stage: ApplicationStage): string {
    let classes = 'w-10 h-10 rounded-full flex items-center justify-center transition-colors';
    
    switch (stage.status) {
      case 'completed':
        classes += ' bg-green-600 text-white';
        break;
      case 'active':
        classes += ' bg-blue-600 text-white';
        break;
      case 'rejected':
        classes += ' bg-red-600 text-white';
        break;
      default:
        classes += ' bg-gray-200 text-muted-foreground';
    }
    
    return classes;
  }
  
  getConnectorClasses(stage: ApplicationStage): string {
    const baseClasses = 'w-0.5 h-12 mt-2 transition-colors';
    return stage.status === 'completed'
      ? \`\${baseClasses} bg-green-600\`
      : \`\${baseClasses} bg-gray-200\`;
  }
  
  handleRefresh() {
    this.onRefresh.emit();
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationTrackerComponent } from './application-tracker.component';

@NgModule({
  declarations: [ApplicationTrackerComponent],
  imports: [CommonModule],
  exports: [ApplicationTrackerComponent]
})
export class ApplicationTrackerModule { }`,
        types: `export type StageStatus = 'completed' | 'active' | 'pending' | 'rejected';

export interface ApplicationStage {
  id: string;
  label: string;
  status: StageStatus;
  date?: string;
  description?: string;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-application-tracker> custom element",
        html: "<ux4g-application-tracker variant=\"primary\" size=\"md\"><!-- ApplicationTracker --></ux4g-application-tracker>",
      }}
      comparisons={[
        {
          system: 'Ant Design (Alibaba)',
          component: 'Steps + Timeline',
          variants: 'vertical timeline with status',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/steps',
        },
        {
          system: 'Material UI (Google)',
          component: 'Stepper + Timeline',
          variants: 'custom tracker pattern',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://mui.com/material-ui/react-stepper/',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Clear visual status indicators',
          'Color + icon combination',
          'Status text for screen readers',
          'Logical reading order',
          'Refresh button accessible',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate to refresh button' },
          { key: 'Enter', action: 'Refresh status' },
        ],
        screenReader: [
          'Announces application ID',
          'Reads stage labels',
          'Announces completion status',
          'Reads dates and descriptions',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/application-tracker.json',
        mappings: [
          { property: 'Completed Stage Color', token: 'tracker.completed.bg', value: '#138808 (Green 600)' },
          { property: 'Active Stage Color', token: 'tracker.active.bg', value: '#005196 (Navy 500)' },
          { property: 'Pending Stage Color', token: 'tracker.pending.bg', value: '#E5E7EB (Gray 200)' },
          { property: 'Connector Active', token: 'tracker.connector.active', value: '#138808' },
          { property: 'Connector Inactive', token: 'tracker.connector.inactive', value: '#E5E7EB' },
        ],
      }}

      useCases={[
        { title: 'Certificate Status Tracking', description: 'Track birth/death certificate application progress.', scenario: 'Citizen checks certificate status after submission.', implementation: '<ApplicationTracker applicationId="CERT-2026-001" />' },
        { title: 'Grievance Resolution Tracking', description: 'Track grievance resolution through government portal.', scenario: 'Citizen follows up on filed grievance with tracking ID.', implementation: '<ApplicationTracker applicationId="GRV-2026-042" showTimeline />' },
        { title: 'Passport Application Status', description: 'Track passport application through processing stages.', scenario: 'Citizen monitors passport from Applied to Dispatched.', implementation: '<ApplicationTracker applicationId="PSP-2026-100" stages={passportStages} />' },
        { title: 'Pension Claim Tracking', description: 'Track pension claim approval and disbursement status.', scenario: 'Retired employee tracks pension claim through HR department.', implementation: '<ApplicationTracker applicationId="PEN-2026-055" showDates />' },
      ]}

      additionalContent={
        <>

          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use ApplicationTracker when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Application status tracking pages</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Multi-step process visualization</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Citizen-facing status dashboards</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Service delivery tracking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use ApplicationTracker when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple progress — use Progress bar</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Step-by-step forms — use Stepper</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Activity logs — use Timeline</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Static status display — use Badge</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Show estimated completion dates alongside status to set expectations.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t show status without context — include dates and next steps.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/timeline" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Timeline</h3>
                <p className="text-sm text-muted-foreground">For chronological event display</p>
              </a>
              <a href="/components/stepper" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Stepper</h3>
                <p className="text-sm text-muted-foreground">For form step progress</p>
              </a>
              <a href="/components/badge" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Badge</h3>
                <p className="text-sm text-muted-foreground">For status indicators</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added real-time status updates</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added estimated completion date</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic status display</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Status transparency builds trust</h3>
                <p className="text-sm text-muted-foreground">Citizens who can track application status report 45% higher satisfaction with government services (World Bank e-Gov study).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}