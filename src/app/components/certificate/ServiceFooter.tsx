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
    <footer className="mt-24 border-t-2 border-border bg-card text-muted-foreground" role="contentinfo">
      <div className="mx-auto max-w-[1400px] px-12 py-8">
        <div className="flex items-center justify-between text-sm">
          <div>{leftText}</div>
          <div className="flex items-center gap-6">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="font-bold text-foreground transition-colors hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
              >
                {link.text}
              </Link>
            ))}
            {rightText && <div className="text-foreground">{rightText}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
