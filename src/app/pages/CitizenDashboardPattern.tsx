import React, { useState } from "react";
import { Link } from "react-router";
import { LayoutDashboard, Bell, CheckSquare, FileText, Clock, TrendingUp, AlertCircle, ArrowRight, ChevronRight, Calendar, MapPin, Download, Copy, Check } from "lucide-react";

// Mock user data
const USER = {
  name: "Rajesh Kumar",
  location: "Mumbai, Maharashtra",
  memberId: "MH2026123456"
};

const PENDING_TASKS = [
  { id: 1, title: "Upload Income Certificate", service: "Scholarship Application", deadline: "2 days left", priority: "high", type: "document" },
  { id: 2, title: "Complete Payment", service: "Driving License Renewal", deadline: "5 days left", priority: "medium", amount: "₹500", type: "payment" },
  { id: 3, title: "Verify Mobile Number", service: "Aadhaar Update", deadline: "7 days left", priority: "low", type: "verification" }
];

const ACTIVE_APPLICATIONS = [
  { id: 1, name: "Scholarship Application", status: "Under Review", progress: 75, updated: "2 hours ago", ref: "SCH-2026-45678" },
  { id: 2, name: "Driving License Renewal", status: "Payment Pending", progress: 60, updated: "1 day ago", ref: "DL-2026-89012" },
  { id: 3, name: "Aadhaar Update Request", status: "In Progress", progress: 40, updated: "3 days ago", ref: "AAD-2026-34567" }
];

const NOTIFICATIONS = [
  { id: 1, title: "Application Approved", message: "Your Birth Certificate application has been approved", time: "1 hour ago", unread: true, type: "success" },
  { id: 2, title: "Document Required", message: "Upload address proof for Driving License", time: "3 hours ago", unread: true, type: "action" },
  { id: 3, title: "Payment Successful", message: "Payment of ₹200 received for Passport", time: "Yesterday", unread: false, type: "info" }
];

const QUICK_ACTIONS = [
  { name: "Apply for Service", icon: <FileText size={20} />, link: "/services" },
  { name: "Track Application", icon: <Clock size={20} />, link: "/patterns/dashboard/application-dashboard" },
  { name: "Pay Fees", icon: <TrendingUp size={20} />, link: "/payments" },
  { name: "View Documents", icon: <Download size={20} />, link: "/documents" }
];

const SAVED_SERVICES = [
  { name: "Passport Renewal", category: "Travel" },
  { name: "Property Tax Payment", category: "Revenue" },
  { name: "Water Bill Payment", category: "Utilities" }
];

export default function CitizenDashboardPattern() {
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'applications'>('overview');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/dashboard" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">Citizen Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <button aria-label="Notifications" className="relative p-2 hover:bg-muted rounded">
                <Bell size={20} className="text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-50 dark:bg-red-900/200 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  RK
                </div>
                <span className="text-sm font-bold text-foreground">{USER.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <div className="max-w-[1400px] mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {USER.name.split(' ')[0]}!</h1>
              <div className="flex items-center gap-4 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{USER.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">Member ID</div>
              <div className="font-mono font-bold text-lg">{USER.memberId}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-card border-b border-border">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-bold border-b-4 transition-colors ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-6 py-3 font-bold border-b-4 transition-colors relative ${
                activeTab === 'tasks'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Pending Tasks
              <span className="ml-2 px-2 py-0.5 bg-red-50 dark:bg-red-900/200 text-white text-xs rounded-full">{PENDING_TASKS.length}</span>
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-6 py-3 font-bold border-b-4 transition-colors ${
                activeTab === 'applications'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              My Applications
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        
        {activeTab === 'overview' && (
          <div className="grid grid-cols-12 gap-6">
            
            {/* Main Column */}
            <div className="col-span-8 space-y-6">
              
              {/* Pending Tasks Summary */}
              {PENDING_TASKS.length > 0 && (
                <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle size={24} className="text-yellow-600" />
                      <div>
                        <h2 className="text-lg font-bold text-foreground">Action Required</h2>
                        <p className="text-sm text-muted-foreground">You have {PENDING_TASKS.length} pending tasks that need your attention</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab('tasks')}
                      className="px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-2">
                    {PENDING_TASKS.slice(0, 2).map(task => (
                      <div key={task.id} className="bg-card border-2 border-border rounded p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-bold text-foreground">{task.title}</div>
                          <div className="text-sm text-muted-foreground">{task.service}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`text-sm font-bold ${
                            task.priority === 'high' ? 'text-red-600' :
                            task.priority === 'medium' ? 'text-orange-600' :
                            'text-muted-foreground'
                          }`}>
                            {task.deadline}
                          </div>
                          <ArrowRight size={20} className="text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Active Applications */}
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-foreground">Active Applications</h2>
                  <button
                    onClick={() => setActiveTab('applications')}
                    className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
                <div className="space-y-4">
                  {ACTIVE_APPLICATIONS.map(app => (
                    <div key={app.id} className="border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{app.name}</h3>
                          <div className="text-sm text-muted-foreground">Ref: {app.ref}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-bold px-3 py-1 rounded ${
                            app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                            app.status === 'Payment Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-muted text-foreground'
                          }`}>
                            {app.status}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">{app.updated}</div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-bold text-foreground">{app.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-700 transition-all"
                            style={{ width: `${app.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 border-2 border-border rounded font-bold hover:border-gray-400 text-sm">
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90 text-sm">
                          Continue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {QUICK_ACTIONS.map((action, i) => (
                    <Link
                      key={i}
                      to={action.link}
                      className="p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-all text-center group"
                    >
                      <div className="inline-block p-3 bg-muted rounded-lg mb-2 group-hover:bg-primary transition-colors">
                        <div className="text-muted-foreground group-hover:text-white transition-colors">
                          {action.icon}
                        </div>
                      </div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary">
                        {action.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="col-span-4 space-y-6">
              
              {/* Notifications */}
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Recent Notifications</h3>
                  <Link to="/patterns/dashboard/notifications" className="text-xs text-primary hover:underline">
                    View All
                  </Link>
                </div>
                <div className="space-y-3">
                  {NOTIFICATIONS.slice(0, 3).map(notif => (
                    <div key={notif.id} className={`p-3 rounded ${notif.unread ? 'bg-blue-50 dark:bg-blue-950/30 border-l-4 border-primary' : 'bg-background'}`}>
                      <div className="flex items-start justify-between mb-1">
                        <div className="text-sm font-bold text-foreground">{notif.title}</div>
                        {notif.unread && <div className="w-2 h-2 bg-red-50 dark:bg-red-900/200 rounded-full"></div>}
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">{notif.message}</div>
                      <div className="text-xs text-muted-foreground">{notif.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Services */}
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Saved Services</h3>
                  <Link to="/patterns/dashboard/saved-services" className="text-xs text-primary hover:underline">
                    Manage
                  </Link>
                </div>
                <div className="space-y-2">
                  {SAVED_SERVICES.map((service, i) => (
                    <Link
                      key={i}
                      to="#"
                      className="block p-3 border-2 border-border rounded hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-all"
                    >
                      <div className="text-sm font-bold text-foreground">{service.name}</div>
                      <div className="text-xs text-muted-foreground">{service.category}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Help & Support */}
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our support team for assistance with your applications.
                </p>
                <Link
                  to="/patterns/contact-support"
                  className="block text-center px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90"
                >
                  Get Support
                </Link>
              </div>

            </div>

          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Pending Tasks</h2>
            <div className="space-y-4">
              {PENDING_TASKS.map(task => (
                <div key={task.id} className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-foreground">{task.title}</h3>
                        <span className={`px-2 py-1 text-xs font-bold rounded ${
                          task.priority === 'high' ? 'bg-red-100 text-red-800' :
                          task.priority === 'medium' ? 'bg-orange-100 text-orange-800' :
                          'bg-muted text-foreground'
                        }`}>
                          {task.priority.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{task.service}</div>
                      <div className="text-sm text-muted-foreground">
                        <Clock size={14} className="inline mr-1" />
                        Deadline: {task.deadline}
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white rounded font-bold hover:opacity-90">
                      Complete Task
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">My Applications</h2>
            <div className="space-y-4">
              {ACTIVE_APPLICATIONS.map(app => (
                <div key={app.id} className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">{app.name}</h3>
                      <div className="text-sm text-muted-foreground">Reference: {app.ref}</div>
                    </div>
                    <div className={`text-sm font-bold px-4 py-2 rounded ${
                      app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                      app.status === 'Payment Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-muted text-foreground'
                    }`}>
                      {app.status}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Completion Progress</span>
                      <span className="font-bold text-foreground">{app.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-700"
                        style={{ width: `${app.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 border-2 border-border rounded font-bold hover:border-gray-400">
                      View Details
                    </button>
                    <button className="flex-1 px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90">
                      Continue Application
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pattern Info */}
        <div className="mt-12 bg-indigo-50 dark:bg-indigo-950/30 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-muted-foreground mb-2">Personalization</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• User greeting</li>
                <li>• Location display</li>
                <li>• Tailored content</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Task Management</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Pending tasks</li>
                <li>• Priority indicators</li>
                <li>• Deadline tracking</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Application Status</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Progress bars</li>
                <li>• Status badges</li>
                <li>• Quick actions</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Navigation</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Tab interface</li>
                <li>• Quick links</li>
                <li>• Notifications</li>
              </ul>
            </div>
          </div>
        </div>

        <CitizenDashCodeDownloads />

      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const CDASH_REACT_CODE = `import React, { useState, useEffect } from 'react';

interface Application { id: string; service: string; status: 'pending' | 'in-progress' | 'approved' | 'rejected'; date: string; }
interface Notification { id: string; title: string; time: string; read: boolean; }

export function CitizenDashboardPage() {
  const [applications, setApplications] = useState<Application[]>([
    { id: 'APP-78432', service: 'Caste Certificate', status: 'in-progress', date: '2026-04-10' },
    { id: 'APP-78290', service: 'Income Certificate', status: 'approved', date: '2026-04-05' },
    { id: 'APP-77810', service: 'Driving License Renewal', status: 'pending', date: '2026-04-12' },
    { id: 'APP-77500', service: 'Birth Certificate', status: 'rejected', date: '2026-03-28' },
  ]);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', title: 'Upload documents for APP-78432', time: '2h ago', read: false },
    { id: '2', title: 'Income certificate ready for download', time: '1d ago', read: false },
    { id: '3', title: 'Payment of ₹500 pending', time: '3d ago', read: true },
  ]);
  const [tab, setTab] = useState<'all' | 'pending' | 'completed'>('all');

  const filtered = applications.filter(a => {
    if (tab === 'pending') return ['pending', 'in-progress'].includes(a.status);
    if (tab === 'completed') return ['approved', 'rejected'].includes(a.status);
    return true;
  });

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  const unread = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div><h1 className="text-xl font-bold text-foreground">My Dashboard</h1><p className="text-sm text-muted-foreground">Welcome back, Rajesh Kumar</p></div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-muted" aria-label="Notifications">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              {unread > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-50 dark:bg-red-900/200 text-white text-xs rounded-full flex items-center justify-center">{unread}</span>}
            </button>
          </div>
        </div>
      </header>
      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4"><div className="text-2xl font-bold text-foreground">{applications.length}</div><div className="text-sm text-muted-foreground">Total Applications</div></div>
          <div className="bg-card border border-border rounded-xl p-4"><div className="text-2xl font-bold text-blue-600">{applications.filter(a => a.status === 'in-progress').length}</div><div className="text-sm text-muted-foreground">In Progress</div></div>
          <div className="bg-card border border-border rounded-xl p-4"><div className="text-2xl font-bold text-green-600">{applications.filter(a => a.status === 'approved').length}</div><div className="text-sm text-muted-foreground">Approved</div></div>
          <div className="bg-card border border-border rounded-xl p-4"><div className="text-2xl font-bold text-yellow-600">{applications.filter(a => a.status === 'pending').length}</div><div className="text-sm text-muted-foreground">Pending</div></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground">My Applications</h2>
              <div className="flex gap-2">{(['all','pending','completed'] as const).map(t => (<button key={t} onClick={() => setTab(t)} className={\`px-3 py-1 rounded-lg text-xs font-semibold \${tab === t ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}\`}>{t === 'all' ? 'All' : t === 'pending' ? 'Active' : 'Completed'}</button>))}</div>
            </div>
            <div className="space-y-3">{filtered.map(app => (
              <div key={app.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
                <div><div className="font-semibold text-sm text-foreground">{app.service}</div><div className="text-xs text-muted-foreground">{app.id} • {app.date}</div></div>
                <span className={\`px-2.5 py-1 rounded-full text-xs font-bold \${statusColors[app.status]}\`}>{app.status.replace('-',' ')}</span>
              </div>
            ))}</div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-4">Notifications</h2>
            <div className="space-y-2">{notifications.map(n => (
              <div key={n.id} className={\`p-3 rounded-xl border \${n.read ? 'border-border' : 'border-primary/30 bg-primary/5'}\`}>
                <div className="text-sm text-foreground">{n.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{n.time}</div>
              </div>
            ))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

const CDASH_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-citizen-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen bg-background">
      <header class="bg-card border-b border-border px-6 py-4">
        <div class="max-w-5xl mx-auto"><h1 class="text-xl font-bold">My Dashboard</h1><p class="text-sm text-muted-foreground">Welcome back</p></div>
      </header>
      <div class="max-w-5xl mx-auto p-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div class="bg-card border border-border rounded-xl p-4"><div class="text-2xl font-bold">{{ apps.length }}</div><div class="text-sm text-muted-foreground">Total</div></div>
          <div class="bg-card border border-border rounded-xl p-4"><div class="text-2xl font-bold text-blue-600">{{ inProgress }}</div><div class="text-sm text-muted-foreground">In Progress</div></div>
          <div class="bg-card border border-border rounded-xl p-4"><div class="text-2xl font-bold text-green-600">{{ approved }}</div><div class="text-sm text-muted-foreground">Approved</div></div>
          <div class="bg-card border border-border rounded-xl p-4"><div class="text-2xl font-bold text-yellow-600">{{ pending }}</div><div class="text-sm text-muted-foreground">Pending</div></div>
        </div>
        <div class="space-y-3">
          <div *ngFor="let app of apps" class="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
            <div><div class="font-semibold text-sm">{{ app.service }}</div><div class="text-xs text-muted-foreground">{{ app.id }} • {{ app.date }}</div></div>
            <span [class]="'px-2.5 py-1 rounded-full text-xs font-bold '+statusColor(app.status)">{{ app.status }}</span>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class CitizenDashboardComponent {
  apps = [
    { id: 'APP-78432', service: 'Caste Certificate', status: 'in-progress', date: '2026-04-10' },
    { id: 'APP-78290', service: 'Income Certificate', status: 'approved', date: '2026-04-05' },
    { id: 'APP-77810', service: 'Driving License', status: 'pending', date: '2026-04-12' },
  ];
  get inProgress() { return this.apps.filter(a => a.status === 'in-progress').length; }
  get approved() { return this.apps.filter(a => a.status === 'approved').length; }
  get pending() { return this.apps.filter(a => a.status === 'pending').length; }
  statusColor(s: string) { return { pending: 'bg-yellow-100 text-yellow-800', 'in-progress': 'bg-blue-100 text-blue-800', approved: 'bg-green-100 text-green-800', rejected: 'bg-red-100 text-red-800' }[s] || ''; }
}`;

const CDASH_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Citizen Dashboard — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #f9fafb; }
    .header { background: #fff; border-bottom: 1px solid #e5e7eb; padding: 1rem 1.5rem; }
    .header h1 { font-size: 1.25rem; font-weight: 700; }
    .container { max-width: 64rem; margin: 0 auto; padding: 1.5rem; }
    .stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; margin-bottom: 2rem; }
    .stat { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; }
    .stat-value { font-size: 1.5rem; font-weight: 700; }
    .stat-label { font-size: 0.875rem; color: #6b7280; }
    .app-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center; }
    .app-title { font-weight: 600; font-size: 0.875rem; }
    .app-meta { font-size: 0.75rem; color: #6b7280; }
    .badge { padding: 0.25rem 0.625rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; }
    .badge-pending { background: #fef3c7; color: #92400e; }
    .badge-progress { background: #dbeafe; color: #1e40af; }
    .badge-approved { background: #dcfce7; color: #166534; }
    .badge-rejected { background: #fee2e2; color: #991b1b; }
  </style>
</head>
<body>
  <div class="header"><div style="max-width:64rem;margin:0 auto"><h1>My Dashboard</h1><p style="font-size:0.875rem;color:#6b7280">Welcome back, Rajesh Kumar</p></div></div>
  <div class="container">
    <div class="stats">
      <div class="stat"><div class="stat-value">4</div><div class="stat-label">Total</div></div>
      <div class="stat"><div class="stat-value" style="color:#2563eb">1</div><div class="stat-label">In Progress</div></div>
      <div class="stat"><div class="stat-value" style="color:#16a34a">1</div><div class="stat-label">Approved</div></div>
      <div class="stat"><div class="stat-value" style="color:#ca8a04">1</div><div class="stat-label">Pending</div></div>
    </div>
    <div id="apps"></div>
  </div>
  <script>
    const apps = [
      { id:'APP-78432', service:'Caste Certificate', status:'in-progress', date:'2026-04-10' },
      { id:'APP-78290', service:'Income Certificate', status:'approved', date:'2026-04-05' },
      { id:'APP-77810', service:'Driving License', status:'pending', date:'2026-04-12' },
      { id:'APP-77500', service:'Birth Certificate', status:'rejected', date:'2026-03-28' },
    ];
    const badgeClass = { pending:'badge-pending', 'in-progress':'badge-progress', approved:'badge-approved', rejected:'badge-rejected' };
    document.getElementById('apps').innerHTML = apps.map(a =>
      '<div class="app-card"><div><div class="app-title">'+a.service+'</div><div class="app-meta">'+a.id+' • '+a.date+'</div></div><span class="badge '+badgeClass[a.status]+'">'+a.status.replace('-',' ')+'</span></div>'
    ).join('');
  </script>
</body>
</html>`;

function CitizenDashCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Stats + Filters', code: CDASH_REACT_CODE, filename: 'CitizenDashboardPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: CDASH_ANGULAR_CODE, filename: 'citizen-dashboard.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: CDASH_HTML_CODE, filename: 'citizen-dashboard.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Citizen Dashboard implementations.</p>
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

