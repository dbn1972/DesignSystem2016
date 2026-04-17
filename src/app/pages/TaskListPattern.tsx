import { Link } from "react-router";
import { useState } from "react";
import {  CheckSquare, Clock, AlertCircle, Filter, ArrowRight, CheckCircle, X, Calendar, Download, Copy, Check } from "lucide-react";

const ALL_TASKS = [
  {
    id: 1,
    title: "Upload Income Certificate",
    service: "Scholarship Application",
    ref: "SCH-2026-45678",
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    priority: "high",
    type: "document",
    description: "Upload your recent income certificate (issued within last 6 months)"
  },
  {
    id: 2,
    title: "Complete Payment of ₹500",
    service: "Driving License Renewal",
    ref: "DL-2026-89012",
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    priority: "medium",
    type: "payment",
    description: "Complete the payment to proceed with your driving license renewal"
  },
  {
    id: 3,
    title: "Verify Mobile Number",
    service: "Aadhaar Update Request",
    ref: "AAD-2026-34567",
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    priority: "low",
    type: "verification",
    description: "Verify your registered mobile number via OTP"
  },
  {
    id: 4,
    title: "Submit Biometric Data",
    service: "Passport Application",
    ref: "PP-2026-12345",
    deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    priority: "medium",
    type: "appointment",
    description: "Visit nearest Passport Seva Kendra for biometric data submission"
  },
  {
    id: 5,
    title: "Provide Additional Information",
    service: "Property Tax Assessment",
    ref: "PT-2026-67890",
    deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    priority: "low",
    type: "form",
    description: "Fill additional property details required for assessment"
  }
];

export default function TaskListPattern() {
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [sortBy, setSortBy] = useState<'deadline' | 'priority'>('deadline');
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const filteredTasks = ALL_TASKS.filter(task => {
    if (completedTasks.includes(task.id)) return false;
    if (filter === 'all') return true;
    return task.priority === filter;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'deadline') {
      return a.deadline.getTime() - b.deadline.getTime();
    } else {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder];
    }
  });

  const getDaysLeft = (deadline: Date) => {
    const days = Math.ceil((deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    return `${days} days left`;
  };

  const handleComplete = (taskId: number) => {
    setCompletedTasks([...completedTasks, taskId]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/dashboard" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">Task List (Pending Actions)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pending Tasks</h1>
          <p className="text-muted-foreground">
            You have {sortedTasks.length} pending {sortedTasks.length === 1 ? 'task' : 'tasks'} that need your attention
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-muted-foreground" />
                <span className="text-sm font-bold text-foreground">Filter:</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  All Tasks
                </button>
                <button
                  onClick={() => setFilter('high')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'high'
                      ? 'bg-red-500 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  High Priority
                </button>
                <button
                  onClick={() => setFilter('medium')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'medium'
                      ? 'bg-orange-500 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  Medium
                </button>
                <button
                  onClick={() => setFilter('low')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'low'
                      ? 'bg-background0 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  Low
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'deadline' | 'priority')}
                className="px-3 py-2 border-2 border-border rounded text-sm"
              >
                <option value="deadline">Deadline</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        {sortedTasks.length > 0 ? (
          <div className="space-y-4">
            {sortedTasks.map((task) => (
              <div
                key={task.id}
                className={`bg-card border-2 rounded-lg p-6 transition-all ${
                  task.priority === 'high'
                    ? 'border-red-300 bg-red-50'
                    : task.priority === 'medium'
                    ? 'border-orange-300 bg-orange-50'
                    : 'border-border'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{task.title}</h3>
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded ${
                          task.priority === 'high'
                            ? 'bg-red-500 text-white'
                            : task.priority === 'medium'
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-400 text-white'
                        }`}
                      >
                        {task.priority.toUpperCase()} PRIORITY
                      </span>
                      <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded">
                        {task.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Service: <span className="font-bold text-foreground">{task.service}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      Reference: <span className="font-mono text-foreground">{task.ref}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-500" />
                        <span className={`font-bold ${
                          getDaysLeft(task.deadline).includes('Today') || getDaysLeft(task.deadline).includes('Tomorrow')
                            ? 'text-red-600'
                            : 'text-muted-foreground'
                        }`}>
                          Due: {getDaysLeft(task.deadline)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-muted-foreground">
                          {task.deadline.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <button
                      onClick={() => handleComplete(task.id)}
                      className="px-6 py-2 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] flex items-center gap-2"
                    >
                      <CheckCircle size={16} />
                      <span>Complete Task</span>
                    </button>
                    <button className="px-6 py-2 border-2 border-border text-muted-foreground rounded font-bold hover:border-gray-400">
                      View Application
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card border-2 border-border rounded-lg p-12 text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">All Tasks Completed!</h3>
            <p className="text-muted-foreground mb-6">
              Great job! You have no pending tasks at the moment.
            </p>
            <Link
              to="/patterns/dashboard/citizen-dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
            >
              <span>Back to Dashboard</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        )}

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Completed Tasks ({completedTasks.length})</h2>
            <div className="space-y-2">
              {ALL_TASKS.filter(t => completedTasks.includes(t.id)).map((task) => (
                <div key={task.id} className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-green-600" />
                    <div>
                      <div className="font-bold text-foreground line-through">{task.title}</div>
                      <div className="text-sm text-muted-foreground">{task.service}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setCompletedTasks(completedTasks.filter(id => id !== task.id))}
                    className="p-2 hover:bg-green-100 rounded"
                    aria-label="Undo completion"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pattern Info */}
        <div className="mt-12 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-muted-foreground mb-2">Prioritization</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• High/Medium/Low priority</li>
                <li>• Visual indicators</li>
                <li>• Color-coded urgency</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Deadline Management</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Days left calculation</li>
                <li>• Deadline sorting</li>
                <li>• Urgent highlighting</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Filtering & Sorting</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Filter by priority</li>
                <li>• Sort by deadline/priority</li>
                <li>• Dynamic updates</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Task Completion</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Mark as complete</li>
                <li>• Completed tasks list</li>
                <li>• Undo capability</li>
              </ul>
            </div>
          </div>
        </div>

      
        <TaskListCodeDownloads />

      </main>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const TASKLIST_REACT_CODE = `import React, { useState } from 'react';

export default function TaskListPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/task-list', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Task List</h1>
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

const TASKLIST_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-task-list',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Task List</h1>
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
export class TaskListComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/task-list', {
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

const TASKLIST_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Task List — UX4G</title>
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
    <h1>Task List</h1>
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
        const res = await fetch('/api/task-list', {
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

function TaskListCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: TASKLIST_REACT_CODE, filename: 'TaskListPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: TASKLIST_ANGULAR_CODE, filename: 'task-list.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: TASKLIST_HTML_CODE, filename: 'task-list.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Task List implementations.</p>
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
