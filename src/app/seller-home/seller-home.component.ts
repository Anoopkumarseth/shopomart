import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  faTrash = faTrash;
  faEdit = faEdit;
  constructor(private productListing: ProductService) { }

  ngOnInit(): void {
    this.showproducts();
  }
  showproducts() {
    this.productListing.listProduct().subscribe((result) => {
      this.productList = result;
    })
  }
  deleteProduct(id: number) {
    console.log(id);
    this.productListing.deleteProduct(id).subscribe((result) => {
      console.log("product Deleted")
      this.showproducts();
    })
  }
}
