import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType:string = 'default';
  sellerName: string= '';

  constructor(private route:Router) { }

  ngOnInit(): void {
    this,this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
          console.log("inseller area");
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStroge = localStorage.getItem('seller');
            let sellerData = sellerStroge && JSON.parse(sellerStroge)[0];
            this.sellerName = sellerData.name ;

          }
        } else {
          console.log("outside of seller")
          this.menuType = 'default'
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }

}
