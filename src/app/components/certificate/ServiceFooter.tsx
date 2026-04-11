import { Link } from "react-router";

interface ServiceFooterProps {
  leftText?: string;
  rightText?: string;
  links?: Array<{ to: string; text: string }>;
}

export function ServiceFooter({ 
  leftText = "Certificate Application Service • Government of India",
  rightText,
  links = []
}: ServiceFooterProps) {
  return (
    <footer className="bg-white border-t-2 border-gray-300 mt-24">
      <div className="max-w-[1400px] mx-auto px-12 py-8">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>{leftText}</div>
          <div className="flex items-center gap-6">
            {links.map((link, idx) => (
              <Link key={idx} to={link.to} className="text-[#000080] font-bold hover:underline">
                {link.text}
              </Link>
            ))}
            {rightText && <div>{rightText}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
