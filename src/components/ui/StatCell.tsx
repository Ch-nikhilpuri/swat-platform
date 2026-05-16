import { cn } from "@/lib/cn";

type Accent = "critical" | "positive" | "signal" | "neutral";

const accentMap: Record<Accent, string> = {
  critical: "text-critical-400",
  positive: "text-positive-400",
  signal: "text-signal-300",
  neutral: "text-white",
};

export function StatCell({
  label,
  value,
  delta,
  accent = "neutral",
  className,
}: {
  label: string;
  value: string | number;
  delta?: string;
  accent?: Accent;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-ink-100/70">
        {label}
      </div>
      <div className={cn("font-display text-2xl leading-none", accentMap[accent])}>{value}</div>
      {delta && (
        <div className="text-[10px] font-mono text-ink-100/70 tracking-wide">{delta}</div>
      )}
    </div>
  );
}
