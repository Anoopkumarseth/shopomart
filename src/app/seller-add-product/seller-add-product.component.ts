import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
  productMsg: string | undefined;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
  }
  addProducts(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      result ? this.productMsg = "Product Added" : this.productMsg = "Product Not Added";
      setTimeout(() => this.productMsg = undefined, 3000);
    })
  }
}
