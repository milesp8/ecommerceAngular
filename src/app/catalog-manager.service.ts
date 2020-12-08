import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from './app-service.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogManagerService {
  catArr: {name: String}[] = [];
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    console.log(this.activatedRoute.snapshot.data.catData);
    const catsObj: any = this.activatedRoute.snapshot.data.catData;

    for (const catInd in catsObj) {
      console.log("Found Cat");
      const item: {name: String} = {
        name: catsObj[catInd].name,
      }
      this.catArr.push(item);
    }
  }
  getCatArr(): {name: String}[] {
    console.log("grabbing catArr");
    return this.catArr;
  }

  setCatArr(catsObj: any[]){

    for (const catInd in catsObj) {
      console.log("Found Cat");
      const item: {name: String} = {
        name: catsObj[catInd].name,
      }
      this.catArr.push(item);
    }
  }

  clearCatArr(){
    this.catArr = [];
  }

 
}
