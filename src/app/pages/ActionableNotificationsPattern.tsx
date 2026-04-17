import React, { useState } from "react";
import { Link } from "react-router";
import { Zap, Upload, CreditCard, CheckCircle, X, FileText, AlertCircle, ThumbsUp, ThumbsDown, MessageSquare, Download, Copy, Check } from "lucide-react";

// Mock actionable notifications
const ACTIONABLE_NOTIFICATIONS = [
  {
    id: 1,
    type: "upload",
    title: "Upload Income Certificate",
    message: "Upload your income certificate for Scholarship Application (SCH-2026-45678)",
    deadline: "April 12, 2026",
    reference: "SCH-2026-45678",
    actionType: "file-upload",
    completed: false
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Required",
    message: "Complete payment of ₹500 for Driving License Renewal",
    deadline: "April 11, 2026",
    reference: "DL-2026-89012",
    amount: "₹500",
    actionType: "payment",
    completed: false
  },
  {
    id: 3,
    type: "approval",
    title: "Approve Consent",
    message: "Review and approve data sharing consent for Aadhaar Update",
    deadline: "April 14, 2026",
    reference: "AAD-2026-34567",
    actionType: "approval",
    completed: false
  },
  {
    id: 4,
    type: "feedback",
    title: "Service Feedback",
    message: "How was your experience with Birth Certificate service?",
    deadline: null,
    reference: "BC-2026-67890",
    actionType: "feedback",
    completed: false
  }
];

export default function ActionableNotificationsPattern() {
  const [notifications, setNotifications] = useState(ACTIONABLE_NOTIFICATIONS);
  const [activeAction, setActiveAction] = useState<number | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const completeAction = (id: number) => {
    setIsProcessing(true);
    setTimeout(() => {
      setNotifications(prev => prev.map(n =>
        n.id === id ? { ...n, completed: true } : n
      ));
      setActiveAction(null);
      setIsProcessing(false);
      setUploadProgress(0);
    }, 1500);
  };

  const simulateUpload = (id: number) => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          completeAction(id);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getDaysLeft = (deadline: string | null) => {
    if (!deadline) return null;
    const days = Math.ceil((new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (days < 0) return 'Overdue';
    if (days === 0) return 'Today';
    if (days === 1) return '1 day left';
    return `${days} days left`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/notifications" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">Actionable Notifications</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1000px] mx-auto px-8 py-12">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Actionable Notifications</h1>
          <p className="text-muted-foreground">
            Complete actions directly from notifications without navigating to separate pages
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {notifications.filter(n => !n.completed).length}
            </div>
            <div className="text-sm text-muted-foreground">Pending Actions</div>
          </div>
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {notifications.filter(n => n.completed).length}
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {notifications.filter(n => !n.completed && n.deadline && getDaysLeft(n.deadline) === 'Today').length}
            </div>
            <div className="text-sm text-muted-foreground">Due Today</div>
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-6">
          {notifications.map((notif) => (
            <div key={notif.id}>
              {!notif.completed ? (
                <div className="bg-card border-2 border-orange-300 rounded-lg overflow-hidden">
                  {/* Header */}
                  <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap size={24} className="text-orange-600" />
                          <h2 className="text-lg font-bold text-foreground">{notif.title}</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{notif.message}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <FileText size={16} className="text-gray-500" />
                            <span className="font-mono text-muted-foreground">{notif.reference}</span>
                          </div>
                          {notif.deadline && (
                            <div className={`flex items-center gap-2 font-bold ${
                              getDaysLeft(notif.deadline) === 'Today' || getDaysLeft(notif.deadline) === 'Overdue'
                                ? 'text-red-600'
                                : 'text-muted-foreground'
                            }`}>
                              <AlertCircle size={16} />
                              <span>Deadline: {getDaysLeft(notif.deadline)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="p-6">
                    {activeAction === notif.id ? (
                      <ActionPanel
                        notification={notif}
                        onComplete={() => completeAction(notif.id)}
                        onCancel={() => setActiveAction(null)}
                        simulateUpload={() => simulateUpload(notif.id)}
                        uploadProgress={uploadProgress}
                        isProcessing={isProcessing}
                      />
                    ) : (
                      <button
                        onClick={() => setActiveAction(notif.id)}
                        className="w-full px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90 flex items-center justify-center gap-2"
                      >
                        <Zap size={20} />
                        <span>Take Action Now</span>
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-green-600" />
                    <div className="flex-1">
                      <div className="font-bold text-foreground mb-1">{notif.title}</div>
                      <div className="text-sm text-muted-foreground">Action completed successfully</div>
                    </div>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">
                      COMPLETED
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pattern Info */}
        <div className="mt-12 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-muted-foreground mb-2">Inline Actions</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• File upload</li>
                <li>• Payment processing</li>
                <li>• Approval workflow</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Quick Completion</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Single-click action</li>
                <li>• No page navigation</li>
                <li>• Instant feedback</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Progress Tracking</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Upload progress</li>
                <li>• Processing states</li>
                <li>• Completion status</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">User Experience</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Reduced friction</li>
                <li>• Clear deadlines</li>
                <li>• Action summary</li>
              </ul>
            </div>
          </div>
        </div>

        <ActionableNotifCodeDownloads />

      </div>
    </div>
  );
}


// ==================== CODE DOWNLOADS ====================

const ACTNOTIF_REACT_CODE = `import React, { useState, useCallback } from 'react';

interface Notification {
  id: string;
  type: 'action' | 'info' | 'warning' | 'success';
  title: string;
  message: string;
  actionLabel?: string;
  actionUrl?: string;
  timestamp: string;
  read: boolean;
  dismissed: boolean;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  { id: '1', type: 'action', title: 'Document Upload Required', message: 'Upload your Aadhaar card for application #APP-2026-1234. Deadline: 20 Apr 2026.', actionLabel: 'Upload Now', actionUrl: '/upload', timestamp: '2 hours ago', read: false, dismissed: false },
  { id: '2', type: 'warning', title: 'Payment Due', message: 'Fee payment of ₹500 pending for service registration. Due in 3 days.', actionLabel: 'Pay Now', actionUrl: '/payment', timestamp: '5 hours ago', read: false, dismissed: false },
  { id: '3', type: 'success', title: 'Application Approved', message: 'Your caste certificate application has been approved. Download your certificate.', actionLabel: 'Download', actionUrl: '/download', timestamp: '1 day ago', read: true, dismissed: false },
  { id: '4', type: 'info', title: 'Scheduled Maintenance', message: 'Portal will be under maintenance on 18 Apr 2026, 2:00 AM - 6:00 AM IST.', timestamp: '2 days ago', read: true, dismissed: false },
];

export function ActionableNotificationsPage() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [filter, setFilter] = useState<'all' | 'unread' | 'action'>('all');

  const markRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, []);

  const dismiss = useCallback((id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, dismissed: true } : n));
  }, []);

  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, read: true })));

  const filtered = notifications.filter(n => !n.dismissed).filter(n => {
    if (filter === 'unread') return !n.read;
    if (filter === 'action') return n.type === 'action';
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read && !n.dismissed).length;

  const typeStyles: Record<string, string> = {
    action: 'border-l-blue-500 bg-blue-50',
    warning: 'border-l-yellow-500 bg-yellow-50',
    success: 'border-l-green-500 bg-green-50',
    info: 'border-l-gray-400 bg-gray-50',
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
            <p className="text-sm text-muted-foreground">{unreadCount} unread</p>
          </div>
          <button onClick={markAllRead} className="text-sm text-primary hover:underline font-semibold">Mark all read</button>
        </div>
        <div className="flex gap-2 mb-4">
          {(['all', 'unread', 'action'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} className={\`px-4 py-2 rounded-lg text-sm font-semibold transition-colors \${filter === f ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}\`}>{f === 'all' ? 'All' : f === 'unread' ? 'Unread' : 'Action Required'}</button>
          ))}
        </div>
        <div className="space-y-3">
          {filtered.map(n => (
            <div key={n.id} className={\`border-l-4 rounded-lg p-4 \${typeStyles[n.type]} \${!n.read ? 'ring-1 ring-primary/20' : ''}\`} onClick={() => markRead(n.id)} role="article" aria-label={n.title}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {!n.read && <div className="w-2 h-2 bg-primary rounded-full" />}
                    <h3 className="font-semibold text-sm text-foreground">{n.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{n.message}</p>
                  <div className="flex items-center gap-3">
                    {n.actionLabel && <a href={n.actionUrl} className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-semibold">{n.actionLabel}</a>}
                    <span className="text-xs text-muted-foreground">{n.timestamp}</span>
                  </div>
                </div>
                <button onClick={e => { e.stopPropagation(); dismiss(n.id); }} className="text-muted-foreground hover:text-foreground p-1" aria-label="Dismiss notification">✕</button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-8">No notifications</p>}
        </div>
      </div>
    </div>
  );
}`;

const ACTNOTIF_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification { id: string; type: string; title: string; message: string; actionLabel?: string; actionUrl?: string; timestamp: string; read: boolean; dismissed: boolean; }

@Component({
  selector: 'ux4g-actionable-notifications',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen bg-background p-4">
      <div class="max-w-2xl mx-auto">
        <div class="flex items-center justify-between mb-6">
          <div><h1 class="text-2xl font-bold">Notifications</h1><p class="text-sm text-muted-foreground">{{ unreadCount }} unread</p></div>
          <button (click)="markAllRead()" class="text-sm text-primary hover:underline font-semibold">Mark all read</button>
        </div>
        <div class="flex gap-2 mb-4">
          <button *ngFor="let f of ['all','unread','action']" (click)="filter=f" [class]="'px-4 py-2 rounded-lg text-sm font-semibold '+(filter===f?'bg-primary text-primary-foreground':'bg-muted text-muted-foreground')">{{ f === 'all' ? 'All' : f === 'unread' ? 'Unread' : 'Action Required' }}</button>
        </div>
        <div class="space-y-3">
          <div *ngFor="let n of filtered" [class]="'border-l-4 rounded-lg p-4 '+typeStyle(n.type)" (click)="markRead(n.id)" role="article">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1">
                <h3 class="font-semibold text-sm mb-1">{{ n.title }}</h3>
                <p class="text-sm text-muted-foreground mb-2">{{ n.message }}</p>
                <a *ngIf="n.actionLabel" [href]="n.actionUrl" class="inline-flex px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-semibold">{{ n.actionLabel }}</a>
                <span class="text-xs text-muted-foreground ml-2">{{ n.timestamp }}</span>
              </div>
              <button (click)="dismiss(n.id);$event.stopPropagation()" class="text-muted-foreground hover:text-foreground p-1">✕</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class ActionableNotificationsComponent {
  notifications: Notification[] = [
    { id: '1', type: 'action', title: 'Document Upload Required', message: 'Upload Aadhaar for application #APP-2026-1234.', actionLabel: 'Upload', actionUrl: '/upload', timestamp: '2h ago', read: false, dismissed: false },
    { id: '2', type: 'warning', title: 'Payment Due', message: 'Fee of ₹500 pending. Due in 3 days.', actionLabel: 'Pay Now', actionUrl: '/payment', timestamp: '5h ago', read: false, dismissed: false },
    { id: '3', type: 'success', title: 'Application Approved', message: 'Caste certificate approved.', actionLabel: 'Download', actionUrl: '/download', timestamp: '1d ago', read: true, dismissed: false },
  ];
  filter = 'all';
  get unreadCount() { return this.notifications.filter(n => !n.read && !n.dismissed).length; }
  get filtered() { return this.notifications.filter(n => !n.dismissed).filter(n => this.filter === 'unread' ? !n.read : this.filter === 'action' ? n.type === 'action' : true); }
  typeStyle(t: string) { return { action: 'border-l-blue-500 bg-blue-50', warning: 'border-l-yellow-500 bg-yellow-50', success: 'border-l-green-500 bg-green-50', info: 'border-l-gray-400 bg-gray-50' }[t] || ''; }
  markRead(id: string) { const n = this.notifications.find(x => x.id === id); if (n) n.read = true; }
  dismiss(id: string) { const n = this.notifications.find(x => x.id === id); if (n) n.dismissed = true; }
  markAllRead() { this.notifications.forEach(n => n.read = true); }
}`;

const ACTNOTIF_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Actionable Notifications — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #f9fafb; padding: 1rem; }
    .container { max-width: 40rem; margin: 0 auto; }
    h1 { font-size: 1.5rem; font-weight: 700; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    .mark-all { font-size: 0.875rem; color: #005196; background: none; border: none; cursor: pointer; font-weight: 600; }
    .filters { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
    .filter-btn { padding: 0.5rem 1rem; border-radius: 0.5rem; border: none; font-size: 0.875rem; font-weight: 600; cursor: pointer; background: #f3f4f6; color: #6b7280; }
    .filter-btn.active { background: #005196; color: #fff; }
    .notif { border-left: 4px solid #d1d5db; border-radius: 0.5rem; padding: 1rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between; gap: 0.75rem; }
    .notif.action { border-left-color: #3b82f6; background: #eff6ff; }
    .notif.warning { border-left-color: #eab308; background: #fefce8; }
    .notif.success { border-left-color: #22c55e; background: #f0fdf4; }
    .notif-title { font-weight: 600; font-size: 0.875rem; margin-bottom: 0.25rem; }
    .notif-msg { font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem; }
    .notif-action { display: inline-block; padding: 0.375rem 0.75rem; background: #005196; color: #fff; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 600; text-decoration: none; }
    .notif-time { font-size: 0.75rem; color: #9ca3af; }
    .dismiss { background: none; border: none; color: #9ca3af; cursor: pointer; font-size: 1rem; }
    .unread-dot { display: inline-block; width: 0.5rem; height: 0.5rem; background: #005196; border-radius: 50%; margin-right: 0.5rem; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div><h1>Notifications</h1><p style="font-size:0.875rem;color:#6b7280" id="unreadCount"></p></div>
      <button class="mark-all" onclick="markAllRead()">Mark all read</button>
    </div>
    <div class="filters">
      <button class="filter-btn active" onclick="setFilter('all',this)">All</button>
      <button class="filter-btn" onclick="setFilter('unread',this)">Unread</button>
      <button class="filter-btn" onclick="setFilter('action',this)">Action Required</button>
    </div>
    <div id="list"></div>
  </div>
  <script>
    let filter = 'all';
    const notifs = [
      { id:'1', type:'action', title:'Document Upload Required', msg:'Upload Aadhaar for application #APP-2026-1234. Deadline: 20 Apr.', action:'Upload Now', url:'/upload', time:'2h ago', read:false },
      { id:'2', type:'warning', title:'Payment Due', msg:'Fee of ₹500 pending. Due in 3 days.', action:'Pay Now', url:'/payment', time:'5h ago', read:false },
      { id:'3', type:'success', title:'Application Approved', msg:'Caste certificate approved. Download certificate.', action:'Download', url:'/download', time:'1d ago', read:true },
      { id:'4', type:'info', title:'Maintenance', msg:'Portal maintenance on 18 Apr, 2-6 AM IST.', time:'2d ago', read:true },
    ];
    function render() {
      const filtered = notifs.filter(n => !n.dismissed).filter(n => filter==='unread'?!n.read:filter==='action'?n.type==='action':true);
      const unread = notifs.filter(n=>!n.read&&!n.dismissed).length;
      document.getElementById('unreadCount').textContent = unread + ' unread';
      document.getElementById('list').innerHTML = filtered.map(n => '<div class="notif '+n.type+'" onclick="markRead(\''+n.id+'\')" role="article">' +
        '<div style="flex:1">' +
        (!n.read?'<span class="unread-dot"></span>':'') +
        '<div class="notif-title">'+n.title+'</div>' +
        '<div class="notif-msg">'+n.msg+'</div>' +
        (n.action?'<a href="'+n.url+'" class="notif-action">'+n.action+'</a> ':'')+
        '<span class="notif-time">'+n.time+'</span></div>' +
        '<button class="dismiss" onclick="dismiss(\''+n.id+'\');event.stopPropagation()">✕</button></div>'
      ).join('');
    }
    function setFilter(f, btn) { filter=f; document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); render(); }
    function markRead(id) { const n=notifs.find(x=>x.id===id); if(n)n.read=true; render(); }
    function dismiss(id) { const n=notifs.find(x=>x.id===id); if(n)n.dismissed=true; render(); }
    function markAllRead() { notifs.forEach(n=>n.read=true); render(); }
    render();
  </script>
</body>
</html>`;

function ActionableNotifCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks + Filters', code: ACTNOTIF_REACT_CODE, filename: 'ActionableNotificationsPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: ACTNOTIF_ANGULAR_CODE, filename: 'actionable-notifications.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ACTNOTIF_HTML_CODE, filename: 'actionable-notifications.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Actionable Notifications implementations.</p>
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
                <div tabIndex={0} role="region" aria-label="Code preview" className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
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


// ==================== COMPONENTS ====================

function ActionPanel({ notification, onComplete, onCancel, simulateUpload, uploadProgress, isProcessing }: {
  notification: typeof ACTIONABLE_NOTIFICATIONS[0];
  onComplete: () => void;
  onCancel: () => void;
  simulateUpload: () => void;
  uploadProgress: number;
  isProcessing: boolean;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  if (notification.actionType === 'file-upload') {
    return (
      <div className="space-y-4">
        <div className="text-sm font-bold text-foreground mb-3">Upload Document</div>
        
        {uploadProgress === 0 ? (
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload size={48} className="text-muted-foreground mx-auto mb-4" />
            <input aria-label="file input" type="file"
              id="file-upload"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="file-upload"
              className="inline-block px-6 py-3 bg-primary text-white rounded font-bold cursor-pointer hover:opacity-90"
            >
              Choose File
            </label>
            <p className="text-sm text-muted-foreground mt-3">
              Supported formats: PDF, JPG, PNG (Max 5MB)
            </p>
            {selectedFile && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded">
                <div className="text-sm font-bold text-foreground">{selectedFile.name}</div>
                <div className="text-xs text-muted-foreground">{(selectedFile.size / 1024).toFixed(2)} KB</div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="text-sm font-bold text-foreground mb-2">Uploading...</div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-700 transition-all"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <div className="text-sm text-muted-foreground mt-2">{uploadProgress}% complete</div>
          </div>
        )}

        <div className="flex gap-3">
          {uploadProgress === 0 && (
            <>
              <button
                onClick={simulateUpload}
                disabled={!selectedFile}
                className="flex-1 px-6 py-3 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Upload size={20} />
                <span>Upload Document</span>
              </button>
              <button
                onClick={onCancel}
                className="px-6 py-3 border-2 border-border rounded font-bold hover:border-gray-400 flex items-center gap-2"
              >
                <X size={20} />
                <span>Cancel</span>
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (notification.actionType === 'payment') {
    return (
      <div className="space-y-4">
        <div className="text-sm font-bold text-foreground mb-3">Payment Details</div>
        
        <div className="bg-background border-2 border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground">Amount to Pay:</span>
            <span className="text-2xl font-bold text-foreground">{notification.amount}</span>
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            Application: {notification.reference}
          </div>
        </div>

        {isProcessing ? (
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg text-center">
            <div className="text-sm font-bold text-foreground mb-2">Processing payment...</div>
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={onComplete}
              className="flex-1 px-6 py-3 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] flex items-center justify-center gap-2"
            >
              <CreditCard size={20} />
              <span>Pay Now</span>
            </button>
            <button
              onClick={onCancel}
              className="px-6 py-3 border-2 border-border rounded font-bold hover:border-gray-400 flex items-center gap-2"
            >
              <X size={20} />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  if (notification.actionType === 'approval') {
    return (
      <div className="space-y-4">
        <div className="text-sm font-bold text-foreground mb-3">Review Consent</div>
        
        <div className="bg-background border-2 border-border rounded-lg p-6">
          <div className="text-sm text-muted-foreground mb-4">
            I consent to sharing my Aadhaar information with the Department of Revenue for 
            verification purposes related to my application {notification.reference}.
          </div>
          <div className="flex items-start gap-2">
            <input aria-label="consent" type="checkbox" id="consent" className="mt-1" />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              I have read and understood the data sharing terms
            </label>
          </div>
        </div>

        {isProcessing ? (
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg text-center">
            <div className="text-sm font-bold text-foreground mb-2">Processing approval...</div>
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={onComplete}
              className="flex-1 px-6 py-3 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] flex items-center justify-center gap-2"
            >
              <ThumbsUp size={20} />
              <span>Approve</span>
            </button>
            <button
              onClick={onCancel}
              className="flex-1 px-6 py-3 bg-red-500 text-white rounded font-bold hover:bg-red-600 flex items-center gap-2 justify-center"
            >
              <ThumbsDown size={20} />
              <span>Decline</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  if (notification.actionType === 'feedback') {
    return (
      <div className="space-y-4">
        <div className="text-sm font-bold text-foreground mb-3">Rate Your Experience</div>
        
        <div className="bg-background border-2 border-border rounded-lg p-6">
          <div className="mb-4">
            <div className="text-sm text-muted-foreground mb-3">How would you rate the service?</div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl ${rating && star <= rating ? 'text-yellow-500' : 'text-muted-foreground'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="text-sm text-muted-foreground block mb-2">
              Additional Comments (Optional)
            </label>
            <textarea aria-label="comment" id="comment"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 border-2 border-border rounded focus:border-primary focus:outline-none"
              placeholder="Share your feedback..."
            ></textarea>
          </div>
        </div>

        {isProcessing ? (
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg text-center">
            <div className="text-sm font-bold text-foreground mb-2">Submitting feedback...</div>
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={onComplete}
              disabled={!rating}
              className="flex-1 px-6 py-3 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              <span>Submit Feedback</span>
            </button>
            <button
              onClick={onCancel}
              className="px-6 py-3 border-2 border-border rounded font-bold hover:border-gray-400 flex items-center gap-2"
            >
              <X size={20} />
              <span>Skip</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return null;
}
