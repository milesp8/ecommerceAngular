import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service'
import { ICategory } from '../classes/category'
import { ActivatedRoute } from '@angular/router';
import { CatalogManagerService } from '../catalog-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dealArr: {name: string, price: number, img: string, link: string} [] = [];
  public categories: any
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute, public catManager: CatalogManagerService) {
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
  }




  ngOnInit() {


    /*
    this.appservice.getCategory('5fc3ba1939919f84089b7407').subscribe(
      data => {console.log(data)
        this.categories = data},
      error => {console.log(error)}
    )*/

    console.log("Categories from activated route: ", this.activatedRoute.snapshot.data.categoryData)
    this.catManager.setCatArr(this.activatedRoute.snapshot.data.categoryData);
    console.log("Products from activated route: ", this.activatedRoute.snapshot.data.prodData)
  }

}
