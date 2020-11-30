import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceAngular';
  toggleMenu() {
    var m = document.getElementById('menu');
    if (m.style.display === "none") {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  }
}
