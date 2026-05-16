import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Signal } from "@/components/ui/Signal";
import { PageHeader } from "@/components/common/PageHeader";
import {
  Bot,
  MessageSquare,
  AlertOctagon,
  LineChart,
  Brain,
  GitMerge,
  ShieldCheck,
} from "lucide-react";

const AGENTS = [
  {
    name: "Comms Agent",
    role: "Drafts supplier emails, tracks reply SLAs",
    status: "active",
    Icon: MessageSquare,
    actionsToday: 8,
    lastAction: "Drafted POA reminder to TrailFlex",
  },
  {
    name: "Escalation Agent",
    role: "Routes critical issues to right buyer + VP",
    status: "active",
    Icon: AlertOctagon,
    actionsToday: 5,
    lastAction: "Paged Jonas Weber re ISS-1041",
  },
  {
    name: "Risk Model",
    role: "Recomputes portfolio exposure on every signal",
    status: "active",
    Icon: Brain,
    actionsToday: 6,
    lastAction: "Reweighted AeroCarbon to single-source flag",
  },
  {
    name: "Forecast Agent",
    role: "Watches macro markets and lane disruptions",
    status: "active",
    Icon: LineChart,
    actionsToday: 3,
    lastAction: "Flagged Toray T700 prepreg index +18%",
  },
  {
    name: "Reconciliation",
    role: "Matches EDI commits to ERP need dates",
    status: "active",
    Icon: GitMerge,
    actionsToday: 4,
    lastAction: "Reconciled Velora SH Apr 17 to PO-2026-08756",
  },
  {
    name: "Recovery Agent",
    role: "Proposes mitigation paths + cost-benefit",
    status: "active",
    Icon: ShieldCheck,
    actionsToday: 1,
    lastAction: "Drafted dual-source plan: AeroCarbon-2",
  },
];

export default function IntelligencePage() {
  return (
    <div>
      <PageHeader
        title="AI Operations"
        description="Six autonomous agents continuously process supplier signals, EDI feeds, market indices and lane events. Every action is logged, ranked and approvable — the system never moves without an auditable trail."
        status="coming"
        right={
          <Badge variant="signal">
            <Bot size={10} /> 27 actions today
          </Badge>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {AGENTS.map((a) => (
          <Card
            key={a.name}
            title={
              <span className="flex items-center gap-2">
                <a.Icon size={12} className="text-signal-300" /> {a.name}
              </span>
            }
            headerRight={
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-positive-400">
                <Signal color="green" size={5} />
                {a.status}
              </span>
            }
          >
            <div className="space-y-3 text-[12px]">
              <p className="text-ink-100/80 leading-relaxed">{a.role}</p>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-ink-100/60">
                    Actions Today
                  </div>
                  <div className="font-display text-xl text-signal-300">
                    {a.actionsToday}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-ink-100/60">
                    Last Action
                  </div>
                  <div className="text-[11px] text-white leading-tight">
                    {a.lastAction}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
