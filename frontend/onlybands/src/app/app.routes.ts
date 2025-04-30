import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './register/login-page/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    { path: '', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
];
