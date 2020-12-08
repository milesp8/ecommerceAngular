import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from './app-service.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogManagerService {
  catArr: {name: string, id: string}[] = [];
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    console.log(this.activatedRoute.snapshot.data.catData);
    const catsObj: any = this.activatedRoute.snapshot.data.catData;

    for (const catInd in catsObj) {
      console.log('Found Cat');
      const item: {name: string, id: string} = {
        name: catsObj[catInd].name,
        id: catsObj[catInd]._id
      };
      this.catArr.push(item);
    }
  }
  getCatArr(): {name: string, id: string}[] {
    console.log('grabbing catArr');
    return this.catArr;
  }

  setCatArr(catsObj: any[]){

    for (const catInd in catsObj) {
      console.log(catsObj[catInd]._id);
      const item: {name: string, id: string} = {
        name: catsObj[catInd].name,
        id: catsObj[catInd]._id
      };
      this.catArr.push(item);
    }
  }

  clearCatArr(){
    this.catArr = [];
  }

  getId(name: string): string{
    for (let i = 0; i < this.catArr.length; i++){
      if (name === this.catArr[i].name){
        return this.catArr[i].id;
      }
    }
    return 'failed to find name';
  }

  getName(id: string): string{
    for (let i = 0; i < this.catArr.length; i++){
      if (id === this.catArr[i].id){
        return this.catArr[i].name;
      }
    }
    return 'failed to find name';
  }


}
