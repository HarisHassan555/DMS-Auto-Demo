import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    // Check if already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/home']);
    }
  }

  async login() {
    this.isLoading = true;
    this.errorMessage = '';
    
    try {
      // Map hardcoded credentials to Firebase credentials
      if (this.username === 'taimoor' && this.password === '123') {
        await this.authService.login('taimoor@dsg.com', '123456');
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    } catch (error: any) {
      this.errorMessage = error.message || 'An error occurred during login';
    } finally {
      this.isLoading = false;
    }
  }

  async register() {
    this.isLoading = true;
    this.errorMessage = '';
    
    try {
      // Map hardcoded credentials to Firebase credentials
      if (this.username === 'taimoor' && this.password === '123') {
        await this.authService.register('taimoor@dsg.com', '123456');
      } else {
        this.errorMessage = 'Invalid registration credentials';
      }
    } catch (error: any) {
      this.errorMessage = error.message || 'An error occurred during registration';
    } finally {
      this.isLoading = false;
    }
  }
} 