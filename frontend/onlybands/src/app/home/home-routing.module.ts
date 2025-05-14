import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { LandiingComponent } from './landing-section/landiing.component';
import { AchievementsComponent } from './achievements-page/achievements.component';
import { PricingComponent } from './price-page/pricing.component';
import { TutorsComponent } from './tutor-page/tutors.component';
import { MusicComponent } from './music-sections/music.component';
import { LessonsPageComponent } from './lessons/lessons-page.component';


const routes: Routes = [
  { path: 'home', component: LandiingComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'price', component: PricingComponent },
  { path: 'tutors', component: TutorsComponent },
  { path: 'music', component: MusicComponent },
  { path: 'lessons', component: LessonsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
