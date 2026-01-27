import { getPartners } from "@/api/partners";
import type { Partner } from "@/types/partner";

import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CreatePartner } from "@/components/createPartner";

export const Route = createFileRoute("/partners/")({
  component: PartnerComponent,
});

function PartnerComponent() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    console.log("Loading partners...");
    async function loadPartners() {
      try {
        const result = await getPartners();
        setPartners(result);
      } catch (error) {
        console.error("Error loading partners:", error);
      }
    }

    loadPartners();
  }, []);

  return (
    <>
      <div style={{ padding: 24 }}>
        <h1>Livrarias Parceiras</h1>

        <table width="100%" cellPadding={8}>
          <thead>
            <tr>
              <th align="left">Name</th>
              <th align="left">Contato</th>
              <th align="left">Fone</th>
              <th align="left">Email</th>
              <th align="left">CNPJ</th>
            </tr>
          </thead>

          <tbody>
            {partners.map((partner) => (
              <tr key={partner.id}>
                <td>
                  <Link to={"/partners/$cnpj"} params={{ cnpj: partner.cnpj }}>
                  {partner.name}
                  </Link>
                  </td>
                <td>{partner.contact_name}</td>
                <td>{partner.phone}</td>
                <td>{partner.email}</td>
                <td>{partner.cnpj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreatePartner />
    </>
  );
}
