import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PopularItemsComponent } from '../../../shared/Bussiness/popular-items/popular-items.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule ,
    PopularItemsComponent ,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
