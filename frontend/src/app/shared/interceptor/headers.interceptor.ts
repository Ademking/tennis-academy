import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  baseURL = environment.API_URL
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('access_token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(catchError(err => {
      // if ([401, 403].indexOf(err.status) !== -1) {
      //     // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      //     this.authService.logout();
      // }

      const error = err.error.message || err.statusText;
      return throwError(error);
  }))




  }


}
