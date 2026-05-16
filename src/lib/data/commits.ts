export type MilestoneStatus = "ON_TIME" | "LATE" | "MISSING" | "EARLY";

export interface Milestone {
  baseline: string;
  actual: string | null;
  status: MilestoneStatus;
  daysVar: number;
}

export interface CommitRecord {
  po: string;
  supplierId: string;
  part: string;
  desc: string;
  need: string;
  milestones: {
    POA: Milestone;
    PS: Milestone;
    PF: Milestone;
    SH: Milestone;
  };
}

export const COMMITS: CommitRecord[] = [
  {
    po: "PO-2026-08821", supplierId: "SUSP-19", part: "CD-COM-11020", desc: "Rear Shock, 210x55mm air", need: "Apr 6",
    milestones: {
      POA: { baseline: "Feb 18", actual: null,     status: "MISSING", daysVar: 22 },
      PS:  { baseline: "Mar 5",  actual: null,     status: "MISSING", daysVar: 22 },
      PF:  { baseline: "Mar 25", actual: null,     status: "MISSING", daysVar: 22 },
      SH:  { baseline: "Apr 6",  actual: null,     status: "MISSING", daysVar: 22 },
    },
  },
  {
    po: "PO-2026-08744", supplierId: "CARB-17", part: "CS-RAW-11011", desc: "Carbon Frameset (raw monocoque)", need: "Apr 4",
    milestones: {
      POA: { baseline: "Feb 1",  actual: "Feb 3",  status: "LATE",    daysVar: 2 },
      PS:  { baseline: "Feb 22", actual: "Feb 24", status: "LATE",    daysVar: 2 },
      PF:  { baseline: "Mar 20", actual: null,     status: "MISSING", daysVar: 8 },
      SH:  { baseline: "Apr 4",  actual: null,     status: "MISSING", daysVar: 8 },
    },
  },
  {
    po: "PO-2026-08819", supplierId: "SUSP-19", part: "CD-ASM-12000", desc: "Front Fork, Air Suspension 140mm", need: "Apr 12",
    milestones: {
      POA: { baseline: "Feb 8",  actual: "Feb 10", status: "LATE",    daysVar: 2 },
      PS:  { baseline: "Mar 1",  actual: "Mar 5",  status: "LATE",    daysVar: 4 },
      PF:  { baseline: "Mar 28", actual: null,     status: "MISSING", daysVar: 16 },
      SH:  { baseline: "Apr 12", actual: null,     status: "MISSING", daysVar: 16 },
    },
  },
  {
    po: "PO-2026-08756", supplierId: "DRIV-10", part: "CD-COM-14050", desc: "Rear Derailleur, 12sp, clutch", need: "Apr 15",
    milestones: {
      POA: { baseline: "Jan 24", actual: "Jan 24", status: "ON_TIME", daysVar: 0 },
      PS:  { baseline: "Feb 14", actual: "Feb 16", status: "LATE",    daysVar: 2 },
      PF:  { baseline: "Mar 30", actual: "Apr 2",  status: "LATE",    daysVar: 2 },
      SH:  { baseline: "Apr 15", actual: "Apr 17", status: "LATE",    daysVar: 2 },
    },
  },
  {
    po: "PO-2026-08798", supplierId: "STEEL-20", part: "CT-COM-13202", desc: 'Live Axle, 1" x 32"', need: "Apr 14",
    milestones: {
      POA: { baseline: "Feb 22", actual: "Feb 22", status: "ON_TIME", daysVar: 0 },
      PS:  { baseline: "Mar 8",  actual: "Mar 8",  status: "ON_TIME", daysVar: 0 },
      PF:  { baseline: "Mar 30", actual: "Apr 3",  status: "LATE",    daysVar: 4 },
      SH:  { baseline: "Apr 14", actual: null,     status: "MISSING", daysVar: 14 },
    },
  },
  {
    po: "PO-2026-08812", supplierId: "FORGE-03", part: "CG-RAW-11017", desc: "Dropouts, forged Al", need: "Apr 14",
    milestones: {
      POA: { baseline: "Mar 27", actual: null,     status: "MISSING", daysVar: 14 },
      PS:  { baseline: "Apr 2",  actual: null,     status: "MISSING", daysVar: 14 },
      PF:  { baseline: "Apr 10", actual: null,     status: "MISSING", daysVar: 14 },
      SH:  { baseline: "Apr 14", actual: null,     status: "MISSING", daysVar: 14 },
    },
  },
];
