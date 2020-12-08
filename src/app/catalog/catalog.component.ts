import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { CartManagerService } from '../cart-manager.service';
import { CatalogManagerService } from '../catalog-manager.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
 itemArr: {name: string, price: number, img: string, link: string, description: string} [] = [];
 category = '';
 title = 'Our Full Catalog';
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute, private catManager: CatalogManagerService) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data.prodData);
    // console.log(this.activatedRoute.snapshot.data['categoryData'])

    this.activatedRoute.paramMap.subscribe(params => {
      this.category = params.get('category');
      if (this.category != null){this.title = this.category; }
    });

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
      if (prodCats.has(this.category) || this.category == null)
          {this.itemArr.push(item); }
    }
  }

  async testFunction(prodObj: any, _id: Object) {
    //let returnObj: any
    console.log("Button clicked object passed: ", prodObj)
    let returnObj: any
    await this.appservice.specificProduct(_id).subscribe(
      data => {
        returnObj = data
      }, error => { throw error}
    )

    console.log(returnObj)


  }

}
