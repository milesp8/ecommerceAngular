import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  itemArr: { name: string, price: number, img: string, link: string, id: string }[] = [];
  constructor(private router: Router) {
    const item = {
      name: 'Product 1',
      price: 29.99,
      img: 'assets/img/new.png',
      link: '/home',
      text:  "Trial text and product description, maybe with reviews?",
      id: this.router.url.substr(10, this.router.url.length)
    };
    // tslint:disable-next-line: no-unused-expression
    this.itemArr.push(item);

    console.log(this.itemArr.length);
  }

  ngOnInit(): void {
  }

}

