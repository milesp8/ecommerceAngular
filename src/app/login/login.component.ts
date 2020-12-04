import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {AuthGuard} from '../guards/auth.guard'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: string

  constructor(private authservice: AuthService, private router: Router) { 
    status = ''
  }

  ngOnInit(): void {
    if(this.authservice.loggedIn) {
      this.router.navigate(['/account'])
    }
  }

  userlogin (){
    
    let email = (<HTMLInputElement>document.getElementById('emailId')).value;
    let password = (<HTMLInputElement>document.getElementById('pswId')).value;

    if (email == '' || password == '') {
      this.status = 'Please fill in all fields'
    } else {
      this.status = ''

      this.authservice.loginUser({
        'email': email,
        'password': password
      }).subscribe(
        res => {
          console.log(res)
          this.status = ''
          localStorage.setItem('token', res.token)
          this.router.navigate(['/account'])
        }, 
        err => {
          this.status = 'Incorrect email and/or password'
        }
      )
    }
 
    /*

    this.authservice.loginUser({
      'email': email,
      'password': password
    }).subscribe(
      res => {
        console.log(res)
        this.status = ''
        localStorage.setItem('token', res.token)
      }, 
      err => {
        this.status = 'Incorrect email and/or password'
        //(<HTMLInputElement>document.getElementById('loginStatId')).value = "Incorrect email and/or password";
      }
    )*/
    
  }

  

}
