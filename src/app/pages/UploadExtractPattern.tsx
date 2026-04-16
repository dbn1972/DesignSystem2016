import { useState } from "react";
import { Link } from "react-router";
import { FileText, ArrowLeft, Upload, CheckCircle, AlertTriangle, Eye } from "lucide-react";

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
        <div className="max-w-[1400px] mx-auto px-12 py-16">
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
                <h1 className="text-5xl font-bold text-foreground">Upload → Auto-Extract</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Use OCR (Optical Character Recognition) to automatically extract text from uploaded documents
              like PAN cards, Aadhaar, certificates, and auto-fill form fields.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
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
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <h3 className="font-bold text-foreground mb-4">Upload Document for Auto-extraction</h3>

                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary hover:bg-blue-50 transition-all">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload size={48} className="mx-auto mb-4 text-gray-400" />
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
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
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
              <div className="bg-card border-2 border-border rounded-lg p-8">
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

                <div className="bg-card border-2 border-border rounded-lg p-8">
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
                        <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
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
                    <div className="grid grid-cols-2 gap-6">
                      {/* DOB */}
                      <div>
                        <label className="block font-bold text-foreground mb-2 flex items-center justify-between">
                          <span>Date of Birth</span>
                          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
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
                          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
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
          </div>

          <aside className="col-span-4">
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
          </aside>
        </div>
      </main>
    </div>
  );
}
