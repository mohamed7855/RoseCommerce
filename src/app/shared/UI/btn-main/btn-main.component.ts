import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-btn-main',
  imports: [CommonModule],
  templateUrl: './btn-main.component.html',
  styleUrl: './btn-main.component.scss'
})
export class BtnMainComponent {
 btnName = input();

}
