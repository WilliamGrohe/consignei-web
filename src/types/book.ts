export type CreateBookProps ={
  title: string,
  isbn: string,
  cover_price: number,
}

export interface Book extends CreateBookProps {
  id: string;
  created_at: string;
}
