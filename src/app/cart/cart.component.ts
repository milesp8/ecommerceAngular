import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 itemArr: {name: string, price: number, img: string, link: string} [] = [];
 total = 0;
  constructor() {
    for (let i = 1; i < 5; i++){
      const item = {
        name: 'Product ' + i,
        price: 29.99,
        img: 'assets/img/new.png',
        link: '/products/' + i
      };
      // tslint:disable-next-line: no-unused-expression
      this.itemArr.push(item);
      this.total += item.price;
    }
  }

  ngOnInit(): void {
    document.getElementById('cart').style.display = 'none';
  }

}
