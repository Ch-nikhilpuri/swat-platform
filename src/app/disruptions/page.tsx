import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Signal } from "@/components/ui/Signal";
import { PageHeader } from "@/components/common/PageHeader";
import { DISRUPTIONS } from "@/lib/data/disruptions";
import { getSupplier } from "@/lib/data/suppliers";

export default function DisruptionsPage() {
  return (
    <div>
      <PageHeader
        title="Disruption Workspace"
        description="Investigate active supply-chain disruptions across suppliers, lanes, and macro signals. Each disruption is enriched by AI summary, predicted impact, and recovery window so analysts can triage in minutes, not hours."
        status="coming"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        <Card
          title="Active Disruptions"
          subtitle="Ranked by severity × recovery-window × revenue exposure"
          headerRight={<Badge variant="critical">3 critical · 3 high · 2 medium</Badge>}
          bodyClassName="p-0"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-100/60">
                <tr className="border-b border-white/5">
                  <th className="text-left px-4 py-2">ID</th>
                  <th className="text-left px-4 py-2">Title</th>
                  <th className="text-left px-4 py-2">Supplier</th>
                  <th className="text-left px-4 py-2">Products</th>
                  <th className="text-right px-4 py-2">Impact</th>
                  <th className="text-right px-4 py-2">Recovery</th>
                  <th className="text-center px-4 py-2">Severity</th>
                </tr>
              </thead>
              <tbody>
                {DISRUPTIONS.map((d) => {
                  const sup = d.supplierId ? getSupplier(d.supplierId) : null;
                  return (
                    <tr
                      key={d.id}
                      className="border-b border-white/5 hover:bg-signal-400/[0.04]"
                    >
                      <td className="px-4 py-2.5 font-mono text-signal-300">{d.id}</td>
                      <td className="px-4 py-2.5 text-white max-w-[260px] truncate">
                        {d.title}
                      </td>
                      <td className="px-4 py-2.5 text-ink-100">
                        {sup?.name ?? "—"}
                      </td>
                      <td className="px-4 py-2.5 font-mono text-ink-100/80">
                        {d.affectedProducts.join(", ")}
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-critical-400">
                        ${(d.predictedImpact / 1000).toFixed(0)}K
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-ink-100">
                        {d.recoveryWindow}d
                      </td>
                      <td className="px-4 py-2.5 text-center">
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
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        <Card
          title={
            <span className="flex items-center gap-2">
              <Signal color="amber" size={5} /> AI Summary Panel
            </span>
          }
        >
          <div className="space-y-3 text-[12px]">
            <div className="text-ink-100">
              Selected:{" "}
              <span className="text-white">DSR-2041 · TrailFlex POA missing</span>
            </div>
            <p className="text-ink-100/80 leading-relaxed">
              {DISRUPTIONS[0].aiSummary}
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-100/60">
                Predicted Impact
              </div>
              <div className="font-mono text-critical-400">$540K</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-100/60">
                Recovery Window
              </div>
              <div className="font-mono text-white">7 days</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-100/60">
                Auto-Actions
              </div>
              <div className="font-mono text-signal-300">3 staged</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
