export type ConsignmentStatus = 'OK' | 'ATENCAO' | 'CRITICO';

export interface ConsignmentDashboardItem {
  id: string;
  partner_name: string;
  sent_at: string;
  last_check: string | null;
  days_without_check: number;
  status: ConsignmentStatus;
}
