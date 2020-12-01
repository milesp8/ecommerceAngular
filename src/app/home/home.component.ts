import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dealArr: {name: string, price: number, img: string, link: string} [] = [];
  constructor() {
    for (let i = 1; i < 5; i++){
      const dealitem = {
        name: 'Product ' + i,
        price: 19.99,
        img: 'assets/img/new.png',
        link: '/products/' + i
      };
      // tslint:disable-next-line: no-unused-expression
      this.dealArr.push(dealitem);
    }
  }


  ngOnInit(): void {
  }

}
