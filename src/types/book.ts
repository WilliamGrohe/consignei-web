export type CreateBookProps ={
  title: string,
  isbn: string,
  cover_price: number,
}

export interface Book {
  id: string;
  created_at: string;
  title: string,
  isbn: string,
  cover_price: number,
}
