import type { CSSProperties } from "react";

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as CSSProperties;

/** A person icon: head + shoulders, drawn as an outline. */
function Person({ x, y, r, width = 2.6 }: { x: number; y: number; r: number; width?: number }) {
  const shoulder = r * 1.9;
  return (
    <g strokeWidth={width}>
      <circle cx={x} cy={y} r={r} />
      <path
        d={`M${x - shoulder} ${y + r * 3.4} C${x - shoulder} ${y + r * 1.9} ${x - r} ${y + r * 1.45} ${x} ${y + r * 1.45} C${x + r} ${y + r * 1.45} ${x + shoulder} ${y + r * 1.9} ${x + shoulder} ${y + r * 3.4}`}
      />
    </g>
  );
}

const particles = [
  [118, 300, 1.8, 0],
  [292, 292, 2.2, 0.6],
  [96, 252, 1.4, 1.2],
  [318, 250, 1.6, 0.3],
  [160, 118, 1.5, 0.9],
  [246, 104, 1.8, 1.5],
  [205, 330, 2.4, 0.2],
  [178, 320, 1.4, 1.1],
  [230, 318, 1.6, 0.7],
  [70, 200, 1.2, 1.8],
  [340, 196, 1.3, 0.4],
] as const;

/**
 * Glowing network of people with a "selected" checkmark, floating above an
 * open hand in the hero photo. Pure SVG + CSS animation, decorative only.
 */
export function TalentNetwork({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" className={className} aria-hidden focusable="false">
      <defs>
        <filter id="tn-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="animate-float">
        {/* Connections */}
        <g stroke="#8daad2" strokeOpacity="0.45" strokeWidth="1.4" strokeDasharray="3 5" fill="none">
          <path d="M200 236 L132 262" />
          <path d="M200 236 L268 262" />
          <path d="M132 262 L86 214" />
          <path d="M268 262 L314 214" />
          <path d="M200 236 L156 162" />
          <path d="M200 236 L250 168" />
        </g>

        {/* People */}
        <g fill="none" stroke="#ffffff" strokeLinecap="round" filter="url(#tn-glow)">
          <Person x={200} y={214} r={21} width={3.2} />
          <g opacity="0.92">
            <Person x={132} y={246} r={14} />
            <Person x={268} y={246} r={14} />
          </g>
          <g opacity="0.75" stroke="#e0e8f3">
            <Person x={86} y={202} r={9.5} width={2.2} />
            <Person x={314} y={202} r={9.5} width={2.2} />
            <Person x={156} y={152} r={8} width={2} />
            <Person x={250} y={158} r={8} width={2} />
          </g>
        </g>

        {/* "Selected" checkmark */}
        <g className="hero-fade" style={delay(1.4)} filter="url(#tn-glow)">
          <rect x="173" y="110" width="54" height="54" rx="13" fill="#121f31" fillOpacity="0.55" stroke="#ffffff" strokeWidth="2.6" />
          <path
            d="M186 138 L197 149 L215 126"
            fill="none"
            stroke="#e0773d"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            className="hero-draw"
            style={delay(1.9)}
          />
        </g>
      </g>

      {/* Twinkling particles */}
      <g fill="#ffffff" filter="url(#tn-glow)">
        {particles.map(([cx, cy, r, d]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={r}
            className="animate-pulse"
            style={{ animationDelay: `${d}s`, animationDuration: "2.4s" }}
          />
        ))}
      </g>
    </svg>
  );
}
