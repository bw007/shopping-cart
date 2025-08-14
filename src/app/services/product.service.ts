import { type Product } from './../shared/models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: '1', name: 'Product 1', price: 100, image: 'image.png' },
    { id: '2', name: 'Product 2', price: 200, image: 'image.png' },
    { id: '3', name: 'Product 3', price: 300, image: 'image.png' }
  ];

  constructor() {
    const products = localStorage.getItem('products')
    if (products) {
      this.products = JSON.parse(products)
    }
  }

  private saveProducts() {
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  getAllProducts() {
    return this.products;
  }

  addProduct(productData: Product) {
    this.products.unshift({ ...productData })
    this.saveProducts()
  }

  removeProduct(id: string) {
    this.products = this.products.filter(product => product.id !== id)
    this.saveProducts()
  }
}
