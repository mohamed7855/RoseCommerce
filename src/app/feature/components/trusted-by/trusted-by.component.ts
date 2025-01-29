import { Component } from '@angular/core';

@Component({
  selector: 'app-trusted-by',
  imports: [],
  templateUrl: './trusted-by.component.html',
  styleUrl: './trusted-by.component.scss'
})
export class TrustedByComponent {

  imgList:string[]=[
    "./images/image1.png",
    "./images/image2.png",
    "./images/image3.png",
    "./images/image4.png",
    "./images/image5.png",
    "./images/image6.png",
  ]

  aboutList:string[] =[
    "Streamlined Shipping Experience",
    "Affordable Modern Design",
    "Competitive Price & Easy To Shop",
    "We Made Awesome Products"
  ]


}
