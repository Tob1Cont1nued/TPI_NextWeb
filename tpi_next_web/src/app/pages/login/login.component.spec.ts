import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'test@test.com' && this.password === 'password') {
      // Erfolgreiches Login, weiterleiten zu einer anderen Seite
      this.router.navigate(['/welcome']);
    } else {
      alert('Invalid credentials');
    }
  }
}
