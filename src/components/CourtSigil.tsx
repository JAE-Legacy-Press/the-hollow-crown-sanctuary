type SigilName = "bone" | "tide" | "hollow" | "marsh";

const PATHS: Record<SigilName, React.ReactNode> = {
  // Bone: antler — two diverging branches from a single stem
  bone: (
    <>
      <path d="M16 30 L16 14" />
      <path d="M16 14 L10 8" />
      <path d="M16 14 L22 8" />
      <path d="M10 8 L7 10" />
      <path d="M10 8 L9 4.5" />
      <path d="M22 8 L25 10" />
      <path d="M22 8 L23 4.5" />
    </>
  ),
  // Tide: a single waveform — three crests, weighted center
  tide: (
    <path d="M3 20 C 7 14, 9 14, 12 20 S 17 26, 20 20 S 25 14, 29 20" />
  ),
  // Hollow: four pillar marks at cardinal points, faint ring through them
  hollow: (
    <>
      <circle cx="16" cy="16" r="9" opacity="0.45" />
      <rect x="15.1" y="4.5" width="1.8" height="5" fill="currentColor" stroke="none" />
      <rect x="15.1" y="22.5" width="1.8" height="5" fill="currentColor" stroke="none" />
      <rect x="4.5" y="15.1" width="5" height="1.8" fill="currentColor" stroke="none" />
      <rect x="22.5" y="15.1" width="5" height="1.8" fill="currentColor" stroke="none" />
    </>
  ),
  // Marsh: three reeds standing in water (waterline beneath)
  marsh: (
    <>
      <path d="M9 28 L9 10" />
      <path d="M16 28 L16 5" />
      <path d="M23 28 L23 12" />
      <path d="M9 10 L11 7" opacity="0.85" />
      <path d="M16 5 L18 2.5" opacity="0.85" />
      <path d="M23 12 L25 9" opacity="0.85" />
      <path d="M3 28 L29 28" opacity="0.55" />
    </>
  ),
};

export function CourtSigil({ name, className = "" }: { name: SigilName; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`sigil ${className}`.trim()}
      stroke="currentColor"
    >
      {PATHS[name]}
    </svg>
  );
}
