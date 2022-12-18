import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions, EffectCreative } from "swiper";
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/data-type';

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCreative]);
@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroSliderComponent implements OnInit {
  pagination = {
    clickable: true,
    renderBullet: function (index:number, className:string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: this.pagination,
    centeredSlides:true,
    effect:'creative',
    creativeEffect:{
      prev: {
        shadow: true,
        translate: [0, 0, -400]
      },
      next: {
        translate: ['100%', 0, 0]
      }
    },
    scrollbar: { draggable: true, hide: true },
    
  };
  onSwiper(swiper:any){
    // console.log(swiper);
  }

  popularProduct:undefined | product[];
  constructor(private product: ProductService) { }
  
  ngOnInit(): void {
    this.product.popProd().subscribe((data)=>{
      this.popularProduct = data;
      console.log(this.popularProduct);      
    })
  }

}
