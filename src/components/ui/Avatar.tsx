import { useState } from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  fallback?: string;
}

const sizeClasses: Record<string, string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
  xl: "w-20 h-20 text-lg",
};

export default function Avatar({
  src,
  alt = "",
  size = "md",
  className = "",
  fallback = "?",
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showFallback = !src || imgError;

  return (
    <div
      className={[
        "rounded-full border-2 border-white overflow-hidden inline-flex items-center justify-center flex-shrink-0",
        sizeClasses[size],
        showFallback && "bg-charcoal text-white font-semibold",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {showFallback ? (
        <span>{fallback?.charAt(0).toUpperCase()}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
