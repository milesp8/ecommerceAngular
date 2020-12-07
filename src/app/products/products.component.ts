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
  productId: string;
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
      this.productId = params.get('id');
      let productsObj: any = this.activeRoute.snapshot.data['prodData'];
      productsObj[this.productId].variantIds.forEach(element => {
        this.variants.push(element);
      });
      console.log(this.productId + '   ' + productsObj);
      this.name = productsObj[this.productId].name + ' (' + this.variants[this.variantNum].name + ')';
      this.price = this.variants[this.variantNum].price;
      this.img = 'assets/img/new.png';
      this.text =  productsObj[this.productId].description.toString();
    });
  }
  addToCart(): void{
      this.cartManager.addToCart({
        name: this.name,
        price: this.price,
        img: this.img,
        link: '/products/' + this.productId,
        description: this.text
      });
  }
}
