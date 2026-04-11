import { Link } from "react-router";
import { Video, Users, CheckCircle, AlertCircle, Clock, MessageSquare, Shield, Headphones, ArrowRight } from "lucide-react";

export default function OnlineVideoKYCPattern() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 via-white to-green-50 border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/identity" className="text-sm text-gray-600 hover:text-[#000080]">
              ← Back to Identity & Access Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 border-2 border-gray-300 rounded flex items-center justify-center">
                  <Video size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Identity Verification Pattern</div>
                  <h1 className="text-4xl font-bold text-gray-900">Online Video KYC Pattern</h1>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Enable real-time identity verification through live video calls with trained verification 
                agents. This pattern provides immediate verification with agent guidance, fraud detection, 
                and instant results suitable for high-value transactions and time-sensitive services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-gray-600">Complexity: <span className="font-bold text-gray-900">High</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                  <span className="text-gray-600">Type: <span className="font-bold text-gray-900">Synchronous</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                  <span className="text-gray-600">Priority: <span className="font-bold text-gray-900">Critical</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-blue-100 border-2 border-blue-300 rounded text-blue-800 font-bold text-sm text-center">
                LIVE VERIFICATION
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="col-span-9 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                Pattern Overview
              </h2>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
                <p className="text-gray-700 mb-6">
                  Online Video KYC enables real-time identity verification through live video interaction 
                  between the user and a trained verification agent. The agent guides the user through the 
                  process, verifies documents in real-time, performs liveness checks, and provides immediate 
                  verification results.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle size={20} className="text-green-600" />
                      When to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Immediate verification required</li>
                      <li>• High-value transactions (loans, accounts)</li>
                      <li>• Complex document verification needed</li>
                      <li>• Real-time fraud detection critical</li>
                      <li>• User needs agent guidance</li>
                      <li>• Regulatory compliance requires live verification</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertCircle size={20} className="text-red-600" />
                      When Not to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                Technical Specifications
              </h2>
              <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
                  <h3 className="font-bold text-gray-900">Implementation Requirements</h3>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                Accessibility Considerations
              </h2>
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">For Users with Disabilities</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
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
                    <h3 className="font-bold text-gray-900 mb-3">Network & Device Support</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                Implementation Example
              </h2>
              <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold text-gray-900">React Component with WebRTC</h3>
                  <span className="text-xs text-gray-600 bg-gray-200 px-3 py-1 rounded">TypeScript</span>
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
    <div className="max-w-6xl mx-auto p-8">
      {callState === 'idle' && (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Online Video KYC</h2>
          <p className="text-gray-700">
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
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
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
          <div className="grid grid-cols-2 gap-4">
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
              className={\`p-4 rounded-full \${isMuted ? 'bg-red-500' : 'bg-gray-700'} text-white hover:opacity-80\`}
            >
              {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            <button
              onClick={toggleVideo}
              className={\`p-4 rounded-full \${isVideoOff ? 'bg-red-500' : 'bg-gray-700'} text-white hover:opacity-80\`}
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
          <p className="text-gray-700">
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

          </div>

          {/* Sidebar */}
          <aside className="col-span-3 space-y-6">
            <QuickInfo />
            <RelatedPatterns />
            <BestPractices />
          </aside>

        </div>
      </main>
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
    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-100 border-2 border-blue-300 rounded-full flex items-center justify-center font-bold text-blue-700">
          {step}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-blue-600">{icon}</div>
          <h3 className="font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-sm text-gray-700">{description}</p>
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
    blue: 'bg-blue-50 border-blue-300',
    green: 'bg-green-50 border-green-300',
    purple: 'bg-purple-50 border-purple-300',
    orange: 'bg-orange-50 border-orange-300'
  };

  return (
    <div className={`${colors[color as keyof typeof colors]} border-2 rounded-lg p-6`}>
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-700">
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
      <h4 className="font-bold text-gray-900 mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-700">
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
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden sticky top-24">
      <div className="bg-blue-50 border-b-2 border-blue-200 px-4 py-3">
        <h3 className="font-bold text-gray-900 text-sm">Quick Info</h3>
      </div>
      <div className="p-4 space-y-4 text-sm">
        <div>
          <div className="text-gray-600 mb-1">Verification Time</div>
          <div className="font-bold text-gray-900">5-15 minutes</div>
        </div>
        <div>
          <div className="text-gray-600 mb-1">Success Rate</div>
          <div className="font-bold text-gray-900">95-98%</div>
        </div>
        <div>
          <div className="text-gray-600 mb-1">User Effort</div>
          <div className="font-bold text-gray-900">10-15 minutes</div>
        </div>
        <div>
          <div className="text-gray-600 mb-1">Compliance</div>
          <div className="font-bold text-gray-900">RBI KYC Guidelines</div>
        </div>
      </div>
    </div>
  );
}

function RelatedPatterns() {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-green-50 border-b-2 border-green-200 px-4 py-3">
        <h3 className="font-bold text-gray-900 text-sm">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/identity/offline-video-kyc" className="flex items-center gap-2 text-gray-700 hover:text-[#000080]">
          <ArrowRight size={14} />
          <span>Offline Video KYC</span>
        </Link>
        <Link to="/patterns/identity/aadhaar-video-kyc" className="flex items-center gap-2 text-gray-700 hover:text-[#000080]">
          <ArrowRight size={14} />
          <span>Aadhaar-based Video KYC</span>
        </Link>
        <Link to="/patterns/identity" className="flex items-center gap-2 text-gray-700 hover:text-[#000080]">
          <ArrowRight size={14} />
          <span>All Identity Patterns</span>
        </Link>
      </div>
    </div>
  );
}

function BestPractices() {
  return (
    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
      <h3 className="font-bold text-gray-900 text-sm mb-3">Best Practices</h3>
      <ul className="space-y-2 text-xs text-gray-700">
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
