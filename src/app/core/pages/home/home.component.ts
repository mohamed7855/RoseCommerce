import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PopularItemsComponent } from '../../../shared/Bussiness/popular-items/popular-items.component';
import { SellerGiftsComponent } from "../../../shared/Bussiness/seller-gifts/seller-gifts.component";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    PopularItemsComponent,
    SellerGiftsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
