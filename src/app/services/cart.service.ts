import { Injectable } from '@angular/core';
import { type Product } from '../shared/models/product.model';
import { type CartData } from '../features/cart/pages/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData: CartData[] = []

  getAllCartData() {
    return this.cartData;
  }

  addProductToCart(productData: CartData) {
    this.cartData = [ productData, ...this.cartData ]
  }

  decreaseQuantity(id: string) {}

  increaseQuantity(id: string) {}

  removeCartData(id: string) {
    this.cartData = this.cartData.filter(data => data.id !== id);
  }

  hasItem(productId: string): boolean {
    return this.cartData.some(product => product.id === productId);
  }
}
