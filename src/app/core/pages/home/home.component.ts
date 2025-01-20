import { Component } from '@angular/core';
import { SpecialGiftComponent } from "../../layout/special-gift/special-gift.component";

@Component({
  selector: 'app-home',
  imports: [SpecialGiftComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
