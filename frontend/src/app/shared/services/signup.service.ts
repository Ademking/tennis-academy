import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseURL = environment.API_URL

  constructor(private http: HttpClient, public router: Router) { }

  signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    password_confirmation: string,
    birthdate: string,
    phone: string,
    address: string,
    city: string,
    country: string,
    gender: string
  ): Observable<any> {
    return this.http.post<any>(this.baseURL + '/register', {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      birthdate: birthdate,
      phone: phone,
      address: address,
      city: city,
      country: country,
      gender: gender
    });

  }
}
