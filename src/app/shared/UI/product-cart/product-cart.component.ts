import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { BtnIconComponent } from '../btn-icon/btn-icon.component';
import { IProduct } from '../../../feature/models/product';

@Component({
  selector: 'app-product-cart',
  imports: [
    CommonModule ,
    RatingComponent ,
    BtnIconComponent ,
  ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {

@Input() Product !: IProduct
}
