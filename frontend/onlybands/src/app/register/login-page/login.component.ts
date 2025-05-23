import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FooterComponent,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  selector: 'app-login'})
export class LoginComponent {
  goToHome() {
    window.location.href = '/home';
  }
}
