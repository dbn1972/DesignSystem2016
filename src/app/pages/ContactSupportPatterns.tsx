import React from "react";
import { Link } from "react-router";
import { MessageSquare, Headphones, AlertCircle, Phone, FileText, ThumbsUp, Users, Zap, ArrowRight, CheckCircle, Download, Copy, Check } from "lucide-react";

export default function ContactSupportPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-orange-50 via-white to-green-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF9933] to-[#138808] border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <MessageSquare size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-5xl font-bold text-foreground">Contact & Support Patterns</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                A comprehensive system of reusable patterns for citizen-government communication across 
                general inquiries, service requests, grievances, escalations, and urgent support needs. 
                Designed for accessibility, multi-channel routing, and structured case management.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Communication</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">8 Interactive Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">Medium to High</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold text-center shadow-lg">
                GOVERNMENT GRADE
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                ACCESSIBLE
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
              <Link to="/patterns/contact-support/overview" className="text-primary hover:underline text-sm font-medium">
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
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-border rounded-lg p-10">
            <h2 className="text-3xl font-bold text-foreground mb-6">System Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Purpose
                </h3>
                <p className="text-sm text-muted-foreground">
                  Provide citizens with structured, accessible channels to contact government 
                  departments for inquiries, support requests, grievances, and urgent assistance.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Key Features
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Intent-based routing</li>
                  <li>• Priority escalation paths</li>
                  <li>• Multi-language support</li>
                  <li>• Case tracking & reference IDs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Compliance
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• WCAG 2.1 Level AA</li>
                  <li>• Right to Information Act</li>
                  <li>• Digital India guidelines</li>
                  <li>• GIGW accessibility norms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Categories */}
        <section className="mb-16" id="all-patterns">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-[#FF9933] pl-4">
            Pattern Categories
          </h2>

          {/* Standard Contact Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Standard Contact Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="General Contact Form"
                description="Basic contact pattern for general inquiries, questions, and non-urgent communication with government departments"
                icon={<MessageSquare size={32} className="text-blue-600" />}
                link="/patterns/contact-support/general-contact"
                complexity="Low"
                timeToComplete="3-5 minutes"
                useCases={["General inquiries", "Information requests", "Basic questions"]}
              />
              <PatternCard
                title="Department Inquiry Form"
                description="Structured inquiry pattern with department selection, category routing, and specialized field collection"
                icon={<FileText size={32} className="text-purple-600" />}
                link="/patterns/contact-support/department-inquiry"
                complexity="Medium"
                timeToComplete="5-8 minutes"
                useCases={["Department-specific queries", "Policy questions", "Procedural guidance"]}
              />
            </div>
          </div>

          {/* Service & Support Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Headphones size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Service & Support Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Service Support Request"
                description="Pattern for ongoing service assistance, application tracking, status updates, and technical support"
                icon={<Headphones size={32} className="text-green-600" />}
                link="/patterns/contact-support/service-support"
                complexity="Medium"
                timeToComplete="7-10 minutes"
                useCases={["Application status", "Technical issues", "Service modifications"]}
              />
              <PatternCard
                title="Callback Request"
                description="Schedule a callback from department officials with time slot selection and preferred contact method"
                icon={<Phone size={32} className="text-teal-600" />}
                link="/patterns/contact-support/callback-request"
                complexity="Low"
                timeToComplete="3-5 minutes"
                useCases={["Phone consultation", "Scheduled assistance", "Complex query discussion"]}
              />
            </div>
          </div>

          {/* Escalation & Priority Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Escalation & Priority Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Escalation Contact Form"
                description="Formal escalation pattern for unresolved issues with previous case reference and escalation justification"
                icon={<AlertCircle size={32} className="text-orange-600" />}
                link="/patterns/contact-support/escalation-form"
                complexity="High"
                timeToComplete="10-15 minutes"
                useCases={["Unresolved complaints", "Delayed services", "Appeal requests"]}
              />
              <PatternCard
                title="Urgent / Priority Contact"
                description="Fast-track routing for time-sensitive or critical issues requiring immediate attention and priority handling"
                icon={<Zap size={32} className="text-red-600" />}
                link="/patterns/contact-support/urgent-contact"
                complexity="Medium"
                timeToComplete="5-7 minutes"
                useCases={["Emergency situations", "Critical deadlines", "Time-sensitive issues"]}
              />
            </div>
          </div>

          {/* Hybrid & Assisted Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Hybrid & Assisted Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Feedback + Contact Hybrid"
                description="Combined pattern allowing users to provide feedback while simultaneously requesting follow-up contact"
                icon={<ThumbsUp size={32} className="text-indigo-600" />}
                link="/patterns/contact-support/feedback-contact"
                complexity="Medium"
                timeToComplete="5-8 minutes"
                useCases={["Service feedback with questions", "Experience sharing", "Suggestion submission"]}
              />
              <PatternCard
                title="Assisted Support Request"
                description="Pattern for users requiring assistance from helpers, CSCs, or intermediaries with shared access controls"
                icon={<Users size={32} className="text-pink-600" />}
                link="/patterns/contact-support/assisted-support"
                complexity="High"
                timeToComplete="8-12 minutes"
                useCases={["Elderly assistance", "Disability support", "Low digital literacy"]}
              />
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
              title="Form Structure"
              points={[
                "Always start with user intent selection",
                "Use progressive disclosure for complex forms",
                "Include review step before submission",
                "Provide clear acknowledgment with reference ID",
                "Enable save and resume for long forms"
              ]}
            />
            <GuidelineCard
              title="Routing Logic"
              points={[
                "Route based on category and priority",
                "Escalate based on keywords or severity",
                "Assign to appropriate department/team",
                "Track SLA based on priority level",
                "Provide status tracking for all requests"
              ]}
            />
            <GuidelineCard
              title="Accessibility"
              points={[
                "Keyboard navigation for all interactions",
                "Screen reader compatible labels",
                "Error messages linked to form fields",
                "Sufficient color contrast (4.5:1 minimum)",
                "Support for 22 scheduled Indian languages"
              ]}
            />
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
                    <Link to="/patterns/forms" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Form Intelligence System</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/service" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Service Pattern Libraries</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/resilience" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>State Resilience System</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">Design System Components</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/components/forms" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Form Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components/validation" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Validation & Error Handling</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components/feedback" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Feedback Messages</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Code Downloads */}
        <ContactSupportCodeDownloads />
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const CONTACT_SUPPORT_REACT_CODE = `import React, { useState } from 'react';

type Tab = 'form' | 'faq' | 'ticket';

export function ContactSupportPage() {
  const [tab, setTab] = useState<Tab>('form');
  const [form, setForm] = useState({ name: '', email: '', department: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const departments = ['Revenue', 'Education', 'Health', 'Transport', 'Agriculture', 'Other'];
  const faqs = [
    { q: 'How do I track my application?', a: 'Use the Track Application page with your application ID and registered mobile number.' },
    { q: 'How long does certificate issuance take?', a: 'Most certificates are issued within 7-15 working days after successful verification.' },
    { q: 'Can I update my submitted application?', a: 'Yes, if the application is still in "Pending Review" status, you can edit it from your dashboard.' },
    { q: 'What documents are required for income certificate?', a: 'Aadhaar card, ration card, salary slip or self-declaration, and address proof.' },
  ];

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setTicketId('TKT-' + Date.now().toString(36).toUpperCase());
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-2">Contact & Support</h1>
        <p className="text-sm text-muted-foreground mb-6">Get help with government digital services</p>
        <div className="flex gap-2 mb-6">
          {(['form', 'faq', 'ticket'] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)} className={\`px-4 py-2 rounded-lg text-sm font-semibold \${tab === t ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}\`}>
              {t === 'form' ? 'Contact Form' : t === 'faq' ? 'FAQs' : 'Track Ticket'}
            </button>
          ))}
        </div>
        {tab === 'form' && !submitted && (
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium mb-1">Name *</label><input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} className="w-full px-3 py-2 border border-border rounded-lg" /></div>
              <div><label className="block text-sm font-medium mb-1">Email *</label><input type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} className="w-full px-3 py-2 border border-border rounded-lg" /></div>
            </div>
            <div><label className="block text-sm font-medium mb-1">Department</label><select value={form.department} onChange={e => setForm(f => ({...f, department: e.target.value}))} className="w-full px-3 py-2 border border-border rounded-lg"><option value="">Select</option>{departments.map(d => <option key={d}>{d}</option>)}</select></div>
            <div><label className="block text-sm font-medium mb-1">Subject *</label><input value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))} className="w-full px-3 py-2 border border-border rounded-lg" /></div>
            <div><label className="block text-sm font-medium mb-1">Message *</label><textarea rows={4} value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} className="w-full px-3 py-2 border border-border rounded-lg" /></div>
            <button onClick={handleSubmit} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Submit</button>
          </div>
        )}
        {tab === 'form' && submitted && (
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
            <h2 className="text-xl font-bold mb-2">Request Submitted</h2>
            <p className="text-muted-foreground">Ticket ID: <span className="font-bold">{ticketId}</span></p>
          </div>
        )}
        {tab === 'faq' && (
          <div className="space-y-3">{faqs.map((faq, i) => (
            <details key={i} className="bg-card border border-border rounded-xl p-4 group">
              <summary className="font-semibold text-sm cursor-pointer">{faq.q}</summary>
              <p className="text-sm text-muted-foreground mt-2">{faq.a}</p>
            </details>
          ))}</div>
        )}
        {tab === 'ticket' && (
          <div className="bg-card border border-border rounded-2xl p-6">
            <label className="block text-sm font-medium mb-1">Ticket ID</label>
            <input placeholder="e.g. TKT-ABC123" className="w-full px-3 py-2 border border-border rounded-lg mb-4" />
            <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Track Ticket</button>
          </div>
        )}
      </div>
    </div>
  );
}`;

const CONTACT_SUPPORT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-contact-support',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="min-h-screen bg-background p-4">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-2xl font-bold text-foreground mb-2">Contact & Support</h1>
        <p class="text-sm text-muted-foreground mb-6">Get help with government digital services</p>
        <div class="flex gap-2 mb-6">
          <button *ngFor="let t of tabs" (click)="tab=t" [class]="'px-4 py-2 rounded-lg text-sm font-semibold ' + (tab===t ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground')">
            {{t === 'form' ? 'Contact Form' : t === 'faq' ? 'FAQs' : 'Track Ticket'}}
          </button>
        </div>
        <div *ngIf="tab==='form' && !submitted" class="bg-card border border-border rounded-2xl p-6 space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div><label class="block text-sm font-medium mb-1">Name *</label><input [(ngModel)]="form.name" class="w-full px-3 py-2 border border-border rounded-lg" /></div>
            <div><label class="block text-sm font-medium mb-1">Email *</label><input [(ngModel)]="form.email" class="w-full px-3 py-2 border border-border rounded-lg" /></div>
          </div>
          <div><label class="block text-sm font-medium mb-1">Subject *</label><input [(ngModel)]="form.subject" class="w-full px-3 py-2 border border-border rounded-lg" /></div>
          <div><label class="block text-sm font-medium mb-1">Message *</label><textarea rows="4" [(ngModel)]="form.message" class="w-full px-3 py-2 border border-border rounded-lg"></textarea></div>
          <button (click)="submit()" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Submit</button>
        </div>
        <div *ngIf="tab==='form' && submitted" class="bg-card border border-border rounded-2xl p-8 text-center">
          <h2 class="text-xl font-bold mb-2">Request Submitted</h2>
          <p class="text-muted-foreground">Ticket ID: <span class="font-bold">{{ticketId}}</span></p>
        </div>
        <div *ngIf="tab==='faq'" class="space-y-3">
          <details *ngFor="let faq of faqs" class="bg-card border border-border rounded-xl p-4">
            <summary class="font-semibold text-sm cursor-pointer">{{faq.q}}</summary>
            <p class="text-sm text-muted-foreground mt-2">{{faq.a}}</p>
          </details>
        </div>
      </div>
    </div>
  \`
})
export class ContactSupportComponent {
  tab: 'form' | 'faq' | 'ticket' = 'form';
  tabs = ['form', 'faq', 'ticket'] as const;
  submitted = false;
  ticketId = '';
  form = { name: '', email: '', department: '', subject: '', message: '' };
  faqs = [
    { q: 'How do I track my application?', a: 'Use the Track Application page with your application ID.' },
    { q: 'How long does certificate issuance take?', a: 'Most certificates are issued within 7-15 working days.' },
  ];
  submit() { this.ticketId = 'TKT-' + Date.now().toString(36).toUpperCase(); this.submitted = true; }
}`;

const CONTACT_SUPPORT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact & Support — UX4G</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8fafc; min-height: 100vh; padding: 2rem; }
    .container { max-width: 640px; margin: 0 auto; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: .25rem; }
    .subtitle { font-size: .875rem; color: #64748b; margin-bottom: 1.5rem; }
    .tabs { display: flex; gap: .5rem; margin-bottom: 1.5rem; }
    .tab { padding: .5rem 1rem; border-radius: .5rem; font-size: .875rem; font-weight: 600; border: none; cursor: pointer; background: #f1f5f9; color: #64748b; }
    .tab.active { background: #005196; color: #fff; }
    .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem; }
    label { display: block; font-size: .875rem; font-weight: 500; margin-bottom: .25rem; }
    input, textarea, select { width: 100%; padding: .5rem .75rem; border: 1px solid #e2e8f0; border-radius: .5rem; font-size: .875rem; margin-bottom: 1rem; }
    textarea { resize: vertical; }
    .btn { width: 100%; padding: .75rem; background: #005196; color: #fff; border: none; border-radius: .5rem; font-weight: 600; cursor: pointer; }
    .btn:hover { opacity: .9; }
    .hidden { display: none; }
    details { background: #fff; border: 1px solid #e2e8f0; border-radius: .75rem; padding: 1rem; margin-bottom: .75rem; }
    summary { font-weight: 600; font-size: .875rem; cursor: pointer; }
    details p { font-size: .875rem; color: #64748b; margin-top: .5rem; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Contact & Support</h1>
    <p class="subtitle">Get help with government digital services</p>
    <div class="tabs">
      <button class="tab active" onclick="showTab('form')">Contact Form</button>
      <button class="tab" onclick="showTab('faq')">FAQs</button>
      <button class="tab" onclick="showTab('ticket')">Track Ticket</button>
    </div>
    <div id="tab-form" class="card">
      <label>Name *</label><input id="name" />
      <label>Email *</label><input id="email" type="email" />
      <label>Subject *</label><input id="subject" />
      <label>Message *</label><textarea id="message" rows="4"></textarea>
      <button class="btn" onclick="submitForm()">Submit</button>
    </div>
    <div id="tab-faq" class="hidden">
      <details><summary>How do I track my application?</summary><p>Use the Track Application page with your application ID and registered mobile number.</p></details>
      <details><summary>How long does certificate issuance take?</summary><p>Most certificates are issued within 7-15 working days after successful verification.</p></details>
      <details><summary>Can I update my submitted application?</summary><p>Yes, if the application is still in "Pending Review" status.</p></details>
    </div>
    <div id="tab-ticket" class="hidden card">
      <label>Ticket ID</label><input placeholder="e.g. TKT-ABC123" />
      <button class="btn">Track Ticket</button>
    </div>
  </div>
  <script>
    function showTab(id) {
      document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
      event.target.classList.add('active');
      ['form','faq','ticket'].forEach(t => { const el = document.getElementById('tab-'+t); el.classList.toggle('hidden', t !== id); });
    }
    function submitForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      if (!name || !email) { alert('Please fill required fields'); return; }
      const tid = 'TKT-' + Date.now().toString(36).toUpperCase();
      document.getElementById('tab-form').innerHTML = '<div style="text-align:center;padding:2rem"><h2 style="font-size:1.25rem;font-weight:700">Request Submitted</h2><p style="color:#64748b;margin-top:.5rem">Ticket ID: <strong>'+tid+'</strong></p></div>';
    }
  </script>
</body>
</html>`;

function ContactSupportCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Tabs + FAQ', code: CONTACT_SUPPORT_REACT_CODE, filename: 'ContactSupportPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + FormsModule', code: CONTACT_SUPPORT_ANGULAR_CODE, filename: 'contact-support.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: CONTACT_SUPPORT_HTML_CODE, filename: 'contact-support.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Contact & Support implementations.</p>
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

function PatternCard({ title, description, icon, link, complexity, timeToComplete, useCases }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  complexity: string;
  timeToComplete: string;
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
                {complexity} Complexity
              </span>
              <span>{timeToComplete}</span>
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
