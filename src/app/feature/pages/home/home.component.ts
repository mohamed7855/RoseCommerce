import { Component } from '@angular/core';
import { SpecialGiftComponent } from '../../components/special-gift/special-gift.component';
import { CategoriesSliderComponent } from '../../components/categ-slider/categ-slider.component';
import { StaticInfoComponent } from '../../components/static-info/static-info.component';
import { CustomerOpinionComponent } from '../../components/customer-opinion/customer-opinion.component';
import { TrustedByComponent } from "../../components/trusted-by/trusted-by.component";
@Component({
  selector: 'app-home',
  imports: [
    SpecialGiftComponent,
    CategoriesSliderComponent,
    StaticInfoComponent,
    CustomerOpinionComponent,
    TrustedByComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
