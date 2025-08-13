import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  imports: [FormsModule]
})
export class AddProductComponent {
  @Output() close = new EventEmitter<void>();
  name = '';
  price = 0;
  image = '';

  constructor(private productService: ProductService) {}

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.productService.addProduct({
      id: new Date().getTime().toString(),
      name: this.name,
      price: this.price,
      image: this.image,
    });

    this.close.emit()
  }
}
