import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType = 'default';

  constructor(private route:Router) { }

  ngOnInit(): void {
    this,this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
          console.log("inseller area");
          this.menuType = 'seller'
        } else {
          console.log("outside of seller")
          this.menuType = 'default'
        }
      }
    })
  }

}
