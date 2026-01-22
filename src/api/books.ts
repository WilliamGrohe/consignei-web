import {api} from './api';
import type { CreateBookProps, Book } from '../types/book';

export async function createBook(
  payload: CreateBookProps
): Promise<Book> {
  const response = await api.post<Book>('/books', payload);
  return response.data;
}
