import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();
  private auth = getAuth();

  constructor(private router: Router) {
    // Check authentication state
    onAuthStateChanged(this.auth, (user) => {
      this.isAuthenticated.next(!!user);
      if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', user.email || '');
      } else {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
      }
    });
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      if (result.user) {
        this.router.navigate(['/']);
      }
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string): Promise<void> {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      if (result.user) {
        this.router.navigate(['/']);
      }
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
} 