import { Injectable } from '@angular/core';
import { type Product } from '../shared/models/product.model';
import { type CartData } from '../features/cart/pages/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData: CartData[] = []

  constructor() {
    const cartData = localStorage.getItem('cartData')
    if (cartData) {
      this.cartData = JSON.parse(cartData)
    }
  }

  private saveCartData() {
    localStorage.setItem('cartData', JSON.stringify(this.cartData))
  }

  getAllCartData() {
    return this.cartData;
  }

  addProductToCart(productData: CartData) {
    this.cartData = [ productData, ...this.cartData ]
    this.saveCartData()
  }

  decreaseQuantity(id: string) {
    this.cartData = this.cartData.map(data => data.id === id ? { ...data, quantity: data.quantity - 1 } : data)
    this.saveCartData()
  }

  increaseQuantity(id: string) {
    this.cartData = this.cartData.map(data => data.id === id ? { ...data, quantity: data.quantity + 1 } : data)
    this.saveCartData()
  }

  removeCartData(id: string) {
    this.cartData = this.cartData.filter(data => data.id !== id);
    this.saveCartData()
  }

  hasItem(productId: string): boolean {
    return this.cartData.some(product => product.id === productId);
  }
}
