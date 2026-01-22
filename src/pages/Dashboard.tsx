import { useEffect, useState } from "react"
import { getDashboardConsignments } from '../api/consignments'
import type { ConsignmentDashboardItem } from "../types/consignment"
import StatusBadge from "../components/statusBadge"

export default function Dashboard() {
  const [data, setData] = useState<ConsignmentDashboardItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDashboard() {
      try {
        const result =  await getDashboardConsignments()
        setData(result)
      } finally{ 
        setLoading(false)
      }
    }

    loadDashboard()
  }, [])

  if (loading) {
    return <p style={{ padding: 24 }}>Carregando dashboard...</p>
  }

  return(
    <div style={{ padding: 24 }}>
      <h1 >Dashboard de Consignações</h1>

      <table width="100%" cellPadding={8}>
        <thead>
          <tr>
            <th align="left">Livraria</th>
            <th align="left">Dias sem acerto</th>
            <th align="left">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.partner_name}</td>
              <td>{item.days_without_check}</td>
              <td>
                <StatusBadge status={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}