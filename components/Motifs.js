// Decorative motifs drawn from South Asian textile and architectural vocabulary:
// jaali lattice screens, block-print repeats, and the pointed arch.
// All are inline SVG so nothing depends on external assets in the mockup.

export function JaaliPattern({ id = "jaali", className = "", opacity = 0.16 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="100%"
      height="100%"
      style={{ opacity }}
    >
      <defs>
        <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M28 0 L56 28 L28 56 L0 28 Z" />
            <path d="M28 14 L42 28 L28 42 L14 28 Z" />
            <circle cx="28" cy="28" r="3.5" />
            <path d="M0 0 L14 14 M56 0 L42 14 M0 56 L14 42 M56 56 L42 42" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function BlockPrintRule({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 8h84" />
      <path d="M156 8h84" />
      <path d="M120 1l7 7-7 7-7-7z" />
      <circle cx="100" cy="8" r="2.5" />
      <circle cx="140" cy="8" r="2.5" />
    </svg>
  );
}

export function LotusMark({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M24 6c4 6 6 11 6 16s-2 10-6 16c-4-6-6-11-6-16s2-10 6-16z" />
      <path d="M24 38c-6-2-11-6-14-12 5-1 10 0 14 4" />
      <path d="M24 38c6-2 11-6 14-12-5-1-10 0-14 4" />
    </svg>
  );
}

// A pointed-arch frame that stands in for product photography in this mockup.
export function ArchPlaceholder({ label, tone = "jade", className = "" }) {
  const tones = {
    jade: "from-jade-700 to-jade-500 text-jade-100",
    clay: "from-[#8a4f39] to-[#b4674a] text-sand-100",
    brass: "from-[#7a6338] to-[#a98a54] text-sand-100",
    sand: "from-sand-300 to-sand-200 text-jade-800",
  };

  return (
    <div
      className={`rooh-arch relative overflow-hidden bg-gradient-to-b ${tones[tone] || tones.jade} ${className}`}
    >
      <div className="absolute inset-0 text-current">
        <JaaliPattern id={`jaali-${tone}-${label?.replace(/\W+/g, "") || "x"}`} opacity={0.2} />
      </div>
      <div className="absolute inset-0 flex items-end justify-center p-6">
        <span className="text-[11px] uppercase tracking-[0.28em] opacity-70">{label}</span>
      </div>
    </div>
  );
}
