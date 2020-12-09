import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  catArr: {name: String}[] = [];
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data.catData);
    const catsObj: any = this.activatedRoute.snapshot.data.catData;

    for (const catInd in catsObj) {
      const item: {name: String} = {
        name: catsObj[catInd].name,
      }
      this.catArr.push(item);
    }
  }

   // to reload the page when some change has been made
   runInit() {
    window.location.reload();  
  }

  add(){
    let cat_name = (<HTMLInputElement>document.getElementById('newCat')).value;

    console.log('Category Name ' + cat_name);
    if(cat_name != ''){
      let cat_obj = {
        "name": cat_name,
        "products": [],
        "image": "newcat_image"
      }
      this.appservice.addCategory(cat_obj).subscribe((data) =>{
        console.log(data)
        this.runInit()
      }, (error) => {
        console.log(error)
      })
    }
  }


}
