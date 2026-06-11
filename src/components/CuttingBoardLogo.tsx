export default function CuttingBoardLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Handle */}
      <path
        d="M28 52 C20 52, 14 48, 10 42 C6 36, 6 30, 10 24 C14 18, 20 16, 28 16"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Handle hole */}
      <circle cx="16" cy="34" r="2.5" fill="currentColor" />
      {/* Board body */}
      <rect
        x="28"
        y="8"
        width="84"
        height="58"
        rx="8"
        ry="8"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
      />
    </svg>
  );
}
