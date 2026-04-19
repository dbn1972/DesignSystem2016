import { Link } from "react-router";
import { useState } from "react";
import {  Headphones, CheckCircle, AlertCircle, ArrowRight, ArrowLeft, Info, HelpCircle, Upload, X, FileText, Download, Copy, Check } from "lucide-react";

export default function ServiceSupportPattern() {
  const [step, setStep] = useState<'select' | 'details' | 'issue' | 'review' | 'success'>('select');
  const [serviceType, setServiceType] = useState('');
  const [hasReference, setHasReference] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referenceId: '',
    serviceCategory: '',
    issueType: '',
    description: '',
    attachment: null as File | null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceCategories = [
    'Application Status Inquiry',
    'Technical Support',
    'Service Modification',
    'Payment Related',
    'Document Upload Issue',
    'Account Access'
  ];

  const issueTypes = {
    'Application Status Inquiry': ['Status not updated', 'Delay in processing', 'Missing information'],
    'Technical Support': ['Cannot login', 'Page not loading', 'Form submission error', 'Upload failure'],
    'Service Modification': ['Update personal details', 'Change registered mobile', 'Update address'],
    'Payment Related': ['Payment failed', 'Receipt not received', 'Refund request'],
    'Document Upload Issue': ['File upload failed', 'Document rejected', 'Format error'],
    'Account Access': ['Forgot password', 'Account locked', 'OTP not received']
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (hasReference && !formData.referenceId.trim()) newErrors.referenceId = 'Reference ID is required';
    if (!formData.serviceCategory) newErrors.serviceCategory = 'Service category is required';
    if (!formData.issueType) newErrors.issueType = 'Issue type is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setStep('success');
    }
  };

  const referenceNumber = `SS-2026-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/contact-support" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">Service Support Request</span>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-card border-b border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <StepIndicator number={1} label="Service Type" active={step === 'select'} completed={step !== 'select'} />
            <div className="flex-1 h-0.5 bg-muted mx-2">
              <div className={`h-full bg-green-700 ${step !== 'select' ? 'w-full' : 'w-0'}`}></div>
            </div>
            <StepIndicator number={2} label="Details" active={step === 'details'} completed={step === 'issue' || step === 'review' || step === 'success'} />
            <div className="flex-1 h-0.5 bg-muted mx-2">
              <div className={`h-full bg-green-700 ${step === 'issue' || step === 'review' || step === 'success' ? 'w-full' : 'w-0'}`}></div>
            </div>
            <StepIndicator number={3} label="Issue" active={step === 'issue'} completed={step === 'review' || step === 'success'} />
            <div className="flex-1 h-0.5 bg-muted mx-2">
              <div className={`h-full bg-green-700 ${step === 'review' || step === 'success' ? 'w-full' : 'w-0'}`}></div>
            </div>
            <StepIndicator number={4} label="Review" active={step === 'review'} completed={step === 'success'} />
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-12">
        
        {step === 'select' && (
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Headphones size={48} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-3">Service Support Request</h1>
              <p className="text-muted-foreground">Get help with ongoing services or applications</p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8 mb-6">
              <h2 className="font-bold text-foreground mb-4">Do you have an existing application or reference ID?</h2>
              <div className="space-y-3">
                <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-gray-400 transition-all"
                  style={{ borderColor: hasReference === true ? '#000080' : undefined, backgroundColor: hasReference === true ? '#f0f4ff' : undefined }}>
                  <input
                    type="radio"
                    name="hasReference"
                    checked={hasReference === true}
                    onChange={() => setHasReference(true)}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-bold text-foreground">Yes, I have a reference ID</div>
                    <div className="text-sm text-muted-foreground">For existing applications or previous requests</div>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-gray-400 transition-all"
                  style={{ borderColor: hasReference === false ? '#000080' : undefined, backgroundColor: hasReference === false ? '#f0f4ff' : undefined }}>
                  <input
                    type="radio"
                    name="hasReference"
                    checked={hasReference === false}
                    onChange={() => setHasReference(false)}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-bold text-foreground">No, this is a new support request</div>
                    <div className="text-sm text-muted-foreground">For general service support or technical issues</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setStep('details')}
                disabled={hasReference === null}
                className="px-8 py-3 bg-primary text-white rounded font-bold disabled:bg-gray-400 flex items-center gap-2"
              >
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {step === 'details' && (
          <div className="max-w-[800px] mx-auto">
            <div className="bg-card border-2 border-border rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Details</h2>
              <div className="space-y-6">
                <InputField label="Full Name" value={formData.name} onChange={(v) => setFormData({...formData, name: v})} error={errors.name} required />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Email" type="email" value={formData.email} onChange={(v) => setFormData({...formData, email: v})} error={errors.email} required />
                  <InputField label="Phone" type="tel" value={formData.phone} onChange={(v) => setFormData({...formData, phone: v})} error={errors.phone} required />
                </div>
                {hasReference && (
                  <InputField label="Reference / Application ID" value={formData.referenceId} onChange={(v) => setFormData({...formData, referenceId: v})} error={errors.referenceId} required
                    placeholder="e.g., APP-2026-12345" />
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep('select')} className="px-6 py-3 border-2 border-border rounded font-bold flex items-center gap-2">
                <ArrowLeft size={20} /> Back
              </button>
              <button onClick={() => setStep('issue')} className="px-8 py-3 bg-primary text-white rounded font-bold flex items-center gap-2">
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {step === 'issue' && (
          <div className="max-w-[800px] mx-auto">
            <div className="bg-card border-2 border-border rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Describe Your Issue</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Service Category <span className="text-red-600">*</span></label>
                  <select value={formData.serviceCategory} onChange={(e) => setFormData({...formData, serviceCategory: e.target.value, issueType: ''})}
                    className="w-full px-4 py-3 border-2 border-border rounded">
                    <option value="">Select category</option>
                    {serviceCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                  {errors.serviceCategory && <p className="mt-1 text-sm text-red-600">{errors.serviceCategory}</p>}
                </div>
                
                {formData.serviceCategory && (
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Issue Type <span className="text-red-600">*</span></label>
                    <select value={formData.issueType} onChange={(e) => setFormData({...formData, issueType: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-border rounded">
                      <option value="">Select issue type</option>
                      {issueTypes[formData.serviceCategory as keyof typeof issueTypes]?.map(type => 
                        <option key={type} value={type}>{type}</option>
                      )}
                    </select>
                    {errors.issueType && <p className="mt-1 text-sm text-red-600">{errors.issueType}</p>}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Detailed Description <span className="text-red-600">*</span></label>
                  <textarea rows={6} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-border rounded" placeholder="Please describe the issue in detail..." />
                  {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Attachment (Optional)</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload size={32} className="mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Drop files here or click to upload</p>
                    <input type="file" className="text-sm" onChange={(e) => setFormData({...formData, attachment: e.target.files?.[0] || null})} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep('details')} className="px-6 py-3 border-2 border-border rounded font-bold flex items-center gap-2">
                <ArrowLeft size={20} /> Back
              </button>
              <button onClick={() => setStep('review')} className="px-8 py-3 bg-primary text-white rounded font-bold flex items-center gap-2">
                Review <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {step === 'review' && (
          <div className="max-w-[800px] mx-auto">
            <div className="bg-card border-2 border-border rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Review Request</h2>
              <div className="space-y-4">
                <ReviewItem label="Name" value={formData.name} />
                <ReviewItem label="Email" value={formData.email} />
                <ReviewItem label="Phone" value={formData.phone} />
                {hasReference && <ReviewItem label="Reference ID" value={formData.referenceId} />}
                <ReviewItem label="Service Category" value={formData.serviceCategory} />
                <ReviewItem label="Issue Type" value={formData.issueType} />
                <ReviewItem label="Description" value={formData.description} />
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep('issue')} className="px-6 py-3 border-2 border-border rounded font-bold flex items-center gap-2">
                <ArrowLeft size={20} /> Edit
              </button>
              <button onClick={handleSubmit} className="px-8 py-3 bg-green-700 text-white rounded font-bold flex items-center gap-2">
                <CheckCircle size={20} /> Submit
              </button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="max-w-[800px] mx-auto">
            <div className="bg-card border-2 border-green-300 rounded-lg p-12 text-center">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                <CheckCircle size={64} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Support Request Submitted!</h2>
              <div className="bg-background border-2 border-border rounded-lg p-6 mb-6">
                <div className="text-sm text-muted-foreground mb-2">Support Ticket ID</div>
                <div className="text-3xl font-bold text-primary font-mono">{referenceNumber}</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 text-left mb-6">
                <h3 className="font-bold text-foreground mb-3">What's Next?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    Confirmation email sent to {formData.email}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    Support team will review within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    Expected resolution: 2-3 business days
                  </li>
                </ul>
              </div>
              <Link to="/patterns/contact-support" className="inline-block px-6 py-3 bg-primary text-white rounded font-bold">
                Back to Patterns
              </Link>
            </div>
          </div>
        )}

      
        <ServiceSupportCodeDownloads />

      </div>
    </div>
  );
}

function StepIndicator({ number, label, active, completed }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm ${
        completed ? 'bg-green-700 border-[#138808] text-white' :
        active ? 'bg-card border-primary text-primary' :
        'bg-card border-border text-muted-foreground'
      }`}>
        {completed ? <CheckCircle size={20} /> : number}
      </div>
      <span className={`text-sm font-medium ${active ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
    </div>
  );
}

function InputField({ label, type = 'text', value, onChange, error, required = false, placeholder = '' }: any) {
  return (
    <div>
      <label className="block text-sm font-bold text-foreground mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className={`w-full px-4 py-3 border-2 rounded ${error ? 'border-red-500' : 'border-border'}`} />
      {error && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{error}</p>}
    </div>
  );
}

function ReviewItem({ label, value }: any) {
  return (
    <div className="pb-4 border-b border-border">
      <div className="text-sm font-bold text-muted-foreground mb-1">{label}</div>
      <div className="text-foreground">{value}</div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const SERVICESUPPORT_REACT_CODE = `import React, { useState } from 'react';

export default function ServiceSupportPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/service-support', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Service Support</h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
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

const SERVICESUPPORT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-service-support',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Service Support</h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
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
export class ServiceSupportComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/service-support', {
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

const SERVICESUPPORT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Service Support — UX4G</title>
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
    <h1>Service Support</h1>
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
        const res = await fetch('/api/service-support', {
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

function ServiceSupportCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: SERVICESUPPORT_REACT_CODE, filename: 'ServiceSupportPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: SERVICESUPPORT_ANGULAR_CODE, filename: 'service-support.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: SERVICESUPPORT_HTML_CODE, filename: 'service-support.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Service Support implementations.</p>
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
