"use client";

import { ChevronRight, ChevronLeft, Sparkles, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function AIAdvisor({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  if (!open) {
    return (
      <div className="h-full flex flex-col items-center pt-4">
        <button
          onClick={onToggle}
          className="h-8 w-8 grid place-items-center rounded-md hover:bg-white/[0.04] text-ink-100"
          aria-label="Open AI Advisor"
        >
          <ChevronLeft size={14} />
        </button>
        <span className="mt-3 w-2 h-2 rounded-full bg-signal-400 animate-pulse_signal" />
        <div
          className="mt-3 text-[10px] font-mono uppercase tracking-[0.3em] text-ink-100/70"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Advisor
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <header className="h-14 px-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="signal-dot bg-signal-400" />
          <div className="flex flex-col leading-tight">
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-signal-300">
              Advisor · Active
            </div>
            <div className="text-[11px] font-medium text-white">AI Supply Advisor</div>
          </div>
        </div>
        <button
          onClick={onToggle}
          className="h-7 w-7 grid place-items-center rounded-md hover:bg-white/[0.04] text-ink-100"
          aria-label="Collapse"
        >
          <ChevronRight size={14} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <Section title="Now Brief" icon={<Sparkles size={11} />}>
          <p className="text-[12px] leading-relaxed text-ink-100/90">
            Overnight, agents processed 27 supplier signals. Critical exposure on{" "}
            <span className="text-white">Dirt</span> and{" "}
            <span className="text-white">Sports</span> lines, driven by TrailFlex
            (POA missing, 22d) and AeroCarbon (PF unconfirmed). Portfolio OTIF 74%.
          </p>
        </Section>

        <Section title="Recommendations" icon={<Zap size={11} />} defaultOpen>
          <ol className="space-y-2">
            {[
              "Escalate TrailFlex POA — auto-draft ready",
              "Reroute Carbon Frameset to AeroCarbon-2 — +$420K saved",
              "Approve overnight agent batch — 27 actions queued",
            ].map((rec, i) => (
              <li
                key={i}
                className="flex gap-2 text-[12px] leading-snug text-ink-100/90"
              >
                <span className="font-mono text-signal-300 mt-px">0{i + 1}</span>
                <span>{rec}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Predictions" icon={<TrendingUp size={11} />}>
          <div className="text-[11px] text-ink-100/70 mb-2">
            Production Risk Forecast · Next 7 Days
          </div>
          <div className="flex items-end gap-1 h-16">
            {[42, 58, 71, 84, 68, 51, 47].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={cn(
                    "w-full rounded-sm",
                    v >= 70
                      ? "bg-critical-500/70"
                      : v >= 50
                      ? "bg-signal-400/70"
                      : "bg-positive-500/70",
                  )}
                  style={{ height: `${v}%` }}
                />
                <div className="text-[8.5px] font-mono text-ink-100/50">
                  D{i + 1}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <footer className="p-3 border-t border-white/5">
        <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-white/5 bg-white/[0.02]">
          <Sparkles size={12} className="text-signal-300" />
          <input
            placeholder="Ask the advisor…"
            className="flex-1 bg-transparent outline-none text-[12px] placeholder:text-ink-100/40"
            disabled
          />
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
  defaultOpen = true,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="tactical">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-3 py-2 flex items-center gap-2 text-left"
      >
        <span className="text-signal-300">{icon}</span>
        <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-100">
          {title}
        </span>
        <span className="ml-auto text-ink-100/50 text-xs">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-3 pb-3 pt-1">{children}</div>}
    </div>
  );
}
