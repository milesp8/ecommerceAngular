import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) {

  }

  // and check that token is valid
  canActivate(): boolean {
    let responseObj = this.authservice.loggedIn()
    console.log("RESPONSE: ", responseObj)
    if (responseObj == undefined) {
      
      /*
      this.authservice.checktoken().subscribe((data) => {
        console.log("Logged in true")
        //this.router.navigate(['/home'])
        return true
      }, (error) => {
        localStorage.removeItem('token')
        console.log("REMOVED TOKEN")
        this.router.navigate(['/login'])
        return false
      })*/

      return true
      
    } else {
      //change navigation to 404 page
      //console.log("NO TOKEN FOUND")
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
