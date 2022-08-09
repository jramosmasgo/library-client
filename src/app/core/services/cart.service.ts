import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookCart } from 'src/app/shared/models/book/book-cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemcart: BookCart[] = [];

  addCartProduct(book: BookCart): boolean {
    if (localStorage.getItem('cartItems')) {
      const dataLocalStorage = localStorage.getItem('cartItems');
      this.itemcart = JSON.parse(dataLocalStorage || '[]') as BookCart[];
      localStorage.removeItem('cartItems');
    }
    const productFind = this.itemcart.findIndex((x) => x.id === book.id);

    if (productFind < 0) {
      this.itemcart.push(book);
      localStorage.setItem('cartItems', JSON.stringify(this.itemcart));
      return true;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.itemcart));
    return false;
  }

  setCart(books: BookCart[]): void {
    if (localStorage.getItem('cartItems')) {
      localStorage.removeItem('cartItems');
    }
    localStorage.setItem('cartItems', JSON.stringify(books));
  }

  removeItemInCart(idBook: string): BookCart[] {
    const books: BookCart[] = JSON.parse(
      localStorage.getItem('cartItems') || '[]'
    );
    const indexFound = books.findIndex((x) => x.id === idBook);
    if (indexFound >= 0) {
      books.splice(indexFound, 1);
      this.setCart(books);
    }
    return books;
  }

  getItemsCart(): BookCart[] {
    const dataLocalStorage = localStorage.getItem('cartItems');
    if (!dataLocalStorage) {
      return [];
    }
    this.itemcart = JSON.parse(dataLocalStorage || '[]') as BookCart[];
    return this.itemcart;
  }
}
