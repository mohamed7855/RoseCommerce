import { Component } from '@angular/core';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { SpecialGiftComponent } from '../../components/special-gift/special-gift.component';
import { CategoriesSliderComponent } from '../../components/categ-slider/categ-slider.component';
import { StaticInfoComponent } from '../../components/static-info/static-info.component';
import { CustomerOpinionComponent } from '../../components/customer-opinion/customer-opinion.component';
import { TrustedByComponent } from '../../components/trusted-by/trusted-by.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ModalComponent } from "../../components/modal/modal.component";
import { RegisterComponent } from "../../../core/pages/register/register.component";

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
    RegisterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {


  isClicked:boolean = false;

  openModal():void{
    this.isClicked = true;
  }
  closeModal():void{
    this.isClicked = false;
  }

}
