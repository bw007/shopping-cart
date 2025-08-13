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

  getAllProducts() {
    return this.products;
  }

  addProduct(productData: Product) {
    this.products.unshift({ ...productData })
  }
}
