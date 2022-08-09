import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { CartService } from 'src/app/core/services/cart.service';
import { BookCart } from 'src/app/shared/models/book/book-cart.model';
import { Book } from 'src/app/shared/models/book/book.model';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styles: [],
  providers: [CartService],
})
export class CardBookComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private alertService: AlertService
  ) {}

  @Input() book: Book = {} as Book;

  addBookCart(book: Book): void {
    const cartToSend: BookCart = { ...book, quantity: 1 };
    const result = this.cartService.addCartProduct(cartToSend);
    if (result) {
      this.alertService.alertSucces(
        'Realizado',
        'El libro se agrego al carrito'
      );
    } else {
      this.alertService.alertError(
        'Error',
        'El libro ya fue agregado si desea modificar la cantidad dirijase el carrito'
      );
    }
  }

  ngOnInit(): void {}
}
