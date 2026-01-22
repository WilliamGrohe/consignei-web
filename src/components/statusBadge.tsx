import type { ConsignmentStatus } from '../types/consignment.ts'

interface StatusBadgeProps {
  status: ConsignmentStatus;
}

export default function StatusBadge({ status}: StatusBadgeProps) {
  const colors = {
    OK: '#22c55e',
    ATENCAO: '#facc15',
    CRITICO: '#ef4444',
  }

  return(
    <span
      style={{
        backgroundColor: colors[status] || '#6b7280',
        color: 'white',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
        fontWeight: 'bold',
        fontSize: '0.875rem',
      }}
    >
      {status}
    </span>
  )
}