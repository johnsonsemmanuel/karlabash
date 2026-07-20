import type { ReactNode } from "react";

interface BadgeProps {
  variant?: "red" | "gold" | "green" | "charcoal";
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<string, string> = {
  red: "bg-red-karlabash text-white",
  gold: "bg-gold text-ink",
  green: "bg-success text-white",
  charcoal: "bg-charcoal text-white",
};

export default function Badge({
  variant = "red",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "text-xs font-semibold px-2 py-0.5 rounded-[4px] uppercase tracking-wide",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
