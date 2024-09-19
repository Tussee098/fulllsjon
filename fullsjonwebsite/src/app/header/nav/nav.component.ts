import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  activeDropdown: string | null = null;

  onHover(menuItem: string | null) {
    this.activeDropdown = menuItem;
  }

  onClick(menuItem: string) {
    console.log(menuItem)
    this.activeDropdown = menuItem;
  }
}
