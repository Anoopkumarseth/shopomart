import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResult:undefined | product[]
  noSearchResult = false;
  searchedQuery: string | undefined | null;
  constructor(private activeRoute: ActivatedRoute, private searchProductCon:ProductService ) { }

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query'); 
    query && this.searchProductCon.searchProduct(query).subscribe((data)=>{
      this.searchResult = data      
      if(this.searchResult.length < 1){
        this.noSearchResult = true
        this.searchedQuery = query;
      }
    })
  }

}
