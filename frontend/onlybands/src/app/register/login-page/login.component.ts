import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    this.http.post('http://localhost:4200/api/customers/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        // Save JWT token to localStorage
        localStorage.setItem('token', res.token);
        alert('Login successful!');
        // Redirect or update UI as needed
      },
      error: (err) => {
        alert('Login failed!');
      }
    });
  }
}