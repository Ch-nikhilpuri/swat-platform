import { cn } from "@/lib/cn";

type Color = "amber" | "red" | "green" | "blue";

const colorMap: Record<Color, { bg: string; ring: string }> = {
  amber: { bg: "bg-signal-400",  ring: "shadow-[0_0_0_0_rgba(245,166,35,0.6)]" },
  red:   { bg: "bg-critical-500", ring: "shadow-[0_0_0_0_rgba(232,69,69,0.6)]" },
  green: { bg: "bg-positive-500", ring: "shadow-[0_0_0_0_rgba(34,199,134,0.6)]" },
  blue:  { bg: "bg-info-500",     ring: "shadow-[0_0_0_0_rgba(61,140,230,0.6)]" },
};

export function Signal({
  color = "amber",
  size = 6,
  className,
}: {
  color?: Color;
  size?: number;
  className?: string;
}) {
  const { bg, ring } = colorMap[color];
  return (
    <span
      style={{ width: size, height: size }}
      className={cn("inline-block rounded-full animate-pulse_signal", bg, ring, className)}
    />
  );
}
