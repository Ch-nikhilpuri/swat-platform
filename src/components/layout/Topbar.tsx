"use client";

import { Bell, Command, User } from "lucide-react";
import { usePathname } from "next/navigation";

const TITLES: Record<string, string> = {
  "/": "Command Center",
  "/disruptions": "Disruption Workspace",
  "/suppliers": "Supplier Network",
  "/parts": "Parts & Orders",
  "/plan": "Plan & Simulate",
  "/intelligence": "AI Operations",
  "/platform": "Platform",
};

export function Topbar() {
  const pathname = usePathname() || "/";
  const title =
    TITLES[pathname] ||
    Object.entries(TITLES).find(([k]) => k !== "/" && pathname.startsWith(k))?.[1] ||
    "Command Center";

  return (
    <header className="sticky top-0 z-20 h-14 px-6 flex items-center justify-between border-b border-white/5 bg-ink-800/70 backdrop-blur-xl">
      <div className="flex items-center gap-3 min-w-0">
        <div className="font-display text-[18px] leading-none truncate">{title}</div>
        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-100/60 hidden md:block">
          / Resilience OS
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
        <span className="flex items-center gap-1.5 text-[10px] font-mono text-positive-400">
          <span className="signal-dot bg-positive-500" />
          LIVE
        </span>
        <span className="w-px h-3 bg-white/10" />
        <span className="text-[10px] font-mono text-ink-100/80 tracking-wider">
          MAY 16 09:47
        </span>
        <span className="w-px h-3 bg-white/10" />
        <span className="text-[10px] font-mono text-critical-400 tracking-wider">
          4 CRITICAL
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-[11px] font-mono text-ink-100">
          <Command size={12} />
          K
        </button>
        <button className="relative h-8 w-8 grid place-items-center rounded-md border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-ink-100">
          <Bell size={14} />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-critical-500" />
        </button>
        <div className="h-8 w-8 grid place-items-center rounded-full bg-signal-400/15 border border-signal-400/30 text-signal-300">
          <User size={13} />
        </div>
      </div>
    </header>
  );
}
