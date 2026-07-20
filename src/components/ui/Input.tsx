import type { ReactNode, InputHTMLAttributes } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  onChange?: (value: string) => void;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  className = "",
  id,
  required,
  disabled,
  ...rest
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={["flex flex-col gap-1.5", className].join(" ")}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-ink"
        >
          {label}
          {required && <span className="text-red-karlabash ml-0.5">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/50 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required={required}
          disabled={disabled}
          className={[
            "h-11 w-full border rounded-[7px] bg-white text-ink text-sm",
            "placeholder:text-charcoal/40 focus:outline-none transition",
            error
              ? "border-red-karlabash focus:border-red-karlabash"
              : "border-line focus:border-red-karlabash",
            icon && "pl-11",
            "px-4",
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        />
      </div>
      {error && (
        <p className="text-red-karlabash text-xs">{error}</p>
      )}
    </div>
  );
}
