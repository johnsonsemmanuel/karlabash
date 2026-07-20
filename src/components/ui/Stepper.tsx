import { Minus, Plus } from "lucide-react";

interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export default function Stepper({
  value,
  onChange,
  min = 1,
  max = 10,
  className = "",
}: StepperProps) {
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  const increment = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className={["inline-flex items-center gap-0", className].join(" ")}>
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        className="w-9 h-9 rounded-[7px] border border-line flex items-center justify-center cursor-pointer transition-colors hover:bg-ink/5 disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Decrease"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-12 text-center font-semibold tabular-nums text-ink">
        {value}
      </span>
      <button
        type="button"
        onClick={increment}
        disabled={value >= max}
        className="w-9 h-9 rounded-[7px] border border-line flex items-center justify-center cursor-pointer transition-colors hover:bg-ink/5 disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Increase"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
