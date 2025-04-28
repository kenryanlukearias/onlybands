import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login-page/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RecoverComponent } from './recover-page/recover.component';
import { ForgetComponent } from './forget-page/forget.component';

const routes: Routes = [
  {  path: '', redirectTo: '/login', pathMatch: 'full' },
  {  path: 'login', component: LoginComponent },
  {  path: 'register', component: RegisterPageComponent },
  {  path: 'recover-password', component: RecoverComponent },
  {  path: 'forget-password', component: ForgetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
