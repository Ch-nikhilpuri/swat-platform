import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/common/PageHeader";

const INTEGRATIONS = [
  { name: "SAP ECC · ERP", status: "connected" },
  { name: "Oracle TMS", status: "connected" },
  { name: "Coupa Sourcing", status: "connected" },
  { name: "EDI 855/856 Gateway", status: "connected" },
  { name: "S&P Global Market Intel", status: "connected" },
  { name: "MarineTraffic API", status: "degraded" },
  { name: "Slack — Ops Channel", status: "connected" },
  { name: "Microsoft Outlook", status: "connected" },
];

export default function PlatformPage() {
  return (
    <div>
      <PageHeader
        title="Platform"
        description="Identity, integrations, agent permissions, audit log and data residency. SWAT is the resilience layer — it does not replace your ERP, TMS or sourcing tools, it orchestrates them."
        status="coming"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Integrations" bodyClassName="p-0">
          <ul className="divide-y divide-white/5">
            {INTEGRATIONS.map((i) => (
              <li
                key={i.name}
                className="px-4 py-3 flex items-center justify-between"
              >
                <span className="text-[13px] text-white">{i.name}</span>
                <Badge
                  variant={i.status === "connected" ? "positive" : "warning"}
                >
                  {i.status}
                </Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Workspace">
          <div className="space-y-3 text-[12px]">
            {[
              ["Tenant", "corehelix.swat.app"],
              ["Region", "us-east-1 · primary"],
              ["DR Region", "us-west-2 · warm standby"],
              ["Data residency", "United States"],
              ["SSO", "Okta — enforced"],
              ["Audit log retention", "7 years"],
              ["Agent permission model", "Approval-gated · per-action policy"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0"
              >
                <span className="font-mono uppercase tracking-[0.14em] text-[10px] text-ink-100/60">
                  {k}
                </span>
                <span className="text-white">{v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
