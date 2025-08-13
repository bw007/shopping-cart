import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterLink, NgIf],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService
  }

  get getAllCartDataCount() {
    return this.cartService.getAllCartData().length
  }
}
