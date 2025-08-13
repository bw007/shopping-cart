import { Component } from '@angular/core';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductService } from '../../../services/product.service';
import { AddProductComponent } from "../components/new-product/add-product.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [ProductListComponent, AddProductComponent, NgIf],
})
export class ProductsComponent {
  private productService: ProductService;
  openDialog = false;

  constructor(productService: ProductService) {
    this.productService = productService
  }

  get allProducts() {
    return this.productService.getAllProducts();
  }

  startDialog() {
    this.openDialog = true;
  }

  onCloseDialog() {
    this.openDialog = false;
  }
}
