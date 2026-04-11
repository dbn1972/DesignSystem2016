import { Link } from "react-router";
import { Clock, RefreshCw, LogIn } from "lucide-react";

export default function CertificateSessionTimeout() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-12">
      <div className="max-w-2xl w-full">
        
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          
          {/* Header */}
          <div className="bg-orange-50 border-b-2 border-orange-300 px-8 py-12 text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-orange-600">
              <Clock size={48} className="text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Session Expired</h1>
            <p className="text-gray-700">
              Your session has expired due to inactivity for security reasons
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">What happened?</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                For your security, we automatically log you out after 30 minutes of inactivity. 
                This helps protect your personal information and application data.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Don't worry - any data you saved or submitted before the session expired has been 
                securely stored and is safe.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <InfoItem text="Your saved drafts are still available" />
              <InfoItem text="Submitted applications are safe and processing" />
              <InfoItem text="No data has been lost" />
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Link
                to="/reference-service/certificate/sign-in"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#000080] text-white font-bold rounded hover:bg-blue-900"
              >
                <LogIn size={20} />
                Sign In Again
              </Link>
              
              <Link
                to="/reference-service/demo"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded hover:bg-gray-50"
              >
                Go to Home Page
              </Link>
            </div>

            {/* Help */}
            <div className="mt-8 pt-8 border-t-2 border-gray-300 text-center">
              <p className="text-sm text-gray-700 mb-2">
                Having trouble signing in?
              </p>
              <Link
                to="/reference-service/certificate/help"
                className="text-sm text-[#000080] font-bold hover:underline"
              >
                Contact Support →
              </Link>
            </div>

          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 bg-green-50 border-2 border-green-300 rounded-lg p-5">
          <h4 className="font-bold text-gray-900 mb-2 text-sm">Security Tips</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Never share your login credentials with anyone</li>
            <li>• Always log out when using a shared computer</li>
            <li>• Keep your browser updated for better security</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

function InfoItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-gray-700">
      <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span>{text}</span>
    </div>
  );
}
