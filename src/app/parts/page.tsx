import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/common/PageHeader";
import { BOM_MODELS, BOM_PARTS } from "@/lib/data/bom";
import { POS } from "@/lib/data/pos";
import { getSupplier } from "@/lib/data/suppliers";
import { ChevronRight } from "lucide-react";

export default function PartsPage() {
  return (
    <div>
      <PageHeader
        title="Parts & Orders"
        description="Multilevel BOM explorer linked to live purchase-order status. Drill from product line to leaf part, inspect supplier commit milestones, and see PO risk class at a glance."
        status="coming"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        <Card title="BOM Tree" subtitle="5 models · 12+ leaf parts indexed" bodyClassName="p-0">
          <ul className="divide-y divide-white/5">
            {BOM_MODELS.map((m) => {
              const parts = BOM_PARTS.filter((p) => p.models.includes(m.shortName));
              return (
                <li key={m.code} className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <ChevronRight size={12} className="text-signal-300" />
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: m.color }}
                    />
                    <span className="text-[13px] text-white">{m.shortName}</span>
                    <span className="ml-auto text-[10px] font-mono text-ink-100/60">
                      {parts.length} parts
                    </span>
                  </div>
                  <div className="mt-2 pl-7 space-y-1 text-[11px] font-mono">
                    {parts.slice(0, 4).map((p) => (
                      <div
                        key={p.sku}
                        className="flex items-center gap-2 text-ink-100/80"
                      >
                        <span className="text-signal-300">{p.sku}</span>
                        <span className="truncate">{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card
          title="Open Purchase Orders"
          headerRight={<Badge variant="warning">9 at-risk</Badge>}
          bodyClassName="p-0"
        >
          <table className="w-full text-[12px]">
            <thead className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-100/60">
              <tr className="border-b border-white/5">
                <th className="text-left px-4 py-2">PO</th>
                <th className="text-left px-4 py-2">Part</th>
                <th className="text-left px-4 py-2">Supplier</th>
                <th className="text-right px-4 py-2">Qty</th>
                <th className="text-left px-4 py-2">Need</th>
                <th className="text-left px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {POS.slice(0, 12).map((p, i) => {
                const sup = getSupplier(p.supplierId);
                return (
                  <tr
                    key={`${p.po}-${p.part}-${i}`}
                    className="border-b border-white/5 hover:bg-signal-400/[0.04]"
                  >
                    <td className="px-4 py-2 font-mono text-signal-300">{p.po}</td>
                    <td className="px-4 py-2 text-white">
                      <span className="font-mono text-ink-100/70">{p.part}</span>
                      <div className="text-[10px] text-ink-100/60 truncate max-w-[200px]">
                        {p.desc}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-ink-100">{sup?.name}</td>
                    <td className="px-4 py-2 text-right font-mono">{p.qty}</td>
                    <td className="px-4 py-2 font-mono">{p.need}</td>
                    <td className="px-4 py-2">
                      <Badge
                        variant={
                          p.riskClass === "red"
                            ? "critical"
                            : p.riskClass === "amber"
                            ? "warning"
                            : "positive"
                        }
                      >
                        {p.status}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
