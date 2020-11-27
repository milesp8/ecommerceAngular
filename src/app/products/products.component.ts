import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  itemArr: { name: string, price: number, img: string, link: string }[] = [];
  constructor() {
    const item = {
      name: 'Product 1',
      price: 29.99,
      img: 'assets/img/new.png',
      link: '/home',
      text: "Trial text and product description, maybe with reviews?"
    };
    // tslint:disable-next-line: no-unused-expression
    this.itemArr.push(item);

    console.log(this.itemArr.length);
  }

  ngOnInit(): void {
  }

}

