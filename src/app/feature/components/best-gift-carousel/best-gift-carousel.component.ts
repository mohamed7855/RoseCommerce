import { Component, input, InputSignal } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Gift } from '../../interfaces/gift';

@Component({
  selector: 'app-best-gift-carousel',
  imports: [CarouselModule],
  templateUrl: './best-gift-carousel.component.html',
  styleUrl: './best-gift-carousel.component.scss',
})
export class BestGiftCarouselComponent {
  sliders: InputSignal<Gift> = input.required<Gift>();

  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    smartSpeed:700,
    dotsSpeed:700,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
}
