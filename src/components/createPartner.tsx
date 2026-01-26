import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { createPartner } from "@/api/partners";

const createPartnerSchema = z.object({
  name: z.string(),
  email: z.string(),
  cnpj: z.string(),
  phone: z.string(),
  contact_name: z.string(),
  notes: z.string().optional(),
});

type CreatePartnerSchema = z.infer<typeof createPartnerSchema>;

export function CreatePartner() {
  const { register, handleSubmit } = useForm<CreatePartnerSchema>({
    resolver: zodResolver(createPartnerSchema),
  });

  async function handleCreatePartner(data: CreatePartnerSchema) {
    console.log(data);
    try {
      await createPartner(data);
      alert("Parceiro cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar parceiro. " + error);
    }
  }

  return (
    <div style={{ padding: 24, maxWidth: 480 }}>
      <Card className="w-full max-w-sm p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Cadastrar Novo Parceiro</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(handleCreatePartner)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-name">Livraria</FieldLabel>
              <Input
                {...register("name")}
                placeholder="Nome da Livraria"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="fieldgroup-cnpj">CNPJ</FieldLabel>
              <Input
                {...register("cnpj")}
                placeholder="01.123.456/0001-99"
                type="number"
                required
              />
            </Field>
            
            <Field>
              <FieldLabel htmlFor="fieldgroup-contact">Contato</FieldLabel>
              <Input
                {...register("contact_name")}
                placeholder="Nome do responsável"
                
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="fieldgroup-phone">Telefone</FieldLabel>
              <Input
                {...register("phone")}
                placeholder="(11) 99999-9999"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
              <Input
                {...register("email")}
                placeholder="email@example.com"
                type="email"
                required
              />
            </Field>

            <Field>
              <Button type="submit">
                Cadastrar
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </Card>
    </div>
  );
}
