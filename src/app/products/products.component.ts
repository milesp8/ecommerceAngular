import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  item: {name: string, price: number, img: string, link: string, text: string, id: string};
  constructor(private router: Router) {
     this.item = {
      name: 'Product ',
      price: 29.99,
      img: 'assets/img/new.png',
      link: '/home',
      text:  "Trial text and product description, maybe with reviews?",
      id: this.router.url.substr(10, this.router.url.length)
    };

    this.item.name += this.item.id;

  }

  ngOnInit(): void {
  }

}

