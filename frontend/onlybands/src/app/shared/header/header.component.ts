import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DrawerComponent } from "../drawer/drawer.component";
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [RouterLink, DrawerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDrawerOpen = false;
  @ViewChild('achievements') achievements!: ElementRef;


  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  scrollToAchievements() {
  this.achievements.nativeElement.scrollIntoView({ behavior: 'smooth' });
}
}

