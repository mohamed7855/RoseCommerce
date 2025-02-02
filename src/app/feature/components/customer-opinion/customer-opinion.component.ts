import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CustomerOpinion } from '../../interfaces/customerOpinion';

@Component({
  selector: 'app-customer-opinion',
  imports: [CarouselModule],
  templateUrl: './customer-opinion.component.html',
  styleUrl: './customer-opinion.component.scss',
})
export class CustomerOpinionComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    smartSpeed: 700,
    dotsSpeed: 700,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
    nav: true,
    margin: 24,
  };

  customerOpinions: CustomerOpinion[] = [
    {
      userName: 'Ahmed Mohamed',
      userImg: './imgs/opinions/1.png',
      userOpinion:
        'Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.',
      numStars: 4,
      userType: 'Customer',
    },
    {
      userName: 'Ahmed Mohamed',
      userImg: './imgs/opinions/2.png',
      userOpinion:
        'Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.',
      numStars: 4,
      userType: 'Customer',
    },
    {
      userName: 'Ahmed Mohamed',
      userImg: './imgs/opinions/3.png',
      userOpinion:
        'Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.',
      numStars: 4,
      userType: 'Customer',
    },
    {
      userName: 'Ahmed Mohamed',
      userImg: './imgs/opinions/4.png',
      userOpinion:
        'Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.',
      numStars: 4,
      userType: 'Customer',
    },
  ];

  starts(numSatrs: number): number[] {
    return Array.from({ length: numSatrs });
  }
}
