import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-card',
  imports: [],
  templateUrl: './sidebar-card.component.html',
  styleUrl: './sidebar-card.component.scss'
})
export class SidebarCardComponent {

    @Input() card: { title: string; } = { title: 'title'};

}
