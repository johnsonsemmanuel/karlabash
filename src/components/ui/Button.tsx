import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "gold";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const variantClasses: Record<string, string> = {
  primary:
    "bg-red-karlabash text-white hover:bg-red-karlabash-dark",
  secondary:
    "border border-line text-ink bg-transparent hover:bg-ink/5",
  tertiary:
    "text-charcoal underline-offset-2 hover:underline",
  gold:
    "bg-gold text-ink hover:bg-gold-dark",
};

const sizeClasses: Record<string, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        "font-semibold rounded-[7px] transition-colors duration-150 cursor-pointer",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
