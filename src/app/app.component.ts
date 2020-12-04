import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
//import { AuthGuard } from './guards/auth.guard'
import { AuthService } from './auth.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerceAngular';

  constructor (private service : AppServiceService, private authservice: AuthService, private router: Router) {

  }

  ngOnInit() {
    /*
    this.service.getAllProducts()
    .subscribe(
        products => {
          console.log('Response: ', products)
        }, error => {
          console.log('Error found: ', error)
        }
    )

    this.service.getAllCategories()
    .subscribe(
        categories => {
          console.log('Response: ', categories)
        }, error => {
          console.log('Error found: ', error)
        }
    )*/

  }
  /*
  getDataFromApi(){
    this.service.getData().subscribe((response) => {
      console.log('Response from API is ', response)
    }, (error) => {
      console.log('Error is ', error)
    })
  }*/

  toggleDashboard() {
    if (this.authservice.loggedIn()) {
      this.router.navigate(['/account'])
    } else {
      this.router.navigate(['/login'])
    }
  }

  toggleMenu() {
    var m = document.getElementById('menu');
    if (m.style.display === "none") {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  }
  toggleCart() {
    var m = document.getElementById('cart');
    if (m.style.display === "none") {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  }
}
