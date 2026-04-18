/**
 * Unique SVG illustrations for each legal/governance page.
 * Each illustration reflects the page's theme and purpose.
 */

/** Privacy Policy — Shield with eye/lock, data streams, user silhouette */
export function PrivacyIllustration() {
  const c = '#005196';
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="140" r="120" fill={c} opacity="0.03" />
      <circle cx="160" cy="140" r="85" fill={c} opacity="0.05" />
      {/* Shield */}
      <path d="M160 35L255 72V155C255 212 160 250 160 250S65 212 65 155V72Z" fill={c} opacity="0.06" stroke={c} strokeWidth="1.5" strokeOpacity="0.2" />
      {/* Eye (privacy watch) */}
      <ellipse cx="160" cy="115" rx="35" ry="20" fill="none" stroke={c} strokeWidth="2" strokeOpacity="0.3" />
      <circle cx="160" cy="115" r="10" fill={c} opacity="0.15" />
      <circle cx="160" cy="115" r="4" fill={c} opacity="0.35" />
      {/* Lock below eye */}
      <rect x="148" y="148" width="24" height="20" rx="3" fill={c} opacity="0.12" stroke={c} strokeWidth="1" strokeOpacity="0.25" />
      <path d="M153 148V142C153 138 156 135 160 135S167 138 167 142V148" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
      <circle cx="160" cy="158" r="2.5" fill={c} opacity="0.4" />
      {/* Data streams */}
      <line x1="90" y1="85" x2="110" y2="85" stroke={c} strokeWidth="2" strokeOpacity="0.12" strokeLinecap="round" />
      <line x1="85" y1="95" x2="115" y2="95" stroke={c} strokeWidth="2" strokeOpacity="0.08" strokeLinecap="round" />
      <line x1="92" y1="105" x2="108" y2="105" stroke={c} strokeWidth="2" strokeOpacity="0.1" strokeLinecap="round" />
      <line x1="210" y1="85" x2="230" y2="85" stroke={c} strokeWidth="2" strokeOpacity="0.12" strokeLinecap="round" />
      <line x1="205" y1="95" x2="235" y2="95" stroke={c} strokeWidth="2" strokeOpacity="0.08" strokeLinecap="round" />
      <line x1="212" y1="105" x2="228" y2="105" stroke={c} strokeWidth="2" strokeOpacity="0.1" strokeLinecap="round" />
      {/* User silhouette */}
      <circle cx="160" cy="200" r="10" fill={c} opacity="0.08" />
      <path d="M145 225C145 215 152 210 160 210S175 215 175 225" fill={c} opacity="0.06" />
      {/* Dots */}
      <circle cx="95" cy="65" r="3" fill={c} opacity="0.1" />
      <circle cx="230" cy="190" r="4" fill={c} opacity="0.08" />
      <circle cx="75" cy="170" r="2" fill={c} opacity="0.1" />
    </svg>
  );
}

/** Terms of Use — Scroll/document with scales of justice, handshake */
export function TermsIllustration() {
  const c = '#7c3aed';
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="140" r="115" fill={c} opacity="0.03" />
      {/* Document scroll */}
      <rect x="110" y="45" width="100" height="130" rx="8" fill={c} opacity="0.06" stroke={c} strokeWidth="1.5" strokeOpacity="0.15" />
      <rect x="110" y="45" width="100" height="25" rx="8" fill={c} opacity="0.1" />
      {/* Document lines */}
      <line x1="125" y1="90" x2="195" y2="90" stroke={c} strokeWidth="2" strokeOpacity="0.12" strokeLinecap="round" />
      <line x1="125" y1="102" x2="185" y2="102" stroke={c} strokeWidth="2" strokeOpacity="0.08" strokeLinecap="round" />
      <line x1="125" y1="114" x2="190" y2="114" stroke={c} strokeWidth="2" strokeOpacity="0.1" strokeLinecap="round" />
      <line x1="125" y1="126" x2="175" y2="126" stroke={c} strokeWidth="2" strokeOpacity="0.06" strokeLinecap="round" />
      <line x1="125" y1="138" x2="180" y2="138" stroke={c} strokeWidth="2" strokeOpacity="0.08" strokeLinecap="round" />
      <line x1="125" y1="150" x2="170" y2="150" stroke={c} strokeWidth="2" strokeOpacity="0.06" strokeLinecap="round" />
      {/* Scales of justice */}
      <line x1="160" y1="195" x2="160" y2="230" stroke={c} strokeWidth="2" strokeOpacity="0.2" />
      <line x1="130" y1="205" x2="190" y2="205" stroke={c} strokeWidth="2" strokeOpacity="0.2" />
      <path d="M130 205L120 225H140Z" fill={c} opacity="0.08" stroke={c} strokeWidth="1" strokeOpacity="0.15" />
      <path d="M190 205L180 225H200Z" fill={c} opacity="0.08" stroke={c} strokeWidth="1" strokeOpacity="0.15" />
      <rect x="150" y="230" width="20" height="6" rx="3" fill={c} opacity="0.1" />
      {/* Checkmark seal */}
      <circle cx="195" cy="55" r="14" fill={c} opacity="0.1" />
      <path d="M188 55L193 60L203 50" stroke={c} strokeWidth="2" strokeOpacity="0.35" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dots */}
      <circle cx="85" cy="80" r="3" fill={c} opacity="0.08" />
      <circle cx="240" cy="150" r="4" fill={c} opacity="0.06" />
    </svg>
  );
}

/** Security Policy — Fortress/shield with lock, radar rings, key */
export function SecurityIllustration() {
  const c = '#dc2626';
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="140" r="120" fill={c} opacity="0.03" />
      {/* Radar rings */}
      <circle cx="160" cy="130" r="90" fill="none" stroke={c} strokeWidth="1" strokeOpacity="0.08" strokeDasharray="4 6" />
      <circle cx="160" cy="130" r="65" fill="none" stroke={c} strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 6" />
      <circle cx="160" cy="130" r="40" fill="none" stroke={c} strokeWidth="1" strokeOpacity="0.12" />
      {/* Central shield */}
      <path d="M160 80L200 98V140C200 168 160 185 160 185S120 168 120 140V98Z" fill={c} opacity="0.08" stroke={c} strokeWidth="1.5" strokeOpacity="0.25" />
      {/* Lock */}
      <rect x="148" y="118" width="24" height="20" rx="3" fill={c} opacity="0.15" />
      <path d="M153 118V112C153 107 156 104 160 104S167 107 167 112V118" fill="none" stroke={c} strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" />
      <circle cx="160" cy="128" r="3" fill={c} opacity="0.4" />
      {/* Key */}
      <circle cx="95" cy="190" r="12" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity="0.2" />
      <circle cx="95" cy="190" r="5" fill={c} opacity="0.1" />
      <line x1="107" y1="190" x2="135" y2="190" stroke={c} strokeWidth="1.5" strokeOpacity="0.15" strokeLinecap="round" />
      <line x1="130" y1="190" x2="130" y2="180" stroke={c} strokeWidth="1.5" strokeOpacity="0.12" strokeLinecap="round" />
      <line x1="122" y1="190" x2="122" y2="183" stroke={c} strokeWidth="1.5" strokeOpacity="0.12" strokeLinecap="round" />
      {/* Warning triangle */}
      <path d="M230 170L245 195H215Z" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity="0.15" />
      <line x1="230" y1="180" x2="230" y2="188" stroke={c} strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />
      <circle cx="230" cy="192" r="1.5" fill={c} opacity="0.2" />
      {/* Dots */}
      <circle cx="80" cy="90" r="3" fill={c} opacity="0.08" />
      <circle cx="250" cy="100" r="2.5" fill={c} opacity="0.06" />
    </svg>
  );
}

/** Code of Conduct — Heart with people, handshake, speech bubbles */
export function ConductIllustration() {
  const c = '#e11d48';
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="140" r="115" fill={c} opacity="0.03" />
      {/* Heart */}
      <path d="M160 100C160 100 130 65 105 75C80 85 80 115 105 140L160 190L215 140C240 115 240 85 215 75C190 65 160 100 160 100Z" fill={c} opacity="0.06" stroke={c} strokeWidth="1.5" strokeOpacity="0.2" />
      {/* People circle */}
      <circle cx="120" cy="210" r="10" fill={c} opacity="0.08" />
      <path d="M108 235C108 225 113 220 120 220S132 225 132 235" fill={c} opacity="0.05" />
      <circle cx="160" cy="205" r="10" fill={c} opacity="0.1" />
      <path d="M148 230C148 220 153 215 160 215S172 220 172 230" fill={c} opacity="0.06" />
      <circle cx="200" cy="210" r="10" fill={c} opacity="0.08" />
      <path d="M188 235C188 225 193 220 200 220S212 225 212 235" fill={c} opacity="0.05" />
      {/* Connecting arcs */}
      <path d="M132 215C140 208 148 208 148 208" fill="none" stroke={c} strokeWidth="1" strokeOpacity="0.1" />
      <path d="M172 208C172 208 180 208 188 215" fill="none" stroke={c} strokeWidth="1" strokeOpacity="0.1" />
      {/* Speech bubbles */}
      <rect x="80" y="80" width="35" height="22" rx="11" fill={c} opacity="0.08" />
      <circle cx="88" cy="91" r="2" fill={c} opacity="0.15" />
      <circle cx="95" cy="91" r="2" fill={c} opacity="0.15" />
      <circle cx="102" cy="91" r="2" fill={c} opacity="0.15" />
      <rect x="210" y="75" width="35" height="22" rx="11" fill={c} opacity="0.08" />
      <path d="M220 86H235" stroke={c} strokeWidth="2" strokeOpacity="0.12" strokeLinecap="round" />
      {/* Handshake */}
      <path d="M145 145L155 155L165 145" fill="none" stroke={c} strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Stars */}
      <circle cx="90" cy="130" r="2.5" fill={c} opacity="0.1" />
      <circle cx="235" cy="140" r="3" fill={c} opacity="0.08" />
      <circle cx="160" cy="60" r="2" fill={c} opacity="0.12" />
    </svg>
  );
}

/** Copyright & License — Open book with © symbol, code brackets, MIT badge */
export function CopyrightIllustration() {
  const c = '#0891b2';
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="140" r="115" fill={c} opacity="0.03" />
      {/* Open book */}
      <path d="M160 70V210" stroke={c} strokeWidth="1.5" strokeOpacity="0.15" />
      <path d="M160 70C140 65 100 68 85 75V205C100 198 140 195 160 200" fill={c} opacity="0.04" stroke={c} strokeWidth="1.5" strokeOpacity="0.15" />
      <path d="M160 70C180 65 220 68 235 75V205C220 198 180 195 160 200" fill={c} opacity="0.04" stroke={c} strokeWidth="1.5" strokeOpacity="0.15" />
      {/* Book lines left */}
      <line x1="100" y1="95" x2="145" y2="95" stroke={c} strokeWidth="1.5" strokeOpacity="0.1" strokeLinecap="round" />
      <line x1="100" y1="108" x2="140" y2="108" stroke={c} strokeWidth="1.5" strokeOpacity="0.07" strokeLinecap="round" />
      <line x1="100" y1="121" x2="142" y2="121" stroke={c} strokeWidth="1.5" strokeOpacity="0.08" strokeLinecap="round" />
      <line x1="100" y1="134" x2="138" y2="134" stroke={c} strokeWidth="1.5" strokeOpacity="0.06" strokeLinecap="round" />
      {/* Book lines right */}
      <line x1="175" y1="95" x2="220" y2="95" stroke={c} strokeWidth="1.5" strokeOpacity="0.1" strokeLinecap="round" />
      <line x1="175" y1="108" x2="215" y2="108" stroke={c} strokeWidth="1.5" strokeOpacity="0.07" strokeLinecap="round" />
      <line x1="175" y1="121" x2="218" y2="121" stroke={c} strokeWidth="1.5" strokeOpacity="0.08" strokeLinecap="round" />
      {/* © symbol */}
      <circle cx="160" cy="145" r="22" fill={c} opacity="0.08" stroke={c} strokeWidth="1.5" strokeOpacity="0.2" />
      <text x="160" y="153" textAnchor="middle" fontSize="22" fontWeight="bold" fill={c} opacity="0.3" fontFamily="serif">©</text>
      {/* Code brackets */}
      <text x="85" y="175" fontSize="28" fontWeight="bold" fill={c} opacity="0.1" fontFamily="monospace">{"<"}</text>
      <text x="225" y="175" fontSize="28" fontWeight="bold" fill={c} opacity="0.1" fontFamily="monospace">{">"}</text>
      {/* MIT badge */}
      <rect x="130" y="220" width="60" height="24" rx="12" fill={c} opacity="0.08" stroke={c} strokeWidth="1" strokeOpacity="0.15" />
      <text x="160" y="236" textAnchor="middle" fontSize="11" fontWeight="bold" fill={c} opacity="0.3" fontFamily="system-ui">MIT</text>
      {/* Dots */}
      <circle cx="75" cy="85" r="3" fill={c} opacity="0.08" />
      <circle cx="250" cy="180" r="2.5" fill={c} opacity="0.06" />
    </svg>
  );
}

/** Disclaimer — Warning triangle with info circles, caution tape pattern */
export function DisclaimerIllustration() {
  const c = '#d97706';
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="140" r="115" fill={c} opacity="0.03" />
      {/* Large warning triangle */}
      <path d="M160 50L260 210H60Z" fill={c} opacity="0.05" stroke={c} strokeWidth="1.5" strokeOpacity="0.15" />
      <path d="M160 75L240 200H80Z" fill="none" stroke={c} strokeWidth="1" strokeOpacity="0.1" strokeDasharray="6 4" />
      {/* Exclamation mark */}
      <line x1="160" y1="110" x2="160" y2="155" stroke={c} strokeWidth="4" strokeOpacity="0.2" strokeLinecap="round" />
      <circle cx="160" cy="170" r="4" fill={c} opacity="0.25" />
      {/* Info circles */}
      <circle cx="95" cy="100" r="16" fill={c} opacity="0.06" stroke={c} strokeWidth="1" strokeOpacity="0.12" />
      <text x="95" y="106" textAnchor="middle" fontSize="16" fontWeight="bold" fill={c} opacity="0.2" fontFamily="serif">i</text>
      <circle cx="230" cy="105" r="14" fill={c} opacity="0.06" stroke={c} strokeWidth="1" strokeOpacity="0.12" />
      <text x="230" y="111" textAnchor="middle" fontSize="14" fontWeight="bold" fill={c} opacity="0.2" fontFamily="serif">i</text>
      {/* Caution stripes */}
      <rect x="80" y="225" width="160" height="12" rx="6" fill={c} opacity="0.06" />
      <line x1="90" y1="225" x2="100" y2="237" stroke={c} strokeWidth="2" strokeOpacity="0.1" />
      <line x1="110" y1="225" x2="120" y2="237" stroke={c} strokeWidth="2" strokeOpacity="0.1" />
      <line x1="130" y1="225" x2="140" y2="237" stroke={c} strokeWidth="2" strokeOpacity="0.1" />
      <line x1="150" y1="225" x2="160" y2="237" stroke={c} strokeWidth="2" strokeOpacity="0.1" />
      <line x1="170" y1="225" x2="180" y2="237" stroke={c} strokeWidth="2" strokeOpacity="0.1" />
      <line x1="190" y1="225" x2="200" y2="237" stroke={c} strokeWidth="2" strokeOpacity="0.1" />
      <line x1="210" y1="225" x2="220" y2="237" stroke={c} strokeWidth="2" strokeOpacity="0.1" />
      {/* Dots */}
      <circle cx="75" cy="170" r="3" fill={c} opacity="0.08" />
      <circle cx="250" cy="165" r="2.5" fill={c} opacity="0.06" />
      <circle cx="160" cy="250" r="2" fill={c} opacity="0.08" />
    </svg>
  );
}

/** Accessibility — Universal access symbol with eye, keyboard, hand, sound waves */
export function AccessibilityIllustration() {
  const c = '#138808';
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="140" r="115" fill={c} opacity="0.03" />
      {/* Universal access circle */}
      <circle cx="160" cy="130" r="70" fill="none" stroke={c} strokeWidth="2" strokeOpacity="0.12" />
      <circle cx="160" cy="130" r="55" fill={c} opacity="0.04" />
      {/* Person figure */}
      <circle cx="160" cy="100" r="12" fill={c} opacity="0.15" />
      <line x1="160" y1="112" x2="160" y2="145" stroke={c} strokeWidth="3" strokeOpacity="0.15" strokeLinecap="round" />
      <line x1="140" y1="125" x2="180" y2="125" stroke={c} strokeWidth="3" strokeOpacity="0.15" strokeLinecap="round" />
      <line x1="160" y1="145" x2="145" y2="170" stroke={c} strokeWidth="3" strokeOpacity="0.15" strokeLinecap="round" />
      <line x1="160" y1="145" x2="175" y2="170" stroke={c} strokeWidth="3" strokeOpacity="0.15" strokeLinecap="round" />
      {/* Eye icon (left) */}
      <ellipse cx="80" cy="110" rx="18" ry="10" fill={c} opacity="0.06" stroke={c} strokeWidth="1" strokeOpacity="0.12" />
      <circle cx="80" cy="110" r="5" fill={c} opacity="0.12" />
      {/* Keyboard icon (right) */}
      <rect x="225" y="120" width="36" height="24" rx="4" fill={c} opacity="0.06" stroke={c} strokeWidth="1" strokeOpacity="0.12" />
      <rect x="230" y="126" width="6" height="4" rx="1" fill={c} opacity="0.1" />
      <rect x="239" y="126" width="6" height="4" rx="1" fill={c} opacity="0.1" />
      <rect x="248" y="126" width="6" height="4" rx="1" fill={c} opacity="0.1" />
      <rect x="233" y="134" width="16" height="4" rx="1" fill={c} opacity="0.1" />
      {/* Sound waves (top-right) */}
      <path d="M220 70 Q230 65 225 55" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity="0.1" />
      <path d="M225 72 Q238 65 232 52" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity="0.08" />
      <path d="M230 74 Q246 65 239 49" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity="0.06" />
      {/* Hand/touch icon (bottom-left) */}
      <circle cx="90" cy="190" r="6" fill={c} opacity="0.08" />
      <line x1="90" y1="196" x2="90" y2="215" stroke={c} strokeWidth="2" strokeOpacity="0.1" strokeLinecap="round" />
      <line x1="90" y1="205" x2="80" y2="200" stroke={c} strokeWidth="1.5" strokeOpacity="0.08" strokeLinecap="round" />
      {/* WCAG badge */}
      <rect x="120" y="215" width="80" height="24" rx="12" fill={c} opacity="0.06" stroke={c} strokeWidth="1" strokeOpacity="0.1" />
      <text x="160" y="231" textAnchor="middle" fontSize="10" fontWeight="bold" fill={c} opacity="0.2" fontFamily="system-ui">WCAG 2.1 AA</text>
      {/* Dots */}
      <circle cx="75" cy="70" r="3" fill={c} opacity="0.06" />
      <circle cx="250" cy="180" r="2.5" fill={c} opacity="0.05" />
      <circle cx="160" cy="260" r="2" fill={c} opacity="0.06" />
    </svg>
  );
}
