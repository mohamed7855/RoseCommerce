import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { SpecialGiftComponent } from '../../components/special-gift/special-gift.component';
import { CategoriesSliderComponent } from '../../components/categ-slider/categ-slider.component';
import { StaticInfoComponent } from '../../components/static-info/static-info.component';
import { CustomerOpinionComponent } from '../../components/customer-opinion/customer-opinion.component';
import { TrustedByComponent } from '../../components/trusted-by/trusted-by.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ModalComponent } from "../../components/modal/modal.component";
import { PopularItemsComponent } from "../../../shared/Bussiness/popular-items/popular-items.component";
import { SellerGiftsComponent } from "../../../shared/Bussiness/seller-gifts/seller-gifts.component";
import { RegisterComponent } from "../../../core/pages/register/register.component";
import { LoginComponent } from "../../../core/pages/login/login.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    SpecialGiftComponent,
    CategoriesSliderComponent,
    StaticInfoComponent,
    CustomerOpinionComponent,
    TrustedByComponent,
    AboutUsComponent,
    GalleryComponent,
    ModalComponent,
    PopularItemsComponent,
    SellerGiftsComponent,
    RegisterComponent,
    LoginComponent,
    CommonModule,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  isViewSignup : boolean = false;
  isViewLogin : boolean = false;
  isViewForget : boolean = false;



  isClicked:boolean = false;

  openModal():void{
    this.isClicked = true;
  }
  closeModal():void{
    this.isClicked = false;
    this.isViewSignup = false ;
    this.isViewLogin = false;
  }

  signup(){

    this.isViewSignup = true ;
    this.isViewLogin = false;
    this.isViewForget = false;
    this.openModal();

  }

  login(){
    this.isViewSignup = false ;
    this.isViewForget = false;

    this.isViewLogin = true;
    this.openModal();
  }

}
