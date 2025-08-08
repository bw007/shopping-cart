import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component';
import { ProductsComponent } from './features/products/pages/products.component';
import { CartComponent } from './features/cart/pages/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent
  }
];
