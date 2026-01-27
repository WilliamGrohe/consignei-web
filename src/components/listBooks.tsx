import { useEffect, useState } from "react"
import { getBooks } from '../api/books'
import type { Book } from "@/types/book"


export function ListBooks() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    console.log('Loading books...');
      async function loadBooks() {
        try {
          const result =  await getBooks()
          setBooks(result)
        } catch (error) {
          console.error('Error loading books:', error);
        }
      }
  
      loadBooks()
    }, [])

  return(
    <div style={{ padding: 24 }}>
      <h1>Livros Cadastrados</h1>

      <table width="100%" cellPadding={8}>
        <thead>
          <tr>
            <th align="left">Titulo</th>
            <th align="left">ISBN</th>
            <th align="left">Preco</th>
          </tr>
        </thead>

        <tbody>
          {books.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.isbn}</td>
              <td>{item.cover_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}