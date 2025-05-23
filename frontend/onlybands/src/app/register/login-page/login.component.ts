import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  selector: 'app-login'})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    this.http.post('http://localhost:3000/api/customers/login', {
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