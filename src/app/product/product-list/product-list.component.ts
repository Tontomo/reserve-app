import { Component } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: any = [1, 2, 3, 4];

  constructor() {
    this.products = products;
  }
}
