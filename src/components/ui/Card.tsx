import { cn } from "@/lib/cn";
import { ReactNode } from "react";

export interface CardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  headerRight?: ReactNode;
  scanline?: boolean;
  className?: string;
  bodyClassName?: string;
  children?: ReactNode;
}

export function Card({
  title,
  subtitle,
  headerRight,
  scanline,
  className,
  bodyClassName,
  children,
}: CardProps) {
  return (
    <div className={cn("tactical relative shadow-panel", scanline && "scanline", className)}>
      {(title || headerRight) && (
        <header className="flex items-start justify-between gap-4 px-5 pt-4 pb-3 border-b border-white/5">
          <div className="min-w-0">
            {title && (
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-100">
                {title}
              </div>
            )}
            {subtitle && (
              <div className="mt-0.5 text-[13px] text-ink-100/70">{subtitle}</div>
            )}
          </div>
          {headerRight && <div className="flex-shrink-0">{headerRight}</div>}
        </header>
      )}
      <div className={cn("px-5 py-4", bodyClassName)}>{children}</div>
    </div>
  );
}
