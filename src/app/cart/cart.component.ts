import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartManagerService } from '../cart-manager.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 itemArr: {name: string, price: number, img: string, link: string, description: string} [] = [];

constructor(private router: Router, public cartManager: CartManagerService) {}

ngOnInit(): void{
    document.getElementById('cart').style.display = 'none';
    this.itemArr = this.cartManager.getItems();
  }

toggleCart() {
  var m = document.getElementById('cart');
  if (m.style.display === "none") {
    m.style.display = "block";
  } else {
    m.style.display = "none";
  }
}

toggleToolbar() {
  var m = document.getElementById('header');
  if (m.style.display === "none") {
    m.style.display = "block";
  } else {
    m.style.display = "none";
  }
}
}

