import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/common/PageHeader";
import { Play, Sparkles } from "lucide-react";

const SCENARIOS = [
  {
    name: "Dual-Source AeroCarbon",
    impact: "+$420K margin uplift",
    horizon: "90d",
    confidence: 0.82,
  },
  {
    name: "Air-Freight TrailFlex Shocks",
    impact: "−7d to recover Dirt Apr build",
    horizon: "14d",
    confidence: 0.74,
  },
  {
    name: "Pre-pay Velora Q3 lock-in",
    impact: "−5% unit cost, −9d lead",
    horizon: "120d",
    confidence: 0.68,
  },
  {
    name: "Domestic Live-Axle (qualify 2nd)",
    impact: "Resilience +18 pts on Tricycle line",
    horizon: "180d",
    confidence: 0.55,
  },
];

export default function PlanPage() {
  return (
    <div>
      <PageHeader
        title="Plan & Simulate"
        description="Run what-if scenarios against the live supplier graph. Adjust demand, lead times, supplier risk and logistics constraints — the simulator returns margin, OTIF and resilience deltas in real time."
        status="coming"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        <Card title="Simulation Control Panel">
          <div className="space-y-4">
            {[
              ["Demand Index", "+8% YoY", 58],
              ["Lead-Time Multiplier", "1.20×", 40],
              ["Logistics Disruption", "Taichung port +7d", 70],
              ["Carbon Spot Price", "+18% WoW", 75],
            ].map(([label, val, pct]) => (
              <div key={label as string}>
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-mono uppercase tracking-[0.16em] text-ink-100/70">
                    {label}
                  </span>
                  <span className="font-mono text-white">{val}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-signal-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}

            <button className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-signal-400/15 border border-signal-400/30 text-signal-300 hover:bg-signal-400/20 text-[12px] font-mono uppercase tracking-[0.16em]">
              <Play size={12} /> Run Simulation
            </button>
          </div>
        </Card>

        <Card
          title={
            <span className="flex items-center gap-2">
              <Sparkles size={11} className="text-signal-300" /> Scenario Library
            </span>
          }
          bodyClassName="p-0"
        >
          <ul className="divide-y divide-white/5">
            {SCENARIOS.map((s) => (
              <li key={s.name} className="px-4 py-3 hover:bg-signal-400/[0.04]">
                <div className="text-[13px] text-white">{s.name}</div>
                <div className="mt-1 text-[11px] text-ink-100/80">{s.impact}</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="mono">{s.horizon}</Badge>
                  <span className="text-[10px] font-mono text-ink-100/60">
                    confidence {(s.confidence * 100).toFixed(0)}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
