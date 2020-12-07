import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { CartManagerService } from '../cart-manager.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  productId = 0;
  name: string;
  price: number;
  img: string;
  text: string;
  variants = [];
  variantNum = 0;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private cartManager: CartManagerService) {

  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.productId = Number.parseInt(params.get('id'), 0);
      this.variantNum = Number.parseInt(params.get('variant'), 0);
      let productsObj: any = this.activeRoute.snapshot.data['prodData'];
      if (this.variants.length === 0){
        productsObj[this.productId].variantIds.forEach((element, index) => {
          this.variants.push({element, link: '/products/' + this.productId + '/' + index});
        });
    }
      console.log(this.variants);
      this.name = productsObj[this.productId].name + ' (' + this.variants[this.variantNum].element.name + ')';
      this.price = this.variants[this.variantNum].element.price;
      this.img = 'assets/img/new.png';
      this.text =  productsObj[this.productId].description.toString();
    });
  }
  addToCart(): void{
      this.cartManager.addToCart({
        name: this.name,
        price: this.price,
        img: this.img,
        link: '/products/' + this.productId + '/' + this.variantNum,
        description: this.text
      });
  }
  clearVariants(): void {this.variants = []; }
}
