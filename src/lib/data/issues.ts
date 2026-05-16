export type IssueTier = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

export interface Issue {
  id: string;
  part: string;
  desc: string;
  supplierId: string;
  need: string;
  projLate: number;
  eta: string;
  qty: number;
  score: number;
  tier: IssueTier;
  status: string;
  productLine: string;
  po: string;
}

export const ISSUES: Issue[] = [
  { id: "ISS-1041", part: "CD-COM-11020", desc: "Rear Shock, 210x55mm air",            supplierId: "SUSP-19",  need: "Apr 6",  projLate: 22, eta: "No ETA — no POA received",    qty: 400,   score: 94, tier: "CRITICAL", status: "OPEN",              productLine: "Dirt",     po: "PO-2026-08821" },
  { id: "ISS-1038", part: "CS-RAW-11011", desc: "Carbon Frameset (raw monocoque)",     supplierId: "CARB-17",  need: "Apr 4",  projLate: 24, eta: "No ETA — PF not confirmed",   qty: 80,    score: 71, tier: "CRITICAL", status: "IN_PROGRESS",       productLine: "Sports",   po: "PO-2026-08744" },
  { id: "ISS-1055", part: "CD-ASM-12000", desc: "Front Fork, Air Suspension 140mm",    supplierId: "SUSP-19",  need: "Apr 12", projLate: 16, eta: "No ETA — no SH confirmed",    qty: 200,   score: 74, tier: "CRITICAL", status: "OPEN",              productLine: "Dirt",     po: "PO-2026-08819" },
  { id: "ISS-1049", part: "CD-COM-14050", desc: "Rear Derailleur, 12sp, clutch",       supplierId: "DRIV-10",  need: "Apr 15", projLate: 2,  eta: "Apr 17 (SH — 2d late)",       qty: 1200,  score: 82, tier: "CRITICAL", status: "AWAITING_SUPPLIER", productLine: "Dirt",     po: "PO-2026-08756" },
  { id: "ISS-1060", part: "CT-COM-13202", desc: 'Live Axle, 1" x 32" w/ keyway',       supplierId: "STEEL-20", need: "Apr 14", projLate: 14, eta: "No ETA — SH unconfirmed",     qty: 500,   score: 62, tier: "HIGH",     status: "OPEN",              productLine: "Tricycle", po: "PO-2026-08798" },
  { id: "ISS-1044", part: "CG-COM-13102", desc: "Rim, 700c, 32h, double-wall Al",      supplierId: "RIMS-06",  need: "Apr 7",  projLate: 14, eta: "Apr 21 (SH — 14d late)",      qty: 8000,  score: 55, tier: "HIGH",     status: "OPEN",              productLine: "Hybrid",   po: "PO-2026-08801" },
  { id: "ISS-1033", part: "CS-COM-14070", desc: "Shifters, Dual Control 2x11 pair",    supplierId: "DRIV-10",  need: "Apr 15", projLate: 13, eta: "No ETA — PF not confirmed",   qty: 300,   score: 48, tier: "HIGH",     status: "IN_PROGRESS",       productLine: "Sports",   po: "PO-2026-08790" },
  { id: "ISS-1062", part: "CG-RAW-11017", desc: "Dropouts, forged Al (pair)",          supplierId: "FORGE-03", need: "Apr 14", projLate: 14, eta: "No ETA — no POA received",    qty: 2000,  score: 44, tier: "HIGH",     status: "OPEN",              productLine: "Hybrid",   po: "PO-2026-08812" },
  { id: "ISS-1028", part: "CK-COM-17060", desc: "Training Wheel Set (removable)",      supplierId: "SAFE-14",  need: "Apr 16", projLate: 12, eta: "No ETA — no POA received",    qty: 1500,  score: 41, tier: "MEDIUM",   status: "OPEN",              productLine: "Child",    po: "PO-2026-08780" },
  { id: "ISS-1071", part: "CS-ASM-13000", desc: "Wheelset, Carbon Aero 50mm",          supplierId: "WHL-18",   need: "Apr 18", projLate: 10, eta: "No ETA — no POA received",    qty: 150,   score: 38, tier: "MEDIUM",   status: "OPEN",              productLine: "Sports",   po: "PO-2026-08822" },
  { id: "ISS-1065", part: "CT-COM-11020", desc: "Powder Coat, industrial (Y/B)",       supplierId: "COAT-04",  need: "Apr 20", projLate: 8,  eta: "No ETA — no POA received",    qty: 600,   score: 35, tier: "MEDIUM",   status: "OPEN",              productLine: "Tricycle", po: "PO-2026-08745" },
  { id: "ISS-1077", part: "CG-COM-13103", desc: "Spokes, 14g stainless, 293mm",        supplierId: "SPOK-08",  need: "Apr 22", projLate: 6,  eta: "No ETA — no POA received",    qty: 25000, score: 32, tier: "LOW",      status: "OPEN",              productLine: "Hybrid",   po: "PO-2026-08757" },
];
