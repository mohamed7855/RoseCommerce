import { Component } from '@angular/core';
import { TrustedByComponent } from "../../../feature/components/trusted-by/trusted-by.component";

@Component({
  selector: 'app-home',
  imports: [TrustedByComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
