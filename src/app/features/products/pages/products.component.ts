import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductListComponent } from '../components/product-list/product-list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [ProductListComponent],
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, image: 'image.png' },
    { id: 2, name: 'Product 2', price: 200, image: 'image.png' },
    { id: 3, name: 'Product 3', price: 300, image: 'image.png' },
    { id: 4, name: 'Product 4', price: 400, image: 'image.png' },
    { id: 5, name: 'Product 5', price: 500, image: 'image.png' },
    { id: 6, name: 'Product 6', price: 600, image: 'image.png' },
    { id: 7, name: 'Product 7', price: 700, image: 'image.png' },
    { id: 8, name: 'Product 8', price: 800, image: 'image.png' },
    { id: 9, name: 'Product 9', price: 900, image: 'image.png' },
    { id: 10, name: 'Product 10', price: 1000, image: 'image.png' },
  ];
}
