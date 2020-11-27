import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceAngular';
  goHome(){
    window.location.href = 'home';
  }
  goCatalog(){
    window.location.href = 'catalog';
  }
  goCart(){
    window.location.href = 'cart';
  }
  goAccount(){
    window.location.href = 'account';
  }
}
