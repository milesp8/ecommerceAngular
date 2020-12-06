import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import {catchError} from 'rxjs/operators'
import { CanActivate, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

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
  loggedIn(): any {
    
    if (localStorage.getItem('token') == undefined) {
      return false
    } else {
      this.checktoken().subscribe((data) => {
        console.log("Logged in true")
        //this.router.navigate(['/home'])
        return true
      }, (error) => {
        localStorage.removeItem('token')
        console.log("REMOVED TOKEN")
        this.router.navigate(['/login'])
        return false
      })
    } 
    
    
    //return !!localStorage.getItem('token')
  }
  

  checktoken() {
    console.log("Bearer "+localStorage.getItem('token'))
    return this.http.post<any>('/api/auth', {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: "Bearer "+localStorage.getItem('token') 
      })
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error) {
    console.log("INVALID TOKEN: ", localStorage.getItem('token'))
    return throwError(error.message || "Internal Error")
  }
}
