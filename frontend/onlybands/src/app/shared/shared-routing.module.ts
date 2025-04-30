import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../register/login-page/login.component';
import { LandiingComponent } from '../home/landing-section/landiing.component';
import { RegisterPageComponent } from '../register/register-page/register-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'home', component: LandiingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
