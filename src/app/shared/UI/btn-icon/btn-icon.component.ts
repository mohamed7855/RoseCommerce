import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-btn-icon',
  imports: [
    CommonModule ,

  ],
  templateUrl: './btn-icon.component.html',
  styleUrl: './btn-icon.component.scss'
})
export class BtnIconComponent {

  iconName = input();
  iconBgColor = input();
  iconShape = input();
}
