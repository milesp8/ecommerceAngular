import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 itemArr: {name: string, price: number, img: string, link: string} [] = [];
 total = 0;
 addToCart(): void{
  console.log(this.router.url.substr(1, 8));
  if (this.router.url.substr(1, 8) === 'products'){
    let id = this.router.url.substr(10, this.router.url.length);
    const item = {
     name: 'Product ' + id,
      price: 29.99,
      img: 'assets/img/new.png',
      link: '/products/' + id
   };
    this.itemArr.push(item);
    this.total = Math.floor(100 * (item.price + this.total)) / 100;
}
 }
  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    document.getElementById('cart').style.display = 'none';
  }

}
