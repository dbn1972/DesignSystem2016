import React from "react";
import { Link } from "react-router";
import { LayoutDashboard, User, Bell, CheckSquare, Clock, Bookmark, Settings, ArrowRight, CheckCircle, Zap, Download, Copy, Check } from "lucide-react";

export default function DashboardPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <LayoutDashboard size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Dashboard & Personalization Patterns</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Task-focused, personalized dashboard patterns that help citizens manage their government service interactions. 
                Centralized access to applications, notifications, saved services, pending actions, and activity history with 
                intelligent prioritization and continuity across service journeys.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Personalization</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">7 Interactive Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-muted-foreground">Focus: <span className="font-bold text-foreground">Task-Driven</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-indigo-500 text-white rounded-lg font-bold text-center shadow-lg">
                PERSONALIZED
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                TASK-FOCUSED
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
              <Link to="/patterns/dashboard/overview" className="text-primary hover:underline text-sm font-medium">
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
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-border rounded-lg p-10">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Personalized Dashboards?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Citizen Benefits
                </h3>
                <p className="text-sm text-muted-foreground">
                  One place to access all services, track applications, complete pending tasks, and manage 
                  preferences. Reduces cognitive load and eliminates need to remember multiple portals.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Service Continuity
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seamless resume of incomplete applications, proactive notifications for required actions, 
                  and intelligent suggestions based on user profile and behavior patterns.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  System Efficiency
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reduces abandonment rates, improves completion times, decreases support requests, 
                  and provides valuable analytics on user behavior and service usage patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Categories */}
        <section className="mb-16" id="all-patterns">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-indigo-500 pl-4">
            Pattern Categories
          </h2>

          {/* Overview & Management Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <LayoutDashboard size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Overview & Management Patterns</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PatternCard
                title="Citizen Dashboard"
                description="Unified dashboard providing overview of all user activities, pending tasks, recent applications, and quick access to services"
                icon={<LayoutDashboard size={32} className="text-blue-600" />}
                link="/patterns/dashboard/citizen-dashboard"
                complexity="High"
                userType="All Citizens"
                useCases={["Service overview", "Quick actions", "Status at a glance"]}
              />
              <PatternCard
                title="Application Dashboard"
                description="Centralized view of all submitted applications with status tracking, document management, and next steps"
                icon={<CheckSquare size={32} className="text-green-600" />}
                link="/patterns/dashboard/application-dashboard"
                complexity="High"
                userType="Service Users"
                useCases={["Track applications", "Upload documents", "View decisions"]}
              />
            </div>
          </div>

          {/* Action & Task Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <CheckSquare size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Action & Task Patterns</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PatternCard
                title="Task List (Pending Actions)"
                description="Prioritized list of required actions, deadlines, and pending tasks with contextual guidance and quick completion"
                icon={<CheckSquare size={32} className="text-orange-600" />}
                link="/patterns/dashboard/task-list"
                complexity="Medium"
                userType="Active Users"
                useCases={["Complete actions", "Meet deadlines", "Clear notifications"]}
              />
              <PatternCard
                title="Notifications Center"
                description="Centralized notification hub with categorization, filtering, and action routing from messages"
                icon={<Bell size={32} className="text-purple-600" />}
                link="/patterns/dashboard/notifications"
                complexity="Medium"
                userType="All Citizens"
                useCases={["View alerts", "Action on updates", "Manage preferences"]}
              />
            </div>
          </div>

          {/* Saved & History Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Bookmark size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Saved & History Patterns</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PatternCard
                title="Saved Services"
                description="Bookmarked services for quick access with personalized recommendations and recently accessed items"
                icon={<Bookmark size={32} className="text-teal-600" />}
                link="/patterns/dashboard/saved-services"
                complexity="Low"
                userType="All Citizens"
                useCases={["Quick access", "Service discovery", "Favorites management"]}
              />
              <PatternCard
                title="Activity History"
                description="Comprehensive timeline of all user interactions, applications, payments, and system activities with search and filter"
                icon={<Clock size={32} className="text-indigo-600" />}
                link="/patterns/dashboard/activity-history"
                complexity="Medium"
                userType="All Citizens"
                useCases={["Track history", "Download receipts", "Audit trail"]}
              />
            </div>
          </div>

          {/* Profile & Settings Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <User size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Profile & Settings Patterns</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PatternCard
                title="Profile and Preferences"
                description="User profile management with personal information, communication preferences, security settings, and privacy controls"
                icon={<Settings size={32} className="text-pink-600" />}
                link="/patterns/dashboard/profile-preferences"
                complexity="High"
                userType="All Citizens"
                useCases={["Update profile", "Manage preferences", "Privacy settings"]}
              />
              <div className="p-6 border-2 border-dashed border-border rounded-lg bg-background flex items-center justify-center text-center">
                <div>
                  <p className="text-muted-foreground mb-2">Additional dashboard patterns can be added:</p>
                  <p className="text-sm text-muted-foreground">Department-specific dashboards, Family dashboard, Service analytics</p>
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
              title="Data Hierarchy"
              points={[
                "Prioritize pending actions at top",
                "Show most recent items first",
                "Group by category or urgency",
                "Use visual indicators for status",
                "Provide filtering and sorting options"
              ]}
            />
            <GuidelineCard
              title="Navigation & Flow"
              points={[
                "Enable quick access to all patterns",
                "Maintain context when navigating",
                "Provide breadcrumbs and back navigation",
                "Deep link to specific items",
                "Support resume from any point"
              ]}
            />
            <GuidelineCard
              title="Personalization"
              points={[
                "Use citizen's name and profile data",
                "Show location-relevant services",
                "Suggest based on user behavior",
                "Remember preferences and settings",
                "Adapt interface to usage patterns"
              ]}
            />
          </div>
        </section>

        {/* Dashboard Intelligence Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-purple-500 pl-4">
            Dashboard Intelligence Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap size={20} className="text-yellow-600" />
                Smart Prioritization
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Deadline-based:</strong> Tasks due soon appear at top</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Urgency indicators:</strong> Red for urgent, yellow for important</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Blocking detection:</strong> Show dependencies and blockers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Smart grouping:</strong> Related tasks grouped together</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <User size={20} className="text-purple-600" />
                Personalization Engine
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Profile-based:</strong> Services relevant to user demographics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Location-aware:</strong> State/district specific services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Usage patterns:</strong> Frequently accessed items prioritized</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Lifecycle stage:</strong> Services relevant to life events</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4">
            Related Resources
          </h2>
          <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-foreground mb-4">Related Pattern Families</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/patterns/search-discovery" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Search & Discovery Patterns</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/service" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Service Pattern Libraries</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/identity" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Identity & Access Patterns</span>
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
                      <span>Card & List Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Navigation Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Status & Badge Components</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Code Downloads */}
        <DashboardPatCodeDownloads />
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const DASH_PAT_REACT_CODE = `import React, { useState } from 'react';

interface Application { id: string; service: string; status: 'pending' | 'in-progress' | 'approved' | 'rejected'; date: string; }

export function DashboardPage() {
  const [tab, setTab] = useState<'overview' | 'applications' | 'bookmarks'>('overview');
  const apps: Application[] = [
    { id: 'APP-78432', service: 'Caste Certificate', status: 'in-progress', date: '2026-04-10' },
    { id: 'APP-78290', service: 'Income Certificate', status: 'approved', date: '2026-04-05' },
    { id: 'APP-77810', service: 'Driving License Renewal', status: 'pending', date: '2026-04-12' },
  ];
  const statusColor: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800', 'in-progress': 'bg-blue-100 text-blue-800',
    approved: 'bg-green-100 text-green-800', rejected: 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div><h1 className="text-xl font-bold">My Dashboard</h1><p className="text-sm text-muted-foreground">Welcome back, Citizen</p></div>
          <button className="p-2 rounded-lg hover:bg-muted" aria-label="Notifications">🔔</button>
        </div>
      </header>
      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4"><div className="text-2xl font-bold">{apps.length}</div><div className="text-sm text-muted-foreground">Total Applications</div></div>
          <div className="bg-card border border-border rounded-xl p-4"><div className="text-2xl font-bold text-blue-600">{apps.filter(a => a.status === 'in-progress').length}</div><div className="text-sm text-muted-foreground">In Progress</div></div>
          <div className="bg-card border border-border rounded-xl p-4"><div className="text-2xl font-bold text-green-600">{apps.filter(a => a.status === 'approved').length}</div><div className="text-sm text-muted-foreground">Approved</div></div>
        </div>
        <div className="flex gap-2 mb-6">
          {(['overview', 'applications', 'bookmarks'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} className={\`px-4 py-2 rounded-lg text-sm font-semibold \${tab === t ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}\`}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>
        {tab === 'applications' && (
          <div className="space-y-3">{apps.map(app => (
            <div key={app.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
              <div><div className="font-semibold text-sm">{app.service}</div><div className="text-xs text-muted-foreground">{app.id} • {app.date}</div></div>
              <span className={\`px-2.5 py-1 rounded-full text-xs font-bold \${statusColor[app.status]}\`}>{app.status.replace('-',' ')}</span>
            </div>
          ))}</div>
        )}
        {tab === 'overview' && <p className="text-muted-foreground">Welcome to your dashboard. View your applications, bookmarks, and notifications.</p>}
        {tab === 'bookmarks' && <p className="text-muted-foreground">Your saved services and bookmarked pages appear here.</p>}
      </div>
    </div>
  );
}`;

const DASH_PAT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen bg-background">
      <header class="bg-card border-b border-border px-6 py-4">
        <div class="max-w-5xl mx-auto flex items-center justify-between">
          <div><h1 class="text-xl font-bold">My Dashboard</h1><p class="text-sm text-muted-foreground">Welcome back</p></div>
        </div>
      </header>
      <div class="max-w-5xl mx-auto p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div class="bg-card border border-border rounded-xl p-4"><div class="text-2xl font-bold">{{apps.length}}</div><div class="text-sm text-muted-foreground">Total</div></div>
          <div class="bg-card border border-border rounded-xl p-4"><div class="text-2xl font-bold text-blue-600">{{inProgress}}</div><div class="text-sm text-muted-foreground">In Progress</div></div>
          <div class="bg-card border border-border rounded-xl p-4"><div class="text-2xl font-bold text-green-600">{{approved}}</div><div class="text-sm text-muted-foreground">Approved</div></div>
        </div>
        <div class="space-y-3">
          <div *ngFor="let app of apps" class="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
            <div><div class="font-semibold text-sm">{{app.service}}</div><div class="text-xs text-muted-foreground">{{app.id}}</div></div>
            <span [class]="'px-2.5 py-1 rounded-full text-xs font-bold ' + statusColor[app.status]">{{app.status}}</span>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class DashboardComponent {
  apps = [
    { id: 'APP-78432', service: 'Caste Certificate', status: 'in-progress' },
    { id: 'APP-78290', service: 'Income Certificate', status: 'approved' },
    { id: 'APP-77810', service: 'Driving License Renewal', status: 'pending' },
  ];
  statusColor: Record<string, string> = { pending: 'bg-yellow-100 text-yellow-800', 'in-progress': 'bg-blue-100 text-blue-800', approved: 'bg-green-100 text-green-800' };
  get inProgress() { return this.apps.filter(a => a.status === 'in-progress').length; }
  get approved() { return this.apps.filter(a => a.status === 'approved').length; }
}`;

const DASH_PAT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard — UX4G</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8fafc; }
    header { background: #fff; border-bottom: 1px solid #e2e8f0; padding: 1rem 1.5rem; }
    .header-inner { max-width: 960px; margin: 0 auto; }
    h1 { font-size: 1.25rem; font-weight: 700; }
    .subtitle { font-size: .875rem; color: #64748b; }
    main { max-width: 960px; margin: 0 auto; padding: 1.5rem; }
    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; }
    .stat { background: #fff; border: 1px solid #e2e8f0; border-radius: .75rem; padding: 1rem; }
    .stat-num { font-size: 1.5rem; font-weight: 700; }
    .stat-label { font-size: .875rem; color: #64748b; }
    .app-card { background: #fff; border: 1px solid #e2e8f0; border-radius: .75rem; padding: 1rem; margin-bottom: .75rem; display: flex; justify-content: space-between; align-items: center; }
    .app-name { font-weight: 600; font-size: .875rem; }
    .app-id { font-size: .75rem; color: #64748b; }
    .badge { padding: .25rem .625rem; border-radius: 1rem; font-size: .75rem; font-weight: 700; }
    .badge-progress { background: #dbeafe; color: #1d4ed8; }
    .badge-approved { background: #dcfce7; color: #15803d; }
    .badge-pending { background: #fef9c3; color: #854d0e; }
  </style>
</head>
<body>
  <header><div class="header-inner"><h1>My Dashboard</h1><p class="subtitle">Welcome back, Citizen</p></div></header>
  <div>
    <div class="stats">
      <div class="stat"><div class="stat-num">3</div><div class="stat-label">Total Applications</div></div>
      <div class="stat"><div class="stat-num" style="color:#2563eb">1</div><div class="stat-label">In Progress</div></div>
      <div class="stat"><div class="stat-num" style="color:#16a34a">1</div><div class="stat-label">Approved</div></div>
    </div>
    <div class="app-card"><div><div class="app-name">Caste Certificate</div><div class="app-id">APP-78432 • 2026-04-10</div></div><span class="badge badge-progress">in-progress</span></div>
    <div class="app-card"><div><div class="app-name">Income Certificate</div><div class="app-id">APP-78290 • 2026-04-05</div></div><span class="badge badge-approved">approved</span></div>
    <div class="app-card"><div><div class="app-name">Driving License Renewal</div><div class="app-id">APP-77810 • 2026-04-12</div></div><span class="badge badge-pending">pending</span></div>
  </div>
</body>
</html>`;

function DashboardPatCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Stats + Tabs', code: DASH_PAT_REACT_CODE, filename: 'DashboardPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: DASH_PAT_ANGULAR_CODE, filename: 'dashboard.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: DASH_PAT_HTML_CODE, filename: 'dashboard.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Dashboard implementations.</p>
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

// ==================== COMPONENTS ====================

function PatternCard({ title, description, icon, link, complexity, userType, useCases }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  complexity: string;
  userType: string;
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
              <span>{userType}</span>
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
