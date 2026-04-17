import { Link } from "react-router";
import { useState } from "react";
import {  MessageSquare, CheckCircle, AlertCircle, ArrowRight, ArrowLeft, Info, HelpCircle, Upload, X, Download, Copy, Check } from "lucide-react";

export default function GeneralContactPattern() {
  const [step, setStep] = useState<'intent' | 'form' | 'review' | 'success'>('intent');
  const [intent, setIntent] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showHelp, setShowHelp] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      setStep('review');
    }
  };

  const handleSubmit = () => {
    setStep('success');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/contact-support" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">General Contact Form</span>
            </div>
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <HelpCircle size={16} />
              <span>Need Help?</span>
            </button>
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="bg-card border-b border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <ProgressStep number={1} label="Select Intent" active={step === 'intent'} completed={step !== 'intent'} />
            <div className="flex-1 h-0.5 bg-gray-300 mx-2">
              <div className={`h-full bg-green-700 transition-all ${step !== 'intent' ? 'w-full' : 'w-0'}`}></div>
            </div>
            <ProgressStep number={2} label="Fill Form" active={step === 'form'} completed={step === 'review' || step === 'success'} />
            <div className="flex-1 h-0.5 bg-gray-300 mx-2">
              <div className={`h-full bg-green-700 transition-all ${step === 'review' || step === 'success' ? 'w-full' : 'w-0'}`}></div>
            </div>
            <ProgressStep number={3} label="Review" active={step === 'review'} completed={step === 'success'} />
            <div className="flex-1 h-0.5 bg-gray-300 mx-2">
              <div className={`h-full bg-green-700 transition-all ${step === 'success' ? 'w-full' : 'w-0'}`}></div>
            </div>
            <ProgressStep number={4} label="Confirmation" active={step === 'success'} completed={false} />
          </div>
        </div>
      </div>

      {/* Help Panel */}
      {showHelp && (
        <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-300">
          <div className="max-w-[1200px] mx-auto px-8 py-4">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-bold text-foreground mb-2">How to use this form</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Use this form for general questions, information requests, or non-urgent inquiries. 
                  For urgent matters or existing case follow-ups, please use the appropriate specialized forms.
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Expected response time:</strong> 5-7 business days
                </div>
              </div>
              <button onClick={() => setShowHelp(false)} className="text-muted-foreground hover:text-muted-foreground">
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        
        {/* Step 1: Intent Selection */}
        {step === 'intent' && (
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <MessageSquare size={48} className="text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-3">What can we help you with?</h1>
              <p className="text-muted-foreground">
                Select the category that best matches your inquiry to help us route your message appropriately
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <IntentOption
                title="General Information"
                description="Basic questions about services, eligibility, or procedures"
                selected={intent === 'information'}
                onClick={() => setIntent('information')}
              />
              <IntentOption
                title="Document Requirements"
                description="Questions about required documents or application materials"
                selected={intent === 'documents'}
                onClick={() => setIntent('documents')}
              />
              <IntentOption
                title="Policy Questions"
                description="Clarifications on policies, rules, or regulations"
                selected={intent === 'policy'}
                onClick={() => setIntent('policy')}
              />
              <IntentOption
                title="Suggestion or Feedback"
                description="Share your ideas or experiences with our services"
                selected={intent === 'feedback'}
                onClick={() => setIntent('feedback')}
              />
              <IntentOption
                title="Technical Issue"
                description="Problems accessing or using digital services"
                selected={intent === 'technical'}
                onClick={() => setIntent('technical')}
              />
              <IntentOption
                title="Other"
                description="Any other inquiry not listed above"
                selected={intent === 'other'}
                onClick={() => setIntent('other')}
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setStep('form')}
                disabled={!intent}
                className="px-8 py-3 bg-primary text-white rounded font-bold disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <PatternInfo />
          </div>
        )}

        {/* Step 2: Form */}
        {step === 'form' && (
          <div className="max-w-[800px] mx-auto">
            <div className="bg-card border-2 border-border rounded-lg p-8 mb-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Contact Details</h2>
                <p className="text-sm text-muted-foreground">
                  Selected category: <span className="font-bold text-foreground">{intent}</span>
                  <button onClick={() => setStep('intent')} className="ml-2 text-primary hover:underline text-xs">
                    Change
                  </button>
                </p>
              </div>

              <div className="space-y-6">
                <FormField
                  label="Full Name"
                  id="name"
                  required
                  error={errors.name}
                  value={formData.name}
                  onChange={(value) => setFormData({ ...formData, name: value })}
                  placeholder="Enter your full name"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Email Address"
                    id="email"
                    type="email"
                    required
                    error={errors.email}
                    value={formData.email}
                    onChange={(value) => setFormData({ ...formData, email: value })}
                    placeholder="your.email@example.com"
                  />
                  <FormField
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    required
                    error={errors.phone}
                    value={formData.phone}
                    onChange={(value) => setFormData({ ...formData, phone: value })}
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Preferred Contact Method <span className="text-red-600">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input aria-label="Radio option" type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-muted-foreground">Email</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input aria-label="Radio option" type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-muted-foreground">Phone</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input aria-label="Radio option" type="radio"
                        name="preferredContact"
                        value="both"
                        checked={formData.preferredContact === 'both'}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-muted-foreground">Either</span>
                    </label>
                  </div>
                </div>

                <FormField
                  label="Subject"
                  id="subject"
                  required
                  error={errors.subject}
                  value={formData.subject}
                  onChange={(value) => setFormData({ ...formData, subject: value })}
                  placeholder="Brief description of your inquiry"
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea aria-label="message" id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded ${errors.message ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-primary`}
                    placeholder="Please describe your inquiry in detail (minimum 20 characters)"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                  <div className="mt-1 text-xs text-muted-foreground">
                    {formData.message.length} characters
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep('intent')}
                className="px-6 py-3 border-2 border-border text-muted-foreground rounded font-bold flex items-center gap-2 hover:border-gray-400"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
              <button
                onClick={handleContinue}
                className="px-8 py-3 bg-primary text-white rounded font-bold flex items-center gap-2"
              >
                <span>Review & Submit</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 'review' && (
          <div className="max-w-[800px] mx-auto">
            <div className="bg-card border-2 border-border rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Review Your Information</h2>
              
              <div className="space-y-6">
                <ReviewField label="Category" value={intent} />
                <ReviewField label="Name" value={formData.name} />
                <ReviewField label="Email" value={formData.email} />
                <ReviewField label="Phone" value={formData.phone} />
                <ReviewField label="Preferred Contact" value={formData.preferredContact} />
                <ReviewField label="Subject" value={formData.subject} />
                <ReviewField label="Message" value={formData.message} multiline />
              </div>

              <div className="mt-8 bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-bold mb-1">Before submitting:</p>
                    <ul className="space-y-1">
                      <li>• Please verify all information is correct</li>
                      <li>• Expected response time: 5-7 business days</li>
                      <li>• You will receive a confirmation email with reference ID</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep('form')}
                className="px-6 py-3 border-2 border-border text-muted-foreground rounded font-bold flex items-center gap-2 hover:border-gray-400"
              >
                <ArrowLeft size={20} />
                <span>Edit Information</span>
              </button>
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-green-700 text-white rounded font-bold flex items-center gap-2 hover:bg-[#0f6b06]"
              >
                <CheckCircle size={20} />
                <span>Submit Request</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 'success' && (
          <div className="max-w-[800px] mx-auto">
            <div className="bg-card border-2 border-green-300 rounded-lg p-12 text-center">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                <CheckCircle size={64} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Request Submitted Successfully!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your inquiry has been received and assigned a reference number
              </p>
              
              <div className="bg-background border-2 border-border rounded-lg p-6 mb-8">
                <div className="text-sm text-muted-foreground mb-2">Reference ID</div>
                <div className="text-3xl font-bold text-primary font-mono mb-4">
                  GC-2026-{Math.random().toString(36).substring(2, 9).toUpperCase()}
                </div>
                <div className="text-sm text-muted-foreground">
                  Submitted on: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 text-left mb-8">
                <h3 className="font-bold text-foreground mb-3">What happens next?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Confirmation email sent to {formData.email}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Your request will be reviewed by our team within 1-2 business days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Expected response time: 5-7 business days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You can track your request status using the reference ID above</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => {
                    setStep('intent');
                    setIntent('');
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: '',
                      preferredContact: 'email'
                    });
                    setErrors({});
                  }}
                  className="px-6 py-3 border-2 border-border text-muted-foreground rounded font-bold hover:border-gray-400"
                >
                  Submit Another Request
                </button>
                <Link
                  to="/patterns/contact-support"
                  className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                >
                  Back to Patterns
                </Link>
              </div>
            </div>
          </div>
        )}

      
        <GeneralContactCodeDownloads />

      </div>
    </div>
  );
}

// ==================== COMPONENTS ====================

function ProgressStep({ number, label, active, completed }: {
  number: number;
  label: string;
  active: boolean;
  completed: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm ${
        completed ? 'bg-green-700 border-[#138808] text-white' :
        active ? 'bg-card border-primary text-primary' :
        'bg-card border-border text-muted-foreground'
      }`}>
        {completed ? <CheckCircle size={20} /> : number}
      </div>
      <span className={`text-sm font-medium ${active ? 'text-foreground' : 'text-muted-foreground'}`}>
        {label}
      </span>
    </div>
  );
}

function IntentOption({ title, description, selected, onClick }: {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-6 border-2 rounded-lg transition-all ${
        selected
          ? 'border-primary bg-blue-50'
          : 'border-border bg-card hover:border-gray-400'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${
          selected ? 'border-primary bg-primary' : 'border-border'
        }`}>
          {selected && <CheckCircle size={20} className="text-white -m-0.5" />}
        </div>
        <div>
          <h2 className="font-bold text-foreground mb-1">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </button>
  );
}

function FormField({ label, id, type = 'text', required = false, error, value, onChange, placeholder }: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-foreground mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input aria-label="text input" type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 border-2 rounded ${error ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-primary`}
        placeholder={placeholder}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
}

function ReviewField({ label, value, multiline = false }: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="pb-4 border-b border-border">
      <div className="text-sm font-bold text-muted-foreground mb-1">{label}</div>
      <div className={`text-foreground ${multiline ? 'whitespace-pre-wrap' : ''}`}>
        {value}
      </div>
    </div>
  );
}

function PatternInfo() {
  return (
    <div className="mt-12 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
      <h2 className="font-bold text-foreground mb-3">Pattern Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="text-muted-foreground mb-1">Pattern Type</div>
          <div className="font-bold text-foreground">Standard Contact</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Complexity</div>
          <div className="font-bold text-foreground">Low</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Time to Complete</div>
          <div className="font-bold text-foreground">3-5 minutes</div>
        </div>
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const GENERALCONTACT_REACT_CODE = `import React, { useState } from 'react';

export default function GeneralContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/general-contact', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">General Contact</h1>
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

const GENERALCONTACT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-general-contact',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">General Contact</h1>
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
export class GeneralContactComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/general-contact', {
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

const GENERALCONTACT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>General Contact — UX4G</title>
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
    <h1>General Contact</h1>
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
        const res = await fetch('/api/general-contact', {
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

function GeneralContactCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: GENERALCONTACT_REACT_CODE, filename: 'GeneralContactPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: GENERALCONTACT_ANGULAR_CODE, filename: 'general-contact.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: GENERALCONTACT_HTML_CODE, filename: 'general-contact.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready General Contact implementations.</p>
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
