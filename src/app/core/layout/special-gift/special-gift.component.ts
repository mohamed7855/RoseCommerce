import { Component } from '@angular/core';
import { BestGiftCarouselComponent } from '../../components/best-gift-carousel/best-gift-carousel.component';

@Component({
  selector: 'app-special-gift',
  imports: [BestGiftCarouselComponent],
  templateUrl: './special-gift.component.html',
  styleUrl: './special-gift.component.scss',
})
export class SpecialGiftComponent {
  mockupData = [
    {
      img: './imgs/specialGift1.png',
      title: 'Gifts Box',
      desc: 'Best gift',
    },
    {
      imgs: [

        './imgs/specialGift2.1.png',
        './imgs/specialGift2.2.png',
        './imgs/specialGift2.3.png',
        './imgs/specialGift2.4.png',
        './imgs/specialGift2.5.png',
      ],
      title: 'Gifts Box',
      desc: 'Best gift',
    },
    {
      img: './imgs/specialGift3.png',
      title: 'Gifts Box',
      desc: 'Best gift',
    },
    {
      img: './imgs/specialGift4.png',
      title: 'Gifts Box',
      desc: 'Best gift',
    },
    {
      img: './imgs/specialGift5.png',
      title: 'Gifts Box',
      desc: 'Best gift',
    },
  ];
}
