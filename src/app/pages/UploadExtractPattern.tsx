import { useState } from "react";
import { Link } from "react-router";
import {  FileText, ArrowLeft, Upload, CheckCircle, AlertTriangle, Eye, Download, Copy, Check } from "lucide-react";

export default function UploadExtractPattern() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [extracting, setExtracting] = useState(false);
  const [extracted, setExtracted] = useState(false);
  const [extractedData, setExtractedData] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setExtracted(false);
      setExtractedData(null);
    }
  };

  const handleExtract = () => {
    setExtracting(true);

    // Simulate OCR extraction
    setTimeout(() => {
      setExtractedData({
        name: "Rajesh Kumar Sharma",
        fatherName: "Mohan Lal Sharma",
        dob: "15-08-1990",
        address: "123, MG Road, Bangalore - 560001",
        panNumber: "ABCDE1234F",
        confidence: {
          name: 98,
          fatherName: 95,
          dob: 99,
          address: 87,
          panNumber: 96
        }
      });
      setExtracting(false);
      setExtracted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/data-input" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Data Input Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <FileText size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Data Input Pattern</div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Upload → Auto-Extract</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Use OCR (Optical Character Recognition) to automatically extract text from uploaded documents
              like PAN cards, Aadhaar, certificates, and auto-fill form fields.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Upload a document (simulated) to see automatic data extraction and form population.
              </p>
            </div>

            {/* Upload Section */}
            {!uploadedFile && (
              <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="font-bold text-foreground mb-4">Upload Document for Auto-extraction</h3>

                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-all">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload size={48} className="mx-auto mb-4 text-muted-foreground" />
                    <div className="font-bold text-foreground mb-2">
                      Click to upload or drag and drop
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Supports: PAN Card, Aadhaar, Certificates, Bills (PDF, JPG, PNG)
                    </div>
                  </label>
                </div>

                <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="font-bold text-foreground mb-2">Supported Documents:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>• PAN Card</div>
                    <div>• Aadhaar Card</div>
                    <div>• Driving License</div>
                    <div>• Voter ID</div>
                    <div>• Education Certificates</div>
                    <div>• Income Certificates</div>
                    <div>• Utility Bills</div>
                    <div>• Bank Statements</div>
                  </div>
                </div>
              </div>
            )}

            {/* Extraction in Progress */}
            {uploadedFile && !extracted && (
              <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{uploadedFile.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {(uploadedFile.size / 1024).toFixed(1)} KB
                    </div>
                  </div>
                  <button
                    onClick={() => setUploadedFile(null)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>

                {!extracting ? (
                  <>
                    <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-muted-foreground">
                          <strong>Ready to extract:</strong> Click below to automatically extract data from
                          your document. Extracted data will populate the form fields below.
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleExtract}
                      className="w-full px-6 py-4 bg-primary text-white rounded font-bold hover:opacity-90 flex items-center justify-center gap-2"
                    >
                      <FileText size={20} />
                      Extract Data from Document
                    </button>
                  </>
                ) : (
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <div className="font-bold text-foreground mb-2">Extracting Data...</div>
                    <div className="text-sm text-muted-foreground">
                      Using OCR to read document content. This may take a few seconds.
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Extracted Data */}
            {extracted && extractedData && (
              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-foreground">Data Extracted Successfully</div>
                    <div className="text-sm text-muted-foreground">
                      Review the auto-filled fields below. Edit any incorrect values before proceeding.
                    </div>
                  </div>
                </div>

                <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-foreground">Auto-filled Information</h3>
                    <button
                      onClick={() => setShowPreview(!showPreview)}
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <Eye size={14} />
                      {showPreview ? "Hide" : "View"} Original Document
                    </button>
                  </div>

                  {showPreview && (
                    <div className="mb-6 border-2 border-border rounded-lg p-4 bg-background">
                      <div className="text-sm text-muted-foreground mb-2">Preview: {uploadedFile?.name}</div>
                      <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded h-48 flex items-center justify-center text-muted-foreground">
                        [Document Preview Placeholder]
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block font-bold text-foreground mb-2 flex items-center justify-between">
                        <span>Full Name <span className="text-red-600">*</span></span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          extractedData.confidence.name >= 95 ? "bg-green-100 text-green-700" :
                          extractedData.confidence.name >= 85 ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {extractedData.confidence.name}% confident
                        </span>
                      </label>
                      <input
                        type="text"
                        value={extractedData.name}
                        onChange={(e) => setExtractedData({...extractedData, name: e.target.value})}
                        className={`w-full px-4 py-3 border-2 rounded ${
                          extractedData.confidence.name >= 95 ? "border-green-500 bg-green-50" :
                          extractedData.confidence.name >= 85 ? "border-yellow-500 bg-yellow-50" :
                          "border-red-500 bg-red-50"
                        }`}
                      />
                    </div>

                    {/* Father's Name */}
                    <div>
                      <label className="block font-bold text-foreground mb-2 flex items-center justify-between">
                        <span>Father's Name</span>
                        <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:text-green-400">
                          {extractedData.confidence.fatherName}% confident
                        </span>
                      </label>
                      <input
                        type="text"
                        value={extractedData.fatherName}
                        onChange={(e) => setExtractedData({...extractedData, fatherName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                      />
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* DOB */}
                      <div>
                        <label className="block font-bold text-foreground mb-2 flex items-center justify-between">
                          <span>Date of Birth</span>
                          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:text-green-400">
                            {extractedData.confidence.dob}%
                          </span>
                        </label>
                        <input
                          type="text"
                          value={extractedData.dob}
                          onChange={(e) => setExtractedData({...extractedData, dob: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                        />
                      </div>

                      {/* PAN */}
                      <div>
                        <label className="block font-bold text-foreground mb-2 flex items-center justify-between">
                          <span>PAN Number</span>
                          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:text-green-400">
                            {extractedData.confidence.panNumber}%
                          </span>
                        </label>
                        <input
                          type="text"
                          value={extractedData.panNumber}
                          onChange={(e) => setExtractedData({...extractedData, panNumber: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block font-bold text-foreground mb-2 flex items-center justify-between">
                        <span>Address</span>
                        <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700">
                          {extractedData.confidence.address}% confident
                        </span>
                      </label>
                      <textarea
                        value={extractedData.address}
                        onChange={(e) => setExtractedData({...extractedData, address: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30 rounded"
                        rows={3}
                      ></textarea>
                      <div className="text-xs text-yellow-700 mt-1">
                        ⚠ Lower confidence - please verify this field carefully
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t-2 border-border flex gap-3">
                    <button className="flex-1 px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90">
                      Confirm & Continue
                    </button>
                    <button
                      onClick={() => {
                        setUploadedFile(null);
                        setExtracted(false);
                        setExtractedData(null);
                      }}
                      className="px-6 py-3 border-2 border-border rounded font-bold hover:bg-background"
                    >
                      Upload Different Document
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Implementation Guide */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">OCR Technologies</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-bold text-foreground mb-2">1. Google Cloud Vision API</h3>
                      <p className="text-muted-foreground mb-2">
                        Excellent for Indian languages, high accuracy for printed text, supports 50+ languages.
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>✓ Multi-language</span>
                        <span>✓ High accuracy</span>
                        <span>⚠ Paid service</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-2">2. AWS Textract</h3>
                      <p className="text-muted-foreground mb-2">
                        Advanced form/table extraction, good for structured documents like certificates.
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>✓ Form extraction</span>
                        <span>✓ Table detection</span>
                        <span>⚠ English focused</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-2">3. Tesseract OCR</h3>
                      <p className="text-muted-foreground mb-2">
                        Open-source, supports Indian scripts, can be self-hosted for privacy.
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>✓ Free & open-source</span>
                        <span>✓ Self-hosted</span>
                        <span>⚠ Lower accuracy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. Show Confidence Scores</h3>
                    <p className="text-muted-foreground">
                      Display OCR confidence level for each field. Flag low-confidence fields (&lt;85%) for user review.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Always Allow Editing</h3>
                    <p className="text-muted-foreground">
                      Never lock extracted fields. OCR is not 100% accurate - users must be able to correct errors.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Validate After Extraction</h3>
                    <p className="text-muted-foreground">
                      Run validation on extracted data (PAN format, date validation, etc.) before populating form.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Provide Document Preview</h3>
                    <p className="text-muted-foreground">
                      Let users view the original document while reviewing extracted data for easy verification.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">5. Handle Poor Quality Images</h3>
                    <p className="text-muted-foreground">
                      Detect blurry/dark images and prompt for re-upload before attempting extraction.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Privacy & Security</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-2 text-sm text-muted-foreground">
                  <p>• Delete uploaded documents after extraction (or within 24 hours max)</p>
                  <p>• Encrypt documents during transmission and storage</p>
                  <p>• Use server-side OCR, never send documents to third-party APIs for sensitive data</p>
                  <p>• Log extraction events for audit trail</p>
                  <p>• Obtain user consent before processing identity documents</p>
                </div>
              </section>
            </div>
                      <UploadExtractCodeDownloads />
          </div>

          <div className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">High</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Time Saved</div>
                    <div className="font-bold">~2-3 minutes per form</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Accuracy</div>
                    <div className="font-bold">85-95% (varies by quality)</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Technology</div>
                    <div className="font-bold">OCR, ML, Computer Vision</div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Identity document upload</li>
                  <li>✓ Certificate submission</li>
                  <li>✓ Bill/invoice processing</li>
                  <li>✓ Bank statement upload</li>
                  <li>✓ Education document verification</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Impact Metrics</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">-65%</div>
                    <div className="text-xs text-muted-foreground">Data entry time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">-80%</div>
                    <div className="text-xs text-muted-foreground">Typing errors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">+40%</div>
                    <div className="text-xs text-muted-foreground">Form completion rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/data-input/autofill" className="block text-sm text-primary hover:underline">
                    → Auto-fill (Aadhaar/DigiLocker)
                  </Link>
                  <Link to="/patterns/file-upload" className="block text-sm text-primary hover:underline">
                    → File Upload Patterns
                  </Link>
                  <Link to="/patterns/form-validation" className="block text-sm text-primary hover:underline">
                    → Form Validation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const UPLOADEXTRACT_REACT_CODE = `import React, { useState } from 'react';

export default function UploadExtractPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/upload-extract', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Upload Extract</h1>
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

const UPLOADEXTRACT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-upload-extract',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Upload Extract</h1>
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
export class UploadExtractComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/upload-extract', {
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

const UPLOADEXTRACT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Upload Extract — UX4G</title>
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
    <h1>Upload Extract</h1>
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
        const res = await fetch('/api/upload-extract', {
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

function UploadExtractCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: UPLOADEXTRACT_REACT_CODE, filename: 'UploadExtractPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: UPLOADEXTRACT_ANGULAR_CODE, filename: 'upload-extract.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: UPLOADEXTRACT_HTML_CODE, filename: 'upload-extract.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Upload Extract implementations.</p>
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
