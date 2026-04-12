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
    <footer className="mt-24" style={{
      backgroundColor: 'var(--ux4g-color-background-primary)',
      borderTop: '2px solid var(--ux4g-color-border-default)'
    }}>
      <div className="max-w-[1400px] mx-auto px-12 py-8">
        <div className="flex items-center justify-between text-sm" style={{ color: 'var(--ux4g-color-text-secondary)' }}>
          <div>{leftText}</div>
          <div className="flex items-center gap-6">
            {links.map((link, idx) => (
              <Link key={idx} to={link.to} className="font-bold hover:underline" style={{ color: 'var(--ux4g-color-interactive-default)' }}>
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
