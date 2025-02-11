import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  colors: string[] = [
    '#606DDD',
    '#4CAF50',
    '#17A2B8',
    '#FFC107',
    '#F44336'
  ];

}
