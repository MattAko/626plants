import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.model';

interface AuthResponseData {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService implements OnInit {
  errorChanged = new Subject<string>();
  user = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  /*
    @desc: Login user
        On success: Store the user info 
        On error: notify user
  */
  login(email: string, password: string) {
    this.http
      .post<AuthResponseData>('/api/admin/login', {
        email: email,
        password: password,
      })
      .subscribe(
        (response) => {
          const expirationDate = new Date(
            new Date().getTime() + +response.expiresIn * 1000
          );
          const user = new User(
            response.email,
            response.localId,
            response.idToken,
            expirationDate
          );
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
          this.autoLogout(+response.expiresIn * 1000);
          this.router.navigate(['/manage']);
        },
        (error) => {
          this.errorChanged.next(error.error.message);
        }
      );
  }

  /*
        @desc: Logout the user:
            Clear user subject, navigate to /login, 
            clear setTimeout in autoLogout(), clear storage
    */
  logout() {
    this.user.next(null);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

  /*
        @desc: Check localStorage for userData, return if empty.
        If data found, check if token is still valid.
            If token INVALID, clear localStorage and return
            If token VALID, login the user, then redirect to /manage.
    */
  autoLogin() {
    if (!localStorage.getItem('userData')) {
      return;
    }
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDate =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDate);
      this.router.navigate(['/manage']);
    }
  }

  autoLogout(tokenDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, tokenDuration);
  }
}
