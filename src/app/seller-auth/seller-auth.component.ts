import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  seller_log = true;
  authError = false;
  constructor(private seller: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(values: signUp): void {
    this.seller.userSignup(values)
  }

  logIn(values: login): void {
    // console.log(values)
    this.authError = false;
    this.seller.userLogin(values)
    this.seller.isLoggedError.subscribe((isError)=>{
      if(isError){
        this.authError = true;
      }
    })
  }

  
  sellerToggleForm() {
    this.seller_log = !this.seller_log;
  }
}
