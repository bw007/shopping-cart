import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from './../../../../shared/models/product.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input({ required: true }) products!: Product[];
}
