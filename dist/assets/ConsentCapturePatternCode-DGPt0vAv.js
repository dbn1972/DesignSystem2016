import{j as e,L as i,d as r,r as l,F as m,E as h,D as g,b as p}from"./index-wYwTiNL-.js";import{C as o}from"./chevron-right-D7hQKSZL.js";import{A as b}from"./arrow-left-C9iPmAwZ.js";import{S as u}from"./square-check-big-CcZP6arI.js";import{C as x}from"./clock-EAoSm68N.js";import{D as y}from"./database-DADY6PPt.js";function j(){const[s,n]=l.useState(!1),[t,a]=l.useState(""),d=c=>{n(c),a(c?new Date().toISOString():"")};return e.jsxs("div",{className:"max-w-2xl mx-auto p-6 bg-white border-2 border-gray-300 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-4",children:"Terms and Conditions"}),e.jsxs("div",{className:"bg-gray-50 border border-gray-300 rounded p-4 mb-4 max-h-64 overflow-y-auto",children:[e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:"I hereby declare that all the information provided by me is true and correct to the best of my knowledge and belief."}),e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:"I understand that any false information may lead to rejection of my application or cancellation of services."}),e.jsx("p",{className:"text-sm text-gray-700",children:"I consent to the collection, storage, and processing of my personal data for the purpose of this application."})]}),e.jsx("div",{className:"mb-4",children:e.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:c=>d(c.target.checked),className:"w-5 h-5 mt-0.5 border-2 border-gray-300 rounded text-[#000080] focus:ring-2 focus:ring-[#000080]"}),e.jsx("span",{className:"text-sm text-gray-700",children:"I have read and agree to the terms and conditions"})]})}),t&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500 mb-4",children:[e.jsx(x,{size:14}),e.jsxs("span",{children:["Agreed on: ",new Date(t).toLocaleString()]})]}),e.jsx("button",{disabled:!s,className:"px-6 py-3 rounded-lg font-semibold transition-colors "+(s?"bg-[#000080] text-white hover:bg-[#000060]":"bg-gray-300 text-gray-500 cursor-not-allowed"),children:"Continue"})]})}function N(){const[s,n]=l.useState({terms:!1,privacy:!1,data:!1}),t=s.terms&&s.privacy&&s.data;return e.jsxs("div",{className:"max-w-2xl mx-auto p-6 bg-white border-2 border-gray-300 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-4",children:"Required Consents"}),e.jsxs("div",{className:"space-y-3 mb-6",children:[e.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-50",children:[e.jsx("input",{type:"checkbox",checked:s.terms,onChange:a=>n({...s,terms:a.target.checked}),className:"w-5 h-5 mt-0.5 border-2 border-gray-300 rounded text-[#000080] focus:ring-2 focus:ring-[#000080]"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-gray-900 mb-1",children:"Terms and Conditions"}),e.jsx("div",{className:"text-xs text-gray-600",children:"I agree to the terms of service"})]})]}),e.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-50",children:[e.jsx("input",{type:"checkbox",checked:s.privacy,onChange:a=>n({...s,privacy:a.target.checked}),className:"w-5 h-5 mt-0.5 border-2 border-gray-300 rounded text-[#000080] focus:ring-2 focus:ring-[#000080]"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-gray-900 mb-1",children:"Privacy Policy"}),e.jsx("div",{className:"text-xs text-gray-600",children:"I have read the privacy policy"})]})]}),e.jsxs("label",{className:"flex items-start gap-3 p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-50",children:[e.jsx("input",{type:"checkbox",checked:s.data,onChange:a=>n({...s,data:a.target.checked}),className:"w-5 h-5 mt-0.5 border-2 border-gray-300 rounded text-[#000080] focus:ring-2 focus:ring-[#000080]"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-gray-900 mb-1",children:"Data Sharing Consent"}),e.jsx("div",{className:"text-xs text-gray-600",children:"I consent to data sharing with government agencies"})]})]})]}),e.jsx("button",{disabled:!t,className:"px-6 py-3 rounded-lg font-semibold transition-colors w-full "+(t?"bg-[#000080] text-white hover:bg-[#000060]":"bg-gray-300 text-gray-500 cursor-not-allowed"),children:"Submit Application"})]})}function f(){const[s,n]=l.useState(!1),[t,a]=l.useState(!1);return e.jsxs("div",{className:"max-w-2xl mx-auto p-6 bg-white border-2 border-gray-300 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-4",children:"Document Consent"}),e.jsxs("div",{className:"bg-gray-50 border border-gray-300 rounded p-4 mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{className:"text-[#000080]",size:20}),e.jsx("span",{className:"text-sm font-semibold text-gray-900",children:"Terms_and_Conditions.pdf"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>a(!0),className:"px-3 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1",children:[e.jsx(h,{size:14}),"View"]}),e.jsxs("button",{className:"px-3 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1",children:[e.jsx(g,{size:14}),"Download"]})]})]}),t&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-green-700 bg-green-50 p-2 rounded",children:[e.jsx(r,{size:14}),"Document viewed on ",new Date().toLocaleString()]})]}),e.jsx("div",{className:"mb-4",children:e.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:d=>n(d.target.checked),disabled:!t,className:"w-5 h-5 mt-0.5 border-2 border-gray-300 rounded text-[#000080] focus:ring-2 focus:ring-[#000080] disabled:opacity-50"}),e.jsx("span",{className:"text-sm "+(t?"text-gray-700":"text-gray-400"),children:"I have read and understood the document and agree to its terms"})]})}),!t&&e.jsxs("div",{className:"flex items-start gap-2 text-xs text-amber-700 bg-amber-50 p-3 rounded mb-4",children:[e.jsx(p,{size:14,className:"mt-0.5"}),e.jsx("span",{children:"Please view the document before agreeing"})]}),e.jsx("button",{disabled:!s,className:"px-6 py-3 rounded-lg font-semibold transition-colors "+(s?"bg-[#000080] text-white hover:bg-[#000060]":"bg-gray-300 text-gray-500 cursor-not-allowed"),children:"Submit"})]})}function P(){return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx("header",{className:"bg-gradient-to-br from-[#000080] to-[#000050] text-white py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(i,{to:"/patterns",className:"text-blue-200 hover:text-white transition-colors",children:"Patterns"}),e.jsx(o,{size:20,className:"text-blue-300"}),e.jsx(i,{to:"/patterns/consent",className:"text-blue-200 hover:text-white transition-colors",children:"Consent & Declaration"}),e.jsx(o,{size:20,className:"text-blue-300"}),e.jsx(i,{to:"/patterns/consent/consent-capture",className:"text-blue-200 hover:text-white transition-colors",children:"Consent Capture"}),e.jsx(o,{size:20,className:"text-blue-300"}),e.jsx("span",{className:"font-semibold",children:"Code Implementation"})]}),e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Consent Capture Pattern"}),e.jsx("p",{className:"text-xl text-blue-100 max-w-3xl",children:"Capture explicit user consent for terms, conditions, privacy policies, and data processing with timestamp tracking and document verification."}),e.jsxs("div",{className:"flex items-center gap-6 mt-6",children:[e.jsx("div",{className:"px-4 py-2 bg-green-600 rounded-full text-sm font-semibold",children:"Production Ready"}),e.jsx("div",{className:"text-sm text-blue-200",children:"Pattern ID: UX4G-PAT-CONSENT-001"}),e.jsx("div",{className:"text-sm text-blue-200",children:"Version: 1.0.0"})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs(i,{to:"/patterns/consent/consent-capture",className:"inline-flex items-center gap-2 text-[#000080] hover:text-[#000060] font-semibold mb-8 transition-colors",children:[e.jsx(b,{size:20}),"Back to Pattern Overview"]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Overview"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4",children:e.jsx(u,{className:"text-[#000080]",size:24})}),e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"When to Use"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• Application submissions"}),e.jsx("li",{children:"• Account registration"}),e.jsx("li",{children:"• Data processing consent"}),e.jsx("li",{children:"• Policy acceptance"})]})]}),e.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4",children:e.jsx(x,{className:"text-[#138808]",size:24})}),e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Key Features"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• Timestamp tracking"}),e.jsx("li",{children:"• Document preview"}),e.jsx("li",{children:"• Multiple consents"}),e.jsx("li",{children:"• Required validation"})]})]}),e.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[e.jsx("div",{className:"w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4",children:e.jsx(y,{className:"text-purple-600",size:24})}),e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Compliance"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• GDPR compliant"}),e.jsx("li",{children:"• DPDP Act 2023"}),e.jsx("li",{children:"• Audit trail ready"}),e.jsx("li",{children:"• Withdrawal support"})]})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Live Examples"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Basic Consent with Timestamp"}),e.jsx("div",{className:"bg-gray-100 p-6 rounded-lg",children:e.jsx(j,{})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Multiple Required Consents"}),e.jsx("div",{className:"bg-gray-100 p-6 rounded-lg",children:e.jsx(N,{})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"With Document Preview Required"}),e.jsx("div",{className:"bg-gray-100 p-6 rounded-lg",children:e.jsx(f,{})})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Props & Configuration"}),e.jsx("div",{className:"bg-white rounded-xl border border-gray-200 overflow-hidden",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Prop"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Type"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Default"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Description"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm font-mono text-gray-900",children:"content"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"string | ReactNode"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"-"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Consent text or document content"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm font-mono text-gray-900",children:"onAgree"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"(timestamp: string) => void"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"-"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Callback when user agrees"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm font-mono text-gray-900",children:"required"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"boolean"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"true"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Whether consent is required to proceed"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm font-mono text-gray-900",children:"documentUrl"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"string"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"-"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"URL to downloadable document"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm font-mono text-gray-900",children:"requireView"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"boolean"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"false"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Require document view before agreeing"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm font-mono text-gray-900",children:"trackTimestamp"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"boolean"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"true"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Track and display agreement timestamp"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 text-sm font-mono text-gray-900",children:"label"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"string"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"I agree to terms"}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"Checkbox label text"})]})]})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"React Implementation"}),e.jsx("div",{className:"bg-gray-900 rounded-xl p-6 overflow-x-auto",children:e.jsx("pre",{className:"text-sm text-gray-100",children:e.jsx("code",{children:`import React, { useState } from 'react';
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
      <div className="bg-gray-50 border border-gray-300 rounded p-4 max-h-64 overflow-y-auto">
        {typeof content === 'string' ? (
          <p className="text-sm text-gray-700">{content}</p>
        ) : (
          content
        )}
      </div>

      {/* Document Actions */}
      {documentUrl && (
        <div className="flex items-center gap-2">
          <button
            onClick={handleViewDocument}
            className="px-3 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-2"
          >
            <Eye size={16} />
            View Document
          </button>
          <a
            href={documentUrl}
            download
            className="px-3 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-2"
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
          className="w-5 h-5 mt-0.5 border-2 border-gray-300 rounded"
        />
        <span className="text-sm text-gray-700">{label}</span>
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
}`})})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Government Service Use Cases"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Application Submission"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Capture declaration that all information provided is true and accurate before submitting license or permit applications."}),e.jsx("div",{className:"text-xs text-gray-500",children:"Used in: Driving License, Passport, Business Registration"})]}),e.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Data Sharing Consent"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Obtain explicit consent for sharing personal data with other government departments under DPDP Act 2023."}),e.jsx("div",{className:"text-xs text-gray-500",children:"Used in: Aadhaar Services, DigiLocker, India Stack"})]}),e.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Policy Acceptance"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Require users to read and accept privacy policies, terms of service before creating accounts."}),e.jsx("div",{className:"text-xs text-gray-500",children:"Used in: UMANG, MyGov, e-Hospital"})]}),e.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Payment Authorization"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Capture consent for payment processing and fee deduction with timestamp for audit purposes."}),e.jsx("div",{className:"text-xs text-gray-500",children:"Used in: Online Fee Payment, Tax Payment, Challan Payment"})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Accessibility"}),e.jsx("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"WCAG 2.1 AA Compliance"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-600",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(r,{size:16,className:"text-green-600 mt-0.5"}),e.jsx("span",{children:"Required attribute on checkbox for form validation"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(r,{size:16,className:"text-green-600 mt-0.5"}),e.jsx("span",{children:"Clear label associated with checkbox input"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(r,{size:16,className:"text-green-600 mt-0.5"}),e.jsx("span",{children:"Keyboard accessible - Space to toggle checkbox"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(r,{size:16,className:"text-green-600 mt-0.5"}),e.jsx("span",{children:"Minimum 44x44px touch target for mobile"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Screen Reader Support"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-600",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(r,{size:16,className:"text-green-600 mt-0.5"}),e.jsx("span",{children:"Checkbox state announced (checked/unchecked)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(r,{size:16,className:"text-green-600 mt-0.5"}),e.jsx("span",{children:"Required status communicated to screen readers"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(r,{size:16,className:"text-green-600 mt-0.5"}),e.jsx("span",{children:"Timestamp updates announced via aria-live"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(r,{size:16,className:"text-green-600 mt-0.5"}),e.jsx("span",{children:"Document links properly labeled"})]})]})]})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Related Components & Patterns"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs(i,{to:"/components/checkbox",className:"bg-white rounded-lg p-4 border border-gray-200 hover:border-[#000080] transition-colors",children:[e.jsx("div",{className:"font-semibold text-gray-900 mb-1",children:"Checkbox"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Base component used"})]}),e.jsxs(i,{to:"/components/modal",className:"bg-white rounded-lg p-4 border border-gray-200 hover:border-[#000080] transition-colors",children:[e.jsx("div",{className:"font-semibold text-gray-900 mb-1",children:"Modal"}),e.jsx("div",{className:"text-sm text-gray-600",children:"For document preview"})]}),e.jsxs(i,{to:"/patterns/application-submission",className:"bg-white rounded-lg p-4 border border-gray-200 hover:border-[#000080] transition-colors",children:[e.jsx("div",{className:"font-semibold text-gray-900 mb-1",children:"Application Submission"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Uses this pattern"})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Installation"}),e.jsx("div",{className:"bg-gray-900 rounded-xl p-6",children:e.jsx("pre",{className:"text-sm text-gray-100",children:e.jsx("code",{children:`# Install UX4G Patterns
npm install @ux4g/patterns

# Or with yarn
yarn add @ux4g/patterns

# Import the pattern
import { ConsentCapture } from '@ux4g/patterns';`})})})]})]})]})}export{P as default};
