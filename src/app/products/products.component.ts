import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { CartManagerService } from '../cart-manager.service';
import { AfterViewInit, ViewChild } from '@angular/core';



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

  images = [];

  constructor(private router: Router, private activeRoute: ActivatedRoute, private cartManager: CartManagerService) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.images = [];
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
      console.log("Product id: ", this.productId)
      console.log("Prod object: ", productsObj)
      console.log("Image name: ", productsObj[this.productId].images[this.variantNum])
      this.img = '/assets/products/' + productsObj[this.productId].variantIds[this.variantNum].images[0];


      //this.img = '/assets/products/' + productsObj[this.productId].images[this.variantNum];


      productsObj[this.productId].variantIds.forEach(element => {
        console.log(element.images[0])

        //this.images.push('/assets/products/' + element.images[0]);
      });

      productsObj[this.productId].variantIds.forEach(element => {
        this.images.push('/assets/products/' + element.images[0]);
        //this.images.push('/assets/products/' + element);
      });
      this.text =  productsObj[this.productId].description.toString();
    });


    console.log('IMG --- ' + this.images);
  }
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;



  ngAfterViewInit() {
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
