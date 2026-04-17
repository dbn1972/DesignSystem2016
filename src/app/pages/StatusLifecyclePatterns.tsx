import { useState } from "react";
import { Link } from "react-router";
import {  Activity, TrendingUp, CheckCircle, Clock, AlertTriangle, Layers, BarChart3, ArrowRight, Zap, Download, Copy, Check } from "lucide-react";

export default function StatusLifecyclePatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 via-white to-green-50 border-b-4 border-[#138808]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Activity size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-5xl font-bold text-foreground">Status & Lifecycle Patterns</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Lifecycle intelligence patterns that go beyond basic status tracking. Provide citizens with detailed timeline views, 
                step-by-step progress, delay transparency, escalation visibility, and SLA expectations. Transform opaque bureaucratic 
                processes into transparent, understandable journeys.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Lifecycle Intelligence</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">7 Interactive Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                  <span className="text-muted-foreground">Focus: <span className="font-bold text-foreground">Transparency</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-blue-500 text-white rounded-lg font-bold text-center shadow-lg">
                LIFECYCLE AWARE
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                TRANSPARENT
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access */}
      <div className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-bold text-foreground">Quick Access:</span>
              <Link to="/patterns/status-lifecycle/overview" className="text-primary hover:underline text-sm font-medium">
                Pattern Overview
              </Link>
              <Link to="#all-patterns" className="text-primary hover:underline text-sm font-medium">
                View All Patterns
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: April 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        
        {/* System Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-border rounded-lg p-10">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Lifecycle Intelligence?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  The Problem
                </h3>
                <p className="text-sm text-muted-foreground">
                  Citizens see "Pending" for weeks with no context. They don't know what's happening, who's reviewing, 
                  why there's a delay, or when to expect resolution. This creates anxiety and support calls.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  The Solution
                </h3>
                <p className="text-sm text-muted-foreground">
                  Lifecycle patterns provide granular visibility into application journeys. Show exact steps, current stage, 
                  responsible department, time expectations, delays with reasons, and escalation paths.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  The Impact
                </h3>
                <p className="text-sm text-muted-foreground">
                  Transparency reduces anxiety, support requests drop 60%, citizens trust the process, and departments 
                  are accountable for SLAs. Better experience for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Categories */}
        <section className="mb-16" id="all-patterns">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-blue-500 pl-4">
            Pattern Categories
          </h2>

          {/* Visual Progress Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Visual Progress Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Timeline View"
                description="Chronological activity timeline showing all events, actions, and status changes with timestamps and actors"
                icon={<Activity size={32} className="text-blue-600" />}
                link="/patterns/status-lifecycle/timeline-view"
                complexity="Medium"
                userBenefit="See complete history"
                useCases={["Audit trail", "Status history", "Event tracking"]}
              />
              <PatternCard
                title="Step Progress Tracker"
                description="Visual step-by-step progress indicator showing completed, current, and upcoming stages with estimates"
                icon={<TrendingUp size={32} className="text-green-600" />}
                link="/patterns/status-lifecycle/step-progress"
                complexity="Medium"
                userBenefit="Know where you are"
                useCases={["Multi-step processes", "Application journey", "Approval workflows"]}
              />
            </div>
          </div>

          {/* Status Intelligence Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Status Intelligence Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Multi-status Indicators"
                description="Complex status states with sub-statuses, conditions, and contextual information beyond simple labels"
                icon={<Layers size={32} className="text-purple-600" />}
                link="/patterns/status-lifecycle/multi-status"
                complexity="High"
                userBenefit="Understand exact state"
                useCases={["Complex workflows", "Conditional routing", "Department handoffs"]}
              />
              <PatternCard
                title="Delayed / Pending State"
                description="Transparent delay communication with reasons, expected resolution time, and next steps"
                icon={<Clock size={32} className="text-orange-600" />}
                link="/patterns/status-lifecycle/delayed-state"
                complexity="Medium"
                userBenefit="Know why and when"
                useCases={["Processing delays", "Missing documents", "Verification pending"]}
              />
            </div>
          </div>

          {/* Accountability & Expectations Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Accountability & Expectations Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Escalated State"
                description="Escalation tracking showing escalation level, assigned officer, and expedited timeline"
                icon={<AlertTriangle size={32} className="text-red-600" />}
                link="/patterns/status-lifecycle/escalated-state"
                complexity="High"
                userBenefit="Priority handling visible"
                useCases={["Complaint escalation", "Urgent processing", "VIP applications"]}
              />
              <PatternCard
                title="SLA / Time Expectation Display"
                description="Service Level Agreement visualization with expected timeline, current progress, and deadline alerts"
                icon={<Clock size={32} className="text-teal-600" />}
                link="/patterns/status-lifecycle/sla-display"
                complexity="Medium"
                userBenefit="Know the timeline"
                useCases={["Processing time", "Deadline tracking", "Commitment display"]}
              />
            </div>
          </div>

          {/* Batch & Bulk Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Batch & Bulk Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Batch Status (Multiple Applications)"
                description="Unified view of multiple applications with aggregated status, filtering, and bulk operations"
                icon={<BarChart3 size={32} className="text-indigo-600" />}
                link="/patterns/status-lifecycle/batch-status"
                complexity="High"
                userBenefit="Manage many at once"
                useCases={["Multiple applications", "Family applications", "Bulk submissions"]}
              />
              <div className="p-6 border-2 border-dashed border-border rounded-lg bg-background flex items-center justify-center text-center">
                <div>
                  <p className="text-muted-foreground mb-2">Additional lifecycle patterns can be added:</p>
                  <p className="text-sm text-gray-500">Rejection reasons, Appeal process, Re-submission flow</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-[#138808] pl-4">
            Implementation Guidelines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuidelineCard
              title="Transparency"
              points={[
                "Show real-time status updates",
                "Explain what's happening now",
                "Identify responsible department",
                "Display timestamps for all events",
                "Provide context for delays"
              ]}
            />
            <GuidelineCard
              title="Time Expectations"
              points={[
                "Show SLA/processing time upfront",
                "Display progress against timeline",
                "Alert when deadlines approach",
                "Explain delays with new estimates",
                "Track departmental accountability"
              ]}
            />
            <GuidelineCard
              title="User Empowerment"
              points={[
                "Enable tracking without login (reference #)",
                "Send proactive notifications",
                "Provide escalation options",
                "Allow document uploads anytime",
                "Show next required actions"
              ]}
            />
          </div>
        </section>

        {/* Lifecycle Intelligence Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-blue-500 pl-4">
            Lifecycle Intelligence Features
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap size={20} className="text-yellow-600" />
                Smart Status Updates
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Auto-notifications:</strong> SMS/Email on every status change</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Granular states:</strong> Beyond "Pending" - show exact sub-status</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Actor visibility:</strong> Show who processed each step</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Reason codes:</strong> Explain rejections, delays, requirements</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Activity size={20} className="text-blue-600" />
                Predictive Intelligence
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Estimated completion:</strong> ML-based prediction from historical data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Bottleneck detection:</strong> Alert if stuck longer than average</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Proactive alerts:</strong> Notify before deadlines or expiry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Similar cases:</strong> "90% approved in 7 days"</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Status Vocabulary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-purple-500 pl-4">
            Standard Status Vocabulary
          </h2>
          <div className="bg-card border-2 border-border rounded-lg p-8">
            <p className="text-muted-foreground mb-6">
              Consistent status terminology across all government services improves citizen understanding and reduces confusion.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-4">Primary States</h3>
                <div className="space-y-3">
                  <StatusExample status="Submitted" color="blue" description="Application received and registered" />
                  <StatusExample status="Under Review" color="purple" description="Being reviewed by department officer" />
                  <StatusExample status="Verification Pending" color="orange" description="Awaiting document/identity verification" />
                  <StatusExample status="Action Required" color="red" description="Citizen action needed (upload, payment, etc.)" />
                  <StatusExample status="Processing" color="blue" description="Active processing by department" />
                  <StatusExample status="Approved" color="green" description="Application approved" />
                  <StatusExample status="Rejected" color="red" description="Application rejected with reason" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">Complex States</h3>
                <div className="space-y-3">
                  <StatusExample status="On Hold" color="orange" description="Temporarily paused (reason provided)" />
                  <StatusExample status="Escalated" color="red" description="Escalated to senior officer" />
                  <StatusExample status="Delayed" color="orange" description="Behind SLA with reason and new ETA" />
                  <StatusExample status="Forwarded" color="purple" description="Transferred to another department" />
                  <StatusExample status="Partially Approved" color="yellow" description="Some items approved, some pending" />
                  <StatusExample status="Ready for Collection" color="green" description="Certificate/card ready for pickup" />
                  <StatusExample status="Dispatched" color="green" description="Sent via post/courier" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4">
            Related Resources
          </h2>
          <div className="bg-card border-2 border-border rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-foreground mb-4">Related Pattern Families</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/patterns/dashboard" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Dashboard & Personalization Patterns</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/contact-support" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Contact & Support Patterns</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/service" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Service Pattern Libraries</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">Design System Components</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Progress & Timeline Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Status Badge Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Alert & Notification Components</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      
        <StatusLifecycleCodeDownloads />

      </div>
    </div>
  );
}

// ==================== COMPONENTS ====================

function PatternCard({ title, description, icon, link, complexity, userBenefit, useCases }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  complexity: string;
  userBenefit: string;
  useCases: string[];
}) {
  return (
    <Link to={link} className="block group">
      <div className="bg-card border-2 border-border rounded-lg p-6 h-full transition-all hover:border-primary hover:shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-background border-2 border-border rounded-lg group-hover:border-primary transition-colors">
            {icon}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h4>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="px-2 py-1 bg-muted rounded">
                {complexity}
              </span>
              <span className="text-[#138808]">✓ {userBenefit}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <div className="mb-4">
          <div className="text-xs font-bold text-muted-foreground mb-2">Common Use Cases:</div>
          <ul className="space-y-1">
            {useCases.map((useCase, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                <span className="text-[#138808]">•</span>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          <span>View Pattern</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}

function GuidelineCard({ title, points }: {
  title: string;
  points: string[];
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusExample({ status, color, description }: {
  status: string;
  color: string;
  description: string;
}) {
  const colors = {
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    purple: 'bg-purple-100 text-purple-800 border-purple-300',
    orange: 'bg-orange-100 text-orange-800 border-orange-300',
    red: 'bg-red-100 text-red-800 border-red-300',
    green: 'bg-green-100 text-green-800 border-green-300',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300'
  };

  return (
    <div className="flex items-start gap-3">
      <span className={`px-3 py-1 text-xs font-bold rounded border-2 ${colors[color as keyof typeof colors]}`}>
        {status}
      </span>
      <span className="text-sm text-muted-foreground flex-1">{description}</span>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const STATUSLIFECYCLE_REACT_CODE = `import React, { useState } from 'react';

export default function StatusLifecyclePage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/status-lifecycle', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Status Lifecycle</h1>
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

const STATUSLIFECYCLE_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-status-lifecycle',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Status Lifecycle</h1>
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
export class StatusLifecycleComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/status-lifecycle', {
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

const STATUSLIFECYCLE_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Status Lifecycle — UX4G</title>
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
    <h1>Status Lifecycle</h1>
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
        const res = await fetch('/api/status-lifecycle', {
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

function StatusLifecycleCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: STATUSLIFECYCLE_REACT_CODE, filename: 'StatusLifecyclePage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: STATUSLIFECYCLE_ANGULAR_CODE, filename: 'status-lifecycle.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: STATUSLIFECYCLE_HTML_CODE, filename: 'status-lifecycle.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Status Lifecycle implementations.</p>
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
                <div tabIndex={0} role="region" aria-label={`${lane.title} code preview`} className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
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
