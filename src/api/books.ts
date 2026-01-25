import {api} from './api';
import type { CreateBookProps, Book } from '../types/book';

export async function createBook(
  payload: CreateBookProps
): Promise<Book> {
  const response = await api.post<Book>('/books', payload);
  return response.data;
}

export async function getBooks() {
  const response = await api.get('/books');
  return response.data;
}
