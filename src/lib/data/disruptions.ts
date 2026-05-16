export type Severity = "critical" | "high" | "medium";

export interface Disruption {
  id: string;
  severity: Severity;
  title: string;
  supplierId: string | null;
  affectedParts: string[];
  affectedProducts: string[];
  detectedAt: string;
  predictedImpact: number;
  recoveryWindow: number;
  aiSummary: string;
  signalType: "supplier" | "logistics" | "market" | "labor";
}

export const DISRUPTIONS: Disruption[] = [
  {
    id: "DSR-2041",
    severity: "critical",
    title: "TrailFlex POA missing — 22 days overdue",
    supplierId: "SUSP-19",
    affectedParts: ["CD-COM-11020 Rear Shock", "CD-ASM-12000 Front Fork"],
    affectedProducts: ["Dirt"],
    detectedAt: "2026-04-14T06:12:00Z",
    predictedImpact: 540000,
    recoveryWindow: 7,
    aiSummary:
      "Production Order Acknowledgement still not received from TrailFlex on PO-2026-08821. With a 35-day supplier lead time and a need date of Apr 6, every milestone (POA/PS/PF/SH) is now silent. Dirt Bike line cannot start build window without commit by Apr 18.",
    signalType: "supplier",
  },
  {
    id: "DSR-2038",
    severity: "critical",
    title: "AeroCarbon Frameset Production Finish unconfirmed",
    supplierId: "CARB-17",
    affectedParts: ["CS-RAW-11011 Carbon Frameset", "CS-ASM-12000 Fork"],
    affectedProducts: ["Sports"],
    detectedAt: "2026-04-14T05:48:00Z",
    predictedImpact: 320000,
    recoveryWindow: 9,
    aiSummary:
      "POA + PS confirmed but PF milestone is 8 days past baseline on PO-2026-08744. Taichung weather pattern and Q2 carbon allocation suggest secondary delay. Sports model 80-unit build slot at risk for May.",
    signalType: "supplier",
  },
  {
    id: "DSR-2049",
    severity: "critical",
    title: "Velora Drivetrain Shipment 14 days late",
    supplierId: "DRIV-10",
    affectedParts: ["CD-COM-14050 Derailleur", "CS-COM-14070 Shifters"],
    affectedProducts: ["Dirt", "Sports"],
    detectedAt: "2026-04-13T22:04:00Z",
    predictedImpact: 210000,
    recoveryWindow: 10,
    aiSummary:
      "Velora confirmed Apr 17 SH on PO-2026-08756 (+2d vs need). Yantian customs queue adds 12 additional transit days. Dual-line exposure: 1,200 derailleurs + 300 shifter pairs.",
    signalType: "logistics",
  },
  {
    id: "DSR-2062",
    severity: "high",
    title: "Pinnacle Forge — no POA on Dropouts",
    supplierId: "FORGE-03",
    affectedParts: ["CG-RAW-11017 Dropouts"],
    affectedProducts: ["Hybrid"],
    detectedAt: "2026-04-13T17:10:00Z",
    predictedImpact: 92000,
    recoveryWindow: 14,
    aiSummary:
      "All four milestones silent on PO-2026-08812. Pinnacle's IATF 16949 audit is in-window — likely cause of comms gap. Hybrid line dropout buffer covers 6 build days.",
    signalType: "supplier",
  },
  {
    id: "DSR-2060",
    severity: "high",
    title: "IronSpine Live Axle Shipment unconfirmed",
    supplierId: "STEEL-20",
    affectedParts: ["CT-COM-13202 Live Axle"],
    affectedProducts: ["Tricycle"],
    detectedAt: "2026-04-13T14:32:00Z",
    predictedImpact: 68000,
    recoveryWindow: 6,
    aiSummary:
      "PS + PF on-time but SH missing. No alternative qualified supplier for Cr-Mo live axle. Tricycle assembly halt risk if SH not confirmed by Apr 18.",
    signalType: "supplier",
  },
  {
    id: "DSR-2071",
    severity: "high",
    title: "Taichung port congestion projected (Apr 18–24)",
    supplierId: null,
    affectedParts: ["CS-RAW-11011", "CD-COM-11020", "Multiple Taichung parts"],
    affectedProducts: ["Sports", "Dirt", "Hybrid"],
    detectedAt: "2026-04-14T03:00:00Z",
    predictedImpact: 180000,
    recoveryWindow: 12,
    aiSummary:
      "MarineTraffic + port authority bulletins indicate 7-day queue forming at Taichung outbound for week of Apr 18. 3 Tier 1 suppliers exposed (AeroCarbon, RideTech, Axiom Hubs).",
    signalType: "logistics",
  },
  {
    id: "DSR-2072",
    severity: "medium",
    title: "Carbon fiber spot price +18% week-over-week",
    supplierId: "CARB-17",
    affectedParts: ["CS-RAW-11011", "CS-ASM-12000"],
    affectedProducts: ["Sports"],
    detectedAt: "2026-04-14T01:15:00Z",
    predictedImpact: 95000,
    recoveryWindow: 30,
    aiSummary:
      "Toray T700 prepreg index up 18%. AeroCarbon contract is T/T 40/60 with no material-cost pass-through clause until Jul 28 renewal. Margin exposure on next 3 PO releases.",
    signalType: "market",
  },
  {
    id: "DSR-2073",
    severity: "medium",
    title: "TrailFlex labor unrest reported (Santa Cruz)",
    supplierId: "SUSP-19",
    affectedParts: ["CD-COM-11020", "CD-ASM-12000"],
    affectedProducts: ["Dirt"],
    detectedAt: "2026-04-13T19:40:00Z",
    predictedImpact: 145000,
    recoveryWindow: 18,
    aiSummary:
      "Local IBEW chapter strike vote scheduled Apr 22. TrailFlex production floor is 60% unionized. Correlates with current POA silence — early indicator, not yet confirmed by primary contact Jordan Blackwood.",
    signalType: "labor",
  },
];
