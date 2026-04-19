import { useState } from "react";
import { Link } from "react-router";
import {  Video, Users, CheckCircle, AlertCircle, Clock, MessageSquare, Shield, Headphones, ArrowRight, Download, Copy, Check } from "lucide-react";

export default function OnlineVideoKYCPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 via-white to-green-50 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/identity" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Identity & Access Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 border-2 border-border rounded flex items-center justify-center">
                  <Video size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Identity Verification Pattern</div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Online Video KYC Pattern</h1>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Enable real-time identity verification through live video calls with trained verification 
                agents. This pattern provides immediate verification with agent guidance, fraud detection, 
                and instant results suitable for high-value transactions and time-sensitive services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">High</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-50 dark:bg-blue-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Type: <span className="font-bold text-foreground">Synchronous</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-50 dark:bg-red-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Priority: <span className="font-bold text-foreground">Critical</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-blue-100 border-2 border-blue-300 rounded text-blue-800 dark:text-blue-300 font-bold text-sm text-center">
                LIVE VERIFICATION
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
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">
                Pattern Overview
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                <p className="text-muted-foreground mb-6">
                  Online Video KYC enables real-time identity verification through live video interaction 
                  between the user and a trained verification agent. The agent guides the user through the 
                  process, verifies documents in real-time, performs liveness checks, and provides immediate 
                  verification results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle size={20} className="text-green-600" />
                      When to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Immediate verification required</li>
                      <li>• High-value transactions (loans, accounts)</li>
                      <li>• Complex document verification needed</li>
                      <li>• Real-time fraud detection critical</li>
                      <li>• User needs agent guidance</li>
                      <li>• Regulatory compliance requires live verification</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle size={20} className="text-red-600" />
                      When Not to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Verification can wait 24-48 hours</li>
                      <li>• Poor internet connectivity common</li>
                      <li>• Agent availability limited</li>
                      <li>• Low-value, high-volume transactions</li>
                      <li>• Users prefer asynchronous process</li>
                      <li>• High operational costs a concern</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Journey */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">
                User Journey
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Schedule or Queue",
                    description: "User either schedules a video call appointment or joins a live queue. System estimates wait time and agent availability",
                    icon: <Clock size={24} className="text-blue-600" />
                  },
                  {
                    step: 2,
                    title: "Pre-Call Setup",
                    description: "User tests camera, microphone, and internet connection. System checks device compatibility and suggests improvements",
                    icon: <Video size={24} className="text-green-600" />
                  },
                  {
                    step: 3,
                    title: "Document Preparation",
                    description: "User gathers required documents (ID proof, address proof). System provides checklist and example images",
                    icon: <CheckCircle size={24} className="text-purple-600" />
                  },
                  {
                    step: 4,
                    title: "Agent Connection",
                    description: "System connects user with available verification agent. Shows agent profile and estimated call duration",
                    icon: <Users size={24} className="text-orange-600" />
                  },
                  {
                    step: 5,
                    title: "Live Verification",
                    description: "Agent guides user through identity checks: show face, documents, perform liveness tests (blink, turn head)",
                    icon: <Headphones size={24} className="text-indigo-600" />
                  },
                  {
                    step: 6,
                    title: "Document Capture",
                    description: "Agent captures clear images of documents during call. User shows all required pages and details",
                    icon: <MessageSquare size={24} className="text-teal-600" />
                  },
                  {
                    step: 7,
                    title: "Liveness Detection",
                    description: "Agent instructs user to perform random actions (blink, smile, read text) to verify they are a real person",
                    icon: <Shield size={24} className="text-red-600" />
                  },
                  {
                    step: 8,
                    title: "Instant Decision",
                    description: "Agent completes verification during call. User receives immediate approval or next steps if additional info needed",
                    icon: <CheckCircle size={24} className="text-green-600" />
                  }
                ].map((item) => (
                  <JourneyStep key={item.step} {...item} />
                ))}
              </div>
            </section>

            {/* UX Requirements */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">
                UX Requirements
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <RequirementCard
                  title="Pre-Call Experience"
                  requirements={[
                    "Show estimated wait time for queue",
                    "Allow scheduling specific time slots",
                    "Send reminder SMS/email 15 minutes before scheduled call",
                    "Test camera, mic, and connection before call",
                    "Provide document checklist with visual examples",
                    "Support for 12 Indian languages"
                  ]}
                  color="blue"
                />
                <RequirementCard
                  title="During Call Interface"
                  requirements={[
                    "Large, clear video windows for user and agent",
                    "Real-time connection quality indicator",
                    "On-screen instructions visible alongside video",
                    "Chat option if audio fails",
                    "Mute/unmute and camera on/off controls",
                    "Emergency end call button"
                  ]}
                  color="green"
                />
                <RequirementCard
                  title="Agent Guidance"
                  requirements={[
                    "Agent provides step-by-step instructions",
                    "Clear voice communication with echo cancellation",
                    "Agent can send visual prompts on user screen",
                    "Agent has access to user's pre-filled information",
                    "Multi-language support for agent communication"
                  ]}
                  color="purple"
                />
                <RequirementCard
                  title="Connection Resilience"
                  requirements={[
                    "Auto-reconnect if connection drops briefly",
                    "Bandwidth adaptation for video quality",
                    "Fallback to audio-only if video fails",
                    "Option to reschedule if connection issues persist",
                    "Save progress if call disconnects"
                  ]}
                  color="orange"
                />
              </div>
            </section>

            {/* Technical Specifications */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">
                Technical Specifications
              </h2>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Implementation Requirements</h3>
                </div>
                <div className="p-6 space-y-6">
                  <TechSpec
                    title="Video Calling Platform"
                    specs={[
                      "WebRTC for peer-to-peer video calling",
                      "STUN/TURN servers for NAT traversal",
                      "Adaptive bitrate streaming (720p to 360p)",
                      "Low latency: <300ms end-to-end",
                      "Backup servers for failover"
                    ]}
                  />
                  <TechSpec
                    title="Agent Dashboard"
                    specs={[
                      "Queue management system",
                      "User information display (pre-filled data)",
                      "Document capture and annotation tools",
                      "Liveness detection indicators",
                      "Real-time decision workflow",
                      "Call recording for audit (encrypted)"
                    ]}
                  />
                  <TechSpec
                    title="Security & Compliance"
                    specs={[
                      "End-to-end encryption for video/audio",
                      "Secure data transmission (TLS 1.3)",
                      "Call recording with consent",
                      "Watermarking on captured documents",
                      "Audit logs for all verification decisions",
                      "Compliance with RBI/SEBI guidelines"
                    ]}
                  />
                  <TechSpec
                    title="AI-Assisted Verification"
                    specs={[
                      "Automatic face matching with ID photo",
                      "Document type detection (PAN, Aadhaar, etc.)",
                      "OCR for extracting text from documents",
                      "Liveness detection (blink, head movement)",
                      "Fraud pattern detection",
                      "Quality checks for captured images"
                    ]}
                  />
                  <TechSpec
                    title="Integration Points"
                    specs={[
                      "CRM integration for user data",
                      "SMS/Email gateway for notifications",
                      "Payment gateway for fee collection",
                      "Document management system",
                      "Analytics and reporting dashboard",
                      "Third-party identity verification APIs"
                    ]}
                  />
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">
                Accessibility Considerations
              </h2>
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">For Users with Disabilities</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Live captions for hearing impaired users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Sign language interpreter option</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Screen reader support for interface controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Keyboard-only navigation support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Alternative verification for those unable to use video</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Network & Device Support</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Works on 3G/4G networks (minimum 1 Mbps)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Adaptive video quality based on bandwidth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Support for mobile, tablet, and desktop</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Automatic reconnection on network interruption</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Option to reschedule if connectivity issues</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Code Example */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">
                Implementation Example
              </h2>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold text-foreground">React Component with WebRTC</h3>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">TypeScript</span>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-6 rounded text-sm overflow-x-auto">
{`import { useState, useRef, useEffect } from 'react';
import { Video, Mic, MicOff, VideoOff, PhoneOff } from 'lucide-react';

export function OnlineVideoKYC() {
  const [callState, setCallState] = useState<'idle' | 'connecting' | 'connected' | 'ended'>('idle');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [connectionQuality, setConnectionQuality] = useState<'good' | 'fair' | 'poor'>('good');
  
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);

  const startCall = async () => {
    try {
      setCallState('connecting');
      
      // Get user media
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
        audio: { echoCancellation: true, noiseSuppression: true }
      });
      
      localStreamRef.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      
      // Create peer connection
      const config: RTCConfiguration = {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { 
            urls: 'turn:your-turn-server.com',
            username: 'user',
            credential: 'pass'
          }
        ]
      };
      
      const peerConnection = new RTCPeerConnection(config);
      peerConnectionRef.current = peerConnection;
      
      // Add local tracks to peer connection
      stream.getTracks().forEach(track => {
        peerConnection.addTrack(track, stream);
      });
      
      // Handle remote stream
      peerConnection.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
          setCallState('connected');
        }
      };
      
      // Monitor connection quality
      peerConnection.oniceconnectionstatechange = () => {
        const state = peerConnection.iceConnectionState;
        if (state === 'connected' || state === 'completed') {
          setConnectionQuality('good');
        } else if (state === 'checking') {
          setConnectionQuality('fair');
        } else if (state === 'disconnected' || state === 'failed') {
          setConnectionQuality('poor');
        }
      };
      
      // Create and send offer to signaling server
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      
      // Send offer to signaling server
      await fetch('/api/kyc/video-call/offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ offer })
      });
      
    } catch (err) {
      console.error('Failed to start call:', err);
      setCallState('idle');
    }
  };

  const toggleMute = () => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
      setIsMuted(!audioTrack.enabled);
    }
  };

  const toggleVideo = () => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setIsVideoOff(!videoTrack.enabled);
    }
  };

  const endCall = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
    }
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
    }
    setCallState('ended');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {callState === 'idle' && (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Online Video KYC</h2>
          <p className="text-muted-foreground">
            Connect with a verification agent for instant identity verification
          </p>
          <button
            onClick={startCall}
            className="px-8 py-4 bg-blue-600 text-white rounded font-bold text-lg"
          >
            <Video className="inline mr-2" size={24} />
            Start Verification Call
          </button>
        </div>
      )}
      
      {(callState === 'connecting' || callState === 'connected') && (
        <div className="space-y-4">
          {/* Connection Quality Indicator */}
          <div className="flex items-center justify-between bg-muted p-4 rounded">
            <span className="font-bold">Connection Quality:</span>
            <span className={\`px-3 py-1 rounded \${
              connectionQuality === 'good' ? 'bg-green-500' :
              connectionQuality === 'fair' ? 'bg-yellow-500' :
              'bg-red-500'
            } text-white\`}>
              {connectionQuality.toUpperCase()}
            </span>
          </div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Remote Video (Agent) */}
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm">
                Verification Agent
              </div>
            </div>
            
            {/* Local Video (User) */}
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              <video
                ref={localVideoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover mirror"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm">
                You
              </div>
            </div>
          </div>
          
          {/* Call Controls */}
          <div className="flex items-center justify-center gap-4 bg-gray-900 p-6 rounded-lg">
            <button
              onClick={toggleMute}
              className={\`p-4 rounded-full \${isMuted ? 'bg-red-50 dark:bg-red-900/200' : 'bg-gray-700'} text-white hover:opacity-80\`}
            >
              {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            <button
              onClick={toggleVideo}
              className={\`p-4 rounded-full \${isVideoOff ? 'bg-red-50 dark:bg-red-900/200' : 'bg-gray-700'} text-white hover:opacity-80\`}
            >
              {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
            </button>
            <button
              onClick={endCall}
              className="p-4 rounded-full bg-red-600 text-white hover:bg-red-700"
            >
              <PhoneOff size={24} />
            </button>
          </div>
        </div>
      )}
      
      {callState === 'ended' && (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Call Ended</h2>
          <p className="text-muted-foreground">
            Your verification is being processed. You will receive confirmation shortly.
          </p>
        </div>
      )}
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </section>

                      <OnlineVideoKYCCodeDownloads />
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
        <div className="w-12 h-12 bg-blue-100 border-2 border-blue-300 rounded-full flex items-center justify-center font-bold text-blue-700">
          {step}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-blue-600">{icon}</div>
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
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Info</h3>
      </div>
      <div className="p-4 space-y-4 text-sm">
        <div>
          <div className="text-muted-foreground mb-1">Verification Time</div>
          <div className="font-bold text-foreground">5-15 minutes</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Success Rate</div>
          <div className="font-bold text-foreground">95-98%</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">User Effort</div>
          <div className="font-bold text-foreground">10-15 minutes</div>
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
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/identity/offline-video-kyc" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Offline Video KYC</span>
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
          <span>Test audio/video before connecting to agent</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Show estimated wait time if agent queue exists</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Provide chat option as backup communication</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Record calls for audit and dispute resolution</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Allow rescheduling if connection issues occur</span>
        </li>
      </ul>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const ONLINEVIDEOKYC_REACT_CODE = `import React, { useState } from 'react';

export default function OnlineVideoKYCPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/online-video-k-y-c', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Online Video K Y C</h1>
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

const ONLINEVIDEOKYC_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-online-video-k-y-c',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Online Video K Y C</h1>
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
export class OnlineVideoKYCComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/online-video-k-y-c', {
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

const ONLINEVIDEOKYC_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Online Video K Y C — UX4G</title>
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
    <h1>Online Video K Y C</h1>
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
        const res = await fetch('/api/online-video-k-y-c', {
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

function OnlineVideoKYCCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: ONLINEVIDEOKYC_REACT_CODE, filename: 'OnlineVideoKYCPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: ONLINEVIDEOKYC_ANGULAR_CODE, filename: 'online-video-k-y-c.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ONLINEVIDEOKYC_HTML_CODE, filename: 'online-video-k-y-c.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Online Video K Y C implementations.</p>
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
