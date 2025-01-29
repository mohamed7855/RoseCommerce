import { Component } from '@angular/core';
import { AboutUsComponent } from "../../../feature/components/about-us/about-us.component";

@Component({
  selector: 'app-home',
  imports: [AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
