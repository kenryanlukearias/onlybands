import { Component } from '@angular/core';
import { HomeComponent } from '../home-page/home.component';
import { AchievementsComponent } from '../achievements-page/achievements.component';
import { PricingComponent } from '../price-page/pricing.component';
import { TutorsComponent } from '../tutor-page/tutors.component';
import { MusicComponent } from '../music-sections/music.component';

@Component({
  selector: 'app-landiing',
  imports: [ HomeComponent,AchievementsComponent,PricingComponent,TutorsComponent,MusicComponent ],
  templateUrl: './landiing.component.html',
  styleUrl: './landiing.component.scss'
})
export class LandiingComponent {

}
