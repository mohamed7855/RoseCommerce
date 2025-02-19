import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { BtnIconComponent } from "../btn-icon/btn-icon.component";

@Component({
  selector: 'app-team-card',
  imports: [
    CommonModule,
    BtnIconComponent
],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {

  teamImage = input();
  teamName = input();
  teamTitle = input();

}
