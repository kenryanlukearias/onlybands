import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  name = '';
  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  terms = false;

  constructor(private http: HttpClient) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!this.terms) {
      alert('You must accept the terms and conditions.');
      return;
    }
    this.http.post('http://localhost:3000/api/customers/register', {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }).subscribe({
      next: () => {
        alert('Registration successful!');
        // Optionally redirect or clear form
      },
      error: (err) => {
        alert('Registration failed: ' + (err.error?.error || 'Unknown error'));
      }
    });
  }

}
