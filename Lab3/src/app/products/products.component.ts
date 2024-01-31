import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import * as jsonData from '../../assets/products-list.json';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  data: any = jsonData;
  products: Array<Product> = this.data.default;
}
