import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  activeDropdown: string | null = null;

  onHover(menuItem: string | null) {
    this.activeDropdown = menuItem;
  }
}
