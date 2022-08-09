import { Component, OnInit } from '@angular/core';
import { BookCart } from 'src/app/shared/models/book/book-cart.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/core/services/book.service';
import { Book } from 'src/app/shared/models/book/book.model';
import { finalize } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styles: [],
})
export class DetailBookComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
    private alertService: AlertService
  ) {}

  book: BookCart = {} as BookCart;
  loading: boolean = false;

  ngOnInit(): void {
    const idBook = this.route.snapshot.paramMap.get('id');
    this.getBookDetails(idBook!);
  }

  getBookDetails(idBook: string): void {
    this.loading = true;
    this.bookService
      .getBookById(idBook)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => {
          this.book = this.validateBookInCart(res.data);
        },
        error: (err) => console.log(err),
      });
  }

  validateBookInCart(book: Book): BookCart {
    const booksCart = this.cartService.getItemsCart();
    const findProductInCart = booksCart.findIndex((x) => x.id == book.id);
    if (findProductInCart >= 0) {
      return booksCart[findProductInCart];
    } else {
      return { ...book, quantity: 1 };
    }
  }

  changeQuantity(quantity: number): void {
    this.book.quantity = quantity;
  }

  addBookCart() {
    const bookCart = this.cartService.getItemsCart();
    const bookFound = bookCart.findIndex((x) => x.id === this.book.id);

    if (bookFound >= 0) {
      bookCart.splice(bookFound, 1);
      bookCart.push(this.book);
      this.cartService.setCart(bookCart);
    } else {
      this.cartService.addCartProduct(this.book);
    }

    this.alertService.alertSucces(
      'Realizado',
      'El producto fue agregado al carrito'
    );
  }
}
