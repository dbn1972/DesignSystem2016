import { Link } from "react-router";
import { LucideIcon } from "lucide-react";

interface ServiceHeaderProps {
  icon: LucideIcon;
  iconColor: string;
  category: string;
  title: string;
  backLink?: string;
  backText?: string;
  rightContent?: React.ReactNode;
}

export function ServiceHeader({
  icon: Icon,
  iconColor,
  category,
  title,
  backLink,
  backText,
  rightContent
}: ServiceHeaderProps) {
  return (
    <header className="bg-white border-b-2 border-gray-300">
      <div className="max-w-[1400px] mx-auto px-12 py-6">
        {backLink && backText && (
          <Link 
            to={backLink}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            ← {backText}
          </Link>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-14 h-14 ${iconColor} rounded flex items-center justify-center`}>
              <Icon size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">{category}</div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>
          </div>
          {rightContent}
        </div>
      </div>
    </header>
  );
}
