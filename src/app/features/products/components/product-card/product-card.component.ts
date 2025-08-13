import { NgIf } from '@angular/common';
import { CartService } from './../../../../services/cart.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [NgIf, RouterLink]
})
export class ProductCardComponent implements OnInit {
  @Input({ required: true }) product!: Product;
  @Output() addCart = new EventEmitter<string>();
  isInCart = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.isInCart = this.cartService.hasItem(this.product.id);
  }

  get imagePath() {
    return this.product.image;
  }

  addToCart() {
    this.cartService.addProductToCart({...this.product, quantity: 1});
    this.isInCart = this.cartService.hasItem(this.product.id);
    this.addCart.emit(this.product.id);
  }
}
