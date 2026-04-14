import React, { useState } from 'react';
import { Link } from 'react-router';
import { FileText, CheckSquare, Clock, Download, Eye, AlertCircle, CheckCircle, Info, ChevronRight, Code, Database, ArrowLeft } from 'lucide-react';

// Pattern Preview Component
function ConsentCapturePreview() {
  const [agreed, setAgreed] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  const handleAgree = (checked: boolean) => {
    setAgreed(checked);
    if (checked) {
      setTimestamp(new Date().toISOString());
    } else {
      setTimestamp('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card border-2 border-border rounded-lg">
      <h3 className="text-lg font-bold text-foreground mb-4">Terms and Conditions</h3>

      <div className="bg-background border border-border rounded p-4 mb-4 max-h-64 overflow-y-auto">
        <p className="text-sm text-muted-foreground mb-3">
          I hereby declare that all the information provided by me is true and correct to the best of my knowledge and belief.
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          I understand that any false information may lead to rejection of my application or cancellation of services.
        </p>
        <p className="text-sm text-muted-foreground">
          I consent to the collection, storage, and processing of my personal data for the purpose of this application.
        </p>
      </div>

      <div className="mb-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => handleAgree(e.target.checked)}
            className="w-5 h-5 mt-0.5 border-2 border-border rounded text-primary focus:ring-2 focus:ring-ring"
          />
          <span className="text-sm text-muted-foreground">
            I have read and agree to the terms and conditions
          </span>
        </label>
      </div>

      {timestamp && (
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <Clock size={14} />
          <span>Agreed on: {new Date(timestamp).toLocaleString()}</span>
        </div>
      )}

      <button
        disabled={!agreed}
        className={'px-6 py-3 rounded-lg font-semibold transition-colors ' + (agreed ? 'bg-primary text-white hover:opacity-90' : 'bg-gray-300 text-gray-500 cursor-not-allowed')}
      >
        Continue
      </button>
    </div>
  );
}

function MultipleConsentsPreview() {
  const [consents, setConsents] = useState({
    terms: false,
    privacy: false,
    data: false
  });

  const allAgreed = consents.terms && consents.privacy && consents.data;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card border-2 border-border rounded-lg">
      <h3 className="text-lg font-bold text-foreground mb-4">Required Consents</h3>

      <div className="space-y-3 mb-6">
        <label className="flex items-start gap-3 p-3 border border-border rounded cursor-pointer hover:bg-background">
          <input
            type="checkbox"
            checked={consents.terms}
            onChange={(e) => setConsents({...consents, terms: e.target.checked})}
            className="w-5 h-5 mt-0.5 border-2 border-border rounded text-primary focus:ring-2 focus:ring-ring"
          />
          <div>
            <div className="text-sm font-semibold text-foreground mb-1">Terms and Conditions</div>
            <div className="text-xs text-muted-foreground">I agree to the terms of service</div>
          </div>
        </label>

        <label className="flex items-start gap-3 p-3 border border-border rounded cursor-pointer hover:bg-background">
          <input
            type="checkbox"
            checked={consents.privacy}
            onChange={(e) => setConsents({...consents, privacy: e.target.checked})}
            className="w-5 h-5 mt-0.5 border-2 border-border rounded text-primary focus:ring-2 focus:ring-ring"
          />
          <div>
            <div className="text-sm font-semibold text-foreground mb-1">Privacy Policy</div>
            <div className="text-xs text-muted-foreground">I have read the privacy policy</div>
          </div>
        </label>

        <label className="flex items-start gap-3 p-3 border border-border rounded cursor-pointer hover:bg-background">
          <input
            type="checkbox"
            checked={consents.data}
            onChange={(e) => setConsents({...consents, data: e.target.checked})}
            className="w-5 h-5 mt-0.5 border-2 border-border rounded text-primary focus:ring-2 focus:ring-ring"
          />
          <div>
            <div className="text-sm font-semibold text-foreground mb-1">Data Sharing Consent</div>
            <div className="text-xs text-muted-foreground">I consent to data sharing with government agencies</div>
          </div>
        </label>
      </div>

      <button
        disabled={!allAgreed}
        className={'px-6 py-3 rounded-lg font-semibold transition-colors w-full ' + (allAgreed ? 'bg-primary text-white hover:opacity-90' : 'bg-gray-300 text-gray-500 cursor-not-allowed')}
      >
        Submit Application
      </button>
    </div>
  );
}

function WithDocumentPreview() {
  const [agreed, setAgreed] = useState(false);
  const [documentViewed, setDocumentViewed] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card border-2 border-border rounded-lg">
      <h3 className="text-lg font-bold text-foreground mb-4">Document Consent</h3>

      <div className="bg-background border border-border rounded p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FileText className="text-primary" size={20} />
            <span className="text-sm font-semibold text-foreground">Terms_and_Conditions.pdf</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setDocumentViewed(true)}
              className="px-3 py-1 text-xs bg-card border border-border rounded hover:bg-background flex items-center gap-1"
            >
              <Eye size={14} />
              View
            </button>
            <button className="px-3 py-1 text-xs bg-card border border-border rounded hover:bg-background flex items-center gap-1">
              <Download size={14} />
              Download
            </button>
          </div>
        </div>
        {documentViewed && (
          <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 p-2 rounded">
            <CheckCircle size={14} />
            Document viewed on {new Date().toLocaleString()}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            disabled={!documentViewed}
            className="w-5 h-5 mt-0.5 border-2 border-border rounded text-primary focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          <span className={'text-sm ' + (documentViewed ? 'text-muted-foreground' : 'text-gray-400')}>
            I have read and understood the document and agree to its terms
          </span>
        </label>
      </div>

      {!documentViewed && (
        <div className="flex items-start gap-2 text-xs text-amber-700 bg-amber-50 p-3 rounded mb-4">
          <AlertCircle size={14} className="mt-0.5" />
          <span>Please view the document before agreeing</span>
        </div>
      )}

      <button
        disabled={!agreed}
        className={'px-6 py-3 rounded-lg font-semibold transition-colors ' + (agreed ? 'bg-primary text-white hover:opacity-90' : 'bg-gray-300 text-gray-500 cursor-not-allowed')}
      >
        Submit
      </button>
    </div>
  );
}

export default function ConsentCapturePatternCode() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#000080] to-[#000050] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/patterns" className="text-blue-200 hover:text-white transition-colors">
              Patterns
            </Link>
            <ChevronRight size={20} className="text-blue-300" />
            <Link to="/patterns/consent" className="text-blue-200 hover:text-white transition-colors">
              Consent & Declaration
            </Link>
            <ChevronRight size={20} className="text-blue-300" />
            <Link to="/patterns/consent/consent-capture" className="text-blue-200 hover:text-white transition-colors">
              Consent Capture
            </Link>
            <ChevronRight size={20} className="text-blue-300" />
            <span className="font-semibold">Code Implementation</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Consent Capture Pattern</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Capture explicit user consent for terms, conditions, privacy policies, and data processing with timestamp tracking and document verification.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="px-4 py-2 bg-green-600 rounded-full text-sm font-semibold">
              Production Ready
            </div>
            <div className="text-sm text-blue-200">
              Pattern ID: UX4G-PAT-CONSENT-001
            </div>
            <div className="text-sm text-blue-200">
              Version: 1.0.0
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Pattern Link */}
        <Link
          to="/patterns/consent/consent-capture"
          className="inline-flex items-center gap-2 text-primary hover:text-[#000060] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Pattern Overview
        </Link>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckSquare className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">When to Use</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Application submissions</li>
                <li>• Account registration</li>
                <li>• Data processing consent</li>
                <li>• Policy acceptance</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-[#138808]" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Key Features</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Timestamp tracking</li>
                <li>• Document preview</li>
                <li>• Multiple consents</li>
                <li>• Required validation</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Compliance</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• GDPR compliant</li>
                <li>• DPDP Act 2023</li>
                <li>• Audit trail ready</li>
                <li>• Withdrawal support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Live Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Live Examples</h2>

          <div className="space-y-8">
            {/* Example 1 */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Basic Consent with Timestamp</h3>
              <div className="bg-muted p-6 rounded-lg">
                <ConsentCapturePreview />
              </div>
            </div>

            {/* Example 2 */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Multiple Required Consents</h3>
              <div className="bg-muted p-6 rounded-lg">
                <MultipleConsentsPreview />
              </div>
            </div>

            {/* Example 3 */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">With Document Preview Required</h3>
              <div className="bg-muted p-6 rounded-lg">
                <WithDocumentPreview />
              </div>
            </div>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Props & Configuration</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-background">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-foreground">content</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">string | ReactNode</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">-</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Consent text or document content</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-foreground">onAgree</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">(timestamp: string) =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">-</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Callback when user agrees</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-foreground">required</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">boolean</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">true</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Whether consent is required to proceed</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-foreground">documentUrl</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">string</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">-</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">URL to downloadable document</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-foreground">requireView</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">boolean</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">false</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Require document view before agreeing</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-foreground">trackTimestamp</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">boolean</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">true</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Track and display agreement timestamp</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-foreground">label</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">string</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">I agree to terms</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Checkbox label text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* React Implementation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">React Implementation</h2>
          <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-gray-100">
              <code>{`import React, { useState } from 'react';
import { Clock, FileText, Download, Eye } from 'lucide-react';

interface ConsentCaptureProps {
  content: string | React.ReactNode;
  onAgree: (timestamp: string) => void;
  required?: boolean;
  documentUrl?: string;
  requireView?: boolean;
  trackTimestamp?: boolean;
  label?: string;
}

export function ConsentCapture({
  content,
  onAgree,
  required = true,
  documentUrl,
  requireView = false,
  trackTimestamp = true,
  label = 'I agree to the terms and conditions'
}: ConsentCaptureProps) {
  const [agreed, setAgreed] = useState(false);
  const [timestamp, setTimestamp] = useState('');
  const [documentViewed, setDocumentViewed] = useState(!requireView);

  const handleAgree = (checked: boolean) => {
    setAgreed(checked);
    if (checked) {
      const ts = new Date().toISOString();
      setTimestamp(ts);
      onAgree(ts);
    } else {
      setTimestamp('');
    }
  };

  const handleViewDocument = () => {
    setDocumentViewed(true);
    // Open document in new tab
    if (documentUrl) {
      window.open(documentUrl, '_blank');
    }
  };

  return (
    <div className="space-y-4">
      {/* Content Display */}
      <div className="bg-background border border-border rounded p-4 max-h-64 overflow-y-auto">
        {typeof content === 'string' ? (
          <p className="text-sm text-muted-foreground">{content}</p>
        ) : (
          content
        )}
      </div>

      {/* Document Actions */}
      {documentUrl && (
        <div className="flex items-center gap-2">
          <button
            onClick={handleViewDocument}
            className="px-3 py-2 text-sm bg-card border border-border rounded hover:bg-background flex items-center gap-2"
          >
            <Eye size={16} />
            View Document
          </button>
          <a
            href={documentUrl}
            download
            className="px-3 py-2 text-sm bg-card border border-border rounded hover:bg-background flex items-center gap-2"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      )}

      {/* Consent Checkbox */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => handleAgree(e.target.checked)}
          disabled={requireView && !documentViewed}
          required={required}
          className="w-5 h-5 mt-0.5 border-2 border-border rounded"
        />
        <span className="text-sm text-muted-foreground">{label}</span>
      </label>

      {/* Timestamp Display */}
      {trackTimestamp && timestamp && (
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Clock size={14} />
          <span>Agreed on: {new Date(timestamp).toLocaleString()}</span>
        </div>
      )}

      {/* Warning for required view */}
      {requireView && !documentViewed && (
        <p className="text-xs text-amber-600">
          Please view the document before agreeing
        </p>
      )}
    </div>
  );
}

// Usage Example
function App() {
  const handleConsent = (timestamp: string) => {
    console.log('User agreed at:', timestamp);
    // Send to backend for audit trail
  };

  return (
    <ConsentCapture
      content="I agree to the terms and conditions..."
      onAgree={handleConsent}
      documentUrl="/terms.pdf"
      requireView={true}
    />
  );
}`}</code>
            </pre>
          </div>
        </section>

        {/* Government Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Government Service Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Application Submission</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Capture declaration that all information provided is true and accurate before submitting license or permit applications.
              </p>
              <div className="text-xs text-gray-500">
                Used in: Driving License, Passport, Business Registration
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Data Sharing Consent</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Obtain explicit consent for sharing personal data with other government departments under DPDP Act 2023.
              </p>
              <div className="text-xs text-gray-500">
                Used in: Aadhaar Services, DigiLocker, India Stack
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Policy Acceptance</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Require users to read and accept privacy policies, terms of service before creating accounts.
              </p>
              <div className="text-xs text-gray-500">
                Used in: UMANG, MyGov, e-Hospital
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Payment Authorization</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Capture consent for payment processing and fee deduction with timestamp for audit purposes.
              </p>
              <div className="text-xs text-gray-500">
                Used in: Online Fee Payment, Tax Payment, Challan Payment
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Accessibility</h2>
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">WCAG 2.1 AA Compliance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    <span>Required attribute on checkbox for form validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    <span>Clear label associated with checkbox input</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    <span>Keyboard accessible - Space to toggle checkbox</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    <span>Minimum 44x44px touch target for mobile</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Screen Reader Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    <span>Checkbox state announced (checked/unchecked)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    <span>Required status communicated to screen readers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    <span>Timestamp updates announced via aria-live</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5" />
                    <span>Document links properly labeled</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Components & Patterns</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/components/checkbox" className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors">
              <div className="font-semibold text-foreground mb-1">Checkbox</div>
              <div className="text-sm text-muted-foreground">Base component used</div>
            </Link>
            <Link to="/components/modal" className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors">
              <div className="font-semibold text-foreground mb-1">Modal</div>
              <div className="text-sm text-muted-foreground">For document preview</div>
            </Link>
            <Link to="/patterns/application-submission" className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors">
              <div className="font-semibold text-foreground mb-1">Application Submission</div>
              <div className="text-sm text-muted-foreground">Uses this pattern</div>
            </Link>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Installation</h2>
          <div className="bg-gray-900 rounded-xl p-6">
            <pre className="text-sm text-gray-100">
              <code>{`# Install UX4G Patterns
npm install @ux4g/patterns

# Or with yarn
yarn add @ux4g/patterns

# Import the pattern
import { ConsentCapture } from '@ux4g/patterns';`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
