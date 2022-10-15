import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {

  constructor(private product: ProductService) { }

  ngOnInit(): void {
  }
  addProducts(data: object) {
    console.log(data)
    this.product.addProduct()
  }
}
