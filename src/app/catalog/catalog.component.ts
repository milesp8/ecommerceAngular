import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
 itemArr: {name: string, price: number, img: string, link: string} [] = [];
  constructor() {
    for (let i = 1; i < 20; i++){
      const item = {
        name: 'Product ' + i,
        price: 29.99,
        img: 'assets/img/new.png',
        link: '/products/' + i
      };
      // tslint:disable-next-line: no-unused-expression
      this.itemArr.push(item);
    }
  }

  ngOnInit(): void {}

}
