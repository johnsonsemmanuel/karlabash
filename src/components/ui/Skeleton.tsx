interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export default function Skeleton({
  className = "",
  width,
  height,
}: SkeletonProps) {
  return (
    <div
      className={["bg-line/50 rounded-[7px] animate-pulse", className].join(" ")}
      style={{ width, height }}
    />
  );
}
