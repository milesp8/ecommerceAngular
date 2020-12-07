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


}
