import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {
  productData:undefined | product;
  productMsg:undefined |String;

  constructor(private route : ActivatedRoute, private product: ProductService, private routerNav: Router) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.log(productId);
    productId && this.product.getSingleProduct(productId).subscribe((data)=>{      
      this.productData = data;
    })
  }
  updateProducts(data:any){
    console.log(data);
    if(this.productData){
      data.id = this.productData.id;
    }
    this.product.updateSingleProduct(data).subscribe((result)=>{
      if(result){
        this.productMsg = 'Product Sucessfully updated'
        setTimeout(() => {
          this.productMsg = '';   
          this.routerNav.navigateByUrl('/seller-home')
        }, 1000);
      }
    })
    
  }  
}
