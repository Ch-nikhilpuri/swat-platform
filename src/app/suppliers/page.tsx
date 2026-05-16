import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RiskBar } from "@/components/ui/RiskBar";
import { PageHeader } from "@/components/common/PageHeader";
import { SUPPLIERS } from "@/lib/data/suppliers";
import { MapPin } from "lucide-react";

export default function SuppliersPage() {
  const featured = [...SUPPLIERS]
    .filter((s) => s.tier !== "Tier 3")
    .sort((a, b) => a.otif - b.otif)
    .slice(0, 6);

  return (
    <div>
      <PageHeader
        title="Supplier Network"
        description="Full visibility into the 19-supplier portfolio across Tier 1/2/3. Each card surfaces OTIF, lead time, payment terms, certification and current commit health. The map view (forthcoming) overlays disruption signals and lane performance."
        status="coming"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        {featured.map((s) => (
          <Card
            key={s.id}
            title={
              <span className="flex items-center gap-2">
                {s.name}
                <Badge
                  variant={
                    s.risk === "red"
                      ? "critical"
                      : s.risk === "amber"
                      ? "warning"
                      : "positive"
                  }
                >
                  {s.risk}
                </Badge>
              </span>
            }
            headerRight={<Badge variant={s.tier === "Tier 1" ? "signal" : "mono"}>{s.tier}</Badge>}
          >
            <div className="space-y-3 text-[12px]">
              <div className="flex items-center gap-1.5 text-ink-100/80">
                <MapPin size={11} />
                <span>{s.city}</span>
                <span className="text-ink-100/40">·</span>
                <span className="font-mono text-ink-100/60">{s.category}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-ink-100/60">
                    OTIF
                  </div>
                  <div className="font-display text-lg">{s.otif}%</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-ink-100/60">
                    Avg Delay
                  </div>
                  <div className="font-display text-lg">{s.avgDelay}d</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-ink-100/60">
                    Spend
                  </div>
                  <div className="font-display text-lg">
                    ${(s.value / 1000).toFixed(0)}K
                  </div>
                </div>
              </div>

              <RiskBar value={s.otif} invert />

              <div className="flex items-center justify-between text-[10px] font-mono text-ink-100/60 pt-1">
                <span>LT {s.leadTime}d</span>
                <span>{s.payTerms}</span>
                <span>{s.buyer}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card title="Geographic Distribution" subtitle="Interactive map · forthcoming">
        <div className="h-64 rounded-md bg-gradient-to-br from-ink-700/40 to-ink-800/40 border border-white/5 grid place-items-center text-ink-100/50 text-[12px] font-mono">
          MAP COMING ONLINE · 19 suppliers across 7 countries
        </div>
      </Card>
    </div>
  );
}
