import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  onClick,
  hover = false,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={[
        "bg-white border border-line rounded-[7px] overflow-hidden",
        hover && "hover:border-charcoal/30 transition",
        onClick && "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
