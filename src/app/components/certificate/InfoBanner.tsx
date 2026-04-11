import { LucideIcon } from "lucide-react";

interface InfoBannerProps {
  icon?: LucideIcon;
  title?: string;
  message: string | React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  children?: React.ReactNode;
}

export function InfoBanner({ 
  icon: Icon, 
  title, 
  message, 
  variant = 'info',
  children 
}: InfoBannerProps) {
  const variants = {
    info: 'bg-blue-50 border-blue-300 text-blue-600',
    success: 'bg-green-50 border-green-300 text-green-600',
    warning: 'bg-orange-50 border-orange-300 text-orange-600',
    error: 'bg-red-50 border-red-300 text-red-600'
  };

  return (
    <div className={`border-2 rounded-lg p-6 ${variants[variant]}`}>
      <div className="flex items-start gap-3">
        {Icon && <Icon size={20} className={`flex-shrink-0 mt-0.5 ${variants[variant].split(' ')[2]}`} />}
        <div className="flex-1">
          {title && <h3 className="font-bold text-gray-900 mb-2">{title}</h3>}
          {typeof message === 'string' ? (
            <p className="text-sm text-gray-700">{message}</p>
          ) : (
            message
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
