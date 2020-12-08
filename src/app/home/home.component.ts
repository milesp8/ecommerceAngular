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
    // tslint:disable-next-line: forin
    for (const productIndex in productsObj) {
      const item: {name: string, price: number, img: string, link: string, description: string} = {
        //_id: productsObj[productIndex]._id,
        name: productsObj[productIndex].name,
        price: productsObj[productIndex].variantIds[0].price,
        img: 'assets/img/new.png',
        link: '/products/' + productIndex + '/0',
        description: productsObj[productIndex].description.toString()

      };
      if (item.name.length > 30) { (item.name = item.name.substr(0, 30) + '...'); }
      // console.log(productsObj[productIndex].description);
      console.log(this.catManager.getName('5fc3ba1939919f84089b7407'));
      const prodCats = new Set<string>();
      productsObj[productIndex].categories.forEach(element => {
        console.log('() ' + element);
        console.log('{} ' + this.catManager.getName(element));
        prodCats.add(this.catManager.getName(element));
      });
      console.log(prodCats);
      if (prodCats.has('deal') || true)
          {this.dealArr.push(item); }
    }
  }




  ngOnInit() {


    /*
    this.appservice.getCategory('5fc3ba1939919f84089b7407').subscribe(
      data => {console.log(data)
        this.categories = data},
      error => {console.log(error)}
    )*/

    console.log("Categories from activated route: ", this.activatedRoute.snapshot.data.categoryData);
    console.log("Products from activated route: ", this.activatedRoute.snapshot.data.prodData);
  }

}
