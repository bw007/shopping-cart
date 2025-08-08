import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component';
import { ProductsComponent } from './features/products/pages/products.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  }
];
