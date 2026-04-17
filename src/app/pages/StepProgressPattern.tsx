import { Link } from "react-router";
import { useState } from "react";
import {  TrendingUp, CheckCircle, Clock, AlertCircle, User, FileText, CreditCard, Truck, ChevronRight, Download, Copy, Check } from "lucide-react";

// Define application steps
const STEPS = [
  {
    id: 1,
    title: "Application Submitted",
    description: "Your application has been received and registered in the system",
    icon: <FileText size={24} />,
    status: "completed",
    completedDate: new Date(Date.now() - 72 * 60 * 60 * 1000),
    estimatedDuration: "Instant",
    actor: "Applicant",
    details: "Application #DL-2026-89012 submitted with all required documents"
  },
  {
    id: 2,
    title: "Initial Screening",
    description: "Application screened for completeness and basic eligibility",
    icon: <User size={24} />,
    status: "completed",
    completedDate: new Date(Date.now() - 48 * 60 * 60 * 1000),
    estimatedDuration: "6-12 hours",
    actor: "Screening Officer",
    details: "All required documents present. Eligibility criteria met."
  },
  {
    id: 3,
    title: "Payment Processing",
    description: "Application fee payment verification",
    icon: <CreditCard size={24} />,
    status: "completed",
    completedDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
    estimatedDuration: "1-2 hours",
    actor: "Payment Gateway",
    details: "Payment of ₹500 received and verified. Transaction ID: UPI2026040812345"
  },
  {
    id: 4,
    title: "Document Verification",
    description: "Detailed verification of all submitted documents",
    icon: <FileText size={24} />,
    status: "completed",
    completedDate: new Date(Date.now() - 5 * 60 * 60 * 1000),
    estimatedDuration: "1-2 days",
    actor: "Verification Officer",
    details: "All documents verified: Aadhaar, Address Proof, Existing License, Medical Certificate"
  },
  {
    id: 5,
    title: "Final Approval",
    description: "Application reviewed and approved by RTO",
    icon: <CheckCircle size={24} />,
    status: "current",
    startedDate: new Date(Date.now() - 2 * 60 * 60 * 1000),
    estimatedDuration: "2-3 days",
    estimatedCompletion: new Date(Date.now() + 22 * 60 * 60 * 1000),
    actor: "Regional Transport Officer",
    details: "Application under final review. Decision expected within 24 hours."
  },
  {
    id: 6,
    title: "License Generation",
    description: "Physical driving license is being printed",
    icon: <CreditCard size={24} />,
    status: "pending",
    estimatedDuration: "1-2 days",
    actor: "License Production Unit",
    details: "License will be printed after approval"
  },
  {
    id: 7,
    title: "Dispatch",
    description: "License dispatched to your registered address",
    icon: <Truck size={24} />,
    status: "pending",
    estimatedDuration: "3-5 days",
    actor: "Postal Service",
    details: "Tracking number will be provided after dispatch"
  }
];

export default function StepProgressPattern() {
  const [selectedStep, setSelectedStep] = useState(5); // Current step selected

  const currentStepIndex = STEPS.findIndex(s => s.status === 'current');
  const progress = ((currentStepIndex + 1) / STEPS.length) * 100;
  const completedSteps = STEPS.filter(s => s.status === 'completed').length;

  const getStepStatus = (step: typeof STEPS[0]) => {
    if (step.status === 'completed') return { color: 'green', label: 'Completed' };
    if (step.status === 'current') return { color: 'blue', label: 'In Progress' };
    return { color: 'gray', label: 'Pending' };
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return null;
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/status-lifecycle" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">Step Progress Tracker</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Banner */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-[1400px] mx-auto px-8 py-8">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-90">Application Progress</div>
              <div className="text-lg font-bold">{Math.round(progress)}% Complete</div>
            </div>
            <div className="w-full h-3 bg-card/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-card transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Application Reference</div>
              <div className="text-2xl font-bold">DL-2026-89012</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">Current Stage</div>
              <div className="text-xl font-bold">Step {currentStepIndex + 1} of {STEPS.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-12">
        
        <div className="grid grid-cols-12 gap-8">
          
          {/* Step Progress Visualization */}
          <div className="col-span-4">
            <div className="bg-card border-2 border-border rounded-lg p-8 sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Application Journey</h2>
              
              {/* Vertical Progress Tracker */}
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-[19px] top-[20px] bottom-[20px] w-1 bg-gray-200"></div>
                <div 
                  className="absolute left-[19px] top-[20px] w-1 bg-green-700 transition-all duration-500"
                  style={{ 
                    height: `${(completedSteps / STEPS.length) * 100}%` 
                  }}
                ></div>

                {/* Steps */}
                <div className="space-y-6">
                  {STEPS.map((step, index) => {
                    const status = getStepStatus(step);
                    const isSelected = selectedStep === step.id;
                    
                    return (
                      <button
                        key={step.id}
                        onClick={() => setSelectedStep(step.id)}
                        className={`relative w-full text-left transition-all ${
                          isSelected ? 'scale-105' : ''
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {/* Step Icon */}
                          <div className={`relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 ${
                            step.status === 'completed' ? 'bg-green-700' :
                            step.status === 'current' ? 'bg-blue-500' :
                            'bg-gray-300'
                          }`}>
                            {step.status === 'completed' ? (
                              <CheckCircle size={20} className="text-white" />
                            ) : step.status === 'current' ? (
                              <Clock size={20} className="text-white animate-pulse" />
                            ) : (
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            )}
                          </div>

                          {/* Step Info */}
                          <div className={`flex-1 pt-1 ${isSelected ? 'bg-blue-50 -ml-2 -mr-2 px-2 py-1 rounded' : ''}`}>
                            <div className="font-bold text-foreground text-sm mb-1">
                              {step.title}
                            </div>
                            <div className={`text-xs font-bold ${
                              status.color === 'green' ? 'text-green-600' :
                              status.color === 'blue' ? 'text-blue-600' :
                              'text-gray-500'
                            }`}>
                              {status.label}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Summary Stats */}
              <div className="mt-8 pt-8 border-t-2 border-border grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#138808]">{completedSteps}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-muted-foreground">{STEPS.length - completedSteps - 1}</div>
                  <div className="text-xs text-muted-foreground">Remaining</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step Details */}
          <div className="col-span-8">
            {STEPS.filter(s => s.id === selectedStep).map(step => {
              const status = getStepStatus(step);
              
              return (
                <div key={step.id} className="bg-card border-2 border-border rounded-lg overflow-hidden">
                  {/* Header */}
                  <div className={`p-8 border-b-2 border-border ${
                    status.color === 'green' ? 'bg-green-50' :
                    status.color === 'blue' ? 'bg-blue-50' :
                    'bg-background'
                  }`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-4 rounded-lg ${
                        status.color === 'green' ? 'bg-green-500' :
                        status.color === 'blue' ? 'bg-blue-500' :
                        'bg-gray-400'
                      } text-white`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-foreground">{step.title}</h2>
                          <span className={`px-3 py-1 text-sm font-bold rounded ${
                            status.color === 'green' ? 'bg-green-500 text-white' :
                            status.color === 'blue' ? 'bg-blue-500 text-white' :
                            'bg-gray-400 text-white'
                          }`}>
                            {status.label}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      {/* Responsible Party */}
                      <div>
                        <div className="text-sm font-bold text-muted-foreground mb-2">Responsible Party</div>
                        <div className="flex items-center gap-2">
                          <User size={20} className="text-gray-500" />
                          <span className="font-bold text-foreground">{step.actor}</span>
                        </div>
                      </div>

                      {/* Estimated Duration */}
                      <div>
                        <div className="text-sm font-bold text-muted-foreground mb-2">Estimated Duration</div>
                        <div className="flex items-center gap-2">
                          <Clock size={20} className="text-gray-500" />
                          <span className="font-bold text-foreground">{step.estimatedDuration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Completion/Start Date */}
                    {step.completedDate && (
                      <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle size={20} className="text-green-600" />
                          <span className="font-bold text-foreground">Completed</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(step.completedDate)}
                        </div>
                      </div>
                    )}

                    {step.status === 'current' && step.startedDate && (
                      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Clock size={20} className="text-blue-600" />
                              <span className="font-bold text-foreground">Started</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {formatDate(step.startedDate)}
                            </div>
                          </div>
                          {step.estimatedCompletion && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <TrendingUp size={20} className="text-blue-600" />
                                <span className="font-bold text-foreground">Expected By</span>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {formatDate(step.estimatedCompletion)}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {step.status === 'pending' && (
                      <div className="mb-6 p-4 bg-background border-2 border-border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle size={20} className="text-gray-500" />
                          <span className="font-bold text-foreground">Awaiting Previous Step</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          This step will begin once the current stage is complete
                        </div>
                      </div>
                    )}

                    {/* Details */}
                    <div>
                      <div className="text-sm font-bold text-muted-foreground mb-3">Details</div>
                      <p className="text-muted-foreground bg-background p-4 rounded-lg border-2 border-border">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="p-6 bg-background border-t-2 border-border flex items-center justify-between">
                    <button
                      onClick={() => setSelectedStep(Math.max(1, selectedStep - 1))}
                      disabled={selectedStep === 1}
                      className="px-4 py-2 border-2 border-border rounded font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-400"
                    >
                      ← Previous Step
                    </button>
                    <button
                      onClick={() => setSelectedStep(Math.min(STEPS.length, selectedStep + 1))}
                      disabled={selectedStep === STEPS.length}
                      className="px-4 py-2 bg-primary text-white rounded font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 flex items-center gap-2"
                    >
                      <span>Next Step</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Pattern Info */}
        <div className="mt-12 bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-muted-foreground mb-2">Visual Progress</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Vertical step tracker</li>
                <li>• Progress percentage</li>
                <li>• Completion indicator</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Step States</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Completed (green)</li>
                <li>• In Progress (blue)</li>
                <li>• Pending (gray)</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Time Intelligence</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Estimated duration</li>
                <li>• Completion dates</li>
                <li>• Expected timeline</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Accountability</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Responsible party</li>
                <li>• Step details</li>
                <li>• Navigation</li>
              </ul>
            </div>
          </div>
        </div>

      
        <StepProgressCodeDownloads />

      </main>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const STEPPROGRESS_REACT_CODE = `import React, { useState } from 'react';

export default function StepProgressPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/step-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: Date.now() }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch { setError('Something went wrong. Please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Step Progress</h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-xl font-bold">Success</h2>
            <p className="text-muted-foreground mt-2">Your request has been processed.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">
              {loading ? 'Processing...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}`;

const STEPPROGRESS_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-step-progress',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Step Progress</h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <div *ngIf="submitted" class="text-center py-6">
          <h2 class="text-xl font-bold">Success</h2>
          <p class="text-muted-foreground mt-2">Your request has been processed.</p>
        </div>
        <form *ngIf="!submitted" (ngSubmit)="onSubmit()">
          <button type="submit" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">
            {{ loading ? 'Processing...' : 'Submit' }}
          </button>
        </form>
      </div>
    </div>
  \`
})
export class StepProgressComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/step-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: Date.now() }),
      });
      if (!res.ok) throw new Error('Failed');
      this.submitted = true;
    } catch { this.error = 'Something went wrong.'; }
    finally { this.loading = false; }
  }
}`;

const STEPPROGRESS_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Step Progress — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { font-size: 1.5rem; font-weight: 700; color: #111; margin-bottom: 0.5rem; }
    .subtitle { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:hover { background: #004178; }
    .btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .success { text-align: center; padding: 2rem 0; display: none; }
    .success h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
    .success p { color: #6b7280; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Step Progress</h1>
    <p class="subtitle">Government digital service pattern</p>
    <div id="error" class="error" role="alert"></div>
    <form id="mainForm" novalidate>
      <button type="submit" class="btn" id="submitBtn">Submit</button>
    </form>
    <div id="success" class="success">
      <h2>Success</h2>
      <p>Your request has been processed.</p>
    </div>
  </div>
  <script>
    document.getElementById('mainForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const err = document.getElementById('error');
      const btn = document.getElementById('submitBtn');
      err.style.display = 'none';
      btn.disabled = true; btn.textContent = 'Processing...';
      try {
        const res = await fetch('/api/step-progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ timestamp: Date.now() }),
        });
        if (!res.ok) throw new Error('Failed');
        document.getElementById('mainForm').style.display = 'none';
        document.getElementById('success').style.display = 'block';
      } catch { err.textContent = 'Something went wrong.'; err.style.display = 'block'; }
      finally { btn.disabled = false; btn.textContent = 'Submit'; }
    });
  </script>
</body>
</html>`;

function StepProgressCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: STEPPROGRESS_REACT_CODE, filename: 'StepProgressPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: STEPPROGRESS_ANGULAR_CODE, filename: 'step-progress.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: STEPPROGRESS_HTML_CODE, filename: 'step-progress.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Step Progress implementations.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <div key={lane.key} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1 bg-[#005196]" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Framework lane</span>
                  <h3 className="text-lg font-bold text-foreground mt-2">{lane.title}</h3>
                  <p className="text-sm text-muted-foreground">{lane.desc}</p>
                </div>
                <button onClick={() => downloadCode(lane.code, lane.filename)} aria-label={`Download ${lane.title} code`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] hover:bg-[#005196] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                  <Download size={16} />
                </button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">{lane.filename}</span>
                  <button onClick={() => copyToClipboard(lane.code, lane.key)} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                    {copiedId === lane.key ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === lane.key ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
                  <pre className="font-mono leading-5 whitespace-pre-wrap"><code>{lane.code.slice(0, 800)}...</code></pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
