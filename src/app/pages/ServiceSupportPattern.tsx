import { Link } from "react-router";
import { useState } from "react";
import { Headphones, CheckCircle, AlertCircle, ArrowRight, ArrowLeft, Info, HelpCircle, Upload, X, FileText } from "lucide-react";

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
              <span className="text-gray-400">|</span>
              <span className="text-sm font-bold text-foreground">Service Support Request</span>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-card border-b border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <StepIndicator number={1} label="Service Type" active={step === 'select'} completed={step !== 'select'} />
            <div className="flex-1 h-0.5 bg-gray-300 mx-2">
              <div className={`h-full bg-green-700 ${step !== 'select' ? 'w-full' : 'w-0'}`}></div>
            </div>
            <StepIndicator number={2} label="Details" active={step === 'details'} completed={step === 'issue' || step === 'review' || step === 'success'} />
            <div className="flex-1 h-0.5 bg-gray-300 mx-2">
              <div className={`h-full bg-green-700 ${step === 'issue' || step === 'review' || step === 'success' ? 'w-full' : 'w-0'}`}></div>
            </div>
            <StepIndicator number={3} label="Issue" active={step === 'issue'} completed={step === 'review' || step === 'success'} />
            <div className="flex-1 h-0.5 bg-gray-300 mx-2">
              <div className={`h-full bg-green-700 ${step === 'review' || step === 'success' ? 'w-full' : 'w-0'}`}></div>
            </div>
            <StepIndicator number={4} label="Review" active={step === 'review'} completed={step === 'success'} />
          </div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-8 py-12">
        
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
                <div className="grid grid-cols-2 gap-4">
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
                    <Upload size={32} className="mx-auto text-gray-400 mb-2" />
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
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 text-left mb-6">
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

      </main>
    </div>
  );
}

function StepIndicator({ number, label, active, completed }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm ${
        completed ? 'bg-green-700 border-[#138808] text-white' :
        active ? 'bg-card border-primary text-primary' :
        'bg-card border-border text-gray-400'
      }`}>
        {completed ? <CheckCircle size={20} /> : number}
      </div>
      <span className={`text-sm font-medium ${active ? 'text-foreground' : 'text-gray-500'}`}>{label}</span>
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
