export interface PurchaseOrder {
  po: string;
  supplierId: string;
  part: string;
  desc: string;
  need: string;
  issued: string;
  status: string;
  riskClass: "red" | "amber" | "green";
  qty: number;
  val: number;
}

export const POS: PurchaseOrder[] = [
  { po: "PO-2026-08821", supplierId: "SUSP-19",  part: "CD-COM-11020", desc: "Rear Shock, 210x55mm air",            need: "Apr 6",  issued: "Feb 15", status: "Prod Start",     riskClass: "red",   qty: 400,   val: 74000 },
  { po: "PO-2026-08821", supplierId: "SUSP-19",  part: "CD-COM-16050", desc: "Dropper Post, 150mm",                 need: "Apr 6",  issued: "Feb 15", status: "POA Rcvd",       riskClass: "amber", qty: 400,   val: 74000 },
  { po: "PO-2026-08744", supplierId: "CARB-17",  part: "CS-RAW-11011", desc: "Carbon Frameset (raw monocoque)",     need: "Apr 4",  issued: "Jan 28", status: "POA Pending",    riskClass: "red",   qty: 80,    val: 30800 },
  { po: "PO-2026-08744", supplierId: "CARB-17",  part: "CS-ASM-12000", desc: "Front Fork, Full Carbon, Aero",       need: "Apr 4",  issued: "Jan 28", status: "POA Pending",    riskClass: "red",   qty: 80,    val: 11600 },
  { po: "PO-2026-08819", supplierId: "SUSP-19",  part: "CD-ASM-12000", desc: "Front Fork, Air Suspension 140mm",    need: "Apr 12", issued: "Feb 5",  status: "Prod Finish",    riskClass: "amber", qty: 200,   val: 57000 },
  { po: "PO-2026-08756", supplierId: "DRIV-10",  part: "CD-COM-14050", desc: "Rear Derailleur, 12sp, clutch",       need: "Apr 15", issued: "Jan 20", status: "Prod Start",     riskClass: "green", qty: 1200,  val: 138000 },
  { po: "PO-2026-08756", supplierId: "DRIV-10",  part: "CS-COM-14070", desc: "Shifters, Dual Control 2x11 pair",    need: "Apr 15", issued: "Jan 20", status: "POA Rcvd",       riskClass: "amber", qty: 300,   val: 72000 },
  { po: "PO-2026-08798", supplierId: "STEEL-20", part: "CT-COM-13202", desc: 'Live Axle, 1" x 32" w/ keyway',       need: "Apr 14", issued: "Feb 18", status: "POA Rcvd",       riskClass: "green", qty: 500,   val: 14000 },
  { po: "PO-2026-08801", supplierId: "RIMS-06",  part: "CG-COM-13102", desc: "Rim, 700c, 32h, double-wall Al",      need: "Apr 7",  issued: "Mar 1",  status: "Shipped",        riskClass: "amber", qty: 4000,  val: 74000 },
  { po: "PO-2026-08822", supplierId: "WHL-18",   part: "CS-ASM-13000", desc: "Wheelset, Carbon Aero 50mm",          need: "Apr 18", issued: "Mar 15", status: "POA Pending",    riskClass: "amber", qty: 80,    val: 11600 },
  { po: "PO-2026-08812", supplierId: "FORGE-03", part: "CG-RAW-11017", desc: "Dropouts, forged Al (pair)",          need: "Apr 14", issued: "Mar 24", status: "In Production",  riskClass: "amber", qty: 2000,  val: 24000 },
  { po: "PO-2026-08745", supplierId: "COAT-04",  part: "CT-COM-11020", desc: "Powder Coat, industrial Y/B",         need: "Apr 20", issued: "Mar 30", status: "POA Pending",    riskClass: "amber", qty: 500,   val: 11000 },
  { po: "PO-2026-08757", supplierId: "SPOK-08",  part: "CG-COM-13103", desc: "Spokes, 14g stainless 293mm",         need: "Apr 22", issued: "Mar 18", status: "In Transit",     riskClass: "green", qty: 12000, val: 6000 },
  { po: "PO-2026-08780", supplierId: "SAFE-14",  part: "CK-COM-17060", desc: "Training Wheel Set (removable)",      need: "Apr 16", issued: "Mar 26", status: "In Production",  riskClass: "amber", qty: 3000,  val: 18000 },
];
