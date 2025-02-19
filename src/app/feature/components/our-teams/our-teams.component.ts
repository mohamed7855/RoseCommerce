import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamCardComponent } from "../../../shared/UI/team-card/team-card.component";

@Component({
  selector: 'app-our-teams',
  imports: [
    CommonModule,
    TeamCardComponent
],
  templateUrl: './our-teams.component.html',
  styleUrl: './our-teams.component.scss'
})
export class OurTeamsComponent {

}
