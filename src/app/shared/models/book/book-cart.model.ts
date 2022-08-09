import { Book } from './book.model';

export interface BookCart extends Book {
  quantity: number;
}
