import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {
  productData:undefined | product;

  constructor(private route : ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.log(productId);
    productId && this.product.getSingleProduct(productId).subscribe((data)=>{
      console.log(data);
      this.productData = data;
    })
  }
  updateProducts(data:any){

  }
  productMsg = 'Product Sucessfully updated'
}
