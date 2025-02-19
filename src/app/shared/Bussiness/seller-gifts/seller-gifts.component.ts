import { Component, OnInit } from '@angular/core';
import { BtnMainComponent } from "../../UI/btn-main/btn-main.component";
import { IProduct } from '../../../feature/models/product';
import { ProductsService } from '../../../feature/services/Products/products.service';
import { ProductCartComponent } from "../../UI/product-cart/product-cart.component";
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-seller-gifts',
  imports: [CommonModule ,BtnMainComponent, ProductCartComponent ,
    CarouselModule
  ],
  templateUrl: './seller-gifts.component.html',
  styleUrl: './seller-gifts.component.scss'
})
export class SellerGiftsComponent implements OnInit {
allBestSellerProducts !: IProduct[];

customOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  autoplayTimeout:2000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  margin:16,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 3
    },
    1000: {
      items: 3
    }
  },
  nav: false
}
  constructor(private _productsService:ProductsService){
    this.getAllProduct();
  }
  ngOnInit(): void {
    this._productsService.loadFlowbite(flowbite => {
      // Your custom code here
    flowbite.Carousel
    });  }

  ngOnDestroy(): void {
    // this._productsService.getProducts().subscribe();
  }
  

  getAllProduct(){
    this._productsService.getBestSeller().subscribe({
      next :(res:any)=>{
        console.log(res);
        this.allBestSellerProducts = res ;
      } ,
      error : (err:any)=>{
        console.log(err)
      }
    })
  }
}
