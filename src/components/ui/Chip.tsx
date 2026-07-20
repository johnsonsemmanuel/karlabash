import type { ReactNode } from "react";

interface ChipProps {
  selected?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export default function Chip({
  selected = false,
  onClick,
  children,
  className = "",
}: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "border rounded-full px-4 py-1.5 text-sm font-medium cursor-pointer transition-colors",
        selected
          ? "bg-gold text-ink border-gold"
          : "bg-transparent text-charcoal border-line hover:border-charcoal/40",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
