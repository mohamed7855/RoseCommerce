import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gift',
  imports: [],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss',
})
export class GiftComponent {
  @Input() giftData: any;
}
