import { Component } from '@angular/core';
import { SpecialGiftComponent } from "../special-gift/special-gift.component";
import { CustomerOpinionComponent } from "../../components/customer-opinion/customer-opinion.component";

@Component({
  selector: 'app-home',
  imports: [SpecialGiftComponent, CustomerOpinionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
