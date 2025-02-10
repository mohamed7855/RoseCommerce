import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  aboutList:string[] =[
    "Streamlined Shipping Experience",
    "Affordable Modern Design",
    "Competitive Price & Easy To Shop",
    "We Made Awesome Products"
  ]
}
