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
                      : 'bg-gray-200 text-gray-400'
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

export default function ComponentApplicationTrackerPage() {
  return (
    <ComponentDocumentation
      name="Application Tracker"
      description="Visual tracking component for government application status. Shows multi-stage progress for applications like passport, PAN card, driving license, certificates with real-time status updates."
      category="Government Specific"
      maturity="beta"
      tier="pattern"
      since="v2.0.0"
      
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
  const stages = [
    { id: '1', label: 'Application Submitted', status: 'completed', date: '10 Mar 2024' },
    { id: '2', label: 'Document Verification', status: 'completed', date: '12 Mar 2024' },
    { id: '3', label: 'Police Verification', status: 'active', date: 'In Progress' },
    { id: '4', label: 'Passport Printing', status: 'pending' },
    { id: '5', label: 'Dispatch', status: 'pending' },
  ];
  
  return (
    <ApplicationTracker
      applicationId="PP202400001234"
      stages={stages}
      currentStage="3"
    />
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
            className="px-4 py-2 text-sm font-semibold text-[#005196] hover:bg-blue-50 rounded-lg transition-colors"
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
                    \${!isCompleted && !isActive && !isRejected ? 'bg-gray-200 text-gray-400' : ''}
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
                class="px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg">
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
        classes += ' bg-gray-200 text-gray-400';
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
    />
  );
}
