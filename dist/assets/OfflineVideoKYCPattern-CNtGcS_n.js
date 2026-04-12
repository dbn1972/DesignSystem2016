import{j as e,L as o,d as s,b as p,F as h}from"./index-BYMLq1ET.js";import{U as c}from"./upload-DKAbdygi.js";import{C as u}from"./camera-DnZUkxkX.js";import{V as g}from"./video-DBP4j-nw.js";import{C as f}from"./clock-Da9AXIkA.js";import{S as b}from"./shield-K2szB7qG.js";import{A as d}from"./arrow-right-DBaVDdBT.js";function U(){return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx("header",{className:"bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b-2 border-gray-300",children:e.jsxs("div",{className:"max-w-[1400px] mx-auto px-12 py-12",children:[e.jsx("div",{className:"mb-6",children:e.jsx(o,{to:"/patterns/identity",className:"text-sm text-gray-600 hover:text-[#000080]",children:"← Back to Identity & Access Patterns"})}),e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"max-w-4xl",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-gray-300 rounded flex items-center justify-center",children:e.jsx(c,{size:32,className:"text-white"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-600 mb-1",children:"Identity Verification Pattern"}),e.jsx("h1",{className:"text-4xl font-bold text-gray-900",children:"Offline Video KYC Pattern"})]})]}),e.jsx("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"Enable users to complete video-based identity verification by recording and uploading a verification video at their convenience. The video is reviewed asynchronously by verification agents, making it suitable for areas with poor connectivity."}),e.jsxs("div",{className:"flex items-center gap-6 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-sm"}),e.jsxs("span",{className:"text-gray-600",children:["Complexity: ",e.jsx("span",{className:"font-bold text-gray-900",children:"Medium"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-sm"}),e.jsxs("span",{className:"text-gray-600",children:["Type: ",e.jsx("span",{className:"font-bold text-gray-900",children:"Asynchronous"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-sm"}),e.jsxs("span",{className:"text-gray-600",children:["Priority: ",e.jsx("span",{className:"font-bold text-gray-900",children:"High"})]})]})]})]}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx("div",{className:"px-6 py-3 bg-purple-100 border-2 border-purple-300 rounded text-purple-800 font-bold text-sm text-center",children:"ASYNC VERIFICATION"})})]})]})}),e.jsx("main",{className:"max-w-[1400px] mx-auto px-12 py-12",children:e.jsxs("div",{className:"grid grid-cols-12 gap-8",children:[e.jsxs("div",{className:"col-span-9 space-y-12",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6 border-l-4 border-purple-500 pl-4",children:"Pattern Overview"}),e.jsxs("div",{className:"bg-white border-2 border-gray-300 rounded-lg p-8",children:[e.jsx("p",{className:"text-gray-700 mb-6",children:"Offline Video KYC allows users to record their identity verification video at their own pace and upload it when convenient. This pattern is particularly useful for users in areas with unreliable internet connectivity or those who prefer to complete verification without time pressure."}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-green-50 border-2 border-green-200 rounded-lg p-6",children:[e.jsxs("h3",{className:"font-bold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(s,{size:20,className:"text-green-600"}),"When to Use"]}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[e.jsx("li",{children:"• Poor or intermittent internet connectivity"}),e.jsx("li",{children:"• User prefers to record at their own pace"}),e.jsx("li",{children:"• High volume of verification requests"}),e.jsx("li",{children:"• 24/7 submission without agent availability"}),e.jsx("li",{children:"• Users need multiple attempts to record"})]})]}),e.jsxs("div",{className:"bg-red-50 border-2 border-red-200 rounded-lg p-6",children:[e.jsxs("h3",{className:"font-bold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(p,{size:20,className:"text-red-600"}),"When Not to Use"]}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[e.jsx("li",{children:"• Immediate verification required"}),e.jsx("li",{children:"• Complex verification with agent guidance"}),e.jsx("li",{children:"• High-risk transactions needing live checks"}),e.jsx("li",{children:"• Real-time fraud detection required"}),e.jsx("li",{children:"• User needs assistance during recording"})]})]})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6 border-l-4 border-purple-500 pl-4",children:"User Journey"}),e.jsx("div",{className:"space-y-4",children:[{step:1,title:"Pre-Recording Guidance",description:"User receives clear instructions on what to record, how to position camera, and what documents to show",icon:e.jsx(h,{size:24,className:"text-blue-600"})},{step:2,title:"Environment Check",description:"System checks camera access, lighting conditions, and provides tips for optimal recording quality",icon:e.jsx(u,{size:24,className:"text-green-600"})},{step:3,title:"Video Recording",description:"User records verification video following on-screen prompts (show face, documents, speak verification text)",icon:e.jsx(g,{size:24,className:"text-purple-600"})},{step:4,title:"Review & Re-record",description:"User can preview the recorded video and re-record if not satisfied with quality or completeness",icon:e.jsx(s,{size:24,className:"text-orange-600"})},{step:5,title:"Upload Video",description:"Video is uploaded to secure server with progress indicator and retry mechanism for failed uploads",icon:e.jsx(c,{size:24,className:"text-indigo-600"})},{step:6,title:"Verification Queue",description:"User receives confirmation and estimated verification time. Video enters agent review queue",icon:e.jsx(f,{size:24,className:"text-teal-600"})},{step:7,title:"Status Tracking",description:"User can track verification status and receives notifications on completion or if additional info needed",icon:e.jsx(b,{size:24,className:"text-red-600"})}].map(t=>e.jsx(j,{...t},t.step))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6 border-l-4 border-purple-500 pl-4",children:"UX Requirements"}),e.jsxs("div",{className:"grid grid-cols-1 gap-6",children:[e.jsx(n,{title:"Clear Instructions",requirements:["Show step-by-step visual guide before recording","Provide example video of correct recording","List all required documents and actions","Explain common mistakes and how to avoid them","Support for 12 Indian languages"],color:"blue"}),e.jsx(n,{title:"Recording Quality Checks",requirements:["Detect poor lighting and suggest improvements","Check if face is clearly visible and in frame","Verify audio clarity for spoken verification","Ensure minimum video resolution (720p recommended)","Check file size is within acceptable limits (max 50MB)"],color:"green"}),e.jsx(n,{title:"Upload Resilience",requirements:["Auto-resume interrupted uploads","Show upload progress with percentage and estimated time","Support upload retry with exponential backoff","Allow saving draft for upload later if connection fails","Compress video to reduce upload time without quality loss"],color:"purple"}),e.jsx(n,{title:"Status Communication",requirements:["Send SMS/email confirmation on successful upload","Provide estimated verification completion time","Send real-time notifications on status changes","Allow users to check status anytime via portal","Notify if additional documents or re-recording needed"],color:"orange"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6 border-l-4 border-purple-500 pl-4",children:"Technical Specifications"}),e.jsxs("div",{className:"bg-white border-2 border-gray-300 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-gray-100 border-b-2 border-gray-300 px-6 py-4",children:e.jsx("h3",{className:"font-bold text-gray-900",children:"Implementation Requirements"})}),e.jsxs("div",{className:"p-6 space-y-6",children:[e.jsx(l,{title:"Video Format",specs:["Format: MP4 (H.264 codec)","Resolution: Minimum 720p (1280x720)","Frame Rate: 24-30 fps","Max Duration: 2-3 minutes","Max File Size: 50MB"]}),e.jsx(l,{title:"Recording Requirements",specs:["Camera access via MediaRecorder API","Audio recording for spoken verification","Client-side validation before upload","Video compression using ffmpeg.js or similar","Local preview before upload"]}),e.jsx(l,{title:"Upload Mechanism",specs:["Chunked upload for large files","Resumable upload with unique session ID","S3 or equivalent secure cloud storage","Encryption in transit (TLS 1.3)","Upload progress tracking with WebSockets"]}),e.jsx(l,{title:"Security",specs:["End-to-end encryption for video data","Secure token-based upload authentication","Virus scanning on uploaded files","Watermarking with timestamp and user ID","Auto-deletion after verification period (90 days)"]}),e.jsx(l,{title:"Agent Review Portal",specs:["Queue management system for agents","Video player with frame-by-frame controls","Face matching with ID documents","Liveness detection (blink, head movement)","Decision workflow with approval/rejection reasons"]})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6 border-l-4 border-purple-500 pl-4",children:"Accessibility Considerations"}),e.jsx("div",{className:"bg-blue-50 border-2 border-blue-300 rounded-lg p-8",children:e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"For Users with Disabilities"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Screen reader support for all instructions"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Alternative verification methods for camera issues"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Large touch targets for recording controls (48x48px)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"High contrast mode for better visibility"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Voice guidance option during recording"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"Offline & Low Bandwidth"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Save recording locally before upload attempt"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Auto-compress video for faster upload"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Resume interrupted uploads automatically"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Option to upload via WiFi only to save mobile data"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Offline mode to record and queue for later upload"})]})]})]})]})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6 border-l-4 border-purple-500 pl-4",children:"Implementation Example"}),e.jsxs("div",{className:"bg-white border-2 border-gray-300 rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 border-b-2 border-gray-300 px-6 py-4 flex items-center justify-between",children:[e.jsx("h3",{className:"font-bold text-gray-900",children:"React Component"}),e.jsx("span",{className:"text-xs text-gray-600 bg-gray-200 px-3 py-1 rounded",children:"TypeScript"})]}),e.jsx("div",{className:"p-6",children:e.jsx("pre",{className:"bg-gray-900 text-green-400 p-6 rounded text-sm overflow-x-auto",children:`import { useState, useRef } from 'react';
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
    <div className="max-w-4xl mx-auto p-8">
      {step === 'instructions' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Video KYC Instructions</h2>
          <ul className="space-y-2 text-gray-700">
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
              className="px-6 py-3 bg-gray-300 text-gray-900 rounded font-bold"
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
            <div className="text-4xl font-bold text-purple-600">
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
}`})})]})]})]}),e.jsxs("aside",{className:"col-span-3 space-y-6",children:[e.jsx(v,{}),e.jsx(y,{}),e.jsx(N,{})]})]})})]})}function j({step:t,title:i,description:r,icon:a}){return e.jsxs("div",{className:"bg-white border-2 border-gray-300 rounded-lg p-6 flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-12 h-12 bg-purple-100 border-2 border-purple-300 rounded-full flex items-center justify-center font-bold text-purple-700",children:t})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"text-purple-600",children:a}),e.jsx("h3",{className:"font-bold text-gray-900",children:i})]}),e.jsx("p",{className:"text-sm text-gray-700",children:r})]})]})}function n({title:t,requirements:i,color:r}){const a={blue:"bg-blue-50 border-blue-300",green:"bg-green-50 border-green-300",purple:"bg-purple-50 border-purple-300",orange:"bg-orange-50 border-orange-300"};return e.jsxs("div",{className:`${a[r]} border-2 rounded-lg p-6`,children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-4",children:t}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-700",children:i.map((x,m)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:16,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:x})]},m))})]})}function l({title:t,specs:i}){return e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-gray-900 mb-3",children:t}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-700",children:i.map((r,a)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{children:r})]},a))})]})}function v(){return e.jsxs("div",{className:"bg-white border-2 border-gray-300 rounded-lg overflow-hidden sticky top-24",children:[e.jsx("div",{className:"bg-purple-50 border-b-2 border-purple-200 px-4 py-3",children:e.jsx("h3",{className:"font-bold text-gray-900 text-sm",children:"Quick Info"})}),e.jsxs("div",{className:"p-4 space-y-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-gray-600 mb-1",children:"Verification Time"}),e.jsx("div",{className:"font-bold text-gray-900",children:"24-48 hours"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-gray-600 mb-1",children:"Success Rate"}),e.jsx("div",{className:"font-bold text-gray-900",children:"85-90%"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-gray-600 mb-1",children:"User Effort"}),e.jsx("div",{className:"font-bold text-gray-900",children:"5-10 minutes"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-gray-600 mb-1",children:"Compliance"}),e.jsx("div",{className:"font-bold text-gray-900",children:"RBI KYC Guidelines"})]})]})]})}function y(){return e.jsxs("div",{className:"bg-white border-2 border-gray-300 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-blue-50 border-b-2 border-blue-200 px-4 py-3",children:e.jsx("h3",{className:"font-bold text-gray-900 text-sm",children:"Related Patterns"})}),e.jsxs("div",{className:"p-4 space-y-2 text-sm",children:[e.jsxs(o,{to:"/patterns/identity/online-video-kyc",className:"flex items-center gap-2 text-gray-700 hover:text-[#000080]",children:[e.jsx(d,{size:14}),e.jsx("span",{children:"Online Video KYC"})]}),e.jsxs(o,{to:"/patterns/identity/aadhaar-video-kyc",className:"flex items-center gap-2 text-gray-700 hover:text-[#000080]",children:[e.jsx(d,{size:14}),e.jsx("span",{children:"Aadhaar-based Video KYC"})]}),e.jsxs(o,{to:"/patterns/identity",className:"flex items-center gap-2 text-gray-700 hover:text-[#000080]",children:[e.jsx(d,{size:14}),e.jsx("span",{children:"All Identity Patterns"})]})]})]})}function N(){return e.jsxs("div",{className:"bg-green-50 border-2 border-green-300 rounded-lg p-4",children:[e.jsx("h3",{className:"font-bold text-gray-900 text-sm mb-3",children:"Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-xs text-gray-700",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:12,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Provide example video before recording"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:12,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Check lighting and camera quality upfront"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:12,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Allow unlimited re-recording attempts"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:12,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Compress video automatically before upload"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(s,{size:12,className:"text-green-600 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:"Send status updates via SMS and email"})]})]})]})}export{U as default};
