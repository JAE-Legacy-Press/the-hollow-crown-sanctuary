export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`ornament ${className}`.trim()}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
        {/* Three small marks in a triangle — echo of the four pillars/hollow */}
        <circle cx="12" cy="6" r="1.4" fill="currentColor" />
        <circle cx="6" cy="16" r="1.4" fill="currentColor" />
        <circle cx="18" cy="16" r="1.4" fill="currentColor" />
        <path d="M12 8.5 L8 14.5" />
        <path d="M12 8.5 L16 14.5" />
        <path d="M8.5 16 L15.5 16" opacity="0.55" />
      </svg>
    </div>
  );
}
