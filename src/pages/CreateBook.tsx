// import { useState } from "react";
// import { createBook } from "../api/books";
// import type { CreateBookProps } from "../types/book";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBook } from "@/api/books";


const createBookSchema = z.object({
  title: z.string(),
  isbn: z.string(),
  cover_price: z.coerce.number(),
})

type CreateBookSchema = z.infer<typeof createBookSchema>;


export function CreateBook() {
  const { register, handleSubmit } = useForm<CreateBookSchema>({
    resolver: zodResolver(createBookSchema),
  });

  async function handleCreateBook(data: CreateBookSchema) {
    console.log(data);
    try {
      await createBook(data)
      alert('Livro cadastrado com sucesso!')
    }catch (error) {
      alert('Erro ao cadastrar livro. ' + error)
    }
    
  }

  return (
    <div style={{ padding: 24, maxWidth: 480 }}>
      <h1>Cadastrar Livro</h1>

      <form onSubmit={handleSubmit(handleCreateBook)}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-title">Título</FieldLabel>
            <Input
              {...register("title")}
              placeholder="Título do livro"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="fieldgroup-isbn">Código ISBN</FieldLabel>
            <Input {...register("isbn")} placeholder="978662993..." required />
          </Field>

          <Field>
            <FieldLabel htmlFor="fieldgroup-isbn">Preço de Capa</FieldLabel>
            <Input
              {...register("cover_price")}
              placeholder="49,90"
              type="number"
              step={0.01}
              required
            />
          </Field>

          <Field >
            <Button type="submit" variant="outline">Cadastrar</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
