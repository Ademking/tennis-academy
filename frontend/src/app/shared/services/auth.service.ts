import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.API_URL
  userRole = '';

  constructor(private http: HttpClient, public router: Router) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string, role: string }>(this.baseURL + '/login', { email: email, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

   getRole() {
    console.log('Getting user role ...');
    // if user role is not set, get it
    if (this.userRole == '') {
      return this.http.get(this.baseURL + '/my-role').pipe(
        map((res: any) => {
          this.userRole = res.role;
          return res;
        })
      );
    }
    else {
      // return subscription
      let sub = new Observable<string>(observer => {
        observer.next(this.userRole);
      });

      return sub;
    }

  }

  logout() {
    return this.http.get(this.baseURL + '/logout').subscribe(
      {
        next: (data: any) => {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  public get isLoggedIn(): boolean {
    //TODO: Check token expiry and other security checks
    return (localStorage.getItem('access_token') !== null);
  }
}
