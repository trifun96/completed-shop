import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userDetails: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  setToken(token: any): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    console.log(this.getToken());
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.userDetails.next(null);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin123@gmail.com' && password === 'admin123') {
      this.setToken('loggedOn');
      localStorage.setItem('role', 'admin');
    }
    return of({
      name: 'Trifun Markovic',
      email: 'admin123@gmail.com',
      role: 'admin',
    });
  }
}
