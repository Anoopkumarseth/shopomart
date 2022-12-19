import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faEye, faCartShopping } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  
})
export class HomeComponent implements OnInit {
  tradingproduct:undefined | product[];
  faEye = faEye;
  faCartShopping = faCartShopping;
  constructor(private tranProduct: ProductService) { }

  ngOnInit(): void {
    this.tranProduct.trendingProd().subscribe((data)=>{
      this.tradingproduct = data;  
    })
  }

}
