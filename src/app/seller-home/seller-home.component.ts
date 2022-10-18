import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  constructor(private productListing: ProductService) { }

  ngOnInit(): void {
    this.productListing.listProduct().subscribe((result) => {
      console.log(result);
      this.productList = result;
    })
  }

}
