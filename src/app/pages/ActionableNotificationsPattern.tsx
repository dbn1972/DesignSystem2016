import { Link } from "react-router";
import { useState } from "react";
import { Zap, Upload, CreditCard, CheckCircle, X, FileText, AlertCircle, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";

// Mock actionable notifications
const ACTIONABLE_NOTIFICATIONS = [
  {
    id: 1,
    type: "upload",
    title: "Upload Income Certificate",
    message: "Upload your income certificate for Scholarship Application (SCH-2026-45678)",
    deadline: "April 12, 2026",
    reference: "SCH-2026-45678",
    actionType: "file-upload",
    completed: false
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Required",
    message: "Complete payment of ₹500 for Driving License Renewal",
    deadline: "April 11, 2026",
    reference: "DL-2026-89012",
    amount: "₹500",
    actionType: "payment",
    completed: false
  },
  {
    id: 3,
    type: "approval",
    title: "Approve Consent",
    message: "Review and approve data sharing consent for Aadhaar Update",
    deadline: "April 14, 2026",
    reference: "AAD-2026-34567",
    actionType: "approval",
    completed: false
  },
  {
    id: 4,
    type: "feedback",
    title: "Service Feedback",
    message: "How was your experience with Birth Certificate service?",
    deadline: null,
    reference: "BC-2026-67890",
    actionType: "feedback",
    completed: false
  }
];

export default function ActionableNotificationsPattern() {
  const [notifications, setNotifications] = useState(ACTIONABLE_NOTIFICATIONS);
  const [activeAction, setActiveAction] = useState<number | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const completeAction = (id: number) => {
    setIsProcessing(true);
    setTimeout(() => {
      setNotifications(prev => prev.map(n =>
        n.id === id ? { ...n, completed: true } : n
      ));
      setActiveAction(null);
      setIsProcessing(false);
      setUploadProgress(0);
    }, 1500);
  };

  const simulateUpload = (id: number) => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          completeAction(id);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getDaysLeft = (deadline: string | null) => {
    if (!deadline) return null;
    const days = Math.ceil((new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (days < 0) return 'Overdue';
    if (days === 0) return 'Today';
    if (days === 1) return '1 day left';
    return `${days} days left`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/notifications" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-sm font-bold text-foreground">Actionable Notifications</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1000px] mx-auto px-8 py-12">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Actionable Notifications</h1>
          <p className="text-muted-foreground">
            Complete actions directly from notifications without navigating to separate pages
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {notifications.filter(n => !n.completed).length}
            </div>
            <div className="text-sm text-muted-foreground">Pending Actions</div>
          </div>
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {notifications.filter(n => n.completed).length}
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="bg-card border-2 border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {notifications.filter(n => !n.completed && n.deadline && getDaysLeft(n.deadline) === 'Today').length}
            </div>
            <div className="text-sm text-muted-foreground">Due Today</div>
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-6">
          {notifications.map((notif) => (
            <div key={notif.id}>
              {!notif.completed ? (
                <div className="bg-card border-2 border-orange-300 rounded-lg overflow-hidden">
                  {/* Header */}
                  <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap size={24} className="text-orange-600" />
                          <h3 className="text-lg font-bold text-foreground">{notif.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{notif.message}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <FileText size={16} className="text-gray-500" />
                            <span className="font-mono text-muted-foreground">{notif.reference}</span>
                          </div>
                          {notif.deadline && (
                            <div className={`flex items-center gap-2 font-bold ${
                              getDaysLeft(notif.deadline) === 'Today' || getDaysLeft(notif.deadline) === 'Overdue'
                                ? 'text-red-600'
                                : 'text-muted-foreground'
                            }`}>
                              <AlertCircle size={16} />
                              <span>Deadline: {getDaysLeft(notif.deadline)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="p-6">
                    {activeAction === notif.id ? (
                      <ActionPanel
                        notification={notif}
                        onComplete={() => completeAction(notif.id)}
                        onCancel={() => setActiveAction(null)}
                        simulateUpload={() => simulateUpload(notif.id)}
                        uploadProgress={uploadProgress}
                        isProcessing={isProcessing}
                      />
                    ) : (
                      <button
                        onClick={() => setActiveAction(notif.id)}
                        className="w-full px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90 flex items-center justify-center gap-2"
                      >
                        <Zap size={20} />
                        <span>Take Action Now</span>
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-green-600" />
                    <div className="flex-1">
                      <div className="font-bold text-foreground mb-1">{notif.title}</div>
                      <div className="text-sm text-muted-foreground">Action completed successfully</div>
                    </div>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">
                      COMPLETED
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pattern Info */}
        <div className="mt-12 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-muted-foreground mb-2">Inline Actions</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• File upload</li>
                <li>• Payment processing</li>
                <li>• Approval workflow</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Quick Completion</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Single-click action</li>
                <li>• No page navigation</li>
                <li>• Instant feedback</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Progress Tracking</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Upload progress</li>
                <li>• Processing states</li>
                <li>• Completion status</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">User Experience</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Reduced friction</li>
                <li>• Clear deadlines</li>
                <li>• Action summary</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

// ==================== COMPONENTS ====================

function ActionPanel({ notification, onComplete, onCancel, simulateUpload, uploadProgress, isProcessing }: {
  notification: typeof ACTIONABLE_NOTIFICATIONS[0];
  onComplete: () => void;
  onCancel: () => void;
  simulateUpload: () => void;
  uploadProgress: number;
  isProcessing: boolean;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  if (notification.actionType === 'file-upload') {
    return (
      <div className="space-y-4">
        <div className="text-sm font-bold text-foreground mb-3">Upload Document</div>
        
        {uploadProgress === 0 ? (
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload size={48} className="text-gray-400 mx-auto mb-4" />
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="file-upload"
              className="inline-block px-6 py-3 bg-primary text-white rounded font-bold cursor-pointer hover:opacity-90"
            >
              Choose File
            </label>
            <p className="text-sm text-muted-foreground mt-3">
              Supported formats: PDF, JPG, PNG (Max 5MB)
            </p>
            {selectedFile && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded">
                <div className="text-sm font-bold text-foreground">{selectedFile.name}</div>
                <div className="text-xs text-muted-foreground">{(selectedFile.size / 1024).toFixed(2)} KB</div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="text-sm font-bold text-foreground mb-2">Uploading...</div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-700 transition-all"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <div className="text-sm text-muted-foreground mt-2">{uploadProgress}% complete</div>
          </div>
        )}

        <div className="flex gap-3">
          {uploadProgress === 0 && (
            <>
              <button
                onClick={simulateUpload}
                disabled={!selectedFile}
                className="flex-1 px-6 py-3 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Upload size={20} />
                <span>Upload Document</span>
              </button>
              <button
                onClick={onCancel}
                className="px-6 py-3 border-2 border-border rounded font-bold hover:border-gray-400 flex items-center gap-2"
              >
                <X size={20} />
                <span>Cancel</span>
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (notification.actionType === 'payment') {
    return (
      <div className="space-y-4">
        <div className="text-sm font-bold text-foreground mb-3">Payment Details</div>
        
        <div className="bg-background border-2 border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground">Amount to Pay:</span>
            <span className="text-2xl font-bold text-foreground">{notification.amount}</span>
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            Application: {notification.reference}
          </div>
        </div>

        {isProcessing ? (
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg text-center">
            <div className="text-sm font-bold text-foreground mb-2">Processing payment...</div>
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={onComplete}
              className="flex-1 px-6 py-3 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] flex items-center justify-center gap-2"
            >
              <CreditCard size={20} />
              <span>Pay Now</span>
            </button>
            <button
              onClick={onCancel}
              className="px-6 py-3 border-2 border-border rounded font-bold hover:border-gray-400 flex items-center gap-2"
            >
              <X size={20} />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  if (notification.actionType === 'approval') {
    return (
      <div className="space-y-4">
        <div className="text-sm font-bold text-foreground mb-3">Review Consent</div>
        
        <div className="bg-background border-2 border-border rounded-lg p-6">
          <div className="text-sm text-muted-foreground mb-4">
            I consent to sharing my Aadhaar information with the Department of Revenue for 
            verification purposes related to my application {notification.reference}.
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="consent" className="mt-1" />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              I have read and understood the data sharing terms
            </label>
          </div>
        </div>

        {isProcessing ? (
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg text-center">
            <div className="text-sm font-bold text-foreground mb-2">Processing approval...</div>
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={onComplete}
              className="flex-1 px-6 py-3 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] flex items-center justify-center gap-2"
            >
              <ThumbsUp size={20} />
              <span>Approve</span>
            </button>
            <button
              onClick={onCancel}
              className="flex-1 px-6 py-3 bg-red-500 text-white rounded font-bold hover:bg-red-600 flex items-center gap-2 justify-center"
            >
              <ThumbsDown size={20} />
              <span>Decline</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  if (notification.actionType === 'feedback') {
    return (
      <div className="space-y-4">
        <div className="text-sm font-bold text-foreground mb-3">Rate Your Experience</div>
        
        <div className="bg-background border-2 border-border rounded-lg p-6">
          <div className="mb-4">
            <div className="text-sm text-muted-foreground mb-3">How would you rate the service?</div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl ${rating && star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="text-sm text-muted-foreground block mb-2">
              Additional Comments (Optional)
            </label>
            <textarea
              id="comment"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 border-2 border-border rounded focus:border-primary focus:outline-none"
              placeholder="Share your feedback..."
            ></textarea>
          </div>
        </div>

        {isProcessing ? (
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg text-center">
            <div className="text-sm font-bold text-foreground mb-2">Submitting feedback...</div>
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={onComplete}
              disabled={!rating}
              className="flex-1 px-6 py-3 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              <span>Submit Feedback</span>
            </button>
            <button
              onClick={onCancel}
              className="px-6 py-3 border-2 border-border rounded font-bold hover:border-gray-400 flex items-center gap-2"
            >
              <X size={20} />
              <span>Skip</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return null;
}
