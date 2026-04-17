import { Link } from "react-router";
import { useState } from "react";
import {  Activity, User, CheckCircle, Clock, AlertCircle, FileText, Upload, CreditCard, MessageSquare, Filter, ChevronDown, ChevronUp, Download, Copy, Check } from "lucide-react";

// Mock timeline data
const TIMELINE_EVENTS = [
  {
    id: 1,
    type: "approved",
    title: "Application Approved",
    description: "Your driving license renewal application has been approved by the Regional Transport Officer.",
    actor: "RTO Officer - Rajesh Sharma",
    department: "Regional Transport Office, Mumbai",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    icon: <CheckCircle size={20} className="text-white" />,
    color: "green",
    metadata: {
      approvalNumber: "DL-APP-2026-89012",
      remarks: "All documents verified. License ready for dispatch."
    }
  },
  {
    id: 2,
    type: "processing",
    title: "Documents Verified",
    description: "All submitted documents have been verified and found to be in order.",
    actor: "Verification Officer - Priya Patel",
    department: "Document Verification Cell",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    icon: <FileText size={20} className="text-white" />,
    color: "blue",
    metadata: {
      documentsVerified: ["Aadhaar Card", "Address Proof", "Existing License", "Medical Certificate"]
    }
  },
  {
    id: 3,
    type: "payment",
    title: "Payment Received",
    description: "Payment of ₹500 received successfully via UPI.",
    actor: "System",
    department: "Payment Gateway",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    icon: <CreditCard size={20} className="text-white" />,
    color: "purple",
    metadata: {
      amount: "₹500",
      transactionId: "UPI2026040812345",
      paymentMethod: "UPI"
    }
  },
  {
    id: 4,
    type: "upload",
    title: "Documents Uploaded",
    description: "You uploaded 4 required documents for verification.",
    actor: "Applicant - Rajesh Kumar",
    department: "Citizen Portal",
    timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000),
    icon: <Upload size={20} className="text-white" />,
    color: "indigo",
    metadata: {
      files: ["aadhaar.pdf", "address_proof.pdf", "existing_license.pdf", "medical_cert.pdf"]
    }
  },
  {
    id: 5,
    type: "review",
    title: "Under Review",
    description: "Application moved to review queue after initial screening.",
    actor: "Screening Officer - Amit Singh",
    department: "Application Screening",
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000),
    icon: <User size={20} className="text-white" />,
    color: "orange",
    metadata: {
      queuePosition: "12 of 45"
    }
  },
  {
    id: 6,
    type: "submitted",
    title: "Application Submitted",
    description: "Driving license renewal application submitted successfully.",
    actor: "Applicant - Rajesh Kumar",
    department: "Citizen Portal",
    timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000),
    icon: <FileText size={20} className="text-white" />,
    color: "gray",
    metadata: {
      applicationNumber: "DL-2026-89012",
      serviceType: "Driving License Renewal"
    }
  }
];

export default function TimelineViewPattern() {
  const [filterType, setFilterType] = useState<'all' | 'user' | 'system'>('all');
  const [expandedEvents, setExpandedEvents] = useState<number[]>([1]); // First event expanded by default

  const toggleExpand = (eventId: number) => {
    setExpandedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const filteredEvents = TIMELINE_EVENTS.filter(event => {
    if (filterType === 'all') return true;
    if (filterType === 'user') return event.actor.includes('Applicant');
    if (filterType === 'system') return !event.actor.includes('Applicant');
    return true;
  });

  const getTimeAgo = (timestamp: Date) => {
    const hours = Math.floor((Date.now() - timestamp.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    const days = Math.floor(hours / 24);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/status-lifecycle" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">Timeline View</span>
            </div>
          </div>
        </div>
      </header>

      {/* Application Info Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Application Reference</div>
              <div className="text-2xl font-bold">DL-2026-89012</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">Current Status</div>
              <div className="px-4 py-2 bg-card text-green-600 font-bold rounded">
                ✓ APPROVED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Application Timeline</h1>
          <p className="text-muted-foreground">
            Complete chronological history of all activities and status changes
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-muted-foreground" />
              <span className="text-sm font-bold text-foreground">Show:</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded font-bold text-sm ${
                  filterType === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-gray-200'
                }`}
              >
                All Events ({TIMELINE_EVENTS.length})
              </button>
              <button
                onClick={() => setFilterType('user')}
                className={`px-4 py-2 rounded font-bold text-sm ${
                  filterType === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-gray-200'
                }`}
              >
                My Actions ({TIMELINE_EVENTS.filter(e => e.actor.includes('Applicant')).length})
              </button>
              <button
                onClick={() => setFilterType('system')}
                className={`px-4 py-2 rounded font-bold text-sm ${
                  filterType === 'system'
                    ? 'bg-green-500 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-gray-200'
                }`}
              >
                Department Actions ({TIMELINE_EVENTS.filter(e => !e.actor.includes('Applicant')).length})
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Events */}
          <div className="space-y-6">
            {filteredEvents.map((event, index) => (
              <TimelineEvent
                key={event.id}
                event={event}
                isExpanded={expandedEvents.includes(event.id)}
                onToggle={() => toggleExpand(event.id)}
                getTimeAgo={getTimeAgo}
                isLatest={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="bg-card border-2 border-border rounded-lg p-12 text-center">
            <AlertCircle size={48} className="text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-2">No events found</h2>
            <p className="text-muted-foreground">
              Try changing the filter to see different types of events.
            </p>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-4 gap-4">
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{TIMELINE_EVENTS.length}</div>
            <div className="text-sm text-muted-foreground">Total Events</div>
          </div>
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {TIMELINE_EVENTS.filter(e => e.actor.includes('Applicant')).length}
            </div>
            <div className="text-sm text-muted-foreground">Your Actions</div>
          </div>
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {TIMELINE_EVENTS.filter(e => !e.actor.includes('Applicant')).length}
            </div>
            <div className="text-sm text-muted-foreground">Department Actions</div>
          </div>
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3 days</div>
            <div className="text-sm text-muted-foreground">Processing Time</div>
          </div>
        </div>

        {/* Pattern Info */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="font-bold text-foreground mb-4">Pattern Features Demonstrated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-muted-foreground mb-2">Timeline Display</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Chronological order</li>
                <li>• Visual timeline line</li>
                <li>• Color-coded events</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Event Details</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Actor visibility</li>
                <li>• Department shown</li>
                <li>• Metadata expansion</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Filtering</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• All events</li>
                <li>• User actions only</li>
                <li>• Department actions</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Timestamps</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Relative time (2 hours ago)</li>
                <li>• Absolute datetime</li>
                <li>• Processing duration</li>
              </ul>
            </div>
          </div>
        </div>

      
        <TimelineViewCodeDownloads />

      </main>
    </div>
  );
}

// ==================== COMPONENTS ====================

function TimelineEvent({ event, isExpanded, onToggle, getTimeAgo, isLatest }: {
  event: typeof TIMELINE_EVENTS[0];
  isExpanded: boolean;
  onToggle: () => void;
  getTimeAgo: (timestamp: Date) => string;
  isLatest: boolean;
}) {
  const colors = {
    green: { bg: 'bg-green-500', border: 'border-green-300', light: 'bg-green-50' },
    blue: { bg: 'bg-blue-500', border: 'border-blue-300', light: 'bg-blue-50' },
    purple: { bg: 'bg-purple-500', border: 'border-purple-300', light: 'bg-purple-50' },
    indigo: { bg: 'bg-indigo-500', border: 'border-indigo-300', light: 'bg-indigo-50' },
    orange: { bg: 'bg-orange-500', border: 'border-orange-300', light: 'bg-orange-50' },
    gray: { bg: 'bg-background0', border: 'border-border', light: 'bg-background' }
  };

  const colorScheme = colors[event.color as keyof typeof colors];

  return (
    <div className="relative pl-16">
      {/* Timeline Dot */}
      <div className={`absolute left-[20px] top-[12px] w-[21px] h-[21px] rounded-full ${colorScheme.bg} border-4 border-white shadow-md flex items-center justify-center z-10`}>
        {event.icon}
      </div>

      {/* Event Card */}
      <div className={`bg-card border-2 ${isLatest ? 'border-blue-500 shadow-lg' : 'border-border'} rounded-lg overflow-hidden transition-all`}>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-lg font-bold text-foreground">{event.title}</h2>
                {isLatest && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded">
                    LATEST
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={14} />
                  <span>{event.actor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare size={14} />
                  <span>{event.department}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="ml-4 p-2 hover:bg-muted rounded transition-colors"
              aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {/* Timestamp */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock size={14} />
            <span className="font-bold">{getTimeAgo(event.timestamp)}</span>
            <span>•</span>
            <span>{event.timestamp.toLocaleString('en-IN', { 
              day: 'numeric', 
              month: 'short', 
              year: 'numeric',
              hour: '2-digit', 
              minute: '2-digit' 
            })}</span>
          </div>

          {/* Expanded Metadata */}
          {isExpanded && event.metadata && (
            <div className={`mt-4 pt-4 border-t-2 ${colorScheme.border}`}>
              <div className={`${colorScheme.light} rounded-lg p-4`}>
                <div className="text-sm font-bold text-foreground mb-3">Additional Details:</div>
                <div className="space-y-2 text-sm">
                  {Object.entries(event.metadata).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-2">
                      <span className="text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="font-bold text-foreground">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const TIMELINEVIEW_REACT_CODE = `import React, { useState } from 'react';

export default function TimelineViewPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/timeline-view', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Timeline View</h1>
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

const TIMELINEVIEW_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-timeline-view',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Timeline View</h1>
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
export class TimelineViewComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/timeline-view', {
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

const TIMELINEVIEW_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Timeline View — UX4G</title>
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
    <h1>Timeline View</h1>
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
        const res = await fetch('/api/timeline-view', {
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

function TimelineViewCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: TIMELINEVIEW_REACT_CODE, filename: 'TimelineViewPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: TIMELINEVIEW_ANGULAR_CODE, filename: 'timeline-view.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: TIMELINEVIEW_HTML_CODE, filename: 'timeline-view.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Timeline View implementations.</p>
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
