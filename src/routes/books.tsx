import { ListBooks } from '@/components/listBooks'
import { CreateBook } from '@/pages/CreateBook'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <ListBooks />
    <CreateBook />
    </>
  )
}
