export interface ExecutiveKPIs {
  ordersAtRisk: number;
  criticalIssues: number;
  supplierOtif: number;
  avgDelay: number;
  revenueAtRisk: number;
  recoveryRate: number;
  agentActions: number;
}

export const KPIS: ExecutiveKPIs = {
  ordersAtRisk: 9,
  criticalIssues: 4,
  supplierOtif: 74,
  avgDelay: 3.8,
  revenueAtRisk: 1450000,
  recoveryRate: 86,
  agentActions: 27,
};
