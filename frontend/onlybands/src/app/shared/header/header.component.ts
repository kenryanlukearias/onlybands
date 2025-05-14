import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DrawerComponent } from "../drawer/drawer.component";


@Component({
  selector: 'app-header',
  imports: [RouterLink, DrawerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDrawerOpen = false;

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}

