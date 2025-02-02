import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";

@Component({
  selector: 'app-static-info',
  imports: [CategoryComponent],
  templateUrl: './static-info.component.html',
  styleUrl: './static-info.component.scss'
})
export class StaticInfoComponent {

}
