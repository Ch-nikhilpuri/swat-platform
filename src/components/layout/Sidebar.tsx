"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  AlertOctagon,
  Boxes,
  Cpu,
  GaugeCircle,
  Hexagon,
  PackageSearch,
  Settings,
  Sigma,
} from "lucide-react";
import { cn } from "@/lib/cn";

type NavItem = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  badge?: { value: string; tone: "critical" | "signal" | "info" };
};

const SECTIONS: { title: string; items: NavItem[] }[] = [
  {
    title: "Command",
    items: [{ href: "/", label: "Command Center", Icon: GaugeCircle }],
  },
  {
    title: "Disruptions",
    items: [
      {
        href: "/disruptions",
        label: "Disruption Workspace",
        Icon: AlertOctagon,
        badge: { value: "4", tone: "critical" },
      },
    ],
  },
  {
    title: "Suppliers",
    items: [{ href: "/suppliers", label: "Supplier Network", Icon: Activity }],
  },
  {
    title: "Parts & Orders",
    items: [{ href: "/parts", label: "Parts & Orders", Icon: PackageSearch }],
  },
  {
    title: "Plan & Simulate",
    items: [{ href: "/plan", label: "Plan & Simulate", Icon: Sigma }],
  },
  {
    title: "Intelligence",
    items: [
      {
        href: "/intelligence",
        label: "AI Operations",
        Icon: Cpu,
        badge: { value: "6", tone: "signal" },
      },
    ],
  },
  {
    title: "Platform",
    items: [{ href: "/platform", label: "Settings", Icon: Settings }],
  },
];

export function Sidebar() {
  const pathname = usePathname() || "/";

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 pt-6 pb-5 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Hexagon
              size={28}
              className="text-signal-400 drop-shadow-[0_0_8px_rgba(245,166,35,0.55)]"
              strokeWidth={1.5}
            />
          </div>
          <div className="flex flex-col leading-none">
            <div className="font-display text-[17px] tracking-wide">SWAT</div>
            <div className="mt-1 text-[8.5px] font-mono uppercase tracking-[0.24em] text-signal-300/80">
              Resilience OS
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-3 space-y-4 overflow-y-auto">
        {SECTIONS.map((sec) => (
          <div key={sec.title}>
            <div className="px-2 mb-1 text-[9px] font-mono uppercase tracking-[0.2em] text-ink-100/50">
              {sec.title}
            </div>
            <ul className="space-y-0.5">
              {sec.items.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] relative transition-colors",
                        active
                          ? "bg-signal-400/10 text-white"
                          : "text-ink-100 hover:text-white hover:bg-white/[0.03]",
                      )}
                    >
                      {active && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-signal-400 rounded-r-sm" />
                      )}
                      <item.Icon
                        size={15}
                        className={cn(active ? "text-signal-300" : "text-ink-100/80")}
                      />
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge && (
                        <span
                          className={cn(
                            "px-1.5 py-0.5 text-[9px] font-mono rounded",
                            item.badge.tone === "critical" &&
                              "bg-critical-500/20 text-critical-400",
                            item.badge.tone === "signal" &&
                              "bg-signal-400/20 text-signal-300",
                            item.badge.tone === "info" &&
                              "bg-info-500/20 text-info-400",
                          )}
                        >
                          {item.badge.value}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer presenter chip */}
      <div className="px-3 pb-4 pt-2 border-t border-white/5">
        <div className="flex items-center gap-2 px-2 py-2 rounded-md bg-white/[0.02] border border-white/5">
          <span className="inline-block w-2 h-2 rounded-full bg-positive-500 animate-pulse_signal shadow-[0_0_0_0_rgba(34,199,134,0.6)]" />
          <div className="flex flex-col leading-tight">
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-100">
              System Online
            </div>
            <div className="text-[10px] font-mono text-ink-100/60">
              <Boxes className="inline-block mr-1 align-[-2px]" size={10} />
              6 Agents
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
