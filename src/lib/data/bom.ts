export interface BomModel {
  code: string;
  name: string;
  shortName: string;
  color: string;
  unitCost: number;
  wholesale: number;
  msrp: number;
  annualDemand: number;
}

export const BOM_MODELS: BomModel[] = [
  { code: "CH-GEN-10000", name: "Generic Adult Hybrid",       shortName: "Hybrid",   color: "#1d4ed8", unitCost: 480.245,  wholesale: 738.84,   msrp: 1329.91,  annualDemand: 135984 },
  { code: "CH-KID-10000", name: "Child Model (10-15 yrs)",    shortName: "Child",    color: "#15803d", unitCost: 289.60,   wholesale: 482.67,   msrp: 917.07,   annualDemand: 71230 },
  { code: "CH-SPT-10000", name: "Sports Model (Carbon Road)", shortName: "Sports",   color: "#dc2626", unitCost: 2136.50,  wholesale: 3286.92,  msrp: 6080.81,  annualDemand: 25902 },
  { code: "CH-DRT-10000", name: "Dirt Bike (29er FS MTB)",    shortName: "Dirt",     color: "#d97706", unitCost: 2049.55,  wholesale: 3153.15,  msrp: 5833.33,  annualDemand: 45328 },
  { code: "CH-TRI-10000", name: "Industrial Tricycle (Cargo)", shortName: "Tricycle", color: "#6d28d9", unitCost: 922.43,   wholesale: 1317.76,  msrp: 2306.08,  annualDemand: 45328 },
];

export interface BomPart {
  sku: string;
  desc: string;
  supplierId: string;
  models: string[]; // shortName references
  unitCost: number;
  leaf: boolean;
}

export const BOM_PARTS: BomPart[] = [
  { sku: "CD-COM-11020", desc: "Rear Shock, 210x55mm air",            supplierId: "SUSP-19",  models: ["Dirt"],            unitCost: 185.0, leaf: true },
  { sku: "CD-ASM-12000", desc: "Front Fork, Air Suspension 140mm",    supplierId: "SUSP-19",  models: ["Dirt"],            unitCost: 285.0, leaf: true },
  { sku: "CD-COM-14050", desc: "Rear Derailleur, 12sp",               supplierId: "DRIV-10",  models: ["Dirt", "Sports"],  unitCost: 115.0, leaf: true },
  { sku: "CS-RAW-11011", desc: "Carbon Frameset (raw monocoque)",     supplierId: "CARB-17",  models: ["Sports"],          unitCost: 385.0, leaf: true },
  { sku: "CS-ASM-12000", desc: "Front Fork, Full Carbon",             supplierId: "CARB-17",  models: ["Sports"],          unitCost: 145.0, leaf: true },
  { sku: "CS-COM-14070", desc: "Shifters, Dual Control 2x11",         supplierId: "DRIV-10",  models: ["Sports"],          unitCost: 240.0, leaf: true },
  { sku: "CG-COM-13102", desc: "Rim, 700c double-wall Al",            supplierId: "RIMS-06",  models: ["Hybrid", "Child"], unitCost: 18.5,  leaf: true },
  { sku: "CG-RAW-11017", desc: "Dropouts, forged Al (pair)",          supplierId: "FORGE-03", models: ["Hybrid"],          unitCost: 12.0,  leaf: true },
  { sku: "CT-COM-13202", desc: 'Live Axle, 1" x 32"',                 supplierId: "STEEL-20", models: ["Tricycle"],        unitCost: 28.0,  leaf: true },
  { sku: "CT-COM-11020", desc: "Powder Coat, industrial Y/B",         supplierId: "COAT-04",  models: ["Tricycle"],        unitCost: 22.0,  leaf: true },
  { sku: "CK-COM-17060", desc: "Training Wheel Set",                  supplierId: "SAFE-14",  models: ["Child"],           unitCost: 12.0,  leaf: true },
  { sku: "CS-ASM-13000", desc: "Wheelset, Carbon Aero 50mm",          supplierId: "WHL-18",   models: ["Sports"],          unitCost: 145.0, leaf: true },
];
