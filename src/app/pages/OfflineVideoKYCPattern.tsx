import { useState } from "react";
import { Link } from "react-router";
import {  Video, Upload, CheckCircle, AlertCircle, Clock, FileText, Shield, Camera, ArrowRight, Download, Copy, Check } from "lucide-react";

export default function OfflineVideoKYCPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/identity" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Identity & Access Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-border rounded flex items-center justify-center">
                  <Upload size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Identity Verification Pattern</div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Offline Video KYC Pattern</h1>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Enable users to complete video-based identity verification by recording and uploading 
                a verification video at their convenience. The video is reviewed asynchronously by 
                verification agents, making it suitable for areas with poor connectivity.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">Medium</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-50 dark:bg-blue-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Type: <span className="font-bold text-foreground">Asynchronous</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-50 dark:bg-purple-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Priority: <span className="font-bold text-foreground">High</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-purple-100 border-2 border-purple-300 rounded text-purple-800 font-bold text-sm text-center">
                ASYNC VERIFICATION
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="col-span-9 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                Pattern Overview
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                <p className="text-muted-foreground mb-6">
                  Offline Video KYC allows users to record their identity verification video at their own 
                  pace and upload it when convenient. This pattern is particularly useful for users in 
                  areas with unreliable internet connectivity or those who prefer to complete verification 
                  without time pressure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle size={20} className="text-green-600" />
                      When to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Poor or intermittent internet connectivity</li>
                      <li>• User prefers to record at their own pace</li>
                      <li>• High volume of verification requests</li>
                      <li>• 24/7 submission without agent availability</li>
                      <li>• Users need multiple attempts to record</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle size={20} className="text-red-600" />
                      When Not to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Immediate verification required</li>
                      <li>• Complex verification with agent guidance</li>
                      <li>• High-risk transactions needing live checks</li>
                      <li>• Real-time fraud detection required</li>
                      <li>• User needs assistance during recording</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Journey */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                User Journey
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Pre-Recording Guidance",
                    description: "User receives clear instructions on what to record, how to position camera, and what documents to show",
                    icon: <FileText size={24} className="text-blue-600" />
                  },
                  {
                    step: 2,
                    title: "Environment Check",
                    description: "System checks camera access, lighting conditions, and provides tips for optimal recording quality",
                    icon: <Camera size={24} className="text-green-600" />
                  },
                  {
                    step: 3,
                    title: "Video Recording",
                    description: "User records verification video following on-screen prompts (show face, documents, speak verification text)",
                    icon: <Video size={24} className="text-purple-600" />
                  },
                  {
                    step: 4,
                    title: "Review & Re-record",
                    description: "User can preview the recorded video and re-record if not satisfied with quality or completeness",
                    icon: <CheckCircle size={24} className="text-orange-600" />
                  },
                  {
                    step: 5,
                    title: "Upload Video",
                    description: "Video is uploaded to secure server with progress indicator and retry mechanism for failed uploads",
                    icon: <Upload size={24} className="text-indigo-600" />
                  },
                  {
                    step: 6,
                    title: "Verification Queue",
                    description: "User receives confirmation and estimated verification time. Video enters agent review queue",
                    icon: <Clock size={24} className="text-teal-600" />
                  },
                  {
                    step: 7,
                    title: "Status Tracking",
                    description: "User can track verification status and receives notifications on completion or if additional info needed",
                    icon: <Shield size={24} className="text-red-600" />
                  }
                ].map((item) => (
                  <JourneyStep key={item.step} {...item} />
                ))}
              </div>
            </section>

            {/* UX Requirements */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                UX Requirements
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <RequirementCard
                  title="Clear Instructions"
                  requirements={[
                    "Show step-by-step visual guide before recording",
                    "Provide example video of correct recording",
                    "List all required documents and actions",
                    "Explain common mistakes and how to avoid them",
                    "Support for 12 Indian languages"
                  ]}
                  color="blue"
                />
                <RequirementCard
                  title="Recording Quality Checks"
                  requirements={[
                    "Detect poor lighting and suggest improvements",
                    "Check if face is clearly visible and in frame",
                    "Verify audio clarity for spoken verification",
                    "Ensure minimum video resolution (720p recommended)",
                    "Check file size is within acceptable limits (max 50MB)"
                  ]}
                  color="green"
                />
                <RequirementCard
                  title="Upload Resilience"
                  requirements={[
                    "Auto-resume interrupted uploads",
                    "Show upload progress with percentage and estimated time",
                    "Support upload retry with exponential backoff",
                    "Allow saving draft for upload later if connection fails",
                    "Compress video to reduce upload time without quality loss"
                  ]}
                  color="purple"
                />
                <RequirementCard
                  title="Status Communication"
                  requirements={[
                    "Send SMS/email confirmation on successful upload",
                    "Provide estimated verification completion time",
                    "Send real-time notifications on status changes",
                    "Allow users to check status anytime via portal",
                    "Notify if additional documents or re-recording needed"
                  ]}
                  color="orange"
                />
              </div>
            </section>

            {/* Technical Specifications */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                Technical Specifications
              </h2>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Implementation Requirements</h3>
                </div>
                <div className="p-6 space-y-6">
                  <TechSpec
                    title="Video Format"
                    specs={[
                      "Format: MP4 (H.264 codec)",
                      "Resolution: Minimum 720p (1280x720)",
                      "Frame Rate: 24-30 fps",
                      "Max Duration: 2-3 minutes",
                      "Max File Size: 50MB"
                    ]}
                  />
                  <TechSpec
                    title="Recording Requirements"
                    specs={[
                      "Camera access via MediaRecorder API",
                      "Audio recording for spoken verification",
                      "Client-side validation before upload",
                      "Video compression using ffmpeg.js or similar",
                      "Local preview before upload"
                    ]}
                  />
                  <TechSpec
                    title="Upload Mechanism"
                    specs={[
                      "Chunked upload for large files",
                      "Resumable upload with unique session ID",
                      "S3 or equivalent secure cloud storage",
                      "Encryption in transit (TLS 1.3)",
                      "Upload progress tracking with WebSockets"
                    ]}
                  />
                  <TechSpec
                    title="Security"
                    specs={[
                      "End-to-end encryption for video data",
                      "Secure token-based upload authentication",
                      "Virus scanning on uploaded files",
                      "Watermarking with timestamp and user ID",
                      "Auto-deletion after verification period (90 days)"
                    ]}
                  />
                  <TechSpec
                    title="Agent Review Portal"
                    specs={[
                      "Queue management system for agents",
                      "Video player with frame-by-frame controls",
                      "Face matching with ID documents",
                      "Liveness detection (blink, head movement)",
                      "Decision workflow with approval/rejection reasons"
                    ]}
                  />
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                Accessibility Considerations
              </h2>
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">For Users with Disabilities</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Screen reader support for all instructions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Alternative verification methods for camera issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Large touch targets for recording controls (48x48px)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>High contrast mode for better visibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Voice guidance option during recording</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Offline & Low Bandwidth</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Save recording locally before upload attempt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Auto-compress video for faster upload</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Resume interrupted uploads automatically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Option to upload via WiFi only to save mobile data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Offline mode to record and queue for later upload</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Code Example */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                Implementation Example
              </h2>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold text-foreground">React Component</h3>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">TypeScript</span>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-6 rounded text-sm overflow-x-auto">
{`import { useState, useRef } from 'react';
import { Upload, Video, CheckCircle } from 'lucide-react';

export function OfflineVideoKYC() {
  const [step, setStep] = useState<'instructions' | 'recording' | 'review' | 'uploading'>('instructions');
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 1280, height: 720 }, 
        audio: true 
      });
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9'
      });
      
      const chunks: Blob[] = [];
      
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setVideoBlob(blob);
        setStep('review');
      };
      
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setStep('recording');
    } catch (err) {
      console.error('Camera access denied:', err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    mediaRecorderRef.current?.stream.getTracks().forEach(track => track.stop());
  };

  const uploadVideo = async () => {
    if (!videoBlob) return;
    
    setStep('uploading');
    
    const formData = new FormData();
    formData.append('video', videoBlob, 'kyc-video.webm');
    
    const xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        setUploadProgress((e.loaded / e.total) * 100);
      }
    };
    
    xhr.onload = () => {
      if (xhr.status === 200) {
        // Upload successful
        console.log('Video uploaded successfully');
      }
    };
    
    xhr.open('POST', '/api/kyc/upload-video');
    xhr.send(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {step === 'instructions' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Video KYC Instructions</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Ensure good lighting on your face</li>
            <li>• Hold your ID document clearly visible</li>
            <li>• Speak the verification text shown on screen</li>
            <li>• Recording will be 2 minutes maximum</li>
          </ul>
          <button
            onClick={startRecording}
            className="px-6 py-3 bg-purple-600 text-white rounded font-bold"
          >
            <Video className="inline mr-2" size={20} />
            Start Recording
          </button>
        </div>
      )}
      
      {step === 'recording' && (
        <div className="space-y-6">
          <video ref={videoRef} autoPlay className="w-full rounded" />
          <button
            onClick={stopRecording}
            className="px-6 py-3 bg-red-600 text-white rounded font-bold"
          >
            Stop Recording
          </button>
        </div>
      )}
      
      {step === 'review' && videoBlob && (
        <div className="space-y-6">
          <video src={URL.createObjectURL(videoBlob)} controls className="w-full rounded" />
          <div className="flex gap-4">
            <button
              onClick={uploadVideo}
              className="px-6 py-3 bg-green-600 text-white rounded font-bold"
            >
              <Upload className="inline mr-2" size={20} />
              Upload Video
            </button>
            <button
              onClick={() => setStep('instructions')}
              className="px-6 py-3 bg-gray-300 text-foreground rounded font-bold"
            >
              Re-record
            </button>
          </div>
        </div>
      )}
      
      {step === 'uploading' && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">Uploading Video...</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600">
              {uploadProgress.toFixed(0)}%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-purple-600 h-4 rounded-full transition-all"
              style={{ width: \`\${uploadProgress}%\` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </section>

                      <OfflineVideoKYCCodeDownloads />
          </div>

          {/* Sidebar */}
          <div className="col-span-3 space-y-6">
            <QuickInfo />
            <RelatedPatterns />
            <BestPractices />
          </div>

        </div>
      </div>
    </div>
  );
}

// ==================== COMPONENTS ====================

function JourneyStep({ step, title, description, icon }: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-purple-100 border-2 border-purple-300 rounded-full flex items-center justify-center font-bold text-purple-700">
          {step}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-purple-600">{icon}</div>
          <h3 className="font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function RequirementCard({ title, requirements, color }: {
  title: string;
  requirements: string[];
  color: string;
}) {
  const colors = {
    blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-300',
    green: 'bg-green-50 dark:bg-green-950/30 border-green-300',
    purple: 'bg-purple-50 dark:bg-purple-950/30 border-purple-300',
    orange: 'bg-orange-50 dark:bg-orange-950/30 border-orange-300'
  };

  return (
    <div className={`${colors[color as keyof typeof colors]} border-2 rounded-lg p-6`}>
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {requirements.map((req, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechSpec({ title, specs }: { title: string; specs: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-foreground mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>{spec}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuickInfo() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden sticky top-24">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Info</h3>
      </div>
      <div className="p-4 space-y-4 text-sm">
        <div>
          <div className="text-muted-foreground mb-1">Verification Time</div>
          <div className="font-bold text-foreground">24-48 hours</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Success Rate</div>
          <div className="font-bold text-foreground">85-90%</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">User Effort</div>
          <div className="font-bold text-foreground">5-10 minutes</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Compliance</div>
          <div className="font-bold text-foreground">RBI KYC Guidelines</div>
        </div>
      </div>
    </div>
  );
}

function RelatedPatterns() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/identity/online-video-kyc" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Online Video KYC</span>
        </Link>
        <Link to="/patterns/identity/aadhaar-video-kyc" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Aadhaar-based Video KYC</span>
        </Link>
        <Link to="/patterns/identity" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>All Identity Patterns</span>
        </Link>
      </div>
    </div>
  );
}

function BestPractices() {
  return (
    <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-4">
      <h3 className="font-bold text-foreground text-sm mb-3">Best Practices</h3>
      <ul className="space-y-2 text-xs text-muted-foreground">
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Provide example video before recording</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Check lighting and camera quality upfront</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Allow unlimited re-recording attempts</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Compress video automatically before upload</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Send status updates via SMS and email</span>
        </li>
      </ul>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const OFFLINEVIDEOKYC_REACT_CODE = `import React, { useState } from 'react';

export default function OfflineVideoKYCPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/offline-video-k-y-c', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Offline Video K Y C</h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
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

const OFFLINEVIDEOKYC_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-offline-video-k-y-c',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Offline Video K Y C</h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
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
export class OfflineVideoKYCComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/offline-video-k-y-c', {
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

const OFFLINEVIDEOKYC_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Offline Video K Y C — UX4G</title>
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
    <h1>Offline Video K Y C</h1>
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
        const res = await fetch('/api/offline-video-k-y-c', {
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

function OfflineVideoKYCCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: OFFLINEVIDEOKYC_REACT_CODE, filename: 'OfflineVideoKYCPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: OFFLINEVIDEOKYC_ANGULAR_CODE, filename: 'offline-video-k-y-c.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: OFFLINEVIDEOKYC_HTML_CODE, filename: 'offline-video-k-y-c.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Offline Video K Y C implementations.</p>
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
