import { Component } from '@angular/core';
import { BestGiftCarouselComponent } from '../best-gift-carousel/best-gift-carousel.component';
import { GiftComponent } from '../gift/gift.component';
import { Gift } from '../../interfaces/gift';

@Component({
  selector: 'app-special-gift',
  imports: [BestGiftCarouselComponent, GiftComponent],
  templateUrl: './special-gift.component.html',
  styleUrl: './special-gift.component.scss',
})
export class SpecialGiftComponent {
  gifts: Gift[] = [
    {
      img: './imgs/specialGift1.png',
      title: 'Start $10.99',
      desc: 'Special Gifts Box For Your Love',
      btnText: 'Shop Now',
    },
    {
      imgs: [
        './imgs/specialGift2.1.png',
        './imgs/specialGift2.2.png',
        './imgs/specialGift2.3.png',
        './imgs/specialGift2.4.png',
      ],
      title: 'Best Gift Shop',
      desc: 'Culpa ducimus nesciunt aliquam non rerum esse recusandae omnis. Rerum optio dolores et.',
      btnText: 'Shop Now',
    },
    {
      img: './imgs/specialGift3.png',
      title: 'Gifts Box',
      desc: 'Awesome Gifts Box Collectons',
      btnText: 'Shop Now',
    },
    {
      img: './imgs/specialGift4.png',
      title: 'Occasion Gifts',
      desc: 'Best Occasion Gifts Collections',
      btnText: 'Discover Now',
    },
    {
      img: './imgs/specialGift5.png',
      title: 'Occasion Gifts',
      desc: 'Combo Sets Gift Box Up To 50% Off',
      btnText: 'Discover Now',
    },
  ];

  subGifts = this.gifts.slice(2);
}
