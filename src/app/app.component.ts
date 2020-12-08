import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
// import { AuthGuard } from './guards/auth.guard'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { waitForAsync } from '@angular/core/testing';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
    state('open', style({height: '100%', display: 'block'})),
    state('close', style({height: '0%'})),
    transition('open=>close', [animate('.25s')]),
    transition('close=>open', [animate('.25s')]),
    ])
  ]
})

export class AppComponent implements OnInit {
  title = 'ecommerceAngular';
  isOpenMenu = false;
  isOpenCart = false;

  constructor(private service: AppServiceService, private authservice: AuthService, private router: Router) {

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
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  toggleMenu() {

    let m = document.getElementById('menu');
    if (m.style.display === "none") {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
    //this.isOpenMenu = !this.isOpenMenu;
  }
  toggleCart() {
    const m = document.getElementById('cart');
    if (m.style.display === 'none') {
      this.isOpenCart = !this.isOpenCart;
    } else {
      m.style.display = 'none';
      this.isOpenCart = !this.isOpenCart;

    }
    m.style.display = 'block';

  }
}
