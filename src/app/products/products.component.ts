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
      let productsObj: any = this.activeRoute.snapshot.data['prodData'];
      console.log(this.productId + '   ' + productsObj);
      this.name = productsObj[this.productId].name;
      this.price = productsObj[this.productId].variantIds[0].price;
      this.img = 'assets/img/new.png';
      this.text =  productsObj[this.productId].description.toString();
    });
  }
}
