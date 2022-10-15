import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient, private router: Router) { }

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedError = new EventEmitter<boolean>(false);


  userSignup(data: signUp) {
    this.http.post('http://localhost:3000/seller', data, { observe: "response" })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true)
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
      })
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }

  userLogin(data: login) {
    console.log(data)
    // api call will be there
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' })
      .subscribe((result: any) => {
        console.log(result)
        if (result && result.body && result.body.length) {
          localStorage.setItem('seller', JSON.stringify(result.body))
          this.router.navigate(['seller-home'])
          
        } else {
          console.log("user logged in Failed")
          this.isLoggedError.emit(true)
        }

      })
  }
}
