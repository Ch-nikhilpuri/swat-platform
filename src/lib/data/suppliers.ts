export type SupplierRisk = "green" | "amber" | "red";
export type SupplierTier = "Tier 1" | "Tier 2" | "Tier 3";

export interface Supplier {
  id: string;
  name: string;
  tier: SupplierTier;
  category: string;
  city: string;
  otif: number;
  avgDelay: number;
  parts: number;
  value: number;
  risk: SupplierRisk;
  leadTime: number;
  payTerms: string;
  qualCert: string;
  buyer: string;
}

export const SUPPLIERS: Supplier[] = [
  { id: "ALCO-01",  name: "AlCore Extrusions",       tier: "Tier 2", category: "Aluminum Tubing & Extrusions", city: "Pittsburgh, PA",   otif: 88, avgDelay: 1.4, parts: 13, value: 185000,  risk: "green", leadTime: 14, payTerms: "Net 30", qualCert: "ISO 9001",            buyer: "Maria Alvarez" },
  { id: "FORGE-03", name: "Pinnacle Forge Co.",      tier: "Tier 2", category: "Forged Al / Steel Components", city: "Cleveland, OH",    otif: 72, avgDelay: 4.2, parts: 3,  value: 95000,   risk: "amber", leadTime: 28, payTerms: "Net 45", qualCert: "IATF 16949",          buyer: "Maria Alvarez" },
  { id: "COAT-04",  name: "SpectraCoat Finishes",    tier: "Tier 2", category: "Powder Coat & Paint",          city: "Greensboro, NC",   otif: 91, avgDelay: 0.8, parts: 6,  value: 142000,  risk: "green", leadTime: 10, payTerms: "Net 30", qualCert: "ISO 14001",           buyer: "Sofia Oliveira" },
  { id: "HUBS-05",  name: "Axiom Hub Works",         tier: "Tier 2", category: "Bicycle Hubs",                 city: "Taichung",         otif: 79, avgDelay: 3.1, parts: 6,  value: 215000,  risk: "amber", leadTime: 21, payTerms: "T/T 30/70",            qualCert: "ISO 9001",            buyer: "David Chen" },
  { id: "RIMS-06",  name: "Velocity Rim Mfg.",       tier: "Tier 2", category: "Rims & Rim Accessories",       city: "Grand Rapids, MI", otif: 90, avgDelay: 1.2, parts: 13, value: 245000,  risk: "green", leadTime: 14, payTerms: "Net 30", qualCert: "ISO 9001",            buyer: "Priya Natarajan" },
  { id: "WELD-07",  name: "Orbital Weld Supply",     tier: "Tier 3", category: "Welding Consumables",          city: "Houston, TX",      otif: 95, avgDelay: 0.4, parts: 3,  value: 8500,    risk: "green", leadTime: 7,  payTerms: "Net 30", qualCert: "AWS Cert",            buyer: "Maria Alvarez" },
  { id: "SPOK-08",  name: "StarLace Spoke Co.",      tier: "Tier 2", category: "Spokes & Nipples",             city: "Nagoya",           otif: 83, avgDelay: 2.1, parts: 12, value: 165000,  risk: "green", leadTime: 21, payTerms: "L/C 60-day",           qualCert: "JIS",                 buyer: "Priya Natarajan" },
  { id: "TIRE-09",  name: "TerraTread Rubber",       tier: "Tier 1", category: "Tires, Tubes, Sealant",        city: "Akron, OH",        otif: 87, avgDelay: 1.6, parts: 19, value: 820000,  risk: "green", leadTime: 14, payTerms: "Net 45", qualCert: "ISO 9001",            buyer: "Priya Natarajan" },
  { id: "DRIV-10",  name: "Velora Drivetrain",       tier: "Tier 1", category: "Drivetrain Components",        city: "Shenzhen",         otif: 74, avgDelay: 5.8, parts: 38, value: 680000,  risk: "amber", leadTime: 28, payTerms: "T/T 30/70",            qualCert: "ISO 9001 / 14001",    buyer: "David Chen" },
  { id: "RIDE-11",  name: "RideTech Components",     tier: "Tier 1", category: "Forks, Cockpit, Small Parts",  city: "Taichung",         otif: 81, avgDelay: 2.8, parts: 29, value: 385000,  risk: "amber", leadTime: 21, payTerms: "T/T 30/70",            qualCert: "ISO 9001",            buyer: "Sofia Oliveira" },
  { id: "BRAK-12",  name: "StopCore Brake Systems",  tier: "Tier 1", category: "Brakes, Rotors, Levers",       city: "Magdeburg",        otif: 76, avgDelay: 3.9, parts: 24, value: 425000,  risk: "amber", leadTime: 21, payTerms: "Net 60", qualCert: "ISO 9001 / TÜV",      buyer: "Jonas Weber" },
  { id: "SEAT-13",  name: "ComfortSeat Industries",  tier: "Tier 2", category: "Saddles",                      city: "Vicenza",          otif: 89, avgDelay: 1.8, parts: 5,  value: 235000,  risk: "green", leadTime: 21, payTerms: "Net 60", qualCert: "ISO 9001",            buyer: "Sofia Oliveira" },
  { id: "SAFE-14",  name: "BrightPath Safety",       tier: "Tier 3", category: "Safety & Reflective Goods",    city: "Chicago, IL",      otif: 94, avgDelay: 0.6, parts: 11, value: 85000,   risk: "green", leadTime: 10, payTerms: "Net 30", qualCert: "CPSC / ANSI / DOT",   buyer: "Jonas Weber" },
  { id: "HDW-15",   name: "FastenCore Hardware",     tier: "Tier 3", category: "Fasteners, Bearings, Hardware",city: "Cincinnati, OH",   otif: 92, avgDelay: 0.5, parts: 12, value: 62000,   risk: "green", leadTime: 10, payTerms: "Net 30", qualCert: "ISO 9001",            buyer: "Aisha Khan" },
  { id: "PACK-16",  name: "PrintPack Solutions",     tier: "Tier 3", category: "Packaging, Crates, Print",     city: "Atlanta, GA",      otif: 96, avgDelay: 0.3, parts: 10, value: 135000,  risk: "green", leadTime: 7,  payTerms: "Net 30", qualCert: "FSC / SFI",           buyer: "Aisha Khan" },
  { id: "CARB-17",  name: "AeroCarbon Ltd.",         tier: "Tier 1", category: "Carbon Fiber Frames & Components", city: "Taichung",     otif: 61, avgDelay: 8.4, parts: 5,  value: 1150000, risk: "red",   leadTime: 35, payTerms: "T/T 40/60",            qualCert: "ISO 9001 / EN 14781", buyer: "Marcus Reed" },
  { id: "WHL-18",   name: "VelocityPro Wheels",      tier: "Tier 1", category: "Pre-built Wheelsets",          city: "Portland, OR",     otif: 88, avgDelay: 2.0, parts: 4,  value: 485000,  risk: "green", leadTime: 21, payTerms: "Net 30", qualCert: "ISO 9001",            buyer: "Priya Natarajan" },
  { id: "SUSP-19",  name: "TrailFlex Suspension",    tier: "Tier 1", category: "Forks, Shocks, Dropper Posts", city: "Santa Cruz, CA",   otif: 71, avgDelay: 4.5, parts: 4,  value: 620000,  risk: "amber", leadTime: 35, payTerms: "Net 45", qualCert: "ISO 9001",            buyer: "Jonas Weber" },
  { id: "STEEL-20", name: "IronSpine Steel Works",   tier: "Tier 2", category: "Cr-Mo Tubing & Steel Parts",   city: "Youngstown, OH",   otif: 85, avgDelay: 1.9, parts: 6,  value: 95000,   risk: "green", leadTime: 21, payTerms: "Net 45", qualCert: "ISO 9001 / AWS",      buyer: "Maria Alvarez" },
];

export const getSupplier = (id: string) => SUPPLIERS.find((s) => s.id === id);
