import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { CartManagerService } from '../cart-manager.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-products, ngbd-carousel-pause',
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

  images = ['../assets/products/black.png', '../assets/products/red.png', '../assets/products/blue.png', '../assets/img/new_2.png'];

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
      this.img = '/assets/products/' + productsObj[this.productId].images[this.variantNum];
      this.text =  productsObj[this.productId].description.toString();
    });

    this.carousel.pause();

  }
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    console.log("Pause called")
    this.carousel.pause();

  }

  ngAfterViewInit() {
    this.carousel.pause();
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
