import { Home, AlertTriangle } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
          <AlertTriangle className="text-yellow-600" size={40} />
        </div>
        
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-colors font-semibold"
        >
          <Home size={20} />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
