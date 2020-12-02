import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleProducts() {
    var m = document.getElementById('prod');
    if (m.style.display === "none") {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  }
  toggleOrders() {
    var m = document.getElementById('ord');
    if (m.style.display === "none") {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  }
  

}
