import { cn } from "@/lib/cn";

export function RiskBar({
  value,
  className,
  height = 6,
  invert = false,
}: {
  value: number; // 0-100
  className?: string;
  height?: number;
  invert?: boolean; // if true, low is bad (OTIF style)
}) {
  const v = Math.max(0, Math.min(100, value));
  // For OTIF (invert=true): higher is good (green); lower is red.
  // For risk score (invert=false): higher is bad (red).
  const scoreForColor = invert ? 100 - v : v;
  const color =
    scoreForColor >= 70 ? "bg-critical-500"
    : scoreForColor >= 40 ? "bg-signal-400"
    : "bg-positive-500";
  return (
    <div
      className={cn("relative w-full rounded-full bg-white/5 overflow-hidden", className)}
      style={{ height }}
    >
      <div
        className={cn("h-full rounded-full transition-all", color)}
        style={{ width: `${v}%` }}
      />
    </div>
  );
}
