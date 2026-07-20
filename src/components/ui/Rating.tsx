import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  maxStars?: number;
  size?: "sm" | "md";
  showValue?: boolean;
  className?: string;
}

const sizeClasses: Record<string, string> = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
};

export default function Rating({
  value,
  maxStars = 5,
  size = "sm",
  showValue = false,
  className = "",
}: RatingProps) {
  const fullStars = Math.floor(value);

  return (
    <span className={["inline-flex items-center gap-0.5", className].join(" ")}>
      {Array.from({ length: maxStars }, (_, i) => (
        <Star
          key={i}
          className={[
            sizeClasses[size],
            i < fullStars ? "fill-gold text-gold" : "fill-line text-line",
          ].join(" ")}
        />
      ))}
      {showValue && (
        <span className="text-xs text-charcoal tabular-nums ml-1">
          {value.toFixed(1)}
        </span>
      )}
    </span>
  );
}
