import { Component, input, InputSignal } from '@angular/core';
import { Gift } from '../../interfaces/gift';

@Component({
  selector: 'app-gift',
  imports: [],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss',
})
export class GiftComponent {
  // @Input() giftData!: Gift;
  giftData: InputSignal<Gift> = input.required<Gift>();
}
