import { Component } from '@angular/core';
import { HomeComponent } from '../home-page/home.component';
import { AchievementsComponent } from '../achievements-page/achievements.component';
import { PricingComponent } from '../price-page/pricing.component';
import { TutorsComponent } from '../tutor-page/tutors.component';
import { MusicComponent } from '../music-sections/music.component';

@Component({
  selector: 'app-landiing',
  standalone: true,
  imports: [HomeComponent, AchievementsComponent, PricingComponent, TutorsComponent, MusicComponent],
  templateUrl: './landiing.component.html',
  styleUrls: ['./landiing.component.scss']
})
export class LandiingComponent {
  
  ngOnInit(): void {
    window.addEventListener('load', () => {
      const loader = document.getElementById('preloader');
      if (loader) {
        loader.style.display = 'none';
      }
    });
  }
}
