import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import * as jsonData from '../../assets/products-list.json';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe, RatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() id!: number;
  product?: Product;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const data: any = jsonData;
    const products: Array<Product> = data.default;
    this.product = products.find((element: Product) => element.id == this.id);
    if (this.product === undefined) {
      this.router.navigate(['notfound']);
    }
  }

}
