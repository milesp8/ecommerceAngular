import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {

    let resobj = this.authservice.loggedIn()

    console.log(resobj)
    
    if(resobj == false) {
      this.router.navigate(['/login'])
    } else {
      console.log("Token still not deleted")
    }
  }
  goProducts() {
    window.location.replace("./editproducts");
  }
  goOrders() {
    window.location.replace("./editorders");
  }
  goCategories(){
    window.location.replace("./editcategories");
  }
  
  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }
}
