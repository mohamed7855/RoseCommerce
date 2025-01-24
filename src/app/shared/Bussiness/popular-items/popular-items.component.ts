import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCartComponent } from '../../UI/product-cart/product-cart.component';
import { ProductsService } from '../../../feature/services/Products/products.service';
import { IProduct } from '../../../feature/models/product';

@Component({
  selector: 'app-popular-items',
  imports: [
    CommonModule ,
    ProductCartComponent ,
  ],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.scss'
})
export class PopularItemsComponent {

  allProducts !: IProduct[];

  constructor(private _productsService:ProductsService){
    this.getAllProduct();
  }

  getAllProduct(){
    this._productsService.getProducts().subscribe({
      next :(res:any)=>{
        console.log(res);
        this.allProducts = res ;
      } ,
      error : (err:any)=>{
        console.log(err)
      }
    })
  }
}
