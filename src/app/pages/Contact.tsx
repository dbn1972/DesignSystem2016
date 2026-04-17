import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, AlertCircle, CheckCircle, Building2, Users, Briefcase, HelpCircle, Twitter, Facebook, Linkedin, Youtube, Instagram, ExternalLink, Info } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    category: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must not exceed 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In production, this would send data to backend
      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          organization: '',
          subject: '',
          message: '',
          category: ''
        });
        setErrors({});
      }, 5000);
    } else {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      const element = document.getElementById(firstError);
      element?.focus();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] border-b-4 border-primary">
        <div className="max-w-[1400px] mx-auto px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-3">Contact UX4G Design System</h1>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Government of India's unified design system for digital services.
              Get in touch with our team for support, partnerships, or inquiries.
            </p>
          </div>
        </div>
      </header>

      {/* Quick Contact Info Bar */}
      <div className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuickContactItem
              icon={<Phone size={20} className="text-primary" />}
              label="Support Helpline"
              value="1800-XXX-XXXX"
              subtext="Toll-free | Mon-Fri, 9:00 AM - 6:00 PM IST"
            />
            <QuickContactItem
              icon={<Mail size={20} className="text-primary" />}
              label="Email Support"
              value="support@ux4g.gov.in"
              subtext="Response within 2-3 business days"
            />
            <QuickContactItem
              icon={<Clock size={20} className="text-primary" />}
              label="Office Hours"
              value="9:00 AM - 6:00 PM IST"
              subtext="Monday to Friday (Excluding public holidays)"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <div className="flex items-start gap-3 mb-6">
                <MessageSquare size={32} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                </div>
              </div>

              {submitted ? (
                <SuccessMessage email={formData.email} />
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <FormField
                      label="Full Name"
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(value) => handleInputChange('name', value)}
                      error={errors.name}
                      placeholder="Enter your full name"
                      autoComplete="name"
                    />

                    {/* Email and Organization */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        label="Email Address"
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                        error={errors.email}
                        placeholder="your.email@example.com"
                        autoComplete="email"
                      />
                      <FormField
                        label="Organization"
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(value) => handleInputChange('organization', value)}
                        placeholder="Your organization (optional)"
                        autoComplete="organization"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label htmlFor="category" className="block text-sm font-bold text-foreground mb-2">
                        Category <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded ${
                          errors.category ? 'border-red-500' : 'border-border'
                        } focus:outline-none focus:border-primary bg-card`}
                        aria-describedby={errors.category ? 'category-error' : undefined}
                        aria-invalid={errors.category ? 'true' : 'false'}
                        aria-required="true"
                      >
                        <option value="">Select a category</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback or Suggestion</option>
                      </select>
                      {errors.category && (
                        <p id="category-error" className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.category}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <FormField
                      label="Subject"
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(value) => handleInputChange('subject', value)}
                      error={errors.subject}
                      placeholder="Brief subject of your message"
                    />

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded ${
                          errors.message ? 'border-red-500' : 'border-border'
                        } focus:outline-none focus:border-primary resize-vertical`}
                        placeholder="Please describe your inquiry in detail (minimum 20 characters)"
                        aria-describedby={errors.message ? 'message-error' : 'message-help'}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-required="true"
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.message}
                        </p>
                      )}
                      <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                        <span id="message-help">Minimum 20 characters</span>
                        <span className={formData.message.length > 1000 ? 'text-red-600 font-bold' : ''}>
                          {formData.message.length} / 1000
                        </span>
                      </div>
                    </div>

                    {/* Privacy Notice */}
                    <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-muted-foreground">
                          <p className="font-bold mb-1">Privacy Notice</p>
                          <p>
                            Your information will be handled in accordance with the Government of India's data protection
                            policies. We will only use your contact details to respond to your inquiry.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-sm text-muted-foreground">
                        <span className="text-red-600">*</span> Required fields
                      </p>
                      <button
                        type="submit"
                        className="px-8 py-3 bg-primary text-white rounded font-bold hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center gap-2 transition-colors"
                      >
                        <Send size={20} />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* FAQ Link */}
            <div className="mt-8 bg-card border-2 border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <HelpCircle size={24} className="text-[#FF9933]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">Need Quick Answers?</h3>
                  <p className="text-muted-foreground mb-4">
                    Check our Frequently Asked Questions section for instant answers to common queries
                    about the UX4G Design System, implementation, and best practices.
                  </p>
                  <a
                    href="#faq"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                  >
                    <span>Visit Help Center</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-6">

            {/* Department Contacts */}
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Mail size={24} className="text-primary" />
                Department Contacts
              </h3>
              <div className="space-y-4">
                <DepartmentContact
                  department="Technical Support"
                  email="tech-support@ux4g.gov.in"
                  description="For technical issues, bugs, or implementation help"
                />
                <DepartmentContact
                  department="Partnership Inquiries"
                  email="partnerships@ux4g.gov.in"
                  description="For collaboration and partnership opportunities"
                />
                <DepartmentContact
                  department="General Information"
                  email="info@ux4g.gov.in"
                  description="For general questions and information requests"
                />
                <DepartmentContact
                  department="Feedback"
                  email="feedback@ux4g.gov.in"
                  description="Share your suggestions and experiences"
                />
              </div>
            </div>

            {/* Phone Support */}
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Phone size={24} className="text-primary" />
                Phone Support
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-foreground mb-1">Toll-Free Helpline</div>
                  <div className="text-2xl font-bold text-primary mb-2">1800-XXX-XXXX</div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>Monday - Friday: 9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="text-gray-500">
                      Closed on public holidays
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="font-bold text-foreground mb-1">International Callers</div>
                  <div className="text-lg font-bold text-primary">+91-11-XXXX-XXXX</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Standard call charges apply
                  </div>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin size={24} className="text-primary" />
                Office Address
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="font-bold text-foreground">UX4G Design System Office</div>
                  <div className="text-muted-foreground mt-2 leading-relaxed">
                    Ministry of Electronics and Information Technology<br />
                    Electronics Niketan<br />
                    6, CGO Complex, Lodhi Road<br />
                    New Delhi - 110003<br />
                    India
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="font-bold text-foreground mb-2">Visitor Hours</div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Monday - Friday: 10:00 AM - 5:00 PM</div>
                    <div className="text-muted-foreground">
                      Prior appointment required. Bring valid ID.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Connect With Us</h3>
              <div className="space-y-3">
                <SocialMediaLink
                  icon={<Twitter size={20} />}
                  platform="Twitter"
                  handle="@UX4GIndia"
                  url="#"
                />
                <SocialMediaLink
                  icon={<Linkedin size={20} />}
                  platform="LinkedIn"
                  handle="UX4G Design System"
                  url="#"
                />
                <SocialMediaLink
                  icon={<Youtube size={20} />}
                  platform="YouTube"
                  handle="UX4G India"
                  url="#"
                />
                <SocialMediaLink
                  icon={<Facebook size={20} />}
                  platform="Facebook"
                  handle="UX4G.India"
                  url="#"
                />
                <SocialMediaLink
                  icon={<Instagram size={20} />}
                  platform="Instagram"
                  handle="@ux4gindia"
                  url="#"
                />
              </div>
            </div>

            {/* Response Times */}
            <div className="bg-gradient-to-br from-orange-50 to-green-50 border-2 border-[#FF9933] rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <Clock size={20} className="text-[#FF9933]" />
                Expected Response Times
              </h3>
              <div className="space-y-3 text-sm">
                <ResponseTime
                  category="Technical Support"
                  time="1-2 business days"
                  priority="high"
                />
                <ResponseTime
                  category="General Inquiries"
                  time="2-3 business days"
                  priority="medium"
                />
                <ResponseTime
                  category="Partnership Requests"
                  time="3-5 business days"
                  priority="medium"
                />
                <ResponseTime
                  category="Feedback"
                  time="5-7 business days"
                  priority="low"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-orange-200 dark:border-orange-800 text-xs text-muted-foreground">
                Response times may vary during peak periods or public holidays.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-gradient-to-r from-[#000080] to-[#000060] mt-16">
        <div className="max-w-[1400px] mx-auto px-8 py-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users size={48} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Building India's Digital Future Together</h2>
          <p className="text-blue-100 text-lg max-w-[800px] mx-auto mb-6">
            The UX4G Design System is maintained by the Ministry of Electronics and Information Technology
            in collaboration with digital service providers across India.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-blue-100">
            <a href="#" className="hover:text-white hover:underline">About UX4G</a>
            <span>•</span>
            <a href="#" className="hover:text-white hover:underline">Documentation</a>
            <span>•</span>
            <a href="#" className="hover:text-white hover:underline">GitHub</a>
            <span>•</span>
            <a href="#" className="hover:text-white hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== COMPONENTS ====================

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}

function FormField({
  label,
  id,
  type = 'text',
  required = false,
  value,
  onChange,
  error,
  placeholder,
  autoComplete
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-foreground mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 border-2 rounded ${
          error ? 'border-red-500' : 'border-border'
        } focus:outline-none focus:border-primary transition-colors`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? 'true' : 'false'}
        aria-required={required ? 'true' : 'false'}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessMessage({ email }: { email: string }) {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
        <CheckCircle size={48} className="text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent Successfully!</h3>
      <p className="text-muted-foreground mb-6">
        Thank you for contacting us. A confirmation has been sent to{' '}
        <span className="font-bold text-primary">{email}</span>.
      </p>
      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 max-w-md mx-auto text-left">
        <h4 className="font-bold text-foreground mb-3">What happens next?</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span>Your message has been received and logged in our system</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span>Our team will review your inquiry within 1 business day</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span>You will receive a response based on the category selected</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span>Check your spam folder if you don't see our response</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function QuickContactItem({
  icon,
  label,
  value,
  subtext
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-sm text-muted-foreground mb-1">{label}</div>
        <div className="font-bold text-foreground text-lg">{value}</div>
        <div className="text-xs text-gray-500 mt-1">{subtext}</div>
      </div>
    </div>
  );
}

function DepartmentContact({
  department,
  email,
  description
}: {
  department: string;
  email: string;
  description: string;
}) {
  return (
    <div className="pb-4 border-b border-border last:border-0 last:pb-0">
      <div className="font-bold text-foreground mb-1">{department}</div>
      <a
        href={`mailto:${email}`}
        className="text-primary hover:underline font-medium break-all"
      >
        {email}
      </a>
      <div className="text-sm text-muted-foreground mt-1">{description}</div>
    </div>
  );
}

function SocialMediaLink({
  icon,
  platform,
  handle,
  url
}: {
  icon: React.ReactNode;
  platform: string;
  handle: string;
  url: string;
}) {
  return (
    <a
      href={url}
      className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-colors group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-muted-foreground group-hover:text-primary transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-bold text-foreground">{platform}</div>
        <div className="text-sm text-muted-foreground">{handle}</div>
      </div>
      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
    </a>
  );
}

function ResponseTime({
  category,
  time,
  priority
}: {
  category: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
}) {
  const colors = {
    high: 'bg-red-100 text-red-800 border-red-300',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    low: 'bg-green-100 text-green-800 border-green-300'
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground font-medium">{category}</span>
      <span className={`px-2 py-1 rounded text-xs font-bold border ${colors[priority]}`}>
        {time}
      </span>
    </div>
  );
}
