interface PriceTagProps {
  amount: number;
  currency?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<string, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl font-bold",
};

export default function PriceTag({
  amount,
  currency = "GHS",
  className = "",
  size = "md",
}: PriceTagProps) {
  const formatted = amount.toFixed(2);

  return (
    <span
      className={[
        "text-ink tabular-nums",
        sizeClasses[size],
        className,
      ].join(" ")}
    >
      {currency} {formatted}
    </span>
  );
}
