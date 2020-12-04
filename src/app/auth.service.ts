import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import {catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  loginUser(user) {
    //return this.http.post<User>('/api/login', {email, password})

    return this.http.post<any>('/api/login', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  registerUser(user) {
    return this.http.post<any>('/api/register', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') 
      })
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  // returns boolean for logged in or not
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
