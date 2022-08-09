import { AuthorGetById } from '../author/authorgetById.model';
import { Category } from '../category/category.model';

export interface Book {
  id?: string;
  title: string;
  description: string;
  stock: number;
  photo: string;
  categoryId: number;
  authorId: number;
  yearPublish: Date | string;
  price: number;
  page: number;
  isbn: number;
  category?: Category;
  author?: AuthorGetById;
}
