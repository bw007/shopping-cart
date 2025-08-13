import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from "@angular/core";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [NgFor, CurrencyPipe, NgIf]
})

export class CartComponent {
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.getAllCartData()
  }

  decreaseQuantity(productId: string) {}

  increaseQuantity(productId: string) {}

  removeFromCart(productId: string) {
    this.cartService.removeCartData(productId)
  }

  total() {
    return this.cartService.getAllCartData().reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  checkout() {
    alert("Succes")
  }
}
