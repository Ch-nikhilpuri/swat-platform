import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type Variant = "critical" | "warning" | "positive" | "info" | "mono" | "signal";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  critical: "bg-critical-500/15 text-critical-400 border-critical-500/30",
  warning:  "bg-warning-500/15 text-warning-400 border-warning-500/30",
  positive: "bg-positive-500/15 text-positive-400 border-positive-500/30",
  info:     "bg-info-500/15 text-info-400 border-info-500/30",
  signal:   "bg-signal-400/15 text-signal-300 border-signal-400/30",
  mono:     "bg-white/5 text-ink-100 border-white/10",
};

export function Badge({
  variant = "mono",
  size = "sm",
  className,
  children,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border rounded-md font-mono uppercase tracking-[0.12em]",
        size === "sm" ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-1 text-[11px]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
