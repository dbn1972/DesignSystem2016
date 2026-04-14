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
    info: 'bg-blue-50 border-blue-300 text-blue-700 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-300',
    success: 'bg-green-50 border-green-300 text-green-700 dark:bg-green-950/40 dark:border-green-800 dark:text-green-300',
    warning: 'bg-orange-50 border-orange-300 text-orange-700 dark:bg-orange-950/40 dark:border-orange-800 dark:text-orange-300',
    error: 'bg-red-50 border-red-300 text-red-700 dark:bg-red-950/40 dark:border-red-800 dark:text-red-300'
  };

  return (
    <div className={`border-2 rounded-lg p-6 ${variants[variant]}`}>
      <div className="flex items-start gap-3">
        {Icon && <Icon size={20} className={`flex-shrink-0 mt-0.5 ${variants[variant].split(' ')[2]}`} />}
        <div className="flex-1">
          {title && <h3 className="font-bold text-foreground mb-2">{title}</h3>}
          {typeof message === 'string' ? (
            <p className="text-sm text-foreground/90">{message}</p>
          ) : (
            message
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
