import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { SidebarCardComponent } from '../sidebar-card/sidebar-card.component';

@Component({
  selector: 'app-categ-side-bar',
  imports: [SidebarCardComponent],
  templateUrl: './categ-side-bar.component.html',
  styleUrl: './categ-side-bar.component.scss',
})
export class CategSideBarComponent implements OnChanges {

  @Input() isOpened:boolean = false;


  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpened']) {
      this.isOpened = changes['isOpened'].currentValue;
      console.log("isOpened changed", this.isOpened);
    }
  }


  categories: string[] = [
    'Home & Living',
    'Garment Care',
    'Jewelry & Accessories',
    'Occasion Gifts',
    'Office & Stationery',
    'Personalised Gifts',
    'Gifts Box', 'Other',
  ];

  brands: string[] = [
    'Tovola',
    'Sundoy',
    'Sahoo Gifts',
    'Casterly',
    'Mainden Gifts',
  ];

  sales: string[] = [
    'On Sale',
    'In Stock',
    'Out Of Stock',
    'Discount',
  ];

  sizes: string[] = [
    'Extra Small',
    'Small',
    'Medium',
    'Large',
    'Extra Large'
  ];

  colors: string[] = [
    '#606DDD',
    '#4CAF50',
    '#17A2B8',
    '#FFC107',
    '#F44336'
  ];


  getLoopArray(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }
}
