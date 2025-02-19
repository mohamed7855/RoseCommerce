import { Component, OnInit } from '@angular/core';
import { BtnMainComponent } from "../../UI/btn-main/btn-main.component";
import { IProduct } from '../../../feature/models/product';
import { ProductsService } from '../../../feature/services/Products/products.service';
import { ProductCartComponent } from "../../UI/product-cart/product-cart.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-gifts',
  imports: [CommonModule ,BtnMainComponent, ProductCartComponent],
  templateUrl: './seller-gifts.component.html',
  styleUrl: './seller-gifts.component.scss'
})
export class SellerGiftsComponent implements OnInit {
allBestSellerProducts !: IProduct[];

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
