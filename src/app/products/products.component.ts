import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  productId: string;
  name: string;
  price: number;
  img: string;
  text: string;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.name = 'Product ' + this.productId;
      this.price = 29.99;
      this.img = 'assets/img/new.png';
      this.text =  'Trial text and product description, maybe with reviews?';
    });
  }
}
