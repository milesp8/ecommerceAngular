import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ICategory } from '../classes/category';
import { ActivatedRoute } from '@angular/router';
import { CatalogManagerService } from '../catalog-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dealArr: {name: string, price: number, img: string, link: string} [] = [];
  electronicArr: {name: string, price: number, img: string, link: string} [] = [];
  houseArr: {name: string, price: number, img: string, link: string} [] = [];
  hardwareArr: {name: string, price: number, img: string, link: string} [] = [];
  public categories: any;
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute, public catManager: CatalogManagerService) {
    /*
    for (let i = 1; i < 5; i++){
      const dealitem = {
        name: 'Product ' + i,
        price: 19.99,
        img: 'assets/img/new.png',
        link: '/products/' + i + '/0'
      };
      // tslint:disable-next-line: no-unused-expression
      this.dealArr.push(dealitem);
    }
    */
   this.addAllItems();
   this.catManager.clearCatArr();
   this.catManager.setCatArr(this.activatedRoute.snapshot.data.categoryData);
  }

  addAllItems(): void{
    const productsObj: any = this.activatedRoute.snapshot.data.prodData;
    let count = 0;
    const dealNums = [14, 5, 2, 10];
    const electronicNums = [13, 12, 9, 14];
    const houseNums = [10, 3, 6, 4];
    const hardwareNums = [5, 8, 11, 7];

    // tslint:disable-next-line: forin
    for (const i in dealNums) {
      const item: {name: string, price: number, img: string, link: string, description: string} = {
        name: productsObj[dealNums[i]].name,
        price: productsObj[dealNums[i]].variantIds[0].price,
        img: '/assets/products/' + productsObj[dealNums[i]].images[0],
        link: '/products/' + dealNums[i] + '/0',
        description: productsObj[dealNums[i]].description.toString()
      };
      if (item.name.length > 30) { (item.name = item.name.substr(0, 30) + '...'); }
      if (count < 4){
        this.dealArr.push(item);
        count++;
      }
    }
    count = 0;

    // tslint:disable-next-line: forin
    for (const i in electronicNums) {
      const item: {name: string, price: number, img: string, link: string, description: string} = {
        name: productsObj[electronicNums[i]].name,
        price: productsObj[electronicNums[i]].variantIds[0].price,
        img: '/assets/products/' + productsObj[electronicNums[i]].images[0],
        link: '/products/' + electronicNums[i] + '/0',
        description: productsObj[electronicNums[i]].description.toString()
      };
      if (item.name.length > 30) { (item.name = item.name.substr(0, 30) + '...'); }
      if (count < 4){
        this.electronicArr.push(item);
        count++;
      }
    }
    count = 0;

    // tslint:disable-next-line: forin
    for (const i in houseNums) {
          const item: {name: string, price: number, img: string, link: string, description: string} = {
            name: productsObj[houseNums[i]].name,
            price: productsObj[houseNums[i]].variantIds[0].price,
            img: '/assets/products/' + productsObj[houseNums[i]].images[0],
            link: '/products/' + houseNums[i] + '/0',
            description: productsObj[houseNums[i]].description.toString()
          };
          if (item.name.length > 30) { (item.name = item.name.substr(0, 30) + '...'); }
          if (count < 4){
            this.houseArr.push(item);
            count++;
          }
        }
    count = 0;

    // tslint:disable-next-line: forin
    for (const i in hardwareNums) {
      const item: {name: string, price: number, img: string, link: string, description: string} = {
        name: productsObj[hardwareNums[i]].name,
        price: productsObj[hardwareNums[i]].variantIds[0].price,
        img: '/assets/products/' + productsObj[hardwareNums[i]].images[0],
        link: '/products/' + hardwareNums[i] + '/0',
        description: productsObj[hardwareNums[i]].description.toString()
      };
      if (item.name.length > 30) { (item.name = item.name.substr(0, 30) + '...'); }
      if (count < 4){
        this.hardwareArr.push(item);
        count++;
      }
    }
    count = 0;
  }


  ngOnInit() {

    console.log('Categories from activated route: ', this.activatedRoute.snapshot.data.categoryData);
    console.log('Products from activated route: ', this.activatedRoute.snapshot.data.prodData);
  }

}
