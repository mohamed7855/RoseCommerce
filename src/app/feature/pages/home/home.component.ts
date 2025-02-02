import { Component } from '@angular/core';
import { SpecialGiftComponent } from "../special-gift/special-gift.component";
import { CategoriesSliderComponent } from "../../components/categ-slider/categ-slider.component";

@Component({
  selector: 'app-home',
  imports: [SpecialGiftComponent, CategoriesSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
