import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
 itemArr: {name: string, price: number, img: string, link: string, description: string} [] = [];
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute) {
    /*
    for (let i = 1; i < 20; i++){
      const item = {
        name: 'Product ' + i,
        price: 29.99,
        img: 'assets/img/new.png',
        link: '/products/' + i
      };
      // tslint:disable-next-line: no-unused-expression
      this.itemArr.push(item);
    }*/
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data['prodData'])
    //console.log(this.activatedRoute.snapshot.data['categoryData'])

    let productsObj: any = this.activatedRoute.snapshot.data['prodData']

    for (let productIndex in productsObj) {
      const item = {
        name: productsObj[productIndex].name,
        price: productsObj[productIndex].variantIds[0].price,
        img: 'assets/img/new.png',
        link: '/home',
        description: productsObj[productIndex].description.toString()
      }

      console.log(productsObj[productIndex].description)

      this.itemArr.push(item)
    }
  }

}
