import { useState, useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle, WifiOff, RefreshCw, Clock, Save, Loader } from "lucide-react";

// ==================== AUTO-SAVE INDICATOR COMPONENT ====================

export function AutoSaveIndicator({ status, lastSaved }: { 
  status: 'idle' | 'saving' | 'saved' | 'error' | 'offline';
  lastSaved: Date | null;
}) {
  if (status === 'idle') return null;
  
  const configs = {
    saving: {
      icon: <Loader size={14} className="animate-spin" />,
      text: 'Saving...',
      className: 'bg-blue-50 border-blue-300 text-blue-700'
    },
    saved: {
      icon: <CheckCircle size={14} />,
      text: lastSaved ? `Saved at ${lastSaved.toLocaleTimeString()}` : 'Saved',
      className: 'bg-green-50 border-green-300 text-green-700'
    },
    error: {
      icon: <XCircle size={14} />,
      text: 'Save failed - Retry',
      className: 'bg-red-50 border-red-300 text-red-700'
    },
    offline: {
      icon: <WifiOff size={14} />,
      text: 'Offline - Will sync when online',
      className: 'bg-orange-50 border-orange-300 text-orange-700'
    }
  };
  
  const config = configs[status];
  
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded text-xs font-medium ${config.className}`}>
      {config.icon}
      <span>{config.text}</span>
    </div>
  );
}

// ==================== OFFLINE BANNER COMPONENT ====================

export function OfflineBanner({ visible, onSync }: { visible: boolean; onSync?: () => void }) {
  if (!visible) return null;
  
  return (
    <div className="bg-orange-50 border-b-2 border-orange-300">
      <div className="max-w-[1400px] mx-auto px-12 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <WifiOff size={20} className="text-orange-600" />
            <div>
              <p className="font-bold text-gray-900 text-sm">You're offline</p>
              <p className="text-xs text-gray-700">Your changes are being saved locally and will sync when you're back online.</p>
            </div>
          </div>
          {onSync && (
            <button 
              onClick={onSync}
              className="px-4 py-2 border-2 border-orange-600 bg-orange-100 text-orange-800 font-bold rounded text-sm hover:bg-orange-200"
            >
              <RefreshCw size={14} className="inline mr-2" />
              Retry Sync
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ==================== ERROR BANNER COMPONENT ====================

export function ErrorBanner({ error, onRetry, onDismiss }: { 
  error: { message: string; retryable: boolean } | null;
  onRetry?: () => void;
  onDismiss?: () => void;
}) {
  if (!error) return null;
  
  return (
    <div className="bg-red-50 border-b-2 border-red-300">
      <div className="max-w-[1400px] mx-auto px-12 py-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <AlertCircle size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">Error</p>
              <p className="text-sm text-gray-700">{error.message}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {error.retryable && onRetry && (
              <button 
                onClick={onRetry}
                className="px-4 py-2 bg-[#000080] text-white font-bold rounded text-sm hover:bg-[#000060]"
              >
                <RefreshCw size={14} className="inline mr-2" />
                Try Again
              </button>
            )}
            {onDismiss && (
              <button 
                onClick={onDismiss}
                className="px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50"
              >
                Dismiss
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== LOADING OVERLAY COMPONENT ====================

export function LoadingOverlay({ visible, message }: { visible: boolean; message?: string }) {
  if (!visible) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
        <Loader size={48} className="text-[#000080] mx-auto mb-4 animate-spin" />
        <p className="text-lg font-bold text-gray-900 mb-2">
          {message || 'Processing...'}
        </p>
        <p className="text-sm text-gray-600">Please wait a moment</p>
      </div>
    </div>
  );
}

// ==================== RETRY BUTTON COMPONENT ====================

export function RetryButton({ onClick, loading, attempts, maxAttempts }: { 
  onClick: () => void;
  loading?: boolean;
  attempts?: number;
  maxAttempts?: number;
}) {
  const hasAttemptsLeft = !attempts || !maxAttempts || attempts < maxAttempts;
  
  return (
    <button
      onClick={onClick}
      disabled={loading || !hasAttemptsLeft}
      className="flex items-center gap-2 px-4 py-2 bg-[#000080] text-white font-bold rounded text-sm hover:bg-[#000060] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader size={16} className="animate-spin" />
          Retrying...
        </>
      ) : (
        <>
          <RefreshCw size={16} />
          Try Again
          {attempts && maxAttempts && ` (${attempts}/${maxAttempts})`}
        </>
      )}
    </button>
  );
}

// ==================== TIMEOUT WARNING MODAL ====================

export function TimeoutWarning({ visible, secondsRemaining, onExtend, onSignOut }: {
  visible: boolean;
  secondsRemaining: number;
  onExtend: () => void;
  onSignOut: () => void;
}) {
  if (!visible) return null;
  
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 border-2 border-yellow-400">
        <div className="text-center mb-6">
          <Clock size={48} className="text-yellow-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Session Expiring Soon</h3>
          <p className="text-sm text-gray-700 mb-3">
            Your session will expire in
          </p>
          <p className="text-4xl font-bold text-red-600">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-300 rounded p-4 mb-6 text-sm text-gray-700">
          <p className="mb-2"><strong>To protect your information</strong>, we'll sign you out if there's no activity.</p>
          <p>Click "Continue Session" to keep working.</p>
        </div>
        <div className="space-y-2">
          <button 
            onClick={onExtend}
            className="w-full px-4 py-3 bg-[#000080] text-white font-bold rounded hover:bg-[#000060]"
          >
            Continue Session
          </button>
          <button 
            onClick={onSignOut}
            className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded hover:bg-gray-50"
          >
            Sign Out Now
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== NETWORK STATUS INDICATOR ====================

export function NetworkStatusIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  if (isOnline) return null;
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-orange-100 border-2 border-orange-400 rounded-lg px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2">
          <WifiOff size={18} className="text-orange-600" />
          <span className="font-bold text-sm text-gray-900">Offline</span>
        </div>
      </div>
    </div>
  );
}

// ==================== PARTIAL SUCCESS INDICATOR ====================

export function PartialSuccessIndicator({ total, successful, failed, onRetryFailed }: {
  total: number;
  successful: number;
  failed: number;
  onRetryFailed: () => void;
}) {
  if (failed === 0) return null;
  
  return (
    <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <AlertCircle size={24} className="text-yellow-600 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-2">Partial Success</h4>
          <p className="text-sm text-gray-700 mb-3">
            {successful} of {total} items processed successfully. {failed} failed.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500" 
                style={{ width: `${(successful / total) * 100}%` }}
              />
            </div>
            <span className="text-xs font-bold text-gray-600">
              {Math.round((successful / total) * 100)}%
            </span>
          </div>
          <button
            onClick={onRetryFailed}
            className="px-4 py-2 bg-[#000080] text-white font-bold rounded text-sm hover:bg-[#000060]"
          >
            <RefreshCw size={14} className="inline mr-2" />
            Retry Failed Items
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== SLOW NETWORK WARNING ====================

export function SlowNetworkWarning({ onContinue, onCancel }: {
  onContinue: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4">
        <div className="text-center mb-6">
          <AlertTriangle size={48} className="text-yellow-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Slow Connection Detected</h3>
          <p className="text-sm text-gray-700">
            You're on a slow network. Uploading large files may take longer than usual.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-300 rounded p-4 mb-6 text-sm text-gray-700">
          <p className="mb-2"><strong>Recommendations:</strong></p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Connect to Wi-Fi if available</li>
            <li>Reduce file sizes if possible</li>
            <li>Continue on mobile data (may use more data)</li>
          </ul>
        </div>
        <div className="space-y-2">
          <button 
            onClick={onContinue}
            className="w-full px-4 py-3 bg-[#000080] text-white font-bold rounded hover:bg-[#000060]"
          >
            Continue Anyway
          </button>
          <button 
            onClick={onCancel}
            className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== HOOKS FOR RESILIENCE ====================

export function useAutoSave(data: any, saveFunction: (data: any) => Promise<void>, delay: number = 2000) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error' | 'offline'>('idle');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!navigator.onLine) {
        setStatus('offline');
        // Queue for later sync
        localStorage.setItem('pendingDraft', JSON.stringify(data));
        return;
      }
      
      setStatus('saving');
      try {
        await saveFunction(data);
        setStatus('saved');
        setLastSaved(new Date());
        setTimeout(() => setStatus('idle'), 3000);
      } catch (error) {
        setStatus('error');
      }
    }, delay);
    
    return () => clearTimeout(timer);
  }, [data, delay]);
  
  return { status, lastSaved };
}

export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return isOnline;
}

export function useRetry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  backoff: boolean = true
): {
  execute: () => Promise<T>;
  loading: boolean;
  error: Error | null;
  attempts: number;
  retry: () => void;
} {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [attempts, setAttempts] = useState(0);
  
  const execute = async (): Promise<T> => {
    setLoading(true);
    setError(null);
    
    for (let i = 0; i < maxAttempts; i++) {
      try {
        const result = await fn();
        setAttempts(i + 1);
        setLoading(false);
        return result;
      } catch (err) {
        setAttempts(i + 1);
        if (i === maxAttempts - 1) {
          setError(err as Error);
          setLoading(false);
          throw err;
        }
        if (backoff) {
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
        }
      }
    }
    
    throw new Error('Max attempts reached');
  };
  
  const retry = () => {
    setAttempts(0);
    setError(null);
    execute();
  };
  
  return { execute, loading, error, attempts, retry };
}
