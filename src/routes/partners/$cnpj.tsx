import { getPartner } from '@/api/partners'
import type { Partner } from '@/types/partner'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/partners/$cnpj')({
  component: PartnerComponent,
  loader: async ({ params }) => await getPartner(params.cnpj)
})

function PartnerComponent() {
  const partner: Partner = Route.useLoaderData()

  return <div>
    <h1>{partner.name}</h1>
    <p>Contato: {partner.contact_name}</p>
    <p>Fone: {partner.phone}</p>
    <p>Email: {partner.email}</p>
    <p>CNPJ: {partner.cnpj}</p>
    </div>
}
