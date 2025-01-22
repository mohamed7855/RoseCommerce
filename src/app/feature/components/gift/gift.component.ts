import { Component, Input } from '@angular/core';
import { Gift } from '../../interfaces/gift';

@Component({
  selector: 'app-gift',
  imports: [],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss',
})
export class GiftComponent {
  @Input() giftData!: Gift;
}
