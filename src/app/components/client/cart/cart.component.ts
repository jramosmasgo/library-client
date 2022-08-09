import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { BookCart } from 'src/app/shared/models/book/book-cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [],
  providers: [CartService],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cartItems: BookCart[] = [];
  totalAmount: number = 0;

  ngOnInit(): void {
    this.cartItems = this.cartService.getItemsCart();
    this.totalAmount = this.calcTotalAmount();
  }

  changeValueQuantity(idBook: string, quantityNow: number): void {
    const indexFound: number = this.cartItems.findIndex((x) => x.id == idBook);
    if (indexFound >= 0) {
      this.cartItems[indexFound].quantity = quantityNow;
      this.cartService.setCart(this.cartItems);
      this.totalAmount = this.calcTotalAmount();
    }
  }

  removeItemCart(idCart: string) {
    this.cartItems = this.cartService.removeItemInCart(idCart);
    console.log(this.cartItems);
    this.totalAmount = this.calcTotalAmount();
  }

  calcTotalAmount(): number {
    let total = 0;
    this.cartItems.forEach((book) => {
      const subtotal: number = book.quantity * book.price;
      total = total + subtotal;
    });
    return total;
  }
}
