import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Signal } from "@/components/ui/Signal";
import { StatCell } from "@/components/ui/StatCell";
import { RiskBar } from "@/components/ui/RiskBar";
import { StaggerGroup, StaggerItem } from "@/components/common/Stagger";
import { DISRUPTIONS } from "@/lib/data/disruptions";
import { SUPPLIERS } from "@/lib/data/suppliers";
import { BOM_MODELS } from "@/lib/data/bom";
import { KPIS } from "@/lib/data/kpis";
import { getSupplier } from "@/lib/data/suppliers";
import { ArrowUpRight, Bot, Plane, Ship, Truck } from "lucide-react";
import { Fragment } from "react";

const PRODUCT_RISK: Record<string, { Apr: "red" | "amber" | "green"; May: "red" | "amber" | "green" }> = {
  Dirt:     { Apr: "red",   May: "red"   },
  Sports:   { Apr: "amber", May: "red"   },
  Hybrid:   { Apr: "amber", May: "amber" },
  Tricycle: { Apr: "amber", May: "green" },
  Child:    { Apr: "green", May: "green" },
};

const RISK_COLOR: Record<"red" | "amber" | "green", string> = {
  red: "bg-critical-500/25 border-critical-500/40 text-critical-300",
  amber: "bg-signal-400/15 border-signal-400/35 text-signal-300",
  green: "bg-positive-500/15 border-positive-500/30 text-positive-400",
};

const SEVERITY_BAR: Record<"critical" | "high" | "medium", string> = {
  critical: "bg-critical-500",
  high: "bg-signal-400",
  medium: "bg-info-500",
};

function timeAgo(iso: string) {
  const d = (Date.now() - new Date(iso).getTime()) / 3600000;
  if (d < 1) return `${Math.max(1, Math.round(d * 60))}m ago`;
  if (d < 24) return `${Math.round(d)}h ago`;
  return `${Math.round(d / 24)}d ago`;
}

export default function CommandCenter() {
  const topSuppliers = [...SUPPLIERS]
    .filter((s) => s.tier !== "Tier 3")
    .sort((a, b) => a.otif - b.otif)
    .slice(0, 8);

  return (
    <StaggerGroup className="space-y-6">
      {/* HERO */}
      <StaggerItem>
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-[32px] leading-tight tracking-tight">
            COMMAND CENTER
          </h1>
          <p className="text-[13px] text-ink-100/80">
            Supply resilience overview · May 16, 2026 · 09:47 EDT
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <Badge variant="positive">
              <Signal color="green" size={5} />
              Live
            </Badge>
            <Badge variant="signal">
              <Bot size={10} /> 6 Agents Online
            </Badge>
            <Badge variant="warning">Resilience: Degraded</Badge>
          </div>
        </div>
      </StaggerItem>

      {/* AI MORNING BRIEF */}
      <StaggerItem>
        <Card
          scanline
          title={
            <span className="flex items-center gap-2">
              <Signal color="amber" size={5} /> Morning Briefing
            </span>
          }
          headerRight={
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-100/60">
              Generated 06:12 · OPS-AI
            </span>
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
            <p className="text-[14px] leading-relaxed text-ink-100">
              Overnight, 6 autonomous agents processed{" "}
              <span className="text-signal-300">27 supplier signals</span>. Critical
              exposure remains on the{" "}
              <span className="text-white">Dirt</span> and{" "}
              <span className="text-white">Sports</span> product lines, driven by{" "}
              <span className="text-critical-400">TrailFlex</span> (POA missing, 22d){" "}
              and <span className="text-critical-400">AeroCarbon</span> (PF
              unconfirmed). Recovery rate held at 86%. Recommend escalation review
              for TrailFlex within 4 hours.
            </p>

            <div className="grid grid-cols-5 gap-5 pl-6 lg:border-l border-white/5">
              <StatCell label="Orders At Risk" value={KPIS.ordersAtRisk} accent="critical" />
              <StatCell label="Critical" value={KPIS.criticalIssues} accent="critical" />
              <StatCell label="OTIF" value={`${KPIS.supplierOtif}%`} accent="signal" />
              <StatCell label="Rev At Risk" value={`$${(KPIS.revenueAtRisk / 1e6).toFixed(2)}M`} accent="critical" />
              <StatCell label="Recovery" value={`${KPIS.recoveryRate}%`} accent="positive" />
            </div>
          </div>
        </Card>
      </StaggerItem>

      {/* Disruptions + Product Risk */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StaggerItem>
          <Card
            title={
              <span className="flex items-center gap-2">
                <Signal color="red" size={5} /> Active Disruptions
                <span className="text-ink-100/50">({DISRUPTIONS.length})</span>
              </span>
            }
            headerRight={
              <a
                href="/disruptions"
                className="text-[10px] font-mono uppercase tracking-[0.18em] text-signal-300 hover:text-signal-200 flex items-center gap-1"
              >
                View workspace <ArrowUpRight size={11} />
              </a>
            }
            bodyClassName="p-0"
          >
            <ul className="divide-y divide-white/5">
              {DISRUPTIONS.slice(0, 6).map((d) => {
                const sup = d.supplierId ? getSupplier(d.supplierId) : null;
                return (
                  <li
                    key={d.id}
                    className="group flex gap-3 px-5 py-3 hover:bg-signal-400/[0.04] transition-colors cursor-pointer"
                  >
                    <span
                      className={`w-[3px] rounded-full ${SEVERITY_BAR[d.severity]}`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[13px] text-white truncate">
                          {d.title}
                        </span>
                        <Badge
                          variant={
                            d.severity === "critical"
                              ? "critical"
                              : d.severity === "high"
                              ? "warning"
                              : "info"
                          }
                        >
                          {d.severity}
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-2 flex-wrap text-[11px] text-ink-100/70">
                        {sup && (
                          <span className="font-mono">
                            {sup.name} · {sup.city}
                          </span>
                        )}
                        <span className="text-ink-100/40">·</span>
                        <span className="font-mono">{timeAgo(d.detectedAt)}</span>
                        <span className="text-ink-100/40">·</span>
                        <span className="font-mono text-signal-300">
                          ${(d.predictedImpact / 1000).toFixed(0)}K exposure
                        </span>
                      </div>
                      <div className="mt-1 text-[11px] text-ink-100/60 line-clamp-1 group-hover:line-clamp-none">
                        {d.aiSummary}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Card>
        </StaggerItem>

        <StaggerItem>
          <Card
            title="Product Line Risk · Apr–May"
            headerRight={<Badge variant="mono">5 Models · 2 Months</Badge>}
          >
            <div className="grid grid-cols-[80px_1fr_1fr] gap-2 items-center text-[11px]">
              <div />
              <div className="text-center text-[10px] font-mono uppercase tracking-[0.18em] text-ink-100/60">
                Apr
              </div>
              <div className="text-center text-[10px] font-mono uppercase tracking-[0.18em] text-ink-100/60">
                May
              </div>
              {BOM_MODELS.map((m) => {
                const r = PRODUCT_RISK[m.shortName];
                return (
                  <Fragment key={m.code}>
                    <div className="text-[12px] text-white">{m.shortName}</div>
                    {(["Apr", "May"] as const).map((mo) => (
                      <div
                        key={`${m.code}-${mo}`}
                        className={`group relative h-12 rounded-md border ${RISK_COLOR[r[mo]]} flex items-center justify-center font-mono text-[10px] uppercase tracking-widest`}
                        title={`${m.shortName} ${mo}: ${r[mo].toUpperCase()}`}
                      >
                        {r[mo]}
                      </div>
                    ))}
                  </Fragment>
                );
              })}
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-ink-100/60">
              <span>Annual demand: 323,772 units</span>
              <span>Revenue at risk: $1.45M</span>
            </div>
          </Card>
        </StaggerItem>
      </div>

      {/* Supplier Heatmap */}
      <StaggerItem>
        <Card
          title="Supplier Portfolio · Tier 1 + Tier 2"
          subtitle="Sorted by OTIF performance — worst first"
          headerRight={<Badge variant="mono">19 suppliers</Badge>}
        >
          <ul className="space-y-2.5">
            {topSuppliers.map((s) => (
              <li
                key={s.id}
                className="grid grid-cols-[1fr_60px_60px_1fr_70px] gap-4 items-center"
              >
                <div className="min-w-0">
                  <div className="text-[13px] text-white truncate">{s.name}</div>
                  <div className="text-[10px] font-mono text-ink-100/60">
                    {s.category} · {s.city}
                  </div>
                </div>
                <Badge
                  variant={s.tier === "Tier 1" ? "signal" : "mono"}
                  className="justify-center"
                >
                  {s.tier}
                </Badge>
                <span className="font-mono text-[12px] text-white text-right">
                  {s.otif}%
                </span>
                <RiskBar value={s.otif} invert />
                <span className="font-mono text-[11px] text-ink-100/70 text-right">
                  +{s.avgDelay}d delay
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </StaggerItem>

      {/* Footer Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StaggerItem>
          <Card title="Logistics Pulse">
            <ul className="space-y-3">
              {[
                {
                  icon: <Ship size={13} />,
                  lane: "Taichung → Long Beach",
                  status: "at-risk",
                  note: "Port queue +7d",
                },
                {
                  icon: <Ship size={13} />,
                  lane: "Shenzhen → Long Beach",
                  status: "ok",
                  note: "On schedule",
                },
                {
                  icon: <Truck size={13} />,
                  lane: "Cleveland → Reading PA",
                  status: "ok",
                  note: "ETA Apr 12",
                },
                {
                  icon: <Plane size={13} />,
                  lane: "Nagoya → ORD air freight",
                  status: "monitor",
                  note: "L/C pending",
                },
              ].map((l, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[12px] text-ink-100"
                >
                  <span
                    className={
                      l.status === "at-risk"
                        ? "text-critical-400"
                        : l.status === "monitor"
                        ? "text-signal-300"
                        : "text-positive-400"
                    }
                  >
                    {l.icon}
                  </span>
                  <span className="flex-1 text-white">{l.lane}</span>
                  <span className="text-[10px] font-mono text-ink-100/70">
                    {l.note}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </StaggerItem>

        <StaggerItem>
          <Card
            title={
              <span className="flex items-center gap-2">
                <Signal color="amber" size={5} /> Agent Activity
              </span>
            }
          >
            <ul className="space-y-2.5 font-mono text-[11px]">
              {[
                ["07:42", "Escalation Agent", "TrailFlex re ISS-1041 — draft sent"],
                ["07:38", "Risk Model", "Recomputed exposure: Dirt +$120K"],
                ["07:24", "Reconciliation", "Matched Velora SH commit Apr 17"],
                ["06:58", "Forecast Agent", "Carbon spot index +18% — alert raised"],
              ].map(([t, agent, msg], i) => (
                <li key={i} className="flex gap-2 text-ink-100">
                  <span className="text-signal-300">{t}</span>
                  <span className="text-white">{agent}</span>
                  <span className="text-ink-100/70 truncate">→ {msg}</span>
                </li>
              ))}
            </ul>
          </Card>
        </StaggerItem>

        <StaggerItem>
          <Card title="Executive Feed">
            <ul className="space-y-3 text-[12px] text-ink-100">
              <li>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal-300">
                  Strategic
                </span>
                <div className="text-white mt-1">
                  Single-source carbon exposure now $1.15M — qualify 2nd Taichung
                  supplier within 90 days.
                </div>
              </li>
              <li>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-positive-400">
                  Margin
                </span>
                <div className="text-white mt-1">
                  StopCore Net 60 renegotiation Q3 — projected $46K free cashflow
                  uplift.
                </div>
              </li>
              <li>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-info-400">
                  Resilience
                </span>
                <div className="text-white mt-1">
                  Tricycle line single-supplier on Live Axle (IronSpine) —
                  qualification pipeline empty.
                </div>
              </li>
            </ul>
          </Card>
        </StaggerItem>
      </div>
    </StaggerGroup>
  );
}
