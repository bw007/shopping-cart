import { Product } from './../../../shared/models/product.model';

export interface CartData extends Product {
  quantity: number
}
